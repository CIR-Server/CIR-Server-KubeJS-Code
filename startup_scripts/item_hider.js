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
})
