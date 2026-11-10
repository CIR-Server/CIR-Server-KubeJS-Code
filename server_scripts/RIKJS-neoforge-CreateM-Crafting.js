// [DW-搬入 2026-11-01] 本文件为从 hardcore 服移植的 AE2 相关机械工作台配方
// 说明：
//   1. 原 hardcore 同名文件中还有大量非 AE2 配方（蜘蛛网、雨天魔法球、守卫招募令、
//      人造成钻石、传送卷轴等），此处按要求未移植
//   2. 已跳过所有含 ars_nouveau: 的配方（客户端未安装新生魔艺）
//   3. 量子四件套依赖 AdvancedAE（客户端 AdvancedAE-1.6.12 已装）

ServerEvents.recipes(event => {
  // [DW-搬入 2026-11-01] AE2 无线接收器 ×4（机械工作台）
  event.custom({
    type: 'create:mechanical_crafting',
    accept_mirrored: false,
    category: 'misc',
    key: {
      'A': { 'item': 'minecraft:iron_ingot' },
      'B': { 'item': 'ae2:fluix_pearl' },
      'C': { 'item': 'create:brass_ingot' },
      'D': { 'item': 'ae2:quartz_fiber' },
      'E': { 'item': 'kubejs:eternal_certus_dust' },
      'F': { 'item': 'kubejs:stella_redstone_dust' }
    },
    pattern: [
      ' AAA ',
      'ABCBA',
      'ACDCA',
      'AEFEA',
      ' AAA '
    ],
    result: {
      id: 'ae2:wireless_receiver',
      count: 4
    }
  });

  // [DW-搬入 2026-11-01] AdvancedAE 量子头盔（机械工作台）
  event.custom({
    type: 'create:mechanical_crafting',
    accept_mirrored: false,
    category: 'misc',
    key: {
      'A': { 'item': 'kubejs:eternal_certus_gem' },
      'B': { 'item': 'advanced_ae:quantum_processor' },
      'C': { 'item': 'ae2:wireless_access_point' },
      'D': { 'item': 'minecraft:netherite_helmet' },
      'E': { 'item': 'advanced_ae:quantum_storage_component' },
      'F': { 'item': 'advanced_ae:quantum_alloy_plate' },
      'G': { 'item': 'create:precision_mechanism' },
      'H': { 'item': 'kubejs:stella_quantum_gem' },
      'I': { 'item': 'minecraft:netherite_ingot' },
      'J': { 'item': 'ae2:calculation_processor' }
    },
    pattern: [
      ' AIA ',
      'IJCJI',
      'IBDBI',
      'IFEFI',
      ' GHG '
    ],
    result: {
      id: 'advanced_ae:quantum_helmet',
      count: 1
    }
  });

  // [DW-搬入 2026-11-01] AdvancedAE 量子胸甲（机械工作台）
  event.custom({
    type: 'create:mechanical_crafting',
    accept_mirrored: false,
    category: 'misc',
    key: {
      'A': { 'item': 'kubejs:eternal_certus_gem' },
      'B': { 'item': 'advanced_ae:quantum_processor' },
      'C': { 'item': 'ae2:wireless_access_point' },
      'D': { 'item': 'minecraft:netherite_chestplate' },
      'E': { 'item': 'advanced_ae:quantum_storage_component' },
      'F': { 'item': 'advanced_ae:quantum_alloy_plate' },
      'G': { 'item': 'create:precision_mechanism' },
      'H': { 'item': 'kubejs:stella_quantum_gem' },
      'I': { 'item': 'minecraft:netherite_ingot' },
      'J': { 'item': 'ae2:calculation_processor' }
    },
    pattern: [
      ' AIA ',
      'IJCJI',
      'IBDBI',
      'IFEFI',
      ' GHG '
    ],
    result: {
      id: 'advanced_ae:quantum_chestplate',
      count: 1
    }
  });

  // [DW-搬入 2026-11-01] AdvancedAE 量子护腿（机械工作台）
  event.custom({
    type: 'create:mechanical_crafting',
    accept_mirrored: false,
    category: 'misc',
    key: {
      'A': { 'item': 'kubejs:eternal_certus_gem' },
      'B': { 'item': 'advanced_ae:quantum_processor' },
      'C': { 'item': 'ae2:wireless_access_point' },
      'D': { 'item': 'minecraft:netherite_leggings' },
      'E': { 'item': 'advanced_ae:quantum_storage_component' },
      'F': { 'item': 'advanced_ae:quantum_alloy_plate' },
      'G': { 'item': 'create:precision_mechanism' },
      'H': { 'item': 'kubejs:stella_quantum_gem' },
      'I': { 'item': 'minecraft:netherite_ingot' },
      'J': { 'item': 'ae2:calculation_processor' }
    },
    pattern: [
      ' AIA ',
      'IJCJI',
      'IBDBI',
      'IFEFI',
      ' GHG '
    ],
    result: {
      id: 'advanced_ae:quantum_leggings',
      count: 1
    }
  });

  // [DW-搬入 2026-11-01] AdvancedAE 量子靴子（机械工作台）
  event.custom({
    type: 'create:mechanical_crafting',
    accept_mirrored: false,
    category: 'misc',
    key: {
      'A': { 'item': 'kubejs:eternal_certus_gem' },
      'B': { 'item': 'advanced_ae:quantum_processor' },
      'C': { 'item': 'ae2:wireless_access_point' },
      'D': { 'item': 'minecraft:netherite_boots' },
      'E': { 'item': 'advanced_ae:quantum_storage_component' },
      'F': { 'item': 'advanced_ae:quantum_alloy_plate' },
      'G': { 'item': 'create:precision_mechanism' },
      'H': { 'item': 'kubejs:stella_quantum_gem' },
      'I': { 'item': 'minecraft:netherite_ingot' },
      'J': { 'item': 'ae2:calculation_processor' }
    },
    pattern: [
      ' AIA ',
      'IJCJI',
      'IBDBI',
      'IFEFI',
      ' GHG '
    ],
    result: {
      id: 'advanced_ae:quantum_boots',
      count: 1
    }
  });

  // AE2 驱动器：中间加精密构件
  event.remove({ output: 'ae2:drive' });
  event.shaped('ae2:drive', [
    'ABA',
    'CPC',
    'ABA'
  ], {
    A: '#c:ingots/iron',
    B: 'ae2:engineering_processor',
    C: 'ae2:fluix_glass_cable',
    P: 'create:precision_mechanism'
  });
});
