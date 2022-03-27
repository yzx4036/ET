using System;
using System.Collections;
using System.Collections.Generic;
using System.Runtime.CompilerServices;
using System.Threading.Tasks;
using JetBrains.Annotations;
using UnityEngine;
using UnityEngine.AddressableAssets;
using UnityEngine.AddressableAssets.ResourceLocators;
using UnityEngine.ResourceManagement.AsyncOperations;
using UnityEngine.ResourceManagement.ResourceLocations;
using UnityEngine.ResourceManagement.ResourceProviders;
using UnityEngine.SceneManagement;
using UnityEngine.U2D;
using static UnityEngine.AddressableAssets.Addressables;
using Log = ET.Log;
using sObject = System.Object;
using uObject = UnityEngine.Object;

/// <summary>
/// 1.预加载资源属于常驻内存不会被释放
/// 2.现版本只查询ResourceLocators[0],不知道是否会存在需要遍历ResourceLocators的情况
/// </summary>
namespace SEyesSoft
{
    public class AddressableMgr: SingerMonoManager<AddressableMgr>
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
        public async Task InitAddressableAsync(Action complete, Action<float, long> progress = null, Action<Exception> error = null)
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
                await _InitAddressable();
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

        public async Task InitPreloadResAsync(Action complete, Action<float> progress = null, Action<Exception> error = null)
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
            await _InitPreload();
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

        public async Task<TObject> LoadAssetAsync<TObject>(sObject key)
        {
            if (CheckAddressableInited(true))
            {
                return await Addressables.LoadAssetAsync<TObject>(key).Task;
            }

            return default;
        }

        public async Task<TObject> LoadAssetSync<TObject>(sObject key)
        {
            if (!CheckAddressableInited(true))
            {
                return default;
            }

            return await Addressables.LoadAssetAsync<TObject>(key).Task;
        }

        [ItemCanBeNull]
        public async Task<IList<TObject>> LoadAssetsAsync<TObject>(IEnumerable keys, MergeMode mode = MergeMode.Union)
        {
            if (!CheckAddressableInited(true))
            {
                return default;
            }

            var handler = Addressables.LoadAssetsAsync<TObject>(keys, null, mode);
            IList<TObject> result = await handler.Task;
            Addressables.Release(handler);
            return result;
        }

        public async Task<GameObject> InstantiateAsync(sObject key, Transform parent = null, bool instantiateInWorldSpace = false)
        {
            GameObject go = null;
            if (!CheckAddressableInited(true))
            {
                return go;
            }
            var handler = Addressables.InstantiateAsync(key, parent, instantiateInWorldSpace);
            go = await handler.Task;
            return go;
        }
        
