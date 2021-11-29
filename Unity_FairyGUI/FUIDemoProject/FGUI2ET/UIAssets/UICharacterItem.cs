/** This is an automatically generated class by FairyGUI plugin FGUI2ET. Please do not modify it. **/

using System.Threading.Tasks;
using FairyGUI;
using DCET.Hotfix;

namespace ET.UIAssets
{
    [ObjectSystem]
    public class UICharacterItemAwakeSystem : AwakeSystem<UICharacterItem, GObject>
    {
        public override void Awake(UICharacterItem self, GObject go)
        {
            self.Awake(go);
        }
    }
	
	public sealed class UICharacterItem : FUI
	{	
		public const string UIPackageName = "UIAssets";
		public const string UIResName = "UICharacterItem";
		
		/// <summary>
        /// UICharacterItem的组件类型(GComponent、GButton、GProcessBar等)，它们都是GObject的子类。
        /// </summary>
		public GButton self;
		
		public Controller button;
		public GImage n0;
		public GImage n1;
		public GTextField CharacterName;
		public GTextField CharacterLevel;
		public GTextField CharacterClass;

		private static GObject CreateGObject()
        {
            return UIPackage.CreateObject(UIPackageName, UIResName);
        }
		
		private static void CreateGObjectAsync(UIPackage.CreateObjectCallback result)
        {
            UIPackage.CreateObjectAsync(UIPackageName, UIResName, result);
        }

        public static UICharacterItem CreateInstance(Entity domain)
		{			
			return EntityFactory.Create<UICharacterItem, GObject>(domain, CreateGObject());
		}

        public static Task<UICharacterItem> CreateInstanceAsync(Entity domain)
        {
            TaskCompletionSource<UICharacterItem> tcs = new TaskCompletionSource<UICharacterItem>();

            CreateGObjectAsync((go) =>
            {
                tcs.SetResult(EntityFactory.Create<UICharacterItem, GObject>(domain, go));
            });

            return tcs.Task;
        }

        public static UICharacterItem Create(Entity domain, GObject go)
		{
			return EntityFactory.Create<UICharacterItem, GObject>(domain, go);
		}
		
        /// <summary>
        /// 通过此方法获取的FUI，在Dispose时不会释放GObject，需要自行管理（一般在配合FGUI的Pool机制时使用）。
        /// </summary>
        public static UICharacterItem GetFormPool(Entity domain, GObject go)
        {
            var fui = go.Get<UICharacterItem>();

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
			
			self = (GButton)go;
			
			self.Add(this);
			
			var com = go.asCom;
				
			if(com != null)
			{	
				button = com.GetController("button");
				n0 = (GImage)com.GetChild("n0");
				n1 = (GImage)com.GetChild("n1");
				CharacterName = (GTextField)com.GetChild("CharacterName");
				CharacterLevel = (GTextField)com.GetChild("CharacterLevel");
				CharacterClass = (GTextField)com.GetChild("CharacterClass");
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
			button = null;
			n0 = null;
			n1 = null;
			CharacterName = null;
			CharacterLevel = null;
			CharacterClass = null;
		}
	}
}