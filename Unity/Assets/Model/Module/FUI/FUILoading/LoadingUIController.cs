

using ETModel.FGUI;

namespace ETModel
{
    [Event(EventIdType.LoadingBegin)]
    public class CreateLoadingEvent_CreateLoadingUI: AEvent
    {
        public override void Run()
        {
            Log.Debug(">>>EventIdType.LoadingBegin");
            Game.Scene.GetComponent<FUIPackageComponent>().AddPackage(FUILoadingMain.UIPackageName);
            FUI fui = FUILoadingFactory.Create();
            Game.Scene.GetComponent<FUIComponent>().Add(fui);
            fui.AddComponent<FUILoadingComponent>();
        }
    }
    
    [Event(EventIdType.LoadingFinish)]
    public class RequireCloseLoadingUI_CloseLoadingUI: AEvent
    {
        public override void Run()
        {
            Log.Debug(">>>EventIdType.LoadingFinish");
            Game.Scene.GetComponent<FUIComponent>().Get(FUILoadingMain.UIResName).Visible = false;
            Log.Info("加载UI关闭");
        }
    }
    
}