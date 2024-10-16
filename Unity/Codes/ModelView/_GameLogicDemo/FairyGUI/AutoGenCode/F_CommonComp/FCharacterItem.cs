/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

using FairyGUI;

namespace ET
{
    public static class FCharacterItemSystem
    {
        private static T CreateFUICompInst<T>(FCharacterItem self, GObject gObject) where T : Entity, IAwake, new()
        {
            var _fui = self.AddChild<FUIGObjectComponent, GObject>(gObject);
            return _fui.AddComponent<T>();
        }

        /// <summary>
        /// 通过此方法获取的FUI，在Dispose时不会释放GObject，需要自行管理（一般在配合FGUI的Pool机制时使用）。
        /// </summary>
        // public static FCharacterItem GetFormPool(Entity domain, GObject go)
        // {
        //     var fui = go.Get<FCharacterItem>();
        //     if(fui == null)
        //     {
        //         fui = Create(domain, go);
        //     }
        //     fui.isFromFGUIPool = true;
        //     return fui;
        // }

        [ObjectSystem]
        public class FCharacterItemAwakeSystem: AwakeSystem<FCharacterItem>
        {
            public override void Awake(FCharacterItem self)
            {
                self.selfGObj.Add(self.selfFUIRoot);
                var com = self.selfFUIRoot.gObject.asCom;
                if (com != null)
                {
					self.button = com.GetControllerAt(0);
					self.n0 = (GImage)com.GetChildAt(0);
					self.n1 = (GImage)com.GetChildAt(1);
					self.CharacterName = (GTextField)com.GetChildAt(2);
					self.CharacterLevel = (GTextField)com.GetChildAt(3);
					self.CharacterClass = (GTextField)com.GetChildAt(4);

                }
            }
        }

        [ObjectSystem]
        public class FCharacterItemDestroySystem: DestroySystem<FCharacterItem>
        {
            public override void Destroy(FCharacterItem self)
            {
				self.button = null;
				self.n0 = null;
				self.n1 = null;
				self.CharacterName = null;
				self.CharacterLevel = null;
				self.CharacterClass = null;

            }
        }
    }

    
    public sealed class FCharacterItem: Entity, IAwake, IDestroy
    {
        public const string UIPackageName = "F_CommonComp";
        public const string UIResName = "CharacterItem";

        /// <summary>
        /// {uiResName}的组件类型(GComponent、GButton、GProcessBar等)，它们都是GObject的子类。
        /// </summary>
        public GButton selfGObj
        {
            get
            {
                return (GButton)this.selfFUIRoot?.gObject;
            }
        }
        
        public FUIGObjectComponent selfFUIRoot
         {
            get
            {
                return this.GetParent<FUIGObjectComponent>();
            }
        }

		public Controller button { get; set; }
		public GImage n0 { get; set; }
		public GImage n1 { get; set; }
		public GTextField CharacterName { get; set; }
		public GTextField CharacterLevel { get; set; }
		public GTextField CharacterClass { get; set; }


        public const string URL = "ui://o9z9wblxdh8k9";
    }
}