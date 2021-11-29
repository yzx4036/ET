/** This is an automatically generated class by FairyGUI plugin FGUI2ET. Please do not modify it. **/

using System.Threading.Tasks;
using FairyGUI;
using DCET.Hotfix;

namespace ET.UICharacterSelect
{
    [ObjectSystem]
    public class FUICharacterSelectAwakeSystem : AwakeSystem<FUICharacterSelect, GObject>
    {
        public override void Awake(FUICharacterSelect self, GObject go)
        {
            self.Awake(go);
        }
    }
	
	public sealed class FUICharacterSelect : FUI
	{	
		public const string UIPackageName = "UICharacterSelect";
		public const string UIResName = "FUICharacterSelect";
		
		/// <summary>
        /// FUICharacterSelect的组件类型(GComponent、GButton、GProcessBar等)，它们都是GObject的子类。
        /// </summary>
		public GComponent self;
		
		public Controller ClassButtonC;
		public Controller GenderBtnC;
		public Controller CreatePanelC;
		public GImage n2;
		public UIAssets.Button6_Normal StartBtn;
		public UIAssets.Button6_Normal ToCreateBtn;
		public GList CharacterList;
		public GLoader CharacterIcon;
		public GGroup SelectPanel;
		public GImage n7;
		public Mask n32;
		public UIAssets.Button_Close BtnClose;
		public UIAssets.ButtonZ Button_Z;
		public UIAssets.Button_F ButtonF;
		public UIAssets.Button_D Button_D;
		public UIAssets.Button_Boy BoyBtn;
		public UIAssets.Button_Gril GrilBtn;
		public GImage n15;
		public UIAssets.Button_Create CreateBtn;
		public GTextInput CharacterName;
		public GGroup CreatePanel;

		private static GObject CreateGObject()
        {
            return UIPackage.CreateObject(UIPackageName, UIResName);
        }
		
		private static void CreateGObjectAsync(UIPackage.CreateObjectCallback result)
        {
            UIPackage.CreateObjectAsync(UIPackageName, UIResName, result);
        }

        public static FUICharacterSelect CreateInstance(Entity domain)
		{			
			return EntityFactory.Create<FUICharacterSelect, GObject>(domain, CreateGObject());
		}

        public static Task<FUICharacterSelect> CreateInstanceAsync(Entity domain)
        {
            TaskCompletionSource<FUICharacterSelect> tcs = new TaskCompletionSource<FUICharacterSelect>();

            CreateGObjectAsync((go) =>
            {
                tcs.SetResult(EntityFactory.Create<FUICharacterSelect, GObject>(domain, go));
            });

            return tcs.Task;
        }

        public static FUICharacterSelect Create(Entity domain, GObject go)
		{
			return EntityFactory.Create<FUICharacterSelect, GObject>(domain, go);
		}
		
        /// <summary>
        /// 通过此方法获取的FUI，在Dispose时不会释放GObject，需要自行管理（一般在配合FGUI的Pool机制时使用）。
        /// </summary>
        public static FUICharacterSelect GetFormPool(Entity domain, GObject go)
        {
            var fui = go.Get<FUICharacterSelect>();

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
				ClassButtonC = com.GetController("ClassButtonC");
				GenderBtnC = com.GetController("GenderBtnC");
				CreatePanelC = com.GetController("CreatePanelC");
				n2 = (GImage)com.GetChild("n2");
				StartBtn = UIAssets.Button6_Normal.Create(com.GetChild("StartBtn"));
				ToCreateBtn = UIAssets.Button6_Normal.Create(com.GetChild("ToCreateBtn"));
				CharacterList = (GList)com.GetChild("CharacterList");
				CharacterIcon = (GLoader)com.GetChild("CharacterIcon");
				SelectPanel = (GGroup)com.GetChild("SelectPanel");
				n7 = (GImage)com.GetChild("n7");
				n32 = Mask.Create(com.GetChild("n32"));
				BtnClose = UIAssets.Button_Close.Create(com.GetChild("BtnClose"));
				Button_Z = UIAssets.ButtonZ.Create(com.GetChild("Button_Z"));
				ButtonF = UIAssets.Button_F.Create(com.GetChild("ButtonF"));
				Button_D = UIAssets.Button_D.Create(com.GetChild("Button_D"));
				BoyBtn = UIAssets.Button_Boy.Create(com.GetChild("BoyBtn"));
				GrilBtn = UIAssets.Button_Gril.Create(com.GetChild("GrilBtn"));
				n15 = (GImage)com.GetChild("n15");
				CreateBtn = UIAssets.Button_Create.Create(com.GetChild("CreateBtn"));
				CharacterName = (GTextInput)com.GetChild("CharacterName");
				CreatePanel = (GGroup)com.GetChild("CreatePanel");
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
			ClassButtonC = null;
			GenderBtnC = null;
			CreatePanelC = null;
			n2 = null;
			StartBtn.Dispose();
			StartBtn = null;
			ToCreateBtn.Dispose();
			ToCreateBtn = null;
			CharacterList = null;
			CharacterIcon = null;
			SelectPanel = null;
			n7 = null;
			n32.Dispose();
			n32 = null;
			BtnClose.Dispose();
			BtnClose = null;
			Button_Z.Dispose();
			Button_Z = null;
			ButtonF.Dispose();
			ButtonF = null;
			Button_D.Dispose();
			Button_D = null;
			BoyBtn.Dispose();
			BoyBtn = null;
			GrilBtn.Dispose();
			GrilBtn = null;
			n15 = null;
			CreateBtn.Dispose();
			CreateBtn = null;
			CharacterName = null;
			CreatePanel = null;
		}
	}
}