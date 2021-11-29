/** This is an automatically generated class by FairyGUI plugin FGUI2ET. Please do not modify it. **/

using System.Threading.Tasks;
using FairyGUI;


namespace ET
{
    [ObjectSystem]
    public class ShopPanelAwakeSystem : AwakeSystem<ShopPanel, GObject>
    {
        public override void Awake(ShopPanel self, GObject go)
        {
            self.Awake(go);
        }
    }
	
	public sealed class ShopPanel : FUI
	{	
		public const string UIPackageName = "UIWeaponShop";
		public const string UIResName = "ShopPanel";
		
		/// <summary>
        /// ShopPanel的组件类型(GComponent、GButton、GProcessBar等)，它们都是GObject的子类。
        /// </summary>
		public GComponent self;
		
		public GImage n7;
		public GImage n8;
		public GTextField n9;
		public GList ItemList;
		public Button4_Normal MoreBuyBtn;
		public Button4_Normal BuyBtn;
		public Button_Close CloseBtn;

		private static GObject CreateGObject()
        {
            return UIPackage.CreateObject(UIPackageName, UIResName);
        }
		
		private static void CreateGObjectAsync(UIPackage.CreateObjectCallback result)
        {
            UIPackage.CreateObjectAsync(UIPackageName, UIResName, result);
        }

        public static ShopPanel CreateInstance(Entity domain)
		{			
			return EntityFactory.Create<ShopPanel, GObject>(domain, CreateGObject());
		}

        public static Task<ShopPanel> CreateInstanceAsync(Entity domain)
        {
            TaskCompletionSource<ShopPanel> tcs = new TaskCompletionSource<ShopPanel>();

            CreateGObjectAsync((go) =>
            {
                tcs.SetResult(EntityFactory.Create<ShopPanel, GObject>(domain, go));
            });

            return tcs.Task;
        }

        public static ShopPanel Create(Entity domain, GObject go)
		{
			return EntityFactory.Create<ShopPanel, GObject>(domain, go);
		}
		
        /// <summary>
        /// 通过此方法获取的FUI，在Dispose时不会释放GObject，需要自行管理（一般在配合FGUI的Pool机制时使用）。
        /// </summary>
        public static ShopPanel GetFormPool(Entity domain, GObject go)
        {
            var fui = go.Get<ShopPanel>();

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
				n7 = (GImage)com.GetChild("n7");
				n8 = (GImage)com.GetChild("n8");
				n9 = (GTextField)com.GetChild("n9");
				ItemList = (GList)com.GetChild("ItemList");
				MoreBuyBtn = Button4_Normal.Create(domain, com.GetChild("MoreBuyBtn"));
				BuyBtn = Button4_Normal.Create(domain, com.GetChild("BuyBtn"));
				CloseBtn = Button_Close.Create(domain, com.GetChild("CloseBtn"));
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
			n7 = null;
			n8 = null;
			n9 = null;
			ItemList = null;
			MoreBuyBtn.Dispose();
			MoreBuyBtn = null;
			BuyBtn.Dispose();
			BuyBtn = null;
			CloseBtn.Dispose();
			CloseBtn = null;
		}
	}
}