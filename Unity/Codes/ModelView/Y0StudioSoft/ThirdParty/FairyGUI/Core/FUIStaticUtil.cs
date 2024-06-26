﻿using System;
using ET;
using FairyGUI;

namespace ET
{
    public static class FUIStaticUtil
    {
        public static T GetFUIViewEntity<T, K>(this K self) where K : Entity, IFUIBaseComponent where T : Entity
        {
            var _fui = self.GetParent<FUIGObjectComponent>();
            if (_fui != null)
            {
                return _fui.GetComponent<T>();
            }
            else
            {
                throw new Exception(">>_fui = null");
            }
        }
        
        public static FUIGObjectComponent GetFUIGObjectEntity<T>(this T self) where T : Entity, IFUIBaseComponent
        {
            return self.GetParent<FUIGObjectComponent>();
        }
        
        public static void AddBtnClickedListener(this FButton4_Normal self, EventCallback0 callback)
        {
            self.selfGObj.onClick.Set(callback);
        }
		      
        public static void AddBtnClickedListener(this FButton4_Normal self, EventCallback1 callback)
        {
            self.selfGObj.onClick.Set(callback);
        }
    }
}