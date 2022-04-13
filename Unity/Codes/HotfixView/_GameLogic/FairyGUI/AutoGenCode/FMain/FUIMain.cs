/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

using FairyGUI;
using System.Threading.Tasks;

namespace ET
{
    [ObjectSystem]
    public class FUIMainAwakeSystem : AwakeSystem<FUIMain, FUI>
    {
        public override void Awake(FUIMain self, FUI fui)
        {
            self.Awake(fui);
        }
    }
        
    [FriendClass(typeof(FUI))]
    public sealed class FUIMain : Entity, IAwake<FUI>
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
    			n80 = (GImage)com.GetChildAt(0);
    			EquipShopBtn = CreateFUICompInst<FButton_Shop>(com.GetChildAt(1));
    			NotionShopBtn = CreateFUICompInst<FButton_Shop>(com.GetChildAt(2));
    			OldManBtn = CreateFUICompInst<FButton_Shop>(com.GetChildAt(3));
    			DrugstoreBtn = CreateFUICompInst<FButton_Shop>(com.GetChildAt(4));
    			RingShopBtn = CreateFUICompInst<FButton_Shop>(com.GetChildAt(5));
    			WeaponShopBtn = CreateFUICompInst<FButton_Shop>(com.GetChildAt(6));
    			SkillShopBtn = CreateFUICompInst<FButton_Shop>(com.GetChildAt(7));
    			InnShopBtn = CreateFUICompInst<FButton_Shop>(com.GetChildAt(8));
    			GuildBtn = CreateFUICompInst<FButton_Shop>(com.GetChildAt(9));
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