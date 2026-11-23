// priority: 0
// ============================================================
// 苍穹织雷套装：闪电装配配方加料
// [CIR 2026-11-21]
//
// 4 件装备（celestweave_oculus/core/conduit/stride）原本在
// 闪电装配室（ae2lt:lightning_assembly）里用 4 种苍穹材料合成。
// 这里删掉原配方重新注册，额外要求：
//   星辉量子宝石 x1
//   星辉构件     x2
//   永恒赛特斯宝石 x2
//   任意完美宝石（神话）x2 —— 只在装了 Apotheosis 时追加
// 其余输入、能量、闪电消耗、闪电等级保持原样。
// ============================================================
ServerEvents.recipes(event => {
  if (!Platform.isLoaded('ae2lt')) return

  var cirExtra = [
    { ingredient: { item: 'kubejs:stella_quantum_gem' }, count: 1 },
    { ingredient: { item: 'kubejs:stella_mechanism' }, count: 2 },
    { ingredient: { item: 'kubejs:eternal_certus_gem' }, count: 2 }
  ]

  // 任意完美宝石：neoforge:components 匹配 apotheosis:gem + purity=perfect
  if (Platform.isLoaded('apotheosis')) {
    cirExtra.push({
      ingredient: {
        type: 'neoforge:components',
        items: ['apotheosis:gem'],
        components: { 'apotheosis:purity': 'perfect' }
      },
      count: 2
    })
    console.info('[CIR] 苍穹织雷：已追加完美宝石要求')
  } else {
    console.info('[CIR] 苍穹织雷：未装 Apotheosis，跳过完美宝石要求')
  }

  // 原配方参数（照抄 ae2lt 数据包，只加料）
  var cirParts = [
    { id: 'oculus',  core: 'firmament_spirit_core_oculus',  ingot: 32, wire: 24, plate: 8,  energy: 16000000 },
    { id: 'stride',  core: 'firmament_spirit_core_stride',  ingot: 32, wire: 24, plate: 8,  energy: 20000000 },
    { id: 'conduit', core: 'firmament_spirit_core_conduit', ingot: 48, wire: 40, plate: 16, energy: 32000000 },
    { id: 'core',    core: 'firmament_spirit_core_core',    ingot: 64, wire: 56, plate: 24, energy: 48000000 }
  ]

  cirParts.forEach(function (p) {
    // 删原配方（按 id），再按新输入重建
    event.remove({ id: 'ae2lt:lightning_assembly/celestweave_' + p.id })

    event.custom({
      type: 'ae2lt:lightning_assembly',
      priority: 1,
      inputs: [
        { ingredient: { item: 'ae2lt:' + p.core }, count: 1 },
        { ingredient: { item: 'ae2lt:firmament_alloy_ingot' }, count: p.ingot },
        { ingredient: { item: 'ae2lt:firmament_superconducting_wire' }, count: p.wire },
        { ingredient: { item: 'ae2lt:overload_alloy_plate' }, count: p.plate }
      ].concat(cirExtra),
      result: { id: 'ae2lt:celestweave_' + p.id, count: 1 },
      totalEnergy: p.energy,
      lightningCost: 512,
      lightningTier: 'extreme_high_voltage'
    }).id('kubejs:ae2lt/celestweave_' + p.id)
  })

  console.info('[CIR] 苍穹织雷：4 条闪电装配配方已重建（+4 种材料）')
})
