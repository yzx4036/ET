using FairyGUI;

namespace ET.Client
{
    [EntitySystemOf(typeof(FUIEntity))]
    [FriendOf(typeof(PanelCoreData))]
    public static partial class FUIEntitySystem
    {
        [EntitySystem]
        private static void Awake(this ET.Client.FUIEntity self)
        {
            self.PanelCoreData = self.AddChild<PanelCoreData>();
            // self.Language = LocalizeComponentSystem.DefaultLanguage; //todo 多语言需要修改
        }
        [EntitySystem]
        private static void Destroy(this ET.Client.FUIEntity self)
        {
            self.PanelCoreData?.Dispose();
            self.PanelId = PanelId.Invalid;
            if (self.GComponent != null)
            {
                self.GComponent.Dispose();
                self.GComponent = null;
            }
            
            // self.Language = LocalizeComponentSystem.DefaultLanguage; //todo 多语言需要修改
        }
        
        public static void SetPanelType(this FUIEntity self, UIPanelType panelType)
        {
            self.PanelCoreData.panelType = panelType;
        }

        public static void SetRoot(this FUIEntity self, GComponent rootGComponent)
        {
            if (self.GComponent == null)
            {
                Log.Error($"FUIEntity {self.PanelId} GComponent is null!!!");
                return;
            }
            if (rootGComponent == null)
            {
                Log.Error($"FUIEntity {self.PanelId} rootGComponent is null!!!");
                return;
            }
            rootGComponent.AddChild(self.GComponent);
        }

    }
}