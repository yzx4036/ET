/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

using FairyGUI;
using System.Threading.Tasks;

namespace ET
{
    [ObjectSystem]
    public class FUILoginPanelAwakeSystem : AwakeSystem<FUILoginPanel, FUI>
    {
        public override void Awake(FUILoginPanel self, FUI fui)
        {
            self.Awake(fui);
        }
    }
        
    [FriendClass(typeof(FUI))]
    [FUI(typeof(FUILoginPanel), UIPackageName, UIResName)]
    public sealed class FUILoginPanel : Entity, IAwake<FUI>
    {	
        public const string UIPackageName = "FLogin";
        public const string UIResName = "UILoginPanel";
        
        /// <summary>
        /// {uiResName}的组件类型(GComponent、GButton、GProcessBar等)，它们都是GObject的子类。
        /// </summary>
        public GComponent self;
            
        public Controller c1;
        public GImage n25;
        public GImage n2;
        public GTextField n3;
        public GImage n4;
        public GTextField n5;
        public GImage n6;
        public GTextField n7;
        public GTextInput RegisterAccount;
        public GTextInput RegisterPassword;
        public GTextInput RegisterPassword_1;
        public FButton4_Normal RegisterBtn;
        public FButton4_Normal ReturnBtn;
        public GGroup Register;
        public GImage n15;
        public GTextField n16;
        public GImage n17;
        public GTextField n18;
        public GTextInput LoginAccount;
        public GTextInput LoginPassword;
        public FButton4_Normal LoginBtn;
        public FButton4_Normal ToRegisterBtn;
        public GGroup Login;
        public const string URL = "ui://nstug1quqo3ye";

        /// <summary>
        /// 通过此方法获取的FUI，在Dispose时不会释放GObject，需要自行管理（一般在配合FGUI的Pool机制时使用）。
        /// </summary>
        //public static FUILoginPanel GetFormPool(Entity domain, GObject go)
        //{
			//  var fui = go.Get<FUILoginPanel>();

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
    			c1 = com.GetControllerAt(0);
    			n25 = (GImage)com.GetChildAt(0);
    			n2 = (GImage)com.GetChildAt(1);
    			n3 = (GTextField)com.GetChildAt(2);
    			n4 = (GImage)com.GetChildAt(3);
    			n5 = (GTextField)com.GetChildAt(4);
    			n6 = (GImage)com.GetChildAt(5);
    			n7 = (GTextField)com.GetChildAt(6);
    			RegisterAccount = (GTextInput)com.GetChildAt(7);
    			RegisterPassword = (GTextInput)com.GetChildAt(8);
    			RegisterPassword_1 = (GTextInput)com.GetChildAt(9);
    			RegisterBtn = CreateFUICompInst<FButton4_Normal>(com.GetChildAt(10));
    			ReturnBtn = CreateFUICompInst<FButton4_Normal>(com.GetChildAt(11));
    			Register = (GGroup)com.GetChildAt(12);
    			n15 = (GImage)com.GetChildAt(13);
    			n16 = (GTextField)com.GetChildAt(14);
    			n17 = (GImage)com.GetChildAt(15);
    			n18 = (GTextField)com.GetChildAt(16);
    			LoginAccount = (GTextInput)com.GetChildAt(17);
    			LoginPassword = (GTextInput)com.GetChildAt(18);
    			LoginBtn = CreateFUICompInst<FButton4_Normal>(com.GetChildAt(19));
    			ToRegisterBtn = CreateFUICompInst<FButton4_Normal>(com.GetChildAt(20));
    			Login = (GGroup)com.GetChildAt(21);
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
            
    		c1 = null;
    		n25 = null;
    		n2 = null;
    		n3 = null;
    		n4 = null;
    		n5 = null;
    		n6 = null;
    		n7 = null;
    		RegisterAccount = null;
    		RegisterPassword = null;
    		RegisterPassword_1 = null;
    		RegisterBtn = null;
    		ReturnBtn = null;
    		Register = null;
    		n15 = null;
    		n16 = null;
    		n17 = null;
    		n18 = null;
    		LoginAccount = null;
    		LoginPassword = null;
    		LoginBtn = null;
    		ToRegisterBtn = null;
    		Login = null;
    	}
}
}