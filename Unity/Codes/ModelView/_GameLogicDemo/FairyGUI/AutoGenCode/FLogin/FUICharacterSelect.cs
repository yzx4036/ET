/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

using FairyGUI;

namespace ET
{
    public static class FUICharacterSelectSystem
    {
        private static T CreateFUICompInst<T>(FUICharacterSelect self, GObject gObject) where T : Entity, IAwake, new()
        {
            var _fui = self.AddChild<FUIGObjectComponent, GObject>(gObject);
            return _fui.AddComponent<T>();
        }

        /// <summary>
        /// 通过此方法获取的FUI，在Dispose时不会释放GObject，需要自行管理（一般在配合FGUI的Pool机制时使用）。
        /// </summary>
        // public static FUICharacterSelect GetFormPool(Entity domain, GObject go)
        // {
        //     var fui = go.Get<FUICharacterSelect>();
        //     if(fui == null)
        //     {
        //         fui = Create(domain, go);
        //     }
        //     fui.isFromFGUIPool = true;
        //     return fui;
        // }

        [ObjectSystem]
        public class FUICharacterSelectAwakeSystem: AwakeSystem<FUICharacterSelect>
        {
            public override void Awake(FUICharacterSelect self)
            {
                self.selfGObj.Add(self.selfFUIRoot);
                var com = self.selfFUIRoot.gObject.asCom;
                if (com != null)
                {
					self.ClassButtonC = com.GetControllerAt(0);
					self.GenderBtnC = com.GetControllerAt(1);
					self.CreatePanelC = com.GetControllerAt(2);
					self.n2 = (GImage)com.GetChildAt(0);
					self.StartBtn = CreateFUICompInst<FButton6_Normal>(self, com.GetChildAt(1));
					self.ToCreateBtn = CreateFUICompInst<FButton6_Normal>(self, com.GetChildAt(2));
					self.CharacterList = (GList)com.GetChildAt(3);
					self.CharacterIcon = (GLoader)com.GetChildAt(4);
					self.SelectPanel = (GGroup)com.GetChildAt(5);
					self.n7 = (GImage)com.GetChildAt(6);
					self.n32 = CreateFUICompInst<FMask>(self, com.GetChildAt(7));
					self.BtnClose = CreateFUICompInst<FButton_Close>(self, com.GetChildAt(8));
					self.Button_Z = CreateFUICompInst<FButtonZ>(self, com.GetChildAt(9));
					self.ButtonF = CreateFUICompInst<FButton_F>(self, com.GetChildAt(10));
					self.Button_D = CreateFUICompInst<FButton_D>(self, com.GetChildAt(11));
					self.BoyBtn = CreateFUICompInst<FButton_Boy>(self, com.GetChildAt(12));
					self.GrilBtn = CreateFUICompInst<FButton_Gril>(self, com.GetChildAt(13));
					self.n15 = (GImage)com.GetChildAt(14);
					self.CreateBtn = CreateFUICompInst<FButton_Create>(self, com.GetChildAt(15));
					self.CharacterName = (GTextInput)com.GetChildAt(16);
					self.CreatePanel = (GGroup)com.GetChildAt(17);

                }
            }
        }

        [FriendClass(typeof (FUIGObjectComponent))]
        [ObjectSystem]
        public class FUICharacterSelectDestroySystem: DestroySystem<FUICharacterSelect>
        {
            public override void Destroy(FUICharacterSelect self)
            {
				self.ClassButtonC = null;
				self.GenderBtnC = null;
				self.CreatePanelC = null;
				self.n2 = null;
				self.StartBtn = null;
				self.ToCreateBtn = null;
				self.CharacterList = null;
				self.CharacterIcon = null;
				self.SelectPanel = null;
				self.n7 = null;
				self.n32 = null;
				self.BtnClose = null;
				self.Button_Z = null;
				self.ButtonF = null;
				self.Button_D = null;
				self.BoyBtn = null;
				self.GrilBtn = null;
				self.n15 = null;
				self.CreateBtn = null;
				self.CharacterName = null;
				self.CreatePanel = null;

            }
        }
    }

    [FUI(typeof(FUICharacterSelect), UIPackageName, UIResName)]
    public sealed class FUICharacterSelect: Entity, IAwake, IDestroy
    {
        public const string UIPackageName = "FLogin";
        public const string UIResName = "UICharacterSelect";

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

		public Controller ClassButtonC { get; set; }
		public Controller GenderBtnC { get; set; }
		public Controller CreatePanelC { get; set; }
		public GImage n2 { get; set; }
		public FButton6_Normal StartBtn { get; set; }
		public FButton6_Normal ToCreateBtn { get; set; }
		public GList CharacterList { get; set; }
		public GLoader CharacterIcon { get; set; }
		public GGroup SelectPanel { get; set; }
		public GImage n7 { get; set; }
		public FMask n32 { get; set; }
		public FButton_Close BtnClose { get; set; }
		public FButtonZ Button_Z { get; set; }
		public FButton_F ButtonF { get; set; }
		public FButton_D Button_D { get; set; }
		public FButton_Boy BoyBtn { get; set; }
		public FButton_Gril GrilBtn { get; set; }
		public GImage n15 { get; set; }
		public FButton_Create CreateBtn { get; set; }
		public GTextInput CharacterName { get; set; }
		public GGroup CreatePanel { get; set; }


        public const string URL = "ui://nstug1qudh8k0";
    }
}