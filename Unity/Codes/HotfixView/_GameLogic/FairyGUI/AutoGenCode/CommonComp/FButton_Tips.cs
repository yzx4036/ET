/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

using FairyGUI;
using System.Threading.Tasks;

namespace ET
{
    [ObjectSystem]
    public class FButton_TipsAwakeSystem : AwakeSystem<FButton_Tips, FUIGObjectComponent>
    {
        public override void Awake(FButton_Tips self, FUIGObjectComponent fui)
        {
            self.Awake(fui);
        }
    }
        
    public sealed class FButton_Tips : Entity, IAwake<FUIGObjectComponent>
    {	
        public const string UIPackageName = "CommonComp";
        public const string UIResName = "Button_Tips";
        
        /// <summary>
        /// {uiResName}的组件类型(GComponent、GButton、GProcessBar等)，它们都是GObject的子类。
        /// </summary>
        public GButton selfGObj;
		public FUIGObjectComponent selfFUIRoot;
            
        public Controller button;
        public GGraph n4;
        public GImage n0;
        public GTextField title;
        public const string URL = "ui://o9z9wblxoeq76b";

        /// <summary>
        /// 通过此方法获取的FUI，在Dispose时不会释放GObject，需要自行管理（一般在配合FGUI的Pool机制时使用）。
        /// </summary>
        //public static FButton_Tips GetFormPool(Entity domain, GObject go)
        //{
			//  var fui = go.Get<FButton_Tips>();

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
			selfGObj = (GButton)fui.gObject;
        
			selfGObj.Add(fui);
        
			var com = fui.gObject.asCom;
            
			if(com != null)
			{
    			button = com.GetControllerAt(0);
    			n4 = (GGraph)com.GetChildAt(0);
    			n0 = (GImage)com.GetChildAt(1);
    			title = (GTextField)com.GetChildAt(2);
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
            
    		button = null;
    		n4 = null;
    		n0 = null;
    		title = null;
    	}
}
}