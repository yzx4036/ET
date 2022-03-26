using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.AddressableAssets;
using UnityEngine.ResourceManagement.AsyncOperations;
using UnityEngine.SceneManagement;
using UnityEngine.U2D;
using static UnityEngine.AddressableAssets.Addressables;
using sObject = System.Object;
using uObject = UnityEngine.Object;

/// <summary>
/// 1.预加载资源属于常驻内存不会被释放
/// 2.现版本只查询ResourceLocators[0],不知道是否会存在需要遍历ResourceLocators的情况
/// </summary>
namespace SEyesSoft
{
    public class AddressableMgr : SingerMonoManager<AddressableMgr>
    {
        //private struct LoadingData
        //{
        //    public AsyncOperationHandle handler;
        //    public Action complete;
        //    public Action<float> progress;
        //}

        private static readonly string PRELOAD_FILE_KEY = "Assets/preload.bytes";
        private static readonly string LUA_BYTES_PATH = "Assets/LuaBytes/{0}.bytes";
        private static readonly string LUA_FILE_PATH = "{0}/LuaScripts/{1}.lua";
        private static readonly string PROTO_FILE_DIR = "{0}/Pb";
        private static readonly string ATLAS_PATH = "Assets/Res/UI/Atlas/{0}.spriteatlas";
        //private static AddressableMgr _instance = null;
        //private static GameObject _instanceGO = null;

        private Action _initCompleteCallback = null;
        private Action<float, long> _initProgressCallback = null;
        private Action<Exception> _initErrorCallback = null;
        private Action _preloadCompleteCallback = null;
        private Action<float> _preloadProgressCallback = null;
        private Action<Exception> _preloadErrorCallback = null;
        private bool _isInited = false;
        private Coroutine _initCor = null;
        private Coroutine _preloadCor = null;
        private AsyncOperationHandle<IList<uObject>>? preloadResHandler;

        private Dictionary<string, byte[]> _luaBytesDic = new Dictionary<string, byte[]>();
        private byte[][] _protoFileBytes = null;
        public static bool IsAssetBundle
        {
            get
            {
#if UNITY_EDITOR
                return UnityEditor.AddressableAssets.AddressableAssetSettingsDefaultObject.Settings.ActivePlayModeDataBuilderIndex == 2;
#else
                return true;
#endif
            }
        }

        protected AddressableMgr()
        {

        }

        //***********************************公共方法*************************************
        public void InitAddressableAsync(Action complete, Action<float, long> progress = null, Action<Exception> error = null)
        {
            if (_initCor != null)
            {
                Debug.LogError($"AddressableMgr正在初始化，请勿重复调用");
                return;
            }
            if (_isInited)
            {
                progress?.Invoke(1f, 0);
                complete?.Invoke();
            }
            else
            {
                _initProgressCallback = progress;
                _initCompleteCallback = complete;
                _initErrorCallback = error;
                _initCor = StartCoroutine(_InitAddressable());
            }
        }

        public bool CheckAddressableInited(bool showLog = false)
        {
            if (showLog && !_isInited)
            {
                Debug.LogError("AddressableMgr未完成初始化");
            }
            return _isInited;
        }

        public void InitPreloadResAsync(Action complete, Action<float> progress = null, Action<Exception> error = null)
        {
            if (!CheckAddressableInited(true))
            {
                return;
            }
            if (_preloadCor != null)
            {
                Debug.LogError("预加载正在加载中，请勿重复调用");
                return;
            }
            ReleasePreloadRes();
            _preloadCompleteCallback = complete;
            _preloadProgressCallback = progress;
            _preloadErrorCallback = error;
            _preloadCor = StartCoroutine(_InitPreload());
        }

        public void ReleasePreloadRes()
        {
            ReleaseProtoFile();
            _luaBytesDic.Clear();
            if (preloadResHandler != null)
            {
                Addressables.Release(preloadResHandler.Value);
                preloadResHandler = null;
            }
        }

