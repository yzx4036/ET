/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

using FairyGUI;
using System.Threading.Tasks;

namespace ET
{
    [ObjectSystem]
    public class FUIMessageBoxAwakeSystem : AwakeSystem<FUIMessageBox, GObject>
    {
        public override void Awake(FUIMessageBox self, GObject go)
        {
            self.Awake(go);
        }
    }
        
    [FUI(typeof(FUIMessageBox), UIPackageName, UIResName)]
    public sealed class FUIMessageBox : FUI
    {	
        public const string UIPackageName = "CommonUI";
        public const string UIResName = "UIMessageBox";
        
        /// <summary>
        /// {uiResName}的组件类型(GComponent、GButton、GProcessBar等)，它们都是GObject的子类。
        /// </summary>
        public GComponent self;
            
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
    			ButtonC = com.GetControllerAt(0);
    			n15 = (GImage)com.GetChildAt(0);
    			title = (GTextField)com.GetChildAt(1);
    			Message = (GTextField)com.GetChildAt(2);
    			Two_NoBtn = AddChild<FButton_Normal, GObject>(com.GetChildAt(3));
    			Two_YesBtn = AddChild<FButton_Normal, GObject>(com.GetChildAt(4));
    			TwoBtn = (GGroup)com.GetChildAt(5);
    			One_OkBtn = AddChild<FButton_Normal, GObject>(com.GetChildAt(6));
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
            
            self.Remove();
            self = null;
            
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