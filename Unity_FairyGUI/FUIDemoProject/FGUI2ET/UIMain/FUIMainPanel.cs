/** This is an automatically generated class by FairyGUI plugin FGUI2ET. Please do not modify it. **/

using System.Threading.Tasks;
using FairyGUI;


namespace ET
{
    [ObjectSystem]
    public class FUIMainPanelAwakeSystem : AwakeSystem<FUIMainPanel, GObject>
    {
        public override void Awake(FUIMainPanel self, GObject go)
        {
            self.Awake(go);
        }
    }
	
	public sealed class FUIMainPanel : FUI
	{	
		public const string UIPackageName = "UIMain";
		public const string UIResName = "FUIMainPanel";
		
		/// <summary>
        /// FUIMainPanel的组件类型(GComponent、GButton、GProcessBar等)，它们都是GObject的子类。
        /// </summary>
		public GComponent self;
		
		public Controller BattlePanelC;
		public Controller ShowChatC;
		public GImage n1;
		public GImage n24;
		public GTextField CharacterFighting;
		public GTextField CharacterName;
		public GTextField CharacterLevel;
		public GTextField GoldCount;
		public GTextField GemCount;
		public GImage n3;
		public GImage n2;
		public GLoader CharacterIcon;
		public GTextField CharacterGender;
		public GGroup TopInfo;
		public GImage HPBar;
		public GImage MPBar;
		public GImage n21;
		public GImage EXPBar;
		public GTextField CurrHPText;
		public GTextField CurrMPText;
		public Button_Slot ToEquipBtn;
		public Button_Slot ToBattleBtn;
		public Button_Slot ToMainBtn;
		public Button_Slot ToSetBtn;
		public Button_Slot ToBagBtn;
		public GGroup DownBtn;
		public Button4_Normal ChatBtn;
		public GImage n99;
		public GImage n100;
		public Button4_Normal SendBtn;
		public Button_Close CloseBtn;
		public GRichTextField InputText;
		public GGroup ChatPanel;
		public FUIMain MainPanel;

		private static GObject CreateGObject()
        {
            return UIPackage.CreateObject(UIPackageName, UIResName);
        }
		
		private static void CreateGObjectAsync(UIPackage.CreateObjectCallback result)
        {
            UIPackage.CreateObjectAsync(UIPackageName, UIResName, result);
        }

        public static FUIMainPanel CreateInstance(Entity domain)
		{			
			return EntityFactory.Create<FUIMainPanel, GObject>(domain, CreateGObject());
		}

        public static Task<FUIMainPanel> CreateInstanceAsync(Entity domain)
        {
            TaskCompletionSource<FUIMainPanel> tcs = new TaskCompletionSource<FUIMainPanel>();

            CreateGObjectAsync((go) =>
            {
                tcs.SetResult(EntityFactory.Create<FUIMainPanel, GObject>(domain, go));
            });

            return tcs.Task;
        }

        public static FUIMainPanel Create(Entity domain, GObject go)
		{
			return EntityFactory.Create<FUIMainPanel, GObject>(domain, go);
		}
		
        /// <summary>
        /// 通过此方法获取的FUI，在Dispose时不会释放GObject，需要自行管理（一般在配合FGUI的Pool机制时使用）。
        /// </summary>
        public static FUIMainPanel GetFormPool(Entity domain, GObject go)
        {
            var fui = go.Get<FUIMainPanel>();

            if(fui == null)
            {
                fui = Create(domain, go);
            }

            fui.isFromFGUIPool = true;

            return fui;
        }
						
