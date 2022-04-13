
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
            FUIPackage.CommonAsset,
            // FUIPackage.CommonComp,
            FUIPackage.FLogin,
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
            for (int i = 0; i < _initPackageArray.Length; i++)
            {
                await _fuiPackComp.AddPackageAsync(_initPackageArray[i]);
            }
            
            // await Game.Scene.GetComponent<FUIPackageComponent>().AddPackageAsync(FUIPackage.FLogin);
            // await Game.Scene.GetComponent<FUIPackageComponent>().AddPackageAsync(FUIPackage.UICharacterSelect);
            // await Game.Scene.GetComponent<FUIPackageComponent>().AddPackageAsync(FUIPackage.UIMain);
            // await Game.Scene.GetComponent<FUIPackageComponent>().AddPackageAsync(FUIPackage.UIEquip);
            // await Game.Scene.GetComponent<FUIPackageComponent>().AddPackageAsync(FUIPackage.UIBag);
            // await Game.Scene.GetComponent<FUIPackageComponent>().AddPackageAsync(FUIPackage.UIBattle);
            // await Game.Scene.GetComponent<FUIPackageComponent>().AddPackageAsync(FUIPackage.UISetting);
            // await Game.Scene.GetComponent<FUIPackageComponent>().AddPackageAsync(FUIPackage.UITips);
            // await Game.Scene.GetComponent<FUIPackageComponent>().AddPackageAsync(FUIPackage.UIShop);


        }

        public override void Dispose()
        {
            if (IsDisposed)
            {
                return;
            }

            // Game.Scene.GetComponent<FUIPackageComponent>().RemovePackage(FUIPackage.FLogin);
            base.Dispose();
        }
    }
}