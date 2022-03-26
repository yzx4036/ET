using System.Collections;
using System.Collections.Generic;
using UnityEngine;

namespace SEyesSoft
{
    ///<summary>
    ///  管理各种管理器
    ///</summary>
    ///为什么需要单例
    ///单例模式核心在于对于某个单例类，在系统中同时只存在唯一一个实例，并且该实例容易被外界所访问；
    ///避免创建过多的对象,意味着在内存中，只存在一个实例，减少了内存开销；
    public class SingerMonoManager<T> : MonoBehaviour where T : SingerMonoManager<T>
    {
        //第一种方法单例
        //public static T instance { get; private set; }
        //public void Awake()
        //{
        //    instance = this as T;
        //}

        //第二种方法单例
        //按需实例
        //public static T instance { get; private set; }
        //public static T GetInstance()
        //{
        //    if (instance==null)
        //    {
        //        instance = FindObjectOfType<T>();
        //        //在场景种查找该类型的实例对象
        //        if (instance==null)
        //        {
        //            instance = new GameObject("singer" + typeof(T).Name).AddComponent<T>();
        //        }
        //    }
        //    return instance;
        //}

        //第三种方法单例
        //市面上项目最常见单例模式的第二种和第三种

        public virtual void OnStart()
        {

        }

        private static T instance;
        public static T Instance
        {
            get
            {
                if (instance == null)
                {
                    instance = FindObjectOfType<T>();
                    if (instance == null)
                    {

                        instance = new GameObject("Singer" + typeof(T).Name).AddComponent<T>();
                        instance.OnStart();
                        GameObject.DontDestroyOnLoad(instance);
                    }
                }
                return instance;
            }
            set
            {
                instance = value;
            }
        }
    }
}
