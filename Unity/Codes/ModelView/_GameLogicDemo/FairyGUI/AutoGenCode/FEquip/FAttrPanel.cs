/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

using FairyGUI;

namespace ET
{
    public static class FAttrPanelSystem
    {
        private static T CreateFUICompInst<T>(FAttrPanel self, GObject gObject) where T : Entity, IAwake, new()
        {
            var _fui = self.AddChild<FUIGObjectComponent, GObject>(gObject);
            return _fui.AddComponent<T>();
        }

        /// <summary>
        /// 通过此方法获取的FUI，在Dispose时不会释放GObject，需要自行管理（一般在配合FGUI的Pool机制时使用）。
        /// </summary>
        // public static FAttrPanel GetFormPool(Entity domain, GObject go)
        // {
        //     var fui = go.Get<FAttrPanel>();
        //     if(fui == null)
        //     {
        //         fui = Create(domain, go);
        //     }
        //     fui.isFromFGUIPool = true;
        //     return fui;
        // }

        [ObjectSystem]
        public class FAttrPanelAwakeSystem: AwakeSystem<FAttrPanel>
        {
            public override void Awake(FAttrPanel self)
            {
                self.selfGObj.Add(self.selfFUIRoot);
                var com = self.selfFUIRoot.gObject.asCom;
                if (com != null)
                {
					self.AttrBG = (GImage)com.GetChildAt(0);
					self.CloseBtn = CreateFUICompInst<FButton_Close>(self, com.GetChildAt(1));
					self.n30 = (GTextField)com.GetChildAt(2);
					self.n1 = (GTextField)com.GetChildAt(3);
					self.n2 = (GImage)com.GetChildAt(4);
					self.ADAttack = (GTextField)com.GetChildAt(5);
					self.n6 = (GTextField)com.GetChildAt(6);
					self.n7 = (GImage)com.GetChildAt(7);
					self.APAttack = (GTextField)com.GetChildAt(8);
					self.n10 = (GTextField)com.GetChildAt(9);
					self.n11 = (GImage)com.GetChildAt(10);
					self.DSAttack = (GTextField)com.GetChildAt(11);
					self.n14 = (GTextField)com.GetChildAt(12);
					self.n15 = (GImage)com.GetChildAt(13);
					self.ADDef = (GTextField)com.GetChildAt(14);
					self.n18 = (GTextField)com.GetChildAt(15);
					self.n19 = (GImage)com.GetChildAt(16);
					self.APDef = (GTextField)com.GetChildAt(17);
					self.n22 = (GTextField)com.GetChildAt(18);
					self.n23 = (GImage)com.GetChildAt(19);
					self.HP = (GTextField)com.GetChildAt(20);
					self.n26 = (GTextField)com.GetChildAt(21);
					self.n27 = (GImage)com.GetChildAt(22);
					self.MP = (GTextField)com.GetChildAt(23);
					self.n31 = (GTextField)com.GetChildAt(24);
					self.n32 = (GImage)com.GetChildAt(25);
					self.Hit = (GTextField)com.GetChildAt(26);
					self.n35 = (GTextField)com.GetChildAt(27);
					self.n36 = (GImage)com.GetChildAt(28);
					self.Miss = (GTextField)com.GetChildAt(29);
					self.n39 = (GTextField)com.GetChildAt(30);
					self.n40 = (GImage)com.GetChildAt(31);
					self.MagicMiss = (GTextField)com.GetChildAt(32);
					self.n43 = (GTextField)com.GetChildAt(33);
					self.n44 = (GImage)com.GetChildAt(34);
					self.Luckey = (GTextField)com.GetChildAt(35);
					self.n47 = (GTextField)com.GetChildAt(36);
					self.n48 = (GImage)com.GetChildAt(37);
					self.Cri = (GTextField)com.GetChildAt(38);
					self.n51 = (GTextField)com.GetChildAt(39);
					self.n52 = (GImage)com.GetChildAt(40);
					self.HPRec = (GTextField)com.GetChildAt(41);
					self.n55 = (GTextField)com.GetChildAt(42);
					self.n56 = (GImage)com.GetChildAt(43);
					self.MPRec = (GTextField)com.GetChildAt(44);
					self.n59 = (GTextField)com.GetChildAt(45);
					self.n60 = (GImage)com.GetChildAt(46);
					self.AtkSpeed = (GTextField)com.GetChildAt(47);
					self.CloseBtnD = CreateFUICompInst<FButton4_Normal>(self, com.GetChildAt(48));
					self.n72 = (GTextField)com.GetChildAt(49);
					self.n73 = (GImage)com.GetChildAt(50);
					self.SuckHP = (GTextField)com.GetChildAt(51);

                }
            }
        }

