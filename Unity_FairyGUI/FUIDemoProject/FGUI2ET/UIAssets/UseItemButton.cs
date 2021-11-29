/** This is an automatically generated class by FairyGUI plugin FGUI2ET. Please do not modify it. **/

using System.Threading.Tasks;
using FairyGUI;
using DCET.Hotfix;

namespace ET.UIAssets
{
    [ObjectSystem]
    public class UseItemButtonAwakeSystem : AwakeSystem<UseItemButton, GObject>
    {
        public override void Awake(UseItemButton self, GObject go)
        {
            self.Awake(go);
        }
    }
	
	public sealed class UseItemButton : FUI
	{	
		public const string UIPackageName = "UIAssets";
		public const string UIResName = "UseItemButton";
		
		/// <summary>
        /// UseItemButton的组件类型(GComponent、GButton、GProcessBar等)，它们都是GObject的子类。
        /// </summary>
		public GButton self;
		
		public Controller button;
		public GImage n0;
		public GLoader ItemIcon;
		public GLoader Mask;
		public GTextField title;

		private static GObject CreateGObject()
        {
            return UIPackage.CreateObject(UIPackageName, UIResName);
        }
		
		private static void CreateGObjectAsync(UIPackage.CreateObjectCallback result)
        {
            UIPackage.CreateObjectAsync(UIPackageName, UIResName, result);
        }

        public static UseItemButton CreateInstance(Entity domain)
		{			
			return EntityFactory.Create<UseItemButton, GObject>(domain, CreateGObject());
		}

        public static Task<UseItemButton> CreateInstanceAsync(Entity domain)
        {
            TaskCompletionSource<UseItemButton> tcs = new TaskCompletionSource<UseItemButton>();

            CreateGObjectAsync((go) =>
            {
                tcs.SetResult(EntityFactory.Create<UseItemButton, GObject>(domain, go));
            });

            return tcs.Task;
        }

        public static UseItemButton Create(Entity domain, GObject go)
		{
			return EntityFactory.Create<UseItemButton, GObject>(domain, go);
		}
		
        /// <summary>
        /// 通过此方法获取的FUI，在Dispose时不会释放GObject，需要自行管理（一般在配合FGUI的Pool机制时使用）。
        /// </summary>
        public static UseItemButton GetFormPool(Entity domain, GObject go)
        {
            var fui = go.Get<UseItemButton>();

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
				ItemIcon = (GLoader)com.GetChild("ItemIcon");
				Mask = (GLoader)com.GetChild("Mask");
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
			ItemIcon = null;
			Mask = null;
			title = null;
		}
	}
}