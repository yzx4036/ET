/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

using FairyGUI;
using System.Threading.Tasks;

namespace ET
{
    [ObjectSystem]
    public class FEquipSlotAwakeSystem : AwakeSystem<FEquipSlot, GObject>
    {
        public override void Awake(FEquipSlot self, GObject go)
        {
            self.Awake(go);
        }
    }
        
    public sealed class FEquipSlot : FUI
    {	
        public const string UIPackageName = "CommonComp";
        public const string UIResName = "EquipSlot";
        
        /// <summary>
        /// {uiResName}的组件类型(GComponent、GButton、GProcessBar等)，它们都是GObject的子类。
        /// </summary>
        public GButton self;
            
        public Controller button;
        public GImage n0;
        public GTextField title;
        public GLoader icon;
        public GTextField count;
        public const string URL = "ui://o9z9wblxci549";

        /// <summary>
        /// 通过此方法获取的FUI，在Dispose时不会释放GObject，需要自行管理（一般在配合FGUI的Pool机制时使用）。
        /// </summary>
        //public static FEquipSlot GetFormPool(Entity domain, GObject go)
        //{
			//  var fui = go.Get<FEquipSlot>();

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
    			title = (GTextField)com.GetChildAt(1);
    			icon = (GLoader)com.GetChildAt(2);
    			count = (GTextField)com.GetChildAt(3);
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
    		title = null;
    		icon = null;
    		count = null;
    	}
}
}