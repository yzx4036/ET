using FairyGUI;
using System;
using System.Collections.Generic;
using System.Linq;
using UnityEngine;

namespace ET
{
    [FriendClass(typeof (FUI))]
    [FriendClass(typeof (FUIRootComponent))]
    public static class FUIRootComponentSystem
    {
        [ObjectSystem]
        public class FUIRootComponentAwakeSystem: AwakeSystem<FUIRootComponent, GObject>
        {
            public override void Awake(FUIRootComponent self, GObject gObject)
            {
                self.GObject = gObject;
                Log.Debug($"FUIAwakeSystem>>>>>>>>>>>self.GObject {self.GObject}");
            }
        }
        
        [ObjectSystem]
        public class FUIRootComponentDestroySystem: DestroySystem<FUIRootComponent>
        {
            public override void Destroy(FUIRootComponent self)
            {
                // // 删除所有的孩子
                // foreach (FUI ui in fuiChildren.Values.ToArray())
                // {
                //     ui.Dispose();
                // }
                //
                // fuiChildren.Clear();

                // 删除自己的UI
                if (!self.IsRoot && !self.isFromFGUIPool)
                {
                    self.GObject.Dispose();
                }

                self.GObject = null;
                self.isFromFGUIPool = false;
            }
        }
        
        
        public static void Add(this FUIRootComponent self, FUI ui, bool asChildGObject)
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
                self.GObject.asCom.AddChild(ui.gObject);
            }

        }

        public static void MakeFullScreen(this FUIRootComponent self)
        {
            self.GObject?.asCom?.MakeFullScreen();
        }

        public static void Remove(this FUIRootComponent self, string name)
        {
            if (self.IsDisposed)
            {
                return;
            }

            FUI ui;

            if (self.fuiChildren.TryGetValue(name, out ui))
            {
                self.fuiChildren.Remove(name);

                if (ui != null)
                {
                    if (self.IsComponent)
                    {
                        self.GObject.asCom.RemoveChild(ui.gObject, false);
                    }

                    ui.Dispose();
                }
            } 
        }

        /// <summary>
        /// 一般情况不要使用此方法，如需使用，需要自行管理返回值的FUI的释放。
        /// </summary>
        public static FUI RemoveNoDispose(this FUIRootComponent self, string name)
        {
            if (self.IsDisposed)
            {
                return null;
            }

            FUI ui;

            if (self.fuiChildren.TryGetValue(name, out ui))
            {
                self.fuiChildren.Remove(name);

                if (ui != null)
                {
                    if (self.IsComponent)
                    {
                        self.GObject.asCom.RemoveChild(ui.gObject, false);
                    }

                    // ui.Parent = null;
                }
            }

            return ui;
        }

        public static void RemoveChildren(this FUIRootComponent self)
        {
            foreach (var child in self.fuiChildren.Values.ToArray())
            {
                child.Dispose();
            }

            self.fuiChildren.Clear();
        }

        public static FUI Get(this FUIRootComponent self, string name)
        {
            FUI child;

            if (self.fuiChildren.TryGetValue(name, out child))
            {
                return child;
            }

            return null;
        }

        public static FUI[] GetAll(this FUIRootComponent self)
        {
            return self.fuiChildren.Values.ToArray();
        }
    }

    public class FUIRootComponent : Entity, IAwake, IAwake<GObject>, IDestroy
    {
        public bool isFromFGUIPool = false;
        public GObject GObject;
        public Dictionary<string, FUI> fuiChildren = new Dictionary<string, FUI>();
        
        public bool IsComponent => GObject is GComponent;
        
        public bool IsRoot => GObject is GRoot;
        
        public bool IsEmpty => GObject == null;

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
    }
}