        public byte[] LoadLuaBytes(string path)
        {
            if (CheckAddressableInited(true))
            {
                path = path.Replace(".", "/");
                if (IsAssetBundle)
                {
                    path = string.Format(LUA_BYTES_PATH, path);
                    if (_luaBytesDic.ContainsKey(path))
                    {
                        return _luaBytesDic[path];
                    }
                }
                else
                {
#if UNITY_EDITOR
                    path = string.Format(LUA_FILE_PATH, Application.dataPath, path);
                    if (System.IO.File.Exists(path))
                    {
                        return System.IO.File.ReadAllBytes(path);
                    }
#endif
                }
            }
            return null;
        }

        public byte[][] LoadProtoFile()
        {
            if (CheckAddressableInited(true))
            {
                return _protoFileBytes;
//                if (IsAssetBundle)
//                {
//                    return _protoFileBytes;
//                }
//                else
//                {
//#if UNITY_EDITOR
//                    System.IO.DirectoryInfo di = new System.IO.DirectoryInfo(string.Format(PROTO_FILE_DIR, Application.dataPath));
//                    var fiArr = di.GetFiles("*.bytes");
//                    int count = fiArr.Length;
//                    byte[][] fileBytes = new byte[count][];
//                    for (int i = 0; i < count; i++)
//                    {
//                        fileBytes[i] = System.IO.File.ReadAllBytes(fiArr[i].FullName);
//                    }
//                    return fileBytes;
//#endif
//                }
            }
            return null;
        }

        public void ReleaseProtoFile()
        {
            _protoFileBytes = null;
        }

        public void LoadAssetAsync<TObject>(sObject key, Action<TObject> complete = null)
        {
            if (!CheckAddressableInited(true))
            {
                return;
            }
            var handler = Addressables.LoadAssetAsync<TObject>(key);
            if (complete != null)
            {
                handler.Completed += (obj) =>
                {
                    if (obj.Status == AsyncOperationStatus.Failed)
                    {
                        Debug.LogError(obj.OperationException.Message);
                    }
                    complete.Invoke(obj.Result);
                    complete = null;
                };
            }
        }

        public void LoadAssetSync<TObject>(sObject key, Action<TObject> complete = null)
        {
            if (!CheckAddressableInited(true))
            {
                return;
            }
            var handler = Addressables.LoadAssetAsync<TObject>(key);
            handler.WaitForCompletion();
            if (complete != null)
            {
                if (handler.Status == AsyncOperationStatus.Failed)
                {
                    Debug.LogError(handler.OperationException.Message);
                }
                complete.Invoke(handler.Result);
            }
        }

        public void LoadAssetsAsync<TObject>(IEnumerable keys, Action<AsyncOperationHandle<IList<TObject>>> complete = null, MergeMode mode = MergeMode.Union)
        {
            if (!CheckAddressableInited(true))
            {
                return;
            }
            var handler = Addressables.LoadAssetsAsync<TObject>(keys, null, mode);
            if (complete != null)
            {
                handler.Completed += (obj) =>
                {
                    if (obj.Status == AsyncOperationStatus.Failed)
                    {
                        Debug.LogError(obj.OperationException.Message);
                    }
                    complete.Invoke(obj);
                    complete = null;
                };
            }
        }

        public void LoadAssetsSync<TObject>(IEnumerable keys, Action<AsyncOperationHandle<IList<TObject>>> complete = null, MergeMode mode = MergeMode.Union)
        {
            if (!CheckAddressableInited(true))
            {
                return;
            }
            var handler = Addressables.LoadAssetsAsync<TObject>(keys, null, mode);
            handler.WaitForCompletion();
            if (complete != null)
            {
                if (handler.Status == AsyncOperationStatus.Failed)
                {
                    Debug.LogError(handler.OperationException.Message);
                }
                complete.Invoke(handler);
            }
        }

        public void InstantiateAsync(sObject key, Action<GameObject> complete = null, Transform parent = null, bool instantiateInWorldSpace = false)
        {
            if (!CheckAddressableInited(true))
            {
                return;
            }
            var handler = Addressables.InstantiateAsync(key, parent, instantiateInWorldSpace);
            if (complete != null)
            {
                handler.Completed += (obj) =>
                {
                    if (obj.Status == AsyncOperationStatus.Failed)
                    {
                        Debug.LogError(obj.OperationException.Message);
                    }
                    complete.Invoke(obj.Result);
                    complete = null;
                };
            }
        }

