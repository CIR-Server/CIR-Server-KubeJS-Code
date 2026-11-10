// [CIR 2026-11-02] 替代 createappliedkinetics 模组的 11 个序列装配半成品
//
// 背景：该模组的配方文件统一用 forge:conditional（Forge 旧格式的「A/B 二选一」包装器），
// 而 NeoForge 21.1 已经移除 ConditionalRecipe 类，只剩 ConditionalOps / ConditionalRecipeOutput。
// 结果 11 个 create:sequenced_assembly 配方全部解析失败，一个都没进游戏.
// 在 EMI/JEI 里只能看到 AE2 原版的压印器配方。
console.log('Loading KubeJS Code: "createappliedkinetics_items.js"');

StartupEvents.registry('item', event => {
    // 物品注册-硅板（半成品）
    event.create('kubejs:incomplete_silicon_print', 'create:sequenced_assembly')

    // 物品注册-逻辑电路板（半成品）
    event.create('kubejs:incomplete_printed_logic_circuit', 'create:sequenced_assembly')

    // 物品注册-运算电路板（半成品）
    event.create('kubejs:incomplete_printed_calculation_circuit', 'create:sequenced_assembly')

    // 物品注册-工程电路板（半成品）
    event.create('kubejs:incomplete_printed_engineering_circuit', 'create:sequenced_assembly')

    // 物品注册-硅压印模板（半成品）
    event.create('kubejs:incomplete_silicon_press', 'create:sequenced_assembly')

    // 物品注册-逻辑压印模板（半成品）
    event.create('kubejs:incomplete_logic_processor_press', 'create:sequenced_assembly')

    // 物品注册-运算压印模板（半成品）
    event.create('kubejs:incomplete_calculation_processor_press', 'create:sequenced_assembly')

    // 物品注册-工程压印模板（半成品）
    event.create('kubejs:incomplete_engineering_processor_press', 'create:sequenced_assembly')

    // 物品注册-逻辑处理器（半成品）
    event.create('kubejs:incomplete_logic_processor', 'create:sequenced_assembly')

    // 物品注册-运算处理器（半成品）
    event.create('kubejs:incomplete_calculation_processor', 'create:sequenced_assembly')

    // 物品注册-工程处理器（半成品）
    event.create('kubejs:incomplete_engineering_processor', 'create:sequenced_assembly')
});
