/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

using FairyGUI;
using System.Threading.Tasks;

namespace ET
{
    [ObjectSystem]
    public class FUseItemButtonAwakeSystem : AwakeSystem<FUseItemButton, GObject>
    {
        public override void Awake(FUseItemButton self, GObject go)
        {
            self.Awake(go);
        }
    }
        
    public sealed class FUseItemButton : FUI
    {	
        public const string UIPackageName = "CommonComp";
        public const string UIResName = "UseItemButton";
        
        /// <summary>
        /// {uiResName}的组件类型(GComponent、GButton、GProcessBar等)，它们都是GObject的子类。
        /// </summary>
        public GButton self;
            
        public Controller button;
        public GImage n0;
        public GLoader ItemIcon;
        public GLoader Mask;
        public GTextField title;
        public const string URL = "ui://o9z9wblxer0b1q";

        /// <summary>
        /// 通过此方法获取的FUI，在Dispose时不会释放GObject，需要自行管理（一般在配合FGUI的Pool机制时使用）。
        /// </summary>
        //public static FUseItemButton GetFormPool(Entity domain, GObject go)
        //{
			//  var fui = go.Get<FUseItemButton>();

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
    			ItemIcon = (GLoader)com.GetChildAt(1);
    			Mask = (GLoader)com.GetChildAt(2);
    			title = (GTextField)com.GetChildAt(3);
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
    		ItemIcon = null;
    		Mask = null;
    		title = null;
    	}
}
}