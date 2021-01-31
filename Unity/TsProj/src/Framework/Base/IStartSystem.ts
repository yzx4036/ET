import {ISystem} from "./ISystem";

interface IStartSystem<T> extends ISystem<T>
{
    Run(o: any);
}

export abstract class StartSystem<T> implements IStartSystem<T>
{
    public Run(o: T)
    {
        this.Start(o)
    }
    
    public abstract Start(pTarget:T);

    Inst: any;

    Type()
    {
        return typeof this.Inst;
    }

}
