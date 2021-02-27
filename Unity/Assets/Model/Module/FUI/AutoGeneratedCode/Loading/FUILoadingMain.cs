/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

using FairyGUI;
using FairyGUI.Utils;

namespace ETModel.FGUI
{
    public partial class FUILoadingMain : GComponent
    {
        public Controller c1;
        public const string URL = "ui://yk2e9dqxrpmb1c";
        public const string UIResName = "LoadingMain";
        public const string UIPackageName = "Loading";

        public static FUILoadingMain CreateInstance()
        {
            return (FUILoadingMain)UIPackage.CreateObject("Loading", "LoadingMain");
        }

        public override void ConstructFromXML(XML xml)
        {
            base.ConstructFromXML(xml);

            c1 = GetControllerAt(0);
        }
    }
}