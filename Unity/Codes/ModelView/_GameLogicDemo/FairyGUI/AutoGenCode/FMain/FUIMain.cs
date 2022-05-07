/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

using FairyGUI;

namespace ET
{
    public static class FUIMainSystem
    {
        private static T CreateFUICompInst<T>(FUIMain self, GObject gObject) where T : Entity, IAwake<FUIGObjectComponent>, new()
        {
            var _fui = self.AddChild<FUIGObjectComponent, GObject>(gObject);
            return _fui.AddComponent<T, FUIGObjectComponent>(_fui);
        }

        /// <summary>
        /// 通过此方法获取的FUI，在Dispose时不会释放GObject，需要自行管理（一般在配合FGUI的Pool机制时使用）。
        /// </summary>
        // public static FUIMain GetFormPool(Entity domain, GObject go)
        // {
        //     var fui = go.Get<FUIMain>();
        //     if(fui == null)
        //     {
        //         fui = Create(domain, go);
        //     }
        //     fui.isFromFGUIPool = true;
        //     return fui;
        // }

        [FriendClass(typeof (FUIGObjectComponent))]
        [ObjectSystem]
        public class FUIMainAwakeSystem: AwakeSystem<FUIMain, FUIGObjectComponent>
        {
            public override void Awake(FUIMain self, FUIGObjectComponent fui)
            {
                self.selfFUIRoot = fui;
                self.selfGObj = (GComponent) fui.gObject;

                self.selfGObj.Add(fui);

                var com = fui.gObject.asCom;

                if (com != null)
                {
					self.n80 = (GImage)com.GetChildAt(0);
					self.EquipShopBtn = CreateFUICompInst<FButton_Shop>(self, com.GetChildAt(1));
					self.NotionShopBtn = CreateFUICompInst<FButton_Shop>(self, com.GetChildAt(2));
					self.OldManBtn = CreateFUICompInst<FButton_Shop>(self, com.GetChildAt(3));
					self.DrugstoreBtn = CreateFUICompInst<FButton_Shop>(self, com.GetChildAt(4));
					self.RingShopBtn = CreateFUICompInst<FButton_Shop>(self, com.GetChildAt(5));
					self.WeaponShopBtn = CreateFUICompInst<FButton_Shop>(self, com.GetChildAt(6));
					self.SkillShopBtn = CreateFUICompInst<FButton_Shop>(self, com.GetChildAt(7));
					self.InnShopBtn = CreateFUICompInst<FButton_Shop>(self, com.GetChildAt(8));
					self.GuildBtn = CreateFUICompInst<FButton_Shop>(self, com.GetChildAt(9));

                }
            }
        }

        [FriendClass(typeof (FUIGObjectComponent))]
        [ObjectSystem]
        public class FUIMainDestroySystem: DestroySystem<FUIMain>
        {
            public override void Destroy(FUIMain self)
            {
				self.n80 = null;
				self.EquipShopBtn = null;
				self.NotionShopBtn = null;
				self.OldManBtn = null;
				self.DrugstoreBtn = null;
				self.RingShopBtn = null;
				self.WeaponShopBtn = null;
				self.SkillShopBtn = null;
				self.InnShopBtn = null;
				self.GuildBtn = null;

            }
        }
    }

    [FUI(typeof(FUIMainPanel), UIPackageName, UIResName)]
    public sealed class FUIMain: Entity, IAwake<FUIGObjectComponent>, IDestroy
    {
        public const string UIPackageName = "FMain";
        public const string UIResName = "UIMain";

        /// <summary>
        /// {uiResName}的组件类型(GComponent、GButton、GProcessBar等)，它们都是GObject的子类。
        /// </summary>
        public GComponent selfGObj;

        public FUIGObjectComponent selfFUIRoot;

		public GImage n80 { get; set; }
		public FButton_Shop EquipShopBtn { get; set; }
		public FButton_Shop NotionShopBtn { get; set; }
		public FButton_Shop OldManBtn { get; set; }
		public FButton_Shop DrugstoreBtn { get; set; }
		public FButton_Shop RingShopBtn { get; set; }
		public FButton_Shop WeaponShopBtn { get; set; }
		public FButton_Shop SkillShopBtn { get; set; }
		public FButton_Shop InnShopBtn { get; set; }
		public FButton_Shop GuildBtn { get; set; }


        public const string URL = "ui://t4ymdfnhia595z";
    }
}