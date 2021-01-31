import {Dictionary, LinkedList, Queue} from "typescript-collections";
import {IDictionaryPair} from "typescript-collections/dist/lib/Dictionary";
import {desc} from "../Common/Decorators";
import 'reflect-metadata';

export class UnOrderMultiMapSet<T, K>
{
    private _first: Array<K>;
    private dictionary: Dictionary<T, Set<K>> = new Dictionary<T, Set<K>>();
    // 重用list
    private readonly queue: Queue<Set<K>> = new Queue<Set<K>>();

    public GetDictionary(): Dictionary<T, Set<K>>
    {
        return this.dictionary;
    }

    public Add(t: T, k: K)
    {
        let _firstKey = null;
        let set = this.dictionary.getValue(t);
        if (set == null)
        {
            set = this.FetchList();
            this.dictionary.setValue(t, set);
        }
        set.add(k);
    }

    private FetchList(): Set<K>
    {
        if (this.queue.size() > 0)
        {
            let set = this.queue.dequeue();
            set.clear();
            return set;
        }
        return new Set<K>();
    }
    
    private RecycleList(set: Set<K>)
    {
        // 防止暴涨
        if (this.queue.size() > 100)
        {
            return;
        }
        set.clear();
        this.queue.enqueue(set);
    }

    public RemoveByTK(t: T, k: K): boolean
    {
        let list = this.dictionary.getValue(t);
        if (list == null)
        {
            return false;
        }
        if (!list.delete(k))
        {
            return false;
        }
        if (list.size == 0)
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
        return _remove != undefined;
    }

    public Contains(t: T, k: K): boolean
    {
        let list = this.dictionary.getValue(t);
        if (list == null)
        {
            return false;
        }
        return list.has(k);
    }

    public ContainsKey(t: T)
    {
        return this.dictionary.containsKey(t);
    }

    public Clear()
    {
        this.dictionary.clear();
    }
}
