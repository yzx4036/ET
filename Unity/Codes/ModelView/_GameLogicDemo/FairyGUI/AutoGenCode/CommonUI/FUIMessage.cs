/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

using FairyGUI;

namespace ET
{
    public static class FUIMessageSystem
    {
        private static T CreateFUICompInst<T>(FUIMessage self, GObject gObject) where T : Entity, IAwake, new()
        {
            var _fui = self.AddChild<FUIGObjectComponent, GObject>(gObject);
            return _fui.AddComponent<T>();
        }

        /// <summary>
        /// 通过此方法获取的FUI，在Dispose时不会释放GObject，需要自行管理（一般在配合FGUI的Pool机制时使用）。
        /// </summary>
        // public static FUIMessage GetFormPool(Entity domain, GObject go)
        // {
        //     var fui = go.Get<FUIMessage>();
        //     if(fui == null)
        //     {
        //         fui = Create(domain, go);
        //     }
        //     fui.isFromFGUIPool = true;
        //     return fui;
        // }

        [ObjectSystem]
        public class FUIMessageAwakeSystem: AwakeSystem<FUIMessage>
        {
            public override void Awake(FUIMessage self)
            {
                self.selfGObj.Add(self.selfFUIRoot);
                var com = self.selfFUIRoot.gObject.asCom;
                if (com != null)
                {
					self.n0 = (GImage)com.GetChildAt(0);
					self.Message = (GTextField)com.GetChildAt(1);

                }
            }
        }

        [FriendClass(typeof (FUIGObjectComponent))]
        [ObjectSystem]
        public class FUIMessageDestroySystem: DestroySystem<FUIMessage>
        {
            public override void Destroy(FUIMessage self)
            {
				self.n0 = null;
				self.Message = null;

            }
        }
    }

    [FUI(typeof(FUIMessage), UIPackageName, UIResName)]
    public sealed class FUIMessage: Entity, IAwake, IDestroy
    {
        public const string UIPackageName = "CommonUI";
        public const string UIResName = "UIMessage";

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

		public GImage n0 { get; set; }
		public GTextField Message { get; set; }


        public const string URL = "ui://4q3uyng0yaaw1";
    }
}