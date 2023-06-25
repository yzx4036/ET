using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UniFramework.Machine;
using UniFramework.Module;
using UnityEngine.SceneManagement;

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

			SceneManager.LoadSceneAsync(1);
		}

		void IStateNode.OnUpdate()
		{
		}

		void IStateNode.OnExit()
		{
		}
	}
}