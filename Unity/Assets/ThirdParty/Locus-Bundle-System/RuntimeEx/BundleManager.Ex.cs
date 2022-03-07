using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

namespace BundleSystem
{
    public static partial class BundleManager
    {
        // public static GameObject Instantiate(string pPath)
        // {
        //     var loadedAsset = Load<GameObject>("Remote", "Cube");
        //     if(loadedAsset != null)
        //     {
        //         m_Instances.Add(BundleManager.Instantiate(loadedAsset));
        //         BundleManager.ReleaseObject(loadedAsset);
        //     }            
        // }

        public static void Clear()
        {
            foreach (var kv in s_AssetBundles)
            {
                kv.Value.Bundle.Unload(false);
            }

            s_AssetBundles.Clear();
        }
    }
}
