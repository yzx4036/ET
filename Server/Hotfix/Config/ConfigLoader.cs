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
        }
        
        public byte[] GetOneConfigBytes(string configName)
        {
            byte[] configBytes = File.ReadAllBytes($"../Config/{configName}.bytes");
            return configBytes;
        }
    }
}