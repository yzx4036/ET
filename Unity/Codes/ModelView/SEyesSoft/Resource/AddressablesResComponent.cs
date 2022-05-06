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
    [FriendClass(typeof (AddressablesResComponent))]
    public static class AddressablesResComponentSystem
    {
        [ObjectSystem]
        public class AddressablesResComponentAwakeSystem: AwakeSystem<AddressablesResComponent>
        {
            public override void Awake(AddressablesResComponent self)
            {
                AddressablesResComponent.Instance = self;
                self.goMgrInst = GameObjectMgr.Instance;
                self.addressableMgrInst = AddressableMgr.Instance;
            }
        }
        
        [ObjectSystem]
        public class AddressablesResComponentDestroySystem: DestroySystem<AddressablesResComponent>
        {
            public override void Destroy(AddressablesResComponent self)
            {
                AddressablesResComponent.Instance = null;
                self.goMgrInst = null;
                self.addressableMgrInst = null;
            }
        }

        /// <summary>
        ///  实例化
        /// </summary>
        /// <param name="pBundleName"></param>
        /// <param name="pAssetName"></param>
        public static async Task<GameObject> InstantiateAsync(this AddressablesResComponent self, string pAdsPath, Transform parent = null, bool instantiateInWorldSpace = false)
        {
            return await self.goMgrInst.GetGameObjectAsync(pAdsPath, parent, instantiateInWorldSpace);
        }

        /// <summary>
        /// 回收
        /// </summary>
        /// <param name="pAdsPath"></param>
        /// <param name="go"></param>
        public static void RecycleGameObject(this AddressablesResComponent self, string pAdsPath, GameObject go)
        {
            if (go == null)
            {
                return;
            }
            self.goMgrInst.RecycleGameObject(pAdsPath, go);
        }

        /// <summary>
        /// 获取对应lable的资源object列表
        /// </summary>
        /// <param name="label"></param>
        /// <returns></returns>
        public static async Task<IList<T>> GetAssetsAsync<T>(this AddressablesResComponent self, string label)
        {
            return await self.addressableMgrInst.LoadAssetsAsync<T>(new []{label});
        }
        
        public static async Task<T> GetAssetAsync<T>(this AddressablesResComponent self, string pAdsPath)
        {
            return await self.addressableMgrInst.LoadAssetAsync<T>(pAdsPath);
        }

        public static async Task LoadSceneAsync(this AddressablesResComponent self, string pAdsPath, Action<AsyncOperationHandle<SceneInstance>> pResultHandleCallback)
        {
            await self.addressableMgrInst.LoadSceneAsync(pAdsPath,  pResultHandleCallback);
        }

        public static async Task UnLoadSceneAsync(this AddressablesResComponent self, AsyncOperationHandle<SceneInstance> sceneHandle)
        {
            await self.addressableMgrInst.UnloadSceneAsync(sceneHandle);
        }

    }

    public class AddressablesResComponent: Entity, IAwake, IDestroy
    {
        public GameObjectMgr goMgrInst;
        public AddressableMgr addressableMgrInst;
        public static AddressablesResComponent Instance { get; set; }
    }
}