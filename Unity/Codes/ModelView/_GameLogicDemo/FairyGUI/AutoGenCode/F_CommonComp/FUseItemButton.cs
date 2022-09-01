/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

using FairyGUI;

namespace ET
{
    public static class FUseItemButtonSystem
    {
        private static T CreateFUICompInst<T>(FUseItemButton self, GObject gObject) where T : Entity, IAwake, new()
        {
            var _fui = self.AddChild<FUIGObjectComponent, GObject>(gObject);
            return _fui.AddComponent<T>();
        }

        /// <summary>
        /// 通过此方法获取的FUI，在Dispose时不会释放GObject，需要自行管理（一般在配合FGUI的Pool机制时使用）。
        /// </summary>
        // public static FUseItemButton GetFormPool(Entity domain, GObject go)
        // {
        //     var fui = go.Get<FUseItemButton>();
        //     if(fui == null)
        //     {
        //         fui = Create(domain, go);
        //     }
        //     fui.isFromFGUIPool = true;
        //     return fui;
        // }

        [ObjectSystem]
        public class FUseItemButtonAwakeSystem: AwakeSystem<FUseItemButton>
        {
            public override void Awake(FUseItemButton self)
            {
                self.selfGObj.Add(self.selfFUIRoot);
                var com = self.selfFUIRoot.gObject.asCom;
                if (com != null)
                {
					self.button = com.GetControllerAt(0);
					self.n0 = (GImage)com.GetChildAt(0);
					self.ItemIcon = (GLoader)com.GetChildAt(1);
					self.Mask = (GLoader)com.GetChildAt(2);
					self.title = (GTextField)com.GetChildAt(3);

                }
            }
        }

        [ObjectSystem]
        public class FUseItemButtonDestroySystem: DestroySystem<FUseItemButton>
        {
            public override void Destroy(FUseItemButton self)
            {
				self.button = null;
				self.n0 = null;
				self.ItemIcon = null;
				self.Mask = null;
				self.title = null;

            }
        }
    }

    
    public sealed class FUseItemButton: Entity, IAwake, IDestroy
    {
        public const string UIPackageName = "F_CommonComp";
        public const string UIResName = "UseItemButton";

        /// <summary>
        /// {uiResName}的组件类型(GComponent、GButton、GProcessBar等)，它们都是GObject的子类。
        /// </summary>
        public GButton selfGObj
        {
            get
            {
                return (GButton)this.selfFUIRoot?.gObject;
            }
        }
        
        public FUIGObjectComponent selfFUIRoot
         {
            get
            {
                return this.GetParent<FUIGObjectComponent>();
            }
        }

		public Controller button { get; set; }
		public GImage n0 { get; set; }
		public GLoader ItemIcon { get; set; }
		public GLoader Mask { get; set; }
		public GTextField title { get; set; }


        public const string URL = "ui://o9z9wblxer0b1q";
    }
}