/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

using FairyGUI;
using System.Threading.Tasks;

namespace ET
{
    [ObjectSystem]
    public class FUIArmorShopAwakeSystem : AwakeSystem<FUIArmorShop, FUIGObjectComponent>
    {
        public override void Awake(FUIArmorShop self, FUIGObjectComponent fui)
        {
            self.Awake(fui);
        }
    }
        
    [FUI(typeof(FUIArmorShop), UIPackageName, UIResName)]
    public sealed class FUIArmorShop : Entity, IAwake<FUIGObjectComponent>
    {	
        public const string UIPackageName = "FShop";
        public const string UIResName = "UIArmorShop";
        
        /// <summary>
        /// {uiResName}的组件类型(GComponent、GButton、GProcessBar等)，它们都是GObject的子类。
        /// </summary>
        public GComponent selfGObj;
		public FUIGObjectComponent selfFUIRoot;
            
        public Controller ShopPanelC;
        public GImage SelectBG;
        public GTextField n5;
        public FButton_Normal CloseBtn;
        public FButton_Shop ToBuyBtn;
        public FButton_Shop ToSellBtn;
        public FButton_Shop ToFixBtn;
        public FUIFixPanel FixPanel;
        public GGroup StartPanel;
        public const string URL = "ui://8poeuut4qycq5";

        /// <summary>
        /// 通过此方法获取的FUI，在Dispose时不会释放GObject，需要自行管理（一般在配合FGUI的Pool机制时使用）。
        /// </summary>
        //public static FUIArmorShop GetFormPool(Entity domain, GObject go)
        //{
			//  var fui = go.Get<FUIArmorShop>();

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
			selfGObj = (GComponent)fui.gObject;
        
			selfGObj.Add(fui);
        
			var com = fui.gObject.asCom;
            
			if(com != null)
			{
    			ShopPanelC = com.GetControllerAt(0);
    			SelectBG = (GImage)com.GetChildAt(0);
    			n5 = (GTextField)com.GetChildAt(1);
    			CloseBtn = CreateFUICompInst<FButton_Normal>(com.GetChildAt(2));
    			ToBuyBtn = CreateFUICompInst<FButton_Shop>(com.GetChildAt(3));
    			ToSellBtn = CreateFUICompInst<FButton_Shop>(com.GetChildAt(4));
    			ToFixBtn = CreateFUICompInst<FButton_Shop>(com.GetChildAt(5));
    			FixPanel = CreateFUICompInst<FUIFixPanel>(com.GetChildAt(6));
    			StartPanel = (GGroup)com.GetChildAt(7);
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
            
    		ShopPanelC = null;
    		SelectBG = null;
    		n5 = null;
    		CloseBtn = null;
    		ToBuyBtn = null;
    		ToSellBtn = null;
    		ToFixBtn = null;
    		FixPanel.Dispose();
    		FixPanel = null;
    		StartPanel = null;
    	}
}
}