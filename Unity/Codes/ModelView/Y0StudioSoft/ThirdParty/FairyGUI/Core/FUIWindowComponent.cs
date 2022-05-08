namespace ET
{
    [FriendClass(typeof (FUIWindowComponent))]
    public static class FUIWindowComponentSystem
    {
        [ObjectSystem]
        [FriendClass(typeof (FUIGObjectComponent))]
        public class FUIWindowComponentAwakeSystem: AwakeSystem<FUIWindowComponent>
        {
            public override void Awake(FUIWindowComponent self)
            {
                FUIGObjectComponent fui = self.GetParent<FUIGObjectComponent>();
                self.Window = new GWindow();
                self.Window.contentPane = fui.gObject.asCom;
            }
        }

        [ObjectSystem]
        public class FUIWindowComponentDestroySystem: DestroySystem<FUIWindowComponent>
        {
            public override void Destroy(FUIWindowComponent self)
            {
            }
        }

        public static void Show(this FUIWindowComponent self, FUIGObjectComponent fui)
        {
            self.Window.Show();
        }

        public static void Hide(this FUIWindowComponent self)
        {
            self.Window.Hide();
        }
    }

    /// <summary>
    /// 挂上这个组件，就成为了一个窗口
    /// </summary>
    public class FUIWindowComponent: Entity, IAwake, IDestroy
    {
        public GWindow Window;

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