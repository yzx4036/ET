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
    unsafe class FairyGUI_GList_Binding
    {
        public static void Register(ILRuntime.Runtime.Enviorment.AppDomain app)
        {
            BindingFlags flag = BindingFlags.Public | BindingFlags.Instance | BindingFlags.Static | BindingFlags.DeclaredOnly;
            MethodBase method;
            FieldInfo field;
            Type[] args;
            Type type = typeof(FairyGUI.GList);
            args = new Type[]{};
            method = type.GetMethod("get_onClickItem", flag, null, args, null);
            app.RegisterCLRMethodRedirection(method, get_onClickItem_0);
            args = new Type[]{};
            method = type.GetMethod("get_selectedIndex", flag, null, args, null);
            app.RegisterCLRMethodRedirection(method, get_selectedIndex_1);

            field = type.GetField("itemRenderer", flag);
            app.RegisterCLRFieldGetter(field, get_itemRenderer_0);
            app.RegisterCLRFieldSetter(field, set_itemRenderer_0);
            app.RegisterCLRFieldBinding(field, CopyToStack_itemRenderer_0, AssignFromStack_itemRenderer_0);


        }


        static StackObject* get_onClickItem_0(ILIntepreter __intp, StackObject* __esp, IList<object> __mStack, CLRMethod __method, bool isNewObj)
        {
            ILRuntime.Runtime.Enviorment.AppDomain __domain = __intp.AppDomain;
            StackObject* ptr_of_this_method;
            StackObject* __ret = ILIntepreter.Minus(__esp, 1);

            ptr_of_this_method = ILIntepreter.Minus(__esp, 1);
            FairyGUI.GList instance_of_this_method = (FairyGUI.GList)typeof(FairyGUI.GList).CheckCLRTypes(StackObject.ToObject(ptr_of_this_method, __domain, __mStack));
            __intp.Free(ptr_of_this_method);

            var result_of_this_method = instance_of_this_method.onClickItem;

            return ILIntepreter.PushObject(__ret, __mStack, result_of_this_method);
        }

        static StackObject* get_selectedIndex_1(ILIntepreter __intp, StackObject* __esp, IList<object> __mStack, CLRMethod __method, bool isNewObj)
        {
            ILRuntime.Runtime.Enviorment.AppDomain __domain = __intp.AppDomain;
            StackObject* ptr_of_this_method;
            StackObject* __ret = ILIntepreter.Minus(__esp, 1);

            ptr_of_this_method = ILIntepreter.Minus(__esp, 1);
            FairyGUI.GList instance_of_this_method = (FairyGUI.GList)typeof(FairyGUI.GList).CheckCLRTypes(StackObject.ToObject(ptr_of_this_method, __domain, __mStack));
            __intp.Free(ptr_of_this_method);

            var result_of_this_method = instance_of_this_method.selectedIndex;

            __ret->ObjectType = ObjectTypes.Integer;
            __ret->Value = result_of_this_method;
            return __ret + 1;
        }


        static object get_itemRenderer_0(ref object o)
        {
            return ((FairyGUI.GList)o).itemRenderer;
        }

        static StackObject* CopyToStack_itemRenderer_0(ref object o, ILIntepreter __intp, StackObject* __ret, IList<object> __mStack)
        {
            var result_of_this_method = ((FairyGUI.GList)o).itemRenderer;
            return ILIntepreter.PushObject(__ret, __mStack, result_of_this_method);
        }

        static void set_itemRenderer_0(ref object o, object v)
        {
            ((FairyGUI.GList)o).itemRenderer = (FairyGUI.ListItemRenderer)v;
        }

        static StackObject* AssignFromStack_itemRenderer_0(ref object o, ILIntepreter __intp, StackObject* ptr_of_this_method, IList<object> __mStack)
        {
            ILRuntime.Runtime.Enviorment.AppDomain __domain = __intp.AppDomain;
            FairyGUI.ListItemRenderer @itemRenderer = (FairyGUI.ListItemRenderer)typeof(FairyGUI.ListItemRenderer).CheckCLRTypes(StackObject.ToObject(ptr_of_this_method, __domain, __mStack));
            ((FairyGUI.GList)o).itemRenderer = @itemRenderer;
            return ptr_of_this_method;
        }



    }
}
