using System;
using FairyGUI;
using UnityEngine;

//添加一些供lua调用的静态方法

namespace Y0StudioSoft.Common
{
    public static class Util
    {
        public static int GetHashCode(string str)
        {
            return str.GetHashCode();
        }

        #region FUI

        /// <summary>
        /// 由于翻译后的Lua代码在xlua环境下调用AddPackage(byte[] descData, string assetNamePrefix, LoadResourceAsync loadFunc)
        /// 时，LoadResourceAsync委托和LoadResource混淆导致报错，故使用静态调用封装一下
        /// </summary>
        /// <param name="descData"></param>
        /// <param name="assetNamePrefix"></param>
        /// <param name="loadFunc"></param>
        /// <returns></returns>
        public static UIPackage FUiUIPackageAddPackageCallbackAsync(byte[] descData, string assetNamePrefix, UIPackage.LoadResourceAsync loadFunc)
        {
            return UIPackage.AddPackage(descData, assetNamePrefix, loadFunc);
        }

        #endregion

    }
}
