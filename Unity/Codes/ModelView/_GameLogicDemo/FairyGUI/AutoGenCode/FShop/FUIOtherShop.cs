/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

using FairyGUI;

namespace ET
{
    public static class FUIOtherShopSystem
    {
        private static T CreateFUICompInst<T>(FUIOtherShop self, GObject gObject) where T : Entity, IAwake, new()
        {
            var _fui = self.AddChild<FUIGObjectComponent, GObject>(gObject);
            return _fui.AddComponent<T>();
        }

        /// <summary>
        /// 通过此方法获取的FUI，在Dispose时不会释放GObject，需要自行管理（一般在配合FGUI的Pool机制时使用）。
        /// </summary>
        // public static FUIOtherShop GetFormPool(Entity domain, GObject go)
        // {
        //     var fui = go.Get<FUIOtherShop>();
        //     if(fui == null)
        //     {
        //         fui = Create(domain, go);
        //     }
        //     fui.isFromFGUIPool = true;
        //     return fui;
        // }

        [ObjectSystem]
        public class FUIOtherShopAwakeSystem: AwakeSystem<FUIOtherShop>
        {
            public override void Awake(FUIOtherShop self)
            {
                self.selfGObj.Add(self.selfFUIRoot);
                var com = self.selfFUIRoot.gObject.asCom;
                if (com != null)
                {
					self.SelectBG = (GImage)com.GetChildAt(0);
					self.n5 = (GTextField)com.GetChildAt(1);
					self.CloseBtn = CreateFUICompInst<FButton_Normal>(self, com.GetChildAt(2));
					self.ToNormalShopBtn = CreateFUICompInst<FButton_Shop>(self, com.GetChildAt(3));
					self.ToAdvShopBtn = CreateFUICompInst<FButton_Shop>(self, com.GetChildAt(4));
					self.ToSellBtn = CreateFUICompInst<FButton_Shop>(self, com.GetChildAt(5));
					self.StartPanel = (GGroup)com.GetChildAt(6);

                }
            }
        }

        [ObjectSystem]
        public class FUIOtherShopDestroySystem: DestroySystem<FUIOtherShop>
        {
            public override void Destroy(FUIOtherShop self)
            {
				self.SelectBG = null;
				self.n5 = null;
				self.CloseBtn = null;
				self.ToNormalShopBtn = null;
				self.ToAdvShopBtn = null;
				self.ToSellBtn = null;
				self.StartPanel = null;

            }
        }
    }

    [FUI(typeof(FUIOtherShop), UIPackageName, UIResName)]
    public sealed class FUIOtherShop: Entity, IAwake, IDestroy
    {
        public const string UIPackageName = "FShop";
        public const string UIResName = "UIOtherShop";

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

		public GImage SelectBG { get; set; }
		public GTextField n5 { get; set; }
		public FButton_Normal CloseBtn { get; set; }
		public FButton_Shop ToNormalShopBtn { get; set; }
		public FButton_Shop ToAdvShopBtn { get; set; }
		public FButton_Shop ToSellBtn { get; set; }
		public GGroup StartPanel { get; set; }


        public const string URL = "ui://8poeuut4y1jy8";
    }
}