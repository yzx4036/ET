using System.Collections;
using System.Collections.Generic;
using UnityEngine;

namespace BundleSystem
{
    //bundleAssetPath must have it's own functions as it doesn't need any
    //using needed, and struct -> interface conversion allocates struct to heap
    [System.Serializable]
    public struct BundledAssetPath : System.IEquatable<BundledAssetPath>
    {
        [SerializeField]
        public string BundleName;

        [SerializeField]
        public string AssetName;
        
        /// <summary>
        /// Load Asset
        /// </summary>
        public T Load<T>() where T : Object
        {
            return BundleManager.Load<T>(BundleName, AssetName);
        }
        
        /// <summary>
        /// Load AssetAsync
        /// </summary>
        public BundleRequest<T> LoadAsync<T>() where T : Object
        {
            return BundleManager.LoadAsync<T>(BundleName, AssetName);
        }

        /// <summary>
        /// Is specified asset exist in current bundle settings?
        /// </summary>
        public bool Exists()
        {
            return BundleManager.IsAssetExist(BundleName, AssetName);
        }

        public bool Equals(BundledAssetPath other)
        {
            return BundleName == other.BundleName && AssetName == other.AssetName;
        }
        
        public override int GetHashCode() 
        {
            unchecked
            {
                int hash = 17;
                hash = hash * 23 + BundleName.GetHashCode();
                hash = hash * 23 + AssetName.GetHashCode();
                return hash;
            }
        }

        public override bool Equals(object obj)
        {
            if(obj is BundledAssetPath otherPath)
            {
                return Equals(otherPath);
            }
            return false;
        }

        public static bool operator ==(BundledAssetPath lhs, BundledAssetPath rhs) 
        {
            return lhs.Equals(rhs);
        }

        public static bool operator !=(BundledAssetPath lhs, BundledAssetPath rhs) 
        {
            return !lhs.Equals(rhs);
        }
    }

    public interface IBundledAssetPath
    {
        string GetBundleName();
        string GetAssetName();
    }

    public static class BundledAssetPathExtension
    {
        /// <summary>
        /// Load Asset
        /// </summary>
        public static T Load<T>(this IBundledAssetPath path) where T : Object
        {
            return BundleManager.Load<T>(path.GetBundleName(), path.GetAssetName());
        }
        
        /// <summary>
        /// Load AssetAsync
        /// </summary>
        public static BundleRequest<T> LoadAsync<T>(this IBundledAssetPath path) where T : Object
        {
            return BundleManager.LoadAsync<T>(path.GetBundleName(), path.GetAssetName());
        }

        /// <summary>
        /// Is specified asset exist in current bundle settings?
        /// </summary>
        public static bool Exists(this IBundledAssetPath path)
        {
            return BundleManager.IsAssetExist(path.GetBundleName(), path.GetAssetName());
        }
    }
}

#if UNITY_EDITOR
namespace BundleSystem
{
    using UnityEditor;
    [CustomPropertyDrawer(typeof(BundledAssetPath))]
    public class BundledAssetPathDrawer : PropertyDrawer
    {
        public override float GetPropertyHeight(SerializedProperty property, GUIContent label)
        {
            return EditorGUIUtility.singleLineHeight * 1;
        }

        public override void OnGUI(Rect position, SerializedProperty property, GUIContent label)
        {
            var bundleName = property.FindPropertyRelative("BundleName");
            var assetName = property.FindPropertyRelative("AssetName");

            Rect r = EditorGUI.PrefixLabel(position, label);
            Rect objectFieldRect = r;

            if (objectFieldRect.Contains(Event.current.mousePosition))
            {
                if (Event.current.type == EventType.DragUpdated)
                {
                    Object reference = DragAndDrop.objectReferences[0];
                    string path = AssetDatabase.GetAssetPath(reference);
                    if(AssetbundleBuildSettings.EditorInstance.TryGetBundleNameAndAssetPath(path, out var foundName, out var foundPath))
                    {
                        DragAndDrop.visualMode = DragAndDropVisualMode.Copy;
                    }
                    else
                    {
                        DragAndDrop.visualMode = DragAndDropVisualMode.Rejected;
                    }
                    Event.current.Use();
                }
                else if (Event.current.type == EventType.DragPerform)
                {
                    Object reference = DragAndDrop.objectReferences[0];
                    string path = AssetDatabase.GetAssetPath(reference);
                    if(AssetbundleBuildSettings.EditorInstance.TryGetBundleNameAndAssetPath(path, out var foundName, out var foundPath))
                    {
                        bundleName.stringValue = foundName;
                        assetName.stringValue = foundPath;
                    }
                    Event.current.Use();
                }
            }

            var half = objectFieldRect.width * 0.5f;
            objectFieldRect.width = half - 2;
            bundleName.stringValue = EditorGUI.TextField(objectFieldRect, bundleName.stringValue);
            objectFieldRect.x += half;
            assetName.stringValue = EditorGUI.TextField(objectFieldRect, assetName.stringValue);
        }
    }
}
#endif