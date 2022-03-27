using System;
using System.Collections.Generic;
using System.IO;
using System.Reflection;
using UnityEditor;
using UnityEditor.AddressableAssets;
using UnityEditor.AddressableAssets.Build;
using UnityEditor.AddressableAssets.Settings;
using UnityEditor.AddressableAssets.Settings.GroupSchemas;
using UnityEngine;

public class AddressableEditor : Editor
{
    [MenuItem("加载模式/非Ab加载", true)]
    public static bool CheckIsFastLoad()
    {
        Menu.SetChecked("加载模式/非Ab加载", CheckLoadType(0));
        return true;
    }

    [MenuItem("加载模式/simulate加载", true)]
    public static bool CheckIsSimulateLoad()
    {
        Menu.SetChecked("加载模式/simulate加载", CheckLoadType(1));
        return true;
    }

    [MenuItem("加载模式/Ab加载", true)]
    public static bool CheckIsABLoad()
    {
        Menu.SetChecked("加载模式/Ab加载", CheckLoadType(2));
        return true;
    }

    [MenuItem("加载模式/非Ab加载")]
    public static void FastLoad()
    {
        ChangeLoadType(0);
    }

    [MenuItem("加载模式/simulate加载")]
    public static void SimulateLoad()
    {
        ChangeLoadType(1);
    }

    [MenuItem("加载模式/Ab加载")]
    public static void ABLoad()
    {
        ChangeLoadType(2);
    }

    [MenuItem("可寻址操作/打开Group")]
    public static void OpenGroupWindow()
    {
        EditorApplication.ExecuteMenuItem("Window/Asset Management/Addressables/Groups");
    }

    [MenuItem("可寻址操作/打开EventViewer")]
    public static void OpenEventViewerWindow()
    {
        EditorApplication.ExecuteMenuItem("Window/Asset Management/Addressables/Event Viewer");
    }

    [MenuItem("可寻址操作/打开Hosting")]
    public static void OpenHostingWindow()
    {
        EditorApplication.ExecuteMenuItem("Window/Asset Management/Addressables/Hosting");
    }

    public static void ChangeLoadType(int index)
    {
        if (AddressableAssetSettingsDefaultObject.Settings != null)
        {
            AddressableAssetSettingsDefaultObject.Settings.ActivePlayModeDataBuilderIndex = index;
        }
    }

    public static bool CheckLoadType(int index)
    {
        if (AddressableAssetSettingsDefaultObject.Settings != null)
        {
            return AddressableAssetSettingsDefaultObject.Settings.ActivePlayModeDataBuilderIndex == index;
        }
        return false;
    }

    [Serializable]
    private class GroupConfigJsonData
    {
        public string Name;
        public string Path;
        public string Dir;
        public int PackType;
        public string Labels;
        public List<string> Extension;
    }

    [Serializable]
    private class GroupConfigJson
    {
        public List<GroupConfigJsonData> Config;
    }

    // private readonly static string META_EXTENSION = ".meta";
    // private readonly static string CONFIG_PATH = "Assets/Editor/AddressableEditor/GroupConfig.json";
    private readonly static string DATA_DIR = Application.dataPath + "/" + "AddressableAssetsData";

