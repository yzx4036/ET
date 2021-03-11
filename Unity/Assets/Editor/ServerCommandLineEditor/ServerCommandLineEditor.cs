using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using UnityEditor;
using UnityEngine;

namespace ET
{
    public class ServerCommandLineEditor: EditorWindow
    {
        [MenuItem("Tools/服务端")]
        public static void ShowWindow()
        {
            EditorWindow window = GetWindow<ServerCommandLineEditor>(true, "服务端工具");
            window.Show();
        }
        
        public void OnGUI()
        {
            if (GUILayout.Button("启动"))
            {
                string arguments = $"";
                ProcessHelper.Run("App.exe", arguments, "../Bin/");
            }

            if (GUILayout.Button("启动数据库"))
            {
                ProcessHelper.Run("mongod", @"--dbpath=db", "../Database/bin/");
            }

            GUILayout.EndHorizontal();
        }
    }
}