/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

using FairyGUI;

namespace ET
{
    public static class FUIArmorShopSystem
    {
        private static T CreateFUICompInst<T>(FUIArmorShop self, GObject gObject) where T : Entity, IAwake, new()
        {
            var _fui = self.AddChild<FUIGObjectComponent, GObject>(gObject);
            return _fui.AddComponent<T>();
        }

        /// <summary>
        /// 通过此方法获取的FUI，在Dispose时不会释放GObject，需要自行管理（一般在配合FGUI的Pool机制时使用）。
        /// </summary>
        // public static FUIArmorShop GetFormPool(Entity domain, GObject go)
        // {
        //     var fui = go.Get<FUIArmorShop>();
        //     if(fui == null)
        //     {
        //         fui = Create(domain, go);
        //     }
        //     fui.isFromFGUIPool = true;
        //     return fui;
        // }

        [ObjectSystem]
        public class FUIArmorShopAwakeSystem: AwakeSystem<FUIArmorShop>
        {
            public override void Awake(FUIArmorShop self)
            {
                self.selfGObj.Add(self.selfFUIRoot);
                var com = self.selfFUIRoot.gObject.asCom;
                if (com != null)
                {
					self.ShopPanelC = com.GetControllerAt(0);
					self.SelectBG = (GImage)com.GetChildAt(0);
					self.n5 = (GTextField)com.GetChildAt(1);
					self.CloseBtn = CreateFUICompInst<FButton_Normal>(self, com.GetChildAt(2));
					self.ToBuyBtn = CreateFUICompInst<FButton_Shop>(self, com.GetChildAt(3));
					self.ToSellBtn = CreateFUICompInst<FButton_Shop>(self, com.GetChildAt(4));
					self.ToFixBtn = CreateFUICompInst<FButton_Shop>(self, com.GetChildAt(5));
					self.FixPanel = CreateFUICompInst<FUIFixPanel>(self, com.GetChildAt(6));
					self.StartPanel = (GGroup)com.GetChildAt(7);

                }
            }
        }

        [FriendClass(typeof (FUIGObjectComponent))]
        [ObjectSystem]
        public class FUIArmorShopDestroySystem: DestroySystem<FUIArmorShop>
        {
            public override void Destroy(FUIArmorShop self)
            {
				self.ShopPanelC = null;
				self.SelectBG = null;
				self.n5 = null;
				self.CloseBtn = null;
				self.ToBuyBtn = null;
				self.ToSellBtn = null;
				self.ToFixBtn = null;
				self.FixPanel.Dispose();
				self.FixPanel = null;
				self.StartPanel = null;

            }
        }
    }

    [FUI(typeof(FUIArmorShop), UIPackageName, UIResName)]
    public sealed class FUIArmorShop: Entity, IAwake, IDestroy
    {
        public const string UIPackageName = "FShop";
        public const string UIResName = "UIArmorShop";

        /// <summary>
        /// {uiResName}的组件类型(GComponent、GButton、GProcessBar等)，它们都是GObject的子类。
        /// </summary>
        public GComponent selfGObj
        {
            get
            {
                return (GComponent)this.selfFUIRoot?.gObject;
            }
        }
        
        public FUIGObjectComponent selfFUIRoot
         {
            get
            {
                return this.GetParent<FUIGObjectComponent>();
            }
        }

		public Controller ShopPanelC { get; set; }
		public GImage SelectBG { get; set; }
		public GTextField n5 { get; set; }
		public FButton_Normal CloseBtn { get; set; }
		public FButton_Shop ToBuyBtn { get; set; }
		public FButton_Shop ToSellBtn { get; set; }
		public FButton_Shop ToFixBtn { get; set; }
		public FUIFixPanel FixPanel { get; set; }
		public GGroup StartPanel { get; set; }


        public const string URL = "ui://8poeuut4qycq5";
    }
}