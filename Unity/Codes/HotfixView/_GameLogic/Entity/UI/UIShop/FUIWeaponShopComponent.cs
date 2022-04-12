using System.Collections.Generic;
using FairyGUI;

namespace ET
{
    public class FUIWeaponShopComponent : Entity
    {
        public FUIWeaponShop fui;
        public static FUIWeaponShopComponent Instance;

        // public List<ShopConfig> ShopItems;
        // public ShopConfig currShopItem;
        public Unit unit;
    }
}