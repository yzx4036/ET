using System;
using System.Collections.Generic;
using FairyGUI;
using UnityEngine;

namespace ET
{
    public class FUIInstArgs
    {
        public string UIPackageName { get; set; }
        public string UIResName { get; set; }
        public Type FuiType { get; set; }
    
        private long _FuiTypeHashCode = 0;
    
        public long FuiTypeHashCode {
            get
            {
                if (this._FuiTypeHashCode == 0)
                {
                    this._FuiTypeHashCode = this.FuiType.GetHashCode();
                }
                return this._FuiTypeHashCode;
            }
        }
    
        public FUIInstArgs(Type fuiType, string uiPackageName, string uiResName)
        {
            FuiType = fuiType;
            UIPackageName = uiPackageName;
            UIResName = uiResName;
        }
    }

    public static class FUIHelper
    {
        private static Dictionary<Type, FUIInstArgs> FUIInstArgsDict = new Dictionary<Type, FUIInstArgs>();

        public static void Init()
        {
            Debug.Log(">>>>>>>>>>FUIHelper Init");
            var types = EventSystem.Instance.GetTypes(typeof (FUIAttribute));
            List<Type> fuiAttrTypeList = new List<Type>();
            foreach (Type type in types)
            {
                fuiAttrTypeList.Add(type);
            }
            LoadFUIAttribute(fuiAttrTypeList);
        }
        
        #region 创建FUI实例
        
        public static async ETTask<FUI> OpenAsync<T>(Scene scene = null) where T : Entity, IAwake<FUI>, new()
        {
            FUIInstArgs uiArgs = null;
            Type uiType = typeof (T);
            if (FUIInstArgsDict.TryGetValue(uiType, out uiArgs))
            {
                if (scene == null)
                {
                    scene = Game.Scene;
                }
                var _fuiComp = scene.GetComponent<FUIComponent>();
                if (_fuiComp == null)
                {
                    _fuiComp = scene.AddComponent<FUIComponent>();
                }
                Log.Debug(">>>>>>>>>>>>>>>FUIHelper OpenAsync");
                FUI fui = await _fuiComp.OpenAsync(uiArgs.UIPackageName, uiArgs.UIResName, uiArgs.FuiTypeHashCode);
                fui.AddComponent<T, FUI>(fui);
                return fui;
            }

            throw new Exception($"找不到对应FUIInstArgs uiType = {uiType}");
        }

        public static void Close(Type uiType, Scene scene = null)
        {
            FUIInstArgs uiArgs = null;
            if (FUIInstArgsDict.TryGetValue(uiType, out uiArgs))
            {
                if (scene == null)
                {
                    scene = Game.Scene;
                }
                var _fuiComp = scene.GetComponent<FUIComponent>();
                if (_fuiComp == null)
                {
                    _fuiComp = scene.AddComponent<FUIComponent>();
                }
                scene.GetComponent<FUIComponent>().Close(uiArgs.UIResName);
            }
        }

        #endregion



        public static void SetWindowSize(Window win)
        {
            win.width *= GRoot.inst.width / 1080;
            win.height *= GRoot.inst.height / 1920;
        }

        public static void SetWindowSize(GComponent com)
        {
            com.width *= GRoot.inst.width / 1080;
            com.height *= GRoot.inst.height / 1920;
        }

        //关闭其他UI
        public static void CloseOtherPanel(string name)
        {
            FUI[] allFui = Game.Scene.GetComponent<FUIComponent>().GetAll();
            for (int i = 0; i < allFui.Length; i++)
            {
                // if (allFui[i].Name == name)
                //     continue;
                // if(allFui[i].Name == FUIMain.UIResName)
                //     continue;
                // if(allFui[i].Name == FUIMainPanel.UIResName)
                //     continue;
                // if(allFui[i].Name == FUIBattlePanel.UIResName)
                //     continue;

                Game.Scene.GetComponent<FUIComponent>().Remove(allFui[i].Name);
            }
        }

        public static void ClosePanel(string name)
        {
            Game.Scene.GetComponent<FUIComponent>().Remove(name);
        }
        
        public static FUIInstArgs GetFUIInstArgsByType(Type uiType)
        {
            FUIInstArgs fuiInstArgs = null;
            FUIInstArgsDict.TryGetValue(uiType, out fuiInstArgs);
            return fuiInstArgs;
        }
        
        private static void LoadFUIAttribute(List<Type> fuiTypeList)
        {
            for (int i = 0; i < fuiTypeList.Count; i++)
            {
                var objects = fuiTypeList[i].GetCustomAttributes(typeof(FUIAttribute), true);
                if (objects.Length == 0)
                {
                    continue;
                }

                foreach (FUIAttribute fuiAttribute in objects)
                {
                    FUIInstArgsDict.Add(fuiTypeList[i], fuiAttribute.argsObject);
                }
            }
        }

    }
}