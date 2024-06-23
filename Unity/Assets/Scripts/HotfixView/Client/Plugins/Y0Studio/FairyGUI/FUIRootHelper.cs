using System;
using ET.Client;
using FairyGUI;
using UnityEngine;

namespace ET.Client
{
    [FriendOf(typeof(GlobalComponent))]
    public static class FUIRootHelper
    {
        public static void Init()
        {
            // Stage.inst.position = new Vector3(-100000, -100000, 100);
            GRoot.inst.SetContentScaleFactor(1920, 1080, UIContentScaler.ScreenMatchMode.MatchWidthOrHeight);
        }
        
        public static GComponent GetTargetRoot(UIPanelType type)
        {
            // if (type == UIPanelType.Normal)
            // {
            //     return GlobalComponent.Instance.NormalGRoot;
            // }
            // else if (type == UIPanelType.Fixed)
            // {
            //     // return GlobalComponent.Instance.FixedGRoot;
            // }
            // else if (type == UIPanelType.PopUp)
            // {
            //     return GlobalComponent.Instance.PopUpGRoot;
            // }
            // else if (type == UIPanelType.Other)
            // {
            //     return GlobalComponent.Instance.OtherGRoot;
            // }
            //
            // Log.Error("uiroot type is error: " + type.ToString());
            return null;
        }
    }
}