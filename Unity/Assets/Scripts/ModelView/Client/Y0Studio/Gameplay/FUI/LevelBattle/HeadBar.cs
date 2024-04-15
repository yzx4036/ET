using ET.Client.LevelBattle;
using FairyGUI;

namespace ET.Client
{
	[ChildOf]
	public class HeadBar: Entity, IAwake<FUI_HeadBar, GComponent>, IDestroy, IFUIViewEntity
	{
		public FUI_HeadBar FUIHeadBar { get; set; }
		
		public IContextData ContextData { get; set; }
	}
	
	[ChildOf]
	public class HeadBar_ContextData: Entity, IAwake, IContextData
	{
		public long UnitId { get; set; }
		public GComponent Parent { get; set; }
	}
}
