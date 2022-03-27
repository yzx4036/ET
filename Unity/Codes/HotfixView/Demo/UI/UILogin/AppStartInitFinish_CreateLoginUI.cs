

using System;
using System.Threading.Tasks;

namespace ET
{
	public class AppStartInitFinish_CreateLoginUI: AEvent<EventType.AppStartInitFinish>
	{
		protected override async ETTask Run(EventType.AppStartInitFinish args)
		{
			try
			{
				await UIHelper.Create(args.ZoneScene, UIType.UILogin, UILayer.Mid);
			}
			catch (Exception e)
			{
				Log.Error($">>>>{e}");
			}
		}
	}
}
