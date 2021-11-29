/** This is an automatically generated class by FairyGUI plugin FGUI2ET. Please do not modify it. **/

using System.Threading.Tasks;
using FairyGUI;
using DCET.Hotfix;

namespace ET.UIShop
{
    [ObjectSystem]
    public class SellPanelAwakeSystem : AwakeSystem<SellPanel, GObject>
    {
        public override void Awake(SellPanel self, GObject go)
        {
            self.Awake(go);
        }
    }
	
	public sealed class SellPanel : FUI
	{	
		public const string UIPackageName = "UIShop";
		public const string UIResName = "SellPanel";
		
		/// <summary>
        /// SellPanel的组件类型(GComponent、GButton、GProcessBar等)，它们都是GObject的子类。
        /// </summary>
		public GComponent self;
		
		public GImage n0;
		public GTextField Title;
		public GGroup BG;
		public UIAssets.Button_Close CloseBtn;
		public GList ItemList;
		public GImage n5;
		public UIAssets.Button4_Normal SellBtn;
		public GTextField SellPrice;
		public GImage n9;

		private static GObject CreateGObject()
        {
            return UIPackage.CreateObject(UIPackageName, UIResName);
        }
		
		private static void CreateGObjectAsync(UIPackage.CreateObjectCallback result)
        {
            UIPackage.CreateObjectAsync(UIPackageName, UIResName, result);
        }

        public static SellPanel CreateInstance(Entity domain)
		{			
			return EntityFactory.Create<SellPanel, GObject>(domain, CreateGObject());
		}

        public static Task<SellPanel> CreateInstanceAsync(Entity domain)
        {
            TaskCompletionSource<SellPanel> tcs = new TaskCompletionSource<SellPanel>();

            CreateGObjectAsync((go) =>
            {
                tcs.SetResult(EntityFactory.Create<SellPanel, GObject>(domain, go));
            });

            return tcs.Task;
        }

        public static SellPanel Create(Entity domain, GObject go)
		{
			return EntityFactory.Create<SellPanel, GObject>(domain, go);
		}
		
        /// <summary>
        /// 通过此方法获取的FUI，在Dispose时不会释放GObject，需要自行管理（一般在配合FGUI的Pool机制时使用）。
        /// </summary>
        public static SellPanel GetFormPool(Entity domain, GObject go)
        {
            var fui = go.Get<SellPanel>();

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
				Title = (GTextField)com.GetChild("Title");
				BG = (GGroup)com.GetChild("BG");
				CloseBtn = UIAssets.Button_Close.Create(com.GetChild("CloseBtn"));
				ItemList = (GList)com.GetChild("ItemList");
				n5 = (GImage)com.GetChild("n5");
				SellBtn = UIAssets.Button4_Normal.Create(com.GetChild("SellBtn"));
				SellPrice = (GTextField)com.GetChild("SellPrice");
				n9 = (GImage)com.GetChild("n9");
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
			Title = null;
			BG = null;
			CloseBtn.Dispose();
			CloseBtn = null;
			ItemList = null;
			n5 = null;
			SellBtn.Dispose();
			SellBtn = null;
			SellPrice = null;
			n9 = null;
		}
	}
}