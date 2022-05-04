using System.Threading.Tasks;
using ET.EventType;
using UnityEngine;

namespace ET
{
    public class LoadingBeginEventAsyncCreateLoadingUI : AEvent<EventType.LoadingBegin>
    {
        protected override void Run(LoadingBegin args)
        {
            UIHelper.Create(args.Scene, UIType.UILoading, UILayer.Mid).Coroutine();
        }
    }
}
