using FairyGUI;
using System;
using System.Collections.Generic;
using System.Linq;
using UnityEngine;

namespace ET
{
    [FriendClass(typeof (FUI))]
    public static class FUISystem
    {
        [ObjectSystem]
        public class FUIAwakeSystem: AwakeSystem<FUI, GObject>
        {
            public override void Awake(FUI self, GObject gObject)
            {
                self.gObject = gObject;
                // self.root = self.AddComponent<FUIRootComponent, GObject>(gObject);
            }
        }
        
        [ObjectSystem]
        public class FUIDestroySystem: DestroySystem<FUI>
        {
            public override void Destroy(FUI self)
            {
                // 删除所有的孩子
                foreach (FUI ui in self.fuiChildren.Values.ToArray())
                {
                    ui.Dispose();
                }
                self.fuiChildren.Clear();

                // 删除自己的UI
                if (self.isFromFGUIPool)
                {
                    self.gObject.Dispose();
                }

                self.gObject = null;
                self.isFromFGUIPool = false;
            }
        }

        public static void MakeFullScreen(this FUI self)
        {
            self.gObject?.asCom?.MakeFullScreen();
        }
    }

    public class FUI : Entity, IAwake<GObject>, IDestroy
    {
        public GObject gObject;
        
        public Dictionary<string, FUI> fuiChildren = new Dictionary<string, FUI>();

        public bool isFromFGUIPool = false;
        
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

        public bool IsEmpty
        {
            get
            {
                return this.gObject == null;
            }
        }

    }
}