        public void InstantiateSync(sObject key, Action<GameObject> complete = null, Transform parent = null, bool instantiateInWorldSpace = false)
        {
            if (!CheckAddressableInited(true))
            {
                return;
            }
            var handler = Addressables.InstantiateAsync(key, parent, instantiateInWorldSpace);
            handler.WaitForCompletion();
            if (complete != null)
            {
                if (handler.Status == AsyncOperationStatus.Failed)
                {
                    Debug.LogError(handler.OperationException.Message);
                }
                complete.Invoke(handler.Result);
            }
        }

        public void ReleaseObject<TObject>(TObject obj)
        {
            Addressables.Release(obj);
        }

        public void ReleaseHandle<T>(AsyncOperationHandle<T> handle)
        {
            Addressables.Release(handle);
        }

        public bool ReleaseInstance(GameObject instance)
        {
            return Addressables.ReleaseInstance(instance);
        }
        //
        // public void LoadSceneAsync(sObject key, Action<AsyncOperationHandle<SceneInstance>> complete = null, LoadSceneMode loadMode = LoadSceneMode.Single, bool activateOnLoad = true)
        // {
        //     if (!CheckAddressableInited(true))
        //     {
        //         return;
        //     }
        //     var handler = Addressables.LoadSceneAsync(key, loadMode, activateOnLoad);
        //     if (complete != null)
        //     {
        //         handler.Completed += (obj) =>
        //         {
        //             if (obj.Status == AsyncOperationStatus.Failed)
        //             {
        //                 Debug.LogError(obj.OperationException.Message);
        //             }
        //             complete.Invoke(obj);
        //             complete = null;
        //         };
        //     }
        // }
        //
        // public void LoadSceneSync(sObject key, Action<AsyncOperationHandle<SceneInstance>> complete = null, LoadSceneMode loadMode = LoadSceneMode.Single, bool activateOnLoad = true)
        // {
        //     if (!CheckAddressableInited(true))
        //     {
        //         return;
        //     }
        //     var handler = Addressables.LoadSceneAsync(key, loadMode, activateOnLoad);
        //     handler.WaitForCompletion();
        //     if (complete != null)
        //     {
        //         if (handler.Status == AsyncOperationStatus.Failed)
        //         {
        //             Debug.LogError(handler.OperationException.Message);
        //         }
        //         complete.Invoke(handler);
        //     }
        // }
        //
        // public void UnloadSceneAsync(AsyncOperationHandle<SceneInstance> sceneHandle, Action<bool> complete = null)
        // {
        //     var handler = Addressables.UnloadSceneAsync(sceneHandle);
        //     if (complete != null)
        //     {
        //         handler.Completed += (obj) =>
        //         {
        //             if (obj.Status == AsyncOperationStatus.Succeeded)
        //             {
        //                 complete.Invoke(true);
        //             }
        //             else
        //             {
        //                 Debug.LogError(obj.OperationException.Message);
        //                 complete.Invoke(false);
        //             }
        //             complete = null;
        //         };
        //     }
        // }
        //
        // public void UnloadSceneSync(AsyncOperationHandle<SceneInstance> sceneHandle, Action<bool> complete = null)
        // {
        //     var handler = Addressables.UnloadSceneAsync(sceneHandle);
        //     handler.WaitForCompletion();
        //     if (complete != null)
        //     {
        //         if (handler.Status == AsyncOperationStatus.Succeeded)
        //         {
        //             complete.Invoke(true);
        //         }
        //         else
        //         {
        //             Debug.LogError(handler.OperationException.Message);
        //             complete.Invoke(false);
        //         }
        //     }
        // }

        //public void AtlasRequest(string atlasName, Action<SpriteAtlas> callback)
        //{
        //    string path = string.Format(ATLAS_PATH, atlasName);
        //    var handler = Addressables.LoadAssetAsync<SpriteAtlas>(path);
        //    if (handler.IsDone) //需要预加载完成
        //    {
        //        callback(handler.Result);
        //    }
        //    else
        //    {
        //        Debug.LogError("图集没有被预加载 atlasName = " + atlasName);
        //    }
        //    Addressables.Release(handler);
        //}

