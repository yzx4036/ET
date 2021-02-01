import {BaseJsEntity} from "./BaseJsEntity";
import {StartSystem} from "../Base/IStartSystem";


export class TestJsComponent extends BaseJsEntity
{
    public constructor()
    {
        super();
    }
    
    public Awake()
    {
    }

    public Start()
    {
    }

}

class TestJsComponentStartComp extends StartSystem<TestJsComponent>
{
    Start(pTarget: TestJsComponent)
    {
        pTarget.Start()
    }

}

