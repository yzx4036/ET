/** This is an automatically generated class by FairyGUI plugin FGUI2ET. Please do not modify it. **/

using System.Threading.Tasks;
using FairyGUI;
using DCET.Hotfix;

namespace ET.UIAssets
{
    [ObjectSystem]
    public class FUIShopItemAwakeSystem : AwakeSystem<FUIShopItem, GObject>
    {
        public override void Awake(FUIShopItem self, GObject go)
        {
            self.Awake(go);
        }
    }
	
	public sealed class FUIShopItem : FUI
	{	
		public const string UIPackageName = "UIAssets";
		public const string UIResName = "FUIShopItem";
		
		/// <summary>
        /// FUIShopItem的组件类型(GComponent、GButton、GProcessBar等)，它们都是GObject的子类。
        /// </summary>
		public GButton self;
		
		public Controller button;
		public GImage n0;
		public GImage n1;
		public GImage n2;
		public GTextField ItemName;
		public GTextField Price;
		public GLoader ItemIcon;

		private static GObject CreateGObject()
        {
            return UIPackage.CreateObject(UIPackageName, UIResName);
        }
		
		private static void CreateGObjectAsync(UIPackage.CreateObjectCallback result)
        {
            UIPackage.CreateObjectAsync(UIPackageName, UIResName, result);
        }

        public static FUIShopItem CreateInstance(Entity domain)
		{			
			return EntityFactory.Create<FUIShopItem, GObject>(domain, CreateGObject());
		}

        public static Task<FUIShopItem> CreateInstanceAsync(Entity domain)
        {
            TaskCompletionSource<FUIShopItem> tcs = new TaskCompletionSource<FUIShopItem>();

            CreateGObjectAsync((go) =>
            {
                tcs.SetResult(EntityFactory.Create<FUIShopItem, GObject>(domain, go));
            });

            return tcs.Task;
        }

        public static FUIShopItem Create(Entity domain, GObject go)
		{
			return EntityFactory.Create<FUIShopItem, GObject>(domain, go);
		}
		
        /// <summary>
        /// 通过此方法获取的FUI，在Dispose时不会释放GObject，需要自行管理（一般在配合FGUI的Pool机制时使用）。
        /// </summary>
        public static FUIShopItem GetFormPool(Entity domain, GObject go)
        {
            var fui = go.Get<FUIShopItem>();

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
				n2 = (GImage)com.GetChild("n2");
				ItemName = (GTextField)com.GetChild("ItemName");
				Price = (GTextField)com.GetChild("Price");
				ItemIcon = (GLoader)com.GetChild("ItemIcon");
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
			n2 = null;
			ItemName = null;
			Price = null;
			ItemIcon = null;
		}
	}
}