// ---- 伤害播报防刷屏：同一玩家 3 分钟内只播历史最高伤害 ----
var CIR_HURT_RECORDS = new Map()
var CIR_HURT_TTL = 3 * 60 * 1000

function cirShouldBroadcastDamage(uuid, damage) {
  var now = Date.now()
  var rec = CIR_HURT_RECORDS.get(uuid)
  if (rec && now < rec.until) {
    if (damage <= rec.damage) return false
  }
  CIR_HURT_RECORDS.set(uuid, { damage: damage, until: now + CIR_HURT_TTL })
  return true
}


/**
 * @author Real_Infinistar
 * @name RIKJS-EntityEvent
 * @description 服务端事件相关 KubeJS 脚本
 */
console.log('Loading KubeJS Code: "RIKJS-EntityEvent.js"');
// All five random-enhancement rules share one cooldown per dimension/chunk.
var RIKJS_SPAWN_PROCESSED_KEY = 'cir_spawn_enhancements_v1'
var RIKJS_SPAWN_CHUNK_PREFIX = 'cir_spawn_chunk_until|'
var RIKJS_SPAWN_CHUNK_COOLDOWN_MS = 60 * 1000

function rikjsSpawnChunkKey(entity) {
  return RIKJS_SPAWN_CHUNK_PREFIX + String(entity.getLevel().getDimension()) + '|' +
    Math.floor(entity.getX() / 16) + ',' + Math.floor(entity.getZ() / 16)
}

function rikjsCanRollSpawn(entity, server) {
  var data = entity.getPersistentData()
  if (data.getBoolean(RIKJS_SPAWN_PROCESSED_KEY)) return false
  // Mark misses and cooldown skips too; they must never reroll on chunk load.
  data.putBoolean(RIKJS_SPAWN_PROCESSED_KEY, true)
  return Date.now() >= Number(server.getPersistentData().getLong(rikjsSpawnChunkKey(entity)))
}

function rikjsRecordEnhancedSpawn(entity, server) {
  server.getPersistentData().putLong(rikjsSpawnChunkKey(entity), Date.now() + RIKJS_SPAWN_CHUNK_COOLDOWN_MS)
}

ServerEvents.tick(event => {
  if (event.server.tickCount % 1200 !== 0) return
  var data = event.server.getPersistentData()
  var now = Date.now()
  var expired = []
  data.getAllKeys().forEach(key => {
    if (String(key).indexOf(RIKJS_SPAWN_CHUNK_PREFIX) === 0 && Number(data.getLong(key)) <= now) expired.push(key)
  })
  expired.forEach(key => data.remove(key))
})


var RIKJS_HEALTH_LOSS_TASKS = new Map()
var RIKJS_HEALTH_FREEZE_TASKS = new Map()

// boss 名单：生命流失在这些生物血量 < 200 时失效
var CIR_HEALTH_LOSE_BOSSES = [
  'cataclysm:ignis',
  'cataclysm:netherite_monstrosity',
  'cataclysm:ender_guardian',
  'cataclysm:the_harbinger',
  'cataclysm:the_leviathan',
  'cataclysm:ancient_remnant',
  'cataclysm:maledictus',
  'cataclysm:scylla',
  'twilightforest:naga',
  'twilightforest:lich',
  'twilightforest:minoshroom',
  'twilightforest:hydra',
  'twilightforest:knight_phantom',
  'twilightforest:ur_ghast',
  'twilightforest:alpha_yeti',
  'twilightforest:snow_queen',
  'twilightforest:plateau_boss'
]
var RIKJS_BOSS_LOW_HP_RATIO = 0.55   // 血量降到自身最大值的 55% 及以下，生命流失停止

function rikjsScheduleFreezeRecovery(entity, server, delay) {
  var key = String(entity.getUuid())
  if (RIKJS_HEALTH_FREEZE_TASKS.has(key)) return

  var task = {}
  RIKJS_HEALTH_FREEZE_TASKS.set(key, task)
  server.scheduleInTicks(delay, () => {
    if (RIKJS_HEALTH_FREEZE_TASKS.get(key) !== task) return
    RIKJS_HEALTH_FREEZE_TASKS.delete(key)
    if (entity.isAlive() && entity.hasEffect("kubejs:health_freeze")) {
      entity.setHealth(entity.getMaxHealth())
    }
  })
}

