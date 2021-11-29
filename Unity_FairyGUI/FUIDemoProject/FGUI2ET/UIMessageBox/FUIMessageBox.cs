/** This is an automatically generated class by FairyGUI plugin FGUI2ET. Please do not modify it. **/

using System.Threading.Tasks;
using FairyGUI;
using DCET.Hotfix;

namespace ET.UIMessageBox
{
    [ObjectSystem]
    public class FUIMessageBoxAwakeSystem : AwakeSystem<FUIMessageBox, GObject>
    {
        public override void Awake(FUIMessageBox self, GObject go)
        {
            self.Awake(go);
        }
    }
	
	public sealed class FUIMessageBox : FUI
	{	
		public const string UIPackageName = "UIMessageBox";
		public const string UIResName = "FUIMessageBox";
		
		/// <summary>
        /// FUIMessageBox的组件类型(GComponent、GButton、GProcessBar等)，它们都是GObject的子类。
        /// </summary>
		public GComponent self;
		
		public Controller ButtonC;
		public GImage n15;
		public GTextField title;
		public GTextField Message;
		public UIAssets.Button_Normal Two_NoBtn;
		public UIAssets.Button_Normal Two_YesBtn;
		public GGroup TwoBtn;
		public UIAssets.Button_Normal One_OkBtn;
		public GGroup OneBtn;

		private static GObject CreateGObject()
        {
            return UIPackage.CreateObject(UIPackageName, UIResName);
        }
		
		private static void CreateGObjectAsync(UIPackage.CreateObjectCallback result)
        {
            UIPackage.CreateObjectAsync(UIPackageName, UIResName, result);
        }

        public static FUIMessageBox CreateInstance(Entity domain)
		{			
			return EntityFactory.Create<FUIMessageBox, GObject>(domain, CreateGObject());
		}

        public static Task<FUIMessageBox> CreateInstanceAsync(Entity domain)
        {
            TaskCompletionSource<FUIMessageBox> tcs = new TaskCompletionSource<FUIMessageBox>();

            CreateGObjectAsync((go) =>
            {
                tcs.SetResult(EntityFactory.Create<FUIMessageBox, GObject>(domain, go));
            });

            return tcs.Task;
        }

        public static FUIMessageBox Create(Entity domain, GObject go)
		{
			return EntityFactory.Create<FUIMessageBox, GObject>(domain, go);
		}
		
        /// <summary>
        /// 通过此方法获取的FUI，在Dispose时不会释放GObject，需要自行管理（一般在配合FGUI的Pool机制时使用）。
        /// </summary>
        public static FUIMessageBox GetFormPool(Entity domain, GObject go)
        {
            var fui = go.Get<FUIMessageBox>();

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
				ButtonC = com.GetController("ButtonC");
				n15 = (GImage)com.GetChild("n15");
				title = (GTextField)com.GetChild("title");
				Message = (GTextField)com.GetChild("Message");
				Two_NoBtn = UIAssets.Button_Normal.Create(com.GetChild("Two_NoBtn"));
				Two_YesBtn = UIAssets.Button_Normal.Create(com.GetChild("Two_YesBtn"));
				TwoBtn = (GGroup)com.GetChild("TwoBtn");
				One_OkBtn = UIAssets.Button_Normal.Create(com.GetChild("One_OkBtn"));
				OneBtn = (GGroup)com.GetChild("OneBtn");
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
			ButtonC = null;
			n15 = null;
			title = null;
			Message = null;
			Two_NoBtn.Dispose();
			Two_NoBtn = null;
			Two_YesBtn.Dispose();
			Two_YesBtn = null;
			TwoBtn = null;
			One_OkBtn.Dispose();
			One_OkBtn = null;
			OneBtn = null;
		}
	}
}