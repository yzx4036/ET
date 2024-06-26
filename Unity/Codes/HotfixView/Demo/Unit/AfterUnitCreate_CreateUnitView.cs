﻿using System.Threading.Tasks;
using ET.EventType;
using Y0StudioSoft.ET;
using UnityEngine;

namespace ET
{
    public class AfterUnitCreate_CreateUnitView: AEventAsync<EventType.AfterUnitCreate>
    {
        protected override async ETTask Run(AfterUnitCreate args)
        {
            // Unit View层
            // 这里可以改成异步加载，demo就不搞了
            // GameObject bundleGameObject = (GameObject)ResourcesComponent.Instance.GetAsset("Unit.unity3d", "Unit");
            // GameObject prefab = bundleGameObject.Get<GameObject>("Skeleton");
            
            GameObject bundleGameObject = await AddressablesResComponent.Instance.GetAssetAsync<GameObject>("Unit");
            GameObject prefab = bundleGameObject.Get<GameObject>("Skeleton");
            GameObject go = UnityEngine.Object.Instantiate(prefab, GlobalComponent.Instance.Unit, true);
            
            go.transform.position = args.Unit.Position;
            args.Unit.AddComponent<GameObjectComponent>().GameObject = go;
            args.Unit.AddComponent<AnimatorComponent>();
            await ETTask.CompletedTask;
        }
    }
}