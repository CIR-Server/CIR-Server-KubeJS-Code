/**
 * @author bot_undefined
 * @name UndKJS-ItemEvent
 * @description 物品事件相关 KubeJS 脚本
 */
  console.log('Loading KubeJS Code: "UndKJS-ItemEvent.js"');
  ItemEvents.foodEaten(
    "create:blaze_cake",event => {
      event.player.tell(Text.translate("event.kubejs.blaze_cake_eaten").gold())
      event.player.potionEffects.add('minecraft:strength',20*120,1)
      event.player.potionEffects.add('minecraft:speed',20*120,1)
      event.player.potionEffects.add('minecraft:night_vision',20*120,0)
      event.player.potionEffects.add('kubejs:burning',20*120,0)
    }
  )
  ItemEvents.foodEaten(
    "create_enchantment_industry:experience_cake",event => {
      event.player.tell(Text.translate("event.kubejs.experience_cake_eaten").gold())
      event.player.addXP(1000)
      event.player.potionEffects.add('minecraft:night_vision',20*60,0)
      event.player.potionEffects.add('minecraft:glowing',20*60,0)
    }
  )
  ItemEvents.firstRightClicked(
    "waystones:warp_stone",event =>{
      const player = event.getPlayer()  
      const server = event.getServer()
      if(player.hasPermissions(4))return
      player.tell(Text.translate("event.kubejs.warp_stone").red())
      server.scheduleInTicks(30, () => {
        server.runCommand(`damage ${player.username} 1 fall`)
      })
    })
  ItemEvents.rightClicked(
  "kubejs:iron_patronus", event => {
    const player =event.getPlayer()
    const item = event.getItem()
    if (player.hasEffect('kubejs:golem')) {
      player.tell(Text.translate("event.kubejs.iron_patronus.1"))
    }else{
      item.count--
      player.tell(Text.translate("event.kubejs.iron_patronus.0").aqua())
      player.potionEffects.add('kubejs:golem',24000,0)
    }
    }
  )
  ItemEvents.rightClicked(
    "kubejs:magic_weather_ball_rain", event => {
      event.item.count--
      event.player.giveInHand('minecraft:snowball')
      event.server.runCommand('weather rain')
      event.server.tell(Text.translate("event.kubejs.magic_weather_ball_rain.0"))
    }
  )
  ItemEvents.rightClicked(
    "kubejs:magic_weather_ball_storm", event => {
      event.item.count--
      event.player.give('minecraft:snowball')
      event.server.runCommand('weather thunder')
      event.server.tell(Text.translate("event.kubejs.magic_weather_ball_storm.0"))
    }
  )
  ItemEvents.rightClicked(
    "kubejs:magic_weather_ball_clear", event => {
      event.item.count--
      event.player.give('minecraft:snowball')
      event.server.runCommand('weather clear')
      event.server.tell(Text.translate("event.kubejs.magic_weather_ball_clear.0"))
    }
  )
  ItemEvents.rightClicked(
    "kubejs:magic_time_ball_day", event => {
      event.item.count--
      event.player.give('minecraft:snowball')
      event.server.runCommand('time set day')
      event.server.tell(Text.translate("event.kubejs.magic_time_ball_day.0"))
    }
    )
  ItemEvents.rightClicked(
    "kubejs:magic_time_ball_night", event => {
      event.item.count--
      event.player.give('minecraft:snowball')
      event.server.runCommand('time set night')
      event.server.tell(Text.translate("event.kubejs.magic_time_ball_night.0"))
    }
  )
  ItemEvents.rightClicked(
    "kubejs:magic_action_ball_speed",event => {
      event.item.count--
      event.player.give('minecraft:snowball')
      event.player.potionEffects.add('minecraft:instant_damage',1,1)
      event.server.scheduleInTicks(2,() =>{
      event.player.potionEffects.add('minecraft:speed',600,3)
      event.player.potionEffects.add('minecraft:jump_boost',600,1)
      event.server.tell(Text.red(Text.translate("event.kubejs.magic_action_ball_speed.0",event.player.username)))})
    }
  )
  ItemEvents.rightClicked(
    "kubejs:magic_action_ball_teleport",event => {
      event.item.count--
      event.player.give('minecraft:snowball')
      event.player.potionEffects.add('minecraft:instant_damage',1,1)
      event.server.scheduleInTicks(2,() =>{
      event.server.runCommandSilent(`execute at ${event.player.username} run tp ${event.player.username} ~ ~100 ~`)
      event.player.potionEffects.add('minecraft:slow_falling',200,0)
      event.server.tell(Text.translate("event.kubejs.magic_action_ball_teleport.1",event.player.username).green())
  })})
  ItemEvents.rightClicked(
    "kubejs:magic_action_ball_levitation",event => {
      event.item.count--
      event.player.give('minecraft:snowball')
      event.player.potionEffects.add('minecraft:instant_damage',1,1)
      event.server.scheduleInTicks(2,() =>{
      event.player.potionEffects.add('minecraft:levitation',600,0)
      event.server.tell(Text.translate("event.kubejs.magic_action_ball_levitation.1",event.player.username).green())
  })})
  ItemEvents.entityInteracted(
    "kubejs:magic_devil_ball_kill", event => {
      const target = event.getTarget();
    if (event.hand != "MAIN_HAND") return
    if(target.type == "minecraft:player"){
      const victim = target.isPlayer() ? target : null;
      event.player.tell(Text.translate("event.kubejs.magic_devil_ball_kill.1").yellow())
      event.server.tell(Text.blue(Text.translate("event.kubejs.magic_devil_ball_kill.2",event.player.username,victim.username)))
    }
    else if(target.type == "minecraft:villager"){
      event.player.potionEffects.add('minecraft:poison',10,2)
      event.player.tell(Text.translate("event.kubejs.magic_devil_ball_kill.3").yellow())
      event.server.tell(Text.blue(Text.translate("event.kubejs.magic_devil_ball_kill.4",event.player.username)))
    }
    else if(target.customName != null || target.type =="touhou_little_maid:maid"){
      event.player.tell(Text.translate("event.kubejs.magic_devil_ball_kill.5").yellow())
    }
    else{
      event.item.count--
      event.player.give('minecraft:snowball')
      target.kill()
      event.server.tell(Text.translate("event.kubejs.magic_devil_ball_kill.0",event.player.username,target.name).aqua())
    }
  }
  )
  ItemEvents.entityInteracted(
    "kubejs:magic_devil_ball_poison", event => {
      const target = event.getTarget();
    if (event.hand != "MAIN_HAND") return
    if(target.isLiving() == false) return
    if(target.type != "minecraft:player"){
      if(target.type == "minecraft:villager" || target.type =="touhou_little_maid:maid" || target.customName != null){
        event.player.tell(Text.translate("event.kubejs.magic_devil_ball_poison.0").yellow())
      }
      else{
        event.item.count--
        event.player.give('minecraft:snowball')
        target.potionEffects.add('minecraft:poison',600,4)
      }
    }
    else{
      event.item.count--
      event.player.give('minecraft:snowball')
      target.potionEffects.add('minecraft:poison',600,4)
      event.server.tell(Text.translate("event.kubejs.magic_devil_ball_poison.1",event.player.username,target.name).lightPurple())}
  })
  ItemEvents.entityInteracted(
    "kubejs:magic_devil_ball_dark", event => {
      const target = event.getTarget();
    if (event.hand != "MAIN_HAND") return
    if(target.isLiving() == false) return
    if(target.type != "minecraft:player"){
        event.item.count--
        event.player.give('minecraft:snowball')
        target.potionEffects.add('minecraft:darkness',600,0)
    }
    else{
      event.item.count--
      event.player.give('minecraft:snowball')
      target.potionEffects.add('minecraft:darkness',600,0)
      event.server.tell(Text.translate("event.kubejs.magic_devil_ball_dark.1",event.player.username,target.name).lightPurple())}
  })
    ItemEvents.entityInteracted(
    "kubejs:magic_devil_ball_loseway", event => {
      const target = event.getTarget();
    if (event.hand != "MAIN_HAND") return
    if(target.type != "minecraft:player")return
      event.item.count--
      event.player.give('minecraft:snowball')
      target.potionEffects.add('xaerominimap:no_minimap_harmful',1200,0)
      target.potionEffects.add('xaerominimap:no_waypoints_harmful',1200,0)
      target.potionEffects.add('xaerominimap:no_minimap_harmful',1200,0)
      target.potionEffects.add('xaeroworldmap:no_world_map_harmful',1200,0)
      event.server.tell(Text.translate("event.kubejs.magic_devil_ball_loseway.1",event.player.username,target.name).lightPurple())
    }
   )
