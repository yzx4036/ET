﻿using System.Collections.Generic;

namespace ET
{
    
    /// <summary>
    /// UI栈
    /// </summary>
    public class FUIStackComponent: Entity
    {
        private readonly Stack<FUI1> uis = new Stack<FUI1>();

        public int Count
        {
            get
            {
                return uis.Count;
            }
        }

        public void Push(FUI1 fui)
        {
            var fui1s = uis;
            if (fui1s != null && fui1s.Count >= 1)
                uis.Peek().Visible = false;
            uis.Push(fui);
        }

        public void Pop()
        {
            FUI1 fui = uis.Pop();
            fui.Dispose();
            if (uis.Count > 0)
            {
                uis.Peek().Visible = true;
            }
        }

        public void Clear()
        {
            while (uis.Count > 0)
            {
                FUI1 fui = uis.Pop();
                fui.Dispose();
            }
        }
    }
}