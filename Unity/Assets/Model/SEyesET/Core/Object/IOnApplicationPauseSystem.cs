using System;

namespace SEyesET
{
	public interface IOnApplicationPauseSystem
	{
		Type Type();
		void Run(object o, bool pIsPause);
	}

	public abstract class OnApplicationPauseSystem<T> : IOnApplicationPauseSystem
	{
		public void Run(object o, bool pIsPause)
		{
			OnApplicationPause((T)o, pIsPause);
		}

		public Type Type()
		{
			return typeof(T);
		}

		public abstract void OnApplicationPause(T self, bool pIsFocus);
	}
}
