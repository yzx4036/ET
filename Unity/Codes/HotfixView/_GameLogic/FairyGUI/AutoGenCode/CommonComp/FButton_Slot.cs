/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

using FairyGUI;
using System.Threading.Tasks;

namespace ET
{
    [ObjectSystem]
    public class FButton_SlotAwakeSystem : AwakeSystem<FButton_Slot, FUI>
    {
        public override void Awake(FButton_Slot self, FUI fui)
        {
            self.Awake(fui);
        }
    }
        
    [FriendClass(typeof(FUI))]
    public sealed class FButton_Slot : Entity, IAwake<FUI>
    {	
        public const string UIPackageName = "CommonComp";
        public const string UIResName = "Button_Slot";
        
        /// <summary>
        /// {uiResName}的组件类型(GComponent、GButton、GProcessBar等)，它们都是GObject的子类。
        /// </summary>
        public GButton self;
            
        public Controller button;
        public GImage n0;
        public GTextField title;
        public const string URL = "ui://o9z9wblxq85n1o";

        /// <summary>
        /// 通过此方法获取的FUI，在Dispose时不会释放GObject，需要自行管理（一般在配合FGUI的Pool机制时使用）。
        /// </summary>
        //public static FButton_Slot GetFormPool(Entity domain, GObject go)
        //{
			//  var fui = go.Get<FButton_Slot>();

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
			self = (GButton)fui.gObject;
        
			self.Add(fui);
        
			var com = fui.gObject.asCom;
            
			if(com != null)
			{
    			button = com.GetControllerAt(0);
    			n0 = (GImage)com.GetChildAt(0);
    			title = (GTextField)com.GetChildAt(1);
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
            
    		button = null;
    		n0 = null;
    		title = null;
    	}
}
}