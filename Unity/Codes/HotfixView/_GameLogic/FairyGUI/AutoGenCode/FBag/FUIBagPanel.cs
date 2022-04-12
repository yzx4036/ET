/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

using FairyGUI;
using System.Threading.Tasks;

namespace ET
{
    [ObjectSystem]
    public class FUIBagPanelAwakeSystem : AwakeSystem<FUIBagPanel, GObject>
    {
        public override void Awake(FUIBagPanel self, GObject go)
        {
            self.Awake(go);
        }
    }
        
    [FUI(typeof(FUIBagPanel), UIPackageName, UIResName)]
    public sealed class FUIBagPanel : FUI
    {	
        public const string UIPackageName = "FBag";
        public const string UIResName = "UIBagPanel";
        
        /// <summary>
        /// {uiResName}的组件类型(GComponent、GButton、GProcessBar等)，它们都是GObject的子类。
        /// </summary>
        public GComponent self;
            
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
    			n0 = (GImage)com.GetChildAt(0);
    			n1 = (GTextField)com.GetChildAt(1);
    			BG = (GGroup)com.GetChildAt(2);
    			CloseBtn = AddChild<FButton_Close, GObject>(com.GetChildAt(3));
    			ItemList = (GList)com.GetChildAt(4);
    			n5 = (GImage)com.GetChildAt(5);
    			RefreshBtn = AddChild<FButton4_Normal, GObject>(com.GetChildAt(6));
    			SellBtn = AddChild<FButton4_Normal, GObject>(com.GetChildAt(7));
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