using System.Threading.Tasks;
using ET.EventType;

namespace ET
{
    public class LoadingFinishEventAsyncRemoveLoadingUI : AEvent<EventType.LoadingFinish>
    {
        protected override void Run(LoadingFinish args)
        {
            UIHelper.Create(args.Scene, UIType.UILoading, UILayer.Mid).Coroutine();
        }
    }
}
