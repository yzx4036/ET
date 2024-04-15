using ET.Client.LevelBattle;

namespace ET.Client
{
	[ChildOf]
	public class LevelBattleTopInfo: Entity, IAwake<FUI_LevelBattleTopInfo>
	{
		public FUI_LevelBattleTopInfo FUILevelBattleTopInfo { get; set; }
	}
}
