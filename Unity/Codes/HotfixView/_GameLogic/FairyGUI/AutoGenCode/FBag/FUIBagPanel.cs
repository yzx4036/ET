/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

using FairyGUI;
using System.Threading.Tasks;

namespace ET
{
    [ObjectSystem]
    public class FUIBagPanelAwakeSystem : AwakeSystem<FUIBagPanel, FUI>
    {
        public override void Awake(FUIBagPanel self, FUI fui)
        {
            self.Awake(fui);
        }
    }
        
    [FUI(typeof(FUIBagPanel), UIPackageName, UIResName)]
    public sealed class FUIBagPanel : Entity, IAwake<FUI>
    {	
        public const string UIPackageName = "FBag";
        public const string UIResName = "UIBagPanel";
        
        /// <summary>
        /// {uiResName}的组件类型(GComponent、GButton、GProcessBar等)，它们都是GObject的子类。
        /// </summary>
        public GComponent selfGObj;
		public FUI selfFUIRoot;
            
        public GImage n0;
        public GTextField n1;
        public GGroup BG;
        public FButton_Close CloseBtn;
        public GList ItemList;
        public GImage n5;
        public FButton4_Normal RefreshBtn;
        public FButton4_Normal SellBtn;
        public const string URL = "ui://gvvny798azrp5p";

        /// <summary>
        /// 通过此方法获取的FUI，在Dispose时不会释放GObject，需要自行管理（一般在配合FGUI的Pool机制时使用）。
        /// </summary>
        //public static FUIBagPanel GetFormPool(Entity domain, GObject go)
        //{
			//  var fui = go.Get<FUIBagPanel>();

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
    			n0 = (GImage)com.GetChildAt(0);
    			n1 = (GTextField)com.GetChildAt(1);
    			BG = (GGroup)com.GetChildAt(2);
    			CloseBtn = CreateFUICompInst<FButton_Close>(com.GetChildAt(3));
    			ItemList = (GList)com.GetChildAt(4);
    			n5 = (GImage)com.GetChildAt(5);
    			RefreshBtn = CreateFUICompInst<FButton4_Normal>(com.GetChildAt(6));
    			SellBtn = CreateFUICompInst<FButton4_Normal>(com.GetChildAt(7));
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
            
    		n0 = null;
    		n1 = null;
    		BG = null;
    		CloseBtn = null;
    		ItemList = null;
    		n5 = null;
    		RefreshBtn = null;
    		SellBtn = null;
    	}
}
}