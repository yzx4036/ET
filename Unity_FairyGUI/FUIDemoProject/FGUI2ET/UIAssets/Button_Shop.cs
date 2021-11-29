/** This is an automatically generated class by FairyGUI plugin FGUI2ET. Please do not modify it. **/

using System.Threading.Tasks;
using FairyGUI;
using DCET.Hotfix;

namespace ET.UIAssets
{
    [ObjectSystem]
    public class Button_ShopAwakeSystem : AwakeSystem<Button_Shop, GObject>
    {
        public override void Awake(Button_Shop self, GObject go)
        {
            self.Awake(go);
        }
    }
	
	public sealed class Button_Shop : FUI
	{	
		public const string UIPackageName = "UIAssets";
		public const string UIResName = "Button_Shop";
		
		/// <summary>
        /// Button_Shop的组件类型(GComponent、GButton、GProcessBar等)，它们都是GObject的子类。
        /// </summary>
		public GButton self;
		
		public Controller button;
		public GTextField title;

		private static GObject CreateGObject()
        {
            return UIPackage.CreateObject(UIPackageName, UIResName);
        }
		
		private static void CreateGObjectAsync(UIPackage.CreateObjectCallback result)
        {
            UIPackage.CreateObjectAsync(UIPackageName, UIResName, result);
        }

        public static Button_Shop CreateInstance(Entity domain)
		{			
			return EntityFactory.Create<Button_Shop, GObject>(domain, CreateGObject());
		}

        public static Task<Button_Shop> CreateInstanceAsync(Entity domain)
        {
            TaskCompletionSource<Button_Shop> tcs = new TaskCompletionSource<Button_Shop>();

            CreateGObjectAsync((go) =>
            {
                tcs.SetResult(EntityFactory.Create<Button_Shop, GObject>(domain, go));
            });

            return tcs.Task;
        }

        public static Button_Shop Create(Entity domain, GObject go)
		{
			return EntityFactory.Create<Button_Shop, GObject>(domain, go);
		}
		
        /// <summary>
        /// 通过此方法获取的FUI，在Dispose时不会释放GObject，需要自行管理（一般在配合FGUI的Pool机制时使用）。
        /// </summary>
        public static Button_Shop GetFormPool(Entity domain, GObject go)
        {
            var fui = go.Get<Button_Shop>();

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
			title = null;
		}
	}
}