using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using UnityEngine;

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
        private static StringBuilder _sb = null;

        public static Type GetType(AssetsType assetType)
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


        public static string GetPath(string pPkgName, string pAssetName, AssetsType type, string extension = "")
        {
            if (_sb == null)
            {
                _sb = new StringBuilder();
            }

            _sb.Clear();

            switch (type)
            {
                case AssetsType.FUI:
                    _sb.AppendFormat($"Assets/Bundles/FUI/{pPkgName}/{pAssetName}_fui.bytes");
                    break;
                case AssetsType.FUISprite:
                    _sb.AppendFormat($"Assets/Bundles/FUI/{pPkgName}/{pAssetName}{extension}");
                    break;
            }

            return _sb.ToString();
        }

        public static string GetPath(string pAssetName, AssetsType type, string extension = "")
        {
            if (_sb == null)
            {
                _sb = new StringBuilder();
            }

            _sb.Clear();

            switch (type)
            {
                case AssetsType.UI:
                    extension = "prefab";
                    _sb.AppendFormat($"Assets/Bundles/UI/{pAssetName}.prefab");
                    break;
                case AssetsType.Prefab:
                    _sb.AppendFormat($"Assets/Bundles/Prefabs/{pAssetName}");
                    break;
                case AssetsType.TextAsset:
                    _sb.AppendFormat($"Assets/Bundles/TextAsset/{pAssetName}");
                    break;
                case AssetsType.Texture:
                case AssetsType.Sprite:
                    _sb.AppendFormat($"Assets/Bundles/Textures/{pAssetName}");
                    break;
                case AssetsType.Config:
                    _sb.AppendFormat($"Assets/Bundles/Config/{pAssetName}.bytes");
                    break;
                case AssetsType.Scene:
                    _sb.AppendFormat($"Assets/_Scenes/HotScene/{pAssetName}.unity");
                    break;
                default:
                    _sb.AppendFormat($"Assets/Bundles/{pAssetName}");
                    break;
            }

            return _sb.ToString();
        }
    }
}