// priority: 0

/**
 * @author LingyunAwA
 * @name YunKJS-RemoveRecipe
 * @description 移除配方 KubeJS 脚本
 */

console.log('Loading KubeJS Code: "YunKJS-RemoveRecipe.js"');

ServerEvents.recipes((e) => {
    e.remove({ output: "minecraft:tnt_minecart" });
    // [DW-搬入 2026-11-01] 从 hardcore 服搬入：移除 AE2 / AdvancedAE 原版配方（改由自定义配方替代）
    e.remove({ output: "ae2:cell_component_64k" });
    e.remove({ output: "ae2:cell_component_256k" });
    e.remove({ output: "ae2:portable_item_cell_16k" });
    e.remove({ output: 'ae2:portable_fluid_cell_16k' });
    e.remove({ output: "ae2:portable_item_cell_64k" });
    e.remove({ output: 'ae2:portable_fluid_cell_64k' });
    e.remove({ output: "ae2:portable_item_cell_256k" });
    e.remove({ output: 'ae2:portable_fluid_cell_256k' });
    e.remove({ output: "ae2:wireless_booster" });
    e.remove({ output: "ae2:wireless_receiver" });
    e.remove({ output: "ae2:wireless_access_point" });
    e.remove({ output: "advanced_ae:quantum_helmet" });
    e.remove({ output: "advanced_ae:quantum_chestplate" });
    e.remove({ output: "advanced_ae:quantum_leggings" });
    e.remove({ output: "advanced_ae:quantum_boots" });
    e.remove({ output: "minecraft:netherrack", type: "create:mixing", mod:'createaddition'});
    e.remove({ type: 'create:mixing', input: 'createaddition:biomass', mod:'createaddition'});
    e.remove({ output: "waystones:warp_stone", mod:'waystones'});
    e.remove({ output: "waystones:warp_dust", mod:'waystones'});
    e.remove({ output: "waystones:dormant_shard", mod:'waystones'});
    e.remove({ output: "waystones:blank_scroll", mod:'waystones'});
    e.remove({ output: "waystones:warp_scroll", mod:'waystones'});
    e.remove({ output: "createdieselgenerators:chemical_turret", mod:'createdieselgenerators'});
    // [DW-删除 2026-11-01] 无人机物流(create_mobile_packages)已从服务端移除，无需再删其配方
    // e.remove({ output: 'create_mobile_packages:portable_stock_ticker', input: 'create:redstone_link' });

    // [DW-禁用 2026-11-04] 禁用 ExtendedAE 的无限资源元件（无限水 / 无限圆石）
    // ExtendedAE 1.21-2.2.43 里只有这两个 infinity cell，没有岩浆版。
    // 注：无限元件是物品本身的属性（InfinityCellInventory），删配方只能阻止新造，
    //    已经造出来的元件仍然可用。要彻底堵死得靠模组层拦截。
    e.remove({ output: "extendedae:infinity_water_cell" });
    e.remove({ output: "extendedae:infinity_cobblestone_cell" });
    e.remove({ output: "ae2wtlib:quantum_bridge_card" });
});
