/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

using FairyGUI;

namespace ET
{
    public static class FButton6_NormalSystem
    {
        private static T CreateFUICompInst<T>(FButton6_Normal self, GObject gObject) where T : Entity, IAwake, new()
        {
            var _fui = self.AddChild<FUIGObjectComponent, GObject>(gObject);
            return _fui.AddComponent<T>();
        }

        /// <summary>
        /// 通过此方法获取的FUI，在Dispose时不会释放GObject，需要自行管理（一般在配合FGUI的Pool机制时使用）。
        /// </summary>
        // public static FButton6_Normal GetFormPool(Entity domain, GObject go)
        // {
        //     var fui = go.Get<FButton6_Normal>();
        //     if(fui == null)
        //     {
        //         fui = Create(domain, go);
        //     }
        //     fui.isFromFGUIPool = true;
        //     return fui;
        // }

        [ObjectSystem]
        public class FButton6_NormalAwakeSystem: AwakeSystem<FButton6_Normal>
        {
            public override void Awake(FButton6_Normal self)
            {
                self.selfGObj.Add(self.selfFUIRoot);
                var com = self.selfFUIRoot.gObject.asCom;
                if (com != null)
                {
					self.button = com.GetControllerAt(0);
					self.n0 = (GImage)com.GetChildAt(0);
					self.n1 = (GImage)com.GetChildAt(1);
					self.title = (GTextField)com.GetChildAt(2);

                }
            }
        }

        [ObjectSystem]
        public class FButton6_NormalDestroySystem: DestroySystem<FButton6_Normal>
        {
            public override void Destroy(FButton6_Normal self)
            {
				self.button = null;
				self.n0 = null;
				self.n1 = null;
				self.title = null;

            }
        }
    }

    
    public sealed class FButton6_Normal: Entity, IAwake, IDestroy
    {
        public const string UIPackageName = "CommonComp";
        public const string UIResName = "Button6_Normal";

        /// <summary>
        /// {uiResName}的组件类型(GComponent、GButton、GProcessBar等)，它们都是GObject的子类。
        /// </summary>
        public GButton selfGObj
        {
            get
            {
                return (GButton)this.selfFUIRoot?.gObject;
            }
        }
        
        public FUIGObjectComponent selfFUIRoot
         {
            get
            {
                return this.GetParent<FUIGObjectComponent>();
            }
        }

		public Controller button { get; set; }
		public GImage n0 { get; set; }
		public GImage n1 { get; set; }
		public GTextField title { get; set; }


        public const string URL = "ui://o9z9wblxdh8k1f";
    }
}