        [FriendClass(typeof (FUIGObjectComponent))]
        [ObjectSystem]
        public class FAttrPanelDestroySystem: DestroySystem<FAttrPanel>
        {
            public override void Destroy(FAttrPanel self)
            {
				self.AttrBG = null;
				self.CloseBtn = null;
				self.n30 = null;
				self.n1 = null;
				self.n2 = null;
				self.ADAttack = null;
				self.n6 = null;
				self.n7 = null;
				self.APAttack = null;
				self.n10 = null;
				self.n11 = null;
				self.DSAttack = null;
				self.n14 = null;
				self.n15 = null;
				self.ADDef = null;
				self.n18 = null;
				self.n19 = null;
				self.APDef = null;
				self.n22 = null;
				self.n23 = null;
				self.HP = null;
				self.n26 = null;
				self.n27 = null;
				self.MP = null;
				self.n31 = null;
				self.n32 = null;
				self.Hit = null;
				self.n35 = null;
				self.n36 = null;
				self.Miss = null;
				self.n39 = null;
				self.n40 = null;
				self.MagicMiss = null;
				self.n43 = null;
				self.n44 = null;
				self.Luckey = null;
				self.n47 = null;
				self.n48 = null;
				self.Cri = null;
				self.n51 = null;
				self.n52 = null;
				self.HPRec = null;
				self.n55 = null;
				self.n56 = null;
				self.MPRec = null;
				self.n59 = null;
				self.n60 = null;
				self.AtkSpeed = null;
				self.CloseBtnD = null;
				self.n72 = null;
				self.n73 = null;
				self.SuckHP = null;

            }
        }
    }

    
    public sealed class FAttrPanel: Entity, IAwake, IDestroy
    {
        public const string UIPackageName = "FEquip";
        public const string UIResName = "AttrPanel";

        /// <summary>
        /// {uiResName}的组件类型(GComponent、GButton、GProcessBar等)，它们都是GObject的子类。
        /// </summary>
        public GComponent selfGObj
        {
            get
            {
                return (GComponent)this.selfFUIRoot?.gObject;
            }
        }
        
        public FUIGObjectComponent selfFUIRoot
         {
            get
            {
                return this.GetParent<FUIGObjectComponent>();
            }
        }

		public GImage AttrBG { get; set; }
		public FButton_Close CloseBtn { get; set; }
		public GTextField n30 { get; set; }
		public GTextField n1 { get; set; }
		public GImage n2 { get; set; }
		public GTextField ADAttack { get; set; }
		public GTextField n6 { get; set; }
		public GImage n7 { get; set; }
		public GTextField APAttack { get; set; }
		public GTextField n10 { get; set; }
		public GImage n11 { get; set; }
		public GTextField DSAttack { get; set; }
		public GTextField n14 { get; set; }
		public GImage n15 { get; set; }
		public GTextField ADDef { get; set; }
		public GTextField n18 { get; set; }
		public GImage n19 { get; set; }
		public GTextField APDef { get; set; }
		public GTextField n22 { get; set; }
		public GImage n23 { get; set; }
		public GTextField HP { get; set; }
		public GTextField n26 { get; set; }
		public GImage n27 { get; set; }
		public GTextField MP { get; set; }
		public GTextField n31 { get; set; }
		public GImage n32 { get; set; }
		public GTextField Hit { get; set; }
		public GTextField n35 { get; set; }
		public GImage n36 { get; set; }
		public GTextField Miss { get; set; }
		public GTextField n39 { get; set; }
		public GImage n40 { get; set; }
		public GTextField MagicMiss { get; set; }
		public GTextField n43 { get; set; }
		public GImage n44 { get; set; }
		public GTextField Luckey { get; set; }
		public GTextField n47 { get; set; }
		public GImage n48 { get; set; }
		public GTextField Cri { get; set; }
		public GTextField n51 { get; set; }
		public GImage n52 { get; set; }
		public GTextField HPRec { get; set; }
		public GTextField n55 { get; set; }
		public GImage n56 { get; set; }
		public GTextField MPRec { get; set; }
		public GTextField n59 { get; set; }
		public GImage n60 { get; set; }
		public GTextField AtkSpeed { get; set; }
		public FButton4_Normal CloseBtnD { get; set; }
		public GTextField n72 { get; set; }
		public GImage n73 { get; set; }
		public GTextField SuckHP { get; set; }


        public const string URL = "ui://gjh30k0rci54l";
    }
}