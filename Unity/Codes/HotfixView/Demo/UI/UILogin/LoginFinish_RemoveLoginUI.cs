

using System.Threading.Tasks;
using ET.EventType;

namespace ET
{
	public class LoginFinish_RemoveLoginUI: AEvent<EventType.LoginFinish>
	{
		protected override void Run(LoginFinish args)
		{
			UIHelper.Remove(args.ZoneScene, UIType.UILogin).Coroutine();
		}
	}
}
