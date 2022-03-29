using System;
using System.Collections.Generic;
using System.IO;
using UnityEditor;
using UnityEditor.AddressableAssets;
using UnityEditor.AddressableAssets.Build;
using UnityEditor.AddressableAssets.Settings;
using UnityEditor.Build.Reporting;
using UnityEngine;

public static class AddressableBuild
{
    private static readonly string LUA_FILE_DIR = Application.dataPath + "/LuaScripts/";
    private static readonly string LUA_BYTES_DIR = Application.dataPath + "/LuaBytes/";
    private static readonly string DATA_DIR = Application.dataPath + "/" + "AddressableAssetsData";

    public static void Test()
    {
        Debug.Log("Build Test");
    }

    public static void UnixBuildPackageAB()
    {
        // CreateLuaBytes();
        AddressableEditor.ApplyGroupConfig();
        AssetDatabase.SaveAssets();
        AssetDatabase.Refresh();
        DefaultBuild();
        Debug.Log("<color=#00ff00>UnixBuildPackageAB Success</color>");
    }
    
    [MenuItem("可寻址操作/AssetBundle/生成整包AB包")]
    public static void BuildPackageAB()
    {
        BackupLibrary(true);
        BackupServerData(true);
        //重新生成desc
        //GenService.Proto2Desc();
        // CreateLuaBytes();
        AddressableEditor.ApplyGroupConfig();
        AssetDatabase.SaveAssets();
        AssetDatabase.Refresh();
        DefaultBuild();
        // RevertLuaBytes();
        Debug.Log("<color=#00ff00>生成整包AB包 成功</color>");
    }

    [MenuItem("可寻址操作/AssetBundle/生成热更AB包")]
    public static void BuildHotUpdateAB()
    {
        BackupServerData(true);
        //重新生成desc
        //GenService.Proto2Desc();
        // CreateLuaBytes();
        AddressableEditor.ApplyGroupConfig();
        AddressableEditor.CheckHotUpdateRes();
        AssetDatabase.SaveAssets();
        AssetDatabase.Refresh();
        UpdateBuild();
        // RevertLuaBytes();
        Debug.Log("<color=#00ff00>生成热更AB包 成功</color>");
    }

    [MenuItem("可寻址操作/Build/生成apk")]
    public static void BuildApk()
    {
        BuildPlayerOptions buildPlayerOptions = new BuildPlayerOptions();
        buildPlayerOptions.scenes = new[] { "Assets/Scenes/Launch.unity", "Assets/Scenes/Loading.unity" };
        buildPlayerOptions.locationPathName = "BuildApk.apk";
        buildPlayerOptions.target = BuildTarget.Android;
        //buildPlayerOptions.options = BuildOptions.None;

        BuildReport report = BuildPipeline.BuildPlayer(buildPlayerOptions);
        BuildSummary summary = report.summary;
        if (summary.result == BuildResult.Succeeded)
        {
            Debug.Log("Build succeeded: " + summary.totalSize + " bytes");
        }
        if (summary.result == BuildResult.Failed)
        {
            Debug.Log("Build failed");
        }
    }

    public static void CreateLuaBytes()
    {
        if (Directory.Exists(LUA_BYTES_DIR))
        {
            UnityEditor.FileUtil.DeleteFileOrDirectory(LUA_BYTES_DIR);
        }
        UnityEditor.FileUtil.CopyFileOrDirectoryFollowSymlinks(LUA_FILE_DIR, LUA_BYTES_DIR);

        AssetDatabase.Refresh();
    }

    public static void RevertLuaBytes()
    {
        UnityEditor.FileUtil.DeleteFileOrDirectory(LUA_BYTES_DIR);
    }

    public static void DefaultBuild()
    {
        AddressableAssetSettings.BuildPlayerContent();
        AssetDatabase.SaveAssets();
        AssetDatabase.Refresh();
        Debug.Log("<color=#00ff00>AB生成成功</color>");
    }

    public static void UpdateBuild()
    {
        string targetName = AddressableEditor.GetBuildTargetName(EditorUserBuildSettings.activeBuildTarget);
        string path = string.Format("{0}/{1}/addressables_content_state.bin", DATA_DIR, targetName);
        ContentUpdateScript.BuildContentUpdate(AddressableAssetSettingsDefaultObject.Settings, path);
        AssetDatabase.SaveAssets();
        AssetDatabase.Refresh();
        Debug.Log("<color=#00ff00>AB生成成功</color>");
    }

    public static void BackupServerData(bool deleteDir = false)
    {
        string targetName = AddressableEditor.GetBuildTargetName(EditorUserBuildSettings.activeBuildTarget);
        string rootPath = Application.dataPath;
        rootPath = rootPath.Substring(0, rootPath.Length - 7);
        string[] dirs = new string[] { "AssetBundleBackup", "ServerDataBackup", targetName };
        string dirPath = rootPath;
        foreach (var dir in dirs)
        {
            dirPath = Path.Combine(dirPath, dir);
            if (!Directory.Exists(dirPath))
            {
                Directory.CreateDirectory(dirPath);
            }
        }

        string targetDir = string.Format("{0}/ServerData/{1}", rootPath, targetName);
        if (Directory.Exists(targetDir))
        {
            dirPath = Path.Combine(dirPath, DateTime.Now.ToString("yyyy_MM_dd_HH_mm_ss"));
            UnityEditor.FileUtil.CopyFileOrDirectory(targetDir, dirPath);
            if (deleteDir)
            {
                UnityEditor.FileUtil.DeleteFileOrDirectory(targetDir);
            }
        }
        Debug.Log("<color=#00ff00>ServerData备份完成</color>");
    }

    public static void BackupLibrary(bool deleteDir = false)
    {
        string targetName = AddressableEditor.GetBuildTargetName(EditorUserBuildSettings.activeBuildTarget);
        string rootPath = Application.dataPath;
        rootPath = rootPath.Substring(0, rootPath.Length - 7);
        string[] dirs = new string[] { "AssetBundleBackup", "LibraryBackup", targetName };
        string dirPath = rootPath;
        foreach (var dir in dirs)
        {
            dirPath = Path.Combine(dirPath, dir);
            if (!Directory.Exists(dirPath))
            {
                Directory.CreateDirectory(dirPath);
            }
        }


        string abDir = string.Format("{0}/Library/com.unity.addressables/aa/{1}", rootPath, targetName);
        if (Directory.Exists(abDir))
        {
            dirPath = Path.Combine(dirPath, DateTime.Now.ToString("yyyy_MM_dd_HH_mm_ss"));
            UnityEditor.FileUtil.CopyFileOrDirectory(abDir, dirPath);
            if (deleteDir)
            {
                UnityEditor.FileUtil.DeleteFileOrDirectory(abDir);
            }

            string binDir = string.Format("{0}/Library/com.unity.addressables/{1}", rootPath, targetName);
            if (Directory.Exists(binDir))
            {
                dirPath = Path.Combine(dirPath, "bin");
                UnityEditor.FileUtil.CopyFileOrDirectory(binDir, dirPath);
                if (deleteDir)
                {
                    UnityEditor.FileUtil.DeleteFileOrDirectory(binDir);
                }
            }
        }
        Debug.Log("<color=#00ff00>Library备份完成</color>");
    }
}
