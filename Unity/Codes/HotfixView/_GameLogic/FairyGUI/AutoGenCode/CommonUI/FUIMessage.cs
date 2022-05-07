/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

using FairyGUI;
using System.Threading.Tasks;

namespace ET
{
    [ObjectSystem]
    public class FUIMessageAwakeSystem : AwakeSystem<FUIMessage, FUIGObjectComponent>
    {
        public override void Awake(FUIMessage self, FUIGObjectComponent fui)
        {
            self.Awake(fui);
        }
    }
        
    [FUI(typeof(FUIMessage), UIPackageName, UIResName)]
    public sealed class FUIMessage : Entity, IAwake<FUIGObjectComponent>
    {	
        public const string UIPackageName = "CommonUI";
        public const string UIResName = "UIMessage";
        
        /// <summary>
        /// {uiResName}的组件类型(GComponent、GButton、GProcessBar等)，它们都是GObject的子类。
        /// </summary>
        public GComponent selfGObj;
		public FUIGObjectComponent selfFUIRoot;
            
        public GImage n0;
        public GTextField Message;
        public const string URL = "ui://4q3uyng0yaaw1";

        /// <summary>
        /// 通过此方法获取的FUI，在Dispose时不会释放GObject，需要自行管理（一般在配合FGUI的Pool机制时使用）。
        /// </summary>
        //public static FUIMessage GetFormPool(Entity domain, GObject go)
        //{
			//  var fui = go.Get<FUIMessage>();

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
			selfGObj = (GComponent)fui.gObject;
        
			selfGObj.Add(fui);
        
			var com = fui.gObject.asCom;
            
			if(com != null)
			{
    			n0 = (GImage)com.GetChildAt(0);
    			Message = (GTextField)com.GetChildAt(1);
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
    		Message = null;
    	}
}
}