//生命流失 buff 分级实现模块
EntityEvents.afterHurt(event => {
  var target = event.getEntity()
  if (!target.isAlive() || !target.hasEffect("kubejs:health_lose")) return

  var key = String(target.getUuid())

  // boss 残血保护：血量降到自身最大值的 55% 及以下时，生命流失不再扣血，只挂缓慢
  if (CIR_HEALTH_LOSE_BOSSES.indexOf(String(target.getType())) >= 0
      && target.getHealth() <= target.getMaxHealth() * RIKJS_BOSS_LOW_HP_RATIO) {
    RIKJS_HEALTH_LOSS_TASKS.delete(key)
    target.removeEffect("kubejs:health_lose")
    target.potionEffects.add("minecraft:slowness", 200, 1)
    return
  }

  if (target.hasEffect("kubejs:health_freeze")) {
    target.removeEffect("kubejs:health_freeze")
    RIKJS_HEALTH_FREEZE_TASKS.delete(key)
  }
  if (target.getHealth() <= 5) {
    RIKJS_HEALTH_LOSS_TASKS.delete(key)
    target.removeEffect("kubejs:health_lose")
    target.potionEffects.add("minecraft:slowness", 100 * Math.floor(target.getHealth()), 3)
    return
  }
  if (RIKJS_HEALTH_LOSS_TASKS.has(key)) return

  var steps
  if (target.getHealth() > 120) {
    if (Math.floor(Math.random() * 100) < 40) {
      steps = [{ multiply: 0.8 }, { multiply: 0.85 }, { multiply: 0.9 }]
    } else {
      steps = [{ multiply: 0.95 }, { multiply: 0.96 }, { multiply: 0.97 }]
    }
  } else if (target.getHealth() > 40) {
    steps = [{ multiply: 0.96 }, { multiply: 0.97 }, { multiply: 0.98 }]
  } else if (target.getHealth() > 20) {
    steps = [{ subtract: 3 }, { subtract: 1.5 }]
  } else {
    steps = [{ subtract: 1.5 }, { subtract: 1 }]
  }

  var server = event.getServer()
  var task = {}
  RIKJS_HEALTH_LOSS_TASKS.set(key, task)

  var isBoss = CIR_HEALTH_LOSE_BOSSES.indexOf(String(target.getType())) >= 0
  var maxHp = target.getMaxHealth()
  // 扣血下限：boss 不许低于最大血量的 55%，普通生物不许低于 5
  var floorHp = isBoss ? maxHp * RIKJS_BOSS_LOW_HP_RATIO : 5

  steps.forEach((step, index) => {
    server.scheduleInTicks(4 * (index + 1), () => {
      if (RIKJS_HEALTH_LOSS_TASKS.get(key) !== task) return
      if (!target.isAlive() || !target.hasEffect("kubejs:health_lose")) {
        RIKJS_HEALTH_LOSS_TASKS.delete(key)
        return
      }

      var health = target.getHealth()
      if (step.multiply !== undefined) {
        health = Math.floor(health * step.multiply)
      } else {
        health -= step.subtract
      }
      // 钳位：boss 这一步最多扣到 55% 就停
      health = Math.max(health, floorHp)
      target.setHealth(Math.min(target.getHealth(), health))

      if (target.getHealth() <= floorHp + 0.001) {
        // 到达下限：立刻移除生命流失
        target.removeEffect("kubejs:health_lose")
        if (isBoss) {
          target.potionEffects.add("minecraft:slowness", 200, 1)
        } else {
          target.potionEffects.add("minecraft:slowness", 100 * Math.floor(target.getHealth()), 3)
        }
        RIKJS_HEALTH_LOSS_TASKS.delete(key)
      } else if (index === steps.length - 1) {
        RIKJS_HEALTH_LOSS_TASKS.delete(key)
      }
    })
  })
})
// 受伤事件
//玩家头获取
EntityEvents.afterHurt(event => {
    const damage = event.getDamage();
    const sourc = event.getSource();
    const target = event.getEntity();
    const fake = event.getPlayer();
    const server = event.getServer();
    const player = target.isPlayer() ? target : null;
  if (sourc.actual && sourc.actual.isPlayer()){
      if (damage >= 30 && player != null){
        if(fake.isFake())return;
        sourc.actual.give(Item.playerHead(player.username))
        sourc.actual.tell(Text.translate("event.kubejs.player_get_head", player.username).green())
        server.tell(Text.translate("event.kubejs.player_get_head_server", sourc.actual.username, player.username).gold())
      }
    }
  })
  //禁止打熊猫
  EntityEvents.afterHurt(event => {
    const sourc = event.getSource();
    const target = event.getEntity();
    const server = event.getServer();
    if (sourc.actual && sourc.actual.isPlayer()){
      if(target.getType() == "minecraft:panda"){
        server.runCommandSilent(`effect give ${sourc.actual.username} minecraft:instant_damage 1 1`)
        sourc.actual.tell(Text.translate("event.kubejs.player_hit_panda").red())
        server.tell(Text.translate("event.kubejs.player_hit_panda_server", sourc.actual.username).gold())
      }
    }
  })
  //易伤buff实现
