let $DataSource = Java.loadClass("net.minecraft.network.chat.contents.DataSource");
/**
 * @author bot_undefined
 * @name UndKJS-EntityEvent
 * @description 服务端事件相关 KubeJS 脚本
 */
console.log('Loading KubeJS Code: "UndKJS-EntityEvent.js"');
EntityEvents.afterHurt(event => {
    const target = event.getEntity()
    const server = event.getServer()
    const number = Math.floor(Math.random()*100)
    if(!target.hasEffect('kubejs:health_lose'))return
    if(target.hasEffect('kubejs:health_freeze')){
      target.removeEffect('kubejs:health_freeze')
    }
    if(target.health > 120){
      if(number<25){
        server.scheduleInTicks(4,() =>{
          target.health = Math.floor(target.health * 0.8)
          server.scheduleInTicks(4,() =>{
            target.health = Math.floor(target.health * 0.85)
            server.scheduleInTicks(4,() =>{
              target.health = Math.floor(target.health * 0.9)
            })
          })
        })
      }else{
      server.scheduleInTicks(4,() =>{
        target.health = Math.floor(target.health * 0.95)
        server.scheduleInTicks(4,() =>{
          target.health = Math.floor(target.health * 0.96)
          server.scheduleInTicks(4,() =>{
            target.health = Math.floor(target.health * 0.97)
          })
        })
      })}
    }
    else if(target.health <= 120 && target.health >40){
      server.scheduleInTicks(4,() =>{
        target.health = Math.floor(target.health * 0.96)
        server.scheduleInTicks(4,() =>{
          target.health = Math.floor(target.health * 0.97)
          server.scheduleInTicks(4,() =>{
            target.health = Math.floor(target.health * 0.98)
        })
        })
      })
    }
    else if(target.health <= 40 && target.health >20){
      server.scheduleInTicks(4,() =>{
        target.health - 3
        server.scheduleInTicks(4,() =>{
          target.health - 1.5
        })
      })
    }
    else if(target.health <= 20 && target.health >5){
      server.scheduleInTicks(4,() =>{
        target.health - 1.5
        server.scheduleInTicks(4,() =>{
          target.health - 1
        })
      })
    }
    else if(target.health <= 5){
      target.removeEffect('kubejs:health_lose')
      target.potionEffects.add('minecraft:slowness',100*Math.floor(target.health),3)
    }
})
// 受伤事件
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
  EntityEvents.beforeHurt(event=>{
    /** 
        @type {$LivingEntity_}
        */
    let entity = event.getEntity();
    if (entity.hasEffect("kubejs:vulnerable") && event.getSource().getType() != "magic"){
    let a = entity.getEffect("kubejs:vulnerable").amplifier
    let nd = event.damage * 0.5 + (event.damage * (a + 1) * 0.2)
    if(entity.health > nd + 0.5){
    event.server.runCommandSilent(`damage ${entity.getUuid()} ${nd} minecraft:magic`)
    }else{
    event.server.runCommandSilent(`damage ${entity.getUuid()} ${entity.health-1} minecraft:magic`)
    }
    }
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
  EntityEvents.afterHurt(event=>{
    let entity = event.entity;
    if (entity.hasEffect("kubejs:antitoxic")){
      if(entity.hasEffect("minecraft:wither")){
        entity.removeEffect("minecraft:wither")
      }else if(entity.hasEffect("minecraft:poison")){
        entity.removeEffect("minecraft:poison")
      }else if(entity.hasEffect("kubejs:health_lose")){
        entity.removeEffect("kubejs:health_lose")
      }else if(entity.hasEffect("minecraft:slowness")){
        entity.removeEffect("minecraft:slowness")
      }else if(entity.hasEffect("minecraft:darkness")){
        entity.removeEffect("minecraft:darkness")
      }else if(entity.hasEffect("minecraft:mining_fatigue")){
        entity.removeEffect("minecraft:mining_fatigue")
      }else if(entity.hasEffect("minecraft:blindness")){
        entity.removeEffect("minecraft:blindness")
      }
    }})
  
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
  EntityEvents.beforeHurt(event =>{
    if(event.getEntity().isPlayer() == false)return
    const player = event.getPlayer()
    const damage = event.getDamage()
    const server = event.getServer()
    const sourc = event.getSource()
    if(player.hasEffect("kubejs:health_freeze")){
    if(sourc.getType()=="genericKill"){
      server.tell(Text.translate("event.kubejs.player_health_freeze.genericKill", player.username).bold().gold())
      player.removeEffect("kubejs:health_freeze")
      event.cancel()
    }
    if(damage >= player.health){ 
      player.potionEffects.add("minecraft:resistance",20*30,2)
      player.potionEffects.add("minecraft:absorption",20*30,4)
      player.removeEffect("kubejs:health_freeze")
      if(sourc.actual == null){
        server.tell(Text.translate("event.kubejs.player_health_freeze.environment", player.username, sourc.getType(), Math.floor(damage)).bold().gold())
      }else if(sourc.actual.getType()=="minecraft:player"){
        server.tell(Text.translate("event.kubejs.player_health_freeze.player", player.username, sourc.actual.username, Math.floor(damage)).bold().gold())
      }else{
        server.tell(Text.translate("event.kubejs.player_health_freeze.entity", player.username, sourc.actual.name, Math.floor(damage)).bold().gold())
      }
      event.cancel()
    }else if( damage < player.health){
      server.scheduleInTicks(1, () => {
      player.setHealth(20)
      })
    }}
  })
  EntityEvents.beforeHurt(event =>{
    if(event.getEntity().isPlayer() == true && !event.getEntity().isLiving())return
    /***
      * @type {$LivingEntity_}
      */
    const entity = event.getEntity();
    const damage = event.getDamage();
    const server = event.getServer();
    const maxhp = entity.getMaxHealth();
    if (!entity.hasEffect("kubejs:health_freeze"))return;
    if(damage <= entity.health){
      server.scheduleInTicks(2, () => {
        entity.setHealth(maxhp);
      })
    }else if(damage > entity.health){
      entity.removeEffect("kubejs:health_freeze")
      entity.potionEffects.add("minecraft:absorption",20*20,2)
      event.cancel()
    }
  })
  EntityEvents.afterHurt(event => {
    const source = event.getSource();
    const entity = event.getEntity();
    const server = event.getServer();
    const hp =entity.getHealth();
    const x =Math.floor(entity.getX());
    const y =Math.floor(entity.getY());
    const z =Math.floor(entity.getZ())
    const dim=Text.translate(`dimension.kubejs.${entity.getLevel().getDimension().toString().replace("minecraft:","")}`)
    const enviroment0 = Text.translate("trans.kubejs.environment")
    const player0 = Text.translate("trans.kubejs.player")
    const entity0 = Text.translate("trans.kubejs.entity")
      if(entity.getType() == "minecraft:player" && hp <= 5 && source.actual == null){
        entity.potionEffects.add("minecraft:regeneration", 20*3, 1)
        if(source.getType() != "magic" && source.getType() != "onFire"){
        server.tell(Text.translate("event.kubejs.player_health_critical", entity.username, hp.toFixed(1), dim, x, y, z, enviroment0, source.getType()))
        }
      }
      else if(entity.getType() == "minecraft:player" && hp <= 5 && source.actual != null){  
        if(source.actual.isPlayer()){
          entity.potionEffects.add("minecraft:strength", 20*10, 1)
          server.tell(Text.translate("event.kubejs.player_health_critical", entity.username, hp.toFixed(1), dim, x, y, z, player0, source.actual.username))
        }else{
          entity.potionEffects.add("minecraft:strength", 20*10, 1)
          entity.potionEffects.add("minecraft:regeneration", 20*3, 1)
          entity.potionEffects.add("minecraft:resistance", 20*6, 1)
          server.tell(Text.translate("event.kubejs.player_health_critical", entity.username, hp.toFixed(1), dim, x, y, z, entity0, source.actual.name))
      }
    }
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
          server.tell(Text.translate("event.kubejs.player_hurt_player", attacker.username, target.username, damage.toFixed(1)).yellow())
      }else if(target.getType() != "player" && damage > 50){
          server.tell(Text.translate("event.kubejs.player_hurt_entity", attacker.username, target.name, damage.toFixed(1)).yellow())
      }
      }else if(attacker.getType() != "minecraft:player" && target.getType() == "minecraft:player" && damage > 20){
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
      const item = target.headArmorItem;
      const server = event.getServer();
      const x =Math.floor(target.getX());
      const z =Math.floor(target.getZ())
      if(!item || item.isEmpty())return
      if(source.getType() == "outOfWorld" && target.health <8){
        if(item.hasEnchantment("kubejs:void_rescue",0)){
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
      if(number < 40 && target.health > 20 && target.health == target.maxHealth){
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
        server.scheduleInTicks(10, () => {
        server.tell(Text.translate("event.kubejs.player_kill_librarian_server", sourc.actual.username).red())
        server.runCommandSilent(`effect give ${sourc.actual.username} minecraft:darkness 100 0`)
        server.scheduleInTicks(90, () => {
          sourc.actual.kill()
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
    if(String(source.actual.nbt).includes("powered")){
      server.tell(Text.translate("event.kubejs.creeper_powered_explosion", player.username).yellow())
    }}
  })
  EntityEvents.death(event => {
    const source = event.getSource();
    const target = event.getEntity();
    const server = event.getServer();
    if(target.getType() == "minecraft:villager" && target.getLevel().getDimension() == "the_end"){
    if(source.actual.getType() == "minecraft:pillager" || source.actual.getType() == "minecraft:vindicator"|| source.actual.getType() == "minecraft:evoker"|| source.actual.getType() == "minecraft:vex"){
      server.runCommandSilent('title @a title [{"text":"{\"translate\":\"event.kubejs.villager_end_die\"}","color":"red","bold":true,"italic":false,"underlined":false,"strikethrough":false,"obfuscated":false}]')
     }
    }
  })
  EntityEvents.death(event => {
    const player = event.getPlayer();
    const target = event.getEntity();
    const server = event.getServer();
    if(target.getType() == "minecraft:ender_dragon"){ 
        /***
        * @type {$Player_}
        */
        const player = sourc.actual;
        server.runCommandSilent(`effect give ${player.username} minecraft:glowing 30 0`)
        player.tell(Text.translate("event.kubejs.player_kill_ender_dragon", player.username).green())
        server.tell(Text.translate("event.kubejs.player_kill_ender_dragon_reward", player.username).gold())
        player.give(Item.of("kubejs:eternal_certus_gem",2))
        player.give(Item.of("kubejs:stella_quantum_gem",1))
      
    }
  })
  //生成事件
  EntityEvents.spawned(event => {
    /***
      * @type {$LivingEntity_}
      */
    const entity = event.getEntity();
    const server = event.getServer();
    const x =entity.getX().toFixed(1);
    const y =entity.getY().toFixed(1);
    const z =entity.getZ().toFixed(1);
    if(entity.getLevel().getDimension() != "minecraft:overworld")return
    if(entity.getType() == "minecraft:zombie"){
      var random =Math.floor(Math.random()*100)
      if(random < 10){
        entity.potionEffects.add("minecraft:speed",12000,1)
        entity.potionEffects.add("minecraft:absorption",12000,4)
      }else if(random < 40 && random >=10){
        entity.potionEffects.add("minecraft:fire_resistance",12000,1)
      }else if(random >98){
        if(entity.getHealth() >100)return
        entity.setMainHandItem(Item.of("minecraft:iron_axe"))
        entity.potionEffects.add("minecraft:resistance",12000,0)
        entity.potionEffects.add("kubejs:health_freeze",6000,0)
        if(y > 62){
        server.tell(Text.translate("event.kubejs.zombie_spawned", x, y, z).red())
        }
      }else{
        entity.potionEffects.clear()
      }
    }
  })
   EntityEvents.spawned(event => {
    /***
      * @type {$LivingEntity_}
      */
    const entity = event.getEntity();
    const server = event.getServer();
    const x =entity.getX().toFixed(1);
    const y =entity.getY().toFixed(1);
    const z =entity.getZ().toFixed(1);
    if(entity.getLevel().getDimension() != "minecraft:overworld")return
    if(entity.getType() == "minecraft:skeleton"){
      var random =Math.floor(Math.random()*100)
      if(random < 10){
        entity.potionEffects.add("minecraft:speed",12000,1)
        entity.potionEffects.add("minecraft:absorption",12000,4)
      }else if(random < 40 && random >=10){
        entity.potionEffects.add("minecraft:fire_resistance",12000,1)
      }else if(random >98){
        if(entity.getHealth() >40)return
        entity.potionEffects.add("kubejs:health_freeze",6000,0)
        entity.potionEffects.add("minecraft:resistance",12000,0)
        entity.setMainHandItem(Item.of("minecraft:iron_sword"))
        if(y > 62){
        server.tell(Text.translate("event.kubejs.skeleton_spawned", x, y, z).red())
        }
      }else{
        entity.potionEffects.clear()
      }
    }
  })
  EntityEvents.spawned(event => {
    /***
      * @type {$LivingEntity_}
      */
    const entity = event.getEntity();
    if(entity.getLevel().getDimension() != "minecraft:overworld")return
    if(entity.getType() == "minecraft:creeper"){
      var random =Math.floor(Math.random()*100)
      if(random < 10){
        if(entity.getHealth() >40)return
        entity.potionEffects.add("minecraft:resistance",12000,1)
        entity.potionEffects.add("minecraft:slowness",12000,1)
      }else if(random < 30 && random >=10){
        if(entity.getHealth() >40)return
        entity.potionEffects.add("minecraft:absorption",12000,2)
      }
    }
  })
    EntityEvents.spawned(event => {
    /***
      * @type {$LivingEntity_}
      */
    const entity = event.getEntity();
    const server = event.getServer();
    if(entity.getLevel().getDimension() != "minecraft:overworld")return
    if(entity.getType() == "guardvillagers:guard"){
      var random =Math.floor(Math.random()*100)
      if(random < 10){
        entity.potionEffects.add("minecraft:strength",24000,1)
        entity.defaultMovementSpeed = 0.8
        server.scheduleInTicks(1,()=>{
          entity.setMainHandItem(Item.of("minecraft:diamond_sword"))
        })
      }else if(random < 40 && random >=10){
        entity.potionEffects.add("minecraft:absorption",24000,3)
        entity.defaultMovementSpeed = 0.6
      }else if(random >=97){
        entity.potionEffects.add("kubejs:health_freeze",24000,1)
        entity.maxHealth = 40
      }
    }
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
      entity.potionEffects.add("minecraft:luck",20*60*60,1)
    }
  })