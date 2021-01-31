using System.IO;
using System.Threading.Tasks;
using ET;
using UnityEngine;

namespace SEyesET
{
	public class PuertsLoaderComponent : Entity, Puerts.ILoader
	{
		private PuertsComponent puertsComp;
		private string debugRoot { get; set; }
		
		
		public void Awake(string pDebugRoot)
		{
			debugRoot = pDebugRoot;
			puertsComp = Parent as PuertsComponent;
			
			Log.Info("PuertsLoaderComponent  Awake finish..,");
		}
		
		public virtual bool FileExists(string filepath)
		{
			filepath = filepath.Replace("puerts/", "");
			return puertsComp.ContainsKey(filepath);
		}

		public virtual string ReadFile(string filepath, out string debugpath)
		{
			debugpath = Path.Combine(debugRoot, $"{filepath}.txt");
			
#if UNITY_EDITOR_WIN || UNITY_STANDALONE_WIN
			debugpath = debugpath.Replace("/", "\\");
#endif
			
			string jsName = filepath.Replace("puerts/", "");
			string jsText = string.Empty;
			puertsComp.TryGetJsFromCache(jsName, out jsText);
			return jsText;
		}

		public virtual async Task PreloadJs()
		{
			var _jsTextAssets = await Game.Scene.GetComponent<AdsResComponent>().GetAllJSListAsync("JS");
			puertsComp.CacheJsFromTextAssetList(_jsTextAssets);
		}

		public override void Dispose()
		{
			if (this.IsDisposed)
			{
				return;
			}
			base.Dispose();
		}
	}
	
		
	// [ObjectSystem]
	// public class PuertsLoaderComponentAwakeSystem : AwakeSystem<PuertsLoaderComponent, string>
	// {
	// 	public override void Awake(PuertsLoaderComponent self, string pDebugRoot)
	// 	{
	// 		Log.Info("<<<<<"+self);
	// 		self.Awake(pDebugRoot);
	// 	}
	// 	
	// }
}