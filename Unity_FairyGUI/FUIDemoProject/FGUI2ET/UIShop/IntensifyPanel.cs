/** This is an automatically generated class by FairyGUI plugin FGUI2ET. Please do not modify it. **/

using System.Threading.Tasks;
using FairyGUI;
using DCET.Hotfix;

namespace ET.UIShop
{
    [ObjectSystem]
    public class IntensifyPanelAwakeSystem : AwakeSystem<IntensifyPanel, GObject>
    {
        public override void Awake(IntensifyPanel self, GObject go)
        {
            self.Awake(go);
        }
    }
	
	public sealed class IntensifyPanel : FUI
	{	
		public const string UIPackageName = "UIShop";
		public const string UIResName = "IntensifyPanel";
		
		/// <summary>
        /// IntensifyPanel的组件类型(GComponent、GButton、GProcessBar等)，它们都是GObject的子类。
        /// </summary>
		public GComponent self;
		
		public GImage SelectBG;
		public GTextField n1;
		public UIAssets.Button_Normal CloseBtn;
		public UIAssets.Button_Shop IntensifyBtn;
		public GTextField n7;

		private static GObject CreateGObject()
        {
            return UIPackage.CreateObject(UIPackageName, UIResName);
        }
		
		private static void CreateGObjectAsync(UIPackage.CreateObjectCallback result)
        {
            UIPackage.CreateObjectAsync(UIPackageName, UIResName, result);
        }

        public static IntensifyPanel CreateInstance(Entity domain)
		{			
			return EntityFactory.Create<IntensifyPanel, GObject>(domain, CreateGObject());
		}

        public static Task<IntensifyPanel> CreateInstanceAsync(Entity domain)
        {
            TaskCompletionSource<IntensifyPanel> tcs = new TaskCompletionSource<IntensifyPanel>();

            CreateGObjectAsync((go) =>
            {
                tcs.SetResult(EntityFactory.Create<IntensifyPanel, GObject>(domain, go));
            });

            return tcs.Task;
        }

        public static IntensifyPanel Create(Entity domain, GObject go)
		{
			return EntityFactory.Create<IntensifyPanel, GObject>(domain, go);
		}
		
        /// <summary>
        /// 通过此方法获取的FUI，在Dispose时不会释放GObject，需要自行管理（一般在配合FGUI的Pool机制时使用）。
        /// </summary>
        public static IntensifyPanel GetFormPool(Entity domain, GObject go)
        {
            var fui = go.Get<IntensifyPanel>();

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
				SelectBG = (GImage)com.GetChild("SelectBG");
				n1 = (GTextField)com.GetChild("n1");
				CloseBtn = UIAssets.Button_Normal.Create(com.GetChild("CloseBtn"));
				IntensifyBtn = UIAssets.Button_Shop.Create(com.GetChild("IntensifyBtn"));
				n7 = (GTextField)com.GetChild("n7");
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
			SelectBG = null;
			n1 = null;
			CloseBtn.Dispose();
			CloseBtn = null;
			IntensifyBtn.Dispose();
			IntensifyBtn = null;
			n7 = null;
		}
	}
}