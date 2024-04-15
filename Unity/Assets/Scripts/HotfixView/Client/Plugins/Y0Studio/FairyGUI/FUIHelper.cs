using System;
using System.Collections.Generic;
using FairyGUI;
using FairyGUI.Dynamic;

namespace ET.Client
{
    [FriendOfAttribute(typeof (ET.Client.FUIComponent))]
    public static class FUIHelper
    {
        #region AddListnerAsync(this GObject self, Func<ETTask> action)

        public static void AddListnerAsync(this GObject self, Func<ETTask> action)
        {
            async ETTask ClickActionAsync()
            {
                FUIEventComponent.Instance.isClicked = true;
                await action();
                FUIEventComponent.Instance.isClicked = false;
            }

            self.onClick.Set(() =>
            {
                if (FUIEventComponent.Instance.isClicked)
                {
                    return;
                }

                ClickActionAsync().Coroutine();
            });
        }

        public static void AddListnerAsync<P1>(this GObject self, Func<P1, ETTask> action, P1 p1)
        {
            async ETTask ClickActionAsync()
            {
                FUIEventComponent.Instance.isClicked = true;
                await action(p1);
                FUIEventComponent.Instance.isClicked = false;
            }

            self.onClick.Set(() =>
            {
                if (FUIEventComponent.Instance.isClicked)
                {
                    return;
                }

                ClickActionAsync().Coroutine();
            });
        }

        public static void AddListnerAsync<P1, P2>(this GObject self, Func<P1, P2, ETTask> action, P1 p1, P2 p2)
        {
            async ETTask ClickActionAsync()
            {
                FUIEventComponent.Instance.isClicked = true;
                await action(p1, p2);
                FUIEventComponent.Instance.isClicked = false;
            }

            self.onClick.Set(() =>
            {
                if (FUIEventComponent.Instance.isClicked)
                {
                    return;
                }

                ClickActionAsync().Coroutine();
            });
        }

        public static void AddListnerAsync<P1, P2, P3>(this GObject self, Func<P1, P2, P3, ETTask> action, P1 p1, P2 p2, P3 p3)
        {
            async ETTask ClickActionAsync()
            {
                FUIEventComponent.Instance.isClicked = true;
                await action(p1, p2, p3);
                FUIEventComponent.Instance.isClicked = false;
            }

            self.onClick.Set(() =>
            {
                if (FUIEventComponent.Instance.isClicked)
                {
                    return;
                }

                ClickActionAsync().Coroutine();
            });
        }

        #endregion

        #region AddListner(this GObject self, Action action)

        public static void AddListner(this GObject self, Action action)
        {
            self.onClick.Set(() => { action?.Invoke(); });
        }

        public static void AddListner<P1>(this GObject self, Action<P1> action, P1 p1)
        {
            self.onClick.Set(() => { action?.Invoke(p1); });
        }

        public static void AddListner<P1, P2>(this GObject self, Action<P1, P2> action, P1 p1, P2 p2)
        {
            self.onClick.Set(() => { action?.Invoke(p1, p2); });
        }

        public static void AddListner<P1, P2, P3>(this GObject self, Action<P1, P2, P3> action, P1 p1, P2 p2, P3 p3)
        {
            self.onClick.Set(() => { action?.Invoke(p1, p2, p3); });
        }

        #endregion

        #region AddListnerAsync(this GObject self, Func<EventContext, ETTask> action)

        public static void AddListnerAsync(this GObject self, Func<EventContext, ETTask> action)
        {
            async ETTask ClickActionAsync(EventContext context)
            {
                FUIEventComponent.Instance.isClicked = true;
                await action(context);
                FUIEventComponent.Instance.isClicked = false;
            }

            self.onClick.Set((context) =>
            {
                if (FUIEventComponent.Instance.isClicked)
                {
                    return;
                }

                ClickActionAsync(context).Coroutine();
            });
        }