        public GameObject InstantiateSync(sObject key, Action<GameObject> complete = null, Transform parent = null, bool instantiateInWorldSpace = false)
        {
            GameObject newInstGo = null;
            if (!CheckAddressableInited(true))
            {
                return newInstGo;
            }

            var handler = Addressables.InstantiateAsync(key, parent, instantiateInWorldSpace);
            handler.WaitForCompletion();
            if (complete != null)
            {
                if (handler.Status == AsyncOperationStatus.Failed)
                {
                    Debug.LogError(handler.OperationException.Message);
                }
                else
                {
                    newInstGo = handler.Result;
                    complete(newInstGo);
                }
            }
            return newInstGo;
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

        public async Task LoadSceneAsync(sObject key, Action<AsyncOperationHandle<SceneInstance>> complete = null,
        LoadSceneMode loadMode = LoadSceneMode.Single, bool activateOnLoad = true)
        {
            if (!CheckAddressableInited(true))
            {
                return;
            }

            var handler = Addressables.LoadSceneAsync(key, loadMode, activateOnLoad);
            await handler.Task;
            handler.Completed += (obj) =>
            {
                if (obj.Status == AsyncOperationStatus.Failed)
                {
                    Debug.LogError(obj.OperationException.Message);
                }

                complete.Invoke(obj);
                complete = null;
            };
            Addressables.Release(handler);

        }

        public async Task UnloadSceneAsync(AsyncOperationHandle<SceneInstance> sceneHandle, Action<bool> complete = null)
        {
            var handler = Addressables.UnloadSceneAsync(sceneHandle);
            await handler.Task;

            handler.Completed += (obj) =>
            {
                if (obj.Status == AsyncOperationStatus.Succeeded)
                {
                    complete.Invoke(true);
                }
                else
                {
                    Debug.LogError(obj.OperationException.Message);
                    complete.Invoke(false);
                }

                complete = null;
            };
            Addressables.Release(handler);
        }

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
        private async Task _InitAddressable()
        {
            var initHandler = Addressables.InitializeAsync();
            await initHandler.Task;
            await _HotUpdate();

            _initCor = null;
            _isInited = true;
            _initCompleteCallback?.Invoke();
            _initCompleteCallback = null;
            _initProgressCallback = null;
        }

        private async Task _HotUpdate()
        {
            Debug.Log("检查Catalog");
            var checkHandler = Addressables.CheckForCatalogUpdates(false);
            var updateList = await checkHandler.Task;
            if (checkHandler.Status == AsyncOperationStatus.Failed)
            {
                _initErrorCallback?.Invoke(checkHandler.OperationException);
                Addressables.Release(checkHandler);
                return;
            }

            if (updateList.Count > 0)
            {
                Debug.Log("开始更新Catalog");
                var updateHandler = Addressables.UpdateCatalogs(updateList, false);
                await updateHandler.Task;
                if (updateHandler.Status == AsyncOperationStatus.Failed)
                {
                    _initErrorCallback?.Invoke(updateHandler.OperationException);
                    return;
                }

                Addressables.Release(updateHandler);
            }

            Addressables.Release(checkHandler);
            Debug.Log("Catalog检查完毕");

            Debug.Log("检查下载内容");
            foreach (var locator in Addressables.ResourceLocators)
            {
                var sizeHandler = Addressables.GetDownloadSizeAsync(locator.Keys);
                long downloadSize = await sizeHandler.Task;
                if (sizeHandler.Status == AsyncOperationStatus.Failed)
                {
                    _initErrorCallback?.Invoke(sizeHandler.OperationException);
                    Addressables.Release(sizeHandler);
                    return;
                }

                Addressables.Release(sizeHandler);
                if (downloadSize > 0)
                {
                    _initProgressCallback?.Invoke(0f, downloadSize);
                    var downloadHandler = Addressables.DownloadDependenciesAsync(locator.Keys, Addressables.MergeMode.Union, false);
                    await downloadHandler.Task;
                    while (!downloadHandler.IsDone)
                    {
                        _initProgressCallback?.Invoke(downloadHandler.PercentComplete, downloadSize);
                    }

                    if (downloadHandler.Status == AsyncOperationStatus.Failed)
                    {
                        _initErrorCallback?.Invoke(downloadHandler.OperationException);
                        return;
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

        private async Task _InitPreload()
        {
            _preloadProgressCallback?.Invoke(0f);
            await _InitPreloadRes();
            if (IsAssetBundle)
            {
                _preloadProgressCallback?.Invoke(0.5f);
                // await _InitPreloadLua();
            }

            _preloadProgressCallback?.Invoke(0.75f);
            // yield return StartCoroutine(_InitPreloadProto());
            _preloadProgressCallback?.Invoke(1f);

            Debug.Log("预加载资源完成");
            _preloadCor = null;
            _preloadCompleteCallback?.Invoke();
            _preloadCompleteCallback = null;
            _preloadProgressCallback = null;
        }

        private async Task _InitPreloadRes()
        {
            Debug.Log("预加载资源文件");
            foreach (var locator in Addressables.ResourceLocators)
            {
                if (locator.Locate(PRELOAD_FILE_KEY, typeof (TextAsset), out var locations))
                {
                    var preloadHandler = Addressables.LoadAssetAsync<TextAsset>(locations[0]);
                    await preloadHandler.Task;
                    if (preloadHandler.Status == AsyncOperationStatus.Failed)
                    {
                        _preloadErrorCallback?.Invoke(preloadHandler.OperationException);
                        ReleaseHandle(preloadHandler);
                        return;
                    }

                    string fileStr = preloadHandler.Result.text;
                    ReleaseHandle(preloadHandler);
                    if (!string.IsNullOrEmpty(fileStr))
                    {
                        fileStr = fileStr.Replace("\r\n", "\n");
                        List<String> resPathList = new List<String>();
                        resPathList.AddRange(fileStr.Split('\n'));
                        preloadResHandler = Addressables.LoadAssetsAsync<uObject>(resPathList, null, Addressables.MergeMode.Union);
                        var resHandler = preloadResHandler.Value;
                        await resHandler.Task;
                        while (!resHandler.IsDone)
                        {
                            _preloadProgressCallback?.Invoke(0.5f * resHandler.PercentComplete);
                        }

                        if (resHandler.Status == AsyncOperationStatus.Failed)
                        {
                            _preloadErrorCallback?.Invoke(resHandler.OperationException);
                            ReleaseHandle(resHandler);
                            return;
                        }
                        ReleaseHandle(resHandler);
                    }

                    Debug.Log("预加载资源文件完成");
                }

                break;
            }
        }

        private IEnumerator _InitPreloadLua()
        {
            Debug.Log("预加载lua代码");
            foreach (var locator in Addressables.ResourceLocators)
            {
                if (locator.Locate("lua", typeof (TextAsset), out var locations))
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
                    ReleaseHandle(luaHandler);
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

            ReleaseHandle(protoHandler);
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