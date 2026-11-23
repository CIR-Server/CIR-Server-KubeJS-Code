// [CIR-电力/充能 2026-11-09] 蓄电池相关进度检测
//
// 每 120 秒（2400 tick）扫一次，只扫有玩家在线的维度。
//
//   kubejs:electricity_age  ← 任意蓄电池电量不为零
//   kubejs:charging_age     ← 全服蓄电池总能量 ≥ 100M FE
//
// 只发进度，不发 stage。cir:charging_age 这个 stage 由 FTB Quests 的任务发放，
// 用来解锁 AppliedFlux。脚本这边保留一个检查：玩家都已拿到 cir:charging_age
// （说明 FTB 任务已经过了），就不再扫描。
//
// 注意：只能扫到已加载区块。玩家没去过的区域，蓄电池不会计入。

ServerEvents.tick(event => {

  if (event.server.tickCount % 2400 !== 0) return

  const players = event.server.players
  if (players.length === 0) return

  // 所有在线玩家都拿到 cir:charging_age，说明 FTB 那边已经发过了，不必再扫
  let allDone = true
  let allAdvancementsDone = true
  players.forEach(player => {
    if (!PlayerStages.of(player).has('cir:charging_age')) allDone = false
    if (!player.isAdvancementDone('kubejs:electricity_age') || !player.isAdvancementDone('kubejs:charging_age')) allAdvancementsDone = false
  })
  if (allDone || allAdvancementsDone) return

  const AccumulatorClass = Java.loadClass('com.mrh0.createaddition.blocks.modular_accumulator.ModularAccumulatorBlockEntity')
  const THRESHOLD = 100000000

  const activeLevels = []
  players.forEach(player => {
    const level = player.level
    if (level && activeLevels.indexOf(level) < 0) {
      activeLevels.push(level)
    }
  })

  let total = 0
  let count = 0

  activeLevels.forEach(level => {
    const chunkMap = level.getChunkSource().chunkMap
    const visible = chunkMap.visibleChunkMap
    if (!visible) return

    visible.values().forEach(holder => {
      const chunk = holder.getTickingChunk()
      if (!chunk) return

      chunk.getBlockEntities().values().forEach(be => {
        if (!(be instanceof AccumulatorClass)) return
        if (!be.isController()) return
        const storage = be.getEnergy()
        if (!storage) return
        total += storage.getEnergyStored()
        count++
      })
    })
  })

  console.info('[CIR] accumulator scan: ' + activeLevels.length + ' dims, ' + count + ' controllers, total ' + total + ' / ' + THRESHOLD)

  // 电力时代：有任何电就算
  if (total > 0) {
    players.forEach(player => {
      if (!player.isAdvancementDone('kubejs:electricity_age')) {
        player.unlockAdvancement('kubejs:electricity_age')
      }
    })
  }

  // 充能时代：总能量达标，只发进度，stage 交给 FTB
  if (total < THRESHOLD) return

  players.forEach(player => {
    if (!player.isAdvancementDone('kubejs:charging_age')) {
      player.unlockAdvancement('kubejs:charging_age')
    }
  })
})
