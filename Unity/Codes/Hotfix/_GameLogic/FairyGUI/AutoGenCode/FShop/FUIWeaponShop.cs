/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

using FairyGUI;
using System.Threading.Tasks;

namespace ET
{
    [ObjectSystem]
    public class FUIWeaponShopAwakeSystem : AwakeSystem<FUIWeaponShop, GObject>
    {
        public override void Awake(FUIWeaponShop self, GObject go)
        {
            self.Awake(go);
        }
    }
        
    [FUI(typeof(FUIWeaponShop), UIPackageName, UIResName)]
    public sealed class FUIWeaponShop : FUI
    {	
        public const string UIPackageName = "FShop";
        public const string UIResName = "UIWeaponShop";
        
        /// <summary>
        /// {uiResName}的组件类型(GComponent、GButton、GProcessBar等)，它们都是GObject的子类。
        /// </summary>
        public GComponent self;
            
        public Controller ShopPanelC;
        public GImage SelectBG;
        public GTextField n5;
        public FButton_Normal CloseBtn;
        public FButton_Shop ToBuyBtn;
        public FButton_Shop ToSellBtn;
        public FButton_Shop ToFixBtn;
        public FButton_Shop ToIntensifyBtn;
        public FUIFixPanel FixPanel;
        public FUIIntensifyPanel IntensifyPanel;
        public GGroup StartPanel;
        public const string URL = "ui://8poeuut4q2hx0";

        /// <summary>
        /// 通过此方法获取的FUI，在Dispose时不会释放GObject，需要自行管理（一般在配合FGUI的Pool机制时使用）。
        /// </summary>
        //public static FUIWeaponShop GetFormPool(Entity domain, GObject go)
        //{
			//  var fui = go.Get<FUIWeaponShop>();

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
    			ShopPanelC = com.GetControllerAt(0);
    			SelectBG = (GImage)com.GetChildAt(0);
    			n5 = (GTextField)com.GetChildAt(1);
    			CloseBtn = AddChild<FButton_Normal, GObject>(com.GetChildAt(2));
    			ToBuyBtn = AddChild<FButton_Shop, GObject>(com.GetChildAt(3));
    			ToSellBtn = AddChild<FButton_Shop, GObject>(com.GetChildAt(4));
    			ToFixBtn = AddChild<FButton_Shop, GObject>(com.GetChildAt(5));
    			ToIntensifyBtn = AddChild<FButton_Shop, GObject>(com.GetChildAt(6));
    			FixPanel = AddChild<FUIFixPanel, GObject>(com.GetChildAt(7));
    			IntensifyPanel = AddChild<FUIIntensifyPanel, GObject>(com.GetChildAt(8));
    			StartPanel = (GGroup)com.GetChildAt(9);
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
            
    		ShopPanelC = null;
    		SelectBG = null;
    		n5 = null;
    		CloseBtn = null;
    		ToBuyBtn = null;
    		ToSellBtn = null;
    		ToFixBtn = null;
    		ToIntensifyBtn = null;
    		FixPanel.Dispose();
    		FixPanel = null;
    		IntensifyPanel.Dispose();
    		IntensifyPanel = null;
    		StartPanel = null;
    	}
}
}