using System.Threading.Tasks;
using ET.EventType;

namespace ET
{
    public class EventSystemOnLoadTypes_FUIHelperInit: AEvent<EventType.EventSystemOnLoadTypes>
    {
        protected override void Run(EventSystemOnLoadTypes a)
        {
            FUIHelper.Init();
        }
    }
}