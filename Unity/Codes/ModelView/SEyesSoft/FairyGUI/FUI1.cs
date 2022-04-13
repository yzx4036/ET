using FairyGUI;
using System;
using System.Collections.Generic;
using System.Linq;
using UnityEngine;

namespace ET
{
    [ObjectSystem]
    public class FUI1AwakeSystem : AwakeSystem<FUI1, GObject>
    {
        public override void Awake(FUI1 self, GObject gObject)
        {
            self.gObject = gObject;
            // self.root = self.AddComponent<FUIRootComponent, GObject>(gObject);
        }
    }

    public class FUI1 : Entity, IAwake<GObject>
    {
        public GObject gObject;
        
        private Dictionary<string, FUI1> fuiChildren = new Dictionary<string, FUI1>();

        protected bool isFromFGUIPool = false;
        
        public string Name
        {
            get
            {
                if (this.gObject == null)
                {
                    return string.Empty;
                }
        
                return this.gObject.name;
            }
        
            set
            {
                if (this.gObject == null)
                {
                    return;
                }
        
                this.gObject.name = value;
            }
        }
        
        public bool Visible
        {
            get
            {
                if (this.gObject == null)
                {
                    return false;
                }
        
                return this.gObject.visible;
            }
            set
            {
                if (this.gObject == null)
                {
                    return;
                }
        
                this.gObject.visible = value;
            }
        }

        public bool IsComponent
        {
            get
            {
                return this.gObject is GComponent;
            }
        }
        
        public bool IsRoot
        {
            get
            {
                return this.gObject is GRoot;
            }
        }
        
        public bool IsEmpty
        {
            get
            {
                return this.gObject == null;
            }
        }

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
            if (isFromFGUIPool)
            {
                this.gObject.Dispose();
            }

            this.gObject = null;
            isFromFGUIPool = false;
        }

        public void Add(FUI1 ui, bool asChildGObject)
        {
            if (ui == null)
            {
                throw new Exception($"ui can not be empty");
            }

            if (string.IsNullOrWhiteSpace(ui.Name))
            {
                throw new Exception($"ui.Name can not be empty");
            }

            if (fuiChildren.ContainsKey(ui.Name))
            {
                throw new Exception($"ui.Name({ui.Name}) already exist");
            }
            
            fuiChildren.Add(ui.Name, ui);

            if (IsComponent && asChildGObject)
            {
                this.gObject.asCom.AddChild(ui.gObject);
            }

        }

        public void MakeFullScreen()
        {
            this.gObject?.asCom?.MakeFullScreen();
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
                        this.gObject.asCom.RemoveChild(ui.gObject, false);
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
                        this.gObject.asCom.RemoveChild(ui.gObject, false);
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