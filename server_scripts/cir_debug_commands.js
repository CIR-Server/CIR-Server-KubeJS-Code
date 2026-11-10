// [CIR-调试 2026-11-10] /cir clearAllChapters <玩家>
//
// 清空指定玩家的所有 cir:* 阶段（stage），权限要求 OP 4 级。
//
// 两个坑：
// 1. 用硬编码清单而不是 StageManager.stageIds()
//    后者只返回数据包定义的 stage，KubeJS 的 defineStage 走 runtime，拿不到。
// 2. 清完必须手动 syncAll()
//    ChaptersAPI.removeStage 内部的同步是条件性的：
//      if (EffectiveStages.shouldEmitPerPlayerDelta(player)) { 发同步包 }
//    而 FTB Teams 联动如果没挂上，这个判断返回 false，同步包一个都不发。
//    结果就是服务端删干净了、客户端还停在老快照，JEI 和物品锁都不变。
//
// 用法：/cir clearAllChapters <玩家>

const CIR_STAGES = [
  'cir:stone_age',
  'cir:iron_age',
  'cir:andesite_age',
  'cir:precision_age',
  'cir:alien_age',
  'cir:charging_age',
  'cir:256k_age',
  'cir:eternal_certus',
  'cir:aepower_age',
  'cir:sin1',
  'cir:sin4',
  'cir:sin16',
  'cir:sin64',
  'cir:stella',
  'cir:locked'
]

ServerEvents.commandRegistry(event => {

  const Commands = event.commands
  const Arguments = event.arguments

  event.register(
    Commands.literal('cir')
      .then(
        Commands.literal('clearAllChapters')
          .requires(source => source.hasPermission(4))
          .then(
            Commands.argument('player', Arguments.PLAYER.create(event))
              .executes(ctx => {
                const player = Arguments.PLAYER.getResult(ctx, 'player')
                if (!player) return 0

                const ChaptersAPI = Java.loadClass('com.gabinx.chapters.api.ChaptersAPI')
                const stages = PlayerStages.of(player)
                let removed = 0

                for (let i = 0; i < CIR_STAGES.length; i++) {
                  if (stages.remove(CIR_STAGES[i])) removed++
                }

                // 强制全量同步：把服务端真实状态推给客户端
                ChaptersAPI.syncAll(player)
                ChaptersAPI.syncStageIndicesToPlayer(player)

                ctx.source.sendSuccess(
                  () => Text.of('[CIR] 已清除 ' + removed + ' 个阶段，并已强制同步').gray(),
                  false
                )
                return removed
              })
          )
      )
  )
})
