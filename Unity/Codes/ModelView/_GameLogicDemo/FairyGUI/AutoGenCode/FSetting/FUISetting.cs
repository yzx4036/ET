/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

using FairyGUI;

namespace ET
{
    public static class FUISettingSystem
    {
        private static T CreateFUICompInst<T>(FUISetting self, GObject gObject) where T : Entity, IAwake, new()
        {
            var _fui = self.AddChild<FUIGObjectComponent, GObject>(gObject);
            return _fui.AddComponent<T>();
        }

        /// <summary>
        /// 通过此方法获取的FUI，在Dispose时不会释放GObject，需要自行管理（一般在配合FGUI的Pool机制时使用）。
        /// </summary>
        // public static FUISetting GetFormPool(Entity domain, GObject go)
        // {
        //     var fui = go.Get<FUISetting>();
        //     if(fui == null)
        //     {
        //         fui = Create(domain, go);
        //     }
        //     fui.isFromFGUIPool = true;
        //     return fui;
        // }

        [ObjectSystem]
        public class FUISettingAwakeSystem: AwakeSystem<FUISetting>
        {
            public override void Awake(FUISetting self)
            {
                self.selfGObj.Add(self.selfFUIRoot);
                var com = self.selfFUIRoot.gObject.asCom;
                if (com != null)
                {
					self.n87 = (GImage)com.GetChildAt(0);
					self.n88 = (GTextField)com.GetChildAt(1);
					self.n89 = (GImage)com.GetChildAt(2);
					self.BG = (GGroup)com.GetChildAt(3);
					self.OKBtn = CreateFUICompInst<FButton4_Normal>(self, com.GetChildAt(4));
					self.n82 = (GTextField)com.GetChildAt(5);
					self.n83 = (GTextField)com.GetChildAt(6);
					self.KeyBtn = CreateFUICompInst<FButton_Normal>(self, com.GetChildAt(7));
					self.ExitBtn = CreateFUICompInst<FButton_Normal>(self, com.GetChildAt(8));
					self.CloseBtn = CreateFUICompInst<FButton_Close>(self, com.GetChildAt(9));

                }
            }
        }

        [ObjectSystem]
        public class FUISettingDestroySystem: DestroySystem<FUISetting>
        {
            public override void Destroy(FUISetting self)
            {
				self.n87 = null;
				self.n88 = null;
				self.n89 = null;
				self.BG = null;
				self.OKBtn = null;
				self.n82 = null;
				self.n83 = null;
				self.KeyBtn = null;
				self.ExitBtn = null;
				self.CloseBtn = null;

            }
        }
    }

    [FUI(typeof(FUISetting), UIPackageName, UIResName)]
    public sealed class FUISetting: Entity, IAwake, IDestroy
    {
        public const string UIPackageName = "FSetting";
        public const string UIResName = "UISetting";

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

		public GImage n87 { get; set; }
		public GTextField n88 { get; set; }
		public GImage n89 { get; set; }
		public GGroup BG { get; set; }
		public FButton4_Normal OKBtn { get; set; }
		public GTextField n82 { get; set; }
		public GTextField n83 { get; set; }
		public FButton_Normal KeyBtn { get; set; }
		public FButton_Normal ExitBtn { get; set; }
		public FButton_Close CloseBtn { get; set; }


        public const string URL = "ui://ghgmkgsfia5960";
    }
}