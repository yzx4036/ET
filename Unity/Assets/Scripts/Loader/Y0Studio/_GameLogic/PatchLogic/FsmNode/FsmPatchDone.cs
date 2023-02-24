using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UniFramework.Machine;
using UniFramework.Module;

namespace Y0Studio.ET.Client
{
	/// <summary>
	/// 流程更新完毕
	/// </summary>
	internal class FsmPatchDone: IStateNode
	{
		void IStateNode.OnCreate(StateMachine machine)
		{
		}

		void IStateNode.OnEnter()
		{
			PatchEventDefine.PatchStatesChange.SendEventMessage("开始游戏！");


		}

		void IStateNode.OnUpdate()
		{
		}

		void IStateNode.OnExit()
		{
		}
	}
}