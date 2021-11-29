/** This is an automatically generated class by FairyGUI plugin FGUI2ET. Please do not modify it. **/

using System.Threading.Tasks;
using FairyGUI;
using DCET.Hotfix;

namespace ET.UISetting
{
    [ObjectSystem]
    public class FUISettingAwakeSystem : AwakeSystem<FUISetting, GObject>
    {
        public override void Awake(FUISetting self, GObject go)
        {
            self.Awake(go);
        }
    }
	
	public sealed class FUISetting : FUI
	{	
		public const string UIPackageName = "UISetting";
		public const string UIResName = "FUISetting";
		
		/// <summary>
        /// FUISetting的组件类型(GComponent、GButton、GProcessBar等)，它们都是GObject的子类。
        /// </summary>
		public GComponent self;
		
		public GImage n87;
		public GTextField n88;
		public GImage n89;
		public GGroup BG;
		public UIAssets.Button4_Normal OKBtn;
		public GTextField n82;
		public GTextField n83;
		public UIAssets.Button_Normal KeyBtn;
		public UIAssets.Button_Normal ExitBtn;
		public UIAssets.Button_Close CloseBtn;

		private static GObject CreateGObject()
        {
            return UIPackage.CreateObject(UIPackageName, UIResName);
        }
		
		private static void CreateGObjectAsync(UIPackage.CreateObjectCallback result)
        {
            UIPackage.CreateObjectAsync(UIPackageName, UIResName, result);
        }

        public static FUISetting CreateInstance(Entity domain)
		{			
			return EntityFactory.Create<FUISetting, GObject>(domain, CreateGObject());
		}

        public static Task<FUISetting> CreateInstanceAsync(Entity domain)
        {
            TaskCompletionSource<FUISetting> tcs = new TaskCompletionSource<FUISetting>();

            CreateGObjectAsync((go) =>
            {
                tcs.SetResult(EntityFactory.Create<FUISetting, GObject>(domain, go));
            });

            return tcs.Task;
        }

        public static FUISetting Create(Entity domain, GObject go)
		{
			return EntityFactory.Create<FUISetting, GObject>(domain, go);
		}
		
        /// <summary>
        /// 通过此方法获取的FUI，在Dispose时不会释放GObject，需要自行管理（一般在配合FGUI的Pool机制时使用）。
        /// </summary>
        public static FUISetting GetFormPool(Entity domain, GObject go)
        {
            var fui = go.Get<FUISetting>();

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
				n87 = (GImage)com.GetChild("n87");
				n88 = (GTextField)com.GetChild("n88");
				n89 = (GImage)com.GetChild("n89");
				BG = (GGroup)com.GetChild("BG");
				OKBtn = UIAssets.Button4_Normal.Create(com.GetChild("OKBtn"));
				n82 = (GTextField)com.GetChild("n82");
				n83 = (GTextField)com.GetChild("n83");
				KeyBtn = UIAssets.Button_Normal.Create(com.GetChild("KeyBtn"));
				ExitBtn = UIAssets.Button_Normal.Create(com.GetChild("ExitBtn"));
				CloseBtn = UIAssets.Button_Close.Create(com.GetChild("CloseBtn"));
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
			n87 = null;
			n88 = null;
			n89 = null;
			BG = null;
			OKBtn.Dispose();
			OKBtn = null;
			n82 = null;
			n83 = null;
			KeyBtn.Dispose();
			KeyBtn = null;
			ExitBtn.Dispose();
			ExitBtn = null;
			CloseBtn.Dispose();
			CloseBtn = null;
		}
	}
}