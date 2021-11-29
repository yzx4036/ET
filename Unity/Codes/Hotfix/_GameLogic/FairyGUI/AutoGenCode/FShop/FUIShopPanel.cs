/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

using FairyGUI;
using System.Threading.Tasks;

namespace ET
{
    [ObjectSystem]
    public class FUIShopPanelAwakeSystem : AwakeSystem<FUIShopPanel, GObject>
    {
        public override void Awake(FUIShopPanel self, GObject go)
        {
            self.Awake(go);
        }
    }
        
    [FUI(typeof(FUIShopPanel), UIPackageName, UIResName)]
    public sealed class FUIShopPanel : FUI
    {	
        public const string UIPackageName = "FShop";
        public const string UIResName = "UIShopPanel";
        
        /// <summary>
        /// {uiResName}的组件类型(GComponent、GButton、GProcessBar等)，它们都是GObject的子类。
        /// </summary>
        public GComponent self;
            
        public Controller MoreBuyC;
        public GImage n7;
        public GImage n8;
        public GTextField Title;
        public GList ItemList;
        public FButton4_Normal ToMoreBuyBtn;
        public FButton4_Normal BuyBtn;
        public FButton_Close CloseBtn;
        public FUISelectCountBox MoreBuyPanel;
        public const string URL = "ui://8poeuut4s0zo1";

        /// <summary>
        /// 通过此方法获取的FUI，在Dispose时不会释放GObject，需要自行管理（一般在配合FGUI的Pool机制时使用）。
        /// </summary>
        //public static FUIShopPanel GetFormPool(Entity domain, GObject go)
        //{
			//  var fui = go.Get<FUIShopPanel>();

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
    			MoreBuyC = com.GetControllerAt(0);
    			n7 = (GImage)com.GetChildAt(0);
    			n8 = (GImage)com.GetChildAt(1);
    			Title = (GTextField)com.GetChildAt(2);
    			ItemList = (GList)com.GetChildAt(3);
    			ToMoreBuyBtn = AddChild<FButton4_Normal, GObject>(com.GetChildAt(4));
    			BuyBtn = AddChild<FButton4_Normal, GObject>(com.GetChildAt(5));
    			CloseBtn = AddChild<FButton_Close, GObject>(com.GetChildAt(6));
    			MoreBuyPanel = AddChild<FUISelectCountBox, GObject>(com.GetChildAt(7));
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
            
    		MoreBuyC = null;
    		n7 = null;
    		n8 = null;
    		Title = null;
    		ItemList = null;
    		ToMoreBuyBtn = null;
    		BuyBtn = null;
    		CloseBtn = null;
    		MoreBuyPanel = null;
    	}
}
}