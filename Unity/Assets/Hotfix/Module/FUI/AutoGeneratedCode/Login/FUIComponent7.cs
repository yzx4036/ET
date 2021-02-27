/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
using FairyGUI;
using ETModel;
using System.Threading.Tasks;

namespace ETHotfix.FGUI
{
    [ObjectSystem]
    public class FUIComponent7AwakeSystem : AwakeSystem<FUIComponent7, GObject>
    {
        public override void Awake(FUIComponent7 self, GObject go)
        {
            self.Awake(go);
        }
    }
    public sealed class FUIComponent7 : FUI
    {
        public const string UIPackageName = "Login";
        public const string UIResName = "Component7";
 
        /// <summary>
        /// {uiResName}的组件类型(GComponent、GButton、GProcessBar等)，它们都是GObject的子类。
        /// </summary>
        public GButton self;
            
    public GImage btnGongGao;
    public const string URL = "ui://gt207zjhowjx28";

    private static GObject CreateGObject()
    {
        return UIPackage.CreateObject(UIPackageName, UIResName);
    }
 
    private static void CreateGObjectAsync(UIPackage.CreateObjectCallback result)
    {
        UIPackage.CreateObjectAsync(UIPackageName, UIResName, result);
    }
        
    public static FUIComponent7 CreateInstance()
    {
        return ComponentFactory.Create<FUIComponent7, GObject>(CreateGObject());
    }
        
    public static Task<FUIComponent7> CreateInstanceAsync()
    {
        TaskCompletionSource<FUIComponent7> tcs = new TaskCompletionSource<FUIComponent7>();
        CreateGObjectAsync((go) =>
        {
            tcs.SetResult(ComponentFactory.Create<FUIComponent7, GObject>(go));
        });
        return tcs.Task;
    }
        
    public static FUIComponent7 Create(GObject go)
    {
        return ComponentFactory.Create<FUIComponent7, GObject>(go);
    }
        
    /// <summary>
    /// 通过此方法获取的FUI，在Dispose时不会释放GObject，需要自行管理（一般在配合FGUI的Pool机制时使用）。
    /// </summary>
    public static FUIComponent7 GetFormPool(GObject go)
    {
        var fui = go.Get<FUIComponent7>();
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
    		btnGongGao = (GImage)com.GetChildAt(0);
    	}
    }
    public override void Dispose()
    {
        if(IsDisposed)
        	return;
        base.Dispose();
        self.Remove();
        self = null;
        btnGongGao = null;
        }
    }
}