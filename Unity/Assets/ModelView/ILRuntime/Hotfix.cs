using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading;
using ET;
using UnityEngine;
using Object = ET.Object;

#if ILRuntime
using System.Reflection;
#endif

namespace SEyesET
{
	public sealed class Hotfix: Object
	{
		private static Hotfix _inst;

		public static Hotfix inst
		{
			get
			{
				return _inst ??= new Hotfix();
			}
		}
		
#if ILRuntime
		private ILRuntime.Runtime.Enviorment.AppDomain appDomain;
		private MemoryStream hotFixDllStream;
		private MemoryStream hotFixPdbStream;
		private MemoryStream hotFixViewDllStream;
		private MemoryStream hotFixViewPdbStream;
#else
		private Assembly assembly;
		private Assembly viewAssembly;
#endif

		private IStaticMethod start;
		private List<Type> hotfixTypes;

		public Action Update;
		public Action LateUpdate;
		public Action OnApplicationQuit;

		public Hotfix()
		{
			appDomain.UnityMainThreadID = Thread.CurrentThread.ManagedThreadId;
			appDomain.DebugService.StartDebugService(56000);
		}

		public void GotoHotfix()
		{
#if ILRuntime
			ILHelper.InitILRuntime(this.appDomain);
#endif
			this.start.Run();
		}

		public List<Type> GetHotfixTypes()
		{
			return this.hotfixTypes;
		}

		public void LoadHotfixAssembly()
		{
			Game.Scene.GetComponent<ResourcesComponent>().LoadBundle($"code.unity3d");
			GameObject code = (GameObject)Game.Scene.GetComponent<ResourcesComponent>().GetAsset("code.unity3d", "Code");
			
			byte[] assBytes = code.GetComponent<ReferenceCollector>().Get<TextAsset>("Hotfix.dll").bytes;
			byte[] pdbBytes = code.GetComponent<ReferenceCollector>().Get<TextAsset>("Hotfix.pdb").bytes;
			byte[] viewAssBytes = code.GetComponent<ReferenceCollector>().Get<TextAsset>("HotfixView.dll").bytes;
			byte[] viewPdbBytes = code.GetComponent<ReferenceCollector>().Get<TextAsset>("HotfixView.pdb").bytes;
			
#if ILRuntime
			Log.Debug($"当前使用的是ILRuntime模式");
			this.appDomain = new ILRuntime.Runtime.Enviorment.AppDomain();
			
			this.hotFixDllStream = new MemoryStream(assBytes);
			this.hotFixPdbStream = new MemoryStream(pdbBytes);
			this.hotFixViewDllStream = new MemoryStream(viewAssBytes);
			this.hotFixViewPdbStream = new MemoryStream(viewPdbBytes);
			
			this.appDomain.LoadAssembly(this.hotFixDllStream, this.hotFixPdbStream, new ILRuntime.Mono.Cecil.Pdb.PdbReaderProvider());
			this.appDomain.LoadAssembly(this.hotFixViewDllStream, this.hotFixViewPdbStream, new ILRuntime.Mono.Cecil.Pdb.PdbReaderProvider());

			this.start = new ILStaticMethod(this.appDomain, "ETHotfix.Init", "Start", 0);
			
			this.hotfixTypes = this.appDomain.LoadedTypes.Values.Select(x => x.ReflectionType).ToList();
#else
			Log.Debug($"当前使用的是Mono模式");

			this.assembly = Assembly.Load(assBytes, pdbBytes);
			this.viewAssembly = Assembly.Load(viewAssBytes, viewPdbBytes);

			Type hotfixInit = this.assembly.GetType("ETHotfix.Init");
			this.start = new MonoStaticMethod(hotfixInit, "Start");
			
			this.hotfixTypes.AddRange(this.assembly.GetTypes().ToList());
			this.hotfixTypes.AddRange(this.viewAssembly.GetTypes().ToList());
#endif
			
			Game.Scene.GetComponent<ResourcesComponent>().UnloadBundle($"code.unity3d");
		}
	}
}