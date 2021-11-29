/** This is an automatically generated class by FairyGUI plugin FGUI2ET. Please do not modify it. **/

using System.Threading.Tasks;
using FairyGUI;


namespace ET
{
    [ObjectSystem]
    public class FUIMainAwakeSystem : AwakeSystem<FUIMain, GObject>
    {
        public override void Awake(FUIMain self, GObject go)
        {
            self.Awake(go);
        }
    }
	
	public sealed class FUIMain : FUI
	{	
		public const string UIPackageName = "UIMain";
		public const string UIResName = "FUIMain";
		
		/// <summary>
        /// FUIMain的组件类型(GComponent、GButton、GProcessBar等)，它们都是GObject的子类。
        /// </summary>
		public GComponent self;
		
		public GImage n80;
		public Button_Shop EquipShopBtn;
		public Button_Shop NotionShopBtn;
		public Button_Shop OldManBtn;
		public Button_Shop DrugstoreBtn;
		public Button_Shop RingShopBtn;
		public Button_Shop WeaponShopBtn;
		public Button_Shop SkillShopBtn;
		public Button_Shop InnShopBtn;

		private static GObject CreateGObject()
        {
            return UIPackage.CreateObject(UIPackageName, UIResName);
        }
		
		private static void CreateGObjectAsync(UIPackage.CreateObjectCallback result)
        {
            UIPackage.CreateObjectAsync(UIPackageName, UIResName, result);
        }

        public static FUIMain CreateInstance(Entity domain)
		{			
			return EntityFactory.Create<FUIMain, GObject>(domain, CreateGObject());
		}

        public static Task<FUIMain> CreateInstanceAsync(Entity domain)
        {
            TaskCompletionSource<FUIMain> tcs = new TaskCompletionSource<FUIMain>();

            CreateGObjectAsync((go) =>
            {
                tcs.SetResult(EntityFactory.Create<FUIMain, GObject>(domain, go));
            });

            return tcs.Task;
        }

        public static FUIMain Create(Entity domain, GObject go)
		{
			return EntityFactory.Create<FUIMain, GObject>(domain, go);
		}
		
        /// <summary>
        /// 通过此方法获取的FUI，在Dispose时不会释放GObject，需要自行管理（一般在配合FGUI的Pool机制时使用）。
        /// </summary>
        public static FUIMain GetFormPool(Entity domain, GObject go)
        {
            var fui = go.Get<FUIMain>();

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
				n80 = (GImage)com.GetChild("n80");
				EquipShopBtn = Button_Shop.Create(domain, com.GetChild("EquipShopBtn"));
				NotionShopBtn = Button_Shop.Create(domain, com.GetChild("NotionShopBtn"));
				OldManBtn = Button_Shop.Create(domain, com.GetChild("OldManBtn"));
				DrugstoreBtn = Button_Shop.Create(domain, com.GetChild("DrugstoreBtn"));
				RingShopBtn = Button_Shop.Create(domain, com.GetChild("RingShopBtn"));
				WeaponShopBtn = Button_Shop.Create(domain, com.GetChild("WeaponShopBtn"));
				SkillShopBtn = Button_Shop.Create(domain, com.GetChild("SkillShopBtn"));
				InnShopBtn = Button_Shop.Create(domain, com.GetChild("InnShopBtn"));
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
			n80 = null;
			EquipShopBtn.Dispose();
			EquipShopBtn = null;
			NotionShopBtn.Dispose();
			NotionShopBtn = null;
			OldManBtn.Dispose();
			OldManBtn = null;
			DrugstoreBtn.Dispose();
			DrugstoreBtn = null;
			RingShopBtn.Dispose();
			RingShopBtn = null;
			WeaponShopBtn.Dispose();
			WeaponShopBtn = null;
			SkillShopBtn.Dispose();
			SkillShopBtn = null;
			InnShopBtn.Dispose();
			InnShopBtn = null;
		}
	}
}