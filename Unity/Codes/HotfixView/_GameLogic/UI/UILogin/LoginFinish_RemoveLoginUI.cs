

using System.Threading.Tasks;
using ET.EventType;

namespace ET
{
	public class LoginFinish_RemoveFUILogin: AEvent<EventType.LoginFinish>
	{
		protected override void Run(LoginFinish args)
		{
			FUIHelper.Close(FUIType.FUILoginPanel, args.ZoneScene);
		}
	}
}
