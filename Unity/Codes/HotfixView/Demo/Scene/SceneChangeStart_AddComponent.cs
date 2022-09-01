using System.Threading.Tasks;
using ET.EventType;

namespace ET
{
    public class SceneChangeStart_AddComponent: AEvent<EventType.SceneChangeStart>
    {
        protected override void Run(SceneChangeStart args)
        {
            RunAsync(args).Coroutine();
        }

        private async ETTask RunAsync(EventType.SceneChangeStart args)
        {
            Scene currentScene = args.ZoneScene.CurrentScene();

            // 加载场景资源
            // await ResourcesComponent.Instance.LoadBundleAsync($"{currentScene.Name}.unity3d");
            // 切换到map场景
            Log.Debug($"><<<SRunAsync currentScene.Name {currentScene.Name}");
            SceneChangeComponent sceneChangeComponent = null;
            try
            {
                sceneChangeComponent = Game.Scene.GetComponent<SceneChangeComponent>();
                if (sceneChangeComponent == null)
                {
                    sceneChangeComponent = Game.Scene.AddComponent<SceneChangeComponent>();
                }

                await sceneChangeComponent.ChangeSceneAsync(currentScene.Name);
            }
            finally
            {
                // sceneChangeComponent?.Dispose();
            }

            currentScene.AddComponent<OperaComponent>();
        }
    }
}