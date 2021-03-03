using System;

namespace ETModel
{
	public interface ILoadSystem
	{
		Type Type();
		void Run(object o);
	}

	public abstract class LoadSystem<T> : ILoadSystem
	{
		public void Run(object o)
		{
			this.Load((T)o);
			Log.Info($">>{((T)o).GetType()} Load finish ");
		}

		public Type Type()
		{
			return typeof(T);
		}

		public abstract void Load(T self);
	}
}
