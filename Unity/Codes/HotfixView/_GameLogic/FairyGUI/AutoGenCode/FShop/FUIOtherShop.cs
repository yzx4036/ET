/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

using FairyGUI;
using System.Threading.Tasks;

namespace ET
{
    [ObjectSystem]
    public class FUIOtherShopAwakeSystem : AwakeSystem<FUIOtherShop, FUI>
    {
        public override void Awake(FUIOtherShop self, FUI fui)
        {
            self.Awake(fui);
        }
    }
        
    [FriendClass(typeof(FUI))]
    [FUI(typeof(FUIOtherShop), UIPackageName, UIResName)]
    public sealed class FUIOtherShop : Entity, IAwake<FUI>
    {	
        public const string UIPackageName = "FShop";
        public const string UIResName = "UIOtherShop";
        
        /// <summary>
        /// {uiResName}的组件类型(GComponent、GButton、GProcessBar等)，它们都是GObject的子类。
        /// </summary>
        public GComponent self;
            
        public GImage SelectBG;
        public GTextField n5;
        public FButton_Normal CloseBtn;
        public FButton_Shop ToNormalShopBtn;
        public FButton_Shop ToAdvShopBtn;
        public FButton_Shop ToSellBtn;
        public GGroup StartPanel;
        public const string URL = "ui://8poeuut4y1jy8";

        /// <summary>
        /// 通过此方法获取的FUI，在Dispose时不会释放GObject，需要自行管理（一般在配合FGUI的Pool机制时使用）。
        /// </summary>
        //public static FUIOtherShop GetFormPool(Entity domain, GObject go)
        //{
			//  var fui = go.Get<FUIOtherShop>();

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
			self = (GComponent)fui.gObject;
        
			self.Add(fui);
        
			var com = fui.gObject.asCom;
            
			if(com != null)
			{
    			SelectBG = (GImage)com.GetChildAt(0);
    			n5 = (GTextField)com.GetChildAt(1);
    			CloseBtn = CreateFUICompInst<FButton_Normal>(com.GetChildAt(2));
    			ToNormalShopBtn = CreateFUICompInst<FButton_Shop>(com.GetChildAt(3));
    			ToAdvShopBtn = CreateFUICompInst<FButton_Shop>(com.GetChildAt(4));
    			ToSellBtn = CreateFUICompInst<FButton_Shop>(com.GetChildAt(5));
    			StartPanel = (GGroup)com.GetChildAt(6);
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
    		n5 = null;
    		CloseBtn = null;
    		ToNormalShopBtn = null;
    		ToAdvShopBtn = null;
    		ToSellBtn = null;
    		StartPanel = null;
    	}
}
}