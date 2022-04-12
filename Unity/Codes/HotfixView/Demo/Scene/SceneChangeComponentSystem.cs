using SEyesSoft.ET;
using UnityEngine.SceneManagement;

namespace ET
{
    public class SceneChangeComponentUpdateSystem: UpdateSystem<SceneChangeComponent>
    {
        public override void Update(SceneChangeComponent self)
        {
            if (!self.loadMapOperation.HasValue)
            {
                return;
            }

            if (self.loadMapOperation.Value.IsDone)
            {
                return;
            }

            self.Process();
        }
    }
	
    
    public class SceneChangeComponentDestroySystem: DestroySystem<SceneChangeComponent>
    {
        public override void Destroy(SceneChangeComponent self)
        {
            self.loadMapOperation = null;
            self.tcs = null;
        }
    }

    [FriendClass(typeof(SceneChangeComponent))]
    public static class SceneChangeComponentSystem
    {
        public static async ETTask ChangeSceneAsync(this SceneChangeComponent self, string sceneName)
        {
            // self.tcs = ETTask.Create(true);
            // // 加载map
            // self.loadMapOperation = SceneManager.LoadSceneAsync(sceneName);
            // //this.loadMapOperation.allowSceneActivation = false;
            // await self.tcs;
            Log.Debug($">>>>>>ChangeSceneAsync :{sceneName}");
            await AddressablesResComponent.Instance.LoadSceneAsync(sceneName, handle =>
            {
                self.loadMapOperation = handle;
            });
        }
        
        public static void Process(this SceneChangeComponent self)
        {
            if (!self.loadMapOperation.HasValue)
            {
                return;
            }
            var _progress  = (int)(self.loadMapOperation.Value.PercentComplete * 100);
            Log.Debug($">>>>>>Process :{_progress}");
        }
    }
}