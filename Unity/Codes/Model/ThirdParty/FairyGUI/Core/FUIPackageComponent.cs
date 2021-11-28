using System;
using System.Collections.Generic;
using FairyGUI;
using UnityEngine;


namespace ET
{
    /// <summary>
    /// 管理所有UI Package
    /// </summary>
    public class FUIPackageComponent : Entity
    {
        private static Dictionary<string, UIPackage> s_Packages = new Dictionary<string, UIPackage>();

        public void AddPackage(string type, Action onAddPackageCompleteCallback)
        {
            if (s_Packages.ContainsKey(type))
            {
                return;
            }

            AssetsHelper.LoadAsset<TextAsset>(type + "_fui", AssetsType.FUI, desTextAsset =>
            {
                if (desTextAsset != null)
                {
                    s_Packages.Add(type, SEyesSoft.Common.Util.FUiUIPackageAddPackageCallbackAsync(desTextAsset.bytes, type, LoadPackageInternalPackageItem));
                    Debug.Log($">>>>>>AddPackage  desTextAsset :{desTextAsset}");
                    if (onAddPackageCompleteCallback != null)
                    {
                        onAddPackageCompleteCallback();
                    }
                }
            });
            
            
        }
        
        /// <summary>
        /// 加载资源的同步委托
        /// </summary>
        /// <param name="name">注意，这个name是FGUI内部组装的纹理全名，例如FUILogin_atlas0</param>
        /// <param name="extension"></param>
        /// <param name="type"></param>
        /// <param name="item"></param>
        private static void LoadPackageInternalPackageItem(string name, string extension, System.Type type,
            PackageItem item)
        {
            AssetsHelper.LoadAsset<Texture>(name + extension, AssetsType.FUISprite, texture =>
            {
                item.owner.SetItemAsset(item, texture, DestroyMethod.Unload);
            });
        }
        
        public async ETTask AddPackageAsync(string type)
        {
            if (s_Packages.ContainsKey(type))
            {
                return;
            }

            TextAsset desTextAsset =
                await AssetsHelper.LoadAssetAsync<TextAsset>(type + "_fui", AssetsType.FUI);
            if (desTextAsset != null)
            {
                s_Packages.Add(type, SEyesSoft.Common.Util.FUiUIPackageAddPackageCallbackAsync(desTextAsset.bytes, type, LoadPackageInternalAsync));
            }
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
            Texture texture =
                await AssetsHelper.LoadAssetAsync<Texture>(name + extension, AssetsType.FUISprite);

            item.owner.SetItemAsset(item, texture, DestroyMethod.Unload);
        }

        public bool IsPackageLoaded(string pkgName)
        {
            return s_Packages.ContainsKey(pkgName);
        }

        public void EnsurePackageLoaded(string pkgName, Action pkgLoadedCallback)
        {
            if (!IsPackageLoaded(pkgName))
            { 
                Log.Debug($"{pkgName} 包未加载，需要加载！！同步加载");
                AddPackage(pkgName, pkgLoadedCallback);
            }
            else
            {
                if (pkgLoadedCallback != null)
                {
                    pkgLoadedCallback();
                }
            }
        }
        
        public async ETTask<bool> EnsurePackageLoadedAsync(string pkgName)
        {
            if (!IsPackageLoaded(pkgName))
            {
                Log.Debug($"{pkgName} 包未加载，需要加载！！异步加载");
                await AddPackageAsync(pkgName);
            }
            return true;
        }

        /// <summary>
        /// 移除一个包，并清理其asset
        /// </summary>
        /// <param name="type"></param>
        public void RemovePackage(string type)
        {
            UIPackage package;

            if (s_Packages.TryGetValue(type, out package))
            {
                var p = UIPackage.GetByName(package.name);
                if (p != null)
                {
                    UIPackage.RemovePackage(package.name);

                    // Assets.RemoveUnusedAssets();
                }

                s_Packages.Remove(package.name);
            }
        }
    }
}