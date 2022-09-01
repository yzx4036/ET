/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

using FairyGUI;

namespace ET
{
    public static class FTipsCmpSystem
    {
        private static T CreateFUICompInst<T>(FTipsCmp self, GObject gObject) where T : Entity, IAwake, new()
        {
            var _fui = self.AddChild<FUIGObjectComponent, GObject>(gObject);
            return _fui.AddComponent<T>();
        }

        /// <summary>
        /// 通过此方法获取的FUI，在Dispose时不会释放GObject，需要自行管理（一般在配合FGUI的Pool机制时使用）。
        /// </summary>
        // public static FTipsCmp GetFormPool(Entity domain, GObject go)
        // {
        //     var fui = go.Get<FTipsCmp>();
        //     if(fui == null)
        //     {
        //         fui = Create(domain, go);
        //     }
        //     fui.isFromFGUIPool = true;
        //     return fui;
        // }

        [ObjectSystem]
        public class FTipsCmpAwakeSystem: AwakeSystem<FTipsCmp>
        {
            public override void Awake(FTipsCmp self)
            {
                self.selfGObj.Add(self.selfFUIRoot);
                var com = self.selfFUIRoot.gObject.asCom;
                if (com != null)
                {
					self.n10 = (GImage)com.GetChildAt(0);
					self.AttrText = (GTextField)com.GetChildAt(1);

                }
            }
        }

        [ObjectSystem]
        public class FTipsCmpDestroySystem: DestroySystem<FTipsCmp>
        {
            public override void Destroy(FTipsCmp self)
            {
				self.n10 = null;
				self.AttrText = null;

            }
        }
    }

    
    public sealed class FTipsCmp: Entity, IAwake, IDestroy
    {
        public const string UIPackageName = "F_CommonComp";
        public const string UIResName = "TipsCmp";

        /// <summary>
        /// {uiResName}的组件类型(GComponent、GButton、GProcessBar等)，它们都是GObject的子类。
        /// </summary>
        public GComponent selfGObj
        {
            get
            {
                return (GComponent)this.selfFUIRoot?.gObject;
            }
        }
        
        public FUIGObjectComponent selfFUIRoot
         {
            get
            {
                return this.GetParent<FUIGObjectComponent>();
            }
        }

		public GImage n10 { get; set; }
		public GTextField AttrText { get; set; }


        public const string URL = "ui://o9z9wblxoeq71";
    }
}