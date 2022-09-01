/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

using FairyGUI;

namespace ET
{
    public static class FUIMessageBoxSystem
    {
        private static T CreateFUICompInst<T>(FUIMessageBox self, GObject gObject) where T : Entity, IAwake, new()
        {
            var _fui = self.AddChild<FUIGObjectComponent, GObject>(gObject);
            return _fui.AddComponent<T>();
        }

        /// <summary>
        /// 通过此方法获取的FUI，在Dispose时不会释放GObject，需要自行管理（一般在配合FGUI的Pool机制时使用）。
        /// </summary>
        // public static FUIMessageBox GetFormPool(Entity domain, GObject go)
        // {
        //     var fui = go.Get<FUIMessageBox>();
        //     if(fui == null)
        //     {
        //         fui = Create(domain, go);
        //     }
        //     fui.isFromFGUIPool = true;
        //     return fui;
        // }

        [ObjectSystem]
        public class FUIMessageBoxAwakeSystem: AwakeSystem<FUIMessageBox>
        {
            public override void Awake(FUIMessageBox self)
            {
                self.selfGObj.Add(self.selfFUIRoot);
                var com = self.selfFUIRoot.gObject.asCom;
                if (com != null)
                {
					self.ButtonC = com.GetControllerAt(0);
					self.n15 = (GImage)com.GetChildAt(0);
					self.title = (GTextField)com.GetChildAt(1);
					self.Message = (GTextField)com.GetChildAt(2);
					self.Two_NoBtn = CreateFUICompInst<FButton_Normal>(self, com.GetChildAt(3));
					self.Two_YesBtn = CreateFUICompInst<FButton_Normal>(self, com.GetChildAt(4));
					self.TwoBtn = (GGroup)com.GetChildAt(5);
					self.One_OkBtn = CreateFUICompInst<FButton_Normal>(self, com.GetChildAt(6));
					self.OneBtn = (GGroup)com.GetChildAt(7);

                }
            }
        }

        [ObjectSystem]
        public class FUIMessageBoxDestroySystem: DestroySystem<FUIMessageBox>
        {
            public override void Destroy(FUIMessageBox self)
            {
				self.ButtonC = null;
				self.n15 = null;
				self.title = null;
				self.Message = null;
				self.Two_NoBtn = null;
				self.Two_YesBtn = null;
				self.TwoBtn = null;
				self.One_OkBtn = null;
				self.OneBtn = null;

            }
        }
    }

    [FUI(typeof(FUIMessageBox), UIPackageName, UIResName)]
    public sealed class FUIMessageBox: Entity, IAwake, IDestroy
    {
        public const string UIPackageName = "FCommonUI";
        public const string UIResName = "UIMessageBox";

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

		public Controller ButtonC { get; set; }
		public GImage n15 { get; set; }
		public GTextField title { get; set; }
		public GTextField Message { get; set; }
		public FButton_Normal Two_NoBtn { get; set; }
		public FButton_Normal Two_YesBtn { get; set; }
		public GGroup TwoBtn { get; set; }
		public FButton_Normal One_OkBtn { get; set; }
		public GGroup OneBtn { get; set; }


        public const string URL = "ui://4q3uyng0g2hv0";
    }
}