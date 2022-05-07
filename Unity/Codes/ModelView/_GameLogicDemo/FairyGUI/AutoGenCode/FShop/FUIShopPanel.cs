/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

using FairyGUI;

namespace ET
{
    public static class FUIShopPanelSystem
    {
        private static T CreateFUICompInst<T>(FUIShopPanel self, GObject gObject) where T : Entity, IAwake<FUIGObjectComponent>, new()
        {
            var _fui = self.AddChild<FUIGObjectComponent, GObject>(gObject);
            return _fui.AddComponent<T, FUIGObjectComponent>(_fui);
        }

        /// <summary>
        /// 通过此方法获取的FUI，在Dispose时不会释放GObject，需要自行管理（一般在配合FGUI的Pool机制时使用）。
        /// </summary>
        // public static FUIShopPanel GetFormPool(Entity domain, GObject go)
        // {
        //     var fui = go.Get<FUIShopPanel>();
        //     if(fui == null)
        //     {
        //         fui = Create(domain, go);
        //     }
        //     fui.isFromFGUIPool = true;
        //     return fui;
        // }

        [FriendClass(typeof (FUIGObjectComponent))]
        [ObjectSystem]
        public class FUIShopPanelAwakeSystem: AwakeSystem<FUIShopPanel, FUIGObjectComponent>
        {
            public override void Awake(FUIShopPanel self, FUIGObjectComponent fui)
            {
                self.selfFUIRoot = fui;
                self.selfGObj = (GComponent) fui.gObject;

                self.selfGObj.Add(fui);

                var com = fui.gObject.asCom;

                if (com != null)
                {
					self.MoreBuyC = com.GetControllerAt(0);
					self.n7 = (GImage)com.GetChildAt(0);
					self.n8 = (GImage)com.GetChildAt(1);
					self.Title = (GTextField)com.GetChildAt(2);
					self.ItemList = (GList)com.GetChildAt(3);
					self.ToMoreBuyBtn = CreateFUICompInst<FButton4_Normal>(self, com.GetChildAt(4));
					self.BuyBtn = CreateFUICompInst<FButton4_Normal>(self, com.GetChildAt(5));
					self.CloseBtn = CreateFUICompInst<FButton_Close>(self, com.GetChildAt(6));
					self.MoreBuyPanel = CreateFUICompInst<FUISelectCountBox>(self, com.GetChildAt(7));

                }
            }
        }

        [FriendClass(typeof (FUIGObjectComponent))]
        [ObjectSystem]
        public class FUIShopPanelDestroySystem: DestroySystem<FUIShopPanel>
        {
            public override void Destroy(FUIShopPanel self)
            {
				self.MoreBuyC = null;
				self.n7 = null;
				self.n8 = null;
				self.Title = null;
				self.ItemList = null;
				self.ToMoreBuyBtn = null;
				self.BuyBtn = null;
				self.CloseBtn = null;
				self.MoreBuyPanel = null;

            }
        }
    }

    [FUI(typeof(FUIShopPanel), UIPackageName, UIResName)]
    public sealed class FUIShopPanel: Entity, IAwake<FUIGObjectComponent>, IDestroy
    {
        public const string UIPackageName = "FShop";
        public const string UIResName = "UIShopPanel";

        /// <summary>
        /// {uiResName}的组件类型(GComponent、GButton、GProcessBar等)，它们都是GObject的子类。
        /// </summary>
        public GComponent selfGObj;

        public FUIGObjectComponent selfFUIRoot;

		public Controller MoreBuyC { get; set; }
		public GImage n7 { get; set; }
		public GImage n8 { get; set; }
		public GTextField Title { get; set; }
		public GList ItemList { get; set; }
		public FButton4_Normal ToMoreBuyBtn { get; set; }
		public FButton4_Normal BuyBtn { get; set; }
		public FButton_Close CloseBtn { get; set; }
		public FUISelectCountBox MoreBuyPanel { get; set; }


        public const string URL = "ui://8poeuut4s0zo1";
    }
}