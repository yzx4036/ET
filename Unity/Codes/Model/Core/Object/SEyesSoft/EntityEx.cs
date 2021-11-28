using System;

namespace ET
{
    public partial class Entity
    {
        public static Entity CreateE(Type type, bool isFromPool)
        {
            return Create(type, isFromPool);
        }
        
        public Entity AddChildByType(Type type, bool isFromPool = false) where T : Entity
        {
            Entity component = Entity.Create(type, isFromPool);
            component.Id = IdGenerater.Instance.GenerateId();
            component.Parent = this;

            EventSystem.Instance.Awake(component);
            return component;
        }
    }
}