/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

using FairyGUI;
using System.Threading.Tasks;

namespace ET
{
    [ObjectSystem]
    public class FUISettingAwakeSystem : AwakeSystem<FUISetting, FUI>
    {
        public override void Awake(FUISetting self, FUI fui)
        {
            self.Awake(fui);
        }
    }
        
    [FriendClass(typeof(FUI))]
    [FUI(typeof(FUISetting), UIPackageName, UIResName)]
    public sealed class FUISetting : Entity, IAwake<FUI>
    {	
        public const string UIPackageName = "FSetting";
        public const string UIResName = "UISetting";
        
        /// <summary>
        /// {uiResName}的组件类型(GComponent、GButton、GProcessBar等)，它们都是GObject的子类。
        /// </summary>
        public GComponent self;
            
        public GImage n87;
        public GTextField n88;
        public GImage n89;
        public GGroup BG;
        public FButton4_Normal OKBtn;
        public GTextField n82;
        public GTextField n83;
        public FButton_Normal KeyBtn;
        public FButton_Normal ExitBtn;
        public FButton_Close CloseBtn;
        public const string URL = "ui://ghgmkgsfia5960";

        /// <summary>
        /// 通过此方法获取的FUI，在Dispose时不会释放GObject，需要自行管理（一般在配合FGUI的Pool机制时使用）。
        /// </summary>
        //public static FUISetting GetFormPool(Entity domain, GObject go)
        //{
			//  var fui = go.Get<FUISetting>();

            //if(fui == null)
            //{
			//  fui = Create(domain, go);
			//}

			//fui.isFromFGUIPool = true;

			//return fui;
		//}
        
    	private T CreateFUICompInst<T>(GObject gObject) where T : Entity, IAwake<FUI>, new()
        {
			var _fui = this.AddChild<FUI, GObject>(gObject);
	        return _fui.AddComponent<T, FUI>(_fui);
        }
		
        public void Awake(FUI fui)
        {
			self = (GComponent)fui.gObject;
        
			self.Add(fui);
        
			var com = fui.gObject.asCom;
            
			if(com != null)
			{
    			n87 = (GImage)com.GetChildAt(0);
    			n88 = (GTextField)com.GetChildAt(1);
    			n89 = (GImage)com.GetChildAt(2);
    			BG = (GGroup)com.GetChildAt(3);
    			OKBtn = CreateFUICompInst<FButton4_Normal>(com.GetChildAt(4));
    			n82 = (GTextField)com.GetChildAt(5);
    			n83 = (GTextField)com.GetChildAt(6);
    			KeyBtn = CreateFUICompInst<FButton_Normal>(com.GetChildAt(7));
    			ExitBtn = CreateFUICompInst<FButton_Normal>(com.GetChildAt(8));
    			CloseBtn = CreateFUICompInst<FButton_Close>(com.GetChildAt(9));
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
            
    		n87 = null;
    		n88 = null;
    		n89 = null;
    		BG = null;
    		OKBtn = null;
    		n82 = null;
    		n83 = null;
    		KeyBtn = null;
    		ExitBtn = null;
    		CloseBtn = null;
    	}
}
}