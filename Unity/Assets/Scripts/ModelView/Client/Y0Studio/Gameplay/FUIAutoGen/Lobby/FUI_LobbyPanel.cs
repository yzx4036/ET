/** This is an automatically generated class by FUICodeSpawner. Please do not modify it. **/

using FairyGUI;
using FairyGUI.Utils;

namespace ET.Client.Lobby
{
	[FUIGComponent("Lobby", "LobbyPanel")]
	public partial class FUI_LobbyPanel: GComponent
	{
		public ET.Client.Common.FUI_CommonBtn TestABtn;
		public ET.Client.Common.FUI_CommonBtn EnterMap;
		public const string URL = "ui://ti3ka994t52l0";

		public static FUI_LobbyPanel CreateInstance()
		{
			return (FUI_LobbyPanel)UIPackage.CreateObject("Lobby", "LobbyPanel");
		}

		public override void ConstructFromXML(XML xml)
		{
			base.ConstructFromXML(xml);

			TestABtn = (ET.Client.Common.FUI_CommonBtn)GetChildAt(0);
			EnterMap = (ET.Client.Common.FUI_CommonBtn)GetChildAt(1);
		}
	}
}
