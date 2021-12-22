
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using UnityEditor;
using UnityEngine;
using UnityFS.Editor;
using Debug = UnityEngine.Debug;
using Object = UnityEngine.Object;

namespace SEyesSoft.Editor
{
    public static class MenuItems
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

        [MenuItem("Assets/Apply FUI To UnityFsBundle", false, 1)]
        private static void ApplyFUI2UnityFsBundle()
        {
            var path = GetCurrentAssetDirectory();
            Debug.Log($".>>>Apply FUI To UnityFsBundle  {path}");
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
                    dict.Add(firstNameKey, new List<string>() {filePath});   
                }
                else
                {
                    dict[firstNameKey].Add(filePath);
                }
            }

            var currentBundles = BundleBuilder.GetBundleInfoByTag("FUI");
            var targetPending = new List<BundleBuilderData.BundleAssetTarget>();
            foreach (var bundle in currentBundles)
            {
                foreach (var bundleAssetTarget in bundle.targets)
                {
                    targetPending.Add(bundleAssetTarget);
                }
            }
            var _data = BundleBuilder.GetData();
            foreach (var bundle in _data.bundles)
            {
                foreach (var target in targetPending)
                {
                    if (target.id > 0 && !_data.freeIdList.Contains(target.id))
                    {
                        
                        _data.AddId2Free(target.id);
                    }
                    bundle.targets.Remove(target);
                }
            }
                    
            foreach (var bundle in currentBundles)
            {
                _data.bundles.Remove(bundle);
                if (_data.bundles.Count > 0)
                {
                    var nameId = bundle.id;
                    if (nameId > 0)
                    {
                        if (!_data.freeIdList.Contains(nameId))
                        {
                            _data.AddId2Free(nameId);
                        }
                    }
                }
                else
                {
                    _data.freeIdList.Clear();
                    _data.id = 0;
                }
            }
            

            foreach (var dd in dict)
            {
                foreach (var targetPath in dd.Value)
                {

                    if (targetPath.Contains("_fui"))
                    {
                        BundleBuilder.AddOneBundle(targetPath, $"{dd.Key}_desc", false, "FUI");
                    }
                    else
                    {
                        var resInfoName = $"{dd.Key}_res";
                        var resBundle = BundleBuilder.GetBundleInfoByInfo(resInfoName);
                        if (resBundle == null)
                        {
                            BundleBuilder.AddOneBundle(targetPath, $"{dd.Key}_res", false, "FUI");
                        }
                        else
                        {
                            BundleBuilder.AddOneTargetToBundle(resBundle, targetPath);
                        }
                    }
                    
                }
            }
        }
    }
}