    [MenuItem("可寻址操作/自动设置Group")]
    public static void ApplyGroupConfig()
    {
        Debug.Log("Start ApplyGroupConfig");
        try
        {
            if (!AddressableAssetSettingsDefaultObject.SettingsExists)
            {
                UnityEditor.FileUtil.DeleteFileOrDirectory(DATA_DIR);
                ProjectConfigData.PostProfilerEvents = true;
                AddressableAssetSettingsDefaultObject.Settings = AddressableAssetSettingsDefaultObject.GetSettings(true);
                if (TryGetGroup("Built In Data", out var group))
                {
                    var schema = group.GetSchema<PlayerDataGroupSchema>();
                    if (schema != null)
                    {
                        schema.IncludeResourcesFolders = false;
                        schema.IncludeBuildSettingsScenes = false;
                    }
                }
                if (TryGetGroup("Default Local Group", out group))
                {
                    var schema = group.GetSchema<BundledAssetGroupSchema>();
                    schema.UseAssetBundleCrc = false;
                    schema.UseAssetBundleCrcForCachedBundles = false;
                    //注释掉加密
                    // SetFieldByReflection<BundledAssetGroupSchema>("m_DataStreamProcessorType", schema, new SerializedType { Value = typeof(CustomStreamProcessor) });
                }
            }
            
            var groupPath = "Assets/AddressableAssetsData/AssetGroups";
            if (!Directory.Exists(groupPath))
            {
                Directory.CreateDirectory(groupPath);
            }
            
            var srcPathList = Directory.GetFiles(groupPath);
            foreach (var s in srcPathList)
            {
                if (s.Contains(".meta"))
                {
                    continue;
                }
                if (s.Contains("Built In Data"))
                {
                    continue;
                }
                if (s.Contains("Default Local Group"))
                {
                    continue;
                }

                var obj = AssetDatabase.LoadAssetAtPath<ScriptableObject>(s);
                if (obj != null)
                {
                    Debug.Log(obj.name);
                    var path = s.Replace(@"\", "/");
                    var _group = AddressableAssetSettingsDefaultObject.Settings.FindGroup(obj.name);
                    if (_group != null)
                    {
                        AssetDatabase.DeleteAsset(path); 
                        AddressableAssetSettingsDefaultObject.Settings.RemoveGroup(_group);
                    }
                }
            }
            AssetDatabase.SaveAssets();
            AssetDatabase.Refresh();
            
            AddressableImporter.FolderImporter.ReimportFolders(new []{"Assets/Bundles/"});
            AssetDatabase.SaveAssets();
            AssetDatabase.Refresh();
            // string configPath = Path.Combine(Application.dataPath, CONFIG_PATH.Substring(7));
            // if (File.Exists(configPath))
            // {
            //     var result = AssetDatabase.LoadAssetAtPath<TextAsset>(CONFIG_PATH);
            //     var config = JsonUtility.FromJson<GroupConfigJson>(result.text);
            //     var settings = AddressableAssetSettingsDefaultObject.Settings;
            //     settings.DisableCatalogUpdateOnStartup = true;
            //     settings.BuildRemoteCatalog = true;
            //     settings.NonRecursiveBuilding = true;
            //     foreach (var data in config.Config)
            //     {
            //         if (!string.IsNullOrEmpty(data.Labels))
            //         {
            //             settings.AddLabel(data.Labels);
            //         }
            //         if (!TryGetGroup(data.Name, out var group))
            //         {
            //             group = settings.CreateGroup(data.Name, false, false, false, null, typeof(BundledAssetGroupSchema), typeof(ContentUpdateGroupSchema));
            //             var assetSchema = group.GetSchema<BundledAssetGroupSchema>();
            //             assetSchema.BundleMode = (BundledAssetGroupSchema.BundlePackingMode)data.PackType;
            //             assetSchema.UseAssetBundleCrc = false;
            //             assetSchema.UseAssetBundleCrcForCachedBundles = false;
            //             //注释掉加密
            //             // SetFieldByReflection<BundledAssetGroupSchema>("m_DataStreamProcessorType", assetSchema, new SerializedType { Value = typeof(CustomStreamProcessor) });
            //             group.GetSchema<ContentUpdateGroupSchema>().StaticContent = true;
            //         }
            //         if (!string.IsNullOrEmpty(data.Path))
            //         {
            //             var filePath = Path.Combine(Application.dataPath, data.Path.Substring(7));
            //             if (File.Exists(filePath))
            //             {
            //                 string guid = AssetDatabase.AssetPathToGUID(data.Path);
            //                 var entry = settings.CreateOrMoveEntry(guid, group);
            //                 entry.SetAddress(data.Path);
            //                 if (!string.IsNullOrEmpty(data.Labels))
            //                 {
            //                     entry.SetLabel(data.Labels, true);
            //                 }
            //             }
            //             else
            //             {
            //                 Debug.LogError("不存在文件" + data.Path);
            //             }
            //         }
            //         if (!string.IsNullOrEmpty(data.Dir))
            //         {
            //             var directoryPath = Path.Combine(Application.dataPath, data.Dir.Substring(7));
            //             if (Directory.Exists(directoryPath))
            //             {
            //                 DirectoryInfo di = new DirectoryInfo(directoryPath);
            //                 var fiArr = di.GetFiles("*", SearchOption.AllDirectories);
            //                 int subLen = directoryPath.Length + 1;
            //                 foreach (var fi in fiArr)
            //                 {
            //                     if (fi.Extension != META_EXTENSION && (data.Extension.Count == 0 || data.Extension.Contains(fi.Extension)))
            //                     {
            //                         string assetPath = data.Dir + "/" + fi.FullName.Substring(subLen).Replace('\\', '/');
            //                         string guid = AssetDatabase.AssetPathToGUID(assetPath);
            //                         var entry = settings.CreateOrMoveEntry(guid, group);
            //                         entry.SetAddress(assetPath);
            //                         if (!string.IsNullOrEmpty(data.Labels))
            //                         {
            //                             entry.SetLabel(data.Labels, true);
            //                         }
            //                     }
            //                 }
            //             }
            //             else
            //             {
            //                 Debug.LogError("不存在路径" + data.Dir);
            //             }
            //         }
            //     }
            //     AssetDatabase.SaveAssets();
            //     AssetDatabase.Refresh();
            //     Debug.Log("<color=#00ff00>Group生成成功</color>");
            // }
            // else
            // {
            //     Debug.LogError("找不到Config文件，Path = " + configPath);
            // }
        }
        catch (Exception e)
        {
            Debug.Log(e.Message + e.StackTrace);
        }
    }

    [MenuItem("可寻址操作/设置HotUpdate资源")]
    public static void CheckHotUpdateRes()
    {
        var settings = AddressableAssetSettingsDefaultObject.Settings;
        string targetName = GetBuildTargetName(EditorUserBuildSettings.activeBuildTarget);
        string path = string.Format("{0}/{1}/addressables_content_state.bin", DATA_DIR, targetName);
        Dictionary<AddressableAssetEntry, List<AddressableAssetEntry>> modifiedEntries = ContentUpdateScript.GatherModifiedEntriesWithDependencies(settings, path);
        foreach (var kv in modifiedEntries)
        {
            var parentGroup = kv.Key.parentGroup;
            var groupName = parentGroup.Name + "_HotUpdate";
            if (!TryGetGroup(groupName, out var group))
            {
                group = settings.CreateGroup(groupName, false, false, false, null, typeof(BundledAssetGroupSchema), typeof(ContentUpdateGroupSchema));
                group.GetSchema<ContentUpdateGroupSchema>().StaticContent = false;
                BundledAssetGroupSchema schema = group.GetSchema<BundledAssetGroupSchema>();
                schema.BundleMode = parentGroup.GetSchema<BundledAssetGroupSchema>().BundleMode;
                schema.BuildPath.SetVariableByName(settings, "RemoteBuildPath");
                schema.LoadPath.SetVariableByName(settings, "RemoteLoadPath");
            }
            settings.MoveEntry(kv.Key, group);
        }
        Debug.Log("设置热更资源完成");
    }

    [MenuItem("可寻址操作/清除未使用资源")]
    public static void ClearUnusedAssets()
    {
        if (Application.isPlaying)
        {
            Resources.UnloadUnusedAssets();
            Debug.Log("Clear!!!");
        }
    }

    private static bool TryGetGroup(string name, out AddressableAssetGroup group)
    {
        group = null;
        var groupList = AddressableAssetSettingsDefaultObject.Settings.groups;
        foreach (var v in groupList)
        {
            if (v.Name == name)
            {
                group = v;
                return true;
            }
        }
        return false;
    }

    public static string GetBuildTargetName(BuildTarget target)
    {
        Debug.Log(target.ToString());
        switch (target)
        {
            case BuildTarget.StandaloneWindows64:
            case BuildTarget.StandaloneWindows: return "Windows";
            case BuildTarget.Android: return "Android";
            case BuildTarget.iOS: return "iOS";
        }
        return "Undefine";
    }

    private static void SetFieldByReflection<T>(string fieldName, object obj, object value)
    {
        Type t = typeof(T);
        var fi = t.GetField(fieldName, BindingFlags.NonPublic | BindingFlags.Instance | BindingFlags.Public);
        if (fi != null)
        {
            fi.SetValue(obj, value);
        }
    }
}
