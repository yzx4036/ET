using System.Collections.Generic;
using System.Threading.Tasks;

namespace ET
{
    public interface IConfigLoader
    {
        Task GetAllConfigBytes(Dictionary<string, byte[]> output);
        Task<byte[]> GetOneConfigBytes(string configName);
    }
}