using System;
using System.Collections.Generic;
using UnityEngine.SceneManagement;
using UnityEngine.U2D;
using YooAsset;

namespace ET.Client
{
    [EntitySystemOf(typeof(ResComponent))]
    [FriendOf(typeof(ResComponent))]
    public static partial class ResComponentSystem
    {
        #region 生命周期

        [EntitySystem]
        public static void Awake(this ResComponent self)
        {
            ResComponent.Instance = self;
            self.TotalFrameCount = 0;
        }

        [EntitySystem]
        public static void Destroy(this ResComponent self)
        {
            self.ForceUnloadAllAssets();

            ResComponent.Instance = null;
            self.PackageVersion = string.Empty;
            self.Downloader = null;
            
            self.AssetsOperationHandles.Clear();
            self.SubAssetsOperationHandles.Clear();
            self.SceneOperationHandles.Clear();
            self.RawFileOperationHandles.Clear();
            self.HandleProgresses.Clear();
            self.DoneHandleQueue.Clear();
        }

        [EntitySystem]
        public static void Update(this ResComponent self)
        {
            if (self.TotalFrameCount % self.CheckUnusedFrameCount == 0)
            {
                self.UnloadUnusedAssets();
                var _deleteList = ObjectPool.Instance.Fetch<List<string>>();
                
                _deleteList.Clear();
                foreach (var kv in self.SceneOperationHandles)
                {
                    if (!kv.Value.IsValid)
                    {
                        _deleteList.Add(kv.Key);
                    }
                }
                for (int i = 0; i < _deleteList.Count; i++)
                {
                    self.SceneOperationHandles.Remove(_deleteList[i]);
                }
            }
            foreach (var kv in self.HandleProgresses)
            {
                HandleBase handle = kv.Key;
                Action<float> progress = kv.Value;

                if (!handle.IsValid)
                {
                    continue;
                }

                if (handle.IsDone)
                {
                    self.DoneHandleQueue.Enqueue(handle);
                    progress?.Invoke(1);
                    continue;
                }

                progress?.Invoke(handle.Progress);
            }

            while (self.DoneHandleQueue.Count > 0)
            {
                var handle = self.DoneHandleQueue.Dequeue();
                self.HandleProgresses.Remove(handle);
            }
        }

        #endregion

        #region 热更相关

        public static async ETTask<int> UpdateVersionAsync(this ResComponent self, int timeout = 30)
        {
            var package = YooAssets.GetPackage("DefaultPackage");
            var operation = package.UpdatePackageVersionAsync();
            
            await operation.Task;

            if (operation.Status != EOperationStatus.Succeed)
            {
                return ErrorCode.ERR_ResourceUpdateVersionError;
            }

            self.PackageVersion = operation.PackageVersion;
            return ErrorCode.ERR_Success;
        }

        public static async ETTask<int> UpdateManifestAsync(this ResComponent self)
        {
             var package = YooAssets.GetPackage("DefaultPackage");
            var operation = package.UpdatePackageManifestAsync(self.PackageVersion);
                        
            await operation.Task;

            if (operation.Status != EOperationStatus.Succeed)
            {
                return ErrorCode.ERR_ResourceUpdateManifestError;
            }

            return ErrorCode.ERR_Success;
        }

        public static int CreateDownloader(this ResComponent self)
        {
            int downloadingMaxNum = 10;
            int failedTryAgain = 3;
            ResourceDownloaderOperation downloader = YooAssets.CreateResourceDownloader(downloadingMaxNum, failedTryAgain);
            if (downloader.TotalDownloadCount == 0)
            {
                Log.Info("没有发现需要下载的资源");
            }
            else
            {
                Log.Info("一共发现了{0}个资源需要更新下载。".Fmt(downloader.TotalDownloadCount));
                self.Downloader = downloader;
            }

            return ErrorCode.ERR_Success;
        }

        public static async ETTask<int> DonwloadWebFilesAsync(this ResComponent self, 
        DownloaderOperation.OnStartDownloadFile onStartDownloadFileCallback = null, 
        DownloaderOperation.OnDownloadProgress onDownloadProgress = null,
        DownloaderOperation.OnDownloadError onDownloadError = null,
        DownloaderOperation.OnDownloadOver onDownloadOver = null)
        {
            if (self.Downloader == null)
            {
                return ErrorCode.ERR_Success;
            }

            // 注册下载回调
            self.Downloader.OnStartDownloadFileCallback = onStartDownloadFileCallback;
            self.Downloader.OnDownloadProgressCallback = onDownloadProgress;
            self.Downloader.OnDownloadErrorCallback = onDownloadError;
            self.Downloader.OnDownloadOverCallback = onDownloadOver;
            self.Downloader.BeginDownload();
            await self.Downloader.Task;

            // 检测下载结果
            if (self.Downloader.Status != EOperationStatus.Succeed)
            {
                return ErrorCode.ERR_ResourceUpdateDownloadError;
            }

            return ErrorCode.ERR_Success;
        }

        #endregion

        #region 卸载

        public static void UnloadUnusedAssets(this ResComponent self)
        {
            ResourcePackage package = YooAssets.GetPackage("DefaultPackage");
            package.UnloadUnusedAssets();
        }

        public static void ForceUnloadAllAssets(this ResComponent self)
        {
            ResourcePackage package = YooAssets.GetPackage("DefaultPackage");
            package.ForceUnloadAllAssets();
        }

