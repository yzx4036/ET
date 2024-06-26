/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

using FairyGUI;

namespace ET
{
    public static class FShopItemSystem
    {
        private static T CreateFUICompInst<T>(FShopItem self, GObject gObject) where T : Entity, IAwake, new()
        {
            var _fui = self.AddChild<FUIGObjectComponent, GObject>(gObject);
            return _fui.AddComponent<T>();
        }

        /// <summary>
        /// 通过此方法获取的FUI，在Dispose时不会释放GObject，需要自行管理（一般在配合FGUI的Pool机制时使用）。
        /// </summary>
        // public static FShopItem GetFormPool(Entity domain, GObject go)
        // {
        //     var fui = go.Get<FShopItem>();
        //     if(fui == null)
        //     {
        //         fui = Create(domain, go);
        //     }
        //     fui.isFromFGUIPool = true;
        //     return fui;
        // }

        [ObjectSystem]
        public class FShopItemAwakeSystem: AwakeSystem<FShopItem>
        {
            public override void Awake(FShopItem self)
            {
                self.selfGObj.Add(self.selfFUIRoot);
                var com = self.selfFUIRoot.gObject.asCom;
                if (com != null)
                {
					self.button = com.GetControllerAt(0);
					self.n0 = (GImage)com.GetChildAt(0);
					self.n1 = (GImage)com.GetChildAt(1);
					self.n2 = (GImage)com.GetChildAt(2);
					self.ItemName = (GTextField)com.GetChildAt(3);
					self.Price = (GTextField)com.GetChildAt(4);
					self.ItemIcon = (GLoader)com.GetChildAt(5);

                }
            }
        }

        [ObjectSystem]
        public class FShopItemDestroySystem: DestroySystem<FShopItem>
        {
            public override void Destroy(FShopItem self)
            {
				self.button = null;
				self.n0 = null;
				self.n1 = null;
				self.n2 = null;
				self.ItemName = null;
				self.Price = null;
				self.ItemIcon = null;

            }
        }
    }

    
    public sealed class FShopItem: Entity, IAwake, IDestroy
    {
        public const string UIPackageName = "F_CommonComp";
        public const string UIResName = "ShopItem";

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
		public GImage n1 { get; set; }
		public GImage n2 { get; set; }
		public GTextField ItemName { get; set; }
		public GTextField Price { get; set; }
		public GLoader ItemIcon { get; set; }


        public const string URL = "ui://o9z9wblxs0zo6g";
    }
}