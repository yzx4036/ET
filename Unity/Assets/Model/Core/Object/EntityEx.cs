using System;

namespace ET
{
    public partial class Entity
    {
        public static Entity CreateE(Type type, bool isFromPool)
        {
            return Create(type, isFromPool);
        }
    }
}