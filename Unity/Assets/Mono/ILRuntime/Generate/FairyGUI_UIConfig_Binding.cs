using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Runtime.InteropServices;

using ILRuntime.CLR.TypeSystem;
using ILRuntime.CLR.Method;
using ILRuntime.Runtime.Enviorment;
using ILRuntime.Runtime.Intepreter;
using ILRuntime.Runtime.Stack;
using ILRuntime.Reflection;
using ILRuntime.CLR.Utils;

namespace ILRuntime.Runtime.Generated
{
    unsafe class FairyGUI_UIConfig_Binding
    {
        public static void Register(ILRuntime.Runtime.Enviorment.AppDomain app)
        {
            BindingFlags flag = BindingFlags.Public | BindingFlags.Instance | BindingFlags.Static | BindingFlags.DeclaredOnly;
            FieldInfo field;
            Type[] args;
            Type type = typeof(FairyGUI.UIConfig);

            field = type.GetField("defaultFont", flag);
            app.RegisterCLRFieldGetter(field, get_defaultFont_0);
            app.RegisterCLRFieldSetter(field, set_defaultFont_0);
            app.RegisterCLRFieldBinding(field, CopyToStack_defaultFont_0, AssignFromStack_defaultFont_0);


        }



        static object get_defaultFont_0(ref object o)
        {
            return FairyGUI.UIConfig.defaultFont;
        }

        static StackObject* CopyToStack_defaultFont_0(ref object o, ILIntepreter __intp, StackObject* __ret, IList<object> __mStack)
        {
            var result_of_this_method = FairyGUI.UIConfig.defaultFont;
            return ILIntepreter.PushObject(__ret, __mStack, result_of_this_method);
        }

        static void set_defaultFont_0(ref object o, object v)
        {
            FairyGUI.UIConfig.defaultFont = (System.String)v;
        }

        static StackObject* AssignFromStack_defaultFont_0(ref object o, ILIntepreter __intp, StackObject* ptr_of_this_method, IList<object> __mStack)
        {
            ILRuntime.Runtime.Enviorment.AppDomain __domain = __intp.AppDomain;
            System.String @defaultFont = (System.String)typeof(System.String).CheckCLRTypes(StackObject.ToObject(ptr_of_this_method, __domain, __mStack), (CLR.Utils.Extensions.TypeFlags)0);
            FairyGUI.UIConfig.defaultFont = @defaultFont;
            return ptr_of_this_method;
        }



    }
}
