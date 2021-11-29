/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

using FairyGUI;
using System.Threading.Tasks;

namespace ET
{
    [ObjectSystem]
    public class FTipsCmpAwakeSystem : AwakeSystem<FTipsCmp, GObject>
    {
        public override void Awake(FTipsCmp self, GObject go)
        {
            self.Awake(go);
        }
    }
        
    public sealed class FTipsCmp : FUI
    {	
        public const string UIPackageName = "CommonComp";
        public const string UIResName = "TipsCmp";
        
        /// <summary>
        /// {uiResName}的组件类型(GComponent、GButton、GProcessBar等)，它们都是GObject的子类。
        /// </summary>
        public GComponent self;
            
        public GImage n10;
        public GTextField AttrText;
        public const string URL = "ui://o9z9wblxoeq71";

        /// <summary>
        /// 通过此方法获取的FUI，在Dispose时不会释放GObject，需要自行管理（一般在配合FGUI的Pool机制时使用）。
        /// </summary>
        //public static FTipsCmp GetFormPool(Entity domain, GObject go)
        //{
			//  var fui = go.Get<FTipsCmp>();

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
    			n10 = (GImage)com.GetChildAt(0);
    			AttrText = (GTextField)com.GetChildAt(1);
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