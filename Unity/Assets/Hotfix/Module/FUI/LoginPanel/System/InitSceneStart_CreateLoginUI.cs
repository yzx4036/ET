using ETHotfix.FGUI;
using ETModel;
using FairyGUI;
using UnityEngine;
using UnityEngine.Networking;

namespace ETHotfix
{
    [Event(EventIdType.InitSceneStart)]
    public class InitSceneStart_CreateLoginUI : AEvent
    {
        public override void Run()
        {
            ETModel.Game.Scene.GetComponent<FUIPackageComponent>().AddPackage(FUIPackage.Login);
            Log.Debug("开始创建登录UI");
            FUILoginMain.CreateInstance();
        }

        //public async void UILoginMainCreateInstance()
        //{
        //    await ETModel.Game.Scene.GetComponent<FUIPackageComponent>().AddPackage(FUIPackage.Login);
        //    Log.Debug("开始创建登录UI");
        //    FUILoginMain.CreateInstance();
        //}
    }


    //[Event(EventIdType.GetServerListFinish)]
    //public class GetServerListFinish_SetViewList : AEvent<ServerList>
    //{
    //    public override void Run(ServerList sl)
    //    {
    //        Log.Debug("收到服务器列表" + sl);
    //        FUILoginMain ui = (FUILoginMain)Game.Scene.GetComponent<FUIComponent>().Get(FUILoginMain.UIResName);
    //        ui.listServer.data = sl.ServerListInfo;
    //        ui.listServer.numItems = sl.ServerListInfo.Count;
    //        ui.listServer.selectedIndex = 0;



    //        ui.tabServer.numItems = 4;

    //    }
    //}
}