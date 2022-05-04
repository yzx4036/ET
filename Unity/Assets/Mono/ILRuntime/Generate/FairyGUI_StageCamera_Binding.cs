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
    unsafe class FairyGUI_StageCamera_Binding
    {
        public static void Register(ILRuntime.Runtime.Enviorment.AppDomain app)
        {
            BindingFlags flag = BindingFlags.Public | BindingFlags.Instance | BindingFlags.Static | BindingFlags.DeclaredOnly;
            FieldInfo field;
            Type[] args;
            Type type = typeof(FairyGUI.StageCamera);

            field = type.GetField("main", flag);
            app.RegisterCLRFieldGetter(field, get_main_0);
            app.RegisterCLRFieldSetter(field, set_main_0);
            app.RegisterCLRFieldBinding(field, CopyToStack_main_0, AssignFromStack_main_0);


        }



        static object get_main_0(ref object o)
        {
            return FairyGUI.StageCamera.main;
        }

        static StackObject* CopyToStack_main_0(ref object o, ILIntepreter __intp, StackObject* __ret, IList<object> __mStack)
        {
            var result_of_this_method = FairyGUI.StageCamera.main;
            return ILIntepreter.PushObject(__ret, __mStack, result_of_this_method);
        }

        static void set_main_0(ref object o, object v)
        {
            FairyGUI.StageCamera.main = (UnityEngine.Camera)v;
        }

        static StackObject* AssignFromStack_main_0(ref object o, ILIntepreter __intp, StackObject* ptr_of_this_method, IList<object> __mStack)
        {
            ILRuntime.Runtime.Enviorment.AppDomain __domain = __intp.AppDomain;
            UnityEngine.Camera @main = (UnityEngine.Camera)typeof(UnityEngine.Camera).CheckCLRTypes(StackObject.ToObject(ptr_of_this_method, __domain, __mStack), (CLR.Utils.Extensions.TypeFlags)0);
            FairyGUI.StageCamera.main = @main;
            return ptr_of_this_method;
        }



    }
}
