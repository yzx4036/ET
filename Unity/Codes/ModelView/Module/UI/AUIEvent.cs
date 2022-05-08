using Y0StudioSoft.ET;

namespace ET
{
    [FriendClass(typeof(UIComponent))]
    public abstract class AUIEvent
    {
        public abstract ETTask<UI> OnCreate(UIComponent uiComponent, UILayer uiLayer);

        public virtual void OnRemove(UIComponent uiComponent, string uiType)
        {
            UI _ui = null;
            if (uiComponent.UIs.TryGetValue(uiType, out _ui))
            {
                Log.Debug($">>>>go{_ui.GameObject.name} 回收{_ui.GameObject.GetInstanceID()}");
                AddressablesResComponent.Instance.RecycleGameObject($"Assets/Bundles/UI/{uiType}.prefab", _ui.GameObject);
            }
        }
    }
}