// [CIR-改动 2026-11-06] Applied Generators 两处调整
//
// 1. 产能组件 1M ~ 256M 的中间玻璃换成 KubeJS 的强化玻璃
//    1M / 4M / 16M  → kubejs:reinforced_quartz_glass（强化石英玻璃）
//    64M / 256M     → kubejs:eternal_reinforced_glass（永恒强化玻璃）
//    原配方中间那格 Q = ae2:quartz_glass，其余八格不动。
//
// 删除按 output 匹配 —— 按 id 删不掉时会出现原配方和新配方并存。

ServerEvents.recipes(event => {
  const create = event.recipes.create;

  // ----------------------------------------------------------------
  // 2. 产能组件
  // ----------------------------------------------------------------
  const COMPONENTS = [
    { out: 'appgen:generating_component_1m',   dust: '#c:dusts/gold',      lower: 'appgen:generating_component_256k', glass: 'kubejs:reinforced_quartz_glass' },
    { out: 'appgen:generating_component_4m',   dust: '#c:dusts/diamond',   lower: 'appgen:generating_component_1m',   glass: 'kubejs:reinforced_quartz_glass' },
    { out: 'appgen:generating_component_16m',  dust: '#c:dusts/diamond',   lower: 'appgen:generating_component_4m',   glass: 'kubejs:reinforced_quartz_glass' },
    { out: 'appgen:generating_component_64m',  dust: '#c:dusts/netherite', lower: 'appgen:generating_component_16m',  glass: 'kubejs:eternal_reinforced_glass' },
    { out: 'appgen:generating_component_256m', dust: '#c:dusts/netherite', lower: 'appgen:generating_component_64m',  glass: 'kubejs:eternal_reinforced_glass' }
  ];

  // ----------------------------------------------------------------
  // 3. 奇点发电机 1M ~ 256M：5x5 动力合成
  //    外圈 P = 下界合金锭，内圈 D = 钻石
  //    中间 3x3 沿用原工作台配方（I Q I / G C G / I O I）
  //    P 和 D 是暂定材料，之后要换只改这里。
  // ----------------------------------------------------------------


  const SG_MT = [
    { d:'minecraft:diamond', p:'create:precision_mechanism',out: 'appgen:singularity_generator_1m',  comp: 'appgen:generating_component_4m',  lower: 'appgen:singularity_generator_256k' },
    { d:'minecraft:netherite_ingot', p:'create:precision_mechanism',out: 'appgen:singularity_generator_4m',  comp: 'appgen:generating_component_16m',  lower: 'appgen:singularity_generator_1m' },
    { d:'kubejs:eternal_certus_gem', p:'kubejs:stella_mechanism',out: 'appgen:singularity_generator_16m', comp: 'appgen:generating_component_64m', lower: 'appgen:singularity_generator_4m' },
    { d:'kubejs:stella_quantum_gem', p:'kubejs:stella_mechanism',out: 'appgen:singularity_generator_64m', comp: 'appgen:generating_component_256m', lower: 'appgen:singularity_generator_16m' }
    // 256M 先不做，见下面单独移除
  ];

  for (const sg of SG_MT) {
    event.remove({ output: sg.out });

    create.mechanical_crafting(Item.of(sg.out), [
      'PDDDP',
      'DIQID',
      'DGCGD',
      'DIOID',
      'PDDDP'
    ], {
      P: Item.of(sg.p),
      D: Item.of(sg.d),
      I: Item.of('minecraft:iron_ingot'),
      Q: Item.of('ae2:quantum_ring'),
      G: Item.of(sg.lower),
      C: Item.of(sg.comp),
      O: Item.of('appgen:origination_processor')
    }).acceptMirrored(false);
  }

  // 256M：暂时移除配方，不给替代
  event.remove({ output: 'appgen:singularity_generator_256m' });

  // ----------------------------------------------------------------
  // 4. 通量发电机：只保留 1k 和 4k，其余八档移除配方
  //    （数值是写死在代码里的，配方删掉后这些档位就造不出来了）
  // ----------------------------------------------------------------
  const REMOVED_GENERATORS = [
    'appgen:flux_generator_16k',
    'appgen:flux_generator_64k',
    'appgen:flux_generator_256k',
    'appgen:flux_generator_1m',
    'appgen:flux_generator_4m',
    'appgen:flux_generator_16m',
    'appgen:flux_generator_64m',
    'appgen:flux_generator_256m'
  ];

  for (const id of REMOVED_GENERATORS) {
    event.remove({ output: id });
  }

  for (const c of COMPONENTS) {
    event.remove({ output: c.out });

    event.shaped(c.out, [
      'DOD',
      'CQC',
      'DCD'
    ], {
      D: c.dust,
      O: 'appgen:origination_processor',
      C: c.lower,
      Q: c.glass
    });
  }
});
