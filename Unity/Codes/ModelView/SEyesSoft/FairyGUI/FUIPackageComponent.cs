using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using FairyGUI;
using SEyesSoft.ET;
using UnityEngine;


namespace ET
{
    /// <summary>
    /// 管理所有UI Package
    /// </summary>
    public class FUIPackageComponent : Entity, IAwake
    {
        private static Dictionary<string, UIPackage> s_Packages = new Dictionary<string, UIPackage>();
        private static Dictionary<string, int> s_PackagesRefCount = new Dictionary<string, int>();

        public async ETTask<UIPackage> AddPackageAsync(string type)
        {
            if (s_Packages.ContainsKey(type))
            {
                return s_Packages[type];
            }

            var _addressPath = AssetsHelper.GetPath(type + "_fui", AssetsType.FUI);
            TextAsset desTextAsset = await AddressablesResComponent.Instance.GetAssetAsync<TextAsset>(_addressPath);
            if (desTextAsset != null)
            {
                s_Packages.Add(type, SEyesSoft.Common.Util.FUiUIPackageAddPackageCallbackAsync(desTextAsset.bytes, type, LoadPackageInternalAsync));
                return s_Packages[type];
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

        public bool IsPackageLoaded(string pkgName)
        {
            return s_Packages.ContainsKey(pkgName);
        }

        public UIPackage GetPackage(string pkgName)
        {
            if (IsPackageLoaded(pkgName))
            {
                return s_Packages[pkgName];
            }
            return null;
        }


        public async ETTask<bool> EnsurePackageLoadedAsync(string pkgName)
        {
            UIPackage _pkg = null;
            if (!IsPackageLoaded(pkgName))
            {
                Log.Debug($"{pkgName} 包未加载，需要加载！！异步加载");
                _pkg = await AddPackageAsync(pkgName);
                if (_pkg != null)
                {
                    HandlePackageRefCount(pkgName, 1);
                }
            }
            if (_pkg == null)
            {
                _pkg = GetPackage(pkgName);
            } 
            foreach (var pkgDependency in _pkg.dependencies)
            {
                foreach (var dep in pkgDependency)
                {
                    if (dep.Key == "name")
                    {
                        await EnsurePackageLoadedAsync(dep.Value);
                    }
                }
            }
            return true;
        }

        public void EnsureRemovePackage(string pPkgName, bool pIsDepend = false)
        {
            HandlePackageRefCount(pPkgName, -1, pIsDepend);
        }

        /// <summary>
        /// 移除一个包，并清理其asset
        /// </summary>
        /// <param name="type"></param>
        private void RemovePackage(string type, bool pIsDepend = false)
        {
            UIPackage package;

            if (s_Packages.TryGetValue(type, out package))
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
                                EnsureRemovePackage(dep.Value, true);
                            }
                        }
                    }
                }
                s_Packages.Remove(package.name);
            }

            foreach (var uiPackage in s_Packages)
            {
                Log.Debug($">>>>{uiPackage.Key} {uiPackage.Value.name} {s_PackagesRefCount[uiPackage.Key]}");
            }
        }

        public void HandlePackageRefCount(string pType, int pDelta, bool pIsDepend = false)
        {
            if (s_PackagesRefCount.ContainsKey(pType))
            {
                s_PackagesRefCount[pType] += pDelta;
            }
            else
            {
                s_PackagesRefCount[pType] = 1;
            }
            Log.Debug($">>>>pType:{pType}, pDelta: {pDelta}, {s_PackagesRefCount[pType]}");
            if (s_PackagesRefCount[pType] == 0)
            {
                RemovePackage(pType, pIsDepend);
            }
        }
    }
}