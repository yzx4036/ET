using System;
using System.Collections.Generic;
using UnityEngine;

namespace Y0StudioSoft
{
	public class GameObjectPool
	{
		private int maxSize;
		private int poolSize;
		private string poolName;
		private Transform poolRoot;
		private Stack<GameObject> availableObjStack = new Stack<GameObject>();
		private Action<GameObject> destroyFunc;

		public GameObjectPool(string poolName, int maxSize, Transform pool, Action<GameObject> destroyFunc)
		{
			this.poolName = poolName;
			this.poolSize = 0;
			this.maxSize = maxSize;
			this.poolRoot = pool;
			this.destroyFunc = destroyFunc;
			Debug.Assert(this.destroyFunc != null);
		}

		//o(1)
		private void AddObjectToPool(GameObject go)
		{
			if (poolSize < maxSize)
			{
				go.transform.SetParent(poolRoot, false);
				availableObjStack.Push(go);
				poolSize++;
			}
			else
			{
				destroyFunc?.Invoke(go);
			}
		}

		public GameObject NextAvailableObject()
		{
			GameObject go = null;
			if (poolSize > 0)
			{
				go = availableObjStack.Pop();
				poolSize--;
			}
			return go;
		}

		//o(1)
		public void ReturnObjectToPool(string pool, GameObject po)
		{
			if (poolName.Equals(pool))
			{
				AddObjectToPool(po);
			}
			else
			{
				Debug.LogError(string.Format("Trying to add object to incorrect pool {0} ", poolName));
			}
		}

		public int GetPoolObjectNum()
        {
			return poolSize;
        }

		public void ClearPool()
		{
			for (int i = 0; i < poolSize; i++)
			{
				GameObject go = NextAvailableObject();
				destroyFunc?.Invoke(go);
			}
			poolSize = 0;
		}
	}
}
