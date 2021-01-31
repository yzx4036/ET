import {DCET, System} from 'csharp';
import {$typeof} from 'puerts';
import {GameTest} from "./test/GameTest";

interface IScriptLauncher
{
    OnJsStart();
    OnJsUpdate();
    OnJsLateUpdate();
    OnJsFixedUpdate();
    OnJsApplicationFocus(pState: boolean);
    OnJsApplicationPause(pState: boolean);
    OnJsApplicationQuit();
    OnJsApplicationQuit();
}

export default function main(lancher: IScriptLauncher)
{
    new JavaScriptApplication(lancher); // tslint:disable-line
}

class JavaScriptApplication
{
    private readonly lancher: IScriptLauncher;
    private static $inst: JavaScriptApplication;

    public static get inst(): JavaScriptApplication
    {
        return this.$inst;
    }

    constructor(launcher: IScriptLauncher)
    {
        JavaScriptApplication.$inst = this;
        this.lancher = launcher;
        this.initialize();
    }

    private async initialize()
    {
        try
        {
            console.log(">>>>puerts initialize ...");
            this.lancher.OnJsStart = this.OnStart.bind(this);
            this.lancher.OnJsUpdate = this.OnUpdate;
            this.lancher.OnJsLateUpdate = this.OnLateUpdate;
            this.lancher.OnJsFixedUpdate = this.OnFixedUpdate;
            this.lancher.OnJsApplicationFocus = this.OnApplicationFocus;
            this.lancher.OnJsApplicationPause = this.OnApplicationPause;
            this.lancher.OnJsApplicationQuit = this.OnApplicationQuit;
        } catch (e)
        {
            console.error(e.toString());
        }
        console.log(">>>>puerts initialize finish...");
    }

    private OnStart()
    {
        GameTest.start()
        console.log(">>>OnStart>1");
    }

    private OnUpdate()
    {
        WebAPI.tick();
    }

    private OnLateUpdate()
    {
    }

    private OnFixedUpdate()
    {
    }

    private OnApplicationFocus(pState: boolean)
    {
    }

    private OnApplicationPause(pState: boolean)
    {
    }

    private OnApplicationQuit()
    {
        console.log(">>>>OnApplicationQuit");
        WebAPI.finalize();
    }
}
