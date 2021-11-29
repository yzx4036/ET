/** This is an automatically generated class by FairyGUI plugin FGUI2ET. Please do not modify it. **/

using System.Threading.Tasks;
using FairyGUI;


namespace ET
{
    [ObjectSystem]
    public class FUIEquipPanelAwakeSystem : AwakeSystem<FUIEquipPanel, GObject>
    {
        public override void Awake(FUIEquipPanel self, GObject go)
        {
            self.Awake(go);
        }
    }
	
	public sealed class FUIEquipPanel : FUI
	{	
		public const string UIPackageName = "UIEquip";
		public const string UIResName = "FUIEquipPanel";
		
		/// <summary>
        /// FUIEquipPanel的组件类型(GComponent、GButton、GProcessBar等)，它们都是GObject的子类。
        /// </summary>
		public GComponent self;
		
		public Controller AttrPanelC;
		public GImage n60;
		public GTextField n61;
		public GImage n62;
		public GGroup BG;
		public FUIEquipSlot Helm;
		public FUIEquipSlot Necklace;
		public FUIEquipSlot Medal;
		public FUIEquipSlot BraceletR;
		public FUIEquipSlot RingR;
		public FUIEquipSlot Shoes;
		public FUIEquipSlot Belt;
		public FUIEquipSlot Amulet;
		public FUIEquipSlot RingL;
		public FUIEquipSlot BraceletL;
		public FUIEquipSlot Weapon;
		public FUIEquipSlot Armor;
		public GLoader CharacterIcon;
		public GTextField n77;
		public GImage n78;
		public GTextField ADAttack;
		public GTextField n80;
		public GImage n81;
		public GTextField APAttack;
		public GTextField n83;
		public GImage n84;
		public GTextField DSAttack;
		public Button4_Normal ToAttrBtn;
		public Button_Close CloseBtn;
		public AttrPanel AttrPanel;

		private static GObject CreateGObject()
        {
            return UIPackage.CreateObject(UIPackageName, UIResName);
        }
		
		private static void CreateGObjectAsync(UIPackage.CreateObjectCallback result)
        {
            UIPackage.CreateObjectAsync(UIPackageName, UIResName, result);
        }

        public static FUIEquipPanel CreateInstance(Entity domain)
		{			
			return EntityFactory.Create<FUIEquipPanel, GObject>(domain, CreateGObject());
		}

        public static Task<FUIEquipPanel> CreateInstanceAsync(Entity domain)
        {
            TaskCompletionSource<FUIEquipPanel> tcs = new TaskCompletionSource<FUIEquipPanel>();

            CreateGObjectAsync((go) =>
            {
                tcs.SetResult(EntityFactory.Create<FUIEquipPanel, GObject>(domain, go));
            });

            return tcs.Task;
        }

        public static FUIEquipPanel Create(Entity domain, GObject go)
		{
			return EntityFactory.Create<FUIEquipPanel, GObject>(domain, go);
		}
		
        /// <summary>
        /// 通过此方法获取的FUI，在Dispose时不会释放GObject，需要自行管理（一般在配合FGUI的Pool机制时使用）。
        /// </summary>
        public static FUIEquipPanel GetFormPool(Entity domain, GObject go)
        {
            var fui = go.Get<FUIEquipPanel>();

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
				AttrPanelC = com.GetController("AttrPanelC");
				n60 = (GImage)com.GetChild("n60");
				n61 = (GTextField)com.GetChild("n61");
				n62 = (GImage)com.GetChild("n62");
				BG = (GGroup)com.GetChild("BG");
				Helm = FUIEquipSlot.Create(domain, com.GetChild("Helm"));
				Necklace = FUIEquipSlot.Create(domain, com.GetChild("Necklace"));
				Medal = FUIEquipSlot.Create(domain, com.GetChild("Medal"));
				BraceletR = FUIEquipSlot.Create(domain, com.GetChild("BraceletR"));
				RingR = FUIEquipSlot.Create(domain, com.GetChild("RingR"));
				Shoes = FUIEquipSlot.Create(domain, com.GetChild("Shoes"));
				Belt = FUIEquipSlot.Create(domain, com.GetChild("Belt"));
				Amulet = FUIEquipSlot.Create(domain, com.GetChild("Amulet"));
				RingL = FUIEquipSlot.Create(domain, com.GetChild("RingL"));
				BraceletL = FUIEquipSlot.Create(domain, com.GetChild("BraceletL"));
				Weapon = FUIEquipSlot.Create(domain, com.GetChild("Weapon"));
				Armor = FUIEquipSlot.Create(domain, com.GetChild("Armor"));
				CharacterIcon = (GLoader)com.GetChild("CharacterIcon");
				n77 = (GTextField)com.GetChild("n77");
				n78 = (GImage)com.GetChild("n78");
				ADAttack = (GTextField)com.GetChild("ADAttack");
				n80 = (GTextField)com.GetChild("n80");
				n81 = (GImage)com.GetChild("n81");
				APAttack = (GTextField)com.GetChild("APAttack");
				n83 = (GTextField)com.GetChild("n83");
				n84 = (GImage)com.GetChild("n84");
				DSAttack = (GTextField)com.GetChild("DSAttack");
				ToAttrBtn = Button4_Normal.Create(domain, com.GetChild("ToAttrBtn"));
				CloseBtn = Button_Close.Create(domain, com.GetChild("CloseBtn"));
				AttrPanel = AttrPanel.Create(domain, com.GetChild("AttrPanel"));
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
			AttrPanelC = null;
			n60 = null;
			n61 = null;
			n62 = null;
			BG = null;
			Helm.Dispose();
			Helm = null;
			Necklace.Dispose();
			Necklace = null;
			Medal.Dispose();
			Medal = null;
			BraceletR.Dispose();
			BraceletR = null;
			RingR.Dispose();
			RingR = null;
			Shoes.Dispose();
			Shoes = null;
			Belt.Dispose();
			Belt = null;
			Amulet.Dispose();
			Amulet = null;
			RingL.Dispose();
			RingL = null;
			BraceletL.Dispose();
			BraceletL = null;
			Weapon.Dispose();
			Weapon = null;
			Armor.Dispose();
			Armor = null;
			CharacterIcon = null;
			n77 = null;
			n78 = null;
			ADAttack = null;
			n80 = null;
			n81 = null;
			APAttack = null;
			n83 = null;
			n84 = null;
			DSAttack = null;
			ToAttrBtn.Dispose();
			ToAttrBtn = null;
			CloseBtn.Dispose();
			CloseBtn = null;
			AttrPanel.Dispose();
			AttrPanel = null;
		}
	}
}