        public static void UnloadAsset(this ResComponent self, string location)
        {
            if (self.AssetsOperationHandles.TryGetValue(location, out AssetHandle assetOperationHandle))
            {
                assetOperationHandle.Release();
                self.AssetsOperationHandles.Remove(location);
            }
            else if (self.RawFileOperationHandles.TryGetValue(location, out RawFileHandle rawFileOperationHandle))
            {
                rawFileOperationHandle.Release();
                self.RawFileOperationHandles.Remove(location);
            }
            else if (self.SubAssetsOperationHandles.TryGetValue(location, out SubAssetsHandle subAssetsOperationHandle))
            {
                subAssetsOperationHandle.Release();
                self.SubAssetsOperationHandles.Remove(location);
            }
            else
            {
                Log.Error($"资源{location}不存在");
            }
        }

        #endregion

        #region 异步加载

        public static async ETTask<T> LoadAssetAsync<T>(this ResComponent self, string location) where T: UnityEngine.Object
        {
            self.AssetsOperationHandles.TryGetValue(location, out AssetHandle handle);

            if (handle == null)
            {
                handle = YooAssets.LoadAssetAsync<T>(location);
                self.AssetsOperationHandles[location] = handle;
            }

            await handle.Task;

            return handle.GetAssetObject<T>();
        }

        public static async ETTask<UnityEngine.Object> LoadAssetAsync(this ResComponent self, string location, Type type)
        {
            if (!self.AssetsOperationHandles.TryGetValue(location, out AssetHandle handle))
            {
                handle = YooAssets.LoadAssetAsync(location, type);
                self.AssetsOperationHandles[location] = handle;
            }

            await handle.Task;

            return handle.AssetObject;
        }

        public static async ETTask<UnityEngine.SceneManagement.Scene> LoadSceneAsync(this ResComponent self, string location, Action<float> progressCallback = null, LoadSceneMode loadSceneMode = LoadSceneMode.Single, bool activateOnLoad = true, uint priority = 100)
        {
            if (!self.SceneOperationHandles.TryGetValue(location, out SceneHandle handle))
            {
                handle = YooAssets.LoadSceneAsync(location, loadSceneMode, activateOnLoad, priority);
                self.SceneOperationHandles[location] = handle;
            }
            else
            {
                // Log.Debug($">>> 已存在的资源handle  {location}"); 
            }

            if (progressCallback != null)
            {
                self.HandleProgresses.Add(handle, progressCallback);
            }

            await handle.Task;

            return handle.SceneObject;
        }

        public static async ETTask<byte[]> LoadRawFileDataAsync(this ResComponent self, string location)
        {
            if (!self.RawFileOperationHandles.TryGetValue(location, out RawFileHandle handle))
            {
                handle = YooAssets.LoadRawFileAsync(location);
                self.RawFileOperationHandles[location] = handle;
            }
            
            await handle.Task;
            
            return handle.GetRawFileData();
        }

        public static async ETTask<string> LoadRawFileTextAsync(this ResComponent self, string location)
        {
            if (!self.RawFileOperationHandles.TryGetValue(location, out RawFileHandle handle))
            {
                handle = YooAssets.LoadRawFileAsync(location);
                self.RawFileOperationHandles[location] = handle;
            }
            
            await handle.Task;
            
            return handle.GetRawFileText();
        }
        
        /// <summary>
        /// 异步加载图集
        /// </summary>
        /// <param name="atlasName"></param>
        /// <returns></returns>
        public static async ETTask<SpriteAtlas> LoadAtlasAsync(this ResComponent self, string atlasName)
        {
            string path = $"Assets/Bundles/Atlas/{atlasName}.spriteatlasv2";
            SpriteAtlas spriteAtlas = await self.LoadAssetAsync<SpriteAtlas>(path);
            return spriteAtlas;
        }

        #endregion

        #region 同步加载

        public static T LoadAsset<T>(this ResComponent self, string location)where T: UnityEngine.Object
        {
            self.AssetsOperationHandles.TryGetValue(location, out AssetHandle handle);

            if (handle == null)
            {
                handle = YooAssets.LoadAssetSync<T>(location);
                self.AssetsOperationHandles[location] = handle;
            }

            return handle.AssetObject as T;
        }
        
        public static UnityEngine.Object LoadAsset(this ResComponent self, string location, Type type)
        {
            self.AssetsOperationHandles.TryGetValue(location, out AssetHandle handle);

            if (handle == null)
            {
                handle = YooAssets.LoadAssetSync(location, type);
                self.AssetsOperationHandles[location] = handle;
            }

            return handle.AssetObject;
        }
        
        public static byte[] LoadRawFileDataSync(this ResComponent self, string location)
        {
            if (!self.RawFileOperationHandles.TryGetValue(location, out RawFileHandle handle))
            {
                handle = YooAssets.LoadRawFileSync(location);
                self.RawFileOperationHandles[location] = handle;
            }
            
            return handle.GetRawFileData();
        }
        
        public static string LoadRawFileTextSync(this ResComponent self, string location)
        {
            if (!self.RawFileOperationHandles.TryGetValue(location, out RawFileHandle handle))
            {
                handle = YooAssets.LoadRawFileSync(location);
                self.RawFileOperationHandles[location] = handle;
            }
            
            return handle.GetRawFileText();
        }
        
        /// <summary>
        /// 同步加载图集
        /// </summary>
        /// <param name="atlasName"></param>
        /// <returns></returns>
        public static SpriteAtlas LoadAtlasSync(this ResComponent self, string atlasName)
        {
            string path = $"Assets/Bundles/Atlas/{atlasName}.spriteatlasv2";
            SpriteAtlas spriteAtlas = self.LoadAsset<SpriteAtlas>(path);
            return spriteAtlas;
        }

        #endregion

    } 
}