        public TObject GetPreloadRes<TObject>(string path) where TObject : uObject
        {
            var handler = Addressables.LoadAssetAsync<uObject>(path);
            TObject value = null;
            if (handler.IsDone)
            {
                value = handler.Result as TObject;
            }
            Addressables.Release(handler);
            return value;
        }

        //***********************************静态方法*************************************
        public static void StaticLoadAssetAsync<TObject>(sObject key, Action<TObject> complete = null)
        {
            Instance.LoadAssetAsync<TObject>(key, complete);
        }

        public static void StaticLoadAssetSync<TObject>(sObject key, Action<TObject> complete = null)
        {
            Instance.LoadAssetSync<TObject>(key, complete);
        }

        public static void StaticLoadAssetsAsync<TObject>(sObject[] keys, Action<AsyncOperationHandle<IList<TObject>>> complete = null, MergeMode mode = MergeMode.Union)
        {
            List<sObject> keyList = new List<sObject>();
            keyList.AddRange(keys);
            Instance.LoadAssetsAsync<TObject>(keyList, complete, mode);
        }

        public static void StaticLoadAssetsSync<TObject>(sObject[] keys, Action<AsyncOperationHandle<IList<TObject>>> complete = null, MergeMode mode = MergeMode.Union)
        {
            List<sObject> keyList = new List<sObject>();
            keyList.AddRange(keys);
            Instance.LoadAssetsSync<TObject>(keyList, complete, mode);
        }

        public static void StaticInstantiateAsync(sObject key, Action<GameObject> complete = null, Transform parent = null, bool instantiateInWorldSpace = false)
        {
            Instance.InstantiateAsync(key, complete, parent, instantiateInWorldSpace);
        }

        public static void StaticInstantiateSync(sObject key, Action<GameObject> complete = null, Transform parent = null, bool instantiateInWorldSpace = false)
        {
            Instance.InstantiateSync(key, complete, parent, instantiateInWorldSpace);
        }

        public static void StaticReleaseObject<TObject>(TObject obj)
        {
            Instance.ReleaseObject(obj);
        }

        public static void StaticReleaseHandle<T>(AsyncOperationHandle<T> handle)
        {
            Instance.ReleaseHandle(handle);
        }

        public static bool StaticReleaseInstance(GameObject instance)
        {
            return Instance.ReleaseInstance(instance);
        }
        //
        // public static void StaticLoadSceneAsync(sObject key, Action<AsyncOperationHandle<SceneInstance>> complete = null, LoadSceneMode loadMode = LoadSceneMode.Single, bool activateOnLoad = true)
        // {
        //     Instance.LoadSceneAsync(key, complete, loadMode, activateOnLoad);
        // }
        //
        // public static void StaticLoadSceneSync(sObject key, Action<AsyncOperationHandle<SceneInstance>> complete = null, LoadSceneMode loadMode = LoadSceneMode.Single, bool activateOnLoad = true)
        // {
        //     Instance.LoadSceneSync(key, complete, loadMode, activateOnLoad);
        // }
        //
        // public static void StaticUnloadSceneAsync(AsyncOperationHandle<SceneInstance> sceneHandle, Action<bool> complete = null)
        // {
        //     Instance.UnloadSceneAsync(sceneHandle, complete);
        // }
        //
        // public static void StaticUnloadSceneSync(AsyncOperationHandle<SceneInstance> sceneHandle, Action<bool> complete = null)
        // {
        //     Instance.UnloadSceneSync(sceneHandle, complete);
        // }

        public static byte[][] StaticLoadProtoFile()
        {
            return Instance.LoadProtoFile();
        }

        public static void StaticReleaseProtoFile()
        {
            Instance.ReleaseProtoFile();
        }

        public static TObject StaticGetPreloadRes<TObject>(string path) where TObject : uObject
        {
            return Instance.GetPreloadRes<TObject>(path);
        }

