using System;
using System.Linq;
using System.Reflection;
using System.Threading;
using SEyesET;
using UnityEngine;

namespace ET
{
	public class Startup : MonoBehaviour
	{
		private void Start()
		{
			try
			{
				SynchronizationContext.SetSynchronizationContext(ThreadSynchronizationContext.Instance);
				
				DontDestroyOnLoad(gameObject);

				string[] assemblyNames = { "Unity.Model.dll", "Unity.ModelView.dll"};
				
				foreach (Assembly assembly in AppDomain.CurrentDomain.GetAssemblies())
				{
					string assemblyName = assembly.ManifestModule.Name;
					if (!assemblyNames.Contains(assemblyName))
					{
						continue;
					}
					Game.EventSystem.Add(assembly);	
				}
				
				Hotfix.inst.LoadHotfixAssembly();

				ProtobufHelper.Init();
				
				Game.Options = new Options();
				
				Hotfix.inst.GotoHotfix();
				
				Game.EventSystem.Publish(new EventType.AppStart());
			}
			catch (Exception e)
			{
				Log.Error(e);
			}
		}

		private void Update()
		{
			ThreadSynchronizationContext.Instance.Update();
			Game.EventSystem.Update();
		}

		private void LateUpdate()
		{
			Game.EventSystem.LateUpdate();
		}
		
		private void FixedUpdate()
		{
			Game.EventSystem.FixedUpdate();
		}

		private void OnApplicationFocus(bool hasFocus)
		{
			Game.EventSystem.OnApplicationFocus(hasFocus);
		}

		private void OnApplicationPause(bool pauseStatus)
		{
			Game.EventSystem.OnApplicationFocus(pauseStatus);
		}

		private void OnApplicationQuit()
		{
			Game.Close();
		}
	}
}