EntityEvents.beforeHurt(event => {
  var entity = event.getEntity()
  if (!entity.hasEffect("kubejs:vulnerable") || event.getSource().getType() == "magic") return

  var damage = event.getDamage()
  if (damage <= 0) return
  var amplifier = entity.getEffect("kubejs:vulnerable").amplifier
  var extraDamage = damage * 0.5 + damage * (amplifier + 1) * 0.2
  if (entity.getHealth() <= extraDamage + 0.5) {
    extraDamage = Math.max(0, entity.getHealth() - 1)
  }
  // 将原有加伤并入同一次伤害，保留原伤害来源和加伤计算。
  event.setDamage(damage + extraDamage)
})
  EntityEvents.afterHurt(event=>{
    let entity = event.entity;
    if (entity.hasEffect("kubejs:golem") && entity.getType() == "minecraft:player"){
      if(entity.health < 11){
        event.server.runCommandSilent(`execute at ${entity.getUuid()} run summon minecraft:iron_golem ~ ~1 ~ {PlayerCreated:1b}`)
        entity.removeEffect("kubejs:golem")
        entity.tell(Text.translate("event.kubejs.player_golem").aqua())
      }
    }
  })
// 抗毒免疫的效果列表
const ANTITOXIC_CLEARS = [
    "minecraft:wither",
    "minecraft:poison",
    "kubejs:health_lose",
    "minecraft:slowness",
    "minecraft:mining_fatigue"
]

EntityEvents.afterHurt(event => {
    const entity = event.entity
    if (entity.level.clientSide) return
    if (!entity.hasEffect("kubejs:antitoxic")) return

    for (const id of ANTITOXIC_CLEARS) {
        if (entity.hasEffect(id)) entity.removeEffect(id)
    }
})
  
  EntityEvents.afterHurt(event => {
    const sourc = event.getSource();
    const target = event.getEntity();
    const server = event.getServer();
    if (sourc.actual && sourc.actual.isPlayer()){
      /***
     * @type {$Player_}
     */
      const player = sourc.actual.isPlayer()? sourc.actual : null;
      if(target.getType() == "minecraft:villager"){
        player.potionEffects.add("minecraft:wither",20*5,1)
        player.tell(Text.translate("event.kubejs.player_hit_villager").red())
        server.tell(Text.translate("event.kubejs.player_hit_villager_server", player.username).gold())
      }
    }
  })
