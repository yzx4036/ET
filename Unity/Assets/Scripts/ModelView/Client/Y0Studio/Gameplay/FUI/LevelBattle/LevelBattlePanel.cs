using ET.Client.LevelBattle;

namespace ET.Client
{
    [ComponentOf(typeof (FUIEntity))]
    public class LevelBattlePanel: Entity, IAwake, IFUIViewEntity
    {
        public LevelBattleSceneContainer SceneContainer { get; set; }

        public LevelBattleTopInfo TopInfo { get; set; }

        private FUI_LevelBattlePanel _fuiLevelBattlePanel;

        public FUI_LevelBattlePanel FUILevelBattlePanel
        {
            get => _fuiLevelBattlePanel ??= (FUI_LevelBattlePanel) this.GetParent<FUIEntity>().GComponent;
        }

        public IContextData ContextData { get; set; }
    }
}