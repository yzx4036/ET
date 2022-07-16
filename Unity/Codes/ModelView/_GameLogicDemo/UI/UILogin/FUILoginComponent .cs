using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Text;
using System.Threading.Tasks;

namespace ET
{
	[ComponentOf(typeof(FUIGObjectComponent))]
	public class FUILoginComponent : Entity, IAwake, IFUIBaseComponent
	{
		public FUILoginPanel fuiLogin;

	}
}
