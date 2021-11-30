using System;
using System.Collections.Generic;
using System.Runtime.CompilerServices;
using UnityEditor;

namespace ET
{
    public static class ILRuntimeEditorEx
    {
        /// <summary>
        /// 生成类适配器
        /// </summary>
        [MenuItem("Tools/ILRuntime/生成跨域继承适配器")]
        static void GenCrossBindAdapter()
        {
            var types = new List<Type>();
            types.Add((typeof(UnityEngine.ScriptableObject)));
            types.Add((typeof(System.Exception)));
            types.Add(typeof(System.Collections.IEnumerable));
            types.Add(typeof(ICriticalNotifyCompletion));
            types.Add(typeof(FairyGUI.Window));
            
            
            GenAdapter.CreateAdapter(types, "Assets/Mono/ILRuntime/Adapter");
        }
    }
}