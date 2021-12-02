using System.Collections.Generic;
using UnityEngine;
using System.Collections;
using UnityEngine.Networking;
using System.IO;

namespace BundleSystem
{
    /// <summary>
    /// Handle Resources expecially assetbundles.
    /// Also works in editor
    /// </summary>
    public static partial class BundleManager
    {
        //instance is almost only for coroutines
        private static BundleManagerHelper s_Helper { get; set; }
        private static DebugGuiHelper s_DebugGUI { get; set; }

        class LoadedBundle
        {
            public string Name;
            public AssetBundle Bundle;
            public Hash128 Hash;
            public List<string> Dependencies; //including self
            public bool IsLocalBundle;
            public string LoadPath;
            public UnityWebRequest RequestForReload;
            public bool IsReloading = false;
            public LoadedBundle(AssetbundleBuildManifest.BundleInfo info, string loadPath, AssetBundle bundle, bool isLocal)
            {
                Name = info.BundleName;
                IsLocalBundle = isLocal;
                LoadPath = loadPath;
                Bundle = bundle; 
                Hash = info.Hash;
                Dependencies = info.Dependencies;
                Dependencies.Add(Name);
            }
        }

        //Asset bundles that is loaded keep it static so we can easily call this in static method
        static Dictionary<string, LoadedBundle> s_AssetBundles = new Dictionary<string, LoadedBundle>();
        static Dictionary<string, Hash128> s_LocalBundles = new Dictionary<string, Hash128>();
        static Dictionary<string, LoadedBundle> s_SceneNames = new Dictionary<string, LoadedBundle>();

#if UNITY_EDITOR
        public static bool UseAssetDatabase { get; private set; } = true;
#endif
        public static bool Initialized { get; private set; } = false;
        public static string LocalURL { get; private set; }
        public static string RemoteURL { get; private set; }
        public static string GlobalBundleHash { get; private set; }
        internal static int UnityMainThreadId { get; private set; }

        public static bool AutoReloadBundle { get; private set; } = true;
        public static bool LogMessages { get; set; }

#if UNITY_EDITOR && UNITY_2019_1_OR_NEWER
        [RuntimeInitializeOnLoadMethod(RuntimeInitializeLoadType.SubsystemRegistration)]
        static void DomainReloaded()
        {
            //need to reset static fields and events
            UnityEngine.SceneManagement.SceneManager.sceneLoaded -= TrackOnSceneLoaded;
            UnityEngine.SceneManagement.SceneManager.sceneUnloaded -= TrackOnSceneUnLoaded;

            //manager defaults
            Initialized = false;
            s_Helper = default;
            s_DebugGUI = default;
            UseAssetDatabase = true;
            LocalURL = default;
            RemoteURL = default;
            GlobalBundleHash = default;
            AutoReloadBundle = true;
            s_LocalBundles.Clear();
            s_SceneNames.Clear();
            OnDestroy(); // need to unload bundles

            //debugging defaults
            ShowDebugGUI = default;
            LogMessages = default;

            //api defaults
            s_EditorBuildSettings = default;
            s_EditorAssetMap = default;

            //memory defaults
            s_WeakRefPool.Clear();
            s_BundleRefCounts.Clear();
            s_BundleDirectUseCount.Clear();
            s_TrackingObjects.Clear();
            s_TrackingOwners.Clear();
            s_TrackingGameObjects.Clear();
        }  
#endif
        
