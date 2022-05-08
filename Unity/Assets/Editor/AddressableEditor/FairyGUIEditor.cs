using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using UnityEditor;
using UnityEditor.AddressableAssets;
using UnityEditor.AddressableAssets.Settings;
using UnityEngine;
using Debug = UnityEngine.Debug;
using Object = UnityEngine.Object;

namespace Y0StudioSoft.Editor
{
    public static class FairyGUIEditor
    {
        public static string GetCurrentAssetDirectory()
        {
            foreach (var obj in Selection.GetFiltered<Object>(SelectionMode.Assets))
            {
                var path = AssetDatabase.GetAssetPath(obj);
                if (string.IsNullOrEmpty(path))
                    continue;

                if (System.IO.Directory.Exists(path))
                    return path;
                else if (System.IO.File.Exists(path))
                    return System.IO.Path.GetDirectoryName(path);
            }

            return "Assets";
        }

        [MenuItem("Assets/Apply FUI Asset To Addressables Group ", false, 1)]
        private static void ApplyFUI2UnityFsBundle()
        {
            if (!AddressableAssetSettingsDefaultObject.SettingsExists)
            {
                AddressableEditor.ApplyGroupConfig();
            }
            var path = GetCurrentAssetDirectory();
            Debug.Log($".>>>Apply FUI Asset To Addressables Group  {path}");
            Dictionary<string, List<string>> dict = new Dictionary<string, List<string>>();
            foreach (var file in Directory.GetFiles(path))
            {
                if (file.Contains(".meta"))
                {
                    continue;
                }

                var filePath = file.Replace(@"\", "/");
                var shortName = filePath.Replace(path, "").Replace(@"/", "");
                var firstNameKey = shortName.Split('_')[0];
                if (!dict.ContainsKey(firstNameKey))
                {
                    dict.Add(firstNameKey, new List<string>() { filePath });
                }
                else
                {
                    dict[firstNameKey].Add(filePath);
                }
            }

            foreach (var d in dict)
            {
                foreach (var p in d.Value)
                {
                    Debug.Log($"{d.Key}>>>>{p}");
                    
                }
            }

            List<string> _needRemoveGroupName = new List<string>();
            var settings = AddressableAssetSettingsDefaultObject.Settings;
            settings.GetLabels();
            foreach (var group in settings.groups)
            {
                if (!group.name.StartsWith("FUI_"))
                {
                    continue;
                }
                Debug.Log($">>>>{group.name}");
                var _nameStrArray = group.name.Split('_');
                if (_nameStrArray.Length > 0)
                {
                    if (!dict.ContainsKey(_nameStrArray[1]) )
                    {
                        _needRemoveGroupName.Add(group.name);
                    }
                }
            }

            foreach (string removeGroupName in _needRemoveGroupName)
            {
                var _group = AddressableAssetSettingsDefaultObject.Settings.FindGroup(removeGroupName);
                if (_group != null)
                {
                    AssetDatabase.DeleteAsset(path); 
                    AddressableAssetSettingsDefaultObject.Settings.RemoveGroup(_group);
                }
            }
            

            //         var currentBundles = BundleBuilder.GetBundleInfoByTag("FUI");
            //         var targetPending = new List<BundleBuilderData.BundleAssetTarget>();
            //         foreach (var bundle in currentBundles)
            //         {
            //             foreach (var bundleAssetTarget in bundle.targets)
            //             {
            //                 targetPending.Add(bundleAssetTarget);
            //             }
            //         }
            //         var _data = BundleBuilder.GetData();
            //         foreach (var bundle in _data.bundles)
            //         {
            //             foreach (var target in targetPending)
            //             {
            //                 if (target.id > 0 && !_data.freeIdList.Contains(target.id))
            //                 {
            //                     
            //                     _data.AddId2Free(target.id);
            //                 }
            //                 bundle.targets.Remove(target);
            //             }
            //         }
            //                 
            //         foreach (var bundle in currentBundles)
            //         {
            //             _data.bundles.Remove(bundle);
            //             if (_data.bundles.Count > 0)
            //             {
            //                 var nameId = bundle.id;
            //                 if (nameId > 0)
            //                 {
            //                     if (!_data.freeIdList.Contains(nameId))
            //                     {
            //                         _data.AddId2Free(nameId);
            //                     }
            //                 }
            //             }
            //             else
            //             {
            //                 _data.freeIdList.Clear();
            //                 _data.id = 0;
            //             }
            //         }
            //         
            //
            //         foreach (var dd in dict)
            //         {
            //             foreach (var targetPath in dd.Value)
            //             {
            //
            //                 if (targetPath.Contains("_fui"))
            //                 {
            //                     BundleBuilder.AddOneBundle(targetPath, $"{dd.Key}_desc", false, "FUI");
            //                 }
            //                 else
            //                 {
            //                     var resInfoName = $"{dd.Key}_res";
            //                     var resBundle = BundleBuilder.GetBundleInfoByInfo(resInfoName);
            //                     if (resBundle == null)
            //                     {
            //                         BundleBuilder.AddOneBundle(targetPath, $"{dd.Key}_res", false, "FUI");
            //                     }
            //                     else
            //                     {
            //                         BundleBuilder.AddOneTargetToBundle(resBundle, targetPath);
            //                     }
            //                 }
            //                 
            //             }
            //         }
        }
    }
}