        //***********************************私有方法*************************************
        private IEnumerator _InitAddressable()
        {
            var initHandler = Addressables.InitializeAsync();
            yield return initHandler;
            yield return StartCoroutine(_HotUpdate());
            yield return null;

            _initCor = null;
            _isInited = true;
            _initCompleteCallback?.Invoke();
            _initCompleteCallback = null;
            _initProgressCallback = null;
        }

        private IEnumerator _HotUpdate()
        {
            Debug.Log("检查Catalog");
            var checkHandler = Addressables.CheckForCatalogUpdates(false);
            yield return checkHandler;
            if (checkHandler.Status == AsyncOperationStatus.Failed)
            {
                _initErrorCallback?.Invoke(checkHandler.OperationException);
                yield break;
            }

            if (checkHandler.Result.Count > 0)
            {
                Debug.Log("开始更新Catalog");
                var updateHandler = Addressables.UpdateCatalogs(checkHandler.Result, false);
                yield return updateHandler;
                if (updateHandler.Status == AsyncOperationStatus.Failed)
                {
                    _initErrorCallback?.Invoke(updateHandler.OperationException);
                    yield break;
                }
                Addressables.Release(updateHandler);
            }
            Addressables.Release(checkHandler);
            Debug.Log("Catalog检查完毕");

            Debug.Log("检查下载内容");
            foreach (var locator in Addressables.ResourceLocators)
            {
                var sizeHandler = Addressables.GetDownloadSizeAsync(locator.Keys);
                yield return sizeHandler;
                if (sizeHandler.Status == AsyncOperationStatus.Failed)
                {
                    _initErrorCallback?.Invoke(sizeHandler.OperationException);
                    yield break;
                }

                long downloadSize = sizeHandler.Result;
                Addressables.Release(sizeHandler);
                if (downloadSize > 0)
                {
                    _initProgressCallback?.Invoke(0f, downloadSize);
                    var downloadHandler = Addressables.DownloadDependenciesAsync(locator.Keys, Addressables.MergeMode.Union, false);
                    while (!downloadHandler.IsDone)
                    {
                        _initProgressCallback?.Invoke(downloadHandler.PercentComplete, downloadSize);
                        yield return null;
                    }
                    if (downloadHandler.Status == AsyncOperationStatus.Failed)
                    {
                        _initErrorCallback?.Invoke(downloadHandler.OperationException);
                        yield break;
                    }

                    _initProgressCallback?.Invoke(1f, downloadSize);
                    Addressables.Release(downloadHandler);
                    Debug.Log("下载完成!");
                }
                else
                {
                    _initProgressCallback?.Invoke(1f, 0);
                    Debug.Log("无可下载文件");
                }
                break;
            }
            Debug.Log("更新完成");
        }

        private IEnumerator _InitPreload()
        {
            _preloadProgressCallback?.Invoke(0f);
            yield return StartCoroutine(_InitPreloadRes());
            if (IsAssetBundle)
            {
                _preloadProgressCallback?.Invoke(0.5f);
                yield return StartCoroutine(_InitPreloadLua());
            }
            _preloadProgressCallback?.Invoke(0.75f);
            yield return StartCoroutine(_InitPreloadProto());
            _preloadProgressCallback?.Invoke(1f);
            yield return null;

            Debug.Log("预加载资源完成");
            _preloadCor = null;
            _preloadCompleteCallback?.Invoke();
            _preloadCompleteCallback = null;
            _preloadProgressCallback = null;
        }

