/** This is an automatically generated class by FairyGUI plugin FGUI2ET. Please do not modify it. **/

using System.Threading.Tasks;
using FairyGUI;
using DCET.Hotfix;

namespace ET.UIMessageBox
{
    [ObjectSystem]
    public class FUIMessageAwakeSystem : AwakeSystem<FUIMessage, GObject>
    {
        public override void Awake(FUIMessage self, GObject go)
        {
            self.Awake(go);
        }
    }
	
	public sealed class FUIMessage : FUI
	{	
		public const string UIPackageName = "UIMessageBox";
		public const string UIResName = "FUIMessage";
		
		/// <summary>
        /// FUIMessage的组件类型(GComponent、GButton、GProcessBar等)，它们都是GObject的子类。
        /// </summary>
		public GComponent self;
		
		public GImage n0;
		public GTextField Message;

		private static GObject CreateGObject()
        {
            return UIPackage.CreateObject(UIPackageName, UIResName);
        }
		
		private static void CreateGObjectAsync(UIPackage.CreateObjectCallback result)
        {
            UIPackage.CreateObjectAsync(UIPackageName, UIResName, result);
        }

        public static FUIMessage CreateInstance(Entity domain)
		{			
			return EntityFactory.Create<FUIMessage, GObject>(domain, CreateGObject());
		}

        public static Task<FUIMessage> CreateInstanceAsync(Entity domain)
        {
            TaskCompletionSource<FUIMessage> tcs = new TaskCompletionSource<FUIMessage>();

            CreateGObjectAsync((go) =>
            {
                tcs.SetResult(EntityFactory.Create<FUIMessage, GObject>(domain, go));
            });

            return tcs.Task;
        }

        public static FUIMessage Create(Entity domain, GObject go)
		{
			return EntityFactory.Create<FUIMessage, GObject>(domain, go);
		}
		
        /// <summary>
        /// 通过此方法获取的FUI，在Dispose时不会释放GObject，需要自行管理（一般在配合FGUI的Pool机制时使用）。
        /// </summary>
        public static FUIMessage GetFormPool(Entity domain, GObject go)
        {
            var fui = go.Get<FUIMessage>();

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
				n0 = (GImage)com.GetChild("n0");
				Message = (GTextField)com.GetChild("Message");
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
			Message = null;
		}
	}
}