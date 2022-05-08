/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

using FairyGUI;

namespace ET
{
    public static class FUITipsSystem
    {
        private static T CreateFUICompInst<T>(FUITips self, GObject gObject) where T : Entity, IAwake, new()
        {
            var _fui = self.AddChild<FUIGObjectComponent, GObject>(gObject);
            return _fui.AddComponent<T>();
        }

        /// <summary>
        /// 通过此方法获取的FUI，在Dispose时不会释放GObject，需要自行管理（一般在配合FGUI的Pool机制时使用）。
        /// </summary>
        // public static FUITips GetFormPool(Entity domain, GObject go)
        // {
        //     var fui = go.Get<FUITips>();
        //     if(fui == null)
        //     {
        //         fui = Create(domain, go);
        //     }
        //     fui.isFromFGUIPool = true;
        //     return fui;
        // }

        [ObjectSystem]
        public class FUITipsAwakeSystem: AwakeSystem<FUITips>
        {
            public override void Awake(FUITips self)
            {
                self.selfGObj.Add(self.selfFUIRoot);
                var com = self.selfFUIRoot.gObject.asCom;
                if (com != null)
                {
					self.ShowTypeC = com.GetControllerAt(0);
					self.n58 = (GImage)com.GetChildAt(0);
					self.n45 = (GImage)com.GetChildAt(1);
					self.n34 = (GImage)com.GetChildAt(2);
					self.n38 = (GImage)com.GetChildAt(3);
					self.n35 = (GImage)com.GetChildAt(4);
					self.n37 = (GImage)com.GetChildAt(5);
					self.n36 = (GImage)com.GetChildAt(6);
					self.ItemType = (GTextField)com.GetChildAt(7);
					self.ItemName = (GTextField)com.GetChildAt(8);
					self.n41 = (GImage)com.GetChildAt(9);
					self.ItemIcon = (GLoader)com.GetChildAt(10);
					self.ItemLevel = (GTextField)com.GetChildAt(11);
					self.ItemClass = (GTextField)com.GetChildAt(12);
					self.AttrList = (GList)com.GetChildAt(13);
					self.SellPrice = (GTextField)com.GetChildAt(14);
					self.Endurance = (GTextField)com.GetChildAt(15);
					self.EquipBtn = CreateFUICompInst<FButton_Tips>(self, com.GetChildAt(16));
					self.UseBtn = CreateFUICompInst<FButton_Tips>(self, com.GetChildAt(17));
					self.UnEquipBtn = CreateFUICompInst<FButton_Tips>(self, com.GetChildAt(18));
					self.LeftBtn = CreateFUICompInst<FButton_Tips>(self, com.GetChildAt(19));
					self.RightBtn = CreateFUICompInst<FButton_Tips>(self, com.GetChildAt(20));
					self.GetBtn = CreateFUICompInst<FButton_Tips>(self, com.GetChildAt(21));
					self.LockBtn = CreateFUICompInst<FButton_Tips>(self, com.GetChildAt(22));

                }
            }
        }

        [FriendClass(typeof (FUIGObjectComponent))]
        [ObjectSystem]
        public class FUITipsDestroySystem: DestroySystem<FUITips>
        {
            public override void Destroy(FUITips self)
            {
				self.ShowTypeC = null;
				self.n58 = null;
				self.n45 = null;
				self.n34 = null;
				self.n38 = null;
				self.n35 = null;
				self.n37 = null;
				self.n36 = null;
				self.ItemType = null;
				self.ItemName = null;
				self.n41 = null;
				self.ItemIcon = null;
				self.ItemLevel = null;
				self.ItemClass = null;
				self.AttrList = null;
				self.SellPrice = null;
				self.Endurance = null;
				self.EquipBtn = null;
				self.UseBtn = null;
				self.UnEquipBtn = null;
				self.LeftBtn = null;
				self.RightBtn = null;
				self.GetBtn = null;
				self.LockBtn = null;

            }
        }
    }

    [FUI(typeof(FUITips), UIPackageName, UIResName)]
    public sealed class FUITips: Entity, IAwake, IDestroy
    {
        public const string UIPackageName = "CommonUI";
        public const string UIResName = "UITips";

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

		public Controller ShowTypeC { get; set; }
		public GImage n58 { get; set; }
		public GImage n45 { get; set; }
		public GImage n34 { get; set; }
		public GImage n38 { get; set; }
		public GImage n35 { get; set; }
		public GImage n37 { get; set; }
		public GImage n36 { get; set; }
		public GTextField ItemType { get; set; }
		public GTextField ItemName { get; set; }
		public GImage n41 { get; set; }
		public GLoader ItemIcon { get; set; }
		public GTextField ItemLevel { get; set; }
		public GTextField ItemClass { get; set; }
		public GList AttrList { get; set; }
		public GTextField SellPrice { get; set; }
		public GTextField Endurance { get; set; }
		public FButton_Tips EquipBtn { get; set; }
		public FButton_Tips UseBtn { get; set; }
		public FButton_Tips UnEquipBtn { get; set; }
		public FButton_Tips LeftBtn { get; set; }
		public FButton_Tips RightBtn { get; set; }
		public FButton_Tips GetBtn { get; set; }
		public FButton_Tips LockBtn { get; set; }


        public const string URL = "ui://4q3uyng0oeq70";
    }
}