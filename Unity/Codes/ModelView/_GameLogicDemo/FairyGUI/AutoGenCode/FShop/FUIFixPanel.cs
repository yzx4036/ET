/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

using FairyGUI;

namespace ET
{
    public static class FUIFixPanelSystem
    {
        private static T CreateFUICompInst<T>(FUIFixPanel self, GObject gObject) where T : Entity, IAwake, new()
        {
            var _fui = self.AddChild<FUIGObjectComponent, GObject>(gObject);
            return _fui.AddComponent<T>();
        }

        /// <summary>
        /// 通过此方法获取的FUI，在Dispose时不会释放GObject，需要自行管理（一般在配合FGUI的Pool机制时使用）。
        /// </summary>
        // public static FUIFixPanel GetFormPool(Entity domain, GObject go)
        // {
        //     var fui = go.Get<FUIFixPanel>();
        //     if(fui == null)
        //     {
        //         fui = Create(domain, go);
        //     }
        //     fui.isFromFGUIPool = true;
        //     return fui;
        // }

        [ObjectSystem]
        public class FUIFixPanelAwakeSystem: AwakeSystem<FUIFixPanel>
        {
            public override void Awake(FUIFixPanel self)
            {
                self.selfGObj.Add(self.selfFUIRoot);
                var com = self.selfFUIRoot.gObject.asCom;
                if (com != null)
                {
					self.SelectBG = (GImage)com.GetChildAt(0);
					self.n1 = (GTextField)com.GetChildAt(1);
					self.CloseBtn = CreateFUICompInst<FButton_Normal>(self, com.GetChildAt(2));
					self.AllNormalFixBtn = CreateFUICompInst<FButton_Shop>(self, com.GetChildAt(3));
					self.NormalFixBtn = CreateFUICompInst<FButton_Shop>(self, com.GetChildAt(4));
					self.GoodFixBtn = CreateFUICompInst<FButton_Shop>(self, com.GetChildAt(5));
					self.GoodAllFixBtn = CreateFUICompInst<FButton_Shop>(self, com.GetChildAt(6));
					self.n7 = (GTextField)com.GetChildAt(7);

                }
            }
        }

        [FriendClass(typeof (FUIGObjectComponent))]
        [ObjectSystem]
        public class FUIFixPanelDestroySystem: DestroySystem<FUIFixPanel>
        {
            public override void Destroy(FUIFixPanel self)
            {
				self.SelectBG = null;
				self.n1 = null;
				self.CloseBtn = null;
				self.AllNormalFixBtn = null;
				self.NormalFixBtn = null;
				self.GoodFixBtn = null;
				self.GoodAllFixBtn = null;
				self.n7 = null;

            }
        }
    }

    [FUI(typeof(FUIFixPanel), UIPackageName, UIResName)]
    public sealed class FUIFixPanel: Entity, IAwake, IDestroy
    {
        public const string UIPackageName = "FShop";
        public const string UIResName = "UIFixPanel";

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
		public GTextField n1 { get; set; }
		public FButton_Normal CloseBtn { get; set; }
		public FButton_Shop AllNormalFixBtn { get; set; }
		public FButton_Shop NormalFixBtn { get; set; }
		public FButton_Shop GoodFixBtn { get; set; }
		public FButton_Shop GoodAllFixBtn { get; set; }
		public GTextField n7 { get; set; }


        public const string URL = "ui://8poeuut4s0zo2";
    }
}