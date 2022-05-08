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

        private static StringBuilder _sb = null;

        public static string GetPath(string assetPath, AssetsType type)
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
    }
}