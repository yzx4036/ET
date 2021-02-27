/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
using FairyGUI;
using ETModel;
using System.Threading.Tasks;

namespace ETHotfix.FGUI
{
    [ObjectSystem]
    public class FUIComponent2AwakeSystem : AwakeSystem<FUIComponent2, GObject>
    {
        public override void Awake(FUIComponent2 self, GObject go)
        {
            self.Awake(go);
        }
    }
    public sealed class FUIComponent2 : FUI
    {
        public const string UIPackageName = "Login";
        public const string UIResName = "Component2";
 
        /// <summary>
        /// {uiResName}的组件类型(GComponent、GButton、GProcessBar等)，它们都是GObject的子类。
        /// </summary>
        public GButton self;
            
    public Controller c1;
    public GImage imgNew;
    public const string URL = "ui://gt207zjhlhbm1w";

    private static GObject CreateGObject()
    {
        return UIPackage.CreateObject(UIPackageName, UIResName);
    }
 
    private static void CreateGObjectAsync(UIPackage.CreateObjectCallback result)
    {
        UIPackage.CreateObjectAsync(UIPackageName, UIResName, result);
    }
        
    public static FUIComponent2 CreateInstance()
    {
        return ComponentFactory.Create<FUIComponent2, GObject>(CreateGObject());
    }
        
    public static Task<FUIComponent2> CreateInstanceAsync()
    {
        TaskCompletionSource<FUIComponent2> tcs = new TaskCompletionSource<FUIComponent2>();
        CreateGObjectAsync((go) =>
        {
            tcs.SetResult(ComponentFactory.Create<FUIComponent2, GObject>(go));
        });
        return tcs.Task;
    }
        
    public static FUIComponent2 Create(GObject go)
    {
        return ComponentFactory.Create<FUIComponent2, GObject>(go);
    }
        
    /// <summary>
    /// 通过此方法获取的FUI，在Dispose时不会释放GObject，需要自行管理（一般在配合FGUI的Pool机制时使用）。
    /// </summary>
    public static FUIComponent2 GetFormPool(GObject go)
    {
        var fui = go.Get<FUIComponent2>();
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
        self = (GButton)go;
        self.Add(this);
        var com = go.asCom;
        if(com != null)
        {
    		c1 = com.GetControllerAt(1);
    		imgNew = (GImage)com.GetChildAt(6);
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
        imgNew = null;
        }
    }
}