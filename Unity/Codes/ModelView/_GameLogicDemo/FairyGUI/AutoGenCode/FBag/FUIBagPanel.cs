/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

using FairyGUI;

namespace ET
{
    public static class FUIBagPanelSystem
    {
        private static T CreateFUICompInst<T>(FUIBagPanel self, GObject gObject) where T : Entity, IAwake, new()
        {
            var _fui = self.AddChild<FUIGObjectComponent, GObject>(gObject);
            return _fui.AddComponent<T>();
        }

        /// <summary>
        /// 通过此方法获取的FUI，在Dispose时不会释放GObject，需要自行管理（一般在配合FGUI的Pool机制时使用）。
        /// </summary>
        // public static FUIBagPanel GetFormPool(Entity domain, GObject go)
        // {
        //     var fui = go.Get<FUIBagPanel>();
        //     if(fui == null)
        //     {
        //         fui = Create(domain, go);
        //     }
        //     fui.isFromFGUIPool = true;
        //     return fui;
        // }

        [ObjectSystem]
        public class FUIBagPanelAwakeSystem: AwakeSystem<FUIBagPanel>
        {
            public override void Awake(FUIBagPanel self)
            {
                self.selfGObj.Add(self.selfFUIRoot);
                var com = self.selfFUIRoot.gObject.asCom;
                if (com != null)
                {
					self.n0 = (GImage)com.GetChildAt(0);
					self.n1 = (GTextField)com.GetChildAt(1);
					self.BG = (GGroup)com.GetChildAt(2);
					self.CloseBtn = CreateFUICompInst<FButton_Close>(self, com.GetChildAt(3));
					self.ItemList = (GList)com.GetChildAt(4);
					self.n5 = (GImage)com.GetChildAt(5);
					self.RefreshBtn = CreateFUICompInst<FButton4_Normal>(self, com.GetChildAt(6));
					self.SellBtn = CreateFUICompInst<FButton4_Normal>(self, com.GetChildAt(7));

                }
            }
        }

        [ObjectSystem]
        public class FUIBagPanelDestroySystem: DestroySystem<FUIBagPanel>
        {
            public override void Destroy(FUIBagPanel self)
            {
				self.n0 = null;
				self.n1 = null;
				self.BG = null;
				self.CloseBtn = null;
				self.ItemList = null;
				self.n5 = null;
				self.RefreshBtn = null;
				self.SellBtn = null;

            }
        }
    }

    [FUI(typeof(FUIBagPanel), UIPackageName, UIResName)]
    public sealed class FUIBagPanel: Entity, IAwake, IDestroy
    {
        public const string UIPackageName = "FBag";
        public const string UIResName = "UIBagPanel";

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

		public GImage n0 { get; set; }
		public GTextField n1 { get; set; }
		public GGroup BG { get; set; }
		public FButton_Close CloseBtn { get; set; }
		public GList ItemList { get; set; }
		public GImage n5 { get; set; }
		public FButton4_Normal RefreshBtn { get; set; }
		public FButton4_Normal SellBtn { get; set; }


        public const string URL = "ui://gvvny798azrp5p";
    }
}