// [CIR-改动 2026-11-06] AppliedFlux 能源存储核心的中间玻璃换成 KubeJS 的强化玻璃
//   1M / 4M / 16M  → kubejs:reinforced_quartz_glass（强化石英玻璃）
//   64M / 256M     → kubejs:eternal_reinforced_glass（永恒强化玻璃）
//   其余材料与图形保持不变。
//
// 原配方（appflux:1m_core 等）都是 minecraft:crafting_shaped，中间那格 G = ae2:quartz_vibrant_glass。
// 删除按产物匹配，不按 id —— 按 id 删不掉时会出现原配方和新配方并存的情况。

ServerEvents.recipes(event => {

  // 每档：产物、D 材料、上一档、中间玻璃
  const CORES = [
    { out: 'appflux:core_1m',   dust: '#c:dusts/ender_pearl', lower: 'appflux:core_256k', glass: 'kubejs:reinforced_quartz_glass' },
    { out: 'appflux:core_4m',   dust: '#c:dusts/diamond',     lower: 'appflux:core_1m',   glass: 'kubejs:reinforced_quartz_glass' },
    { out: 'appflux:core_16m',  dust: '#c:dusts/diamond',     lower: 'appflux:core_4m',   glass: 'kubejs:reinforced_quartz_glass' },
    { out: 'appflux:core_64m',  dust: 'kubejs:reinforced_redstone_dust',     lower: 'appflux:core_16m',  glass: 'kubejs:eternal_reinforced_glass' },
    { out: 'appflux:core_256m', dust: 'kubejs:eternal_certus_dust',     lower: 'appflux:core_64m',  glass: 'kubejs:eternal_reinforced_glass' }
  ];

  for (const core of CORES) {
    event.remove({ output: core.out });

    event.shaped(core.out, [
      'DPD',
      'LGL',
      'DLD'
    ], {
      D: core.dust,
      P: 'ae2:engineering_processor',
      L: core.lower,
      G: core.glass
    });
  }
});
