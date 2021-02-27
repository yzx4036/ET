

using ETModel.FGUI;

namespace ETModel
{
    [ObjectSystem]
    public class FUILoadingComponentAwakeSystem: AwakeSystem<FUILoadingComponent>
    {
        public override void Awake(FUILoadingComponent self)
        {
            self.FuiLoading = (FUILoadingMain) Game.Scene.GetComponent<FUIComponent>().Get(FUILoadingMain.UIResName).GObject;
        }
    }
}