/** This is an automatically generated class by FairyGUI plugin FGUI2ET. Please do not modify it. **/

using System.Threading.Tasks;
using FairyGUI;


namespace ET
{
    [ObjectSystem]
    public class AttrPanelAwakeSystem : AwakeSystem<AttrPanel, GObject>
    {
        public override void Awake(AttrPanel self, GObject go)
        {
            self.Awake(go);
        }
    }
	
	public sealed class AttrPanel : FUI
	{	
		public const string UIPackageName = "UIEquip";
		public const string UIResName = "AttrPanel";
		
		/// <summary>
        /// AttrPanel的组件类型(GComponent、GButton、GProcessBar等)，它们都是GObject的子类。
        /// </summary>
		public GComponent self;
		
		public GImage AttrBG;
		public Button_Close CloseBtn;
		public GTextField n30;
		public GTextField n1;
		public GImage n2;
		public GTextField ADAttack;
		public GTextField n6;
		public GImage n7;
		public GTextField APAttack;
		public GTextField n10;
		public GImage n11;
		public GTextField DSAttack;
		public GTextField n14;
		public GImage n15;
		public GTextField ADDef;
		public GTextField n18;
		public GImage n19;
		public GTextField APDef;
		public GTextField n22;
		public GImage n23;
		public GTextField HP;
		public GTextField n26;
		public GImage n27;
		public GTextField MP;
		public GTextField n31;
		public GImage n32;
		public GTextField Hit;
		public GTextField n35;
		public GImage n36;
		public GTextField Miss;
		public GTextField n39;
		public GImage n40;
		public GTextField MagicMiss;
		public GTextField n43;
		public GImage n44;
		public GTextField Luckey;
		public GTextField n47;
		public GImage n48;
		public GTextField Cri;
		public GTextField n51;
		public GImage n52;
		public GTextField HPRec;
		public GTextField n55;
		public GImage n56;
		public GTextField MPRec;
		public GTextField n59;
		public GImage n60;
		public GTextField AtkSpeed;
		public Button4_Normal CloseBtnD;
		public GTextField n72;
		public GImage n73;
		public GTextField SuckHP;

		private static GObject CreateGObject()
        {
            return UIPackage.CreateObject(UIPackageName, UIResName);
        }
		
		private static void CreateGObjectAsync(UIPackage.CreateObjectCallback result)
        {
            UIPackage.CreateObjectAsync(UIPackageName, UIResName, result);
        }

        public static AttrPanel CreateInstance(Entity domain)
		{			
			return EntityFactory.Create<AttrPanel, GObject>(domain, CreateGObject());
		}

        public static Task<AttrPanel> CreateInstanceAsync(Entity domain)
        {
            TaskCompletionSource<AttrPanel> tcs = new TaskCompletionSource<AttrPanel>();

            CreateGObjectAsync((go) =>
            {
                tcs.SetResult(EntityFactory.Create<AttrPanel, GObject>(domain, go));
            });

            return tcs.Task;
        }

        public static AttrPanel Create(Entity domain, GObject go)
		{
			return EntityFactory.Create<AttrPanel, GObject>(domain, go);
		}
		
        /// <summary>
        /// 通过此方法获取的FUI，在Dispose时不会释放GObject，需要自行管理（一般在配合FGUI的Pool机制时使用）。
        /// </summary>
        public static AttrPanel GetFormPool(Entity domain, GObject go)
        {
            var fui = go.Get<AttrPanel>();

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
				AttrBG = (GImage)com.GetChild("AttrBG");
				CloseBtn = Button_Close.Create(domain, com.GetChild("CloseBtn"));
				n30 = (GTextField)com.GetChild("n30");
				n1 = (GTextField)com.GetChild("n1");
				n2 = (GImage)com.GetChild("n2");
				ADAttack = (GTextField)com.GetChild("ADAttack");
				n6 = (GTextField)com.GetChild("n6");
				n7 = (GImage)com.GetChild("n7");
				APAttack = (GTextField)com.GetChild("APAttack");
				n10 = (GTextField)com.GetChild("n10");
				n11 = (GImage)com.GetChild("n11");
				DSAttack = (GTextField)com.GetChild("DSAttack");
				n14 = (GTextField)com.GetChild("n14");
				n15 = (GImage)com.GetChild("n15");
				ADDef = (GTextField)com.GetChild("ADDef");
				n18 = (GTextField)com.GetChild("n18");
				n19 = (GImage)com.GetChild("n19");
				APDef = (GTextField)com.GetChild("APDef");
				n22 = (GTextField)com.GetChild("n22");
				n23 = (GImage)com.GetChild("n23");
				HP = (GTextField)com.GetChild("HP");
				n26 = (GTextField)com.GetChild("n26");
				n27 = (GImage)com.GetChild("n27");
				MP = (GTextField)com.GetChild("MP");
				n31 = (GTextField)com.GetChild("n31");
				n32 = (GImage)com.GetChild("n32");
				Hit = (GTextField)com.GetChild("Hit");
				n35 = (GTextField)com.GetChild("n35");
				n36 = (GImage)com.GetChild("n36");
				Miss = (GTextField)com.GetChild("Miss");
				n39 = (GTextField)com.GetChild("n39");
				n40 = (GImage)com.GetChild("n40");
				MagicMiss = (GTextField)com.GetChild("MagicMiss");
				n43 = (GTextField)com.GetChild("n43");
				n44 = (GImage)com.GetChild("n44");
				Luckey = (GTextField)com.GetChild("Luckey");
				n47 = (GTextField)com.GetChild("n47");
				n48 = (GImage)com.GetChild("n48");
				Cri = (GTextField)com.GetChild("Cri");
				n51 = (GTextField)com.GetChild("n51");
				n52 = (GImage)com.GetChild("n52");
				HPRec = (GTextField)com.GetChild("HPRec");
				n55 = (GTextField)com.GetChild("n55");
				n56 = (GImage)com.GetChild("n56");
				MPRec = (GTextField)com.GetChild("MPRec");
				n59 = (GTextField)com.GetChild("n59");
				n60 = (GImage)com.GetChild("n60");
				AtkSpeed = (GTextField)com.GetChild("AtkSpeed");
				CloseBtnD = Button4_Normal.Create(domain, com.GetChild("CloseBtnD"));
				n72 = (GTextField)com.GetChild("n72");
				n73 = (GImage)com.GetChild("n73");
				SuckHP = (GTextField)com.GetChild("SuckHP");
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
			AttrBG = null;
			CloseBtn.Dispose();
			CloseBtn = null;
			n30 = null;
			n1 = null;
			n2 = null;
			ADAttack = null;
			n6 = null;
			n7 = null;
			APAttack = null;
			n10 = null;
			n11 = null;
			DSAttack = null;
			n14 = null;
			n15 = null;
			ADDef = null;
			n18 = null;
			n19 = null;
			APDef = null;
			n22 = null;
			n23 = null;
			HP = null;
			n26 = null;
			n27 = null;
			MP = null;
			n31 = null;
			n32 = null;
			Hit = null;
			n35 = null;
			n36 = null;
			Miss = null;
			n39 = null;
			n40 = null;
			MagicMiss = null;
			n43 = null;
			n44 = null;
			Luckey = null;
			n47 = null;
			n48 = null;
			Cri = null;
			n51 = null;
			n52 = null;
			HPRec = null;
			n55 = null;
			n56 = null;
			MPRec = null;
			n59 = null;
			n60 = null;
			AtkSpeed = null;
			CloseBtnD.Dispose();
			CloseBtnD = null;
			n72 = null;
			n73 = null;
			SuckHP = null;
		}
	}
}