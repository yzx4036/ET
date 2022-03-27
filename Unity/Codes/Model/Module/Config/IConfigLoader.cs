using System.Collections.Generic;
using System.Threading.Tasks;

namespace ET
{
    public interface IConfigLoader
    {
        Task GetAllConfigBytes(Dictionary<string, byte[]> output);
        byte[] GetOneConfigBytes(string configName);
    }
}