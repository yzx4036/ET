using System.Collections.Generic;

namespace ET
{
    [FriendClass(typeof (FUIStackComponent))]
    public static class FUIStackComponentSystem
    {
        [ObjectSystem]
        public class FUIStackComponentAwakeSystem: AwakeSystem<FUIStackComponent>
        {
            public override void Awake(FUIStackComponent self)
            {
            }
        }

        [ObjectSystem]
        public class FUIStackComponentDestroySystem: DestroySystem<FUIStackComponent>
        {
            public override void Destroy(FUIStackComponent self)
            {
            }
        }

        public static void Push(this FUIStackComponent self, FUIGObjectComponent fui)
        {
            var fui1s = self.uis;
            if (fui1s != null && fui1s.Count >= 1)
                self.uis.Peek().Visible = false;
            self.uis.Push(fui);
        }

        public static void Pop(this FUIStackComponent self)
        {
            FUIGObjectComponent fui = self.uis.Pop();
            fui.Dispose();
            if (self.uis.Count > 0)
            {
                self.uis.Peek().Visible = true;
            }
        }

        public static void Clear(this FUIStackComponent self)
        {
            while (self.uis.Count > 0)
            {
                FUIGObjectComponent fui = self.uis.Pop();
                fui.Dispose();
            }
        }
    }

    /// <summary>
    /// UI栈
    /// </summary>
    public class FUIStackComponent: Entity, IDestroy, IAwake
    {
        public readonly Stack<FUIGObjectComponent> uis = new Stack<FUIGObjectComponent>();

        public int Count
        {
            get
            {
                return uis.Count;
            }
        }
    }
}