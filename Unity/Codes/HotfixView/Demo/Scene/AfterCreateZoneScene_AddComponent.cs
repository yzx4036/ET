using System.Threading.Tasks;
using ET.EventType;

namespace ET
{
    public class AfterCreateZoneScene_AddComponent: AEvent<EventType.AfterCreateZoneScene>
    {
        protected override void Run(AfterCreateZoneScene args)
        {
            Scene zoneScene = args.ZoneScene;
            zoneScene.AddComponent<UIEventComponent>();
            zoneScene.AddComponent<UIComponent>();
            // zoneScene.AddComponent<ResourcesLoaderComponent>();
        }
    }
}