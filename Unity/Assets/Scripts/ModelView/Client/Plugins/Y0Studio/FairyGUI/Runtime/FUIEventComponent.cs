using System.Collections.Generic;

namespace ET.Client
{
    // public partial class PanelId
    // {
    //     
    // }
    
    public struct PanelInfo
    {
        public PanelId PanelId;
    
        public string PackageName;
    
        public string ComponentName;
    }
    
    [ComponentOf(typeof(Scene))]
    public class FUIEventComponent : Entity, IAwake, IDestroy
    {
        [StaticField]
        public static FUIEventComponent Instance { get; set; }
        public readonly Dictionary<PanelId, IFUIEventHandler> UIEventHandlers = new Dictionary<PanelId, IFUIEventHandler>();
        public readonly Dictionary<PanelId, PanelInfo> PanelIdInfoDict = new Dictionary<PanelId, PanelInfo>();
        public readonly Dictionary<string, PanelInfo> PanelTypeInfoDict = new Dictionary<string, PanelInfo>();

        public bool isClicked { get; set; }
    }
}