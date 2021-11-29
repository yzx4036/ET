/** This is an automatically generated class by FairyGUI plugin FGUI2ET. Please do not modify it. **/

using System.Threading.Tasks;
using FairyGUI;
using DCET.Hotfix;

namespace ET.UIBattle
{
    [ObjectSystem]
    public class FUIBattlePanelAwakeSystem : AwakeSystem<FUIBattlePanel, GObject>
    {
        public override void Awake(FUIBattlePanel self, GObject go)
        {
            self.Awake(go);
        }
    }
	
	public sealed class FUIBattlePanel : FUI
	{	
		public const string UIPackageName = "UIBattle";
		public const string UIResName = "FUIBattlePanel";
		
		/// <summary>
        /// FUIBattlePanel的组件类型(GComponent、GButton、GProcessBar等)，它们都是GObject的子类。
        /// </summary>
		public GComponent self;
		
		public Controller ShowChatC;
		public GLoader MapBG;
		public GTextField MapName;
		public UIAssets.Button4_Normal SkillSetBtn;
		public UIAssets.Button4_Normal BattleSetBtn;
		public UIAssets.Button4_Normal ItemSetBtn;
		public UIAssets.Button4_Normal ReturnBtn;
		public GImage n6;
		public GImage n7;
		public UIAssets.Button4_Normal SendBtn;
		public UIAssets.Button_Close CloseBtn;
		public GRichTextField InputText;
		public GGroup ChatPanel;
		public UIAssets.Button4_Normal ChatBtn;
		public UIAssets.UseItemButton UseItem1;
		public UIAssets.UseItemButton UseItem2;
		public UIAssets.UseItemButton UseItem3;
		public UIAssets.UseItemButton UseItem4;

		private static GObject CreateGObject()
        {
            return UIPackage.CreateObject(UIPackageName, UIResName);
        }
		
		private static void CreateGObjectAsync(UIPackage.CreateObjectCallback result)
        {
            UIPackage.CreateObjectAsync(UIPackageName, UIResName, result);
        }

        public static FUIBattlePanel CreateInstance(Entity domain)
		{			
			return EntityFactory.Create<FUIBattlePanel, GObject>(domain, CreateGObject());
		}

        public static Task<FUIBattlePanel> CreateInstanceAsync(Entity domain)
        {
            TaskCompletionSource<FUIBattlePanel> tcs = new TaskCompletionSource<FUIBattlePanel>();

            CreateGObjectAsync((go) =>
            {
                tcs.SetResult(EntityFactory.Create<FUIBattlePanel, GObject>(domain, go));
            });

            return tcs.Task;
        }

        public static FUIBattlePanel Create(Entity domain, GObject go)
		{
			return EntityFactory.Create<FUIBattlePanel, GObject>(domain, go);
		}
		
        /// <summary>
        /// 通过此方法获取的FUI，在Dispose时不会释放GObject，需要自行管理（一般在配合FGUI的Pool机制时使用）。
        /// </summary>
        public static FUIBattlePanel GetFormPool(Entity domain, GObject go)
        {
            var fui = go.Get<FUIBattlePanel>();

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
				ShowChatC = com.GetController("ShowChatC");
				MapBG = (GLoader)com.GetChild("MapBG");
				MapName = (GTextField)com.GetChild("MapName");
				SkillSetBtn = UIAssets.Button4_Normal.Create(com.GetChild("SkillSetBtn"));
				BattleSetBtn = UIAssets.Button4_Normal.Create(com.GetChild("BattleSetBtn"));
				ItemSetBtn = UIAssets.Button4_Normal.Create(com.GetChild("ItemSetBtn"));
				ReturnBtn = UIAssets.Button4_Normal.Create(com.GetChild("ReturnBtn"));
				n6 = (GImage)com.GetChild("n6");
				n7 = (GImage)com.GetChild("n7");
				SendBtn = UIAssets.Button4_Normal.Create(com.GetChild("SendBtn"));
				CloseBtn = UIAssets.Button_Close.Create(com.GetChild("CloseBtn"));
				InputText = (GRichTextField)com.GetChild("InputText");
				ChatPanel = (GGroup)com.GetChild("ChatPanel");
				ChatBtn = UIAssets.Button4_Normal.Create(com.GetChild("ChatBtn"));
				UseItem1 = UIAssets.UseItemButton.Create(com.GetChild("UseItem1"));
				UseItem2 = UIAssets.UseItemButton.Create(com.GetChild("UseItem2"));
				UseItem3 = UIAssets.UseItemButton.Create(com.GetChild("UseItem3"));
				UseItem4 = UIAssets.UseItemButton.Create(com.GetChild("UseItem4"));
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
			ShowChatC = null;
			MapBG = null;
			MapName = null;
			SkillSetBtn.Dispose();
			SkillSetBtn = null;
			BattleSetBtn.Dispose();
			BattleSetBtn = null;
			ItemSetBtn.Dispose();
			ItemSetBtn = null;
			ReturnBtn.Dispose();
			ReturnBtn = null;
			n6 = null;
			n7 = null;
			SendBtn.Dispose();
			SendBtn = null;
			CloseBtn.Dispose();
			CloseBtn = null;
			InputText = null;
			ChatPanel = null;
			ChatBtn.Dispose();
			ChatBtn = null;
			UseItem1.Dispose();
			UseItem1 = null;
			UseItem2.Dispose();
			UseItem2 = null;
			UseItem3.Dispose();
			UseItem3 = null;
			UseItem4.Dispose();
			UseItem4 = null;
		}
	}
}