        [RuntimeInitializeOnLoadMethod(RuntimeInitializeLoadType.BeforeSceneLoad)]
        static void Setup()
        {
            UnityEngine.SceneManagement.SceneManager.sceneLoaded += TrackOnSceneLoaded;
            UnityEngine.SceneManagement.SceneManager.sceneUnloaded += TrackOnSceneUnLoaded;
            UnityMainThreadId = System.Threading.Thread.CurrentThread.ManagedThreadId;
            var managerGo = new GameObject("_BundleManager");
            GameObject.DontDestroyOnLoad(managerGo);
            s_Helper = managerGo.AddComponent<BundleManagerHelper>();
            s_DebugGUI = managerGo.AddComponent<DebugGuiHelper>();
            s_DebugGUI.enabled = s_ShowDebugGUI;
            LocalURL = AssetbundleBuildSettings.LocalBundleRuntimePath;
#if UNITY_EDITOR
            SetupAssetdatabaseUsage();
            LocalURL = Utility.CombinePath(s_EditorBuildSettings.LocalOutputPath, UnityEditor.EditorUserBuildSettings.activeBuildTarget.ToString());
#endif
            if (Application.platform != RuntimePlatform.Android && Application.platform != RuntimePlatform.WebGLPlayer) LocalURL = "file://" + LocalURL;
        }

        static void CollectSceneNames(LoadedBundle loadedBundle)
        {
            var scenes = loadedBundle.Bundle.GetAllScenePaths();
            foreach (var scene in scenes) s_SceneNames[scene] = loadedBundle;
        }

        private static void OnDestroy()
        {
            foreach (var kv in s_AssetBundles)
                kv.Value.Bundle.Unload(false);
            s_AssetBundles.Clear();
        }

        public static BundleAsyncOperation Initialize(bool autoReloadBundle = true)
        {
            var result = new BundleAsyncOperation();
            s_Helper.StartCoroutine(CoInitalizeLocalBundles(result, autoReloadBundle));
            return result;
        }

        static IEnumerator CoInitalizeLocalBundles(BundleAsyncOperation result, bool autoReloadBundle)
        {
            if(Initialized)
            {
                result.Done(BundleErrorCode.Success);
                yield break;
            }

            AutoReloadBundle = autoReloadBundle;

            if(LogMessages) Debug.Log($"LocalURL : {LocalURL}");

            //temp dictionaries to apply very last
            var bundleRequests = new Dictionary<string, UnityWebRequest>();
            var loadedBundles = new Dictionary<string, LoadedBundle>();
            var localBundleHashes = new Dictionary<string, Hash128>();
            
            var manifestReq = UnityWebRequest.Get(Utility.CombinePath(LocalURL, AssetbundleBuildSettings.ManifestFileName));
            yield return manifestReq.SendWebRequest();

            if(result.IsCancelled) 
            {
                manifestReq.Dispose();
                yield break;
            }

            if(!Utility.CheckRequestSuccess(manifestReq))
            {
                result.Done(BundleErrorCode.NetworkError);
                yield break;
            }

            if(!AssetbundleBuildManifest.TryParse(manifestReq.downloadHandler.text, out var localManifest))
            {
                result.Done(BundleErrorCode.ManifestParseError);
                yield break;
            }

            //cached version is recent one.
            var cacheIsValid = AssetbundleBuildManifest.TryParse(PlayerPrefs.GetString("CachedManifest", string.Empty), out var cachedManifest) 
                && cachedManifest.BuildTime > localManifest.BuildTime;

            result.SetIndexLength(localManifest.BundleInfos.Count);
            for(int i = 0; i < localManifest.BundleInfos.Count; i++)
            {
                result.SetCurrentIndex(i);
                result.SetCachedBundle(true);
                AssetbundleBuildManifest.BundleInfo bundleInfoToLoad;
                AssetbundleBuildManifest.BundleInfo cachedBundleInfo = default;
                var localBundleInfo = localManifest.BundleInfos[i];
                localBundleHashes.Add(localBundleInfo.BundleName, localBundleInfo.Hash);

                bool useLocalBundle =
                    !cacheIsValid || //cache is not valid or...
                    !cachedManifest.TryGetBundleInfo(localBundleInfo.BundleName, out cachedBundleInfo) || //missing bundle or... 
                    !Caching.IsVersionCached(cachedBundleInfo.AsCached); //is not cached no unusable.

                bundleInfoToLoad = useLocalBundle ? localBundleInfo : cachedBundleInfo;
                var loadPath = Utility.CombinePath(LocalURL, bundleInfoToLoad.BundleName);

                var bundleReq = UnityWebRequestAssetBundle.GetAssetBundle(loadPath, bundleInfoToLoad.Hash);
                var bundleOp = bundleReq.SendWebRequest();
                while (!bundleOp.isDone)
                {
                    result.SetProgress(bundleOp.progress);
                    yield return null;
                    if(result.IsCancelled) break;
                }

                if(result.IsCancelled)
                {
                    bundleReq.Dispose();
                    break;
                }

                if(Utility.CheckRequestSuccess(bundleReq))
                {
                    //load bundle later
                    var loadedBundle = new LoadedBundle(bundleInfoToLoad, loadPath, null, useLocalBundle);
                    bundleRequests.Add(localBundleInfo.BundleName, bundleReq);
                    loadedBundles.Add(localBundleInfo.BundleName, loadedBundle);

                    if (LogMessages) Debug.Log($"Local bundle Loaded - Name : {localBundleInfo.BundleName}, Hash : {bundleInfoToLoad.Hash }");
                }
                else
                {
                    result.Done(BundleErrorCode.NetworkError);
                    yield break;
                }
            }

            if(result.IsCancelled)
            {
                foreach(var kv in bundleRequests)
                {
                    kv.Value.Dispose();
                }
                yield break;
            }

            foreach(var kv in s_AssetBundles)
            {
                kv.Value.Bundle.Unload(false);
                if (kv.Value.RequestForReload != null) 
                    kv.Value.RequestForReload.Dispose(); //dispose reload bundle
            }

            s_AssetBundles.Clear();
            s_SceneNames.Clear();
            s_LocalBundles = localBundleHashes;

            foreach(var kv in bundleRequests)
            {
                var loadedBundle = loadedBundles[kv.Key];
                loadedBundle.Bundle = DownloadHandlerAssetBundle.GetContent(kv.Value);
                CollectSceneNames(loadedBundle);
                s_AssetBundles.Add(loadedBundle.Name, loadedBundle);
                kv.Value.Dispose();
            }
            
            RemoteURL = Utility.CombinePath(localManifest.RemoteURL, localManifest.BuildTarget);
#if UNITY_EDITOR
            if (s_EditorBuildSettings.EmulateWithoutRemoteURL)
                RemoteURL = "file://" + Utility.CombinePath(s_EditorBuildSettings.RemoteOutputPath, UnityEditor.EditorUserBuildSettings.activeBuildTarget.ToString());
#endif
            Initialized = true;
            if (LogMessages) Debug.Log($"Initialize Success \nRemote URL : {RemoteURL} \nLocal URL : {LocalURL}");
            result.Done(BundleErrorCode.Success);
        }

