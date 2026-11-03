// [CIR-新增 2026-11-02] 星辉构件 + 电路切片器配方改造
//
// 两件事：
//   A. 星辉构件（kubejs:stella_mechanism）的序列装配配方
//   B. 电路切片器（extendedae:circuit_cutter）的水晶装配器配方加一个星辉构件
//
// 物品注册见 startup_scripts/new_item.js 末尾
// 名称见 kubejs/assets/kubejs/lang/{en_us,zh_cn,zh_tw}.json 的 item.kubejs.stella_mechanism
// 贴图在 kubejs/assets/kubejs/textures/item/{stella_mechanism,incomplete_stella_mechanism}.png
//
// 序列装配部分用 Create 的 KubeJS 简写 API（与 RIKJS-neoforge-SequencedAssembly.js 同一套写法），
// 不用 event.custom 塞 JSON。简写 API 里 chance 是 0-1 小数（0.8 = 80%）。

console.log('Loading KubeJS Code: "stella_mechanism_recipes.js"');

ServerEvents.recipes(event => {

    // 起别名，和 SequencedAssembly.js 保持一致
    let sequencedAssemblyRecipes = event.recipes.create.sequenced_assembly;
    const TRANS = 'kubejs:incomplete_stella_mechanism';

    // ============================================================
    // A. 星辉构件的序列装配
    //    原料：精密构件
    //    每轮：注入经验 100mb → 装钻石 → 装星辉红石粉 → 冲压
    //    重复 2 轮（共 8 道工序）
    //    产物：80% 星辉构件 / 20% 钻石
    // ============================================================
    sequencedAssemblyRecipes(
        [
            CreateItem.of('kubejs:stella_mechanism', 0.8),   // 80%
            CreateItem.of('minecraft:diamond', 0.2)          // 20%
        ],
        'create:precision_mechanism',
        [
            // 第 1 步：注入液态经验 100mb
            event.recipes.create.filling(
                TRANS,
                [TRANS, Fluid.of('create_enchantment_industry:experience', 100)]
            ),
            // 第 2 步：安装钻石
            event.recipes.create.deploying(
                TRANS,
                [TRANS, 'minecraft:diamond']
            ),
            // 第 3 步：安装星辉红石粉
            event.recipes.create.deploying(
                TRANS,
                [TRANS, 'kubejs:stella_redstone_dust']
            ),
            // 第 4 步：冲压
            event.recipes.create.pressing(
                TRANS,
                TRANS
            )
        ]
    )
    .transitionalItem(TRANS)
    .loops(2);

    // ============================================================
    // B. 电路切片器：替换原配方，第 9 项加星辉构件
    //    原配方 ID: extendedae:assembler/circuit_cutter
    //    水晶装配器有 9 个输入槽（TileCrystalAssembler.SLOTS = 9），
    //    原来是 8 项，加这一项正好填满。
    //
    //    注意：KubeJS 的 Create 简写 API 只覆盖 Create 自己的配方类型，
    //    extendedae:crystal_assembler 没有对应的简写方法，所以这一段
    //    仍然用 event.custom 写 JSON。这是目前唯一可行的写法。
    // ============================================================
    event.remove({ id: 'extendedae:assembler/circuit_cutter' });

    event.custom({
        "type": "extendedae:crystal_assembler",
        "input_items": [
            // 1. 机器框架
            { "ingredient": { "item": "extendedae:machine_frame" } },
            // 2. 工程处理器 ×8
            { "amount": 8, "ingredient": { "item": "ae2:engineering_processor" } },
            // 3. 运算压印模板
            { "ingredient": { "item": "ae2:calculation_processor_press" } },
            // 4. 工程压印模板
            { "ingredient": { "item": "ae2:engineering_processor_press" } },
            // 5. 逻辑压印模板
            { "ingredient": { "item": "ae2:logic_processor_press" } },
            // 6. 硅压印模板
            { "ingredient": { "item": "ae2:silicon_press" } },
            // 7. 并行处理器压印模板
            { "ingredient": { "item": "extendedae:concurrent_processor_press" } },
            // 8. 切石机
            { "ingredient": { "item": "minecraft:stonecutter" } },
            // 9. 星辉构件（新增）
            { "ingredient": { "item": "kubejs:stella_mechanism" } }
        ],
        "output": {
            "count": 1,
            "id": "extendedae:circuit_cutter"
        }
    });
});
