/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

using FairyGUI;
using System.Threading.Tasks;

namespace ET
{
    [ObjectSystem]
    public class FButton4_NormalAwakeSystem : AwakeSystem<FButton4_Normal, GObject>
    {
        public override void Awake(FButton4_Normal self, GObject go)
        {
            self.Awake(go);
        }
    }
        
    public sealed class FButton4_Normal : FUI
    {	
        public const string UIPackageName = "CommonComp";
        public const string UIResName = "Button4_Normal";
        
        /// <summary>
        /// {uiResName}的组件类型(GComponent、GButton、GProcessBar等)，它们都是GObject的子类。
        /// </summary>
        public GButton self;
            
        public Controller button;
        public GImage n0;
        public GImage n1;
        public GTextField title;
        public const string URL = "ui://o9z9wblxuvgs12";

        /// <summary>
        /// 通过此方法获取的FUI，在Dispose时不会释放GObject，需要自行管理（一般在配合FGUI的Pool机制时使用）。
        /// </summary>
        //public static FButton4_Normal GetFormPool(Entity domain, GObject go)
        //{
			//  var fui = go.Get<FButton4_Normal>();

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
        
			self = (GButton)go;
        
			self.Add(this);
        
			var com = go.asCom;
            
			if(com != null)
			{
    			button = com.GetControllerAt(0);
    			n0 = (GImage)com.GetChildAt(0);
    			n1 = (GImage)com.GetChildAt(1);
    			title = (GTextField)com.GetChildAt(2);
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
            
    		button = null;
    		n0 = null;
    		n1 = null;
    		title = null;
    	}
}
}