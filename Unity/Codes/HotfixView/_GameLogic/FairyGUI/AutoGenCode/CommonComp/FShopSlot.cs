/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

using FairyGUI;
using System.Threading.Tasks;

namespace ET
{
    [ObjectSystem]
    public class FShopSlotAwakeSystem : AwakeSystem<FShopSlot, FUIGObjectComponent>
    {
        public override void Awake(FShopSlot self, FUIGObjectComponent fui)
        {
            self.Awake(fui);
        }
    }
        
    public sealed class FShopSlot : Entity, IAwake<FUIGObjectComponent>
    {	
        public const string UIPackageName = "CommonComp";
        public const string UIResName = "ShopSlot";
        
        /// <summary>
        /// {uiResName}的组件类型(GComponent、GButton、GProcessBar等)，它们都是GObject的子类。
        /// </summary>
        public GButton selfGObj;
		public FUIGObjectComponent selfFUIRoot;
            
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
        
    	private T CreateFUICompInst<T>(GObject gObject) where T : Entity, IAwake<FUIGObjectComponent>, new()
        {
			var _fui = this.AddChild<FUIGObjectComponent, GObject>(gObject);
	        return _fui.AddComponent<T, FUIGObjectComponent>(_fui);
        }
		
        public void Awake(FUIGObjectComponent fui)
        {
			selfFUIRoot = fui;
			selfGObj = (GButton)fui.gObject;
        
			selfGObj.Add(fui);
        
			var com = fui.gObject.asCom;
            
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
            
            selfGObj.Remove();
            selfGObj = null;
			selfFUIRoot.Dispose();
			selfFUIRoot = null;
            
    		button = null;
    		n0 = null;
    		icon = null;
    		count = null;
    		n1 = null;
    	}
}
}