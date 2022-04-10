/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

using FairyGUI;
using System.Threading.Tasks;

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
        
    [FUI(typeof(FUIEquipPanel), UIPackageName, UIResName)]
    public sealed class FUIEquipPanel : FUI
    {	
        public const string UIPackageName = "FEquip";
        public const string UIResName = "UIEquipPanel";
        
        /// <summary>
        /// {uiResName}的组件类型(GComponent、GButton、GProcessBar等)，它们都是GObject的子类。
        /// </summary>
        public GComponent self;
            
        public Controller AttrPanelC;
        public GImage n60;
        public GTextField n61;
        public GImage n62;
        public GGroup BG;
        public FEquipSlot Helm;
        public FEquipSlot Necklace;
        public FEquipSlot Medal;
        public FEquipSlot BraceletR;
        public FEquipSlot RingR;
        public FEquipSlot Shoes;
        public FEquipSlot Belt;
        public FEquipSlot Amulet;
        public FEquipSlot RingL;
        public FEquipSlot BraceletL;
        public FEquipSlot Weapon;
        public FEquipSlot Armor;
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
        public FButton4_Normal ToAttrBtn;
        public FButton_Close CloseBtn;
        public FAttrPanel AttrPanel;
        public const string URL = "ui://gjh30k0rik562";

        /// <summary>
        /// 通过此方法获取的FUI，在Dispose时不会释放GObject，需要自行管理（一般在配合FGUI的Pool机制时使用）。
        /// </summary>
        //public static FUIEquipPanel GetFormPool(Entity domain, GObject go)
        //{
			//  var fui = go.Get<FUIEquipPanel>();

            //if(fui == null)
            //{
			//  fui = Create(domain, go);
			//}

			//fui.isFromFGUIPool = true;

			//return fui;
		//}
        
        public void Awake(GObject go)
        {
            if(go == null)
            {
                return;
			}
        
			GObject = go;	
        
			if (string.IsNullOrWhiteSpace(Name))
			{
				Name = UIResName;
			}
        
			self = (GComponent)go;
        
			self.Add(this);
        
			var com = go.asCom;
            
			if(com != null)
			{
    			AttrPanelC = com.GetControllerAt(0);
    			n60 = (GImage)com.GetChildAt(0);
    			n61 = (GTextField)com.GetChildAt(1);
    			n62 = (GImage)com.GetChildAt(2);
    			BG = (GGroup)com.GetChildAt(3);
    			Helm = AddChild<FEquipSlot, GObject>(com.GetChildAt(4));
    			Necklace = AddChild<FEquipSlot, GObject>(com.GetChildAt(5));
    			Medal = AddChild<FEquipSlot, GObject>(com.GetChildAt(6));
    			BraceletR = AddChild<FEquipSlot, GObject>(com.GetChildAt(7));
    			RingR = AddChild<FEquipSlot, GObject>(com.GetChildAt(8));
    			Shoes = AddChild<FEquipSlot, GObject>(com.GetChildAt(9));
    			Belt = AddChild<FEquipSlot, GObject>(com.GetChildAt(10));
    			Amulet = AddChild<FEquipSlot, GObject>(com.GetChildAt(11));
    			RingL = AddChild<FEquipSlot, GObject>(com.GetChildAt(12));
    			BraceletL = AddChild<FEquipSlot, GObject>(com.GetChildAt(13));
    			Weapon = AddChild<FEquipSlot, GObject>(com.GetChildAt(14));
    			Armor = AddChild<FEquipSlot, GObject>(com.GetChildAt(15));
    			CharacterIcon = (GLoader)com.GetChildAt(16);
    			n77 = (GTextField)com.GetChildAt(17);
    			n78 = (GImage)com.GetChildAt(18);
    			ADAttack = (GTextField)com.GetChildAt(19);
    			n80 = (GTextField)com.GetChildAt(20);
    			n81 = (GImage)com.GetChildAt(21);
    			APAttack = (GTextField)com.GetChildAt(22);
    			n83 = (GTextField)com.GetChildAt(23);
    			n84 = (GImage)com.GetChildAt(24);
    			DSAttack = (GTextField)com.GetChildAt(25);
    			ToAttrBtn = AddChild<FButton4_Normal, GObject>(com.GetChildAt(26));
    			CloseBtn = AddChild<FButton_Close, GObject>(com.GetChildAt(27));
    			AttrPanel = AddChild<FAttrPanel, GObject>(com.GetChildAt(28));
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
    		Helm = null;
    		Necklace = null;
    		Medal = null;
    		BraceletR = null;
    		RingR = null;
    		Shoes = null;
    		Belt = null;
    		Amulet = null;
    		RingL = null;
    		BraceletL = null;
    		Weapon = null;
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
    		ToAttrBtn = null;
    		CloseBtn = null;
    		AttrPanel = null;
    	}
}
}