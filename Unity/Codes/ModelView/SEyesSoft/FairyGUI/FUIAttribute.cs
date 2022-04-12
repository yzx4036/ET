using System;

namespace ET
{
	[AttributeUsage(AttributeTargets.Class, AllowMultiple = true)]
	public class FUIAttribute: BaseAttribute
	{
		public FUIInstArgs argsObject;
		public FUIAttribute(Type uiType, string packageName, string uiResName)
		{
			argsObject = new FUIInstArgs(uiType, packageName, uiResName);
		}
	}
}