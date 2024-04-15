/** This is an automatically generated class by FUICodeSpawner. Please do not modify it. **/

using FairyGUI;
using FairyGUI.Utils;

namespace ET.Client.LevelBattle
{
	[FUIGComponent("LevelBattle", "HeadBar")]
	public partial class FUI_HeadBar: GComponent
	{
		public GProgressBar HpBar;
		public GProgressBar InnerForceBar;
		public const string URL = "ui://vzincyxuwxvum";

		public static FUI_HeadBar CreateInstance()
		{
			return (FUI_HeadBar)UIPackage.CreateObject("LevelBattle", "HeadBar");
		}

		public override void ConstructFromXML(XML xml)
		{
			base.ConstructFromXML(xml);

			HpBar = (GProgressBar)GetChildAt(0);
			InnerForceBar = (GProgressBar)GetChildAt(1);
		}
	}
}