        public static void AddListnerAsync<P1>(this GObject self, Func<EventContext, P1, ETTask> action, P1 p1)
        {
            async ETTask ClickActionAsync(EventContext context)
            {
                FUIEventComponent.Instance.isClicked = true;
                await action(context, p1);
                FUIEventComponent.Instance.isClicked = false;
            }

            self.onClick.Set((context) =>
            {
                if (FUIEventComponent.Instance.isClicked)
                {
                    return;
                }

                ClickActionAsync(context).Coroutine();
            });
        }

        public static void AddListnerAsync<P1, P2>(this GObject self, Func<EventContext, P1, P2, ETTask> action, P1 p1, P2 p2)
        {
            async ETTask ClickActionAsync(EventContext context)
            {
                FUIEventComponent.Instance.isClicked = true;
                await action(context, p1, p2);
                FUIEventComponent.Instance.isClicked = false;
            }

            self.onClick.Set((context) =>
            {
                if (FUIEventComponent.Instance.isClicked)
                {
                    return;
                }

                ClickActionAsync(context).Coroutine();
            });
        }

        public static void AddListnerAsync<P1, P2, P3>(this GObject self, Func<EventContext, P1, P2, P3, ETTask> action, P1 p1, P2 p2, P3 p3)
        {
            async ETTask ClickActionAsync(EventContext context)
            {
                FUIEventComponent.Instance.isClicked = true;
                await action(context, p1, p2, p3);
                FUIEventComponent.Instance.isClicked = false;
            }

            self.onClick.Set((context) =>
            {
                if (FUIEventComponent.Instance.isClicked)
                {
                    return;
                }

                ClickActionAsync(context).Coroutine();
            });
        }

        #endregion

        #region AddListner(this GObject self, Action<EventContext> action)

        public static void AddListner(this GObject self, Action<EventContext> action)
        {
            self.onClick.Set((contex) => { action?.Invoke(contex); });
        }

        public static void AddListner<P1>(this GObject self, Action<EventContext, P1> action, P1 p1)
        {
            self.onClick.Set((contex) => { action?.Invoke(contex, p1); });
        }

        public static void AddListner<P1, P2>(this GObject self, Action<EventContext, P1, P2> action, P1 p1, P2 p2)
        {
            self.onClick.Set((contex) => { action?.Invoke(contex, p1, p2); });
        }

        public static void AddListner<P1, P2, P3>(this GObject self, Action<EventContext, P1, P2, P3> action, P1 p1, P2 p2, P3 p3)
        {
            self.onClick.Set((contex) => { action?.Invoke(contex, p1, p2, p3); });
        }

        #endregion

        public static T CreateInstance<T>(string pPackageName, string pResName) where T : GComponent
        {
            return (T) UIPackage.CreateObject(pPackageName, pResName);
        }

        // public static IFUIViewEntity AddChild<T1, T2, K>(T2 pParentFUIViewEntity, GComponent pPrentGComponent)
        //         where T1 : Entity, IFUIViewEntity, IAwake<T2, GComponent> 
        //         where T2 : Entity, IFUIViewEntity 
        //         where K : GComponent
        // {
        //     var _fuiGComponentType = typeof (K);
        //     if (FUIComponent.Instance.FUIGComponentInfoDic.TryGetValue(_fuiGComponentType.FullName, out var _fuiGComponentInfo))
        //     {
        //         var _fuiGComponent = CreateInstance<K>(_fuiGComponentInfo.PackageName, _fuiGComponentInfo.ResName);
        //         var _fuiEntity = pParentFUIViewEntity.AddChild<T1, GComponent, GComponent>(_fuiGComponent, pPrentGComponent, true);
        //         return _fuiEntity;
        //     }
        //     else
        //     {
        //         throw new Exception($"未找到对应的FairyGUI组件信息：{_fuiGComponentType.FullName}");
        //     }
        //
        //     // var _headBarComp = CreateInstance<K>();
        //     // var _headBarEntity =
        //     //         pParentFUIViewEntity.AddChild<HeadBar, ET.Client.LevelBattle.FUI_HeadBar, GComponent>(_headBarComp,
        //     //             self.FUILevelBattleSceneContainer, true);
        // }
    }
}