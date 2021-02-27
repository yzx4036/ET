/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

using FairyGUI;
using ETModel;
using System.Threading.Tasks;

namespace ETHotfix.FGUI
{
    [ObjectSystem]
    public class FUILoadingMainAwakeSystem : AwakeSystem<FUILoadingMain, GObject>
    {
        public override void Awake(FUILoadingMain self, GObject go)
        {
            self.Awake(go);
        }
    }
    public sealed class FUILoadingMain : FUI
    {
        public const string UIPackageName = "Loading";
        public const string UIResName = "LoadingMain";
 
        /// <summary>
        /// {uiResName}的组件类型(GComponent、GButton、GProcessBar等)，它们都是GObject的子类。
        /// </summary>
        public GComponent self;
            
    public Controller c1;
    public const string URL = "ui://yk2e9dqxrpmb1c";

    private static GObject CreateGObject()
    {
        return UIPackage.CreateObject(UIPackageName, UIResName);
    }
 
    private static void CreateGObjectAsync(UIPackage.CreateObjectCallback result)
    {
        UIPackage.CreateObjectAsync(UIPackageName, UIResName, result);
    }
        
    public static FUILoadingMain CreateInstance()
    {
        return ComponentFactory.Create<FUILoadingMain, GObject>(CreateGObject());
    }
        
    public static Task<FUILoadingMain> CreateInstanceAsync()
    {
        TaskCompletionSource<FUILoadingMain> tcs = new TaskCompletionSource<FUILoadingMain>();
        CreateGObjectAsync((go) =>
        {
            tcs.SetResult(ComponentFactory.Create<FUILoadingMain, GObject>(go));
        });
        return tcs.Task;
    }
        
    public static FUILoadingMain Create(GObject go)
    {
        return ComponentFactory.Create<FUILoadingMain, GObject>(go);
    }
        
    /// <summary>
    /// 通过此方法获取的FUI，在Dispose时不会释放GObject，需要自行管理（一般在配合FGUI的Pool机制时使用）。
    /// </summary>
    public static FUILoadingMain GetFormPool(GObject go)
    {
        var fui = go.Get<FUILoadingMain>();
        if(fui == null)
            fui = Create(go);
 
        fui.isFromFGUIPool = true;
        return fui;
    }
        
    public void Awake(GObject go)
    {
        if(go == null)
            return;
        GObject = go;
        if (string.IsNullOrWhiteSpace(Name))
        {
            Name = Id.ToString();
        }
        self = (GComponent)go;
        self.Add(this);
        var com = go.asCom;
        if(com != null)
        {
    		c1 = com.GetControllerAt(0);
    	}
    }
    public override void Dispose()
    {
        if(IsDisposed)
        	return;
        base.Dispose();
        self.Remove();
        self = null;
        c1 = null;
        }
    }
}