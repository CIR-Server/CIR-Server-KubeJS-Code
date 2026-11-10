/**
 * @author bot_undefined
 * @name UndKJS-BlockEvent
 * @description 服务端事件相关 KubeJS 脚本
 */
console.log('Loading KubeJS Code: "UndKJS-BlockEvent.js"');
// 方块事件
BlockEvents.broken("kubejs:random_block",event => {
    const player = event.getPlayer();
    const server = event.getServer();
    const number = Math.floor(Math.random() * 100) + 1;
    const x = event.block.getX();
    const y = event.block.getY();
    const z = event.block.getZ();
    if(player != null){
    server.runCommandSilent(`effect give ${player.username} minecraft:luck 1 1`)
      switch(number){
        case 1:
          player.potionEffects.add("minecraft:slowness", 1000, 1)
          break;
        case 2:
          player.potionEffects.add("minecraft:weakness", 1000, 1)
          break;
        case 3:
          player.potionEffects.add("minecraft:haste", 1000, 1)
          break;
        case 4:
          player.potionEffects.add("minecraft:mining_fatigue", 1000, 1)
          break;
        case 5:
          player.potionEffects.add("minecraft:slow_falling", 1000, 1)
          break;
        case 6:
          player.potionEffects.add("minecraft:levitation", 1000, 1)
          break;
        case 7:
          player.potionEffects.add("minecraft:fire_resistance", 1000, 1)
          break;
        case 8:
          player.potionEffects.add("kubejs:vulnerable", 1000, 1)
          break;
        case 9:
          player.potionEffects.add("minecraft:luck", 20*600, 9)
          break;
        case 10:
          player.potionEffects.add("kubejs:health_freeze", 1000, 0)
          break;
        case 11:
          player.setHealth(10)
          break;
        case 12:
          player.setHealth(20)
          break;
        case 13:
          player.give("kubejs:superblock")
          server.tell(Text.translate("event.kubejs.superblock_set", player.username).red().bold())
          break;
        case 14:
          server.runCommandSilent(`execute at ${player.username} run summon minecraft:creeper ~ ~ ~`)
          server.tell(Text.translate("event.kubejs.creeper_summoned", player.username).red().bold())
          break;
        case 15:
          server.runCommandSilent(`execute at ${player.username} run summon minecraft:lightning_bolt ~ ~ ~`)
          server.tell(Text.translate("event.kubejs.lightning_summoned", player.username).red().bold())
          break;
        case 16:
          player.addXP(4000)
          server.tell(Text.translate("event.kubejs.xp_added", player.username, 1000).gold().bold())
          break;
        case 17:
          player.xpLevel = player.xpLevel - 10
          server.tell(Text.translate("event.kubejs.xp_set", player.username, 0).red().bold())
          break;
        case 18:
          server.runCommandSilent(`execute at ${player.username} run setblock ~ ~-1 ~ minecraft:lava`)
          break;
        case 19:
          server.runCommandSilent(`execute at ${player.username} run setblock ~ ~-1 ~ minecraft:water`)
          break;
        case 20:
          server.runCommandSilent(`execute at ${player.username} run fill ~-1 ~-1 ~-1 ~1 ~1 ~1 minecraft:obsidian`)
          break;
        case 21:
          server.runCommandSilent(`execute at ${player.username} run setblock ~ ~-1 ~ minecraft:tnt`)
          break;
        case 22:
          server.runCommandSilent(`execute at ${player.username} run setblock ~ ~-1 ~ minecraft:slime_block`)
          break;
        case 23:
          server.runCommandSilent(`execute at ${player.username} run setblock ~ ~-1 ~ minecraft:redstone_block`)
          server.runCommandSilent(`execute at ${player.username} run setblock ~ ~ ~ minecraft:tnt`)
          player.tell(Text.of("RUN!!!!!!").red().bold())
          break;
        case 24:
          server.runCommandSilent(`execute at ${player.username} run setblock ~ ~-1 ~ minecraft:sculk_shrieker[can_summon=true]`)
          player.tell(Text.of("RUN!!!!!!").red().bold())
          break;
        case 25:
          server.runCommandSilent(`execute at ${player.username} run fill ~-1 ~-1 ~-1 ~1 ~1 ~1 minecraft:glowstone`)
          break;
        case 26:
          player.teleportTo(player.getX(), player.getY() + 100, player.getZ())
          break;
        case 27:
          player.teleportTo(player.getX(), player.getY() - 3, player.getZ())
          break;
        case 28:
          player.potionEffects.clear()
          player.tell(Text.translate("event.kubejs.random_common_message").aqua())
          break;
        case 29:
          server.scheduleInTicks(2,()=>{
          event.block.set("minecraft:reinforced_deepslate")
          })
          break;
        case 30:
          server.scheduleInTicks(2,()=>{
          event.block.set("kubejs:eternal_quartz_glass")
          })
          break;
        case 33:
          server.scheduleInTicks(2,()=>{
          event.block.set("minecraft:redstone_block")
          })
          break;
        case 34:
          server.scheduleInTicks(2,()=>{
          event.block.set("minecraft:tnt")
          })
          break;
        case 35:
          server.scheduleInTicks(2,()=>{
          event.block.set("kubejs:superblock")
          })
          break;
        case 36:
          server.scheduleInTicks(2,()=>{
          event.block.set("minecraft:command_block")
          server.scheduleInTicks(18,()=>{
            event.block.set("minecraft:redstone_block")
          })
          })
          break;
        case 37:
          server.scheduleInTicks(2,()=>{
          event.block.set("minecraft:bedrock")
          server.scheduleInTicks(18,()=>{
            event.block.set("minecraft:air")
          })
          })
          break;
        case 38:
          event.block.set("minecraft:water")
          break;
        case 39:
          event.block.set("minecraft:lava")
          break;
        case 40:
          player.setHealth(10)
          break;
        case 42:
          server.scheduleInTicks(2,()=>{
          event.block.set("computercraft:computer_normal")
          })
          break;
        case 43:
          server.scheduleInTicks(2,()=>{
          event.block.set("minecraft:diamond_block")
          })
          break;
        case 44:
          server.scheduleInTicks(2,()=>{
          event.block.set("minecraft:gold_block")
          })
          break;
        case 45:
          server.scheduleInTicks(2,()=>{
          event.block.set("kubejs:superblock")
          })
          break;
        case 46:
          server.runCommandSilent(`execute at ${player.username} run setblock ${x} ${y} ${z} tnt`)
          server.runCommandSilent(`execute at ${player.username} run setblock ${x} ${y-1} ${z} redstone_block`)
          break;
        case 47:
          server.runCommandSilent(`execute at ${player.username} run fill ${x-1} ${y-1} ${z-1} ${x+1} ${y+1} ${z+1} minecraft:air`)
          break;
        case 48:
          player.give(Item.of("kubejs:superblock", 2))
          break;
        case 49:
          player.give(Item.of("kubejs:superblock", 1))
          break;
        case 100:
          player.give(Item.of("minecraft:enchanted_golden_apple",4))
          player.addXP(8000)
          server.tell(Text.translate("event.kubejs.random_jackpot", player.username).gold().bold())
          break;
        default:
          server.runCommandSilent(`execute at ${player.username} run loot spawn ${x} ${y} ${z} loot kubejs:chests/random_block`)
          break;
      }
    }
  })

  BlockEvents.rightClicked("minecraft:reinforced_deepslate", event => {
    const player = event.getPlayer();
    const server = event.getServer();
    const level = event.block.getLevel()
    const item = event.player.getMainHandItem()          
    const x = event.block.getX()
    const y = event.block.getY()
    const z = event.block.getZ()
    if(player != null && item.getId() == "kubejs:degeneration_gem"){
      item.count--
      event.block.set("minecraft:deepslate")
      server.runCommandSilent(`execute in ${level.getDimension()} run fill ${x-4} ${y-4} ${z-4} ${x+4} ${y+4} ${z+4} minecraft:deepslate replace minecraft:reinforced_deepslate`)
    }
  }
  )
  // kubejs/server_scripts/magic_devil_ball_antibedrock.js

