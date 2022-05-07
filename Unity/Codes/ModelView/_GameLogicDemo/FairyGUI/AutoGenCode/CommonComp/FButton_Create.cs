/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

using FairyGUI;

namespace ET
{
    public static class FButton_CreateSystem
    {
        private static T CreateFUICompInst<T>(FButton_Create self, GObject gObject) where T : Entity, IAwake<FUIGObjectComponent>, new()
        {
            var _fui = self.AddChild<FUIGObjectComponent, GObject>(gObject);
            return _fui.AddComponent<T, FUIGObjectComponent>(_fui);
        }

        /// <summary>
        /// 通过此方法获取的FUI，在Dispose时不会释放GObject，需要自行管理（一般在配合FGUI的Pool机制时使用）。
        /// </summary>
        // public static FButton_Create GetFormPool(Entity domain, GObject go)
        // {
        //     var fui = go.Get<FButton_Create>();
        //     if(fui == null)
        //     {
        //         fui = Create(domain, go);
        //     }
        //     fui.isFromFGUIPool = true;
        //     return fui;
        // }

        [FriendClass(typeof (FUIGObjectComponent))]
        [ObjectSystem]
        public class FButton_CreateAwakeSystem: AwakeSystem<FButton_Create, FUIGObjectComponent>
        {
            public override void Awake(FButton_Create self, FUIGObjectComponent fui)
            {
                self.selfFUIRoot = fui;
                self.selfGObj = (GButton) fui.gObject;

                self.selfGObj.Add(fui);

                var com = fui.gObject.asCom;

                if (com != null)
                {
					self.button = com.GetControllerAt(0);
					self.n0 = (GImage)com.GetChildAt(0);
					self.n1 = (GImage)com.GetChildAt(1);

                }
            }
        }

        [FriendClass(typeof (FUIGObjectComponent))]
        [ObjectSystem]
        public class FButton_CreateDestroySystem: DestroySystem<FButton_Create>
        {
            public override void Destroy(FButton_Create self)
            {
				self.button = null;
				self.n0 = null;
				self.n1 = null;

            }
        }
    }

    
    public sealed class FButton_Create: Entity, IAwake<FUIGObjectComponent>, IDestroy
    {
        public const string UIPackageName = "CommonComp";
        public const string UIResName = "Button_Create";

        /// <summary>
        /// {uiResName}的组件类型(GComponent、GButton、GProcessBar等)，它们都是GObject的子类。
        /// </summary>
        public GButton selfGObj;

        public FUIGObjectComponent selfFUIRoot;

		public Controller button { get; set; }
		public GImage n0 { get; set; }
		public GImage n1 { get; set; }


        public const string URL = "ui://o9z9wblxdh8k18";
    }
}