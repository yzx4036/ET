using FairyGUI;
using System;
using System.Collections.Generic;
using System.Linq;
using UnityEngine;

namespace ET
{
    [FriendClass(typeof (FUIGObjectComponent))]
    public static class FUIGObjectComponentSystem
    {
        [ObjectSystem]
        public class FUIGObjectComponentAwakeSystem: AwakeSystem<FUIGObjectComponent, GObject>
        {
            public override void Awake(FUIGObjectComponent self, GObject gObject)
            {
                self.gObject = gObject;
                Log.Debug($"FUIAwakeSystem>>>>>>>>>>>self.GObject {self.gObject}");
            }
        }
        
        [ObjectSystem]
        public class FUIGObjectComponentDestroySystem: DestroySystem<FUIGObjectComponent>
        {
            public override void Destroy(FUIGObjectComponent self)
            {
                // // 删除所有的孩子
                // foreach (FUIGObjectComponent ui in fuiChildren.Values.ToArray())
                // {
                //     ui.Dispose();
                // }
                //
                // fuiChildren.Clear();

                // 删除自己的UI
                if (!self.IsRoot && !self.isFromFGUIPool)
                {
                    self.gObject.Dispose();
                }

                self.gObject = null;
                self.isFromFGUIPool = false;
            }
        }
        
        
        public static void Add(this FUIGObjectComponent self, FUIGObjectComponent ui, bool asChildGObject)
        {
            if (ui == null || ui.IsEmpty)
            {
                throw new Exception($"ui can not be empty");
            }

            if (string.IsNullOrWhiteSpace(ui.Name))
            {
                throw new Exception($"ui.Name can not be empty");
            }

            if (self.fuiChildren.ContainsKey(ui.Name))
            {
                throw new Exception($"ui.Name({ui.Name}) already exist");
            }
            
            self.fuiChildren.Add(ui.Name, ui);

            if (self.IsComponent && asChildGObject)
            {
                self.gObject.asCom.AddChild(ui.gObject);
            }

        }

        public static void MakeFullScreen(this FUIGObjectComponent self)
        {
            self.gObject?.asCom?.MakeFullScreen();
        }

        public static void Remove(this FUIGObjectComponent self, string name)
        {
            if (self.IsDisposed)
            {
                return;
            }

            FUIGObjectComponent ui;

            if (self.fuiChildren.TryGetValue(name, out ui))
            {
                self.fuiChildren.Remove(name);

                if (ui != null)
                {
                    if (self.IsComponent)
                    {
                        self.gObject.asCom.RemoveChild(ui.gObject, false);
                    }

                    ui.Dispose();
                }
            } 
        }

        /// <summary>
        /// 一般情况不要使用此方法，如需使用，需要自行管理返回值的FUI的释放。
        /// </summary>
        public static FUIGObjectComponent RemoveNoDispose(this FUIGObjectComponent self, string name)
        {
            if (self.IsDisposed)
            {
                return null;
            }

            FUIGObjectComponent ui;

            if (self.fuiChildren.TryGetValue(name, out ui))
            {
                self.fuiChildren.Remove(name);

                if (ui != null)
                {
                    if (self.IsComponent)
                    {
                        self.gObject.asCom.RemoveChild(ui.gObject, false);
                    }

                    // ui.Parent = null;
                }
            }

            return ui;
        }

        public static void RemoveChildren(this FUIGObjectComponent self)
        {
            foreach (var child in self.fuiChildren.Values.ToArray())
            {
                child.Dispose();
            }

            self.fuiChildren.Clear();
        }

        public static FUIGObjectComponent Get(this FUIGObjectComponent self, string name)
        {
            FUIGObjectComponent child;

            if (self.fuiChildren.TryGetValue(name, out child))
            {
                return child;
            }

            return null;
        }

        public static FUIGObjectComponent[] GetAll(this FUIGObjectComponent self)
        {
            return self.fuiChildren.Values.ToArray();
        }
    }

    /// <summary>
    /// 封装FUI GObject 的 Entity
    /// </summary>
    public class FUIGObjectComponent : Entity, IAwake, IAwake<GObject>, IDestroy
    {
        public bool isFromFGUIPool = false;
        public GObject gObject;
        public Dictionary<string, FUIGObjectComponent> fuiChildren = new Dictionary<string, FUIGObjectComponent>();
        
        public bool IsComponent => this.gObject is GComponent;
        
        public bool IsRoot => this.gObject is GRoot;
        
        public bool IsEmpty => this.gObject == null;

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
    }
}