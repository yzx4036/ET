/** This is an automatically generated class by FairyGUI plugin FGUI2ET. Please do not modify it. **/

using System.Threading.Tasks;
using FairyGUI;


namespace ET
{
    [ObjectSystem]
    public class FUIBagPanelAwakeSystem : AwakeSystem<FUIBagPanel, GObject>
    {
        public override void Awake(FUIBagPanel self, GObject go)
        {
            self.Awake(go);
        }
    }
	
	public sealed class FUIBagPanel : FUI
	{	
		public const string UIPackageName = "UIBag";
		public const string UIResName = "FUIBagPanel";
		
		/// <summary>
        /// FUIBagPanel的组件类型(GComponent、GButton、GProcessBar等)，它们都是GObject的子类。
        /// </summary>
		public GComponent self;
		
		public GImage n0;
		public GTextField n1;
		public GGroup BG;
		public Button_Close CloseBtn;
		public GList ItemList;
		public GImage n5;
		public Button4_Normal RefreshBtn;
		public Button4_Normal SellBtn;

		private static GObject CreateGObject()
        {
            return UIPackage.CreateObject(UIPackageName, UIResName);
        }
		
		private static void CreateGObjectAsync(UIPackage.CreateObjectCallback result)
        {
            UIPackage.CreateObjectAsync(UIPackageName, UIResName, result);
        }

        public static FUIBagPanel CreateInstance(Entity domain)
		{			
			return EntityFactory.Create<FUIBagPanel, GObject>(domain, CreateGObject());
		}

        public static Task<FUIBagPanel> CreateInstanceAsync(Entity domain)
        {
            TaskCompletionSource<FUIBagPanel> tcs = new TaskCompletionSource<FUIBagPanel>();

            CreateGObjectAsync((go) =>
            {
                tcs.SetResult(EntityFactory.Create<FUIBagPanel, GObject>(domain, go));
            });

            return tcs.Task;
        }

        public static FUIBagPanel Create(Entity domain, GObject go)
		{
			return EntityFactory.Create<FUIBagPanel, GObject>(domain, go);
		}
		
        /// <summary>
        /// 通过此方法获取的FUI，在Dispose时不会释放GObject，需要自行管理（一般在配合FGUI的Pool机制时使用）。
        /// </summary>
        public static FUIBagPanel GetFormPool(Entity domain, GObject go)
        {
            var fui = go.Get<FUIBagPanel>();

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
				n0 = (GImage)com.GetChild("n0");
				n1 = (GTextField)com.GetChild("n1");
				BG = (GGroup)com.GetChild("BG");
				CloseBtn = Button_Close.Create(domain, com.GetChild("CloseBtn"));
				ItemList = (GList)com.GetChild("ItemList");
				n5 = (GImage)com.GetChild("n5");
				RefreshBtn = Button4_Normal.Create(domain, com.GetChild("RefreshBtn"));
				SellBtn = Button4_Normal.Create(domain, com.GetChild("SellBtn"));
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
			n0 = null;
			n1 = null;
			BG = null;
			CloseBtn.Dispose();
			CloseBtn = null;
			ItemList = null;
			n5 = null;
			RefreshBtn.Dispose();
			RefreshBtn = null;
			SellBtn.Dispose();
			SellBtn = null;
		}
	}
}