EntityEvents.beforeHurt(event => {
  var player = event.getEntity()
  if (!player.isPlayer() || !player.isAlive() || !player.hasEffect("kubejs:health_freeze")) return

  var damage = event.getDamage()
  var server = event.getServer()
  var source = event.getSource()
  if (!player.isAdvancementDone("kubejs:invincible_mode")) {
    player.unlockAdvancement("kubejs:invincible_mode")
  }

  if (source.getType() == "genericKill") {
    player.removeEffect("kubejs:health_freeze")
    RIKJS_HEALTH_FREEZE_TASKS.delete(String(player.getUuid()))
    server.tell(Text.translate("event.kubejs.player_health_freeze.genericKill", player.username).bold().gold())
    event.cancel()
    return
  }
  if (damage >= player.getHealth()) {
    if (!player.isAdvancementDone("kubejs:concept_god")) {
      player.unlockAdvancement("kubejs:concept_god")
    }
    player.potionEffects.add("minecraft:resistance", 20 * 30, 2)
    player.potionEffects.add("minecraft:absorption", 20 * 30, 4)
    player.removeEffect("kubejs:health_freeze")
    RIKJS_HEALTH_FREEZE_TASKS.delete(String(player.getUuid()))
    if (source.actual == null) {
      server.tell(Text.translate("event.kubejs.player_health_freeze.environment", player.username, source.getType(), Math.floor(damage)).bold().gold())
    } else if (source.actual.isPlayer()) {
      server.tell(Text.translate("event.kubejs.player_health_freeze.player", player.username, source.actual.username, Math.floor(damage)).bold().gold())
    } else {
      server.tell(Text.translate("event.kubejs.player_health_freeze.entity", player.username, source.actual.name, Math.floor(damage)).bold().gold())
    }
    // 生命固结挡下致命伤害后，给伤害来源生物挂易伤。
    // 已有易伤则升一档，最高 V；时长随档位递减 90/80/70/60/50 秒。
    if (source.actual != null && source.actual.isLiving()) {
      var curAmp = -1
      if (source.actual.hasEffect("kubejs:vulnerable")) {
        curAmp = source.actual.getEffect("kubejs:vulnerable").getAmplifier()
      }
      var newAmp = Math.min(curAmp + 1, 4)
      var vulnSec = 90 - 10 * newAmp
      source.actual.potionEffects.add("kubejs:vulnerable", 20 * vulnSec, newAmp)
    }
    event.cancel()
    return
  }
  rikjsScheduleFreezeRecovery(player, server, 1)
})

