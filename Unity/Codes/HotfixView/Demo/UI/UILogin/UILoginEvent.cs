using System;
using Y0StudioSoft.ET;
using UnityEngine;

namespace ET
{
    [UIEvent(UIType.UILogin)]
    public class UILoginEvent: AUIEvent
    {
        public override async ETTask<UI> OnCreate(UIComponent uiComponent, UILayer uiLayer)
        {
            // await uiComponent.Domain.GetComponent<ResourcesLoaderComponent>().LoadAsync(UIType.UILogin.StringToAB());
            // GameObject bundleGameObject = (GameObject) ResourcesComponent.Instance.GetAsset(UIType.UILogin.StringToAB(), UIType.UILogin);
            // GameObject gameObject = UnityEngine.Object.Instantiate(bundleGameObject, UIEventComponent.Instance.UILayers[(int)uiLayer]);
            var  gameObject = await AddressablesResComponent.Instance.InstantiateAsync("Assets/Bundles/UI/UILogin.prefab", UIEventComponent.Instance.UILayers[(int)uiLayer]);
            Log.Debug($">>>>>{gameObject.name}");
            UI ui = uiComponent.AddChild<UI, string, GameObject>(UIType.UILogin, gameObject);
            ui.AddComponent<UILoginComponent>();
            return ui;
        }

        public override void OnRemove(UIComponent uiComponent, string uiType)
        {
            base.OnRemove(uiComponent, uiType);
            // ResourcesComponent.Instance.UnloadBundle(UIType.UILogin.StringToAB());
        }
    }
}