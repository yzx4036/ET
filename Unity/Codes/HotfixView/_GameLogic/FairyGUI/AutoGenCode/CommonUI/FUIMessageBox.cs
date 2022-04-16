/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

using FairyGUI;
using System.Threading.Tasks;

namespace ET
{
    [ObjectSystem]
    public class FUIMessageBoxAwakeSystem : AwakeSystem<FUIMessageBox, FUI>
    {
        public override void Awake(FUIMessageBox self, FUI fui)
        {
            self.Awake(fui);
        }
    }
        
    [FUI(typeof(FUIMessageBox), UIPackageName, UIResName)]
    public sealed class FUIMessageBox : Entity, IAwake<FUI>
    {	
        public const string UIPackageName = "CommonUI";
        public const string UIResName = "UIMessageBox";
        
        /// <summary>
        /// {uiResName}的组件类型(GComponent、GButton、GProcessBar等)，它们都是GObject的子类。
        /// </summary>
        public GComponent selfGObj;
		public FUI selfFUIRoot;
            
        public Controller ButtonC;
        public GImage n15;
        public GTextField title;
        public GTextField Message;
        public FButton_Normal Two_NoBtn;
        public FButton_Normal Two_YesBtn;
        public GGroup TwoBtn;
        public FButton_Normal One_OkBtn;
        public GGroup OneBtn;
        public const string URL = "ui://4q3uyng0g2hv0";

        /// <summary>
        /// 通过此方法获取的FUI，在Dispose时不会释放GObject，需要自行管理（一般在配合FGUI的Pool机制时使用）。
        /// </summary>
        //public static FUIMessageBox GetFormPool(Entity domain, GObject go)
        //{
			//  var fui = go.Get<FUIMessageBox>();

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
			selfFUIRoot = fui;
			selfGObj = (GComponent)fui.gObject;
        
			selfGObj.Add(fui);
        
			var com = fui.gObject.asCom;
            
			if(com != null)
			{
    			ButtonC = com.GetControllerAt(0);
    			n15 = (GImage)com.GetChildAt(0);
    			title = (GTextField)com.GetChildAt(1);
    			Message = (GTextField)com.GetChildAt(2);
    			Two_NoBtn = CreateFUICompInst<FButton_Normal>(com.GetChildAt(3));
    			Two_YesBtn = CreateFUICompInst<FButton_Normal>(com.GetChildAt(4));
    			TwoBtn = (GGroup)com.GetChildAt(5);
    			One_OkBtn = CreateFUICompInst<FButton_Normal>(com.GetChildAt(6));
    			OneBtn = (GGroup)com.GetChildAt(7);
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
            
    		ButtonC = null;
    		n15 = null;
    		title = null;
    		Message = null;
    		Two_NoBtn = null;
    		Two_YesBtn = null;
    		TwoBtn = null;
    		One_OkBtn = null;
    		OneBtn = null;
    	}
}
}