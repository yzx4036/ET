/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

using FairyGUI;

namespace ET
{
    public static class FUILoginPanelSystem
    {
        private static T CreateFUICompInst<T>(FUILoginPanel self, GObject gObject) where T : Entity, IAwake<FUIGObjectComponent>, new()
        {
            var _fui = self.AddChild<FUIGObjectComponent, GObject>(gObject);
            return _fui.AddComponent<T, FUIGObjectComponent>(_fui);
        }

        /// <summary>
        /// 通过此方法获取的FUI，在Dispose时不会释放GObject，需要自行管理（一般在配合FGUI的Pool机制时使用）。
        /// </summary>
        // public static FUILoginPanel GetFormPool(Entity domain, GObject go)
        // {
        //     var fui = go.Get<FUILoginPanel>();
        //     if(fui == null)
        //     {
        //         fui = Create(domain, go);
        //     }
        //     fui.isFromFGUIPool = true;
        //     return fui;
        // }

        [FriendClass(typeof (FUIGObjectComponent))]
        [ObjectSystem]
        public class FUILoginPanelAwakeSystem: AwakeSystem<FUILoginPanel, FUIGObjectComponent>
        {
            public override void Awake(FUILoginPanel self, FUIGObjectComponent fui)
            {
                self.selfFUIRoot = fui;
                self.selfGObj = (GComponent) fui.gObject;

                self.selfGObj.Add(fui);

                var com = fui.gObject.asCom;

                if (com != null)
                {
					self.c1 = com.GetControllerAt(0);
					self.n25 = (GImage)com.GetChildAt(0);
					self.n2 = (GImage)com.GetChildAt(1);
					self.n3 = (GTextField)com.GetChildAt(2);
					self.n4 = (GImage)com.GetChildAt(3);
					self.n5 = (GTextField)com.GetChildAt(4);
					self.n6 = (GImage)com.GetChildAt(5);
					self.n7 = (GTextField)com.GetChildAt(6);
					self.RegisterAccount = (GTextInput)com.GetChildAt(7);
					self.RegisterPassword = (GTextInput)com.GetChildAt(8);
					self.RegisterPassword_1 = (GTextInput)com.GetChildAt(9);
					self.RegisterBtn = CreateFUICompInst<FButton4_Normal>(self, com.GetChildAt(10));
					self.ReturnBtn = CreateFUICompInst<FButton4_Normal>(self, com.GetChildAt(11));
					self.Register = (GGroup)com.GetChildAt(12);
					self.n15 = (GImage)com.GetChildAt(13);
					self.n16 = (GTextField)com.GetChildAt(14);
					self.n17 = (GImage)com.GetChildAt(15);
					self.n18 = (GTextField)com.GetChildAt(16);
					self.LoginAccount = (GTextInput)com.GetChildAt(17);
					self.LoginPassword = (GTextInput)com.GetChildAt(18);
					self.LoginBtn = CreateFUICompInst<FButton4_Normal>(self, com.GetChildAt(19));
					self.ToRegisterBtn = CreateFUICompInst<FButton4_Normal>(self, com.GetChildAt(20));
					self.Login = (GGroup)com.GetChildAt(21);

                }
            }
        }

        [FriendClass(typeof (FUIGObjectComponent))]
        [ObjectSystem]
        public class FUILoginPanelDestroySystem: DestroySystem<FUILoginPanel>
        {
            public override void Destroy(FUILoginPanel self)
            {
				self.c1 = null;
				self.n25 = null;
				self.n2 = null;
				self.n3 = null;
				self.n4 = null;
				self.n5 = null;
				self.n6 = null;
				self.n7 = null;
				self.RegisterAccount = null;
				self.RegisterPassword = null;
				self.RegisterPassword_1 = null;
				self.RegisterBtn = null;
				self.ReturnBtn = null;
				self.Register = null;
				self.n15 = null;
				self.n16 = null;
				self.n17 = null;
				self.n18 = null;
				self.LoginAccount = null;
				self.LoginPassword = null;
				self.LoginBtn = null;
				self.ToRegisterBtn = null;
				self.Login = null;

            }
        }
    }

    [FUI(typeof(FUILoginPanel), UIPackageName, UIResName)]
    public sealed class FUILoginPanel: Entity, IAwake<FUIGObjectComponent>, IDestroy
    {
        public const string UIPackageName = "FLogin";
        public const string UIResName = "UILoginPanel";

        /// <summary>
        /// {uiResName}的组件类型(GComponent、GButton、GProcessBar等)，它们都是GObject的子类。
        /// </summary>
        public GComponent selfGObj;

        public FUIGObjectComponent selfFUIRoot;

		public Controller c1 { get; set; }
		public GImage n25 { get; set; }
		public GImage n2 { get; set; }
		public GTextField n3 { get; set; }
		public GImage n4 { get; set; }
		public GTextField n5 { get; set; }
		public GImage n6 { get; set; }
		public GTextField n7 { get; set; }
		public GTextInput RegisterAccount { get; set; }
		public GTextInput RegisterPassword { get; set; }
		public GTextInput RegisterPassword_1 { get; set; }
		public FButton4_Normal RegisterBtn { get; set; }
		public FButton4_Normal ReturnBtn { get; set; }
		public GGroup Register { get; set; }
		public GImage n15 { get; set; }
		public GTextField n16 { get; set; }
		public GImage n17 { get; set; }
		public GTextField n18 { get; set; }
		public GTextInput LoginAccount { get; set; }
		public GTextInput LoginPassword { get; set; }
		public FButton4_Normal LoginBtn { get; set; }
		public FButton4_Normal ToRegisterBtn { get; set; }
		public GGroup Login { get; set; }


        public const string URL = "ui://nstug1quqo3ye";
    }
}