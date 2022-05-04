

using System.Threading.Tasks;
using ET.EventType;

namespace ET
{
	public class LoginFinish_CreateLobbyUI: AEvent<EventType.LoginFinish>
	{
		protected override void Run(LoginFinish args)
		{
			UIHelper.Create(args.ZoneScene, UIType.UILobby, UILayer.Mid).Coroutine();
		}
	}
}
