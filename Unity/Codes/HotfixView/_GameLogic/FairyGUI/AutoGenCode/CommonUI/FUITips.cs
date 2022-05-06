/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

using FairyGUI;
using System.Threading.Tasks;

namespace ET
{
    [ObjectSystem]
    public class FUITipsAwakeSystem : AwakeSystem<FUITips, FUI>
    {
        public override void Awake(FUITips self, FUI fui)
        {
            self.Awake(fui);
        }
    }
        
    [FUI(typeof(FUITips), UIPackageName, UIResName)]
    public sealed class FUITips : Entity, IAwake<FUI>
    {	
        public const string UIPackageName = "CommonUI";
        public const string UIResName = "UITips";
        
        /// <summary>
        /// {uiResName}的组件类型(GComponent、GButton、GProcessBar等)，它们都是GObject的子类。
        /// </summary>
        public GComponent selfGObj;
		public FUI selfFUIRoot;
            
        public Controller ShowTypeC;
        public GImage n58;
        public GImage n45;
        public GImage n34;
        public GImage n38;
        public GImage n35;
        public GImage n37;
        public GImage n36;
        public GTextField ItemType;
        public GTextField ItemName;
        public GImage n41;
        public GLoader ItemIcon;
        public GTextField ItemLevel;
        public GTextField ItemClass;
        public GList AttrList;
        public GTextField SellPrice;
        public GTextField Endurance;
        public FButton_Tips EquipBtn;
        public FButton_Tips UseBtn;
        public FButton_Tips UnEquipBtn;
        public FButton_Tips LeftBtn;
        public FButton_Tips RightBtn;
        public FButton_Tips GetBtn;
        public FButton_Tips LockBtn;
        public const string URL = "ui://4q3uyng0oeq70";

        /// <summary>
        /// 通过此方法获取的FUI，在Dispose时不会释放GObject，需要自行管理（一般在配合FGUI的Pool机制时使用）。
        /// </summary>
        //public static FUITips GetFormPool(Entity domain, GObject go)
        //{
			//  var fui = go.Get<FUITips>();

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
    			ShowTypeC = com.GetControllerAt(0);
    			n58 = (GImage)com.GetChildAt(0);
    			n45 = (GImage)com.GetChildAt(1);
    			n34 = (GImage)com.GetChildAt(2);
    			n38 = (GImage)com.GetChildAt(3);
    			n35 = (GImage)com.GetChildAt(4);
    			n37 = (GImage)com.GetChildAt(5);
    			n36 = (GImage)com.GetChildAt(6);
    			ItemType = (GTextField)com.GetChildAt(7);
    			ItemName = (GTextField)com.GetChildAt(8);
    			n41 = (GImage)com.GetChildAt(9);
    			ItemIcon = (GLoader)com.GetChildAt(10);
    			ItemLevel = (GTextField)com.GetChildAt(11);
    			ItemClass = (GTextField)com.GetChildAt(12);
    			AttrList = (GList)com.GetChildAt(13);
    			SellPrice = (GTextField)com.GetChildAt(14);
    			Endurance = (GTextField)com.GetChildAt(15);
    			EquipBtn = CreateFUICompInst<FButton_Tips>(com.GetChildAt(16));
    			UseBtn = CreateFUICompInst<FButton_Tips>(com.GetChildAt(17));
    			UnEquipBtn = CreateFUICompInst<FButton_Tips>(com.GetChildAt(18));
    			LeftBtn = CreateFUICompInst<FButton_Tips>(com.GetChildAt(19));
    			RightBtn = CreateFUICompInst<FButton_Tips>(com.GetChildAt(20));
    			GetBtn = CreateFUICompInst<FButton_Tips>(com.GetChildAt(21));
    			LockBtn = CreateFUICompInst<FButton_Tips>(com.GetChildAt(22));
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
            
    		ShowTypeC = null;
    		n58 = null;
    		n45 = null;
    		n34 = null;
    		n38 = null;
    		n35 = null;
    		n37 = null;
    		n36 = null;
    		ItemType = null;
    		ItemName = null;
    		n41 = null;
    		ItemIcon = null;
    		ItemLevel = null;
    		ItemClass = null;
    		AttrList = null;
    		SellPrice = null;
    		Endurance = null;
    		EquipBtn = null;
    		UseBtn = null;
    		UnEquipBtn = null;
    		LeftBtn = null;
    		RightBtn = null;
    		GetBtn = null;
    		LockBtn = null;
    	}
}
}