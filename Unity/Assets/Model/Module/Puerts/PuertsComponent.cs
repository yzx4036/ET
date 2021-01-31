using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using ET;
using UnityEngine;

namespace SEyesET
{
	public class PuertsComponent : Entity
	{
		public Dictionary<string, string> CacheJsDict = new Dictionary<string, string>();
		public bool IsPreload { get; set; }
		
		public delegate void JavaScriptMain(PuertsComponent instance);
		public bool WaitForDebugger = false;
		public int DebuggerPort = 8810;
		public string DebuggerRoot = System.IO.Path.Combine($"{Application.dataPath}/Res/Js");
		public Puerts.JsEnv jsEnv { get; private set; }

		public Action OnJsStart;
		public Action OnJsUpdate;
		public Action OnJsLateUpdate;
		public Action OnJsFixedUpdate;
		public Action<bool> OnJsApplicationFocus;
		public Action<bool> OnJsApplicationPause;
		public Action OnJsApplicationQuit;
		
		public void Awake()
		{
			IsPreload = false;
			
			var _loaderComp = this.AddComponent<PuertsLoaderComponent>();
			_loaderComp.Awake(DebuggerRoot);
			
			Log.Info("PuertsComponent  Awake finish..,"); 
		}
		
		
		
		protected virtual void RegisterClasses(Puerts.JsEnv env) {
			env.UsingAction<int>();
			env.UsingAction<float>();
			env.UsingAction<string>();
			env.UsingAction<string, string>();
			env.UsingAction<bool>();
		}
		
		public async Task Start()
		{
			Log.Info("PuertsComponent  Start");
			try
			{
				var _puertsLoaderComp = GetComponent<PuertsLoaderComponent>();
				await _puertsLoaderComp.PreloadJs();
				
				jsEnv = new Puerts.JsEnv(_puertsLoaderComp, DebuggerPort);
				RegisterClasses(jsEnv);
				if (WaitForDebugger) {
					jsEnv.WaitDebugger();
				}
			
				var javascript_main = jsEnv.Eval<JavaScriptMain>("require('bootstrap');");
				javascript_main(this);
				OnJsStart?.Invoke();
			}
			catch (Exception e)
			{ 
				Log.Error(e.ToString());
			}
		}

		public bool ContainsKey(string pName)
		{
			return CacheJsDict.ContainsKey(pName);
		}

		public bool TryGetJsFromCache(string pName, out string txt)
		{
			return CacheJsDict.TryGetValue(pName, out txt);
		}
		
		public void CacheJsFromTextAssetList(IList<TextAsset> pTextAssetsList)
		{
			IsPreload = false;
			CacheJsDict.Clear();
			foreach (var textAsset in pTextAssetsList)
			{
				var _name = textAsset.name.ToLower().Contains(".js") ? textAsset.name : $"{textAsset.name}.js";
				CacheJsDict.Add(_name, textAsset.text);
			}
			
			if (CacheJsDict.Count > 0)
				IsPreload = true;
		}

		public void Update()
		{
			OnJsUpdate?.Invoke();
			jsEnv?.Tick();
		}
		
		public void LateUpdate()
		{
			OnJsLateUpdate?.Invoke();
		}
		
		public void FixedUpdate()
		{
			OnJsFixedUpdate?.Invoke();
		}

		public void OnApplicationPause(bool isPause)
		{
			OnJsApplicationPause?.Invoke(isPause);
		}

		public void OnApplicationFocus(bool isFocus)
		{
			OnJsApplicationFocus?.Invoke(isFocus);
		}
		
		public override void Dispose()
		{
			OnJsApplicationQuit?.Invoke();
			jsEnv?.Dispose();
			CacheJsDict.Clear();
		}
	}


	[ObjectSystem]
	public class PuertsComponentAwakeSystem : AwakeSystem<PuertsComponent>
	{
		public override void Awake(PuertsComponent self)
		{
			self.Awake();
		}
	}
	
	[ObjectSystem]
	public class PuertsComponentStartSystem : StartSystem<PuertsComponent>
	{
		public override void Start(PuertsComponent self)
		{
			self.Start();
		}
		
	}
	
	[ObjectSystem]
	public class PuertsComponentUpdateSystem : UpdateSystem<PuertsComponent>
	{
		public override void Update(PuertsComponent self)
		{
			self.Update();
		}
	}

	[ObjectSystem]
	public class PuertsComponentLateUpdateSystem : LateUpdateSystem<PuertsComponent>
	{
		public override void LateUpdate(PuertsComponent self)
		{
			self.LateUpdate();
		}
	}
	
	[ObjectSystem]
	public class PuertsComponentFixedUpdateSystem : FixedUpdateSystem<PuertsComponent>
	{
		public override void FixedUpdate(PuertsComponent self)
		{
			self.FixedUpdate();
		}
	}
	
	[ObjectSystem]
	public class PuertsComponentonOnApplicationFocusSystem : OnApplicationFocusSystem<PuertsComponent>
	{
		public override void OnApplicationFocus(PuertsComponent self, bool pIsFocus)
		{
			self.OnApplicationFocus(pIsFocus);
		}
	}
	
	[ObjectSystem]
	public class PuertsComponentonOnApplicationPauseSystem : OnApplicationPauseSystem<PuertsComponent>
	{
		public override void OnApplicationPause(PuertsComponent self, bool pIsPause)
		{
			self.OnApplicationPause(pIsPause);
		}
	}
}