EntityEvents.beforeHurt(event => {
  var entity = event.getEntity()
  if (entity.isPlayer() || !entity.isAlive() || !entity.hasEffect("kubejs:health_freeze")) return

  if (event.getDamage() >= entity.getHealth()) {
    entity.removeEffect("kubejs:health_freeze")
    RIKJS_HEALTH_FREEZE_TASKS.delete(String(entity.getUuid()))
    entity.potionEffects.add("minecraft:absorption", 20 * 20, 1)
    event.cancel()
    return
  }
  rikjsScheduleFreezeRecovery(entity, event.getServer(), 2)
})
EntityEvents.afterHurt(event => {
  var entity = event.getEntity()
  if (!entity.isPlayer() || !entity.isAlive() || entity.getHealth() > 5) return

  var source = event.getSource()
  var attacker = source.actual
  var causeLabel
  var cause
  if (attacker == null) {
    entity.potionEffects.add("minecraft:regeneration", 20 * 3, 1)
    if (source.getType() == "magic" || source.getType() == "onFire") return
    causeLabel = "trans.kubejs.environment"
    cause = source.getType()
  } else {
    entity.potionEffects.add("minecraft:strength", 20 * 10, 1)
    if (attacker.isPlayer()) {
      causeLabel = "trans.kubejs.player"
      cause = attacker.username
    } else {
      entity.potionEffects.add("minecraft:regeneration", 20 * 3, 1)
      entity.potionEffects.add("minecraft:resistance", 20 * 6, 1)
      causeLabel = "trans.kubejs.entity"
      cause = attacker.name
    }
  }

  // 维度名：优先用模组自带的 dimension.<命名空间>.<id>，查不到再退回 KubeJS 自己的键。
  // Text.translate(key).getString() 在键不存在时返回 key 本身，据此判断有没有翻译。
  var dimId = entity.getLevel().getDimension().toString()
  var dimKeyMod = "dimension." + dimId.replace(":", ".")
  var dimKeyKjs = "dimension.kubejs." + dimId.replace("minecraft:", "")
  var dimTry = Text.translate(dimKeyMod)
  var dim
  if (dimTry.getString() != dimKeyMod) {
    dim = dimTry
  } else {
    var dimTry2 = Text.translate(dimKeyKjs)
    dim = (dimTry2.getString() != dimKeyKjs) ? dimTry2 : Text.of(dimId)
  }
  event.getServer().tell(Text.translate(
    "event.kubejs.player_health_critical", entity.username, entity.getHealth().toFixed(1), dim,
    Math.floor(entity.getX()), Math.floor(entity.getY()), Math.floor(entity.getZ()),
    Text.translate(causeLabel), cause
  ))
})
    EntityEvents.afterHurt(event => {
    const source = event.getSource();
    const target = event.getEntity();
    const server = event.getServer();
    if(source.actual && source.actual.isLiving()) {
      const damage = event.getDamage();
      /***
      * @type {$LivingEntity_}
      */
      const attacker = source.actual;
      if(attacker.getType() == "minecraft:player" ){
        if(target.getType() == "minecraft:player" && damage > 30){
          if (cirShouldBroadcastDamage(String(attacker.uuid), damage)) {
            server.tell(Text.translate("event.kubejs.player_hurt_player", attacker.username, target.username, damage.toFixed(1)).yellow())
          }
       }else if(target.getType() != "minecraft:player" && damage >= 70){
          if (cirShouldBroadcastDamage(String(attacker.uuid), damage)) {
            server.tell(Text.translate("event.kubejs.player_hurt_entity", attacker.username, target.name, damage.toFixed(1)).yellow())
          }
      }
      }else if(attacker.getType() != "minecraft:player" && target.getType() == "minecraft:player" && damage >= 25){
        server.tell(Text.translate("event.kubejs.entity_hurt_player", attacker.name, target.username, damage.toFixed(1)).yellow())
      }
  }})
    EntityEvents.afterHurt(event => {
      const source = event.getSource();
      const target = event.getEntity();
      if(source.actual && source.actual.isLiving()) {
        /***
        * @type {$LivingEntity_}
        */
        if(target.getType() == "guardvillagers:guard"){
          if(target.health < 6){
            target.potionEffects.add("minecraft:regeneration", 20*3, 1)
          }
          if(target.health < 12){
            target.potionEffects.add("minecraft:resistance", 20*6, 1)
          }
        }
      }
    })
    EntityEvents.afterHurt(event => {
      const source = event.getSource();
      const target = event.getEntity();
       if(source.getType() != "outOfWorld" || target.health >= 8 || !target.isAlive())return
       const item = target.getHeadArmorItem();
       if(!item || item.isEmpty())return
       if(source.getType() == "outOfWorld" && target.health <8){
        if(item.hasEnchantment("kubejs:void_rescue",0)){
             var server = event.getServer();
             var x = Math.floor(target.getX());
             var z = Math.floor(target.getZ());
            target.teleportTo(x , 150 , z);
            target.potionEffects.add("minecraft:slow_falling", 20*10, 0)
            if(target.isPlayer()){
              server.tell(Text.translate("event.kubejs.player_void_rescue",target.username).yellow())
            }
            item.count --
          }
      }
   })
   EntityEvents.beforeHurt(event => {
    const source = event.getSource();
    const target = event.getEntity();
    if(target.getType() == "minecraft:silverfish" && source.actual) {
      const number = Math.floor(Math.random()*100)
      if(number < 69 && target.health > 20 && target.health == target.maxHealth){
        target.kill()
        event.cancel()
      }
   }})
  

//死亡事件
  EntityEvents.death(event => {
    const sourc = event.getSource();
    const target = event.getEntity();
    const server = event.getServer();
    if (sourc.actual && sourc.actual.isPlayer()){
      if(target.getType() == "minecraft:villager"){
        server.tell(Text.translate("event.kubejs.player_kill_villager_server", sourc.actual.username).lightPurple())
        if(String(target.nbt).includes("librarian")){
         var killer = sourc.actual;
        server.scheduleInTicks(10, () => {
         if (!killer.isAlive()) return
         server.tell(Text.translate("event.kubejs.player_kill_librarian_server", killer.username).red())
         server.runCommandSilent(`effect give ${killer.username} minecraft:darkness 100 0`)
        server.scheduleInTicks(90, () => {
           if (killer.isAlive()) killer.kill()
        })
        })}
        else{
        server.tell(Text.translate("event.kubejs.player_kill_other_server", sourc.actual.username).aqua())
        }
      }
      }
  })
  EntityEvents.death(event => {
    const source = event.getSource();
    const target = event.getEntity();
    const server = event.getServer();
    const player = target.isPlayer() ? target : null;
    if(source.actual && source.actual.getType() == "minecraft:creeper" && player != null) {
    if(source.actual.isPowered()){
      server.tell(Text.translate("event.kubejs.creeper_powered_explosion", player.username).yellow())
    }}
  })
