using System;
using SEyesSoft.ET;
using UnityEngine;

namespace ET
{
	[UIEvent(UIType.UILoading)]
    public class UILoadingEvent: AUIEvent
    {
        public override async ETTask<UI> OnCreate(UIComponent uiComponent, UILayer uiLayer)
        {
	        try
	        {
		        await ETTask.CompletedTask;
				// GameObject bundleGameObject = ((GameObject)Resources.Load("KV")).Get<GameObject>(UIType.UILoading);
				// GameObject go = UnityEngine.Object.Instantiate(bundleGameObject);
				var  gameObject = await AddressablesResComponent.Instance.InstantiateAsync("Assets/Bundles/UI/UILoading.prefab", UIEventComponent.Instance.UILayers[(int)uiLayer]);
				gameObject.layer = LayerMask.NameToLayer(LayerNames.UI);
				UI ui = uiComponent.AddChild<UI, string, GameObject>(UIType.UILoading, gameObject);

				ui.AddComponent<UILoadingComponent>();
				return ui;
	        }
	        catch (Exception e)
	        {
				Log.Error(e);
		        return null;
	        }
		}

        public override void OnRemove(UIComponent uiComponent, string uiType)
        {
	        base.OnRemove(uiComponent, uiType);
        }
    }
}