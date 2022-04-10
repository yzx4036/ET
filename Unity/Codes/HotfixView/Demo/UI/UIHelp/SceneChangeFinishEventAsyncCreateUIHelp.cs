using System.Threading.Tasks;
using ET.EventType;

namespace ET
{
    public class SceneChangeFinishEventAsyncCreateUIHelp : AEvent<EventType.SceneChangeFinish>
    {
        protected override void Run(SceneChangeFinish args)
        {
            UIHelper.Create(args.CurrentScene, UIType.UIHelp, UILayer.Mid).Coroutine();
        }
    }
}
