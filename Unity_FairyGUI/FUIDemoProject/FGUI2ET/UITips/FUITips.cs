/** This is an automatically generated class by FairyGUI plugin FGUI2ET. Please do not modify it. **/

using System.Threading.Tasks;
using FairyGUI;


namespace ET
{
    [ObjectSystem]
    public class FUITipsAwakeSystem : AwakeSystem<FUITips, GObject>
    {
        public override void Awake(FUITips self, GObject go)
        {
            self.Awake(go);
        }
    }
	
	public sealed class FUITips : FUI
	{	
		public const string UIPackageName = "UITips";
		public const string UIResName = "FUITips";
		
		/// <summary>
        /// FUITips的组件类型(GComponent、GButton、GProcessBar等)，它们都是GObject的子类。
        /// </summary>
		public GComponent self;
		
		public Controller ShowTypeC;
		public GImage n58;
		public GImage n45;
		public GImage n34;
		public GImage n38;
		public GImage n35;
		public GImage n37;
		public GImage n36;
		public GTextField ItemType;
		public GTextField ItemName;
		public GImage n41;
		public GLoader ItemIcon;
		public GTextField ItemLevel;
		public GTextField ItemClass;
		public GList AttrList;
		public GTextField SellPrice;
		public GTextField Endurance;
		public Button_Tips EquipBtn;
		public Button_Tips UseBtn;
		public Button_Tips UnEquipBtn;
		public Button_Tips LeftBtn;
		public Button_Tips RightBtn;
		public Button_Tips GetBtn;
		public Button_Tips LockBtn;

		private static GObject CreateGObject()
        {
            return UIPackage.CreateObject(UIPackageName, UIResName);
        }
		
		private static void CreateGObjectAsync(UIPackage.CreateObjectCallback result)
        {
            UIPackage.CreateObjectAsync(UIPackageName, UIResName, result);
        }

        public static FUITips CreateInstance(Entity domain)
		{			
			return EntityFactory.Create<FUITips, GObject>(domain, CreateGObject());
		}

        public static Task<FUITips> CreateInstanceAsync(Entity domain)
        {
            TaskCompletionSource<FUITips> tcs = new TaskCompletionSource<FUITips>();

            CreateGObjectAsync((go) =>
            {
                tcs.SetResult(EntityFactory.Create<FUITips, GObject>(domain, go));
            });

            return tcs.Task;
        }

        public static FUITips Create(Entity domain, GObject go)
		{
			return EntityFactory.Create<FUITips, GObject>(domain, go);
		}
		
        /// <summary>
        /// 通过此方法获取的FUI，在Dispose时不会释放GObject，需要自行管理（一般在配合FGUI的Pool机制时使用）。
        /// </summary>
        public static FUITips GetFormPool(Entity domain, GObject go)
        {
            var fui = go.Get<FUITips>();

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
				ShowTypeC = com.GetController("ShowTypeC");
				n58 = (GImage)com.GetChild("n58");
				n45 = (GImage)com.GetChild("n45");
				n34 = (GImage)com.GetChild("n34");
				n38 = (GImage)com.GetChild("n38");
				n35 = (GImage)com.GetChild("n35");
				n37 = (GImage)com.GetChild("n37");
				n36 = (GImage)com.GetChild("n36");
				ItemType = (GTextField)com.GetChild("ItemType");
				ItemName = (GTextField)com.GetChild("ItemName");
				n41 = (GImage)com.GetChild("n41");
				ItemIcon = (GLoader)com.GetChild("ItemIcon");
				ItemLevel = (GTextField)com.GetChild("ItemLevel");
				ItemClass = (GTextField)com.GetChild("ItemClass");
				AttrList = (GList)com.GetChild("AttrList");
				SellPrice = (GTextField)com.GetChild("SellPrice");
				Endurance = (GTextField)com.GetChild("Endurance");
				EquipBtn = Button_Tips.Create(domain,com.GetChild("EquipBtn"));
				UseBtn = Button_Tips.Create(domain,com.GetChild("UseBtn"));
				UnEquipBtn = Button_Tips.Create(domain,com.GetChild("UnEquipBtn"));
				LeftBtn = Button_Tips.Create(domain,com.GetChild("LeftBtn"));
				RightBtn = Button_Tips.Create(domain,com.GetChild("RightBtn"));
				GetBtn = Button_Tips.Create(domain,com.GetChild("GetBtn"));
				LockBtn = Button_Tips.Create(domain,com.GetChild("LockBtn"));
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
			ShowTypeC = null;
			n58 = null;
			n45 = null;
			n34 = null;
			n38 = null;
			n35 = null;
			n37 = null;
			n36 = null;
			ItemType = null;
			ItemName = null;
			n41 = null;
			ItemIcon = null;
			ItemLevel = null;
			ItemClass = null;
			AttrList = null;
			SellPrice = null;
			Endurance = null;
			EquipBtn.Dispose();
			EquipBtn = null;
			UseBtn.Dispose();
			UseBtn = null;
			UnEquipBtn.Dispose();
			UnEquipBtn = null;
			LeftBtn.Dispose();
			LeftBtn = null;
			RightBtn.Dispose();
			RightBtn = null;
			GetBtn.Dispose();
			GetBtn = null;
			LockBtn.Dispose();
			LockBtn = null;
		}
	}
}