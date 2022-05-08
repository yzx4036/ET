/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

using FairyGUI;

namespace ET
{
    public static class FUIWeaponShopSystem
    {
        private static T CreateFUICompInst<T>(FUIWeaponShop self, GObject gObject) where T : Entity, IAwake, new()
        {
            var _fui = self.AddChild<FUIGObjectComponent, GObject>(gObject);
            return _fui.AddComponent<T>();
        }

        /// <summary>
        /// 通过此方法获取的FUI，在Dispose时不会释放GObject，需要自行管理（一般在配合FGUI的Pool机制时使用）。
        /// </summary>
        // public static FUIWeaponShop GetFormPool(Entity domain, GObject go)
        // {
        //     var fui = go.Get<FUIWeaponShop>();
        //     if(fui == null)
        //     {
        //         fui = Create(domain, go);
        //     }
        //     fui.isFromFGUIPool = true;
        //     return fui;
        // }

        [ObjectSystem]
        public class FUIWeaponShopAwakeSystem: AwakeSystem<FUIWeaponShop>
        {
            public override void Awake(FUIWeaponShop self)
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
					self.ToIntensifyBtn = CreateFUICompInst<FButton_Shop>(self, com.GetChildAt(6));
					self.FixPanel = CreateFUICompInst<FUIFixPanel>(self, com.GetChildAt(7));
					self.IntensifyPanel = CreateFUICompInst<FUIIntensifyPanel>(self, com.GetChildAt(8));
					self.StartPanel = (GGroup)com.GetChildAt(9);

                }
            }
        }

        [FriendClass(typeof (FUIGObjectComponent))]
        [ObjectSystem]
        public class FUIWeaponShopDestroySystem: DestroySystem<FUIWeaponShop>
        {
            public override void Destroy(FUIWeaponShop self)
            {
				self.ShopPanelC = null;
				self.SelectBG = null;
				self.n5 = null;
				self.CloseBtn = null;
				self.ToBuyBtn = null;
				self.ToSellBtn = null;
				self.ToFixBtn = null;
				self.ToIntensifyBtn = null;
				self.FixPanel.Dispose();
				self.FixPanel = null;
				self.IntensifyPanel.Dispose();
				self.IntensifyPanel = null;
				self.StartPanel = null;

            }
        }
    }

    [FUI(typeof(FUIWeaponShop), UIPackageName, UIResName)]
    public sealed class FUIWeaponShop: Entity, IAwake, IDestroy
    {
        public const string UIPackageName = "FShop";
        public const string UIResName = "UIWeaponShop";

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
		public FButton_Shop ToIntensifyBtn { get; set; }
		public FUIFixPanel FixPanel { get; set; }
		public FUIIntensifyPanel IntensifyPanel { get; set; }
		public GGroup StartPanel { get; set; }


        public const string URL = "ui://8poeuut4q2hx0";
    }
}