/*----------------------------------------------------------------
// 文件名称：ResFSComponent
// 创 建 者：yezhenxian
// 创建时间：2021年12月03日 星期五 13:33
//===============================================================
// 功能描述：
//		
//
//----------------------------------------------------------------*/

using System.Collections.Generic;
using BundleSystem;
using ET;
using UnityEngine;
using UnityFS;
using Object = UnityEngine.Object;

namespace SEyesSoft.ET
{
    [ObjectSystem]
    public class ResFSComponentAwakeSystem: AwakeSystem<ResFSComponent>
    {
        public override void Awake(ResFSComponent self)
        {
            self.Awake();
        }
    }

    public class ResFSComponent: Entity
    {
        public static ResFSComponent Instance { get; set; }
        private static ResourceManager _fsResourceManager = null;
        
        public void Awake()
        {
            _fsResourceManager = ResourceManager.
        }
        
        public override void Dispose()
        {
            if (this.IsDisposed)
            {
                return;
            }

            base.Dispose();
            BundleManager.Clear();
            Instance = null;
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="pBundleName"></param>
        /// <param name="pAssetName"></param>
        public GameObject Instantiate(string pBundleName, string pAssetName)
        {
            var loadedAsset = BundleManager.Load<GameObject>(pBundleName, pAssetName);
            GameObject go = null;
            if(loadedAsset != null)
            {
                go = BundleManager.Instantiate(loadedAsset);
                BundleManager.ReleaseObject(loadedAsset);
            }
            return go;
        }

        // public T GetAsset<T>(string pBundleName, string pAssetName) where T : UnityEngine.Object
        // {
        //     var loadedAsset = BundleManager.Load<T>(pBundleName, pAssetName);
        //     
        //     BundleManager.ReleaseObject(loadedAsset);
        //     
        // }
    }
}