EntityEvents.death(event => {
  var target = event.getEntity()
  if (target.getType() != "minecraft:villager" || target.getLevel().getDimension().toString() != "minecraft:the_end") return

  var attacker = event.getSource().actual
  if (attacker == null) return
  var raiders = ["minecraft:pillager", "minecraft:vindicator", "minecraft:evoker", "minecraft:vex"]
  if (raiders.includes(attacker.getType())) {
    event.getServer().runCommandSilent("title @a title " + JSON.stringify({
      translate: "event.kubejs.villager_end_die", color: "red", bold: true
    }))
  }
})
  EntityEvents.death(event => {
    const target = event.getEntity();
    const server = event.getServer();
    const source = event.getSource();
    if(target.getType() == "minecraft:ender_dragon" && source.actual && source.actual.isPlayer()){
        /***
        * @type {$Player_}
        */
        const player = source.actual;
        server.runCommandSilent(`effect give ${player.username} minecraft:glowing 30 0`)
        player.tell(Text.translate("event.kubejs.player_kill_ender_dragon", player.username).green())
        server.tell(Text.translate("event.kubejs.player_kill_ender_dragon_reward", player.username).gold())
        player.give(Item.of("kubejs:eternal_certus_gem",2))
        player.give(Item.of("kubejs:stella_quantum_gem",1))
      
    }
  })
  //生成事件
EntityEvents.spawned('minecraft:zombie', event => {
  var entity = event.getEntity()
  if (entity.getLevel().getDimension() != 'minecraft:overworld') return
  var server = event.getServer()
  if (!rikjsCanRollSpawn(entity, server)) return
  var random = Math.floor(Math.random() * 100)
  if (random < 10) {
    entity.potionEffects.add('minecraft:speed', 12000, 1)
    entity.potionEffects.add('minecraft:absorption', 12000, 4)
  } else if (random < 40) {
    entity.potionEffects.add('minecraft:fire_resistance', 12000, 1)
  } else if (random > 98) {
    if (entity.getHealth() > 100) return
    entity.setMainHandItem(Item.of('minecraft:iron_axe'))
    entity.potionEffects.add('minecraft:resistance', 12000, 0)
    entity.potionEffects.add('kubejs:health_freeze', 6000, 0)
    entity.potionEffects.add('minecraft:glowing', 12000, 0)
    if (entity.getY().toFixed(1) > 62) {
      server.tell(Text.translate('event.kubejs.zombie_spawned', entity.getX().toFixed(1), entity.getY().toFixed(1), entity.getZ().toFixed(1)).red())
    }
  } else return
  rikjsRecordEnhancedSpawn(entity, server)
})

EntityEvents.spawned('minecraft:skeleton', event => {
  var entity = event.getEntity()
  if (entity.getLevel().getDimension() != 'minecraft:overworld') return
  var server = event.getServer()
  if (!rikjsCanRollSpawn(entity, server)) return
  var random = Math.floor(Math.random() * 100)
  if (random < 10) {
    entity.potionEffects.add('minecraft:speed', 12000, 1)
    entity.potionEffects.add('minecraft:absorption', 12000, 4)
  } else if (random < 40) {
    entity.potionEffects.add('minecraft:fire_resistance', 12000, 1)
  } else if (random > 98) {
    if (entity.getHealth() > 40) return
    entity.potionEffects.add('kubejs:health_freeze', 6000, 0)
    entity.potionEffects.add('minecraft:resistance', 12000, 0)
    entity.potionEffects.add('minecraft:glowing', 12000, 0)
    entity.setMainHandItem(Item.of('minecraft:iron_sword'))
    if (entity.getY().toFixed(1) > 62) {
      server.tell(Text.translate('event.kubejs.skeleton_spawned', entity.getX().toFixed(1), entity.getY().toFixed(1), entity.getZ().toFixed(1)).red())
    }
  } else return
  rikjsRecordEnhancedSpawn(entity, server)
})

