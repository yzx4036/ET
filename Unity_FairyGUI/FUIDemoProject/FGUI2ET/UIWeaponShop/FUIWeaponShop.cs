/** This is an automatically generated class by FairyGUI plugin FGUI2ET. Please do not modify it. **/

using System.Threading.Tasks;
using FairyGUI;


namespace ET
{
    [ObjectSystem]
    public class FUIWeaponShopAwakeSystem : AwakeSystem<FUIWeaponShop, GObject>
    {
        public override void Awake(FUIWeaponShop self, GObject go)
        {
            self.Awake(go);
        }
    }
	
	public sealed class FUIWeaponShop : FUI
	{	
		public const string UIPackageName = "UIWeaponShop";
		public const string UIResName = "FUIWeaponShop";
		
		/// <summary>
        /// FUIWeaponShop的组件类型(GComponent、GButton、GProcessBar等)，它们都是GObject的子类。
        /// </summary>
		public GComponent self;
		
		public Controller ShopPanelC;
		public GImage SelectBG;
		public GTextField n5;
		public Button_Normal CloseBtn;
		public Button_Shop ToBuyBtn;
		public Button_Shop ToSellBtn;
		public Button_Shop ToFixBtn;
		public Button_Shop ToIntensifyBtn;
		public GGroup StartPanel;
		public ShopPanel ShopPanel;
		public SellPanel SellPanel;
		public FixPanel FixPanel;
		public IntensifyPanel IntensifyPanel;

		private static GObject CreateGObject()
        {
            return UIPackage.CreateObject(UIPackageName, UIResName);
        }
		
		private static void CreateGObjectAsync(UIPackage.CreateObjectCallback result)
        {
            UIPackage.CreateObjectAsync(UIPackageName, UIResName, result);
        }

        public static FUIWeaponShop CreateInstance(Entity domain)
		{			
			return EntityFactory.Create<FUIWeaponShop, GObject>(domain, CreateGObject());
		}

        public static Task<FUIWeaponShop> CreateInstanceAsync(Entity domain)
        {
            TaskCompletionSource<FUIWeaponShop> tcs = new TaskCompletionSource<FUIWeaponShop>();

            CreateGObjectAsync((go) =>
            {
                tcs.SetResult(EntityFactory.Create<FUIWeaponShop, GObject>(domain, go));
            });

            return tcs.Task;
        }

        public static FUIWeaponShop Create(Entity domain, GObject go)
		{
			return EntityFactory.Create<FUIWeaponShop, GObject>(domain, go);
		}
		
        /// <summary>
        /// 通过此方法获取的FUI，在Dispose时不会释放GObject，需要自行管理（一般在配合FGUI的Pool机制时使用）。
        /// </summary>
        public static FUIWeaponShop GetFormPool(Entity domain, GObject go)
        {
            var fui = go.Get<FUIWeaponShop>();

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
				CloseBtn = Button_Normal.Create(domain, com.GetChild("CloseBtn"));
				ToBuyBtn = Button_Shop.Create(domain, com.GetChild("ToBuyBtn"));
				ToSellBtn = Button_Shop.Create(domain, com.GetChild("ToSellBtn"));
				ToFixBtn = Button_Shop.Create(domain, com.GetChild("ToFixBtn"));
				ToIntensifyBtn = Button_Shop.Create(domain, com.GetChild("ToIntensifyBtn"));
				StartPanel = (GGroup)com.GetChild("StartPanel");
				ShopPanel = ShopPanel.Create(domain, com.GetChild("ShopPanel"));
				SellPanel = SellPanel.Create(domain, com.GetChild("SellPanel"));
				FixPanel = FixPanel.Create(domain, com.GetChild("FixPanel"));
				IntensifyPanel = IntensifyPanel.Create(domain, com.GetChild("IntensifyPanel"));
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
			ToIntensifyBtn.Dispose();
			ToIntensifyBtn = null;
			StartPanel = null;
			ShopPanel.Dispose();
			ShopPanel = null;
			SellPanel.Dispose();
			SellPanel = null;
			FixPanel.Dispose();
			FixPanel = null;
			IntensifyPanel.Dispose();
			IntensifyPanel = null;
		}
	}
}