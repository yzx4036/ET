using System;
using System.Collections.Generic;
using UnityEngine.SceneManagement;
using YooAsset;

namespace ET.Client
{
    [ComponentOf(typeof(Scene))]
    public class ResComponent: Entity, IAwake, IDestroy, IUpdate
    {
        public static ResComponent Instance { get; set; }

        public string PackageVersion { get; set; }

        public ResourceDownloaderOperation Downloader { get; set; }
        
        public Dictionary<string, AssetHandle> AssetsOperationHandles = new Dictionary<string, AssetHandle>(100);
        
        public Dictionary<string, SubAssetsHandle> SubAssetsOperationHandles = new Dictionary<string, SubAssetsHandle>();
        
        public Dictionary<string, SceneHandle> SceneOperationHandles = new Dictionary<string, SceneHandle>();
        
        public Dictionary<string, RawFileHandle> RawFileOperationHandles = new Dictionary<string, RawFileHandle>(100);

        public Dictionary<HandleBase, Action<float>> HandleProgresses = new Dictionary<HandleBase, Action<float>>();

        public Queue<HandleBase> DoneHandleQueue = new Queue<HandleBase>();
        
        public int TotalFrameCount { get; set; }
        public int CheckUnusedFrameCount => 1000;
    }
}