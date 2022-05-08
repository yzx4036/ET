using System;
using System.IO;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using UnityEngine.UI;
using UnityEngine;
using UnityEngine.SceneManagement;
using UnityEngine.Serialization;

namespace Y0StudioSoft
{
    public class Updater : INetworkMonitorListener
    {
        public string initScene = "Init.unity";

        public static async Task Start()
        {
            await AddressableMgr.Instance.InitAddressableAsync(async () =>
            {
                await OnInitCompleted();
            }, (f, l) =>
            {
                Debug.Log($">>>f:{f} l:{l}}}");
            }, exception =>
            {
                Debug.LogError($">>>{exception.ToString()}");
            });
        }
        
        private static async Task OnInitCompleted()
        {
            Debug.Log("Updater OnInitCompleted");
        }

        public void OnReachabilityChanged(NetworkReachability reachability)
        {
            Debug.Log($">>>>>OnAllBundleDownloadCompleted {reachability}");

        }
    }
}