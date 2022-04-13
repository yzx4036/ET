/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

using FairyGUI;
using System.Threading.Tasks;

namespace ET
{
    [ObjectSystem]
    public class FAttrPanelAwakeSystem : AwakeSystem<FAttrPanel, FUI>
    {
        public override void Awake(FAttrPanel self, FUI fui)
        {
            self.Awake(fui);
        }
    }
        
    [FriendClass(typeof(FUI))]
    public sealed class FAttrPanel : Entity, IAwake<FUI>
    {	
        public const string UIPackageName = "FEquip";
        public const string UIResName = "AttrPanel";
        
        /// <summary>
        /// {uiResName}的组件类型(GComponent、GButton、GProcessBar等)，它们都是GObject的子类。
        /// </summary>
        public GComponent self;
            
        public GImage AttrBG;
        public FButton_Close CloseBtn;
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
        public FButton4_Normal CloseBtnD;
        public GTextField n72;
        public GImage n73;
        public GTextField SuckHP;
        public const string URL = "ui://gjh30k0rci54l";

        /// <summary>
        /// 通过此方法获取的FUI，在Dispose时不会释放GObject，需要自行管理（一般在配合FGUI的Pool机制时使用）。
        /// </summary>
        //public static FAttrPanel GetFormPool(Entity domain, GObject go)
        //{
			//  var fui = go.Get<FAttrPanel>();

            //if(fui == null)
            //{
			//  fui = Create(domain, go);
			//}

			//fui.isFromFGUIPool = true;

			//return fui;
		//}
        
    	private T CreateFUICompInst<T>(GObject gObject) where T : Entity, IAwake<FUI>, new()
        {
			var _fui = this.AddChild<FUI, GObject>(gObject);
	        return _fui.AddComponent<T, FUI>(_fui);
        }
		
        public void Awake(FUI fui)
        {
			self = (GComponent)fui.gObject;
        
			self.Add(fui);
        
			var com = fui.gObject.asCom;
            
			if(com != null)
			{
    			AttrBG = (GImage)com.GetChildAt(0);
    			CloseBtn = CreateFUICompInst<FButton_Close>(com.GetChildAt(1));
    			n30 = (GTextField)com.GetChildAt(2);
    			n1 = (GTextField)com.GetChildAt(3);
    			n2 = (GImage)com.GetChildAt(4);
    			ADAttack = (GTextField)com.GetChildAt(5);
    			n6 = (GTextField)com.GetChildAt(6);
    			n7 = (GImage)com.GetChildAt(7);
    			APAttack = (GTextField)com.GetChildAt(8);
    			n10 = (GTextField)com.GetChildAt(9);
    			n11 = (GImage)com.GetChildAt(10);
    			DSAttack = (GTextField)com.GetChildAt(11);
    			n14 = (GTextField)com.GetChildAt(12);
    			n15 = (GImage)com.GetChildAt(13);
    			ADDef = (GTextField)com.GetChildAt(14);
    			n18 = (GTextField)com.GetChildAt(15);
    			n19 = (GImage)com.GetChildAt(16);
    			APDef = (GTextField)com.GetChildAt(17);
    			n22 = (GTextField)com.GetChildAt(18);
    			n23 = (GImage)com.GetChildAt(19);
    			HP = (GTextField)com.GetChildAt(20);
    			n26 = (GTextField)com.GetChildAt(21);
    			n27 = (GImage)com.GetChildAt(22);
    			MP = (GTextField)com.GetChildAt(23);
    			n31 = (GTextField)com.GetChildAt(24);
    			n32 = (GImage)com.GetChildAt(25);
    			Hit = (GTextField)com.GetChildAt(26);
    			n35 = (GTextField)com.GetChildAt(27);
    			n36 = (GImage)com.GetChildAt(28);
    			Miss = (GTextField)com.GetChildAt(29);
    			n39 = (GTextField)com.GetChildAt(30);
    			n40 = (GImage)com.GetChildAt(31);
    			MagicMiss = (GTextField)com.GetChildAt(32);
    			n43 = (GTextField)com.GetChildAt(33);
    			n44 = (GImage)com.GetChildAt(34);
    			Luckey = (GTextField)com.GetChildAt(35);
    			n47 = (GTextField)com.GetChildAt(36);
    			n48 = (GImage)com.GetChildAt(37);
    			Cri = (GTextField)com.GetChildAt(38);
    			n51 = (GTextField)com.GetChildAt(39);
    			n52 = (GImage)com.GetChildAt(40);
    			HPRec = (GTextField)com.GetChildAt(41);
    			n55 = (GTextField)com.GetChildAt(42);
    			n56 = (GImage)com.GetChildAt(43);
    			MPRec = (GTextField)com.GetChildAt(44);
    			n59 = (GTextField)com.GetChildAt(45);
    			n60 = (GImage)com.GetChildAt(46);
    			AtkSpeed = (GTextField)com.GetChildAt(47);
    			CloseBtnD = CreateFUICompInst<FButton4_Normal>(com.GetChildAt(48));
    			n72 = (GTextField)com.GetChildAt(49);
    			n73 = (GImage)com.GetChildAt(50);
    			SuckHP = (GTextField)com.GetChildAt(51);
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
    		CloseBtnD = null;
    		n72 = null;
    		n73 = null;
    		SuckHP = null;
    	}
}
}