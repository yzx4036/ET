using FairyGUI;
using System.Collections.Generic;

namespace ET
{
    public static class GObjectHelper
    {
        private static Dictionary<GObject, FUI1> keyValuePairs = new Dictionary<GObject, FUI1>();

        public static FUI1 Get(this GObject self)
        {
            if (self != null && keyValuePairs.ContainsKey(self))
            {
                return keyValuePairs[self];
            }

            return default;
        }

        public static void Add(this GObject self, FUI1 fui)
        {
            if (self != null && fui != null)
            {
                keyValuePairs[self] = fui;
            }
        }

        public static FUI1 Remove(this GObject self)
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