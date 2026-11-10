// [CIR-进度根 2026-11-09] 只负责发根进度 kubejs:welcome_to_cir
//
// 根进度用 minecraft:impossible 触发器，只能靠命令发。
// 用 KubeJS 的 PlayerEvents.inventoryChanged 事件，物品进背包时触发一次，
// 不需要轮询。
//
// 其余进度（new_gem / rare_treasure / stella_shine / stella_rebuild）
// 用的是原版 inventory_changed 触发器，不需要脚本。

PlayerEvents.inventoryChanged(event => {
  const item = event.item
  if (!item || item.isEmpty()) return
  if (!String(item.id).startsWith('kubejs:')) return

  const player = event.player
  player.server.runCommandSilent('advancement grant ' + player.username + ' only kubejs:welcome_to_cir')
})
