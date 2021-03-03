using System;
using FairyGUI;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.AddressableAssets;

#if !UNITY_EDITOR
using UnityEngine;
#endif

namespace ETModel
{
    /// <summary>
    /// 管理所有UI Package
    /// </summary>
    public class FUIPackageComponent : Component
    {
#if UNITY_EDITOR
        public const string FUI_PACKAGE_DIR = "Assets/Bundles/UI";
#endif

        private readonly Dictionary<string, UIPackage> packages = new Dictionary<string, UIPackage>();


        public void AddPackage(string type)
        {
#if UNITY_EDITOR
            UIPackage uiPackage = UIPackage.AddPackage($"{FUI_PACKAGE_DIR}/{type}/{type}");
#else
            string uiBundleDesName = $"{type}_fui".StringToAB();
            string uiBundleResName = type.StringToAB();
            ResourcesComponent resourcesComponent = Game.Scene.GetComponent<ResourcesComponent>();
            resourcesComponent.LoadBundle(uiBundleDesName);
            resourcesComponent.LoadBundle(uiBundleResName);

            AssetBundle desAssetBundle = resourcesComponent.GetAssetBundle(uiBundleDesName);
            AssetBundle resAssetBundle = resourcesComponent.GetAssetBundle(uiBundleResName);
            UIPackage uiPackage = UIPackage.AddPackage(desAssetBundle, resAssetBundle);
#endif
            packages.Add(type, uiPackage);
        }

        public async ETTask AddPackageAsync(string type)
        {
#if UNITY_EDITOR
            await ETTask.CompletedTask;

            UIPackage uiPackage = UIPackage.AddPackage($"{FUI_PACKAGE_DIR}/{type}/{type}");
#else
            string uiBundleDesName = $"{type}_fui".StringToAB();
            string uiBundleResName = type.StringToAB();
            ResourcesComponent resourcesComponent = Game.Scene.GetComponent<ResourcesComponent>();
            await resourcesComponent.LoadBundleAsync(uiBundleDesName);
            await resourcesComponent.LoadBundleAsync(uiBundleResName);

            AssetBundle desAssetBundle = resourcesComponent.GetAssetBundle(uiBundleDesName);
            AssetBundle resAssetBundle = resourcesComponent.GetAssetBundle(uiBundleResName);
            UIPackage uiPackage = UIPackage.AddPackage(desAssetBundle, resAssetBundle);
#endif
            // var pkgAsset = await Addressables.LoadAssetAsync<TextAsset>(address).Task;
            //
            // UIPackage.AddPackage(
            //     pkgAsset.bytes,
            //     packageName,
            //     async (string name, string extension, Type type, PackageItem ite) => {
            //         Log.Info($"{name}, {extension}, {type.ToString()}, {ite.ToString()}");
            //
            //         if (type == typeof(Texture))
            //         {
            //             Texture t = await Addressables.LoadAssetAsync<Texture>(name + extension).Task;
            //             ite.owner.SetItemAsset(ite, t, DestroyMethod.Custom);
            //
            //         }
            //     });
            // Addressables.Release(pkgAsset);
            
            packages.Add(type, uiPackage);
        }

        public void RemovePackage(string type)
        {
            UIPackage package;

            if (packages.TryGetValue(type, out package))
            {
                var p = UIPackage.GetByName(package.name);

                if (p != null)
                {
                    UIPackage.RemovePackage(package.name);
                }

                packages.Remove(package.name);
            }

#if !UNITY_EDITOR
            string uiBundleDesName = $"{type}_fui".StringToAB();
            string uiBundleResName = type.StringToAB();
			ETModel.Game.Scene.GetComponent<ResourcesComponent>().UnloadBundle(uiBundleDesName);
			ETModel.Game.Scene.GetComponent<ResourcesComponent>().UnloadBundle(uiBundleResName);
#endif
        }
    }
}