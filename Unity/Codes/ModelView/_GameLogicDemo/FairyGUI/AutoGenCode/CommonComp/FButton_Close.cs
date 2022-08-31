/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

using FairyGUI;

namespace ET
{
    public static class FButton_CloseSystem
    {
        private static T CreateFUICompInst<T>(FButton_Close self, GObject gObject) where T : Entity, IAwake, new()
        {
            var _fui = self.AddChild<FUIGObjectComponent, GObject>(gObject);
            return _fui.AddComponent<T>();
        }

        /// <summary>
        /// 通过此方法获取的FUI，在Dispose时不会释放GObject，需要自行管理（一般在配合FGUI的Pool机制时使用）。
        /// </summary>
        // public static FButton_Close GetFormPool(Entity domain, GObject go)
        // {
        //     var fui = go.Get<FButton_Close>();
        //     if(fui == null)
        //     {
        //         fui = Create(domain, go);
        //     }
        //     fui.isFromFGUIPool = true;
        //     return fui;
        // }

        [ObjectSystem]
        public class FButton_CloseAwakeSystem: AwakeSystem<FButton_Close>
        {
            public override void Awake(FButton_Close self)
            {
                self.selfGObj.Add(self.selfFUIRoot);
                var com = self.selfFUIRoot.gObject.asCom;
                if (com != null)
                {
					self.button = com.GetControllerAt(0);
					self.n0 = (GImage)com.GetChildAt(0);
					self.n1 = (GImage)com.GetChildAt(1);

                }
            }
        }

        [ObjectSystem]
        public class FButton_CloseDestroySystem: DestroySystem<FButton_Close>
        {
            public override void Destroy(FButton_Close self)
            {
				self.button = null;
				self.n0 = null;
				self.n1 = null;

            }
        }
    }

    
    public sealed class FButton_Close: Entity, IAwake, IDestroy
    {
        public const string UIPackageName = "CommonComp";
        public const string UIResName = "Button_Close";

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


        public const string URL = "ui://o9z9wblxdh8k17";
    }
}