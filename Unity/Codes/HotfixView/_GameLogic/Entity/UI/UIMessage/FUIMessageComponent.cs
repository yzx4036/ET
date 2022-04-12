using FairyGUI;

namespace ET
{
    public enum MessageBoxType
    {
        One,
        Two
    }
    public class FUIMessageComponent : Entity
    {
        public FUIMessage fui;
        public Window win;
        public static FUIMessageComponent Instance;
    }
}