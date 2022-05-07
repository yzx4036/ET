﻿
namespace ET
{
	[FriendClass(typeof(FUIGObjectComponent))]
	[ObjectSystem]
	public class FUIWindowComponentAwakeSystem : AwakeSystem<FUIWindowComponent>
	{
		public override void Awake(FUIWindowComponent self)
		{
			FUIGObjectComponent fui = self.GetParent<FUIGObjectComponent>();
			self.Window = new GWindow();
			self.Window.contentPane = fui.gObject.asCom;
		}
	}

	/// <summary>
	/// 挂上这个组件，就成为了一个窗口
	/// </summary>
	public class FUIWindowComponent: Entity, IAwake
	{
		public GWindow Window;
		
		public void Show()
		{
			Window.Show();
		}

		public void Hide()
		{
			Window.Hide();
		}

		public bool IsShowing
		{
			get
			{
				return Window.isShowing;
			}
		}

		public bool Modal
		{
			get
			{
				return Window.modal;
			}
			set
			{
				Window.modal = value;
			}
		}
	}
}