using FairyGUI;
using System;
using System.Collections.Generic;
using System.Linq;
using UnityEngine;

namespace ET
{
    [ObjectSystem]
    public class FUIRootComponentAwakeSystem : AwakeSystem<FUIRootComponent, GObject>
    {
        public override void Awake(FUIRootComponent self, GObject gObject)
        {
            self.GObject = gObject;
            Log.Debug($"FUIAwakeSystem>>>>>>>>>>>self.GObject {self.GObject}");
        }
    }

    public class FUIRootComponent : Entity, IAwake, IAwake<GObject>
    {
        public GObject GObject;

        public string Name
        {
            get
            {
                if (GObject == null)
                {
                    return string.Empty;
                }

                return GObject.name;
            }

            set
            {
                if (GObject == null)
                {
                    return;
                }

                GObject.name = value;
            }
        }

        public bool Visible
        {
            get
            {
                if (GObject == null)
                {
                    return false;
                }

                return GObject.visible;
            }
            set
            {
                if (GObject == null)
                {
                    return;
                }

                GObject.visible = value;
            }
        }

        public bool IsComponent
        {
            get
            {
                return GObject is GComponent;
            }
        }

        public bool IsRoot
        {
            get
            {
                return GObject is GRoot;
            }
        }

        public bool IsEmpty
        {
            get
            {
                return GObject == null;
            }
        }

        private Dictionary<string, FUI1> fuiChildren = new Dictionary<string, FUI1>();

        protected bool isFromFGUIPool = false;

        public override void Dispose()
        {
            if (IsDisposed)
            {
                return;
            }

            base.Dispose();

            // 从父亲中删除自己
            GetParent<FUI1>()?.RemoveNoDispose(Name);
            //
            // // 删除所有的孩子
            // foreach (FUI ui in fuiChildren.Values.ToArray())
            // {
            //     ui.Dispose();
            // }
            //
            // fuiChildren.Clear();

            // 删除自己的UI
            if (!IsRoot && !isFromFGUIPool)
            {
                GObject.Dispose();
            }

            GObject = null;
            isFromFGUIPool = false;
        }

        public void Add(FUI1 ui, bool asChildGObject)
        {
            if (ui == null || ui.IsEmpty)
            {
                throw new Exception($"ui can not be empty");
            }

            if (string.IsNullOrWhiteSpace(ui.Name))
            {
                throw new Exception($"ui.Name can not be empty");
            }

            // if (fuiChildren.ContainsKey(ui.Name))
            // {
            //     throw new Exception($"ui.Name({ui.Name}) already exist");
            // }
            //
            // fuiChildren.Add(ui.Name, ui);

            if (IsComponent && asChildGObject)
            {
                GObject.asCom.AddChild(ui.gObject);
            }

        }

        public void MakeFullScreen()
        {
            GObject?.asCom?.MakeFullScreen();
        }

        public void Remove(string name)
        {
            if (IsDisposed)
            {
                return;
            }

            FUI1 ui;

            if (fuiChildren.TryGetValue(name, out ui))
            {
                fuiChildren.Remove(name);

                if (ui != null)
                {
                    if (IsComponent)
                    {
                        GObject.asCom.RemoveChild(ui.gObject, false);
                    }

                    ui.Dispose();
                }
            }
        }

        /// <summary>
        /// 一般情况不要使用此方法，如需使用，需要自行管理返回值的FUI的释放。
        /// </summary>
        public FUI1 RemoveNoDispose(string name)
        {
            if (IsDisposed)
            {
                return null;
            }

            FUI1 ui;

            if (fuiChildren.TryGetValue(name, out ui))
            {
                fuiChildren.Remove(name);

                if (ui != null)
                {
                    if (IsComponent)
                    {
                        GObject.asCom.RemoveChild(ui.gObject, false);
                    }

                    // ui.Parent = null;
                }
            }

            return ui;
        }

        public void RemoveChildren()
        {
            foreach (var child in fuiChildren.Values.ToArray())
            {
                child.Dispose();
            }

            fuiChildren.Clear();
        }

        public FUI1 Get(string name)
        {
            FUI1 child;

            if (fuiChildren.TryGetValue(name, out child))
            {
                return child;
            }

            return null;
        }

        public FUI1[] GetAll()
        {
            return fuiChildren.Values.ToArray();
        }
    }
}