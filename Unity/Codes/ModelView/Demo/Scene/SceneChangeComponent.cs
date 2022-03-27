using UnityEngine;
using UnityEngine.ResourceManagement.AsyncOperations;
using UnityEngine.ResourceManagement.ResourceProviders;

namespace ET
{
    public class SceneChangeComponent: Entity, IAwake, IUpdate, IDestroy
    {
        public AsyncOperationHandle<SceneInstance>? loadMapOperation;
        public ETTask tcs;
    }
}