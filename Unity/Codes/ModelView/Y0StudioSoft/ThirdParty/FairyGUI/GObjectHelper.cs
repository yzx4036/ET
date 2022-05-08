using FairyGUI;
using System.Collections.Generic;

namespace ET
{
    public static class GObjectHelper
    {
        private static readonly Dictionary<GObject, FUIGObjectComponent> keyValuePairs = new Dictionary<GObject, FUIGObjectComponent>();

        public static FUIGObjectComponent Get(this GObject self)
        {
            if (self != null && keyValuePairs.ContainsKey(self))
            {
                return keyValuePairs[self];
            }

            return default;
        }

        public static void Add(this GObject self, FUIGObjectComponent fui)
        {
            if (self != null && fui != null)
            {
                keyValuePairs[self] = fui;
            }
        }

        public static FUIGObjectComponent Remove(this GObject self)
        {
            if (self != null && keyValuePairs.ContainsKey(self))
            {
                var result = keyValuePairs[self];
                keyValuePairs.Remove(self);
                return result;
            }

            return null;
        }
    }
}