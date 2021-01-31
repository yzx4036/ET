import {ISystem} from "./ISystem";

interface IAwakeSystem<T> extends ISystem<T>
{
}

interface IAwake
{
    Run(o: any);
}

interface IAwake$1<T1>
{
    Run(o: any, a:T1);
}

interface IAwake$2<T1, T2>
{
    Run(o: any, a1:T1, a2:T2);
}

interface IAwake$3<T1, T2, T3>
{
    Run(o: any, a1:T1, a2:T2, a3:T3);
}

interface IAwake$4<T1, T2, T3, T4>
{
    Run(o: any, a1:T1, a2:T2, a3:T3, a4:T4);
}

export abstract class AwakeSystem<T> implements IAwakeSystem<T>, IAwake
{
    Inst: T;

    Run(o: any)
    {
    }

    Type()
    {
    }
    

}

// public abstract class AwakeSystem<T, A> : IAwakeSystem, IAwake<A>
// {
// 	public Type Type()
// 	{
// 		return typeof(T);
// 	}
//
// 	public void Run(object o, A a)
// 	{
// 		Awake((T)o, a);
// 	}
//
// 	public abstract void Awake(T self, A a);
// }
//
// public abstract class AwakeSystem<T, A, B> : IAwakeSystem, IAwake<A, B>
// {
// 	public Type Type()
// 	{
// 		return typeof(T);
// 	}
//
// 	public void Run(object o, A a, B b)
// 	{
// 		Awake((T)o, a, b);
// 	}
//
// 	public abstract void Awake(T self, A a, B b);
// }
//
// public abstract class AwakeSystem<T, A, B, C> : IAwakeSystem, IAwake<A, B, C>
// {
// 	public Type Type()
// 	{
// 		return typeof(T);
// 	}
//
// 	public void Run(object o, A a, B b, C c)
// 	{
// 		Awake((T)o, a, b, c);
// 	}
//
// 	public abstract void Awake(T self, A a, B b, C c);
// }