        /// <summary>
        /// get last cached manifest, to support offline play
        /// </summary>
        /// <returns></returns>
        public static bool TryGetCachedManifest(out AssetbundleBuildManifest manifest)
        {
            return AssetbundleBuildManifest.TryParse(PlayerPrefs.GetString("CachedManifest", string.Empty), out manifest);
        }

        public static BundleAsyncOperation<AssetbundleBuildManifest> GetManifest()
        {
            var result = new BundleAsyncOperation<AssetbundleBuildManifest>();
            s_Helper.StartCoroutine(CoGetManifest(result));
            return result;
        }

        static IEnumerator CoGetManifest(BundleAsyncOperation<AssetbundleBuildManifest> result)
        {
            if (!Initialized)
            {
                Debug.LogError("Do Initialize first");
                result.Done(BundleErrorCode.NotInitialized);
                yield break;
            }

#if UNITY_EDITOR
            if (UseAssetDatabase)
            {
                result.Result = new AssetbundleBuildManifest();
                result.Done(BundleErrorCode.Success);
                yield break;
            }
#endif

            var manifestReq = UnityWebRequest.Get(Utility.CombinePath(RemoteURL, AssetbundleBuildSettings.ManifestFileName).Replace('\\', '/'));
            yield return manifestReq.SendWebRequest();

            if(result.IsCancelled)
            {
                manifestReq.Dispose();
                yield break;
            }

            if(!Utility.CheckRequestSuccess(manifestReq))
            {
                result.Done(BundleErrorCode.NetworkError);
                yield break;
            }

            var remoteManifestJson = manifestReq.downloadHandler.text;
            manifestReq.Dispose();

            if (!AssetbundleBuildManifest.TryParse(remoteManifestJson, out var remoteManifest))
            {
                result.Done(BundleErrorCode.ManifestParseError);
                yield break;
            }

            result.Result = remoteManifest;
            result.Done(BundleErrorCode.Success);
        }

