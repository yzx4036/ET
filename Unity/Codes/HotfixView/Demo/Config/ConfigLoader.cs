using System.Collections.Generic;
using System.Threading.Tasks;
using SEyesSoft.ET;
using UnityEngine;

namespace ET
{
    public class ConfigLoader: IConfigLoader
    {
        public async Task GetAllConfigBytes(Dictionary<string, byte[]> output)
        {
            Debug.Log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>SSSSSSSSSSSSSSSSS");
            var keys = await ResComponent.Instance.GetBundleAll("config");
            foreach (var kv in keys)
            {
                TextAsset v = kv as TextAsset;
                string key = v.name;
                output[key] = v.bytes;
            }
        }

        public byte[] GetOneConfigBytes(string configName)
        {
            TextAsset v = ResourcesComponent.Instance.GetAsset("config.unity3d", configName) as TextAsset;
            return v.bytes;
        }
    }
}