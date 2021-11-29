/** This is an automatically generated class by FairyGUI plugin FGUI2ET. Please do not modify it. **/

using System.Threading.Tasks;
using FairyGUI;
using DCET.Hotfix;

namespace ET.UIAssets
{
    [ObjectSystem]
    public class Button_NormalAwakeSystem : AwakeSystem<Button_Normal, GObject>
    {
        public override void Awake(Button_Normal self, GObject go)
        {
            self.Awake(go);
        }
    }
	
	public sealed class Button_Normal : FUI
	{	
		public const string UIPackageName = "UIAssets";
		public const string UIResName = "Button_Normal";
		
		/// <summary>
        /// Button_Normal的组件类型(GComponent、GButton、GProcessBar等)，它们都是GObject的子类。
        /// </summary>
		public GButton self;
		
		public Controller button;
		public GImage n0;
		public GImage n1;
		public GTextField title;

		private static GObject CreateGObject()
        {
            return UIPackage.CreateObject(UIPackageName, UIResName);
        }
		
		private static void CreateGObjectAsync(UIPackage.CreateObjectCallback result)
        {
            UIPackage.CreateObjectAsync(UIPackageName, UIResName, result);
        }

        public static Button_Normal CreateInstance(Entity domain)
		{			
			return EntityFactory.Create<Button_Normal, GObject>(domain, CreateGObject());
		}

        public static Task<Button_Normal> CreateInstanceAsync(Entity domain)
        {
            TaskCompletionSource<Button_Normal> tcs = new TaskCompletionSource<Button_Normal>();

            CreateGObjectAsync((go) =>
            {
                tcs.SetResult(EntityFactory.Create<Button_Normal, GObject>(domain, go));
            });

            return tcs.Task;
        }

        public static Button_Normal Create(Entity domain, GObject go)
		{
			return EntityFactory.Create<Button_Normal, GObject>(domain, go);
		}
		
        /// <summary>
        /// 通过此方法获取的FUI，在Dispose时不会释放GObject，需要自行管理（一般在配合FGUI的Pool机制时使用）。
        /// </summary>
        public static Button_Normal GetFormPool(Entity domain, GObject go)
        {
            var fui = go.Get<Button_Normal>();

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
			
			self = (GButton)go;
			
			self.Add(this);
			
			var com = go.asCom;
				
			if(com != null)
			{	
				button = com.GetController("button");
				n0 = (GImage)com.GetChild("n0");
				n1 = (GImage)com.GetChild("n1");
				title = (GTextField)com.GetChild("title");
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
			n1 = null;
			title = null;
		}
	}
}