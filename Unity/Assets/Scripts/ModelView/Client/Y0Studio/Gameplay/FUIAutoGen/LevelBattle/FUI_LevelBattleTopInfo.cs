/** This is an automatically generated class by FUICodeSpawner. Please do not modify it. **/

using FairyGUI;
using FairyGUI.Utils;

namespace ET.Client.LevelBattle
{
	[FUIGComponent("LevelBattle", "LevelBattleTopInfo")]
	public partial class FUI_LevelBattleTopInfo: GComponent
	{
		public enum SwitchCtrlPage
		{
			InMain,
			InCopilot,
		}

		public Controller SwitchCtrl;
		public GProgressBar hpBar;
		public GProgressBar innerForceBar;
		public const string URL = "ui://vzincyxu1025nt";

		public static FUI_LevelBattleTopInfo CreateInstance()
		{
			return (FUI_LevelBattleTopInfo)UIPackage.CreateObject("LevelBattle", "LevelBattleTopInfo");
		}

		public override void ConstructFromXML(XML xml)
		{
			base.ConstructFromXML(xml);

			SwitchCtrl = GetControllerAt(0);
			hpBar = (GProgressBar)GetChildAt(1);
			innerForceBar = (GProgressBar)GetChildAt(2);
		}
	}
}