EntityEvents.spawned('minecraft:creeper', event => {
  var entity = event.getEntity()
  if (entity.getLevel().getDimension() != 'minecraft:overworld') return
  var server = event.getServer()
  if (!rikjsCanRollSpawn(entity, server)) return
  var random = Math.floor(Math.random() * 100)
  if (random < 10) {
    if (entity.getHealth() > 40) return
    entity.potionEffects.add('minecraft:resistance', 12000, 1)
    entity.potionEffects.add('minecraft:slowness', 12000, 1)
  } else if (random < 30) {
    if (entity.getHealth() > 40) return
    entity.potionEffects.add('minecraft:absorption', 12000, 2)
  } else if (random > 90 && entity.getLevel().isThundering()) {
    var x = entity.getX(), y = entity.getY(), z = entity.getZ()
    server.runCommandSilent(`summon minecraft:lightning_bolt ${x} ${y} ${z}`)
    server.scheduleInTicks(20, () => {
      if (entity.isAlive()) {
        entity.potionEffects.add('minecraft:instant_health', 1, 1)
        entity.potionEffects.add('minecraft:glowing', 12000, 0)
        if (entity.getHealth() > 30) return
        entity.potionEffects.add('minecraft:absorption', 12000, 4)
        entity.setRemainingFireTicks(0)
      }
    })
  } else return
  rikjsRecordEnhancedSpawn(entity, server)
})

EntityEvents.spawned('guardvillagers:guard', event => {
  var entity = event.getEntity()
  if (entity.getLevel().getDimension() != 'minecraft:overworld') return
  if (entity.getPersistentData().getBoolean(RIKJS_SPAWN_PROCESSED_KEY)) return
  var server = event.getServer()
  // Keep the existing shield drop rule for every new guard, even on cooldown.
  server.scheduleInTicks(1, () => {
    if (entity.isAlive() && entity.getOffHandItem().getId() == 'minecraft:shield') {
      entity.setOffHandItem(Item.of('minecraft:shield').enchant('minecraft:vanishing_curse', 1))
    }
  })
  if (!rikjsCanRollSpawn(entity, server)) return
  var random = Math.floor(Math.random() * 100)
  if (random < 10) {
    entity.potionEffects.add('minecraft:strength', 24000, 1)
    entity.defaultMovementSpeed = 0.6
    server.scheduleInTicks(1, () => {
      if (!entity.isAlive()) return
      var enchantment = Math.random() < 0.5 ? 'minecraft:smite' : 'minecraft:sharpness'
      entity.setMainHandItem(Item.of('minecraft:diamond_sword').enchant(enchantment, 3).enchant('minecraft:vanishing_curse', 1))
    })
  } else if (random < 40) {
    entity.potionEffects.add('minecraft:absorption', 24000, 3)
    entity.defaultMovementSpeed = 0.5
  } else if (random >= 97) {
    entity.potionEffects.add('kubejs:health_freeze', 24000, 1)
    entity.maxHealth = 30
    entity.setHealth(30)
  } else return
  rikjsRecordEnhancedSpawn(entity, server)
})

EntityEvents.spawned('minecraft:iron_golem', event => {
  var entity = event.getEntity()
  var server = event.getServer()
  if (!rikjsCanRollSpawn(entity, server)) return
  var random = Math.floor(Math.random() * 100)
  // Singles: 10% each. Pairs: 5% each. Each effect remains 20% per roll.
  // The removed 5% Health Freeze outcome now belongs to the no-buff outcome.
  var resistance = { id: 'minecraft:resistance', amplifier: 1 }
  var speed = { id: 'minecraft:speed', amplifier: 1 }
  var regeneration = { id: 'minecraft:regeneration', amplifier: 0 }
  var selectedBuffs = []
  if (random < 10) selectedBuffs = [resistance]
  else if (random < 20) selectedBuffs = [speed]
  else if (random < 30) selectedBuffs = [regeneration]
  else if (random < 35) selectedBuffs = [resistance, speed]
  else if (random < 40) selectedBuffs = [resistance, regeneration]
  else if (random < 45) selectedBuffs = [speed, regeneration]
  if (selectedBuffs.length === 0) return
  selectedBuffs.forEach(buff => entity.potionEffects.add(buff.id, 20 * 60 * 10, buff.amplifier))
  rikjsRecordEnhancedSpawn(entity, server)
})

  EntityEvents.spawned(event => {
    /***
      * @type {$LivingEntity_}
      */
    const entity = event.getEntity();
    if(entity.getLevel().getDimension() != "minecraft:overworld")return
    if(entity.getType() == "minecraft:player"){
      entity.potionEffects.add("minecraft:resistance",20*10,1)
      entity.potionEffects.add("kubejs:antitoxic",20*20,0)
    }
  })
