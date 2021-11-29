/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

using FairyGUI;
using System.Threading.Tasks;

namespace ET
{
    [ObjectSystem]
    public class FUICharacterSelectAwakeSystem : AwakeSystem<FUICharacterSelect, GObject>
    {
        public override void Awake(FUICharacterSelect self, GObject go)
        {
            self.Awake(go);
        }
    }
        
    [FUI(typeof(FUICharacterSelect), UIPackageName, UIResName)]
    public sealed class FUICharacterSelect : FUI
    {	
        public const string UIPackageName = "FLogin";
        public const string UIResName = "UICharacterSelect";
        
        /// <summary>
        /// {uiResName}的组件类型(GComponent、GButton、GProcessBar等)，它们都是GObject的子类。
        /// </summary>
        public GComponent self;
            
        public Controller ClassButtonC;
        public Controller GenderBtnC;
        public Controller CreatePanelC;
        public GImage n2;
        public FButton6_Normal StartBtn;
        public FButton6_Normal ToCreateBtn;
        public GList CharacterList;
        public GLoader CharacterIcon;
        public GGroup SelectPanel;
        public GImage n7;
        public FMask n32;
        public FButton_Close BtnClose;
        public FButtonZ Button_Z;
        public FButton_F ButtonF;
        public FButton_D Button_D;
        public FButton_Boy BoyBtn;
        public FButton_Gril GrilBtn;
        public GImage n15;
        public FButton_Create CreateBtn;
        public GTextInput CharacterName;
        public GGroup CreatePanel;
        public const string URL = "ui://nstug1qudh8k0";

        /// <summary>
        /// 通过此方法获取的FUI，在Dispose时不会释放GObject，需要自行管理（一般在配合FGUI的Pool机制时使用）。
        /// </summary>
        //public static FUICharacterSelect GetFormPool(Entity domain, GObject go)
        //{
			//  var fui = go.Get<FUICharacterSelect>();

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
    			ClassButtonC = com.GetControllerAt(0);
    			GenderBtnC = com.GetControllerAt(1);
    			CreatePanelC = com.GetControllerAt(2);
    			n2 = (GImage)com.GetChildAt(0);
    			StartBtn = AddChild<FButton6_Normal, GObject>(com.GetChildAt(1));
    			ToCreateBtn = AddChild<FButton6_Normal, GObject>(com.GetChildAt(2));
    			CharacterList = (GList)com.GetChildAt(3);
    			CharacterIcon = (GLoader)com.GetChildAt(4);
    			SelectPanel = (GGroup)com.GetChildAt(5);
    			n7 = (GImage)com.GetChildAt(6);
    			n32 = AddChild<FMask, GObject>(com.GetChildAt(7));
    			BtnClose = AddChild<FButton_Close, GObject>(com.GetChildAt(8));
    			Button_Z = AddChild<FButtonZ, GObject>(com.GetChildAt(9));
    			ButtonF = AddChild<FButton_F, GObject>(com.GetChildAt(10));
    			Button_D = AddChild<FButton_D, GObject>(com.GetChildAt(11));
    			BoyBtn = AddChild<FButton_Boy, GObject>(com.GetChildAt(12));
    			GrilBtn = AddChild<FButton_Gril, GObject>(com.GetChildAt(13));
    			n15 = (GImage)com.GetChildAt(14);
    			CreateBtn = AddChild<FButton_Create, GObject>(com.GetChildAt(15));
    			CharacterName = (GTextInput)com.GetChildAt(16);
    			CreatePanel = (GGroup)com.GetChildAt(17);
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
    		StartBtn = null;
    		ToCreateBtn = null;
    		CharacterList = null;
    		CharacterIcon = null;
    		SelectPanel = null;
    		n7 = null;
    		n32 = null;
    		BtnClose = null;
    		Button_Z = null;
    		ButtonF = null;
    		Button_D = null;
    		BoyBtn = null;
    		GrilBtn = null;
    		n15 = null;
    		CreateBtn = null;
    		CharacterName = null;
    		CreatePanel = null;
    	}
}
}