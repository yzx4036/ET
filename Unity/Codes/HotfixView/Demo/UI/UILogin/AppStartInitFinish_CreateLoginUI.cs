

using System;
using System.Threading.Tasks;

namespace ET
{
	public class AppStartInitFinish_CreateLoginUI: AEvent<EventType.AppStartInitFinish>
	{
		protected override void Run(EventType.AppStartInitFinish args)
		{
			UIHelper.Create(args.ZoneScene, UIType.UILogin, UILayer.Mid).Coroutine();
			FUIHelper.Open<FUILoginPanel>(fui =>
			{
				fui.AddComponent<FUILoginComponent>();
				// fui.AddComponent<FUIMessageComponent, string>(args.Message);
			});
		}
	}
}
