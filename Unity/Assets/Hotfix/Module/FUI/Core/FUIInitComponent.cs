using ETHotfix.FGUI;
using ETModel;
using FairyGUI;
using System.Threading.Tasks;

namespace ETHotfix
{
	public class FUIInitComponent : Component
    {
        public async Task Init()
        {
            Log.Debug("准备加载公共资源，准备进入登录界面");
            //await ETModel.Game.Scene.GetComponent<FUIPackageComponent>().AddPackageAsync("CommonPack");
            //await ETModel.Game.Scene.GetComponent<FUIPackageComponent>().AddPackageAsync("CommonPack2");
            //await ETModel.Game.Scene.GetComponent<FUIPackageComponent>().AddPackageAsync(FUIPackage.LoginPanel);

            //UIObjectFactory.SetPackageItemExtension(FUIItem.URL, typeof(FUIItem));

        }

        public override void Dispose()
		{
			if (IsDisposed)
			{
				return;
			}

			base.Dispose();

            //ETModel.Game.Scene.GetComponent<FUIPackageComponent>().RemovePackage(FUIPackage.LoginPanel);
        }
    }
}