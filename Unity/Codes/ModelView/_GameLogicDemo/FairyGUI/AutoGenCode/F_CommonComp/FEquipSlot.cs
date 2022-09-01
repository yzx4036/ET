/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

using FairyGUI;

namespace ET
{
    public static class FEquipSlotSystem
    {
        private static T CreateFUICompInst<T>(FEquipSlot self, GObject gObject) where T : Entity, IAwake, new()
        {
            var _fui = self.AddChild<FUIGObjectComponent, GObject>(gObject);
            return _fui.AddComponent<T>();
        }

        /// <summary>
        /// 通过此方法获取的FUI，在Dispose时不会释放GObject，需要自行管理（一般在配合FGUI的Pool机制时使用）。
        /// </summary>
        // public static FEquipSlot GetFormPool(Entity domain, GObject go)
        // {
        //     var fui = go.Get<FEquipSlot>();
        //     if(fui == null)
        //     {
        //         fui = Create(domain, go);
        //     }
        //     fui.isFromFGUIPool = true;
        //     return fui;
        // }

        [ObjectSystem]
        public class FEquipSlotAwakeSystem: AwakeSystem<FEquipSlot>
        {
            public override void Awake(FEquipSlot self)
            {
                self.selfGObj.Add(self.selfFUIRoot);
                var com = self.selfFUIRoot.gObject.asCom;
                if (com != null)
                {
					self.button = com.GetControllerAt(0);
					self.n0 = (GImage)com.GetChildAt(0);
					self.title = (GTextField)com.GetChildAt(1);
					self.icon = (GLoader)com.GetChildAt(2);
					self.count = (GTextField)com.GetChildAt(3);

                }
            }
        }

        [ObjectSystem]
        public class FEquipSlotDestroySystem: DestroySystem<FEquipSlot>
        {
            public override void Destroy(FEquipSlot self)
            {
				self.button = null;
				self.n0 = null;
				self.title = null;
				self.icon = null;
				self.count = null;

            }
        }
    }

    
    public sealed class FEquipSlot: Entity, IAwake, IDestroy
    {
        public const string UIPackageName = "F_CommonComp";
        public const string UIResName = "EquipSlot";

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
		public GTextField title { get; set; }
		public GLoader icon { get; set; }
		public GTextField count { get; set; }


        public const string URL = "ui://o9z9wblxci549";
    }
}