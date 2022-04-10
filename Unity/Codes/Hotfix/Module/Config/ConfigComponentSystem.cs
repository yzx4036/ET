using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace ET
{
	[ObjectSystem]
    public class ConfigAwakeSystem : AwakeSystem<ConfigComponent>
    {
        public override void Awake(ConfigComponent self)
        {
	        ConfigComponent.Instance = self;
        }
    }
    
    [ObjectSystem]
    public class ConfigDestroySystem : DestroySystem<ConfigComponent>
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
			byte[] oneConfigBytes =  await self.ConfigLoader.GetOneConfigBytes(configType.FullName);

			Log.Info($">>>>>>>>>>>>LoadOneConfig {configType.Name}");
			object category = ProtobufHelper.FromBytes(configType, oneConfigBytes, 0, oneConfigBytes.Length);

			self.AllConfig[configType] = category;
		}
		
		public static void Load(this ConfigComponent self)
		{
			self.AllConfig.Clear();
			List<Type> types = Game.EventSystem.GetTypes(typeof (ConfigAttribute));
			
			Dictionary<string, byte[]> configBytes = new Dictionary<string, byte[]>();
			self.ConfigLoader.GetAllConfigBytes(configBytes);

			foreach (Type type in types)
			{
				self.LoadOneInThread(type, configBytes);
			}
		}
		
		public static async Task LoadAsync(this ConfigComponent self)
		{
			self.AllConfig.Clear();
			List<Type> types = Game.EventSystem.GetTypes(typeof (ConfigAttribute));
			
			Dictionary<string, byte[]> configBytes = new Dictionary<string, byte[]>();
			await self.ConfigLoader.GetAllConfigBytes(configBytes);
			foreach (Type type in types)
			{
				self.LoadOneInThread(type, configBytes);
			}
		}

		private static void LoadOneInThread(this ConfigComponent self, Type configType, Dictionary<string, byte[]> configBytes)
		{
			try
			{
				byte[] oneConfigBytes = configBytes[configType.Name];

				object category = ProtobufHelper.FromBytes(configType, oneConfigBytes, 0, oneConfigBytes.Length);
				
				lock (self)
				{
					self.AllConfig[configType] = category;	
				}
			}
			catch (Exception e)
			{
				Log.Error($"加载配置{configType.Name} 出错  {e}" );
			}
			
		}
	}
}