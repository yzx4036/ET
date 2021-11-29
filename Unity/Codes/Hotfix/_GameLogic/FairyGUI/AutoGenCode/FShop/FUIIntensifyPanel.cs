/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

using FairyGUI;
using System.Threading.Tasks;

namespace ET
{
    [ObjectSystem]
    public class FUIIntensifyPanelAwakeSystem : AwakeSystem<FUIIntensifyPanel, GObject>
    {
        public override void Awake(FUIIntensifyPanel self, GObject go)
        {
            self.Awake(go);
        }
    }
        
    [FUI(typeof(FUIIntensifyPanel), UIPackageName, UIResName)]
    public sealed class FUIIntensifyPanel : FUI
    {	
        public const string UIPackageName = "FShop";
        public const string UIResName = "UIIntensifyPanel";
        
        /// <summary>
        /// {uiResName}的组件类型(GComponent、GButton、GProcessBar等)，它们都是GObject的子类。
        /// </summary>
        public GComponent self;
            
        public GImage SelectBG;
        public GTextField n1;
        public FButton_Normal CloseBtn;
        public FButton_Shop IntensifyBtn;
        public GTextField n7;
        public const string URL = "ui://8poeuut4s0zo4";

        /// <summary>
        /// 通过此方法获取的FUI，在Dispose时不会释放GObject，需要自行管理（一般在配合FGUI的Pool机制时使用）。
        /// </summary>
        //public static FUIIntensifyPanel GetFormPool(Entity domain, GObject go)
        //{
			//  var fui = go.Get<FUIIntensifyPanel>();

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
    			SelectBG = (GImage)com.GetChildAt(0);
    			n1 = (GTextField)com.GetChildAt(1);
    			CloseBtn = AddChild<FButton_Normal, GObject>(com.GetChildAt(2));
    			IntensifyBtn = AddChild<FButton_Shop, GObject>(com.GetChildAt(3));
    			n7 = (GTextField)com.GetChildAt(4);
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
            
    		SelectBG = null;
    		n1 = null;
    		CloseBtn = null;
    		IntensifyBtn = null;
    		n7 = null;
    	}
}
}