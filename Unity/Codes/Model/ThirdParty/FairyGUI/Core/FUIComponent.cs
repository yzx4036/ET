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
            
            self.AddComponent<FUI, GObject>(GRoot.inst);
            // self.Root = EntityFactory.Create<FUI, GObject>(Game.Scene, GRoot.inst);
            // self._loadedUI = new Dictionary<Type, FUI>();
            // self._openedUI = new Dictionary<Type, FUI>();
        }
    }

    /// <summary>
    /// 管理所有顶层UI, 顶层UI都是GRoot的孩子
    /// </summary>
    public class FUIComponent : Entity
    {
        public FUI Root;

        // public Dictionary<Type, FUI> _loadedUI = null;
        // public Dictionary<Type, FUI> _openedUI = null;

        #region 创建FUI实例

        private GObject CreateGObject(string uiPackageName, string uiResName)
        {
            return UIPackage.CreateObject(uiPackageName, uiResName);
        }

        private T CreateFUIInst<T>(string uiPackageName, string uiResName, long pHashCodeId) where T : FUI
        {
            var gObj = CreateGObject(uiPackageName, uiResName);
            return AddChildWithId<T, GObject>(pHashCodeId, gObj);
        }

        #endregion

        public void Open<T>(string uiPackageName, string uiResName, long pHashCodeId, Action<FUI> callBack) where T : FUI
        {
            Game.Scene.GetComponent<FUIPackageComponent>().EnsurePackageLoaded(uiPackageName, () =>
            {
                var fui = CreateFUIInst<T>(uiPackageName, uiResName, pHashCodeId);
                Add<T>(fui, true);

                if (callBack != null)
                {
                    callBack(fui);
                }
            });

        }
        
        public async ETTask<T> OpenAsync<T>(string uiPackageName, string uiResName, long pHashCodeId) where T:FUI
        {
            await Game.Scene.GetComponent<FUIPackageComponent>().EnsurePackageLoadedAsync(uiPackageName);
            var fui = CreateFUIInst<T>(uiPackageName, uiResName, pHashCodeId);
            // Debug.Log($">>>>>>>>>>>>>>>>Open {uiType}");
            Add(fui, true);
            return fui;
        }

        public void Close(string uiType)
        {
            Remove(uiType);
        }

        public void Add<T>(T ui, bool asChildGObject) where T : FUI
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

        public FUI Get(string name)
        {
            return Root?.Get(name);
        }

        public FUI[] GetAll()
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