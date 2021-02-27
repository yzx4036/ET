/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
using FairyGUI;
using ETModel;
using System.Threading.Tasks;

namespace ETHotfix.FGUI
{
    [ObjectSystem]
    public class FUILoginMainAwakeSystem : AwakeSystem<FUILoginMain, GObject>
    {
        public override void Awake(FUILoginMain self, GObject go)
        {
            self.Awake(go);
        }
    }
    public sealed class FUILoginMain : FUI
    {
        public const string UIPackageName = "Login";
        public const string UIResName = "LoginMain";
 
        /// <summary>
        /// {uiResName}的组件类型(GComponent、GButton、GProcessBar等)，它们都是GObject的子类。
        /// </summary>
        public GComponent self;
            
    public Controller c1;
    public FUIComponent7 btnGongGao;
    public FUIComponent8 btnZhanHao;
    public GButton btnJinRu;
    public FUIComponent6 btnServer;
    public GGraph btnBg;
    public GTextInput txtZhanHao;
    public GTextInput txtMiMa;
    public GButton btnDengLu;
    public GList tabServer;
    public GList listServer;
    public GTextInput txtZhanHao2;
    public GTextInput txtMiMa2;
    public GButton btnZhuCe;
    public const string URL = "ui://gt207zjhlhbm1s";

    private static GObject CreateGObject()
    {
        return UIPackage.CreateObject(UIPackageName, UIResName);
    }
 
    private static void CreateGObjectAsync(UIPackage.CreateObjectCallback result)
    {
        UIPackage.CreateObjectAsync(UIPackageName, UIResName, result);
    }
        
    public static FUILoginMain CreateInstance()
    {
        return ComponentFactory.Create<FUILoginMain, GObject>(CreateGObject());
    }
        
    public static Task<FUILoginMain> CreateInstanceAsync()
    {
        TaskCompletionSource<FUILoginMain> tcs = new TaskCompletionSource<FUILoginMain>();
        CreateGObjectAsync((go) =>
        {
            tcs.SetResult(ComponentFactory.Create<FUILoginMain, GObject>(go));
        });
        return tcs.Task;
    }
        
    public static FUILoginMain Create(GObject go)
    {
        return ComponentFactory.Create<FUILoginMain, GObject>(go);
    }
        
    /// <summary>
    /// 通过此方法获取的FUI，在Dispose时不会释放GObject，需要自行管理（一般在配合FGUI的Pool机制时使用）。
    /// </summary>
    public static FUILoginMain GetFormPool(GObject go)
    {
        var fui = go.Get<FUILoginMain>();
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
    		btnGongGao = FUIComponent7.Create(com.GetChildAt(1));
    		btnZhanHao = FUIComponent8.Create(com.GetChildAt(2));
    		btnJinRu = (GButton)com.GetChildAt(3);
    		btnServer = FUIComponent6.Create(com.GetChildAt(4));
    		btnBg = (GGraph)com.GetChildAt(11);
    		txtZhanHao = (GTextInput)com.GetChildAt(18);
    		txtMiMa = (GTextInput)com.GetChildAt(19);
    		btnDengLu = (GButton)com.GetChildAt(21);
    		tabServer = (GList)com.GetChildAt(24);
    		listServer = (GList)com.GetChildAt(25);
    		txtZhanHao2 = (GTextInput)com.GetChildAt(38);
    		txtMiMa2 = (GTextInput)com.GetChildAt(39);
    		btnZhuCe = (GButton)com.GetChildAt(40);
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
        btnGongGao.Dispose();
        btnGongGao = null;
        btnZhanHao.Dispose();
        btnZhanHao = null;
        btnJinRu = null;
        btnServer.Dispose();
        btnServer = null;
        btnBg = null;
        txtZhanHao = null;
        txtMiMa = null;
        btnDengLu = null;
        tabServer = null;
        listServer = null;
        txtZhanHao2 = null;
        txtMiMa2 = null;
        btnZhuCe = null;
        }
    }
}