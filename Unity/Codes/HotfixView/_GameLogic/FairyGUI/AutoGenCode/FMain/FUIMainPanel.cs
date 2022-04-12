/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

using FairyGUI;
using System.Threading.Tasks;

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
        
    [FUI(typeof(FUIMainPanel), UIPackageName, UIResName)]
    public sealed class FUIMainPanel : FUI
    {	
        public const string UIPackageName = "FMain";
        public const string UIResName = "UIMainPanel";
        
        /// <summary>
        /// {uiResName}的组件类型(GComponent、GButton、GProcessBar等)，它们都是GObject的子类。
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
        public FButton_Slot ToEquipBtn;
        public FButton_Slot ToBattleBtn;
        public FButton_Slot ToMainBtn;
        public FButton_Slot ToSetBtn;
        public FButton_Slot ToBagBtn;
        public GGroup DownBtn;
        public FButton4_Normal ChatBtn;
        public GImage n99;
        public GImage n100;
        public FButton4_Normal SendBtn;
        public FButton_Close CloseBtn;
        public GRichTextField InputText;
        public GGroup ChatPanel;
        public FUIMain MainPanel;
        public const string URL = "ui://t4ymdfnhci540";

        /// <summary>
        /// 通过此方法获取的FUI，在Dispose时不会释放GObject，需要自行管理（一般在配合FGUI的Pool机制时使用）。
        /// </summary>
        //public static FUIMainPanel GetFormPool(Entity domain, GObject go)
        //{
			//  var fui = go.Get<FUIMainPanel>();

            //if(fui == null)
            //{
			//  fui = Create(domain, go);
			//}

			//fui.isFromFGUIPool = true;

			//return fui;
		//}
        
        public void Awake(GObject go)
        {
            if(go == null)
            {
                return;
			}
        
			GObject = go;	
        
			if (string.IsNullOrWhiteSpace(Name))
			{
				Name = UIResName;
			}
        
			self = (GComponent)go;
        
			self.Add(this);
        
			var com = go.asCom;
            
			if(com != null)
			{
    			BattlePanelC = com.GetControllerAt(0);
    			ShowChatC = com.GetControllerAt(1);
    			n1 = (GImage)com.GetChildAt(0);
    			n24 = (GImage)com.GetChildAt(1);
    			CharacterFighting = (GTextField)com.GetChildAt(2);
    			CharacterName = (GTextField)com.GetChildAt(3);
    			CharacterLevel = (GTextField)com.GetChildAt(4);
    			GoldCount = (GTextField)com.GetChildAt(5);
    			GemCount = (GTextField)com.GetChildAt(6);
    			n3 = (GImage)com.GetChildAt(7);
    			n2 = (GImage)com.GetChildAt(8);
    			CharacterIcon = (GLoader)com.GetChildAt(9);
    			CharacterGender = (GTextField)com.GetChildAt(10);
    			TopInfo = (GGroup)com.GetChildAt(11);
    			HPBar = (GImage)com.GetChildAt(12);
    			MPBar = (GImage)com.GetChildAt(13);
    			n21 = (GImage)com.GetChildAt(14);
    			EXPBar = (GImage)com.GetChildAt(15);
    			CurrHPText = (GTextField)com.GetChildAt(16);
    			CurrMPText = (GTextField)com.GetChildAt(17);
    			ToEquipBtn = AddChild<FButton_Slot, GObject>(com.GetChildAt(18));
    			ToBattleBtn = AddChild<FButton_Slot, GObject>(com.GetChildAt(19));
    			ToMainBtn = AddChild<FButton_Slot, GObject>(com.GetChildAt(20));
    			ToSetBtn = AddChild<FButton_Slot, GObject>(com.GetChildAt(21));
    			ToBagBtn = AddChild<FButton_Slot, GObject>(com.GetChildAt(22));
    			DownBtn = (GGroup)com.GetChildAt(23);
    			ChatBtn = AddChild<FButton4_Normal, GObject>(com.GetChildAt(24));
    			n99 = (GImage)com.GetChildAt(25);
    			n100 = (GImage)com.GetChildAt(26);
    			SendBtn = AddChild<FButton4_Normal, GObject>(com.GetChildAt(27));
    			CloseBtn = AddChild<FButton_Close, GObject>(com.GetChildAt(28));
    			InputText = (GRichTextField)com.GetChildAt(29);
    			ChatPanel = (GGroup)com.GetChildAt(30);
    			MainPanel = AddChild<FUIMain, GObject>(com.GetChildAt(31));
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
    		ToEquipBtn = null;
    		ToBattleBtn = null;
    		ToMainBtn = null;
    		ToSetBtn = null;
    		ToBagBtn = null;
    		DownBtn = null;
    		ChatBtn = null;
    		n99 = null;
    		n100 = null;
    		SendBtn = null;
    		CloseBtn = null;
    		InputText = null;
    		ChatPanel = null;
    		MainPanel.Dispose();
    		MainPanel = null;
    	}
}
}