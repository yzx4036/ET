local _fuiUIClsTemplateString
local _fuiPakageClsTemplateString
local _fuiTypeClsTemplateString

------------------------FUI
_fuiUIClsTemplateString = [[using FairyGUI;

namespace $$namespaceName$$
{
    public static class $$clsName$$System
    {
        private static T CreateFUICompInst<T>($$clsName$$ self, GObject gObject) where T : Entity, IAwake, new()
        {
            var _fui = self.AddChild<FUIGObjectComponent, GObject>(gObject);
            return _fui.AddComponent<T>();
        }

        /// <summary>
        /// 通过此方法获取的FUI，在Dispose时不会释放GObject，需要自行管理（一般在配合FGUI的Pool机制时使用）。
        /// </summary>
        // public static $$clsName$$ GetFormPool(Entity domain, GObject go)
        // {
        //     var fui = go.Get<$$clsName$$>();
        //     if(fui == null)
        //     {
        //         fui = Create(domain, go);
        //     }
        //     fui.isFromFGUIPool = true;
        //     return fui;
        // }

        [ObjectSystem]
        public class $$clsName$$AwakeSystem: AwakeSystem<$$clsName$$>
        {
            public override void Awake($$clsName$$ self)
            {
                self.selfGObj.Add(self.selfFUIRoot);
                var com = self.selfFUIRoot.gObject.asCom;
                if (com != null)
                {
$$compsAwake$$
                }
            }
        }

        [ObjectSystem]
        public class $$clsName$$DestroySystem: DestroySystem<$$clsName$$>
        {
            public override void Destroy($$clsName$$ self)
            {
$$compsDestroy$$
            }
        }
    }

    $$fuiAttribut$$
    public sealed class $$clsName$$: Entity, IAwake, IDestroy
    {
        public const string UIPackageName = "$$packName$$";
        public const string UIResName = "$$uiResName$$";

        /// <summary>
        /// {uiResName}的组件类型(GComponent、GButton、GProcessBar等)，它们都是GObject的子类。
        /// </summary>
        public $$superClassName$$ selfGObj
        {
            get
            {
                return ($$superClassName$$)this.selfFUIRoot?.gObject;
            }
        }
        
        public FUIGObjectComponent selfFUIRoot
         {
            get
            {
                return this.GetParent<FUIGObjectComponent>();
            }
        }

$$compsDefine$$

        public const string URL = "ui://$$uiURL$$";
    }
}]]

------------------------FUIPackage
_fuiPakageClsTemplateString = [[namespace $$namespaceName$$
{
    public static partial class FUIPackage
    {
$$fuiPackageDef$$
    }
}]]

------------------------FUIType
_fuiTypeClsTemplateString = [[using System;
namespace $$namespaceName$$
{
    public static partial class FUIType
    {
$$fuiTypeDef$$
    }
}]]

---@class CsTemplate
local result = {
    uiClsTp = _fuiUIClsTemplateString,
    pkgClsTp = _fuiPakageClsTemplateString,
    typeClsTp = _fuiTypeClsTemplateString,
}

return result