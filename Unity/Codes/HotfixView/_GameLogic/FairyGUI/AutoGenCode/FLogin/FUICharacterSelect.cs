/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

using FairyGUI;
using System.Threading.Tasks;

namespace ET
{
    [ObjectSystem]
    public class FUICharacterSelectAwakeSystem : AwakeSystem<FUICharacterSelect, FUIGObjectComponent>
    {
        public override void Awake(FUICharacterSelect self, FUIGObjectComponent fui)
        {
            self.Awake(fui);
        }
    }
        
    [FUI(typeof(FUICharacterSelect), UIPackageName, UIResName)]
    public sealed class FUICharacterSelect : Entity, IAwake<FUIGObjectComponent>
    {	
        public const string UIPackageName = "FLogin";
        public const string UIResName = "UICharacterSelect";
        
        /// <summary>
        /// {uiResName}的组件类型(GComponent、GButton、GProcessBar等)，它们都是GObject的子类。
        /// </summary>
        public GComponent selfGObj;
		public FUIGObjectComponent selfFUIRoot;
            
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
        
    	private T CreateFUICompInst<T>(GObject gObject) where T : Entity, IAwake<FUIGObjectComponent>, new()
        {
			var _fui = this.AddChild<FUIGObjectComponent, GObject>(gObject);
	        return _fui.AddComponent<T, FUIGObjectComponent>(_fui);
        }
		
        public void Awake(FUIGObjectComponent fui)
        {
			selfFUIRoot = fui;
			selfGObj = (GComponent)fui.gObject;
        
			selfGObj.Add(fui);
        
			var com = fui.gObject.asCom;
            
			if(com != null)
			{
    			ClassButtonC = com.GetControllerAt(0);
    			GenderBtnC = com.GetControllerAt(1);
    			CreatePanelC = com.GetControllerAt(2);
    			n2 = (GImage)com.GetChildAt(0);
    			StartBtn = CreateFUICompInst<FButton6_Normal>(com.GetChildAt(1));
    			ToCreateBtn = CreateFUICompInst<FButton6_Normal>(com.GetChildAt(2));
    			CharacterList = (GList)com.GetChildAt(3);
    			CharacterIcon = (GLoader)com.GetChildAt(4);
    			SelectPanel = (GGroup)com.GetChildAt(5);
    			n7 = (GImage)com.GetChildAt(6);
    			n32 = CreateFUICompInst<FMask>(com.GetChildAt(7));
    			BtnClose = CreateFUICompInst<FButton_Close>(com.GetChildAt(8));
    			Button_Z = CreateFUICompInst<FButtonZ>(com.GetChildAt(9));
    			ButtonF = CreateFUICompInst<FButton_F>(com.GetChildAt(10));
    			Button_D = CreateFUICompInst<FButton_D>(com.GetChildAt(11));
    			BoyBtn = CreateFUICompInst<FButton_Boy>(com.GetChildAt(12));
    			GrilBtn = CreateFUICompInst<FButton_Gril>(com.GetChildAt(13));
    			n15 = (GImage)com.GetChildAt(14);
    			CreateBtn = CreateFUICompInst<FButton_Create>(com.GetChildAt(15));
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
            
            selfGObj.Remove();
            selfGObj = null;
			selfFUIRoot.Dispose();
			selfFUIRoot = null;
            
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