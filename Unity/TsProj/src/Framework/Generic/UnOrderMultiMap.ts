import {Dictionary, LinkedList, Queue} from "typescript-collections";
import {IDictionaryPair} from "typescript-collections/dist/lib/Dictionary";
import {desc} from "../Common/Decorators";
import 'reflect-metadata';

@Reflect.metadata('data', 'test1')
export class UnOrderMultiMap<T, K>
{
    private _first: Array<K>;
    private dictionary: Dictionary<T, Array<K>> = new Dictionary<T, Array<K>>();
    // 重用list
    private readonly queue: Queue<Array<K>> = new Queue<Array<K>>();

    public GetDictionary(): Dictionary<T, Array<K>>
    {
        return this.dictionary;
    }

    public Add(t: T, k: K)
    {
        let _firstKey = null;
        let list = this.dictionary.getValue(t);
        if (list == null)
        {
            if (this.Count() == 0)
            {
                _firstKey = t;
            }
            list = this.FetchList();
            this.dictionary.setValue(t, list);
        }
        else
        {
            if (this.Count() != 0 && list.length == 0)
            {
                _firstKey = t;
            }
        }
        list.push(k);
        this._first = this.dictionary.getValue(_firstKey);
    }


    public First(): Array<K>
    {
        return this._first;
    }

    public Count(): number
    {
        return this.dictionary.size();
    }

    private FetchList(): Array<K>
    {
        if (this.queue.size() > 0)
        {
            let list = this.queue.dequeue();
            list.splice(0, list.length);
            return list;
        }
        return new Array<K>();
    }


    private RecycleList(list: Array<K>)
    {
        // 防止暴涨
        if (this.queue.size() > 100)
        {
            return;
        }
        list.splice(0, list.length);
        this.queue.enqueue(list);
    }

    public RemoveByTK(t: T, k: K): boolean
    {
        let list = this.dictionary.getValue(t);
        if (list == null)
        {
            return false;
        }
        if (!list.splice(0))
        {
            return false;
        }
        if (list.length == 0)
        {
            this.RecycleList(list);
            this.dictionary.remove(t);
        }
        return true;
    }

    public RemoveByKey(t: T): boolean
    {
        let list = this.dictionary.getValue(t);
        if (list != null)
        {
            this.RecycleList(list);
        }
        let _remove = this.dictionary.remove(t);
        if (!_remove)
        {
            return false;
        }
        return true;
    }

    /// <summary>
    /// 不返回内部的list,copy一份出来
    /// </summary>
    /// <param name="t"></param>
    /// <returns></returns>
    public GetAll(t: T): K[]
    {
        let list = this.dictionary.getValue(t);
        let newList = new Array<K>();
        if (list == null)
        {
            return newList;
        }
        for (let i = 0; i < list.length; i++)
        {
            newList[i] = list[i];
        }
        return newList;
    }

    // /// <summary>
    // /// 返回内部的list
    /// </summary>
    /// <param name="t"></param>
    /// <returns></returns>
    // public this[t:T]:Array<K>
    // {
    //     return this.dictionary
    // }

    public GetOne(t: T): K
    {
        let list = this.dictionary.getValue(t);
        if (list != null && list.length > 0)
        {
            return list[0];
        }
        return null;
    }

    public Contains(t: T, k: K): boolean
    {
        let list = this.dictionary.getValue(t);
        if (list == null)
        {
            return false;
        }
        return list.includes(k);
    }

    public ContainsKey(t: T)
    {
        return this.dictionary.containsKey(t);
    }

    public Clear()
    {
        this.dictionary.forEach((k, v) =>
        {
            this.RecycleList(v);
        });
        this._first = null;
    }
}
