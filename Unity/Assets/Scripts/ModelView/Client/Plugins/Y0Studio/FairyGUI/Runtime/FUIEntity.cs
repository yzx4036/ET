using FairyGUI;
using UnityEngine;

namespace ET.Client
{
    [ChildOf(typeof(FUIComponent))]
    public class FUIEntity : Entity, IAwake, IDestroy
    {
        public bool IsPreLoad
        {
            get
            {
                return this.GComponent != null;
            }
        }
        
        /// <summary>
        /// Invalid 代表不是panel，是child view 組件
        /// </summary>
        public PanelId PanelId
        {
            get
            {
                if (this.panelId == PanelId.Invalid)
                {
                    // Log.Error("panel id is " + PanelId.Invalid);
                }
                return this.panelId;
            }
            set { this.panelId = value; }
        }
      
        private PanelId panelId = PanelId.Invalid;

        public GComponent GComponent { get; set; }

        public PanelCoreData PanelCoreData { get; set; }

        public EntityRef<Entity> ContextData { get; set; }

        public SystemLanguage Language { get; set; }

        public bool IsUsingStack;
    }
}