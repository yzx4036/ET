using System;
using System.Net;

using UnityEngine;

namespace ET
{
	[ObjectSystem]
	public class FUILoginComponentAwakeSystem: AwakeSystem<FUILoginComponent>
	{
		public override void Awake(FUILoginComponent self)
		{
			try
			{
				self.fuiLogin = self.GetFUIViewEntity<FUILoginPanel, FUILoginComponent>();
				self.GetFUIGObjectEntity().MakeFullScreen();
				self.fuiLogin.LoginBtn.AddBtnClickedListener(self.LoginBtn_OnClicked);
				self.fuiLogin.ToRegisterBtn.AddBtnClickedListener(self.RegisterBtn_OnClicked);

				this.OnAwake(self);
			}
			catch (Exception exc)
			{
				Log.Error(exc.ToString());
			}
		}

		//---not overwrite---start---//
		
		private void OnAwake(FUILoginComponent self)
		{
			//todo ---其他控件操作
		}
		
		//---not overwrite---end---//
	}
	
	[FriendClass(typeof(FUILoginComponent))]
	public static class FUILoginComponentSystem
	{
		public static void LoginBtn_OnClicked(this FUILoginComponent self)
		{
			LoginHelper.Login(
				self.DomainScene(), 
				ConstValue.LoginAddress, 
				
				self.fuiLogin.LoginAccount.text, 
				self.fuiLogin.LoginPassword.text).Coroutine();
		}
		
		public static void RegisterBtn_OnClicked(this FUILoginComponent self)
		{
			Log.Debug(">>>>>>>>>>>RegisterBtn_OnClicked 1111111111111111111");

			Log.Debug(">>>>>>>>>>>RegisterBtn_OnClicked 热更测试！！");
			
			Log.Debug(">>>>>>>>>>>RegisterBtn_OnClicked 222222222222222");
		}
		
		//---not overwrite---start---//
		
		//---not overwrite---end---//
	}
}
