// kubejs/server_scripts/duel_invite.js

const DUEL_ITEM = 'kubejs:duel_invite'


ItemEvents.entityInteracted(DUEL_ITEM, event => {
  const player = event.player
  const target = event.target
  const hand = event.hand
  const random = Math.floor(100 * Math.random())
  const server = event.server
  if (!player || hand !== 'MAIN_HAND') return
  if (!target || target.type !== 'minecraft:player') return
  event.item.count--
  if (random >= 80){
    player.tell(Text.translate("text.kubejs.duel.temp.win").aqua())
    target.tell(Text.translate("text.kubejs.duel.temp.lose").red())
    server.tell(Text.translate("text.kubejs.duel.temp.announce",player.username,target.username,player.username).yellow())
    server.runCommandSilent(`execute as ${target.username} run damage @s 10 minecraft:magic`)
  }else if(random <=20){
    player.tell(Text.translate("text.kubejs.duel.temp.lose").red())
    target.tell(Text.translate("text.kubejs.duel.temp.win").aqua())
    server.tell(Text.translate("text.kubejs.duel.temp.announce",player.username,target.username,target.username).yellow())
    server.runCommandSilent(`execute as ${player.username} run damage @s 10 minecraft:magic`)
  }else{
    player.tell(Text.translate("text.kubejs.duel.temp.draw").yellow())
    target.tell(Text.translate("text.kubejs.duel.temp.draw").yellow())
    server.tell(Text.translate("text.kubejs.duel.temp.announce2",player.username,target.username).yellow())
  }
})
