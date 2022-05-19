using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FairyGUI;
using Y0StudioSoft.ET;
using Y0StudioSoft.Common;
using UnityEngine;


namespace ET
{
    [FriendClass(typeof (FUIPackageComponent))]
    public static class FUIPackageComponentSystem
    {
        [ObjectSystem]
        public class FUIPackageComponentAwakeSystem: AwakeSystem<FUIPackageComponent>
        {
            public override void Awake(FUIPackageComponent self)
            {
                self.s_Packages = new Dictionary<string, UIPackage>();
                self.s_PackagesRefCount = new Dictionary<string, int>();
            }
        }

        [ObjectSystem]
        public class FUIPackageComponentDestroySystem: DestroySystem<FUIPackageComponent>
        {
            public override void Destroy(FUIPackageComponent self)
            {
                var _pkgNameArray = self.s_Packages.Keys.ToArray();
                foreach (var name in _pkgNameArray)
                {
                    self.EnsureRemovePackage(name);
                }
                self.s_Packages.Clear();
                self.s_Packages = null;
                self.s_PackagesRefCount.Clear();
                self.s_PackagesRefCount = null;
            }
        }
        
        public static async ETTask<UIPackage> AddPackageAsync(this FUIPackageComponent self, string type)
        {
            if (self.s_Packages.ContainsKey(type))
            {
                return self.s_Packages[type];
            }

            var _addressPath = AssetsHelper.GetPath(type + "_fui", AssetsType.FUI);
            TextAsset desTextAsset = await AddressablesResComponent.Instance.GetAssetAsync<TextAsset>(_addressPath);
            if (desTextAsset != null)
            {
                self.s_Packages.Add(type, Util.FUiUIPackageAddPackageCallbackAsync(desTextAsset.bytes, type, LoadPackageInternalAsync));
                return self.s_Packages[type];
            }
            return null;
        }

        /// <summary>
        /// 加载资源的异步委托
        /// </summary>
        /// <param name="name">注意，这个name是FGUI内部组装的纹理全名，例如FUILogin_atlas0</param>
        /// <param name="extension"></param>
        /// <param name="type"></param>
        /// <param name="item"></param>
        private static async void LoadPackageInternalAsync(string name, string extension, System.Type type,
            PackageItem item)
        {
            var _addressPath = AssetsHelper.GetPath(name + extension, AssetsType.FUISprite);
            Log.Debug($"LoadPackageInternalAsync>>>>>>>>>{_addressPath}");
            Texture texture  = await AddressablesResComponent.Instance.GetAssetAsync<Texture>(_addressPath);
            item.owner.SetItemAsset(item, texture, DestroyMethod.Unload);
            await Task.CompletedTask;
        }

        public static bool IsPackageLoaded(this FUIPackageComponent self, string pkgName)
        {
            return self.s_Packages.ContainsKey(pkgName);
        }

        public static UIPackage GetPackage(this FUIPackageComponent self, string pkgName)
        {
            if (self.IsPackageLoaded(pkgName))
            {
                return self.s_Packages[pkgName];
            }
            return null;
        }


        public static async ETTask<bool> EnsurePackageLoadedAsync(this FUIPackageComponent self, string pkgName)
        {
            UIPackage _pkg = null;
            if (!self.IsPackageLoaded(pkgName))
            {
                Log.Debug($"{pkgName} 包未加载，需要加载！！异步加载");
                _pkg = await self.AddPackageAsync(pkgName);
                if (_pkg != null)
                {
                    HandlePackageRefCount(self, pkgName, 1);
                }
            }
            if (_pkg == null)
            {
                _pkg = self.GetPackage(pkgName);
            } 
            foreach (var pkgDependency in _pkg.dependencies)
            {
                foreach (var dep in pkgDependency)
                {
                    if (dep.Key == "name")
                    {
                        await self.EnsurePackageLoadedAsync(dep.Value);
                    }
                }
            }
            return true;
        }

        public static void EnsureRemovePackage(this FUIPackageComponent self, string pPkgName, bool pIsDepend = false)
        {
            HandlePackageRefCount(self, pPkgName, -1, pIsDepend);
        }

        /// <summary>
        /// 移除一个包，并清理其asset
        /// </summary>
        /// <param name="type"></param>
        private static void RemovePackage(this FUIPackageComponent self, string type, bool pIsDepend = false)
        {
            UIPackage package;

            if (self.s_Packages.TryGetValue(type, out package))
            {
                var p = UIPackage.GetByName(package.name);
                if (p != null)
                {
                    UIPackage.RemovePackage(package.name);
                }

                if (!pIsDepend)
                {
                    foreach (var pkgDependency in package.dependencies)
                    {
                        foreach (var dep in pkgDependency)
                        {
                            if (dep.Key == "name")
                            {
                                self.EnsureRemovePackage(dep.Value, true);
                            }
                        }
                    }
                }
                self.s_Packages.Remove(package.name);
            }

            foreach (var uiPackage in self.s_Packages)
            {
                Log.Debug($">>>>{uiPackage.Key} {uiPackage.Value.name} {self.s_PackagesRefCount[uiPackage.Key]}");
            }
        }

        private static void HandlePackageRefCount(FUIPackageComponent self, string pType, int pDelta, bool pIsDepend = false)
        {
            if (self.s_PackagesRefCount.ContainsKey(pType))
            {
                if (self.s_PackagesRefCount[pType] < 0)
                {
                    return;
                }
                self.s_PackagesRefCount[pType] += pDelta;
            }
            else
            {
                self.s_PackagesRefCount[pType] = 1;
            }
            Log.Debug($">>>>pType:{pType}, pDelta: {pDelta}, {self.s_PackagesRefCount[pType]}");
            if (self.s_PackagesRefCount[pType] <= 0)
            {
                self.RemovePackage(pType, pIsDepend);
            }
        }
    }

    /// <summary>
    /// 管理所有UI Package
    /// </summary>
    public class FUIPackageComponent : Entity, IAwake, IDestroy
    {
        public Dictionary<string, UIPackage> s_Packages = new Dictionary<string, UIPackage>();
        public Dictionary<string, int> s_PackagesRefCount = new Dictionary<string, int>();
    }
}