        /// <summary>
        /// Get download size of entire bundles(except cached)
        /// </summary>
        /// <param name="manifest">manifest you get from GetManifest() function</param>
        /// <param name="subsetNames">names that you interested among full bundle list(optional)</param>
        /// <returns></returns>
        public static long GetDownloadSize(AssetbundleBuildManifest manifest, IEnumerable<string> subsetNames = null)
        {
            if (!Initialized)
            {
                throw new System.Exception("BundleManager is not initialized");
            }

            long totalSize = 0;

            var bundleInfoList = subsetNames == null ? manifest.BundleInfos : manifest.CollectSubsetBundleInfoes(subsetNames);

            for (int i = 0; i < bundleInfoList.Count; i++)
            {
                var bundleInfo = bundleInfoList[i];
                var uselocalBundle = s_LocalBundles.TryGetValue(bundleInfo.BundleName, out var localHash) && localHash == bundleInfo.Hash;
                if (!uselocalBundle && !Caching.IsVersionCached(bundleInfo.AsCached))
                    totalSize += bundleInfo.Size;
            }

            return totalSize;
        }


        /// <summary>
        /// acutally download assetbundles load from cache if cached 
        /// </summary>
        /// <param name="manifest">manifest you get from GetManifest() function</param>
        /// <param name="subsetNames">names that you interested among full bundle list(optional)</param>
        public static BundleAsyncOperation<bool> DownloadAssetBundles(AssetbundleBuildManifest manifest, IEnumerable<string> subsetNames = null)
        {
            var result = new BundleAsyncOperation<bool>();
            s_Helper.StartCoroutine(CoDownloadAssetBundles(manifest, subsetNames, result));
            return result;
        }

