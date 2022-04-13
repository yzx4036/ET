

using System;
using System.Threading.Tasks;

namespace ET
{
	public class AppStartInitFinish_CreateFUILogin: AEventAsync<EventType.AppStartInitFinish>
	{
		protected override async ETTask Run(EventType.AppStartInitFinish args)
		{
			var fui = await FUIHelper.OpenAsync<FUILoginPanel>();
			fui.AddComponent<FUILoginComponent>();
		}
	}
}
