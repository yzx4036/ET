/** This is an automatically generated class by FairyGUI plugin FGUI2ET. Please do not modify it. **/

using System.Threading.Tasks;
using FairyGUI;
using DCET.Hotfix;

namespace ET.UICharacterSelect
{
    [ObjectSystem]
    public class MaskAwakeSystem : AwakeSystem<Mask, GObject>
    {
        public override void Awake(Mask self, GObject go)
        {
            self.Awake(go);
        }
    }
	
	public sealed class Mask : FUI
	{	
		public const string UIPackageName = "UICharacterSelect";
		public const string UIResName = "Mask";
		
		/// <summary>
        /// Mask的组件类型(GComponent、GButton、GProcessBar等)，它们都是GObject的子类。
        /// </summary>
		public GComponent self;
		


		private static GObject CreateGObject()
        {
            return UIPackage.CreateObject(UIPackageName, UIResName);
        }
		
		private static void CreateGObjectAsync(UIPackage.CreateObjectCallback result)
        {
            UIPackage.CreateObjectAsync(UIPackageName, UIResName, result);
        }

        public static Mask CreateInstance(Entity domain)
		{			
			return EntityFactory.Create<Mask, GObject>(domain, CreateGObject());
		}

        public static Task<Mask> CreateInstanceAsync(Entity domain)
        {
            TaskCompletionSource<Mask> tcs = new TaskCompletionSource<Mask>();

            CreateGObjectAsync((go) =>
            {
                tcs.SetResult(EntityFactory.Create<Mask, GObject>(domain, go));
            });

            return tcs.Task;
        }

        public static Mask Create(Entity domain, GObject go)
		{
			return EntityFactory.Create<Mask, GObject>(domain, go);
		}
		
        /// <summary>
        /// 通过此方法获取的FUI，在Dispose时不会释放GObject，需要自行管理（一般在配合FGUI的Pool机制时使用）。
        /// </summary>
        public static Mask GetFormPool(Entity domain, GObject go)
        {
            var fui = go.Get<Mask>();

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

		}
	}
}