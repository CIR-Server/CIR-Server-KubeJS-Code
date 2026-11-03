/**
 * @author bot_undefined
 * @name UndKJS-PlayerEvent
 * @description 服务端事件相关 KubeJS 脚本
 */
console.log('Loading KubeJS Code: "UndKJS-PlayerEvent.js"');

PlayerEvents.chat(event => {
  const player = event.getPlayer();
  const server = event.getServer();
  const message = event.getMessage();
  if (message.toLowerCase() == '!!clear') 
    {
      server.scheduleInTicks(4, () => {
      if(player.hasPermissions(4)||player.hasPermissions(1)){
        server.tell(Text.of("警告！五秒后清理全部掉落物！"))
      server.scheduleInTicks(100, () => {
        server.runCommand('kill @e[type=item]')
        server.tell(Text.of("已清理全部掉落物！").green())
      })
    }else{
      server.tell(Text.of("你没有清理掉落物的权限").aqua())
    }
    })
  }
})
// 玩家事件
PlayerEvents.chat(event => {
  const player = event.getPlayer();
  const server = event.getServer();
  const message = event.getMessage();

  // 当玩家输入指定兑换码时触发
  if (message.toLowerCase() === 'cirnewkjs30') {
    // 初始化兑换名单（如果不存在）
    if (!server.persistentData.KJS30List) {
      server.persistentData.KJS30List = [];
    }
    
    // 检查玩家是否已兑换过
    if (String(server.persistentData.KJS30List).includes(player.username)) {
      player.tell(Text.translate("event.kubejs.gift.already").red());
      event.cancel()
    }
    // 添加玩家到兑换名单
    server.persistentData.KJS30List.push(player.username);
    
    // 给予玩家奖励
    player.give(Item.of('kubejs:setlla_quantum_gem', 1));  
    player.give(Item.of('kubejs:random_blcok', 16)); 
    player.give(Item.of('minecraft:golden_apple', 10));    // 10个金胡萝卜
    player.potionEffects.add('minecraft:speed', 20 * 60 * 30, 1); // 30分钟速度 II
    player.addXP(500); // 500经验

    // 发送成功消息
    player.tell(Text.translate("event.kubejs.gift.success").green());
    event.cancel()
  }
});
 PlayerEvents.tick(event => {
    const player = event.getPlayer();
    if(player.hasEffect("kubejs:burning")){
      player.setRemainingFireTicks(60)
    }
})
  // 聊天事件
  PlayerEvents.chat(event => {
      if (event.message == 'KubeJS' || event.message == 'KJS' 
        || event.message.toLowerCase() =='!!kjs' || event.message.toLowerCase() =='!!kubejs') {
        // Schedule task in 1 tick, because if you reply immediately, it will print before player's message
        event.server.scheduleInTicks(2, () =>{
          event.player.tell(Text.gold(Text.translate("event.kubejs.info.0")))
            event.player.tell(Text.yellow(Text.translate("event.kubejs.info.1")))
            event.player.tell(Text.green(Text.translate("event.kubejs.info.2")))
            event.server.scheduleInTicks(10, () =>{
            event.player.tell(Text.darkPurple(Text.translate("event.kubejs.info.3")))
            event.player.tell(Text.red(Text.translate("event.kubejs.info.4")))
            event.server.scheduleInTicks(10, () =>{
            event.player.tell(Text.lightPurple(Text.translate("event.kubejs.info.5")))
            event.player.tell(Text.aqua(Text.translate("event.kubejs.info.6")))
            event.player.tell(Text.yellow(Text.translate("event.kubejs.info.7")))
            })
          })
        })
      }
  })
 PlayerEvents.chat(event => {
    if (event.message.toLowerCase() =='!!kjs craft' || event.message.toLowerCase() =='!!kubejs craft') {
      event.server.scheduleInTicks(2, () =>{
        event.player.tell(Text.translate("event.kubejs.craft.0").green())
        event.server.scheduleInTicks(2, () =>{
          event.player.tell(Text.translate("event.kubejs.craft.1").aqua())
          event.player.tell(Text.translate("event.kubejs.craft.2").aqua())
        })})
    }})
    PlayerEvents.chat(event => {
    if (event.message =='!!KJS Enchant' || event.message =='!!KubeJS Enchant') {
      event.server.scheduleInTicks(2, () =>{
        event.player.tell(Text.translate("event.kubejs.enchant.0").green())
        event.server.scheduleInTicks(2, () =>{
          event.player.tell(Text.translate("event.kubejs.enchant.1").aqua())
          event.player.tell(Text.translate("event.kubejs.enchant.2").aqua())
          event.player.tell(Text.translate("event.kubejs.enchant.3").aqua())
          event.player.tell(Text.translate("event.kubejs.enchant.4").aqua())
          event.player.tell(Text.translate("event.kubejs.enchant.5").aqua())
          event.player.tell(Text.translate("event.kubejs.enchant.6").aqua())
          event.player.tell(Text.translate("event.kubejs.enchant.7").aqua())
          event.player.tell(Text.translate("event.kubejs.enchant.8").aqua())
        })
      })}
    })
  PlayerEvents.chat(event => {
    if (event.message == 'Creeper?' || event.message == 'creeper?' ){
      event.server.scheduleInTicks(2, () =>{
        event.server.tell(Text.of("Aw Man!").bold().green())
        event.server.runCommand(`execute at ${event.player.username} run playsound kubejs:music.creeper master @a`)
      })
    }})
  PlayerEvents.chat(event => {
    if (event.message.includes('香蕉') || event.message.includes('banana') || event.message.includes('睡蕉小猴') || event.message.includes('蕉蕉')) {
      event.server.scheduleInTicks(2, () =>{
        event.player.tell(Text.translate("event.kubejs.banana").yellow())
        event.server.runCommand(`execute at ${event.player.username} run playsound kubejs:music.banana master @a`)
      })
    }}) 
    PlayerEvents.chat(event => {
    if (event.message.includes('舞萌') || event.message.toLowerCase().includes('maimai') || event.message.includes('awmc') || event.message.includes('出勤')|| event.message.includes('maimai DX')|| event.message.includes('滴蜡熊')) {
      event.server.scheduleInTicks(2, () =>{
        event.server.tell(Text.translate("event.kubejs.maimai").yellow())
        event.server.runCommand(`execute at ${event.player.username} run playsound kubejs:music.sega_maimai master @a`)
      })
    }}) 
    PlayerEvents.chat(event => {
    if(event.message.includes('恭喜发财')||event.message.includes('刘德华')||event.message.includes('解冻')){
      event.server.scheduleInTicks(2, () =>{
      event.player.tell(Text.of("正在解冻，请等待").gold())
      event.server.scheduleInTicks(20, () =>{
        event.server.runCommand(`execute at ${event.player.username} run playsound kubejs:music.gong_xi_fa_cai master @a`)
      })
      })
    }
  })
  // 聊天关键词过滤与发言拦截：服务器内部使用，不随本仓库分发

  // 玩家登陆事件
  PlayerEvents.loggedIn(event=>{
    const player = event.getPlayer()  
    const server = event.getServer()
    server.scheduleInTicks(20, () => {
    player.tell(Text.translate("event.kubejs.login").gold())
    player.tell(Text.translate("event.kubejs.login.2").gold())
    player.tell(Text.translate("event.kubejs.login.3").gold())
    player.tell(Text.translate("event.kubejs.login.4").gold())
    player.tell(Text.translate("event.kubejs.login.5").aqua())
    })
  })
  //游戏刻事件
  PlayerEvents.tick(event => {
    const player = event.getPlayer()
    if (player.hasEffect("kubejs:health_freeze")) {
      if(player.getEffect("kubejs:health_freeze").duration > 3000) {
        player.removeEffect("kubejs:health_freeze")
        player.potionEffects.add("kubejs:health_freeze",2400,0)
      }
    }
  })
