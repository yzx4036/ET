
using System;
using System.Collections.Generic;
using FairyGUI;
using UnityEngine;
using UnityEngine.Rendering.Universal;
using static FairyGUI.UIContentScaler;

namespace ET
{
    public class FUIInitComponent: Entity, IAwake
    {
        private readonly string[] _initPackageArray =
        {
            // FUIPackage.CommonAsset,
            // FUIPackage.CommonComp,
        };
        public async ETTask Init()
        {
            var _fuiPackComp = Game.Scene.GetComponent<FUIPackageComponent>();
            if (_fuiPackComp == null)
            {
                _fuiPackComp = Game.Scene.AddComponent<FUIPackageComponent>();
            }

            GRoot.inst.SetContentScaleFactor(1080,1920,ScreenMatchMode.MatchWidthOrHeight);
            // 摄像机堆叠处理
            var stageCamera = FairyGUI.StageCamera.main;
            var cameraData = stageCamera.GetUniversalAdditionalCameraData();
            cameraData.renderType = CameraRenderType.Overlay;
            Camera.main.GetUniversalAdditionalCameraData().cameraStack.Add(stageCamera);
            UIConfig.defaultFont = "KaiTi";
            GameObject.DontDestroyOnLoad(stageCamera);
            for (int i = 0; i < _initPackageArray.Length; i++)
            {
                await _fuiPackComp.EnsurePackageLoadedAsync(_initPackageArray[i]);
            }
        }

        public override void Dispose()
        {
            if (IsDisposed)
            {
                return;
            }
            for (int i = 0; i < _initPackageArray.Length; i++)
            {
                Game.Scene.GetComponent<FUIPackageComponent>().EnsureRemovePackage(_initPackageArray[i]);
            }
            base.Dispose();
        }
    }
}