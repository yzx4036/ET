/** This is an automatically generated class by FUICodeSpawner. Please do not modify it. **/

using FairyGUI;
using FairyGUI.Utils;

namespace ET.Client.LevelBattle
{
	[FUIGComponent("LevelBattle", "LevelBattlePanel")]
	public partial class FUI_LevelBattlePanel: GComponent
	{
		public enum c1Page
		{
			alive,
			dead,
		}

		public Controller c1;
		public ET.Client.LevelBattle.FUI_LevelBattleSceneContainer SceneContainer;
		public ET.Client.LevelBattle.FUI_LevelBattleTopInfo TopInfo;
		public ET.Client.Common.FUI_CommonBtn back;
		public const string URL = "ui://vzincyxuwxvu0";

		public static FUI_LevelBattlePanel CreateInstance()
		{
			return (FUI_LevelBattlePanel)UIPackage.CreateObject("LevelBattle", "LevelBattlePanel");
		}

		public override void ConstructFromXML(XML xml)
		{
			base.ConstructFromXML(xml);

			c1 = GetControllerAt(0);
			SceneContainer = (ET.Client.LevelBattle.FUI_LevelBattleSceneContainer)GetChildAt(0);
			TopInfo = (ET.Client.LevelBattle.FUI_LevelBattleTopInfo)GetChildAt(1);
			back = (ET.Client.Common.FUI_CommonBtn)GetChildAt(3);
		}
	}
}
