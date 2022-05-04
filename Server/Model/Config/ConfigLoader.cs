using System.Collections.Generic;
using System.IO;
using System.Threading.Tasks;

namespace ET
{
    public class ConfigLoader: IConfigLoader
    {
        public async Task GetAllConfigBytes(Dictionary<string, byte[]> output)
        {
            foreach (string file in Directory.GetFiles($"../Config", "*.bytes"))
            {
                string key = Path.GetFileNameWithoutExtension(file);
                output[key] = await File.ReadAllBytesAsync(file);
            }
            output["StartMachineConfigCategory"] = File.ReadAllBytes($"../Config/{Game.Options.StartConfig}/StartMachineConfigCategory.bytes");
            output["StartProcessConfigCategory"] = File.ReadAllBytes($"../Config/{Game.Options.StartConfig}/StartProcessConfigCategory.bytes");
            output["StartSceneConfigCategory"] = File.ReadAllBytes($"../Config/{Game.Options.StartConfig}/StartSceneConfigCategory.bytes");
            output["StartZoneConfigCategory"] = File.ReadAllBytes($"../Config/{Game.Options.StartConfig}/StartZoneConfigCategory.bytes");
        }
        
        public async Task<byte[]> GetOneConfigBytes(string configName)
        {
            byte[] configBytes =  await File.ReadAllBytesAsync($"../Config/{configName}.bytes");
            return configBytes;
        }
    }
}