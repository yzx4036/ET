/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

using FairyGUI;

namespace ET
{
    public static class FUISellPanelSystem
    {
        private static T CreateFUICompInst<T>(FUISellPanel self, GObject gObject) where T : Entity, IAwake<FUIGObjectComponent>, new()
        {
            var _fui = self.AddChild<FUIGObjectComponent, GObject>(gObject);
            return _fui.AddComponent<T, FUIGObjectComponent>(_fui);
        }

        /// <summary>
        /// 通过此方法获取的FUI，在Dispose时不会释放GObject，需要自行管理（一般在配合FGUI的Pool机制时使用）。
        /// </summary>
        // public static FUISellPanel GetFormPool(Entity domain, GObject go)
        // {
        //     var fui = go.Get<FUISellPanel>();
        //     if(fui == null)
        //     {
        //         fui = Create(domain, go);
        //     }
        //     fui.isFromFGUIPool = true;
        //     return fui;
        // }

        [FriendClass(typeof (FUIGObjectComponent))]
        [ObjectSystem]
        public class FUISellPanelAwakeSystem: AwakeSystem<FUISellPanel, FUIGObjectComponent>
        {
            public override void Awake(FUISellPanel self, FUIGObjectComponent fui)
            {
                self.selfFUIRoot = fui;
                self.selfGObj = (GComponent) fui.gObject;

                self.selfGObj.Add(fui);

                var com = fui.gObject.asCom;

                if (com != null)
                {
					self.n0 = (GImage)com.GetChildAt(0);
					self.Title = (GTextField)com.GetChildAt(1);
					self.BG = (GGroup)com.GetChildAt(2);
					self.CloseBtn = CreateFUICompInst<FButton_Close>(self, com.GetChildAt(3));
					self.ItemList = (GList)com.GetChildAt(4);
					self.n5 = (GImage)com.GetChildAt(5);
					self.SellBtn = CreateFUICompInst<FButton4_Normal>(self, com.GetChildAt(6));
					self.SellPrice = (GTextField)com.GetChildAt(7);
					self.n9 = (GImage)com.GetChildAt(8);

                }
            }
        }

        [FriendClass(typeof (FUIGObjectComponent))]
        [ObjectSystem]
        public class FUISellPanelDestroySystem: DestroySystem<FUISellPanel>
        {
            public override void Destroy(FUISellPanel self)
            {
				self.n0 = null;
				self.Title = null;
				self.BG = null;
				self.CloseBtn = null;
				self.ItemList = null;
				self.n5 = null;
				self.SellBtn = null;
				self.SellPrice = null;
				self.n9 = null;

            }
        }
    }

    [FUI(typeof(FUISellPanel), UIPackageName, UIResName)]
    public sealed class FUISellPanel: Entity, IAwake<FUIGObjectComponent>, IDestroy
    {
        public const string UIPackageName = "FShop";
        public const string UIResName = "UISellPanel";

        /// <summary>
        /// {uiResName}的组件类型(GComponent、GButton、GProcessBar等)，它们都是GObject的子类。
        /// </summary>
        public GComponent selfGObj;

        public FUIGObjectComponent selfFUIRoot;

		public GImage n0 { get; set; }
		public GTextField Title { get; set; }
		public GGroup BG { get; set; }
		public FButton_Close CloseBtn { get; set; }
		public GList ItemList { get; set; }
		public GImage n5 { get; set; }
		public FButton4_Normal SellBtn { get; set; }
		public GTextField SellPrice { get; set; }
		public GImage n9 { get; set; }


        public const string URL = "ui://8poeuut4s0zo3";
    }
}