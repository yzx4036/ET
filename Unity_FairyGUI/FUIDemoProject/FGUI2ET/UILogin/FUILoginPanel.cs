/** This is an automatically generated class by FairyGUI plugin FGUI2ET. Please do not modify it. **/

using System.Threading.Tasks;
using FairyGUI;


namespace ET
{
    [ObjectSystem]
    public class FUILoginPanelAwakeSystem : AwakeSystem<FUILoginPanel, GObject>
    {
        public override void Awake(FUILoginPanel self, GObject go)
        {
            self.Awake(go);
        }
    }
	
	public sealed class FUILoginPanel : FUI
	{	
		public const string UIPackageName = "UILogin";
		public const string UIResName = "FUILoginPanel";
		
		/// <summary>
        /// FUILoginPanel的组件类型(GComponent、GButton、GProcessBar等)，它们都是GObject的子类。
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
		public Button4_Normal RegisterBtn;
		public Button4_Normal ReturnBtn;
		public GGroup Register;
		public GImage n15;
		public GTextField n16;
		public GImage n17;
		public GTextField n18;
		public GTextInput LoginAccount;
		public GTextInput LoginPassword;
		public Button4_Normal LoginBtn;
		public Button4_Normal ToRegisterBtn;
		public GGroup Login;

		private static GObject CreateGObject()
        {
            return UIPackage.CreateObject(UIPackageName, UIResName);
        }
		
		private static void CreateGObjectAsync(UIPackage.CreateObjectCallback result)
        {
            UIPackage.CreateObjectAsync(UIPackageName, UIResName, result);
        }

        public static FUILoginPanel CreateInstance(Entity domain)
		{			
			return EntityFactory.Create<FUILoginPanel, GObject>(domain, CreateGObject());
		}

        public static Task<FUILoginPanel> CreateInstanceAsync(Entity domain)
        {
            TaskCompletionSource<FUILoginPanel> tcs = new TaskCompletionSource<FUILoginPanel>();

            CreateGObjectAsync((go) =>
            {
                tcs.SetResult(EntityFactory.Create<FUILoginPanel, GObject>(domain, go));
            });

            return tcs.Task;
        }

        public static FUILoginPanel Create(Entity domain, GObject go)
		{
			return EntityFactory.Create<FUILoginPanel, GObject>(domain, go);
		}
		
        /// <summary>
        /// 通过此方法获取的FUI，在Dispose时不会释放GObject，需要自行管理（一般在配合FGUI的Pool机制时使用）。
        /// </summary>
        public static FUILoginPanel GetFormPool(Entity domain, GObject go)
        {
            var fui = go.Get<FUILoginPanel>();

            if(fui == null)
            {
                fui = Create(domain, go);
            }

            fui.isFromFGUIPool = true;

            return fui;
        }
						
		public void Awake(GObject go)
		{
			if(go == null)
			{
				return;
			}
			
			GObject = go;	
			
			if (string.IsNullOrWhiteSpace(Name))
            {
				Name = Id.ToString();
            }
			
			self = (GComponent)go;
			
			self.Add(this);
			
			var com = go.asCom;
				
			if(com != null)
			{	
				c1 = com.GetController("c1");
				n25 = (GImage)com.GetChild("n25");
				n2 = (GImage)com.GetChild("n2");
				n3 = (GTextField)com.GetChild("n3");
				n4 = (GImage)com.GetChild("n4");
				n5 = (GTextField)com.GetChild("n5");
				n6 = (GImage)com.GetChild("n6");
				n7 = (GTextField)com.GetChild("n7");
				RegisterAccount = (GTextInput)com.GetChild("RegisterAccount");
				RegisterPassword = (GTextInput)com.GetChild("RegisterPassword");
				RegisterPassword_1 = (GTextInput)com.GetChild("RegisterPassword_1");
				RegisterBtn = Button4_Normal.Create(domain, com.GetChild("RegisterBtn"));
				ReturnBtn = Button4_Normal.Create(domain, com.GetChild("ReturnBtn"));
				Register = (GGroup)com.GetChild("Register");
				n15 = (GImage)com.GetChild("n15");
				n16 = (GTextField)com.GetChild("n16");
				n17 = (GImage)com.GetChild("n17");
				n18 = (GTextField)com.GetChild("n18");
				LoginAccount = (GTextInput)com.GetChild("LoginAccount");
				LoginPassword = (GTextInput)com.GetChild("LoginPassword");
				LoginBtn = Button4_Normal.Create(domain, com.GetChild("LoginBtn"));
				ToRegisterBtn = Button4_Normal.Create(domain, com.GetChild("ToRegisterBtn"));
				Login = (GGroup)com.GetChild("Login");
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
			RegisterBtn.Dispose();
			RegisterBtn = null;
			ReturnBtn.Dispose();
			ReturnBtn = null;
			Register = null;
			n15 = null;
			n16 = null;
			n17 = null;
			n18 = null;
			LoginAccount = null;
			LoginPassword = null;
			LoginBtn.Dispose();
			LoginBtn = null;
			ToRegisterBtn.Dispose();
			ToRegisterBtn = null;
			Login = null;
		}
	}
}