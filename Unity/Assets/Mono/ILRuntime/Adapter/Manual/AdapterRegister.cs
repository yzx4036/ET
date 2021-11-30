
using System;
using System.Collections;
using System.Collections.Generic;
using ILRuntime.CLR.Method;
using ILRuntime.Runtime.Enviorment;
using ILRuntime.Runtime.Intepreter;

namespace ET
{
    public class AdapterRegister
    {
        public static void RegisterCrossBindingAdaptor(ILRuntime.Runtime.Enviorment.AppDomain domain)
        {
            //这几条是手写的
            domain.RegisterCrossBindingAdaptor(new MonoBehaviourAdapter());
            domain.RegisterCrossBindingAdaptor(new CoroutineAdapter());
            domain.RegisterCrossBindingAdaptor(new IAsyncStateMachineClassInheritanceAdaptor());
            //以下是自动生成的


            domain.RegisterCrossBindingAdaptor(new UnityEngine_ScriptableObjectAdapter());

            domain.RegisterCrossBindingAdaptor(new System_ExceptionAdapter());

            domain.RegisterCrossBindingAdaptor(new System_Collections_IEnumerableAdapter());

            domain.RegisterCrossBindingAdaptor(new System_Runtime_CompilerServices_ICriticalNotifyCompletionAdapter());

            domain.RegisterCrossBindingAdaptor(new FairyGUI_WindowAdapter());

        }
    }
}
