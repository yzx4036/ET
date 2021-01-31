using System;

namespace SEyesET
{
	public interface IOnApplicationFocusSystem
	{
		Type Type();
		void Run(object o, bool pIsFocus);
	}

	public abstract class OnApplicationFocusSystem<T> : IOnApplicationFocusSystem
	{
		public void Run(object o, bool pIsFocus)
		{
			OnApplicationFocus((T)o, pIsFocus);
		}

		public Type Type()
		{
			return typeof(T);
		}

		public abstract void OnApplicationFocus(T self, bool pIsFocus);
	}
}
