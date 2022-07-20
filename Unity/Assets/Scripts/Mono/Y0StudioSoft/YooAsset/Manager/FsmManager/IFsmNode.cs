
namespace Y0Studio.ET.Client.Res
{
	public interface IFsmNode
	{
		/// <summary>
		/// 节点名称
		/// </summary>
		string Name { get; }

		void OnEnter();
		void OnUpdate();
		void OnExit();
	}
}