using System;
using System.Collections.Generic;
using FairyGUI;
using UnityEngine;

namespace ET
{
    [FriendClass(typeof (FUIComponent))]
    public static class FUIComponentSystem
    {
        [ObjectSystem]
        public class FUIComponentAwakeSystem: AwakeSystem<FUIComponent>
        {
            public override void Awake(FUIComponent self)
            {
                self.Root = self.AddComponent<FUIGObjectComponent, GObject>(GRoot.inst);
                Log.Debug(">>>>>>>>> self.AddComponent<FUIGObjectComponent, GObject>(GRoot.inst); ");
                // self.Root = EntityFactory.Create<FUIGObjectComponent, GObject>(Game.Scene, GRoot.inst);
                // self._loadedUI = new Dictionary<Type, FUIGObjectComponent>();
                // self._openedUI = new Dictionary<Type, FUIGObjectComponent>();
            }
        }

        [ObjectSystem]
        public class FUIComponentDestroySystem: DestroySystem<FUIComponent>
        {
            public override void Destroy(FUIComponent self)
            {
                self.Root?.Dispose();
                self.Root = null;
            }
        }
        
        #region 创建FUI实例

        private static GObject CreateGObject(string uiPackageName, string uiResName)
        {
            return UIPackage.CreateObject(uiPackageName, uiResName);
        }

        private static FUIGObjectComponent CreateFUIInst(this FUIComponent self, string uiPackageName, string uiResName, long pHashCodeId)
        {
            var gObj = CreateGObject(uiPackageName, uiResName);
            return self.AddChildWithId<FUIGObjectComponent, GObject>(pHashCodeId, gObj);
        }

        #endregion

        public static async ETTask<FUIGObjectComponent> OpenAsync(this FUIComponent self, string uiPackageName, string uiResName, long pHashCodeId)
        {
            await Game.Scene.GetComponent<FUIPackageComponent>().EnsurePackageLoadedAsync(uiPackageName);
            var fui = self.CreateFUIInst(uiPackageName, uiResName, pHashCodeId);
            fui.Name = uiResName;
            self.Add(fui, true);
            return fui;
        }

        public static void Close(this FUIComponent self, string uiType, string pUIPackageName)
        {
            self.Remove(uiType);
            Game.Scene.GetComponent<FUIPackageComponent>().EnsureRemovePackage(pUIPackageName);
        }

        public static void Add(this FUIComponent self, FUIGObjectComponent ui, bool asChildGObject)
        {
            self.Root?.Add(ui, asChildGObject);
        }

        public static void Remove(this FUIComponent self, string name, bool isNoDispose = false)
        {
            if (isNoDispose)
            {
                var fui = self.Root?.RemoveNoDispose(name);
            }
            else
            {
                self.Root?.Remove(name);
            }
        }

        public static FUIGObjectComponent Get(this FUIComponent self, string name)
        {
            return self.Root?.Get(name);
        }

        public static FUIGObjectComponent[] GetAll(this FUIComponent self)
        {
            return self.Root?.GetAll();
        }

        public static void Clear(this FUIComponent self)
        {
            var childrens = self.GetAll();

            if (childrens != null)
            {
                foreach (var fui in childrens)
                {
                    self.Remove(fui.Name);
                }
            }
        }
    }

    /// <summary>
    /// 管理所有顶层UI, 顶层UI都是GRoot的孩子
    /// </summary>
    public class FUIComponent: Entity, IAwake, IDestroy
    {
        public FUIGObjectComponent Root;
    }
}