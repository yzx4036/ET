/** This is an automatically generated class by FairyGUI plugin FGUI2ET. Please do not modify it. **/

using System.Threading.Tasks;
using FairyGUI;


namespace ET
{
    [ObjectSystem]
    public class SelectCountBoxAwakeSystem : AwakeSystem<SelectCountBox, GObject>
    {
        public override void Awake(SelectCountBox self, GObject go)
        {
            self.Awake(go);
        }
    }
	
	public sealed class SelectCountBox : FUI
	{	
		public const string UIPackageName = "UIAssets";
		public const string UIResName = "SelectCountBox";
		
		/// <summary>
        /// SelectCountBox的组件类型(GComponent、GButton、GProcessBar等)，它们都是GObject的子类。
        /// </summary>
		public GComponent self;
		
		public GImage n0;
		public GTextField n1;
		public GTextField n2;
		public GImage n3;
		public GImage n4;
		public GLoader ItemIcon;
		public GTextField ItemName;
		public GTextField ItemPrice;
		public GTextField n8;
		public GTextInput BuyCount;
		public GImage n10;
		public GTextField n11;
		public GTextField MaxPrice;
		public Button_Normal CancelBtn;
		public Button_Normal MoreBuyBtn;
		public GGroup MoreBuyPanel;

		private static GObject CreateGObject()
        {
            return UIPackage.CreateObject(UIPackageName, UIResName);
        }
		
		private static void CreateGObjectAsync(UIPackage.CreateObjectCallback result)
        {
            UIPackage.CreateObjectAsync(UIPackageName, UIResName, result);
        }

        public static SelectCountBox CreateInstance(Entity domain)
		{			
			return EntityFactory.Create<SelectCountBox, GObject>(domain, CreateGObject());
		}

        public static Task<SelectCountBox> CreateInstanceAsync(Entity domain)
        {
            TaskCompletionSource<SelectCountBox> tcs = new TaskCompletionSource<SelectCountBox>();

            CreateGObjectAsync((go) =>
            {
                tcs.SetResult(EntityFactory.Create<SelectCountBox, GObject>(domain, go));
            });

            return tcs.Task;
        }

        public static SelectCountBox Create(Entity domain, GObject go)
		{
			return EntityFactory.Create<SelectCountBox, GObject>(domain, go);
		}
		
        /// <summary>
        /// 通过此方法获取的FUI，在Dispose时不会释放GObject，需要自行管理（一般在配合FGUI的Pool机制时使用）。
        /// </summary>
        public static SelectCountBox GetFormPool(Entity domain, GObject go)
        {
            var fui = go.Get<SelectCountBox>();

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
				n2 = (GTextField)com.GetChild("n2");
				n3 = (GImage)com.GetChild("n3");
				n4 = (GImage)com.GetChild("n4");
				ItemIcon = (GLoader)com.GetChild("ItemIcon");
				ItemName = (GTextField)com.GetChild("ItemName");
				ItemPrice = (GTextField)com.GetChild("ItemPrice");
				n8 = (GTextField)com.GetChild("n8");
				BuyCount = (GTextInput)com.GetChild("BuyCount");
				n10 = (GImage)com.GetChild("n10");
				n11 = (GTextField)com.GetChild("n11");
				MaxPrice = (GTextField)com.GetChild("MaxPrice");
				CancelBtn = Button_Normal.Create(domain, com.GetChild("CancelBtn"));
				MoreBuyBtn = Button_Normal.Create(domain, com.GetChild("MoreBuyBtn"));
				MoreBuyPanel = (GGroup)com.GetChild("MoreBuyPanel");
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
			n2 = null;
			n3 = null;
			n4 = null;
			ItemIcon = null;
			ItemName = null;
			ItemPrice = null;
			n8 = null;
			BuyCount = null;
			n10 = null;
			n11 = null;
			MaxPrice = null;
			CancelBtn.Dispose();
			CancelBtn = null;
			MoreBuyBtn.Dispose();
			MoreBuyBtn = null;
			MoreBuyPanel = null;
		}
	}
}