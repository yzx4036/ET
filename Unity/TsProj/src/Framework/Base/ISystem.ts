import {BaseJsEntity} from "../Entity/BaseJsEntity";

export interface ISystem<T extends BaseJsEntity>
{
    Inst:T;
    Type();
}
