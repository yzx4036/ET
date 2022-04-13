using System;
using System.Net;

using UnityEngine;
using UnityEngine.UI;

namespace ET
{
	[ObjectSystem]
	[FriendClass(typeof(FUILoginPanel))]
	public class FUILoginComponentAwakeSystem : AwakeSystem<FUILoginComponent>
	{
		public override void Awake(FUILoginComponent self)
		{
			self.fuiLogin = self.GetParent<FUILoginPanel>();
			self.fuiLogin.selfFUIRoot.MakeFullScreen();
			self.fuiLogin.LoginBtn.test();
			self.fuiLogin.LoginBtn.selfGObj.onClick. .Set(self.LoginBtn_OnClicked);
			self.fuiLogin.RegisterBtn.selfGObj.onClick.Set(self.RegisterBtn_OnClicked);
		}
	}
	
	[FriendClass(typeof(FUILoginPanel))]
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
			Log.Debug(">>>>>>>>>>>RegisterBtn_OnClicked ");
		}
		
	}
}
