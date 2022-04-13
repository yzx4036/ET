/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

using FairyGUI;
using System.Threading.Tasks;

namespace ET
{
    [ObjectSystem]
    public class FUISellPanelAwakeSystem : AwakeSystem<FUISellPanel, FUI>
    {
        public override void Awake(FUISellPanel self, FUI fui)
        {
            self.Awake(fui);
        }
    }
        
    [FriendClass(typeof(FUI))]
    [FUI(typeof(FUISellPanel), UIPackageName, UIResName)]
    public sealed class FUISellPanel : Entity, IAwake<FUI>
    {	
        public const string UIPackageName = "FShop";
        public const string UIResName = "UISellPanel";
        
        /// <summary>
        /// {uiResName}的组件类型(GComponent、GButton、GProcessBar等)，它们都是GObject的子类。
        /// </summary>
        public GComponent self;
            
        public GImage n0;
        public GTextField Title;
        public GGroup BG;
        public FButton_Close CloseBtn;
        public GList ItemList;
        public GImage n5;
        public FButton4_Normal SellBtn;
        public GTextField SellPrice;
        public GImage n9;
        public const string URL = "ui://8poeuut4s0zo3";

        /// <summary>
        /// 通过此方法获取的FUI，在Dispose时不会释放GObject，需要自行管理（一般在配合FGUI的Pool机制时使用）。
        /// </summary>
        //public static FUISellPanel GetFormPool(Entity domain, GObject go)
        //{
			//  var fui = go.Get<FUISellPanel>();

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
    			n0 = (GImage)com.GetChildAt(0);
    			Title = (GTextField)com.GetChildAt(1);
    			BG = (GGroup)com.GetChildAt(2);
    			CloseBtn = CreateFUICompInst<FButton_Close>(com.GetChildAt(3));
    			ItemList = (GList)com.GetChildAt(4);
    			n5 = (GImage)com.GetChildAt(5);
    			SellBtn = CreateFUICompInst<FButton4_Normal>(com.GetChildAt(6));
    			SellPrice = (GTextField)com.GetChildAt(7);
    			n9 = (GImage)com.GetChildAt(8);
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
            
    		n0 = null;
    		Title = null;
    		BG = null;
    		CloseBtn = null;
    		ItemList = null;
    		n5 = null;
    		SellBtn = null;
    		SellPrice = null;
    		n9 = null;
    	}
}
}