using System;
using System.Collections.Generic;
using FairyGUI;
using UnityEngine;

namespace ET
{
    [ObjectSystem]
    public class FUIComponentAwakeSystem : AwakeSystem<FUIComponent>
    {
        public override void Awake(FUIComponent self)
        {
            
            self.Root = self.AddComponent<FUIRootComponent, GObject>(GRoot.inst);
            Log.Debug(">>>>>>>>> self.AddComponent<FUI, GObject>(GRoot.inst); ");
            // self.Root = EntityFactory.Create<FUI, GObject>(Game.Scene, GRoot.inst);
            // self._loadedUI = new Dictionary<Type, FUI>();
            // self._openedUI = new Dictionary<Type, FUI>();
        }
    }

    /// <summary>
    /// 管理所有顶层UI, 顶层UI都是GRoot的孩子
    /// </summary>
    public class FUIComponent : Entity, IAwake
    {
        public FUIRootComponent Root;

        // public Dictionary<Type, FUI> _loadedUI = null;
        // public Dictionary<Type, FUI> _openedUI = null;

        #region 创建FUI实例

        private GObject CreateGObject(string uiPackageName, string uiResName)
        {
            return UIPackage.CreateObject(uiPackageName, uiResName);
        }

        private FUI1 CreateFUIInst(string uiPackageName, string uiResName, long pHashCodeId)
        {
            var gObj = CreateGObject(uiPackageName, uiResName);
            return AddChildWithId<FUI1, GObject>(pHashCodeId, gObj);
        }

        #endregion

        public async ETTask<FUI1> OpenAsync(string uiPackageName, string uiResName, long pHashCodeId)
        {
            await Game.Scene.GetComponent<FUIPackageComponent>().EnsurePackageLoadedAsync(uiPackageName);
            var fui = CreateFUIInst(uiPackageName, uiResName, pHashCodeId);
            fui.Name = uiResName;
            Add(fui, true);
            return fui;
        }

        public void Close(string uiType)
        {
            Remove(uiType);
        }

        public void Add(FUI1 ui, bool asChildGObject)
        {
            Root?.Add(ui, asChildGObject);
        }

        public void Remove(string name, bool isNoDispose = false)
        {
            if (isNoDispose)
            {
                var fui = Root?.RemoveNoDispose(name);
            }
            else
            {
                Root?.Remove(name);
            }
        }

        public FUI1 Get(string name)
        {
            return Root?.Get(name);
        }

        public FUI1[] GetAll()
        {
            return Root?.GetAll();
        }

        public override void Dispose()
        {
            if (IsDisposed)
            {
                return;
            }

            base.Dispose();

            Root?.Dispose();
            Root = null;
        }

        public void Clear()
        {
            var childrens = GetAll();

            if (childrens != null)
            {
                foreach (var fui in childrens)
                {
                    Remove(fui.Name);
                }
            }
        }
    }
}