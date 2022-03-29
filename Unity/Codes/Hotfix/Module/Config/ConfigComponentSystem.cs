using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace ET
{
    [ObjectSystem]
    public class ConfigAwakeSystem: AwakeSystem<ConfigComponent>
    {
        public override void Awake(ConfigComponent self)
        {
            ConfigComponent.Instance = self;
        }
    }

    [ObjectSystem]
    public class ConfigDestroySystem: DestroySystem<ConfigComponent>
    {
        public override void Destroy(ConfigComponent self)
        {
            ConfigComponent.Instance = null;
        }
    }

    public static class ConfigComponentSystem
    {
        public static async Task LoadOneConfig(this ConfigComponent self, Type configType)
        {
            byte[] oneConfigBytes = await self.ConfigLoader.GetOneConfigBytes(configType.FullName);

            object category = ProtobufHelper.FromBytes(configType, oneConfigBytes, 0, oneConfigBytes.Length);

            self.AllConfig[configType] = category;
        }

        public static void Load(this ConfigComponent self)
        {
            self.AllConfig.Clear();
            HashSet<Type> types = Game.EventSystem.GetTypes(typeof (ConfigAttribute));

            Dictionary<string, byte[]> configBytes = new Dictionary<string, byte[]>();
            self.ConfigLoader.GetAllConfigBytes(configBytes);

            foreach (Type type in types)
            {
                if (configBytes.ContainsKey(type.Name))
                {
                    self.LoadOneInThread(type, configBytes[type.Name]);
                }
            }
        }

        public static async ETTask LoadAsync(this ConfigComponent self)
        {
            self.AllConfig.Clear();
            HashSet<Type> types = Game.EventSystem.GetTypes(typeof (ConfigAttribute));

            Dictionary<string, byte[]> configBytes = new Dictionary<string, byte[]>();
            await self.ConfigLoader.GetAllConfigBytes(configBytes);
            foreach (var configByte in configBytes)
            {
                Log.Debug($">>>>>>>>>>>configByte {configByte.Key}");
            }

            using (ListComponent<Task> listTasks = ListComponent<Task>.Create())
            {
                foreach (Type type in types)
                {
                    if (configBytes.ContainsKey(type.Name))
                    {
                        Task task = Task.Run(() =>
                        {
                            self.LoadOneInThread(type, configBytes[type.Name]);
                        });
                        listTasks.Add(task);
                    }
                }

                await Task.WhenAll(listTasks.ToArray());
            }
        }

        private static void LoadOneInThread(this ConfigComponent self, Type configType, byte[] oneConfigBytes)
        {
            try
            {
                if (oneConfigBytes == null)
                {
                    return;
                }
                Log.Debug($">>>>>>>>>>>LoadOneInThread   configType:{configType.Name} {oneConfigBytes.Length}");
                object category = ProtobufHelper.FromBytes(configType, oneConfigBytes, 0, oneConfigBytes.Length);
                Log.Debug($">>>>>>>>>>>LoadOneInThread1111111111   configType:{configType.Name} {oneConfigBytes.Length}");

                lock (self)
                {
                    self.AllConfig[configType] = category;
                }
            }
            catch (Exception e)
            {
                Log.Error($"type:{configType.Name}!!!!!!!!!!!!!!!!!!!!!!><<<{e}");
            }
        }
    }
}