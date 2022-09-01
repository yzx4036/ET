using UnityEngine;
using Y0StudioSoft.ET;
using UnityEngine.SceneManagement;

namespace ET
{
    [FriendClass(typeof(SceneChangeComponent))]
    public static class SceneChangeComponentSystem
    {
        [ObjectSystem]
        public class SceneChangeComponentAwakeSystem: AwakeSystem<SceneChangeComponent>
        {
            public override void Awake(SceneChangeComponent self)
            {
                self.loadMapOperation = default;
            }
        }

        
        public class SceneChangeComponentUpdateSystem: UpdateSystem<SceneChangeComponent>
        {
            public override void Update(SceneChangeComponent self)
            {
                if (!self.loadMapOperation.IsValid())
                {
                    return;
                }

                if (self.loadMapOperation.IsDone)
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
                self.loadMapOperation = default;
                self.tcs = null;
            }
        }

        public static async ETTask ChangeSceneAsync(this SceneChangeComponent self, string sceneName)
        {
            if (self.loadMapOperation.IsValid() && self.loadMapOperation.IsDone)
            {
                await AddressablesResComponent.Instance.UnLoadSceneAsync(self.loadMapOperation);
            }
            
            await AddressablesResComponent.Instance.LoadSceneAsync(sceneName, handle =>
            {
                self.loadMapOperation = handle;
            });
        }
        
        public static void Process(this SceneChangeComponent self)
        {
            if (!self.loadMapOperation.IsValid())
            {
                return;
            }
            var _progress  = (int)(self.loadMapOperation.PercentComplete * 100);
            Log.Debug($">>>>>>Process :{_progress}");
        }
    }
}