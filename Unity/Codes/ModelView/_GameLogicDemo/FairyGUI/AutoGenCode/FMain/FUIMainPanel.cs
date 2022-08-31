/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

using FairyGUI;

namespace ET
{
    public static class FUIMainPanelSystem
    {
        private static T CreateFUICompInst<T>(FUIMainPanel self, GObject gObject) where T : Entity, IAwake, new()
        {
            var _fui = self.AddChild<FUIGObjectComponent, GObject>(gObject);
            return _fui.AddComponent<T>();
        }

        /// <summary>
        /// 通过此方法获取的FUI，在Dispose时不会释放GObject，需要自行管理（一般在配合FGUI的Pool机制时使用）。
        /// </summary>
        // public static FUIMainPanel GetFormPool(Entity domain, GObject go)
        // {
        //     var fui = go.Get<FUIMainPanel>();
        //     if(fui == null)
        //     {
        //         fui = Create(domain, go);
        //     }
        //     fui.isFromFGUIPool = true;
        //     return fui;
        // }

        [ObjectSystem]
        public class FUIMainPanelAwakeSystem: AwakeSystem<FUIMainPanel>
        {
            public override void Awake(FUIMainPanel self)
            {
                self.selfGObj.Add(self.selfFUIRoot);
                var com = self.selfFUIRoot.gObject.asCom;
                if (com != null)
                {
					self.BattlePanelC = com.GetControllerAt(0);
					self.ShowChatC = com.GetControllerAt(1);
					self.n1 = (GImage)com.GetChildAt(0);
					self.n24 = (GImage)com.GetChildAt(1);
					self.CharacterFighting = (GTextField)com.GetChildAt(2);
					self.CharacterName = (GTextField)com.GetChildAt(3);
					self.CharacterLevel = (GTextField)com.GetChildAt(4);
					self.GoldCount = (GTextField)com.GetChildAt(5);
					self.GemCount = (GTextField)com.GetChildAt(6);
					self.n3 = (GImage)com.GetChildAt(7);
					self.n2 = (GImage)com.GetChildAt(8);
					self.CharacterIcon = (GLoader)com.GetChildAt(9);
					self.CharacterGender = (GTextField)com.GetChildAt(10);
					self.TopInfo = (GGroup)com.GetChildAt(11);
					self.HPBar = (GImage)com.GetChildAt(12);
					self.MPBar = (GImage)com.GetChildAt(13);
					self.n21 = (GImage)com.GetChildAt(14);
					self.EXPBar = (GImage)com.GetChildAt(15);
					self.CurrHPText = (GTextField)com.GetChildAt(16);
					self.CurrMPText = (GTextField)com.GetChildAt(17);
					self.ToEquipBtn = CreateFUICompInst<FButton_Slot>(self, com.GetChildAt(18));
					self.ToBattleBtn = CreateFUICompInst<FButton_Slot>(self, com.GetChildAt(19));
					self.ToMainBtn = CreateFUICompInst<FButton_Slot>(self, com.GetChildAt(20));
					self.ToSetBtn = CreateFUICompInst<FButton_Slot>(self, com.GetChildAt(21));
					self.ToBagBtn = CreateFUICompInst<FButton_Slot>(self, com.GetChildAt(22));
					self.DownBtn = (GGroup)com.GetChildAt(23);
					self.ChatBtn = CreateFUICompInst<FButton4_Normal>(self, com.GetChildAt(24));
					self.n99 = (GImage)com.GetChildAt(25);
					self.n100 = (GImage)com.GetChildAt(26);
					self.SendBtn = CreateFUICompInst<FButton4_Normal>(self, com.GetChildAt(27));
					self.CloseBtn = CreateFUICompInst<FButton_Close>(self, com.GetChildAt(28));
					self.InputText = (GRichTextField)com.GetChildAt(29);
					self.ChatPanel = (GGroup)com.GetChildAt(30);
					self.MainPanel = CreateFUICompInst<FUIMain>(self, com.GetChildAt(31));

                }
            }
        }

        [ObjectSystem]
        public class FUIMainPanelDestroySystem: DestroySystem<FUIMainPanel>
        {
            public override void Destroy(FUIMainPanel self)
            {
				self.BattlePanelC = null;
				self.ShowChatC = null;
				self.n1 = null;
				self.n24 = null;
				self.CharacterFighting = null;
				self.CharacterName = null;
				self.CharacterLevel = null;
				self.GoldCount = null;
				self.GemCount = null;
				self.n3 = null;
				self.n2 = null;
				self.CharacterIcon = null;
				self.CharacterGender = null;
				self.TopInfo = null;
				self.HPBar = null;
				self.MPBar = null;
				self.n21 = null;
				self.EXPBar = null;
				self.CurrHPText = null;
				self.CurrMPText = null;
				self.ToEquipBtn = null;
				self.ToBattleBtn = null;
				self.ToMainBtn = null;
				self.ToSetBtn = null;
				self.ToBagBtn = null;
				self.DownBtn = null;
				self.ChatBtn = null;
				self.n99 = null;
				self.n100 = null;
				self.SendBtn = null;
				self.CloseBtn = null;
				self.InputText = null;
				self.ChatPanel = null;
				self.MainPanel.Dispose();
				self.MainPanel = null;

            }
        }
    }

    [FUI(typeof(FUIMainPanel), UIPackageName, UIResName)]
    public sealed class FUIMainPanel: Entity, IAwake, IDestroy
    {
        public const string UIPackageName = "FMain";
        public const string UIResName = "UIMainPanel";

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

		public Controller BattlePanelC { get; set; }
		public Controller ShowChatC { get; set; }
		public GImage n1 { get; set; }
		public GImage n24 { get; set; }
		public GTextField CharacterFighting { get; set; }
		public GTextField CharacterName { get; set; }
		public GTextField CharacterLevel { get; set; }
		public GTextField GoldCount { get; set; }
		public GTextField GemCount { get; set; }
		public GImage n3 { get; set; }
		public GImage n2 { get; set; }
		public GLoader CharacterIcon { get; set; }
		public GTextField CharacterGender { get; set; }
		public GGroup TopInfo { get; set; }
		public GImage HPBar { get; set; }
		public GImage MPBar { get; set; }
		public GImage n21 { get; set; }
		public GImage EXPBar { get; set; }
		public GTextField CurrHPText { get; set; }
		public GTextField CurrMPText { get; set; }
		public FButton_Slot ToEquipBtn { get; set; }
		public FButton_Slot ToBattleBtn { get; set; }
		public FButton_Slot ToMainBtn { get; set; }
		public FButton_Slot ToSetBtn { get; set; }
		public FButton_Slot ToBagBtn { get; set; }
		public GGroup DownBtn { get; set; }
		public FButton4_Normal ChatBtn { get; set; }
		public GImage n99 { get; set; }
		public GImage n100 { get; set; }
		public FButton4_Normal SendBtn { get; set; }
		public FButton_Close CloseBtn { get; set; }
		public GRichTextField InputText { get; set; }
		public GGroup ChatPanel { get; set; }
		public FUIMain MainPanel { get; set; }


        public const string URL = "ui://t4ymdfnhci540";
    }
}