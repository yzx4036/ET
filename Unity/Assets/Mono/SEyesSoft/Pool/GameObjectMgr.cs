using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using ET;
using UnityEngine;

namespace SEyesSoft
{
    public class GameObjectMgr : SingerMonoManager<GameObjectMgr>
    {
        private class PreLoadInfo
        {
            public string path;
            public int instNum;
            public Action callback;
        }

        private readonly int _maxPoolSize = 10;
        private Dictionary<string, GameObjectPool> _goPoolDic;
        private Dictionary<string, PreLoadInfo> _preloadDic;
        private Transform _poolRootTran = null;

        public override void OnStart()
        {
            _preloadDic = new Dictionary<string, PreLoadInfo>();
            _goPoolDic = new Dictionary<string, GameObjectPool>();
            GameObject rootObj = new GameObject();
            rootObj.name = "PoolObjRoot";
            rootObj.SetActive(false);
            GameObject.DontDestroyOnLoad(rootObj);
            _poolRootTran = rootObj.transform;
        }

        //***********************************公共方法*************************************
        public async Task<GameObject> GetGameObjectAsync(string path, Transform parent = null, bool instantiateInWorldSpace = false)
        {
            GameObject go = null;
            if (_goPoolDic.ContainsKey(path))
            {
                go = _goPoolDic[path].NextAvailableObject();
                if (go != null)
                {
                    // Debug.Log($">>>>>从池中拿{go.name} {go.GetInstanceID()}");
                    if (parent != null)
                    {
                        go.transform.SetParent(parent, instantiateInWorldSpace);
                    }
                }
            }
            else
            {
                go = await AddressableMgr.Instance.InstantiateAsync(path, parent, instantiateInWorldSpace);
                // Debug.Log($">>>>>新生成的  {go.name} {go.GetInstanceID()}");
            }

            return go;
        }

        public void RecycleGameObject(string path, GameObject ins)
        {
            if (!_goPoolDic.ContainsKey(path))
            {
                GameObjectPool pool = new GameObjectPool(path, _maxPoolSize, _poolRootTran, _ReleaseGameObject);
                _goPoolDic.Add(path, pool);
            }
            _goPoolDic[path].ReturnObjectToPool(path, ins);
        }

        public async Task PreloadGameObject(string path, int instNum, Action callback)
        {
            if (_preloadDic.ContainsKey(path))
            {
                Log.Error("预加载重复资源!!");
                return;
            }
            int curPoolNum = 0;
            if (_goPoolDic.TryGetValue(path, out var pool))
            {
                curPoolNum = pool.GetPoolObjectNum();
            }
            instNum = Mathf.Min(_maxPoolSize, instNum) - curPoolNum;
            if (instNum > 0)
            {
                PreLoadInfo info = new PreLoadInfo()
                {
                    path = path,
                    instNum = instNum,
                    callback = callback,
                };
                _preloadDic.Add(path, info);
                for (int i = 0; i < instNum; i++)
                {
                    var go = await AddressableMgr.Instance.InstantiateAsync(path);
                    _OnPreloadResLoaded(info, go);

                }
            }
            else
            {
                callback?.Invoke();
            }
        }

        public void ClearGameObjectPool()
        {
            foreach (var kv in _goPoolDic)
            {
                kv.Value.ClearPool();
            }
        }

        private void _ReleaseGameObject(GameObject ins)
        {
            AddressableMgr.Instance.ReleaseInstance(ins);
        }

        private void _OnPreloadResLoaded(PreLoadInfo info, GameObject go)
        {
            RecycleGameObject(info.path, go);
            if (--info.instNum <= 0)
            {
                _preloadDic.Remove(info.path);
                info?.callback.Invoke();
            }
        }
    }
}
