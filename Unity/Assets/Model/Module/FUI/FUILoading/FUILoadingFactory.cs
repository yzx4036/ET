using ETModel.FGUI;
using FairyGUI;

namespace ETModel
{
    public class FUILoadingFactory
    {
        public static FUI Create()
        {
            var main = FUILoadingMain.CreateInstance();
            FUI fui = ComponentFactory.Create<FUI, GObject>(main);
            fui.Name = FUILoadingMain.UIResName;
            fui.GObject.sortingOrder = 20;
            fui.MakeFullScreen();
            return fui;
        }
    }
}