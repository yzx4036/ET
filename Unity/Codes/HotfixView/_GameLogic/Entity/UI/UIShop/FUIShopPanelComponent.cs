
using System.Collections.Generic;
using FairyGUI;

namespace ET
{
   public class FUIShopPanelComponent : Entity
    {
        public FUIShopPanel fui;
        public static FUIShopPanelComponent Instance;
        public int shopId;
        //
        // public List<ShopConfig> ShopItems;
        // public ShopConfig currShopItem;
        public Unit unit;
    }
}