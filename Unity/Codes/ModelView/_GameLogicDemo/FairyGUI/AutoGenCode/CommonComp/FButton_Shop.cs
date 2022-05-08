/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

using FairyGUI;

namespace ET
{
    public static class FButton_ShopSystem
    {
        private static T CreateFUICompInst<T>(FButton_Shop self, GObject gObject) where T : Entity, IAwake, new()
        {
            var _fui = self.AddChild<FUIGObjectComponent, GObject>(gObject);
            return _fui.AddComponent<T>();
        }

        /// <summary>
        /// 通过此方法获取的FUI，在Dispose时不会释放GObject，需要自行管理（一般在配合FGUI的Pool机制时使用）。
        /// </summary>
        // public static FButton_Shop GetFormPool(Entity domain, GObject go)
        // {
        //     var fui = go.Get<FButton_Shop>();
        //     if(fui == null)
        //     {
        //         fui = Create(domain, go);
        //     }
        //     fui.isFromFGUIPool = true;
        //     return fui;
        // }

        [ObjectSystem]
        public class FButton_ShopAwakeSystem: AwakeSystem<FButton_Shop>
        {
            public override void Awake(FButton_Shop self)
            {
                self.selfGObj.Add(self.selfFUIRoot);
                var com = self.selfFUIRoot.gObject.asCom;
                if (com != null)
                {
					self.button = com.GetControllerAt(0);
					self.title = (GTextField)com.GetChildAt(0);

                }
            }
        }

        [FriendClass(typeof (FUIGObjectComponent))]
        [ObjectSystem]
        public class FButton_ShopDestroySystem: DestroySystem<FButton_Shop>
        {
            public override void Destroy(FButton_Shop self)
            {
				self.button = null;
				self.title = null;

            }
        }
    }

    
    public sealed class FButton_Shop: Entity, IAwake, IDestroy
    {
        public const string UIPackageName = "CommonComp";
        public const string UIResName = "Button_Shop";

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
		public GTextField title { get; set; }


        public const string URL = "ui://o9z9wblxia591p";
    }
}