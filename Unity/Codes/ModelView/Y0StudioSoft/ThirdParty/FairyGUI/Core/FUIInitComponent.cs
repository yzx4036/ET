
using System;
using System.Collections.Generic;
using FairyGUI;
using UnityEngine;
using UnityEngine.Rendering.Universal;
using static FairyGUI.UIContentScaler;

namespace ET
{
    [FriendClass(typeof(FUIInitComponent))]
    public static class FUIInitComponentSystem
    {
        [ObjectSystem]
        public class FUIInitComponentAwakeSystem : AwakeSystem<FUIInitComponent>
        {
            public override void Awake(FUIInitComponent self)
            {
                GRoot.inst.SetContentScaleFactor(1080,1920,ScreenMatchMode.MatchWidthOrHeight);
                // 摄像机堆叠处理
                var stageCamera = FairyGUI.StageCamera.main;
                var cameraData = stageCamera.GetUniversalAdditionalCameraData();
                cameraData.renderType = CameraRenderType.Overlay;
                Camera.main.GetUniversalAdditionalCameraData().cameraStack.Add(stageCamera);
                UIConfig.defaultFont = "KaiTi";
                GameObject.DontDestroyOnLoad(stageCamera);
            }
        }
        
        [ObjectSystem]
        public class FUIInitComponentDestroySystem : DestroySystem<FUIInitComponent>
        {
            public override void Destroy(FUIInitComponent self)
            {
                for (int i = 0; i < self._initPackageArray.Length; i++)
                {
                    Game.Scene.GetComponent<FUIPackageComponent>().EnsureRemovePackage(self._initPackageArray[i]);
                }
            }
        }
        
        public static async ETTask Init(this FUIInitComponent self)
        {
            var _fuiPackComp = Game.Scene.GetComponent<FUIPackageComponent>();
            if (_fuiPackComp == null)
            {
                _fuiPackComp = Game.Scene.AddComponent<FUIPackageComponent>();
            }
            for (int i = 0; i < self._initPackageArray.Length; i++)
            {
                await _fuiPackComp.EnsurePackageLoadedAsync(self._initPackageArray[i]);
            }
        }
    }

    [ComponentOf(typeof(Scene))]
    public class FUIInitComponent: Entity, IAwake, IDestroy
    {
        public readonly string[] _initPackageArray =
        {
            // FUIPackage.CommonAsset,
            // FUIPackage.CommonComp,
        };
    }
}