/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

using FairyGUI;
using System.Threading.Tasks;

namespace ET
{
    [ObjectSystem]
    public class FShopSlotAwakeSystem : AwakeSystem<FShopSlot, GObject>
    {
        public override void Awake(FShopSlot self, GObject go)
        {
            self.Awake(go);
        }
    }
        
    public sealed class FShopSlot : FUI
    {	
        public const string UIPackageName = "CommonComp";
        public const string UIResName = "ShopSlot";
        
        /// <summary>
        /// {uiResName}的组件类型(GComponent、GButton、GProcessBar等)，它们都是GObject的子类。
        /// </summary>
        public GButton self;
            
        public Controller button;
        public GImage n0;
        public GLoader icon;
        public GTextField count;
        public GImage n1;
        public const string URL = "ui://o9z9wblxs0zo6h";

        /// <summary>
        /// 通过此方法获取的FUI，在Dispose时不会释放GObject，需要自行管理（一般在配合FGUI的Pool机制时使用）。
        /// </summary>
        //public static FShopSlot GetFormPool(Entity domain, GObject go)
        //{
			//  var fui = go.Get<FShopSlot>();

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
    			icon = (GLoader)com.GetChildAt(1);
    			count = (GTextField)com.GetChildAt(2);
    			n1 = (GImage)com.GetChildAt(3);
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
    		icon = null;
    		count = null;
    		n1 = null;
    	}
}
}