/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

using FairyGUI;
using System.Threading.Tasks;

namespace ET
{
    [ObjectSystem]
    public class FCharacterItemAwakeSystem : AwakeSystem<FCharacterItem, GObject>
    {
        public override void Awake(FCharacterItem self, GObject go)
        {
            self.Awake(go);
        }
    }
        
    public sealed class FCharacterItem : FUI
    {	
        public const string UIPackageName = "CommonComp";
        public const string UIResName = "CharacterItem";
        
        /// <summary>
        /// {uiResName}的组件类型(GComponent、GButton、GProcessBar等)，它们都是GObject的子类。
        /// </summary>
        public GButton self;
            
        public Controller button;
        public GImage n0;
        public GImage n1;
        public GTextField CharacterName;
        public GTextField CharacterLevel;
        public GTextField CharacterClass;
        public const string URL = "ui://o9z9wblxdh8k9";

        /// <summary>
        /// 通过此方法获取的FUI，在Dispose时不会释放GObject，需要自行管理（一般在配合FGUI的Pool机制时使用）。
        /// </summary>
        //public static FCharacterItem GetFormPool(Entity domain, GObject go)
        //{
			//  var fui = go.Get<FCharacterItem>();

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
        
			self = (GButton)go;
        
			self.Add(this);
        
			var com = go.asCom;
            
			if(com != null)
			{
    			button = com.GetControllerAt(0);
    			n0 = (GImage)com.GetChildAt(0);
    			n1 = (GImage)com.GetChildAt(1);
    			CharacterName = (GTextField)com.GetChildAt(2);
    			CharacterLevel = (GTextField)com.GetChildAt(3);
    			CharacterClass = (GTextField)com.GetChildAt(4);
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