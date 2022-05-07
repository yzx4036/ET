local templateString = [[using FairyGUI;

namespace $<namespaceName>$
{
    public static class $<clsName>$System
    {
        private static T CreateFUICompInst<T>($<clsName>$ self, GObject gObject) where T : Entity, IAwake<FUIGObjectComponent>, new()
        {
            var _fui = self.AddChild<FUIGObjectComponent, GObject>(gObject);
            return _fui.AddComponent<T, FUIGObjectComponent>(_fui);
        }

        [FriendClass(typeof (FUIGObjectComponent))]
        [ObjectSystem]
        public class $<clsName>$AwakeSystem: AwakeSystem<$<clsName>$, FUIGObjectComponent>
        {
            public override void Awake($<clsName>$ self, FUIGObjectComponent fui)
            {
                self.selfFUIRoot = fui;
                self.selfGObj = (GComponent) fui.gObject;

                self.selfGObj.Add(fui);

                var com = fui.gObject.asCom;

                if (com != null)
                {
                    $<compsAwake>$
                }
            }
        }

        [FriendClass(typeof (FUIGObjectComponent))]
        [ObjectSystem]
        public class $<clsName>$DestroySystem: DestroySystem<$<clsName>$>
        {
            public override void Destroy($<clsName>$ self)
            {
                $<compsDestroy>$
            }
        }
    }

    $<fuiAttribut>$
    public sealed class $<clsName>$: Entity, IAwake<FUIGObjectComponent>, IDestroy
    {
        public const string UIPackageName = "$<packName>$";
        public const string UIResName = "$<uiResName>$";

        /// <summary>
        /// {uiResName}的组件类型(GComponent、GButton、GProcessBar等)，它们都是GObject的子类。
        /// </summary>
        public GComponent selfGObj;

        public FUIGObjectComponent selfFUIRoot;

        $<compsDefine>$

        public const string URL = "ui://nstug1quqo3ye";

        /// <summary>
        /// 通过此方法获取的FUI，在Dispose时不会释放GObject，需要自行管理（一般在配合FGUI的Pool机制时使用）。
        /// </summary>
        // public static $<clsName>$ GetFormPool(Entity domain, GObject go)
        // {
        //     var fui = go.Get<$<clsName>$>();
        //     if(fui == null)
        //     {
        //         fui = Create(domain, go);
        //     }
        //     fui.isFromFGUIPool = true;
        //     return fui;
        // }
    }
}]]

return templateString
