/** This is an automatically generated class by FairyGUI plugin FGUI2ET. Please do not modify it. **/

using System.Threading.Tasks;
using FairyGUI;


namespace ET
{
    [ObjectSystem]
    public class TipsCmpAwakeSystem : AwakeSystem<TipsCmp, GObject>
    {
        public override void Awake(TipsCmp self, GObject go)
        {
            self.Awake(go);
        }
    }
	
	public sealed class TipsCmp : FUI
	{	
		public const string UIPackageName = "UITips";
		public const string UIResName = "TipsCmp";
		
		/// <summary>
        /// TipsCmp的组件类型(GComponent、GButton、GProcessBar等)，它们都是GObject的子类。
        /// </summary>
		public GComponent self;
		
		public GImage n10;
		public GTextField AttrText;

		private static GObject CreateGObject()
        {
            return UIPackage.CreateObject(UIPackageName, UIResName);
        }
		
		private static void CreateGObjectAsync(UIPackage.CreateObjectCallback result)
        {
            UIPackage.CreateObjectAsync(UIPackageName, UIResName, result);
        }

        public static TipsCmp CreateInstance(Entity domain)
		{			
			return EntityFactory.Create<TipsCmp, GObject>(domain, CreateGObject());
		}

        public static Task<TipsCmp> CreateInstanceAsync(Entity domain)
        {
            TaskCompletionSource<TipsCmp> tcs = new TaskCompletionSource<TipsCmp>();

            CreateGObjectAsync((go) =>
            {
                tcs.SetResult(EntityFactory.Create<TipsCmp, GObject>(domain, go));
            });

            return tcs.Task;
        }

        public static TipsCmp Create(Entity domain, GObject go)
		{
			return EntityFactory.Create<TipsCmp, GObject>(domain, go);
		}
		
        /// <summary>
        /// 通过此方法获取的FUI，在Dispose时不会释放GObject，需要自行管理（一般在配合FGUI的Pool机制时使用）。
        /// </summary>
        public static TipsCmp GetFormPool(Entity domain, GObject go)
        {
            var fui = go.Get<TipsCmp>();

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
				n10 = (GImage)com.GetChild("n10");
				AttrText = (GTextField)com.GetChild("AttrText");
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
			n10 = null;
			AttrText = null;
		}
	}
}