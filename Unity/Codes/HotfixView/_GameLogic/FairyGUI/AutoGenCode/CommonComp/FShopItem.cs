/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

using FairyGUI;
using System.Threading.Tasks;

namespace ET
{
    [ObjectSystem]
    public class FShopItemAwakeSystem : AwakeSystem<FShopItem, FUI>
    {
        public override void Awake(FShopItem self, FUI fui)
        {
            self.Awake(fui);
        }
    }
        
    public sealed class FShopItem : Entity, IAwake<FUI>
    {	
        public const string UIPackageName = "CommonComp";
        public const string UIResName = "ShopItem";
        
        /// <summary>
        /// {uiResName}的组件类型(GComponent、GButton、GProcessBar等)，它们都是GObject的子类。
        /// </summary>
        public GButton selfGObj;
		public FUI selfFUIRoot;
            
        public Controller button;
        public GImage n0;
        public GImage n1;
        public GImage n2;
        public GTextField ItemName;
        public GTextField Price;
        public GLoader ItemIcon;
        public const string URL = "ui://o9z9wblxs0zo6g";

        /// <summary>
        /// 通过此方法获取的FUI，在Dispose时不会释放GObject，需要自行管理（一般在配合FGUI的Pool机制时使用）。
        /// </summary>
        //public static FShopItem GetFormPool(Entity domain, GObject go)
        //{
			//  var fui = go.Get<FShopItem>();

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
			selfGObj = (GButton)fui.gObject;
        
			selfGObj.Add(fui);
        
			var com = fui.gObject.asCom;
            
			if(com != null)
			{
    			button = com.GetControllerAt(0);
    			n0 = (GImage)com.GetChildAt(0);
    			n1 = (GImage)com.GetChildAt(1);
    			n2 = (GImage)com.GetChildAt(2);
    			ItemName = (GTextField)com.GetChildAt(3);
    			Price = (GTextField)com.GetChildAt(4);
    			ItemIcon = (GLoader)com.GetChildAt(5);
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
    		n1 = null;
    		n2 = null;
    		ItemName = null;
    		Price = null;
    		ItemIcon = null;
    	}
}
}