        private IEnumerator _InitPreloadRes()
        {
            Debug.Log("预加载资源文件");
            foreach (var locator in Addressables.ResourceLocators)
            {
                if (locator.Locate(PRELOAD_FILE_KEY, typeof(TextAsset), out var locations))
                {
                    var preloadHandler = Addressables.LoadAssetAsync<TextAsset>(locations[0]);
                    yield return preloadHandler;
                    if (preloadHandler.Status == AsyncOperationStatus.Failed)
                    {
                        _preloadErrorCallback?.Invoke(preloadHandler.OperationException);
                        yield break;
                    }

                    string fileStr = preloadHandler.Result.text;
                    Addressables.Release(preloadHandler);
                    if (!string.IsNullOrEmpty(fileStr))
                    {
                        fileStr = fileStr.Replace("\r\n", "\n");
                        List<String> resPathList = new List<String>();
                        resPathList.AddRange(fileStr.Split('\n'));
                        preloadResHandler = Addressables.LoadAssetsAsync<uObject>(resPathList, null, Addressables.MergeMode.Union);
                        var resHandler = preloadResHandler.Value;
                        while (!resHandler.IsDone)
                        {
                            _preloadProgressCallback?.Invoke(0.5f * resHandler.PercentComplete);
                            yield return null;
                        }
                        if (resHandler.Status == AsyncOperationStatus.Failed)
                        {
                            _preloadErrorCallback?.Invoke(resHandler.OperationException);
                            yield break;
                        }
                    }
                    Debug.Log("预加载资源文件完成");
                }
                break;
            }
            yield return null;
        }

        private IEnumerator _InitPreloadLua()
        {
            Debug.Log("预加载lua代码");
            foreach (var locator in Addressables.ResourceLocators)
            {
                if (locator.Locate("lua", typeof(TextAsset), out var locations))
                {
                    var luaHandler = Addressables.LoadAssetsAsync<TextAsset>(locations, null);
                    while (!luaHandler.IsDone)
                    {
                        _preloadProgressCallback?.Invoke(0.25f * luaHandler.PercentComplete + 0.5f);
                        yield return null;
                    }
                    if (luaHandler.Status == AsyncOperationStatus.Failed)
                    {
                        _preloadErrorCallback?.Invoke(luaHandler.OperationException);
                        yield break;
                    }

                    var assetList = luaHandler.Result;
                    for (int i = 0; i < assetList.Count; i++)
                    {
                        string key = locations[i].PrimaryKey;
                        //Debug.Log(string.Format("Key = {0}, value = {1}", key, obj.Result[i]));
                        if (_luaBytesDic.ContainsKey(key))
                        {
                            _luaBytesDic[key] = assetList[i].bytes;
                        }
                        else
                        {
                            _luaBytesDic.Add(key, assetList[i].bytes);
                        }
                    }
                    Addressables.Release(luaHandler);
                }
                else
                {
                    Debug.LogError("无法通过Labels定位Lua文件信息");
                }
                break;
            }
        }

        private IEnumerator _InitPreloadProto()
        {
            Debug.Log("预加载Proto代码");
            var protoHandler = Addressables.LoadAssetsAsync<TextAsset>(new List<string> { "pb" }, null, Addressables.MergeMode.Union);
            while (!protoHandler.IsDone)
            {
                _preloadProgressCallback?.Invoke(0.25f * protoHandler.PercentComplete + 0.75f);
                yield return null;
            }
            if (protoHandler.Status == AsyncOperationStatus.Failed)
            {
                _preloadErrorCallback?.Invoke(protoHandler.OperationException);
                yield break;
            }
            int count = protoHandler.Result.Count;
            _protoFileBytes = new byte[count][];
            for (int i = 0; i < count; i++)
            {
                _protoFileBytes[i] = protoHandler.Result[i].bytes;
            }
            Addressables.Release(protoHandler);
        }

        //private void Update()
        //{
        //    int loadingCnt = sceneLoadingList.Count;
        //    if(loadingCnt > 0)
        //    {
        //        for(int i = loadingCnt - 1; i >= 0; i--)
        //        {
        //            var data = sceneLoadingList[i];
        //            if (data.handler.IsDone)
        //            {
        //                data.progress?.Invoke(1f);
        //                data.complete?.Invoke(data.handler.Result);
        //                sceneLoadingList.RemoveAt(i);
        //            }
        //            else
        //            {
        //                data.progress?.Invoke(data.handler.PercentComplete);
        //            }
        //        }
        //    }
        //}

        private void OnDestroy()
        {
            ReleasePreloadRes();
            if (_initCor != null)
            {
                StopCoroutine(_initCor);
                _initCor = null;
            }
            if (_preloadCor != null)
            {
                StopCoroutine(_preloadCor);
                _preloadCor = null;
            }
            //_instanceGO = null;
            //_instance = null;
        }
    }
}
