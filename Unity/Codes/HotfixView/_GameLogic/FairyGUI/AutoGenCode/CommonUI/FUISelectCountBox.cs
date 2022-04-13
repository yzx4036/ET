/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

using FairyGUI;
using System.Threading.Tasks;

namespace ET
{
    [ObjectSystem]
    public class FUISelectCountBoxAwakeSystem : AwakeSystem<FUISelectCountBox, FUI>
    {
        public override void Awake(FUISelectCountBox self, FUI fui)
        {
            self.Awake(fui);
        }
    }
        
    [FriendClass(typeof(FUI))]
    [FUI(typeof(FUISelectCountBox), UIPackageName, UIResName)]
    public sealed class FUISelectCountBox : Entity, IAwake<FUI>
    {	
        public const string UIPackageName = "CommonUI";
        public const string UIResName = "UISelectCountBox";
        
        /// <summary>
        /// {uiResName}的组件类型(GComponent、GButton、GProcessBar等)，它们都是GObject的子类。
        /// </summary>
        public GComponent selfGObj;
		public FUI selfFUIRoot;
            
        public GImage n0;
        public GTextField n1;
        public GTextField n2;
        public GImage n3;
        public GImage n4;
        public GLoader ItemIcon;
        public GTextField ItemName;
        public GTextField ItemPrice;
        public GTextField n8;
        public GTextInput BuyCount;
        public GImage n10;
        public GTextField n11;
        public GTextField MaxPrice;
        public FButton_Normal CancelBtn;
        public FButton_Normal MoreBuyBtn;
        public GGroup MoreBuyPanel;
        public const string URL = "ui://4q3uyng0gntb5";

        /// <summary>
        /// 通过此方法获取的FUI，在Dispose时不会释放GObject，需要自行管理（一般在配合FGUI的Pool机制时使用）。
        /// </summary>
        //public static FUISelectCountBox GetFormPool(Entity domain, GObject go)
        //{
			//  var fui = go.Get<FUISelectCountBox>();

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
    			n2 = (GTextField)com.GetChildAt(2);
    			n3 = (GImage)com.GetChildAt(3);
    			n4 = (GImage)com.GetChildAt(4);
    			ItemIcon = (GLoader)com.GetChildAt(5);
    			ItemName = (GTextField)com.GetChildAt(6);
    			ItemPrice = (GTextField)com.GetChildAt(7);
    			n8 = (GTextField)com.GetChildAt(8);
    			BuyCount = (GTextInput)com.GetChildAt(9);
    			n10 = (GImage)com.GetChildAt(10);
    			n11 = (GTextField)com.GetChildAt(11);
    			MaxPrice = (GTextField)com.GetChildAt(12);
    			CancelBtn = CreateFUICompInst<FButton_Normal>(com.GetChildAt(13));
    			MoreBuyBtn = CreateFUICompInst<FButton_Normal>(com.GetChildAt(14));
    			MoreBuyPanel = (GGroup)com.GetChildAt(15);
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
    		n2 = null;
    		n3 = null;
    		n4 = null;
    		ItemIcon = null;
    		ItemName = null;
    		ItemPrice = null;
    		n8 = null;
    		BuyCount = null;
    		n10 = null;
    		n11 = null;
    		MaxPrice = null;
    		CancelBtn = null;
    		MoreBuyBtn = null;
    		MoreBuyPanel = null;
    	}
}
}