BlockEvents.rightClicked("minecraft:bedrock", event => {
  const player = event.getPlayer()
  if (player == null) return

  // 只响应主手右键
  if (event.hand !== "MAIN_HAND") return

  // 当前这只手里的物品（和 hand 对应）
  const item = event.player.getMainHandItem()   
  if (item == null || item.getId() != "kubejs:magic_devil_ball_antibedrock") return

  const block = event.block
  const level = block.getLevel()

  const x = block.getX()
  const y = block.getY()
  const z = block.getZ()
  const dim = level.getDimension() // "minecraft:overworld" / "minecraft:the_nether" / ...

  // 禁用：
  // 1. 主世界 y = -64 的基岩
  // 2. 地狱 y = 0 的基岩
  if (
    (dim === "minecraft:overworld" && y === -64) ||
    (dim != "minecraft:overworld" && y === 0)
  ) {
    player.tell(Text.translate("event.kubejs.magic_devil_ball_antibedrock_disabled").red())
    return
  }
  // 其他位置：基岩 → 空气
  block.set("minecraft:air")
  item.count--
  player.give(Item.of("minecraft:snowball", 1))
  // 也可以加一点粒子/音效（按需）：
  // level.playSound(null, x, y, z, "minecraft:entity.zombie_villager.converted", "blocks", 1.0, 1.0)
})

  BlockEvents.rightClicked("bedrock", event => {
    const player = event.getPlayer();
    const item = event.player.getMainHandItem()          
    if(player != null && item.getId() == "kubejs:degeneration_gem"){
      item.count--
      event.block.set("obsidian")
      }
  }
  )
  BlockEvents.rightClicked("minecraft:gravel",event => {
      const player = event.getPlayer();
      const server = event.getServer();
      const item = event.player.getMainHandItem()
      const dim = event.block.getLevel().getDimension()
      const x = event.block.getX()
      const y = event.block.getY()
      const z = event.block.getZ()
      if(player != null&& item.getId() == "kubejs:reinforced_redstone_dust" && dim == "minecraft:overworld"){
        if(event.hand != "MAIN_HAND") return
        item.count--
        event.block.set("kubejs:recipe_reloader")
        console.log(`[MCDR_warning]Recipe Reloader Placed at ${x} ${y} ${z}`)
        server.tell(Text.translate("event.kubejs.recipe_reloader_set", player.username,x,y,z).gold().bold())
        player.unlockAdvancement('kubejs:world_reload')
      }
      else return
    })
    BlockEvents.rightClicked("minecraft:sculk_shrieker",event => {
      const player = event.getPlayer();
      const server = event.getServer();
      const item = event.player.getMainHandItem()
      const dim = event.block.getLevel().getDimension()
      const x = event.block.getX()
      const y = event.block.getY()
      const z = event.block.getZ()
      if(player != null&& item.getId() == "kubejs:stella_redstone_dust" && dim == "minecraft:overworld"){
        if(event.hand != "MAIN_HAND") return
        item.count--
        server.runCommandSilent(`execute in ${dim} run setblock ${x} ${y} ${z} minecraft:sculk_shrieker[can_summon=true]`)
        console.log(`[MCDR_warning]Sculk Shrieker Placed at ${x} ${y} ${z}`)
        server.tell(Text.translate("event.kubejs.sculk_shrieker_set", player.username,x,y,z).gold().bold())
      }
      else return
    })
    BlockEvents.rightClicked("minecraft:bell",event => {
      const player = event.getPlayer();
      const server = event.getServer();
      const item = event.player.getMainHandItem()
      const dim = event.block.getLevel().getDimension()
      const x = event.block.getX()
      const y = event.block.getY()
      const z = event.block.getZ()
      if(player != null&& item.getId() == "kubejs:guard_recruitment_order"){
        if(event.hand != "MAIN_HAND") return
        item.count--
        server.runCommandSilent(`execute in ${dim} run summon guardvillagers:guard ${x} ${y+1} ${z}`)
        server.tell(Text.translate("event.kubejs.recruit_guard", player.username).gold().bold())
      }
    })
   EntityEvents.spawned(event => {
      const entity = event.getEntity();
      const server = event.getServer();
      const x = entity.getX()
      const y = entity.getY()
      const z = entity.getZ()
      if(entity.getType() == "minecraft:falling_block" && String(entity.nbt).includes("kubejs:recipe_reloader")){
       console.log(`[MCDR_warning]Recipe Reload at ${x} ${y} ${z}`)
       server.tell(Text.translate("event.kubejs.recipe_reloader_spawn", x,y,z).red().bold())
       server.scheduleInTicks(100,()=>{
        server.runCommand(`reload`)
        server.tell(Text.translate("event.kubejs.recipe_reloader_reload").aqua().bold())
       })
      }
    })
