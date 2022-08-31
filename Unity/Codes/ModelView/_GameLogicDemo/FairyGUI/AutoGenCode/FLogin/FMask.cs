/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

using FairyGUI;

namespace ET
{
    public static class FMaskSystem
    {
        private static T CreateFUICompInst<T>(FMask self, GObject gObject) where T : Entity, IAwake, new()
        {
            var _fui = self.AddChild<FUIGObjectComponent, GObject>(gObject);
            return _fui.AddComponent<T>();
        }

        /// <summary>
        /// 通过此方法获取的FUI，在Dispose时不会释放GObject，需要自行管理（一般在配合FGUI的Pool机制时使用）。
        /// </summary>
        // public static FMask GetFormPool(Entity domain, GObject go)
        // {
        //     var fui = go.Get<FMask>();
        //     if(fui == null)
        //     {
        //         fui = Create(domain, go);
        //     }
        //     fui.isFromFGUIPool = true;
        //     return fui;
        // }

        [ObjectSystem]
        public class FMaskAwakeSystem: AwakeSystem<FMask>
        {
            public override void Awake(FMask self)
            {
                self.selfGObj.Add(self.selfFUIRoot);
                var com = self.selfFUIRoot.gObject.asCom;
                if (com != null)
                {

                }
            }
        }

        [ObjectSystem]
        public class FMaskDestroySystem: DestroySystem<FMask>
        {
            public override void Destroy(FMask self)
            {

            }
        }
    }

    [FUI(typeof(FUICharacterSelect), UIPackageName, UIResName)]
    public sealed class FMask: Entity, IAwake, IDestroy
    {
        public const string UIPackageName = "FLogin";
        public const string UIResName = "Mask";

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



        public const string URL = "ui://nstug1qudh8k8";
    }
}