        static IEnumerator CoDownloadAssetBundles(AssetbundleBuildManifest manifest, IEnumerable<string> subsetNames, BundleAsyncOperation<bool> result)
        {
            if (!Initialized)
            {
                Debug.LogError("Do Initialize first");
                result.Done(BundleErrorCode.NotInitialized);
                yield break;
            }

#if UNITY_EDITOR
            if(UseAssetDatabase)
            {
                result.Done(BundleErrorCode.Success);
                yield break;
            }
#endif

            var bundlesToUnload = new HashSet<string>(s_AssetBundles.Keys);
            var downloadBundleList = subsetNames == null ? manifest.BundleInfos : manifest.CollectSubsetBundleInfoes(subsetNames);
            var bundleReplaced = false; //bundle has been replaced
            
            //temp dictionaries to apply very last
            var bundleRequests = new Dictionary<string, UnityWebRequest>();
            var loadedBundles = new Dictionary<string, LoadedBundle>();

            result.SetIndexLength(downloadBundleList.Count);
            
            for (int i = 0; i < downloadBundleList.Count; i++)
            {
                result.SetCurrentIndex(i);
                var bundleInfo = downloadBundleList[i];

                //remove from the set so we can track bundles that should be cleared
                bundlesToUnload.Remove(bundleInfo.BundleName);

                var islocalBundle = s_LocalBundles.TryGetValue(bundleInfo.BundleName, out var localHash) && localHash == bundleInfo.Hash;
                var isCached = Caching.IsVersionCached(bundleInfo.AsCached);
                result.SetCachedBundle(isCached);

                var loadURL = islocalBundle ? Utility.CombinePath(LocalURL, bundleInfo.BundleName) : Utility.CombinePath(RemoteURL, bundleInfo.BundleName);
                if (LogMessages) Debug.Log($"Loading Bundle Name : {bundleInfo.BundleName}, loadURL {loadURL}, isLocalBundle : {islocalBundle}, isCached {isCached}");
                LoadedBundle previousBundle;

                if (s_AssetBundles.TryGetValue(bundleInfo.BundleName, out previousBundle) && previousBundle.Hash == bundleInfo.Hash)
                {
                    if (LogMessages) Debug.Log($"Loading Bundle Name : {bundleInfo.BundleName} Complete - load skipped");
                }
                else
                {
                    var bundleReq = islocalBundle ? UnityWebRequestAssetBundle.GetAssetBundle(loadURL) : UnityWebRequestAssetBundle.GetAssetBundle(loadURL, bundleInfo.AsCached);
                    var operation = bundleReq.SendWebRequest();
                    while (!bundleReq.isDone)
                    {
                        result.SetProgress(operation.progress);
                        yield return null;
                        if(result.IsCancelled) break;
                    }

                    if(result.IsCancelled)
                    {
                        bundleReq.Dispose();
                        break;
                    }

                    if(!Utility.CheckRequestSuccess(bundleReq))
                    {
                        result.Done(BundleErrorCode.NetworkError);
                        yield break;
                    }

                    var loadedBundle = new LoadedBundle(bundleInfo, loadURL, null, islocalBundle);
                    bundleRequests.Add(bundleInfo.BundleName, bundleReq);
                    loadedBundles.Add(bundleInfo.BundleName, loadedBundle);
                    if (LogMessages) Debug.Log($"Loading Bundle Name : {bundleInfo.BundleName} Complete");
                }
            }

            if(result.IsCancelled)
            {
                foreach(var kv in bundleRequests)
                {
                    kv.Value.Dispose();
                }
                yield break;
            }

            foreach(var kv in bundleRequests)
            {
                var loadedBundle = loadedBundles[kv.Key];
                if (s_AssetBundles.TryGetValue(loadedBundle.Name, out var previousBundle))
                {
                    bundleReplaced = true;
                    previousBundle.Bundle.Unload(false);
                    if (previousBundle.RequestForReload != null) 
                        previousBundle.RequestForReload.Dispose(); //dispose reload bundle
                }
                loadedBundle.Bundle = DownloadHandlerAssetBundle.GetContent(kv.Value);
                CollectSceneNames(loadedBundle);
                s_AssetBundles[loadedBundle.Name] = loadedBundle;
                kv.Value.Dispose();
            }

            //let's drop unknown bundles loaded
            foreach(var name in bundlesToUnload)
            {
                var bundleInfo = s_AssetBundles[name];
                bundleInfo.Bundle.Unload(false);
                if (bundleInfo.RequestForReload != null)
                    bundleInfo.RequestForReload.Dispose(); //dispose reload bundle
                s_AssetBundles.Remove(bundleInfo.Name);
            }

            //bump entire bundles' usage timestamp
            //we use manifest directly to find out entire list
            for (int i = 0; i < manifest.BundleInfos.Count; i++)
            {
                var cachedInfo = manifest.BundleInfos[i].AsCached;
                if (Caching.IsVersionCached(cachedInfo)) Caching.MarkAsUsed(cachedInfo);
            }

            if (LogMessages) Debug.Log($"CacheUsed Before Cleanup : {Caching.defaultCache.spaceOccupied} bytes");
            Caching.ClearCache(600); //as we bumped entire list right before clear, let it be just 600
            if (LogMessages) Debug.Log($"CacheUsed After CleanUp : {Caching.defaultCache.spaceOccupied} bytes");

            PlayerPrefs.SetString("CachedManifest", JsonUtility.ToJson(manifest));
            GlobalBundleHash = manifest.GlobalHash.ToString();
            result.Result = bundleReplaced;
            result.Done(BundleErrorCode.Success);
        }

        //helper class for coroutine and callbacks
        private class BundleManagerHelper : MonoBehaviour
        {
            private void Update()
            {
                BundleManager.Update();
            }

            private void OnDestroy()
            {
                BundleManager.OnDestroy();
            }
        }
    }
}
