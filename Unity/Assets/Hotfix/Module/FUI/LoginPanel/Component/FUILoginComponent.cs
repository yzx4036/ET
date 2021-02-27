using ETHotfix.FGUI;
using ETModel;
using FairyGUI;
using System.Collections.Generic;
namespace ETHotfix
{
    //当在组件初始化到-StartSystem时候触发
    [ObjectSystem]
    public class FUILoginComponent : StartSystem<FUILoginMain>
    {
        private FUILoginMain mainView;
        private TimerComponent timerComponent;
        private Dictionary<string, ServerListInfo> ServerListInfoDic;
        public override void Start(FUILoginMain self)
        {
            mainView = self;
            //默认将会以Id为Name，也可以自定义Name，方便查询和管理



            self.Name = FUILoginMain.UIResName;
            self.MakeFullScreen();
            Game.Scene.GetComponent<FUIComponent>().Add(self, true);
            self.btnDengLu.onClick.Add(OnBtnClick);
            self.btnZhuCe.onClick.Add(OnBtnClick);
            self.btnJinRu.onClick.Add(OnBtnClick);
            self.btnBg.onClick.Add(OnBtnClick);
            self.listServer.itemRenderer = ListServerItemRenderer;
            self.tabServer.itemRenderer = TabServerItemRenderer;


            self.listServer.onClickItem.Add(OnListClick);
            self.tabServer.onClickItem.Add(OnTabClick);

            //StartAsync(self).Coroutine();
        }
      
        public async ETVoid StartAsync(FUILoginMain self)
        {
            timerComponent = ETModel.Game.Scene.GetComponent<TimerComponent>();
            long instanceId = self.InstanceId;
            while (true)
            {
                await timerComponent.WaitAsync(100);
                if (self.InstanceId != instanceId)
                {
                    return;
                }
                timerComponent.Dispose();
            }
        }
        public void OnBtnClick(EventContext e)
        {
            EventDispatcher sender = e.sender;
            if (sender == mainView.btnDengLu)
            {
                if (mainView.txtMiMa.text == "")
                {
                    Log.Debug("请输入密码");
                    return;
                }
                if (mainView.txtZhanHao.text == "")
                {
                    Log.Debug("请输入账号");
                    return;
                }
                ServerListInfo data;
                if (ServerListInfoDic.TryGetValue((mainView.listServer.selectedIndex + 1).ToString(), out data))
                {
                    string Address = data.ip + ":" + data.port;
                  
                    mainView.c1.selectedIndex = 6;
                }
            }
            else if (sender == mainView.btnZhuCe)
            {
                if (mainView.txtMiMa2.text == "")
                {
                    Log.Debug("请输入密码");
                    return;
                }
                if (mainView.txtZhanHao2.text == "")
                {
                    Log.Debug("请输入账号");
                    return;
                }
                ServerListInfo data;
                if (ServerListInfoDic.TryGetValue((mainView.listServer.selectedIndex + 1).ToString(), out data))
                {
                    string Address = data.ip + ":" + data.port;
                    OnRegisterAsync(mainView.txtZhanHao2.text, mainView.txtMiMa2.text, Address);
                }
            }
            else if (sender == mainView.btnBg)
            {
                mainView.c1.selectedIndex = 0;
            }
            else if (sender == mainView.btnJinRu)
            {
                if (mainView.txtMiMa.text == "" || mainView.txtZhanHao.text == "")
                {
                    mainView.c1.selectedIndex = 1;
                    return;
                }
                ServerListInfo data;
                if (ServerListInfoDic.TryGetValue((mainView.listServer.selectedIndex + 1).ToString(), out data))
                {
                    string Address = data.ip + ":" + data.port;
                    LoginHelper.OnLoginAsync(mainView.txtZhanHao.text).Coroutine();
                }
            }
        }

        public async static void OnRegisterAsync(string account, string password, string Address)
        {
            //await RegisterHelper.OnRegisterAsync(account, password, Address);
        }

        public void ListServerItemRenderer(int index, GObject obj)
        {
            ServerListInfoDic = (Dictionary<string, ServerListInfo>)mainView.listServer.data;
            ServerListInfo data;
            if (ServerListInfoDic.TryGetValue((index + 1).ToString(), out data))
            {
                GButton button = obj.asButton;
                button.title = "" + data.name;
            }
        }
        public void TabServerItemRenderer(int index, GObject obj)
        {
            if (index == 0)
            {
                obj.asButton.title = "推荐";

            }
            else
            {
                obj.asButton.title = (index - 1) * 50 + 1 + "-" + index * 50;
            }
        }
        public void OnListClick(EventContext e)
        {
            mainView.c1.selectedIndex = 0;
            ServerListInfo data;
            if (ServerListInfoDic.TryGetValue((mainView.listServer.selectedIndex + 1).ToString(), out data))
            {
                //mainView.btnServer.self.title = data.name;
            }
        }
        public void OnTabClick(EventContext e)
        {
            Log.Debug("OnTabClick");
        }
    }

}