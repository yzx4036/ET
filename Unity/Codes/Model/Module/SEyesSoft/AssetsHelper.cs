using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using UnityEngine;
using UnityFS;
using UnityFS.Utils;

namespace ET
{
    public enum AssetsType
    {
        Prefab,
        TextAsset,
        Texture,
        Sprite,
        Config,
        UI,
        FUI,
        FUISprite,
        Scene,
    }

    public static class AssetsHelper
    {
        /// <summary>
        /// 同步加载资源, 统一使用回调形式
        /// </summary>
        /// <param name="path">文件名(带热更资源下目录、带后辍)</param>
        /// <param name="type">类型</param>
        /// <param name="create">是否创建实例</param>
        /// <returns></returns>
        public static void LoadAsset<T>(string assetPath, AssetsType type, Action<T> onCompleteCallback = null, bool isCreate = false)
            where T : UnityEngine.Object
        {
            string path = GetPath(assetPath, type);
            if (isCreate)
            {
                var pLoader = ResourceManager.Instantiate(path);
                pLoader.completed += loader =>
                {
                    if (onCompleteCallback != null)
                    {
                        onCompleteCallback(pLoader.target as T);
                    }
                };
            }

            ResourceManager.TryLoadAssetSync(path, typeof(T), asset =>
            {
                if (onCompleteCallback != null)
                {
                    onCompleteCallback(asset.GetObject() as T);
                }
            });
        }

        /// <summary>
        /// 异步加载资源
        /// </summary>
        /// <param name="path">文件名(带热更资源下目录、带后辍)</param>
        /// <param name="assetType">类型</param>
        /// <param name="create">异步加载完成后是否创建实例</param>
        /// <returns></returns>
        public static async ETTask<T> LoadAssetAsync<T>(string assetPath, AssetsType assetType, bool create = false)
            where T : UnityEngine.Object
        {
            string path = GetPath(assetPath, assetType);
            ETTask<T> tcs = ETTask<T>.Create();
            var uAsset = ResourceManager.LoadAssetAsync(path, typeof(T), null);
            // Debug .Log($">>>>>>>LoadAssetAsync {path} {uAsset.isValid} {uAsset.isLoaded}");

            //如果已经加载完成则直接返回结果（适用于编辑器模式下的异步写法和重复加载）
            if (uAsset.isValid && uAsset.isLoaded)
            {
                tcs.SetResult(uAsset.GetObject() as T);
                return await tcs;
            }

            //+=委托链，否则会导致前面完成委托被覆盖
            uAsset.completed += (asset) =>
            {
                var a = asset.GetObject();
                tcs.SetResult(a as T);
            };
            return await tcs;
        }

        private static Type GetType(AssetsType assetType)
        {
            Type type = default;
            switch (assetType)
            {
                case AssetsType.UI:
                case AssetsType.Prefab:
                    type = typeof(GameObject);
                    break;
                case AssetsType.FUI:
                case AssetsType.Config:
                case AssetsType.TextAsset:
                    type = typeof(TextAsset);
                    break;
                case AssetsType.Texture:
                    type = typeof(Texture2D);
                    break;
                case AssetsType.Sprite:
                    type = typeof(Sprite);
                    break;
            }

            return type;
        }

        private static StringBuilder _sb = null;

        private static string GetPath(string assetPath, AssetsType type)
        {
            if (_sb == null)
            {
                _sb = new StringBuilder();
            }

            _sb.Clear();

            switch (type)
            {
                case AssetsType.UI:
                    _sb.AppendFormat($"Assets/Bundles/UI/{assetPath}.prefab");
                    break;
                case AssetsType.Prefab:
                    _sb.AppendFormat($"Assets/Bundles/Prefabs/{assetPath}");
                    break;
                case AssetsType.TextAsset:
                    _sb.AppendFormat($"Assets/Bundles/TextAsset/{assetPath}");
                    break;
                case AssetsType.Texture:
                case AssetsType.Sprite:
                    _sb.AppendFormat($"Assets/Bundles/Textures/{assetPath}");
                    break;
                case AssetsType.Config:
                    _sb.AppendFormat($"Assets/Bundles/Config/{assetPath}.bytes");
                    break;
                case AssetsType.FUI:
                    _sb.AppendFormat($"Assets/Bundles/FUI/{assetPath}.bytes");
                    break;
                case AssetsType.FUISprite:
                    _sb.AppendFormat($"Assets/Bundles/FUI/{assetPath}");
                    break;
                case AssetsType.Scene:
                    _sb.AppendFormat($"Assets/_Scenes/HotScene/{assetPath}.unity");
                    break;
                default:
                    _sb.AppendFormat($"Assets/Bundles/{assetPath}");
                    break;
            }

            return _sb.ToString();
        }

        public static async ETTask<UScene> LoadSceneAsync(string path)
        {
            string scenePath = GetPath(path, AssetsType.Scene);
            ETTask<UScene> tcs = ETTask<UScene>.Create(false);
            UScene uScene = ResourceManager.LoadScene(scenePath);
            uScene.completed += (arq) => { tcs.SetResult(arq); };
            return await tcs;
        }
    }
}