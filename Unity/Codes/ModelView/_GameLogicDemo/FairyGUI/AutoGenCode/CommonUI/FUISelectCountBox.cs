/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

using FairyGUI;

namespace ET
{
    public static class FUISelectCountBoxSystem
    {
        private static T CreateFUICompInst<T>(FUISelectCountBox self, GObject gObject) where T : Entity, IAwake, new()
        {
            var _fui = self.AddChild<FUIGObjectComponent, GObject>(gObject);
            return _fui.AddComponent<T>();
        }

        /// <summary>
        /// 通过此方法获取的FUI，在Dispose时不会释放GObject，需要自行管理（一般在配合FGUI的Pool机制时使用）。
        /// </summary>
        // public static FUISelectCountBox GetFormPool(Entity domain, GObject go)
        // {
        //     var fui = go.Get<FUISelectCountBox>();
        //     if(fui == null)
        //     {
        //         fui = Create(domain, go);
        //     }
        //     fui.isFromFGUIPool = true;
        //     return fui;
        // }

        [ObjectSystem]
        public class FUISelectCountBoxAwakeSystem: AwakeSystem<FUISelectCountBox>
        {
            public override void Awake(FUISelectCountBox self)
            {
                self.selfGObj.Add(self.selfFUIRoot);
                var com = self.selfFUIRoot.gObject.asCom;
                if (com != null)
                {
					self.n0 = (GImage)com.GetChildAt(0);
					self.n1 = (GTextField)com.GetChildAt(1);
					self.n2 = (GTextField)com.GetChildAt(2);
					self.n3 = (GImage)com.GetChildAt(3);
					self.n4 = (GImage)com.GetChildAt(4);
					self.ItemIcon = (GLoader)com.GetChildAt(5);
					self.ItemName = (GTextField)com.GetChildAt(6);
					self.ItemPrice = (GTextField)com.GetChildAt(7);
					self.n8 = (GTextField)com.GetChildAt(8);
					self.BuyCount = (GTextInput)com.GetChildAt(9);
					self.n10 = (GImage)com.GetChildAt(10);
					self.n11 = (GTextField)com.GetChildAt(11);
					self.MaxPrice = (GTextField)com.GetChildAt(12);
					self.CancelBtn = CreateFUICompInst<FButton_Normal>(self, com.GetChildAt(13));
					self.MoreBuyBtn = CreateFUICompInst<FButton_Normal>(self, com.GetChildAt(14));
					self.MoreBuyPanel = (GGroup)com.GetChildAt(15);

                }
            }
        }

        [ObjectSystem]
        public class FUISelectCountBoxDestroySystem: DestroySystem<FUISelectCountBox>
        {
            public override void Destroy(FUISelectCountBox self)
            {
				self.n0 = null;
				self.n1 = null;
				self.n2 = null;
				self.n3 = null;
				self.n4 = null;
				self.ItemIcon = null;
				self.ItemName = null;
				self.ItemPrice = null;
				self.n8 = null;
				self.BuyCount = null;
				self.n10 = null;
				self.n11 = null;
				self.MaxPrice = null;
				self.CancelBtn = null;
				self.MoreBuyBtn = null;
				self.MoreBuyPanel = null;

            }
        }
    }

    [FUI(typeof(FUISelectCountBox), UIPackageName, UIResName)]
    public sealed class FUISelectCountBox: Entity, IAwake, IDestroy
    {
        public const string UIPackageName = "CommonUI";
        public const string UIResName = "UISelectCountBox";

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
		public GTextField n2 { get; set; }
		public GImage n3 { get; set; }
		public GImage n4 { get; set; }
		public GLoader ItemIcon { get; set; }
		public GTextField ItemName { get; set; }
		public GTextField ItemPrice { get; set; }
		public GTextField n8 { get; set; }
		public GTextInput BuyCount { get; set; }
		public GImage n10 { get; set; }
		public GTextField n11 { get; set; }
		public GTextField MaxPrice { get; set; }
		public FButton_Normal CancelBtn { get; set; }
		public FButton_Normal MoreBuyBtn { get; set; }
		public GGroup MoreBuyPanel { get; set; }


        public const string URL = "ui://4q3uyng0gntb5";
    }
}