using System;
using System.IO;
using ET;
using UnityEditor;

namespace ETEditor
{
    public class Startup
    {
        private const string ScriptAssembliesDir = "Library/ScriptAssemblies";
        private const string CodeDir = "Assets/Res/Code/";
        private const string HotfixDll = "Unity.Hotfix.dll";
        private const string HotfixPdb = "Unity.Hotfix.pdb";
        private const string HotfixViewDll = "Unity.HotfixView.dll";
        private const string HotfixViewPdb = "Unity.HotfixView.pdb";
        
        static Startup()
        {
            File.Copy(Path.Combine(ScriptAssembliesDir, HotfixDll), Path.Combine(CodeDir, "Hotfix.dll.bytes"), true);
            File.Copy(Path.Combine(ScriptAssembliesDir, HotfixPdb), Path.Combine(CodeDir, "Hotfix.pdb.bytes"), true);
            File.Copy(Path.Combine(ScriptAssembliesDir, HotfixViewDll), Path.Combine(CodeDir, "HotfixView.dll.bytes"), true);
            File.Copy(Path.Combine(ScriptAssembliesDir, HotfixViewPdb), Path.Combine(CodeDir, "HotfixView.pdb.bytes"), true);
            
            Log.Info($"复制Hotfix.dll, Hotfix.pdb, HotfixView.dll, HotfixView.pdb到Res/Code完成");
            AssetDatabase.Refresh ();
        }
    }
}