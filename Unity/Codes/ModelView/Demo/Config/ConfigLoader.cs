using System.Collections.Generic;
using System.Threading.Tasks;
using Y0StudioSoft.ET;
using UnityEngine;

namespace ET
{
       public class ConfigLoader: IConfigLoader
    {
        public async Task GetAllConfigBytes(Dictionary<string, byte[]> output)
        {
            Debug.Log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>SSSSSSSSSSSSSSSSS");
            var _textAssetList = await AddressablesResComponent.Instance.GetAssetsAsync<TextAsset>("config");
            foreach (var textAsset in _textAssetList)
            {
                string key = textAsset.name;
                output[key] = textAsset.bytes;
            }
        }

        public async Task<byte[]> GetOneConfigBytes(string configName)
        {
            TextAsset v = await AddressablesResComponent.Instance.GetAssetAsync<TextAsset>(configName);
            return v.bytes;
        }
    }
}