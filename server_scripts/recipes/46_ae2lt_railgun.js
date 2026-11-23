// priority: 0
// ============================================================
// 电磁炮：闪电装配配方加料
// [CIR 2026-11-22]
//
// 原配方（ae2lt:lightning_assembly/electromagnetic_railgun）：
//   极限过载核心 x2 + 苍穹合金锭 x96 + 过载合金板 x48
//   8,000 万 FE / 闪电 1024 / 极高压
//
// 这里删掉原配方重新注册，额外要求：
//   星辉量子宝石 x8
//   永恒赛特斯宝石 x64
//   任意完美宝石（神话）x4 —— 只在装了 Apotheosis 时追加
// 其余输入、能量、闪电消耗、闪电等级保持原样。
// 写法参照 45_ae2lt_celestweave.js（苍穹织雷套装）。
// ============================================================
ServerEvents.recipes(event => {
  if (!Platform.isLoaded('ae2lt')) return

  var cirExtra = [
    { ingredient: { item: 'kubejs:stella_quantum_gem' }, count: 8 },
    { ingredient: { item: 'kubejs:eternal_certus_gem' }, count: 64 }
  ]

  // 任意完美宝石：neoforge:components 匹配 apotheosis:gem + purity=perfect
  if (Platform.isLoaded('apotheosis')) {
    cirExtra.push({
      ingredient: {
        type: 'neoforge:components',
        items: ['apotheosis:gem'],
        components: { 'apotheosis:purity': 'perfect' }
      },
      count: 4
    })
    console.info('[CIR] 电磁炮：已追加完美宝石要求')
  } else {
    console.info('[CIR] 电磁炮：未装 Apotheosis，跳过完美宝石要求')
  }

  // 删原配方（按 id），再按新输入重建
  event.remove({ id: 'ae2lt:lightning_assembly/electromagnetic_railgun' })

  event.custom({
    type: 'ae2lt:lightning_assembly',
    priority: 1,
    inputs: [
      { ingredient: { item: 'ae2lt:ultimate_overload_core' }, count: 2 },
      { ingredient: { item: 'ae2lt:firmament_alloy_ingot' }, count: 96 },
      { ingredient: { item: 'ae2lt:overload_alloy_plate' }, count: 48 }
    ].concat(cirExtra),
    result: { id: 'ae2lt:electromagnetic_railgun', count: 1 },
    totalEnergy: 80000000,
    lightningCost: 1024,
    lightningTier: 'extreme_high_voltage'
  }).id('kubejs:ae2lt/electromagnetic_railgun')

  console.info('[CIR] 电磁炮：闪电装配配方已重建（+3 种材料）')
})
