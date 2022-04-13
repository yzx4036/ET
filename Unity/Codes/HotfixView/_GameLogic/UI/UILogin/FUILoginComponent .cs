using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Text;
using System.Threading.Tasks;

namespace ET
{
	[FriendClass(typeof(FUILoginPanel))]
	public class FUILoginComponent : Entity, IAwake
	{
		public FUILoginPanel fuiLogin;

	}
}
