/** This is an automatically generated class by FairyGUI plugin FGUI2ET. Please do not modify it. **/

using System.Threading.Tasks;
using FairyGUI;
using DCET.Hotfix;

namespace ET.UIShop
{
    [ObjectSystem]
    public class FUIArmorShopAwakeSystem : AwakeSystem<FUIArmorShop, GObject>
    {
        public override void Awake(FUIArmorShop self, GObject go)
        {
            self.Awake(go);
        }
    }
	
	public sealed class FUIArmorShop : FUI
	{	
		public const string UIPackageName = "UIShop";
		public const string UIResName = "FUIArmorShop";
		
		/// <summary>
        /// FUIArmorShop的组件类型(GComponent、GButton、GProcessBar等)，它们都是GObject的子类。
        /// </summary>
		public GComponent self;
		
		public Controller ShopPanelC;
		public GImage SelectBG;
		public GTextField n5;
		public UIAssets.Button_Normal CloseBtn;
		public UIAssets.Button_Shop ToBuyBtn;
		public UIAssets.Button_Shop ToSellBtn;
		public UIAssets.Button_Shop ToFixBtn;
		public FixPanel FixPanel;
		public GGroup StartPanel;

		private static GObject CreateGObject()
        {
            return UIPackage.CreateObject(UIPackageName, UIResName);
        }
		
		private static void CreateGObjectAsync(UIPackage.CreateObjectCallback result)
        {
            UIPackage.CreateObjectAsync(UIPackageName, UIResName, result);
        }

        public static FUIArmorShop CreateInstance(Entity domain)
		{			
			return EntityFactory.Create<FUIArmorShop, GObject>(domain, CreateGObject());
		}

        public static Task<FUIArmorShop> CreateInstanceAsync(Entity domain)
        {
            TaskCompletionSource<FUIArmorShop> tcs = new TaskCompletionSource<FUIArmorShop>();

            CreateGObjectAsync((go) =>
            {
                tcs.SetResult(EntityFactory.Create<FUIArmorShop, GObject>(domain, go));
            });

            return tcs.Task;
        }

        public static FUIArmorShop Create(Entity domain, GObject go)
		{
			return EntityFactory.Create<FUIArmorShop, GObject>(domain, go);
		}
		
        /// <summary>
        /// 通过此方法获取的FUI，在Dispose时不会释放GObject，需要自行管理（一般在配合FGUI的Pool机制时使用）。
        /// </summary>
        public static FUIArmorShop GetFormPool(Entity domain, GObject go)
        {
            var fui = go.Get<FUIArmorShop>();

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
				ShopPanelC = com.GetController("ShopPanelC");
				SelectBG = (GImage)com.GetChild("SelectBG");
				n5 = (GTextField)com.GetChild("n5");
				CloseBtn = UIAssets.Button_Normal.Create(com.GetChild("CloseBtn"));
				ToBuyBtn = UIAssets.Button_Shop.Create(com.GetChild("ToBuyBtn"));
				ToSellBtn = UIAssets.Button_Shop.Create(com.GetChild("ToSellBtn"));
				ToFixBtn = UIAssets.Button_Shop.Create(com.GetChild("ToFixBtn"));
				FixPanel = FixPanel.Create(com.GetChild("FixPanel"));
				StartPanel = (GGroup)com.GetChild("StartPanel");
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
			ShopPanelC = null;
			SelectBG = null;
			n5 = null;
			CloseBtn.Dispose();
			CloseBtn = null;
			ToBuyBtn.Dispose();
			ToBuyBtn = null;
			ToSellBtn.Dispose();
			ToSellBtn = null;
			ToFixBtn.Dispose();
			ToFixBtn = null;
			FixPanel.Dispose();
			FixPanel = null;
			StartPanel = null;
		}
	}
}