// [CIR-临时 2026-11-02] 修复 createappliedkinetics 的 11 个序列装配配方
//
// 原模组的配方用 forge:conditional 包装，NeoForge 21.1 不认，导致：
//   1. 11 个 create:sequenced_assembly 配方全部不加载
//   2. 因为文件覆盖失败，AE2 原版的压印器配方照旧存在
// 这份脚本做两件事：
//   A. 删掉 AE2 原版的 11 个压印器配方（处理器 / 电路板 / 压印模板）
//   B. 用 KubeJS 重写这 11 个序列装配配方
//
// 保留不动的：certus_quartz_dust / ender_dust / fluix_dust / sky_stone_dust 这 4 个粉末配方，
// 原模组也没有替代它们，删了会死锁。
//
// ============================================================
// [CIR-修正 2026-11-02] Create 6.0.10 序列装配字段名踩坑记录
// ============================================================
// 参照对像：Create 自带的 data/create/recipe/precision_mechanism.json（能正常工作的）
//
// 1) 顶层 transitional 是蛇形，且类型是 ProcessingOutput（不是 Ingredient）：
//      "transitional_item": { "id": "..." }
//    写成 "transitionalItem": { "item": "..." } 会报
//      JsonParseException: No key transitional_item in MapLike[...]
//
// 2) 所有 ProcessingOutput（顶层 results 和 sequence[].results）都用 "id"：
//      "results": [ { "id": "..." } ]
//    ProcessingOutput 有两个 codec：
//      CODEC_NEW → fieldOf("id")
//      CODEC_OLD → fieldOf("item")  @Deprecated，内部也是 ItemStack.SINGLE_ITEM_CODEC
//    看着 CODEC = Codec.withAlternative(NEW, OLD) 能回退，实际 1.21 的 SINGLE_ITEM_CODEC
//    也要求 "id"，两条路都卡同一个字段，报 "No key id in MapLike[...]"。
//
// 3) deploying 的保留工具标记是蛇形：
//      "keep_held_item": true
//    写成 "keepHeldItem": true 会被忽略（不报错但会吃掉模板）。
//
// 4) ingredient / sequence[].ingredients 是 Ingredient 类型，仍然用 "item" 或 "tag"：
//      "ingredient": { "item": "..." }
//      "ingredients": [ { "item": "..." }, { "item": "..." } ]
//
// 物品侧见 startup_scripts/createappliedkinetics_items.js

console.log('Loading KubeJS Code: "createappliedkinetics_recipes.js"');

