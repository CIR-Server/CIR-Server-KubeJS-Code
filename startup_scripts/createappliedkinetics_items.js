// [CIR-临时 2026-11-02] 替代 createappliedkinetics 模组的 11 个序列装配半成品
//
// 背景：该模组的配方文件统一用 forge:conditional（Forge 旧格式的「A/B 二选一」包装器），
// 而 NeoForge 21.1 已经移除 ConditionalRecipe 类，只剩 ConditionalOps / ConditionalRecipeOutput。
// 结果就是它的 11 个 create:sequenced_assembly 配方全部解析失败，一个都没进游戏，
// 玩家在 EMI/JEI 里只能看到 AE2 原版的压印器配方。
//
// 这份脚本把半成品和配方整体搬到 KubeJS，搬完之后可以整个删掉 createappliedkinetics 模组。
// 贴图已提取到：kubejs/assets/kubejs/textures/item/incomplete_*.png
// 名称走语言文件：kubejs/assets/kubejs/lang/{en_us,zh_cn,zh_tw}.json
//
// ============================================================
// [CIR-修正 2026-11-02] 第二个参数 'create:sequenced_assembly' 必须加
// ============================================================
// 这是 KubeJS Create 提供的物品类型注册器，对应 Create 的 SequencedAssemblyItem：
//   - stacksTo(1)，不可堆叠
//   - 用耐久条显示序列装配进度（从 AllDataComponents.SEQUENCED_ASSEMBLY 读）
// 不加这个参数就只是普通 Item，进度条没有、序列装配机也不会把它当成过渡物品。
// 所以不要写 .unstackable()，类型本身已经处理了。

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
