/*----------------------------------------------------------------
// 文件名称：AddressablesResComponent
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
using UnityEngine.ResourceManagement.AsyncOperations;
using UnityEngine.ResourceManagement.ResourceProviders;
using Object = UnityEngine.Object;

namespace SEyesSoft.ET
{
    [ObjectSystem]
    public class AddressablesResComponentAwakeSystem: AwakeSystem<AddressablesResComponent>
    {
        public override void Awake(AddressablesResComponent self)
        {
            self.Awake();
        }
    }

    public class AddressablesResComponent: Entity, IAwake
    {
        private GameObjectMgr goMgrInst;
        private AddressableMgr addressableMgrInst;
        public static AddressablesResComponent Instance { get; set; }

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
        ///  实例化
        /// </summary>
        /// <param name="pBundleName"></param>
        /// <param name="pAssetName"></param>
        public async Task<GameObject> InstantiateAsync(string pAdsPath, Transform parent = null, bool instantiateInWorldSpace = false)
        {
            return await this.goMgrInst.GetGameObjectAsync(pAdsPath, parent, instantiateInWorldSpace);
        }

        /// <summary>
        /// 回收
        /// </summary>
        /// <param name="pAdsPath"></param>
        /// <param name="go"></param>
        public void RecycleGameObject(string pAdsPath, GameObject go)
        {
            if (go == null)
            {
                return;
            }
            this.goMgrInst.RecycleGameObject(pAdsPath, go);
        }

        /// <summary>
        /// 获取对应lable的资源object列表
        /// </summary>
        /// <param name="label"></param>
        /// <returns></returns>
        public async Task<IList<T>> GetAssetsAsync<T>(string label)
        {
             return await this.addressableMgrInst.LoadAssetsAsync<T>(new []{label});
        }
        
        public async Task<T> GetAssetAsync<T>(string pAdsPath)
        {
            return await this.addressableMgrInst.LoadAssetAsync<T>(pAdsPath);
        }

        public async Task LoadSceneAsync(string pAdsPath, Action<AsyncOperationHandle<SceneInstance>> pResultHandleCallback)
        {
            await this.addressableMgrInst.LoadSceneAsync(pAdsPath,  pResultHandleCallback);
        }

        public async Task UnLoadSceneAsync(AsyncOperationHandle<SceneInstance> sceneHandle)
        {
            await this.addressableMgrInst.UnloadSceneAsync(sceneHandle);
        }

    }
}