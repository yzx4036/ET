/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

using FairyGUI;
using System.Threading.Tasks;

namespace ET
{
    [ObjectSystem]
    public class FUIFixPanelAwakeSystem : AwakeSystem<FUIFixPanel, FUI>
    {
        public override void Awake(FUIFixPanel self, FUI fui)
        {
            self.Awake(fui);
        }
    }
        
    [FriendClass(typeof(FUI))]
    [FUI(typeof(FUIFixPanel), UIPackageName, UIResName)]
    public sealed class FUIFixPanel : Entity, IAwake<FUI>
    {	
        public const string UIPackageName = "FShop";
        public const string UIResName = "UIFixPanel";
        
        /// <summary>
        /// {uiResName}的组件类型(GComponent、GButton、GProcessBar等)，它们都是GObject的子类。
        /// </summary>
        public GComponent selfGObj;
		public FUI selfFUIRoot;
            
        public GImage SelectBG;
        public GTextField n1;
        public FButton_Normal CloseBtn;
        public FButton_Shop AllNormalFixBtn;
        public FButton_Shop NormalFixBtn;
        public FButton_Shop GoodFixBtn;
        public FButton_Shop GoodAllFixBtn;
        public GTextField n7;
        public const string URL = "ui://8poeuut4s0zo2";

        /// <summary>
        /// 通过此方法获取的FUI，在Dispose时不会释放GObject，需要自行管理（一般在配合FGUI的Pool机制时使用）。
        /// </summary>
        //public static FUIFixPanel GetFormPool(Entity domain, GObject go)
        //{
			//  var fui = go.Get<FUIFixPanel>();

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
			selfGObj = (GComponent)fui.gObject;
        
			selfGObj.Add(fui);
        
			var com = fui.gObject.asCom;
            
			if(com != null)
			{
    			SelectBG = (GImage)com.GetChildAt(0);
    			n1 = (GTextField)com.GetChildAt(1);
    			CloseBtn = CreateFUICompInst<FButton_Normal>(com.GetChildAt(2));
    			AllNormalFixBtn = CreateFUICompInst<FButton_Shop>(com.GetChildAt(3));
    			NormalFixBtn = CreateFUICompInst<FButton_Shop>(com.GetChildAt(4));
    			GoodFixBtn = CreateFUICompInst<FButton_Shop>(com.GetChildAt(5));
    			GoodAllFixBtn = CreateFUICompInst<FButton_Shop>(com.GetChildAt(6));
    			n7 = (GTextField)com.GetChildAt(7);
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
            
    		SelectBG = null;
    		n1 = null;
    		CloseBtn = null;
    		AllNormalFixBtn = null;
    		NormalFixBtn = null;
    		GoodFixBtn = null;
    		GoodAllFixBtn = null;
    		n7 = null;
    	}
}
}