
using System;
using System.Collections.Generic;
using FairyGUI;
using static FairyGUI.UIContentScaler;

namespace ET
{
    public class FUIInitComponent: Entity
    {
        private readonly string[] _initPackageArray =
        {
            // FUIPackage.CommonAsset,
            // FUIPackage.CommonComp,
            // FUIPackage.FLogin,
        };
        public async ETTask Init()
        {
            GRoot.inst.SetContentScaleFactor(1080,1920,ScreenMatchMode.MatchWidthOrHeight);
            UIConfig.defaultFont = "KaiTi";

            for (int i = 0; i < _initPackageArray.Length; i++)
            {
                await Game.Scene.GetComponent<FUIPackageComponent>().AddPackageAsync(_initPackageArray[i]);
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