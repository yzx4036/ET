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

        public void AddPackage(string type, Action onAddPackageCompleteCallback)
        {
            if (s_Packages.ContainsKey(type))
            {
                return;
            }
            // AssetsBundleHelper
            
            //todo 接入资源管理后 
            // TextAsset v = await AddressablesResComponent.Instance.GetAssetAsync<TextAsset>(type + "_fui", AssetsType.FUI);
            // AddressablesResComponent.Instance.
            // AssetsHelper.LoadAsset<TextAsset>(type + "_fui", AssetsType.FUI, desTextAsset =>
            // {
            //     if (desTextAsset != null)
            //     {
            //         s_Packages.Add(type, SEyesSoft.Common.Util.FUiUIPackageAddPackageCallbackAsync(desTextAsset.bytes, type, LoadPackageInternalPackageItem));
            //         Debug.Log($">>>>>>AddPackage  desTextAsset :{desTextAsset}");
            //         if (onAddPackageCompleteCallback != null)
            //         {
            //             onAddPackageCompleteCallback();
            //         }
            //     }
            // });
            
            
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
            // AssetsHelper.LoadAsset<Texture>(name + extension, AssetsType.FUISprite, texture =>
            // {
            //     item.owner.SetItemAsset(item, texture, DestroyMethod.Unload);
            // });
        }
        
        public async ETTask AddPackageAsync(string type)
        {
            if (s_Packages.ContainsKey(type))
            {
                return;
            }

            var _addressPath = AssetsHelper.GetPath(type + "_fui", AssetsType.FUI);
            TextAsset desTextAsset = await AddressablesResComponent.Instance.GetAssetAsync<TextAsset>(_addressPath);
            if (desTextAsset != null)
            {
                s_Packages.Add(type, SEyesSoft.Common.Util.FUiUIPackageAddPackageCallbackAsync(desTextAsset.bytes, type, LoadPackageInternalAsync));
            }
            await Task.CompletedTask;
            // TextAsset desTextAsset =
            //     await AssetsHelper.LoadAssetAsync<TextAsset>(type + "_fui", AssetsType.FUI);
            // if (desTextAsset != null)
            // {
            //     s_Packages.Add(type, SEyesSoft.Common.Util.FUiUIPackageAddPackageCallbackAsync(desTextAsset.bytes, type, LoadPackageInternalAsync));
            // }
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
            Texture texture  = await AddressablesResComponent.Instance.GetAssetAsync<Texture>(_addressPath);
            item.owner.SetItemAsset(item, texture, DestroyMethod.Unload);
            await Task.CompletedTask;
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