		public void Awake(GObject go)
		{
			if(go == null)
			{
				return;
			}
			
			GObject = go;	
			
			if (string.IsNullOrWhiteSpace(Name))
            {
				Name = Id.ToString();
            }
			
			self = (GComponent)go;
			
			self.Add(this);
			
			var com = go.asCom;
				
			if(com != null)
			{	
				BattlePanelC = com.GetController("BattlePanelC");
				ShowChatC = com.GetController("ShowChatC");
				n1 = (GImage)com.GetChild("n1");
				n24 = (GImage)com.GetChild("n24");
				CharacterFighting = (GTextField)com.GetChild("CharacterFighting");
				CharacterName = (GTextField)com.GetChild("CharacterName");
				CharacterLevel = (GTextField)com.GetChild("CharacterLevel");
				GoldCount = (GTextField)com.GetChild("GoldCount");
				GemCount = (GTextField)com.GetChild("GemCount");
				n3 = (GImage)com.GetChild("n3");
				n2 = (GImage)com.GetChild("n2");
				CharacterIcon = (GLoader)com.GetChild("CharacterIcon");
				CharacterGender = (GTextField)com.GetChild("CharacterGender");
				TopInfo = (GGroup)com.GetChild("TopInfo");
				HPBar = (GImage)com.GetChild("HPBar");
				MPBar = (GImage)com.GetChild("MPBar");
				n21 = (GImage)com.GetChild("n21");
				EXPBar = (GImage)com.GetChild("EXPBar");
				CurrHPText = (GTextField)com.GetChild("CurrHPText");
				CurrMPText = (GTextField)com.GetChild("CurrMPText");
				ToEquipBtn = Button_Slot.Create(domain, com.GetChild("ToEquipBtn"));
				ToBattleBtn = Button_Slot.Create(domain, com.GetChild("ToBattleBtn"));
				ToMainBtn = Button_Slot.Create(domain, com.GetChild("ToMainBtn"));
				ToSetBtn = Button_Slot.Create(domain, com.GetChild("ToSetBtn"));
				ToBagBtn = Button_Slot.Create(domain, com.GetChild("ToBagBtn"));
				DownBtn = (GGroup)com.GetChild("DownBtn");
				ChatBtn = Button4_Normal.Create(domain, com.GetChild("ChatBtn"));
				n99 = (GImage)com.GetChild("n99");
				n100 = (GImage)com.GetChild("n100");
				SendBtn = Button4_Normal.Create(domain, com.GetChild("SendBtn"));
				CloseBtn = Button_Close.Create(domain, com.GetChild("CloseBtn"));
				InputText = (GRichTextField)com.GetChild("InputText");
				ChatPanel = (GGroup)com.GetChild("ChatPanel");
				MainPanel = FUIMain.Create(domain, com.GetChild("MainPanel"));
			}
		}
		
		public override void Dispose()
		{
			if(IsDisposed)
			{
				return;
			}
			
			base.Dispose();
			
			self.Remove();
			self = null;
			BattlePanelC = null;
			ShowChatC = null;
			n1 = null;
			n24 = null;
			CharacterFighting = null;
			CharacterName = null;
			CharacterLevel = null;
			GoldCount = null;
			GemCount = null;
			n3 = null;
			n2 = null;
			CharacterIcon = null;
			CharacterGender = null;
			TopInfo = null;
			HPBar = null;
			MPBar = null;
			n21 = null;
			EXPBar = null;
			CurrHPText = null;
			CurrMPText = null;
			ToEquipBtn.Dispose();
			ToEquipBtn = null;
			ToBattleBtn.Dispose();
			ToBattleBtn = null;
			ToMainBtn.Dispose();
			ToMainBtn = null;
			ToSetBtn.Dispose();
			ToSetBtn = null;
			ToBagBtn.Dispose();
			ToBagBtn = null;
			DownBtn = null;
			ChatBtn.Dispose();
			ChatBtn = null;
			n99 = null;
			n100 = null;
			SendBtn.Dispose();
			SendBtn = null;
			CloseBtn.Dispose();
			CloseBtn = null;
			InputText = null;
			ChatPanel = null;
			MainPanel.Dispose();
			MainPanel = null;
		}
	}
}