ItemEvents.entityInteracted(
  "kubejs:magic_devil_ball_clear", event => {
    const target = event.getTarget();
    if (event.hand != "MAIN_HAND") return
    if(target.isLiving() == false) return
    /** 
        @type {$LivingEntity_}
        */
    const live = target.isLiving() ? target : null;
    if(!live.getActiveEffects().isEmpty()){
      live.potionEffects.clear()
      event.item.count--
      event.player.give('minecraft:snowball')
      event.player.tell(Text.translate("event.kubejs.magic_devil_ball_clear.0").yellow())
    }else{
      event.player.tell(Text.translate("event.kubejs.magic_devil_ball_clear.1").yellow())
    }
  }
)
ItemEvents.rightClicked(
  "kubejs:magic_devil_ball_fluid_clear", event => {
    const leftitem =event.player.getOffHandItem()
    if (event.hand != "MAIN_HAND") return
    if(leftitem.id != "minecraft:lava_bucket" && leftitem.id != "minecraft:water_bucket"){
      event.player.tell(Text.translate("event.kubejs.magic_devil_ball_fluid_clear.0").yellow())
    }
    else if(leftitem.id == "minecraft:lava_bucket"){
      event.item.count--
      event.player.give('minecraft:snowball')
      event.server.runCommandSilent(`execute at ${event.player.username} run fill ~-4 ~-4 ~-4 ~4 ~4 ~4 air replace minecraft:lava`)
      event.server.tell(Text.translate("event.kubejs.magic_devil_ball_fluid_clear.1",event.player.username).green())}
    else if(leftitem.id == "minecraft:water_bucket"){
      event.item.count--
      event.player.give('minecraft:snowball')
      event.server.runCommandSilent(`execute at ${event.player.username} run fill ~-4 ~-4 ~-4 ~4 ~4 ~4 air replace minecraft:water`)
      event.server.tell(Text.translate("event.kubejs.magic_devil_ball_fluid_clear.2",event.player.username).green())}
  })
