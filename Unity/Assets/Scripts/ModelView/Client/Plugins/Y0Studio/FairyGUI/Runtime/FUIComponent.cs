using System;
using System.Collections.Generic;
using FairyGUI.Dynamic;

namespace ET.Client
{
    public interface IFUIViewEntity
    {
        IContextData ContextData { get; set; }
    }

    public interface IGComponent
    {
    }

    public interface IContextData
    {
        
    }

    [ComponentOf(typeof(Scene))]
    public class FUIComponent : Entity,IAwake,IDestroy
    {
        [StaticField]
        public static FUIComponent Instance;
        
        public List<PanelId> VisiblePanelsQueue = new List<PanelId>(10);
        
        public Dictionary<int, FUIEntity> AllPanelsDic = new Dictionary<int, FUIEntity>(10);
        
        public List<PanelId> FUIEntitylistCached = new List<PanelId>(10);
        
        public Dictionary<int, FUIEntity> VisiblePanelsDic = new Dictionary<int, FUIEntity>(10);
        
        public Stack<PanelId> HidePanelsStack = new Stack<PanelId>(10);
        
        public Dictionary<string, FUIGComponentInfo> FUIGComponentInfoDic = new Dictionary<string, FUIGComponentInfo>();
    }
}