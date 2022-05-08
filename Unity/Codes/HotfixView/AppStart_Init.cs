using System.Threading.Tasks;
using ET.EventType;
using Y0StudioSoft.ET;

namespace ET
{
    public class AppStart_Init: AEvent<EventType.AppStart>
    {
        protected override void Run(AppStart args)
        {
            RunAsync(args).Coroutine();
        }
        
        private async ETTask RunAsync(EventType.AppStart args)
        {
            Game.Scene.AddComponent<TimerComponent>();
            Game.Scene.AddComponent<CoroutineLockComponent>();
            // 加载配置
            // Game.Scene.AddComponent<ResourcesComponent>();
            Game.Scene.AddComponent<AddressablesResComponent>();
            // await ResourcesComponent.Instance.LoadBundleAsync("config.unity3d");
            Game.Scene.AddComponent<ConfigComponent>();
            await ConfigComponent.Instance.LoadAsync();
            // ResourcesComponent.Instance.UnloadBundle("config.unity3d");
            
            Game.Scene.AddComponent<OpcodeTypeComponent>();
            Game.Scene.AddComponent<MessageDispatcherComponent>();
            
            Game.Scene.AddComponent<NetThreadComponent>();
            Game.Scene.AddComponent<SessionStreamDispatcher>();
            Game.Scene.AddComponent<ZoneSceneManagerComponent>();
            
            Game.Scene.AddComponent<GlobalComponent>();
            Game.Scene.AddComponent<NumericWatcherComponent>();
            Game.Scene.AddComponent<AIDispatcherComponent>();
            // await ResourcesComponent.Instance.LoadBundleAsync("unit.unity3d");
            var _fUIInitComponent = Game.Scene.AddComponent<FUIInitComponent>();
            await _fUIInitComponent.Init();
            Scene zoneScene = SceneFactory.CreateZoneScene(1, "Game", Game.Scene);
            
            await Game.EventSystem.PublishAsync(new EventType.AppStartInitFinish() { ZoneScene = zoneScene });
            await ETTask.CompletedTask;
        }
    }
}
