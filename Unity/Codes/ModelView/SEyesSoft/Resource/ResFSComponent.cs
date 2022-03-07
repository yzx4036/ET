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

    public class ResFSComponent: Entity, IAwake
    {
        public static ResFSComponent Instance { get; set; }
        
        public void Awake()
        {
        }
        
        public override void Dispose()
        {
            if (this.IsDisposed)
            {
                return;
            }

            base.Dispose();
            Instance = null;
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