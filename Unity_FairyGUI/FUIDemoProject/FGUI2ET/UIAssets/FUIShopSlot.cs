/** This is an automatically generated class by FairyGUI plugin FGUI2ET. Please do not modify it. **/

using System.Threading.Tasks;
using FairyGUI;
using DCET.Hotfix;

namespace ET.UIAssets
{
    [ObjectSystem]
    public class FUIShopSlotAwakeSystem : AwakeSystem<FUIShopSlot, GObject>
    {
        public override void Awake(FUIShopSlot self, GObject go)
        {
            self.Awake(go);
        }
    }
	
	public sealed class FUIShopSlot : FUI
	{	
		public const string UIPackageName = "UIAssets";
		public const string UIResName = "FUIShopSlot";
		
		/// <summary>
        /// FUIShopSlot的组件类型(GComponent、GButton、GProcessBar等)，它们都是GObject的子类。
        /// </summary>
		public GButton self;
		
		public Controller button;
		public GImage n0;
		public GLoader icon;
		public GTextField count;
		public GImage n1;

		private static GObject CreateGObject()
        {
            return UIPackage.CreateObject(UIPackageName, UIResName);
        }
		
		private static void CreateGObjectAsync(UIPackage.CreateObjectCallback result)
        {
            UIPackage.CreateObjectAsync(UIPackageName, UIResName, result);
        }

        public static FUIShopSlot CreateInstance(Entity domain)
		{			
			return EntityFactory.Create<FUIShopSlot, GObject>(domain, CreateGObject());
		}

        public static Task<FUIShopSlot> CreateInstanceAsync(Entity domain)
        {
            TaskCompletionSource<FUIShopSlot> tcs = new TaskCompletionSource<FUIShopSlot>();

            CreateGObjectAsync((go) =>
            {
                tcs.SetResult(EntityFactory.Create<FUIShopSlot, GObject>(domain, go));
            });

            return tcs.Task;
        }

        public static FUIShopSlot Create(Entity domain, GObject go)
		{
			return EntityFactory.Create<FUIShopSlot, GObject>(domain, go);
		}
		
        /// <summary>
        /// 通过此方法获取的FUI，在Dispose时不会释放GObject，需要自行管理（一般在配合FGUI的Pool机制时使用）。
        /// </summary>
        public static FUIShopSlot GetFormPool(Entity domain, GObject go)
        {
            var fui = go.Get<FUIShopSlot>();

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
				icon = (GLoader)com.GetChild("icon");
				count = (GTextField)com.GetChild("count");
				n1 = (GImage)com.GetChild("n1");
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
			icon = null;
			count = null;
			n1 = null;
		}
	}
}