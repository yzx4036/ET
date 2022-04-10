/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

using FairyGUI;
using System.Threading.Tasks;

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
        public const string UIPackageName = "FMain";
        public const string UIResName = "UIMain";
        
        /// <summary>
        /// {uiResName}的组件类型(GComponent、GButton、GProcessBar等)，它们都是GObject的子类。
        /// </summary>
        public GComponent self;
            
        public GImage n80;
        public FButton_Shop EquipShopBtn;
        public FButton_Shop NotionShopBtn;
        public FButton_Shop OldManBtn;
        public FButton_Shop DrugstoreBtn;
        public FButton_Shop RingShopBtn;
        public FButton_Shop WeaponShopBtn;
        public FButton_Shop SkillShopBtn;
        public FButton_Shop InnShopBtn;
        public FButton_Shop GuildBtn;
        public const string URL = "ui://t4ymdfnhia595z";

        /// <summary>
        /// 通过此方法获取的FUI，在Dispose时不会释放GObject，需要自行管理（一般在配合FGUI的Pool机制时使用）。
        /// </summary>
        //public static FUIMain GetFormPool(Entity domain, GObject go)
        //{
			//  var fui = go.Get<FUIMain>();

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
    			n80 = (GImage)com.GetChildAt(0);
    			EquipShopBtn = AddChild<FButton_Shop, GObject>(com.GetChildAt(1));
    			NotionShopBtn = AddChild<FButton_Shop, GObject>(com.GetChildAt(2));
    			OldManBtn = AddChild<FButton_Shop, GObject>(com.GetChildAt(3));
    			DrugstoreBtn = AddChild<FButton_Shop, GObject>(com.GetChildAt(4));
    			RingShopBtn = AddChild<FButton_Shop, GObject>(com.GetChildAt(5));
    			WeaponShopBtn = AddChild<FButton_Shop, GObject>(com.GetChildAt(6));
    			SkillShopBtn = AddChild<FButton_Shop, GObject>(com.GetChildAt(7));
    			InnShopBtn = AddChild<FButton_Shop, GObject>(com.GetChildAt(8));
    			GuildBtn = AddChild<FButton_Shop, GObject>(com.GetChildAt(9));
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
    		EquipShopBtn = null;
    		NotionShopBtn = null;
    		OldManBtn = null;
    		DrugstoreBtn = null;
    		RingShopBtn = null;
    		WeaponShopBtn = null;
    		SkillShopBtn = null;
    		InnShopBtn = null;
    		GuildBtn = null;
    	}
}
}