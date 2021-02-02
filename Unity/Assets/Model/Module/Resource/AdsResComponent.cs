using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using FairyGUI;
using UnityEngine;
using ET;
using UnityEngine.AddressableAssets;

namespace SEyesET
{
	public class AdsResHelper
	{
		public static string GetAddressablePath(string pFileName)
		{
			return "";
		}
	}

	[ObjectSystem]
	public class AdsResComponentAwakeSystem : AwakeSystem<AdsResComponent>
	{
		public override void Awake(AdsResComponent self)
		{
			self.Awake();
		}
	}

	public class AdsResComponent : Entity
	{
		public void Awake()
		{
			NTexture.CustomDestroyMethod += t =>
			{
				Addressables.Release(t);
				Log.Info(".... release addressable: " + t.name);
			};
			//
			// if (Define.IsAsync)
			// {
			// 	LoadOneBundle("StreamingAssets");
			// 	AssetBundleManifestObject = (AssetBundleManifest)GetAsset("StreamingAssets", "AssetBundleManifest");
			// }
		}

		public override void Dispose()
		{
			base.Dispose();
		}
		
		
        public void ReleaseFGUIPackage(string packageName)
        {
            UIPackage.RemovePackage(packageName);
        }

        public async Task LoadFairyGUIPackage(string address, string packageName)
        {

            var pkgAsset = await Addressables.LoadAssetAsync<TextAsset>(address).Task;

            UIPackage.AddPackage(
                pkgAsset.bytes,
                packageName,
                async (string name, string extension, Type type, PackageItem ite) => {
                    Log.Info($"{name}, {extension}, {type.ToString()}, {ite.ToString()}");

                    if (type == typeof(Texture))
                    {
                        Texture t = await Addressables.LoadAssetAsync<Texture>(name + extension).Task;
                        ite.owner.SetItemAsset(ite, t, DestroyMethod.Custom);

                    }
                });
            Addressables.Release(pkgAsset);
 
        }
        //
        // public async Task<bool> PreadloadFB(string fbLabel)
        // {
        //     var list = await Addressables.LoadAssetsAsync<TextAsset>(fbLabel, null).Task;
        //
        //     if (list != null)
        //     {
        //         FlatBufferManager.Instance.ClearSkillCache();
        //
        //         foreach(var txt in list)
        //         {
        //             FlatBufferManager.Instance.AddSkillCache(txt);
        //
        //             OnFBLoadedHandle?.Invoke(txt.name, txt.bytes);
        //         }
        //         return true;
        //     }
        //     else
        //     {
        //         Log.InfoError("加载Flatbuffer失败......");
        //         return false;
        //     }
        // }
        //
        //
        public async Task<IList<TextAsset>> GetAllJSListAsync(string jsLabel)
        {
            var list = await Addressables.LoadAssetsAsync<TextAsset>(jsLabel, null).Task;
            if(list != null)
            {
	            return list;
            }
            Log.Info("加载JS失败......");
            return new List<TextAsset>();
        }

        public async Task<object> LoadAssetAsync(string address)
        {
	        return  await Addressables.LoadAssetAsync<object>(address).Task;
        }
        
        public async Task<GameObject> LoadPrefab(string address)
        {
	        return  await Addressables.LoadAssetAsync<GameObject>(address).Task;
        }


        public async Task<TextAsset> LoadTextAsset(string address)
        {
            var res = await Addressables.LoadAssetAsync<TextAsset>(address).Task;

            return res;
        }

        public async Task<Puerts.ArrayBuffer> LoadTextBytes(string address)
        {
            var res = await Addressables.LoadAssetAsync<TextAsset>(address).Task;

            return new Puerts.ArrayBuffer(res.bytes);
        }

        public async Task<Sprite> LoadSprite(string address)
        {
            var res = await Addressables.LoadAssetAsync<Sprite>(address).Task;
   
            return res;
        }

        public void ReleaseAddressGO(UnityEngine.Object go)
        {
            Addressables.Release(go);
        }

	}
}