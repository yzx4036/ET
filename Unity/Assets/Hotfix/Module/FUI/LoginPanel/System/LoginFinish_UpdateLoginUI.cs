//using ETHotfix.FGUI;
//using ETModel;

//namespace ETHotfix
//{
//    [Event(EventIdType.LoginFinish)]
//    public class LoginFinish_UpdateLoginUI : AEvent
//    {
//        public override void Run()
//        {
//            Log.Debug("登录验证成功。准备加载配置，切换场景");
//            FUILoginMain ui = (FUILoginMain)Game.Scene.GetComponent<FUIComponent>().Get(FUILoginMain.UIResName);
//            ui.c1.selectedIndex = 6;
//        }
//    }
//}