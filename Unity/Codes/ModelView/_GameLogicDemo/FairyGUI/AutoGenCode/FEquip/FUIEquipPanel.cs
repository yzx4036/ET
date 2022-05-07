/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

using FairyGUI;

namespace ET
{
    public static class FUIEquipPanelSystem
    {
        private static T CreateFUICompInst<T>(FUIEquipPanel self, GObject gObject) where T : Entity, IAwake<FUIGObjectComponent>, new()
        {
            var _fui = self.AddChild<FUIGObjectComponent, GObject>(gObject);
            return _fui.AddComponent<T, FUIGObjectComponent>(_fui);
        }

        /// <summary>
        /// 通过此方法获取的FUI，在Dispose时不会释放GObject，需要自行管理（一般在配合FGUI的Pool机制时使用）。
        /// </summary>
        // public static FUIEquipPanel GetFormPool(Entity domain, GObject go)
        // {
        //     var fui = go.Get<FUIEquipPanel>();
        //     if(fui == null)
        //     {
        //         fui = Create(domain, go);
        //     }
        //     fui.isFromFGUIPool = true;
        //     return fui;
        // }

        [FriendClass(typeof (FUIGObjectComponent))]
        [ObjectSystem]
        public class FUIEquipPanelAwakeSystem: AwakeSystem<FUIEquipPanel, FUIGObjectComponent>
        {
            public override void Awake(FUIEquipPanel self, FUIGObjectComponent fui)
            {
                self.selfFUIRoot = fui;
                self.selfGObj = (GComponent) fui.gObject;

                self.selfGObj.Add(fui);

                var com = fui.gObject.asCom;

                if (com != null)
                {
					self.AttrPanelC = com.GetControllerAt(0);
					self.n60 = (GImage)com.GetChildAt(0);
					self.n61 = (GTextField)com.GetChildAt(1);
					self.n62 = (GImage)com.GetChildAt(2);
					self.BG = (GGroup)com.GetChildAt(3);
					self.Helm = CreateFUICompInst<FEquipSlot>(self, com.GetChildAt(4));
					self.Necklace = CreateFUICompInst<FEquipSlot>(self, com.GetChildAt(5));
					self.Medal = CreateFUICompInst<FEquipSlot>(self, com.GetChildAt(6));
					self.BraceletR = CreateFUICompInst<FEquipSlot>(self, com.GetChildAt(7));
					self.RingR = CreateFUICompInst<FEquipSlot>(self, com.GetChildAt(8));
					self.Shoes = CreateFUICompInst<FEquipSlot>(self, com.GetChildAt(9));
					self.Belt = CreateFUICompInst<FEquipSlot>(self, com.GetChildAt(10));
					self.Amulet = CreateFUICompInst<FEquipSlot>(self, com.GetChildAt(11));
					self.RingL = CreateFUICompInst<FEquipSlot>(self, com.GetChildAt(12));
					self.BraceletL = CreateFUICompInst<FEquipSlot>(self, com.GetChildAt(13));
					self.Weapon = CreateFUICompInst<FEquipSlot>(self, com.GetChildAt(14));
					self.Armor = CreateFUICompInst<FEquipSlot>(self, com.GetChildAt(15));
					self.CharacterIcon = (GLoader)com.GetChildAt(16);
					self.n77 = (GTextField)com.GetChildAt(17);
					self.n78 = (GImage)com.GetChildAt(18);
					self.ADAttack = (GTextField)com.GetChildAt(19);
					self.n80 = (GTextField)com.GetChildAt(20);
					self.n81 = (GImage)com.GetChildAt(21);
					self.APAttack = (GTextField)com.GetChildAt(22);
					self.n83 = (GTextField)com.GetChildAt(23);
					self.n84 = (GImage)com.GetChildAt(24);
					self.DSAttack = (GTextField)com.GetChildAt(25);
					self.ToAttrBtn = CreateFUICompInst<FButton4_Normal>(self, com.GetChildAt(26));
					self.CloseBtn = CreateFUICompInst<FButton_Close>(self, com.GetChildAt(27));
					self.AttrPanel = CreateFUICompInst<FAttrPanel>(self, com.GetChildAt(28));

                }
            }
        }

        [FriendClass(typeof (FUIGObjectComponent))]
        [ObjectSystem]
        public class FUIEquipPanelDestroySystem: DestroySystem<FUIEquipPanel>
        {
            public override void Destroy(FUIEquipPanel self)
            {
				self.AttrPanelC = null;
				self.n60 = null;
				self.n61 = null;
				self.n62 = null;
				self.BG = null;
				self.Helm = null;
				self.Necklace = null;
				self.Medal = null;
				self.BraceletR = null;
				self.RingR = null;
				self.Shoes = null;
				self.Belt = null;
				self.Amulet = null;
				self.RingL = null;
				self.BraceletL = null;
				self.Weapon = null;
				self.Armor = null;
				self.CharacterIcon = null;
				self.n77 = null;
				self.n78 = null;
				self.ADAttack = null;
				self.n80 = null;
				self.n81 = null;
				self.APAttack = null;
				self.n83 = null;
				self.n84 = null;
				self.DSAttack = null;
				self.ToAttrBtn = null;
				self.CloseBtn = null;
				self.AttrPanel = null;

            }
        }
    }

    [FUI(typeof(FUIEquipPanel), UIPackageName, UIResName)]
    public sealed class FUIEquipPanel: Entity, IAwake<FUIGObjectComponent>, IDestroy
    {
        public const string UIPackageName = "FEquip";
        public const string UIResName = "UIEquipPanel";

        /// <summary>
        /// {uiResName}的组件类型(GComponent、GButton、GProcessBar等)，它们都是GObject的子类。
        /// </summary>
        public GComponent selfGObj;

        public FUIGObjectComponent selfFUIRoot;

		public Controller AttrPanelC { get; set; }
		public GImage n60 { get; set; }
		public GTextField n61 { get; set; }
		public GImage n62 { get; set; }
		public GGroup BG { get; set; }
		public FEquipSlot Helm { get; set; }
		public FEquipSlot Necklace { get; set; }
		public FEquipSlot Medal { get; set; }
		public FEquipSlot BraceletR { get; set; }
		public FEquipSlot RingR { get; set; }
		public FEquipSlot Shoes { get; set; }
		public FEquipSlot Belt { get; set; }
		public FEquipSlot Amulet { get; set; }
		public FEquipSlot RingL { get; set; }
		public FEquipSlot BraceletL { get; set; }
		public FEquipSlot Weapon { get; set; }
		public FEquipSlot Armor { get; set; }
		public GLoader CharacterIcon { get; set; }
		public GTextField n77 { get; set; }
		public GImage n78 { get; set; }
		public GTextField ADAttack { get; set; }
		public GTextField n80 { get; set; }
		public GImage n81 { get; set; }
		public GTextField APAttack { get; set; }
		public GTextField n83 { get; set; }
		public GImage n84 { get; set; }
		public GTextField DSAttack { get; set; }
		public FButton4_Normal ToAttrBtn { get; set; }
		public FButton_Close CloseBtn { get; set; }
		public FAttrPanel AttrPanel { get; set; }


        public const string URL = "ui://gjh30k0rik562";
    }
}