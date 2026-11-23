// 隐藏所有 incomplete_* 半成品，让它们不在创造模式物品栏里出现。
//
// 半成品只该在序列组装的过程中出现。机械动力自己的半成品也是这么做的：
// 注册了物品，但不塞进任何物品栏页。
//
// 说明：
// - 这个事件只在 startup 阶段生效，改完要重启游戏
// - event.remove() 要把 ID 写全，不支持 * 通配（会当成字面 ID 去查，然后报不存在）
// - 只作用于 kubejs 自己的物品栏页；其他 mod 的半成品在它们各自的页里
// - EMI 是独立索引，这一层管不到它

const HIDDEN_INCOMPLETE = [
    // 硅板 / 电路板 / 各处理器半成品
    'kubejs:incomplete_silicon_print',
    'kubejs:incomplete_printed_logic_circuit',
    'kubejs:incomplete_printed_calculation_circuit',
    'kubejs:incomplete_printed_engineering_circuit',
    'kubejs:incomplete_logic_processor',
    'kubejs:incomplete_calculation_processor',
    'kubejs:incomplete_engineering_processor',
    // 压印模板半成品
    'kubejs:incomplete_silicon_press',
    'kubejs:incomplete_logic_processor_press',
    'kubejs:incomplete_calculation_processor_press',
    'kubejs:incomplete_engineering_processor_press',
    // 材料与人造方块半成品
    'kubejs:incomplete_reinforced_deepslate',
    'kubejs:incomplete_budding_amethyst',
    'kubejs:incomplete_eternal_reinforced_glass',
    'kubejs:incomplete_humanmade_diamond',
    'kubejs:incomplete_cell_component_256k',
    // 星辉构件半成品
    'kubejs:incomplete_stella_mechanism'
]

StartupEvents.modifyCreativeTab('kubejs:tab', event => {
    HIDDEN_INCOMPLETE.forEach(id => event.remove(id))
    // Existing gem assembly intermediates are hidden; firstmade perfect gems remain visible.
    if (!Platform.isLoaded('apotheosis') || !Platform.isLoaded('create')) return;
    const gemIntermediates = [{"id":"kubejs:incomplete_apotheosis_core_ballast","requires":[]},{"id":"kubejs:incomplete_apotheosis_core_brawlers","requires":[]},{"id":"kubejs:incomplete_apotheosis_core_breach","requires":[]},{"id":"kubejs:incomplete_apotheosis_core_combatant","requires":[]},{"id":"kubejs:incomplete_apotheosis_core_guardian","requires":[]},{"id":"kubejs:incomplete_apotheosis_core_lightning","requires":[]},{"id":"kubejs:incomplete_apotheosis_core_lunar","requires":[]},{"id":"kubejs:incomplete_apotheosis_core_samurai","requires":[]},{"id":"kubejs:incomplete_apotheosis_core_slipstream","requires":[]},{"id":"kubejs:incomplete_apotheosis_core_solar","requires":[]},{"id":"kubejs:incomplete_apotheosis_core_splendor","requires":[]},{"id":"kubejs:incomplete_apotheosis_core_tyrannical","requires":[]},{"id":"kubejs:incomplete_apotheosis_core_warlord","requires":[]},{"id":"kubejs:incomplete_apotheosis_overworld_earth","requires":[]},{"id":"kubejs:incomplete_apotheosis_overworld_royalty","requires":[]},{"id":"kubejs:incomplete_apotheosis_overworld_verdant_ruin","requires":[]},{"id":"kubejs:incomplete_apotheosis_the_end_mageslayer","requires":[]},{"id":"kubejs:incomplete_apotheosis_the_nether_blood_lord","requires":[]},{"id":"kubejs:incomplete_apotheosis_the_nether_inferno","requires":["apothic_enchanting"]},{"id":"kubejs:incomplete_apotheosis_the_nether_molten_breach","requires":[]},{"id":"kubejs:incomplete_apotheosis_twilight_forest","requires":["twilightforest"]},{"id":"kubejs:incomplete_apotheosis_twilight_queen","requires":["twilightforest"]},{"id":"kubejs:incomplete_apothic_compats_ars_nouveau_mana","requires":["ars_nouveau"]},{"id":"kubejs:incomplete_apothic_compats_malum_etheric","requires":["malum"]},{"id":"kubejs:incomplete_apothic_compats_malum_soul_stained","requires":["malum"]},{"id":"kubejs:incomplete_apothic_compats_malum_thief","requires":["malum"]}];
    gemIntermediates.forEach(gem => {
        if (gem.requires.every(mod => Platform.isLoaded(mod))) event.remove(gem.id);
    });

})
