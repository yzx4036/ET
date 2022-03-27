/*----------------------------------------------------------------
// 文件名称：ResComponent
// 创 建 者：yezhenxian
// 创建时间：2021年12月03日 星期五 13:33
//===============================================================
// 功能描述：
//		
//
//----------------------------------------------------------------*/

using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using ET;
using UnityEngine;
using Object = UnityEngine.Object;

namespace SEyesSoft.ET
{
    [ObjectSystem]
    public class ResComponentAwakeSystem: AwakeSystem<ResComponent>
    {
        public override void Awake(ResComponent self)
        {
            self.Awake();
        }
    }

    public class ResComponent: Entity, IAwake
    {
        private GameObjectMgr goMgrInst;
        private AddressableMgr addressableMgrInst;
        public static ResComponent Instance { get; set; }

        public void Awake()
        {
            Instance = this;
            goMgrInst = GameObjectMgr.Instance;
            addressableMgrInst = AddressableMgr.Instance;
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

        /// <summary>
        /// 
        /// </summary>
        /// <param name="pBundleName"></param>
        /// <param name="pAssetName"></param>
        public async Task<GameObject> InstantiateAsync(string pAdsPath, Transform parent = null, bool instantiateInWorldSpace = false)
        {
            return await this.goMgrInst.GetGameObjectAsync(pAdsPath, parent, instantiateInWorldSpace);
        }

        public void RecycleGameObject(string pAdsPath, GameObject go)
        {
            if (go == null)
            {
                return;
            }
            this.goMgrInst.RecycleGameObject(pAdsPath, go);
        }

        public async Task<IList<object>> GetBundleAll(string label)
        {
             return await this.addressableMgrInst.LoadAssetsAsync<object>(new []{label});
        }

    }
}