/** This is an automatically generated class by FairyGUI plugin FGUI2ET. Please do not modify it. **/

using System.Threading.Tasks;
using FairyGUI;

namespace ET
{
    [ObjectSystem]
    public class FUIOtherShopAwakeSystem : AwakeSystem<FUIOtherShop, GObject>
    {
        public override void Awake(FUIOtherShop self, GObject go)
        {
            self.Awake(go);
        }
    }
	
	public sealed class FUIOtherShop : FUI
	{	
		public const string UIPackageName = "UIShop";
		public const string UIResName = "FUIOtherShop";
		
		/// <summary>
        /// FUIOtherShop的组件类型(GComponent、GButton、GProcessBar等)，它们都是GObject的子类。
        /// </summary>
		public GComponent self;
		
		public GImage SelectBG;
		public GTextField n5;
		public Button_Normal CloseBtn;
		public Button_Shop ToNormalShopBtn;
		public Button_Shop ToAdvShopBtn;
		public Button_Shop ToSellBtn;
		public GGroup StartPanel;

		private static GObject CreateGObject()
        {
            return UIPackage.CreateObject(UIPackageName, UIResName);
        }
		
		private static void CreateGObjectAsync(UIPackage.CreateObjectCallback result)
        {
            UIPackage.CreateObjectAsync(UIPackageName, UIResName, result);
        }

        public static FUIOtherShop CreateInstance(Entity domain)
		{			
			return EntityFactory.Create<FUIOtherShop, GObject>(domain, CreateGObject());
		}

        public static Task<FUIOtherShop> CreateInstanceAsync(Entity domain)
        {
            TaskCompletionSource<FUIOtherShop> tcs = new TaskCompletionSource<FUIOtherShop>();

            CreateGObjectAsync((go) =>
            {
                tcs.SetResult(EntityFactory.Create<FUIOtherShop, GObject>(domain, go));
            });

            return tcs.Task;
        }

        public static FUIOtherShop Create(Entity domain, GObject go)
		{
			return EntityFactory.Create<FUIOtherShop, GObject>(domain, go);
		}
		
        /// <summary>
        /// 通过此方法获取的FUI，在Dispose时不会释放GObject，需要自行管理（一般在配合FGUI的Pool机制时使用）。
        /// </summary>
        public static FUIOtherShop GetFormPool(Entity domain, GObject go)
        {
            var fui = go.Get<FUIOtherShop>();

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
				n5 = (GTextField)com.GetChild("n5");
				CloseBtn = Button_Normal.Create(domain, com.GetChild("CloseBtn"));
				ToNormalShopBtn = Button_Shop.Create(domain, com.GetChild("ToNormalShopBtn"));
				ToAdvShopBtn = Button_Shop.Create(domain, com.GetChild("ToAdvShopBtn"));
				ToSellBtn = Button_Shop.Create(domain, com.GetChild("ToSellBtn"));
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
			SelectBG = null;
			n5 = null;
			CloseBtn.Dispose();
			CloseBtn = null;
			ToNormalShopBtn.Dispose();
			ToNormalShopBtn = null;
			ToAdvShopBtn.Dispose();
			ToAdvShopBtn = null;
			ToSellBtn.Dispose();
			ToSellBtn = null;
			StartPanel = null;
		}
	}
}