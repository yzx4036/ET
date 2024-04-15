using System.Collections.Generic;
using ET.Client.LevelBattle;

namespace ET.Client
{
    [ChildOf]
    public class LevelBattleSceneContainer: Entity, IAwake<FUI_LevelBattleSceneContainer>, IDestroy, IFUIViewEntity, IUpdate
    {
        public FUI_LevelBattleSceneContainer FUILevelBattleSceneContainer { get; set; }

        public Dictionary<long, long> HeadBarDict { get; set; }
        public IContextData           ContextData { get; set; }
    }
}