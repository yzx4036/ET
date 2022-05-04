using System;
using System.Net;

using UnityEngine;

namespace ET
{
	[ObjectSystem]
	public class FUILoginComponentAwakeSystem : AwakeSystem<FUILoginComponent>
	{
		public override void Awake(FUILoginComponent self)
		{
			try
			{
				self.fuiLogin = self.GetFUIViewEntity<FUILoginPanel, FUILoginComponent>();
				self.fuiLogin.selfFUIRoot.MakeFullScreen();
				self.fuiLogin.LoginBtn.AddBtnClickedListener(self.LoginBtn_OnClicked);
				self.fuiLogin.ToRegisterBtn.AddBtnClickedListener(self.RegisterBtn_OnClicked);
			}
			catch (Exception exc)
			{
				Log.Error(exc.ToString());
			}
		}
	}
	
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
			Log.Debug(">>>>>>>>>>>RegisterBtn_OnClicked ");
		}
		
	}
}