ServerEvents.recipes(event => {

    // ============================================================
    // A. 删除 AE2 原版压印器配方（只删这 11 个，粉末配方保留）
    // ============================================================
    const removedInscriberRecipes = [
        'ae2:inscriber/silicon_print',
        'ae2:inscriber/logic_processor_print',
        'ae2:inscriber/calculation_processor_print',
        'ae2:inscriber/engineering_processor_print',
        'ae2:inscriber/silicon_press',
        'ae2:inscriber/logic_processor_press',
        'ae2:inscriber/calculation_processor_press',
        'ae2:inscriber/engineering_processor_press',
        'ae2:inscriber/logic_processor',
        'ae2:inscriber/calculation_processor',
        'ae2:inscriber/engineering_processor'
    ];
    removedInscriberRecipes.forEach(id => event.remove({ id: id }));

    // ============================================================
    // B. 序列装配配方
    // 用 event.custom 直写 JSON：字段名必须严格按 Create 的 codec（见上方踩坑记录）。
    // ============================================================

    /**
     * 生成一个序列装配配方的 JSON。
     * 注意三处蛇形 / id：
     *   transitional_item → { "id": ... }
     *   results           → [ { "id": ... } ]
     *   ingredient        → { "item": ... }
     */
    function seqAssembly(input, trans, output, steps) {
        return {
            "type": "create:sequenced_assembly",
            "ingredient": { "item": input },
            "transitional_item": { "id": trans },
            "sequence": steps,
            "results": [ { "id": output } ],
            "loops": 1
        };
    }

    /** 部署步骤：ingredients 用 item，results 用 id，保留工具用 keep_held_item */
    function deploy(trans, material, keepHeld) {
        const step = {
            "type": "create:deploying",
            "ingredients": [
                { "item": trans },
                { "item": material }
            ],
            "results": [ { "id": trans } ]
        };
        if (keepHeld) { step.keep_held_item = true; }
        return step;
    }

    /** 压板步骤 */
    function press(trans) {
        return {
            "type": "create:pressing",
            "ingredients": [ { "item": trans } ],
            "results": [ { "id": trans } ]
        };
    }

    // ------------------------------------------------------------
    // 1. 硅板（ae2:silicon → printed_silicon）
    // ------------------------------------------------------------
    event.custom(seqAssembly(
        'ae2:silicon', 'kubejs:incomplete_silicon_print', 'ae2:printed_silicon',
        [
            deploy('kubejs:incomplete_silicon_print', 'ae2:silicon_press', true),
            press('kubejs:incomplete_silicon_print')
        ]
    ));

    // ------------------------------------------------------------
    // 2. 逻辑电路板（金板 → printed_logic_processor）
    // ------------------------------------------------------------
    event.custom(seqAssembly(
        'create:golden_sheet', 'kubejs:incomplete_printed_logic_circuit', 'ae2:printed_logic_processor',
        [
            deploy('kubejs:incomplete_printed_logic_circuit', 'ae2:logic_processor_press', true),
            press('kubejs:incomplete_printed_logic_circuit')
        ]
    ));

    // ------------------------------------------------------------
    // 3. 运算电路板（赛特斯石英 → printed_calculation_processor）
    // ------------------------------------------------------------
    event.custom(seqAssembly(
        'ae2:certus_quartz_crystal', 'kubejs:incomplete_printed_calculation_circuit', 'ae2:printed_calculation_processor',
        [
            deploy('kubejs:incomplete_printed_calculation_circuit', 'ae2:calculation_processor_press', true),
            press('kubejs:incomplete_printed_calculation_circuit')
        ]
    ));

    // ------------------------------------------------------------
    // 4. 工程电路板（钻石 → printed_engineering_processor）
    // ------------------------------------------------------------
    event.custom(seqAssembly(
        'minecraft:diamond', 'kubejs:incomplete_printed_engineering_circuit', 'ae2:printed_engineering_processor',
        [
            deploy('kubejs:incomplete_printed_engineering_circuit', 'ae2:engineering_processor_press', true),
            press('kubejs:incomplete_printed_engineering_circuit')
        ]
    ));

    // ------------------------------------------------------------
    // 5. 硅压印模板（铁板 + 已有模板 → 复制一份）
    // ------------------------------------------------------------
    event.custom(seqAssembly(
        'create:iron_sheet', 'kubejs:incomplete_silicon_press', 'ae2:silicon_press',
        [
            deploy('kubejs:incomplete_silicon_press', 'ae2:silicon_press', true),
            press('kubejs:incomplete_silicon_press')
        ]
    ));

    // ------------------------------------------------------------
    // 6. 逻辑压印模板
    // ------------------------------------------------------------
    event.custom(seqAssembly(
        'create:iron_sheet', 'kubejs:incomplete_logic_processor_press', 'ae2:logic_processor_press',
        [
            deploy('kubejs:incomplete_logic_processor_press', 'ae2:logic_processor_press', true),
            press('kubejs:incomplete_logic_processor_press')
        ]
    ));

    // ------------------------------------------------------------
    // 7. 运算压印模板
    // ------------------------------------------------------------
    event.custom(seqAssembly(
        'create:iron_sheet', 'kubejs:incomplete_calculation_processor_press', 'ae2:calculation_processor_press',
        [
            deploy('kubejs:incomplete_calculation_processor_press', 'ae2:calculation_processor_press', true),
            press('kubejs:incomplete_calculation_processor_press')
        ]
    ));

    // ------------------------------------------------------------
    // 8. 工程压印模板
    // ------------------------------------------------------------
    event.custom(seqAssembly(
        'create:iron_sheet', 'kubejs:incomplete_engineering_processor_press', 'ae2:engineering_processor_press',
        [
            deploy('kubejs:incomplete_engineering_processor_press', 'ae2:engineering_processor_press', true),
            press('kubejs:incomplete_engineering_processor_press')
        ]
    ));

    // ------------------------------------------------------------
    // 9. 逻辑处理器（硅板 + 逻辑电路板 + 红石）
    // ------------------------------------------------------------
    event.custom(seqAssembly(
        'ae2:printed_silicon', 'kubejs:incomplete_logic_processor', 'ae2:logic_processor',
        [
            deploy('kubejs:incomplete_logic_processor', 'ae2:printed_logic_processor', false),
            deploy('kubejs:incomplete_logic_processor', 'minecraft:redstone', false),
            press('kubejs:incomplete_logic_processor')
        ]
    ));

    // ------------------------------------------------------------
    // 10. 运算处理器（硅板 + 运算电路板 + 红石）
    // ------------------------------------------------------------
    event.custom(seqAssembly(
        'ae2:printed_silicon', 'kubejs:incomplete_calculation_processor', 'ae2:calculation_processor',
        [
            deploy('kubejs:incomplete_calculation_processor', 'ae2:printed_calculation_processor', false),
            deploy('kubejs:incomplete_calculation_processor', 'minecraft:redstone', false),
            press('kubejs:incomplete_calculation_processor')
        ]
    ));

    // ------------------------------------------------------------
    // 11. 工程处理器（硅板 + 工程电路板 + 红石）
    // ------------------------------------------------------------
    event.custom(seqAssembly(
        'ae2:printed_silicon', 'kubejs:incomplete_engineering_processor', 'ae2:engineering_processor',
        [
            deploy('kubejs:incomplete_engineering_processor', 'ae2:printed_engineering_processor', false),
            deploy('kubejs:incomplete_engineering_processor', 'minecraft:redstone', false),
            press('kubejs:incomplete_engineering_processor')
        ]
    ));
});
