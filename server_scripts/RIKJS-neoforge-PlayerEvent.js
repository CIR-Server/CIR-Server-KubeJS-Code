/**
 * @author Real_Infinistar
 * @name RIKJS-PlayerEvent
 * @description 服务端事件相关 KubeJS 脚本
 */
console.log('Loading KubeJS Code: "RIKJS-PlayerEvent.js"');

PlayerEvents.chat(event => {
  const player = event.getPlayer();
  const server = event.getServer();
  const message = event.getMessage();
  if (message.toLowerCase() == '!!clear') 
    {
      server.scheduleInTicks(4, () => {
        server.tell(Text.translate("event.kubejs.clear").aqua())
      server.scheduleInTicks(100, () => {
        server.runCommand('cir cleanup')
        server.tell(Text.translate("event.kubejs.clear.success",player.username).green())
      })
    })
  }
})
// 玩家事件

//燃烧buff实现
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
  //下述两段代码只适用于CIR Server，发布版本会移除
  PlayerEvents.chat(event => {
      if( event.message.includes('宗教游戏') || event.message.includes('颗粒鸡块') ||event.message.includes('女拳')||event.message.includes('郭楠')
        || event.message.includes('傻逼吧你') || event.message.includes('勇者大人')||event.message.includes('桌饺')||event.message.includes('索嗨')
        || event.message.includes('操你妈') || event.message.includes('nmsl') || event.message.includes('线下真实') || event.message.includes('死妈')
        || event.message.includes('你妈死了') || event.message.includes('脑瘫') || event.message.includes('快开我盒')|| event.message.includes('散兵夫人')
         ){
            event.player.tell(Text.red("您发送的信息疑似包含引战信息或攻击性言论，请修改后重新发送"))
            event.cancel()}
  })
  PlayerEvents.chat(event => {
    if(event.message.includes('散兵')||event.message.includes('忌炎')||event.message.includes('刘伟')||event.message.includes('松伦')||
    event.message.includes('仙家军')||event.message.includes('利刃')||event.message.includes('库狗')||event.message.includes('三度背叛')||
    event.message.includes('迷你世界')||event.message.includes('米学长')||event.message.includes('米孝子')||event.message.includes('mxz')||event.message.includes('NGA')
  ){
      event.server.scheduleInTicks(2, () =>{
      event.player.tell(Text.of("（仅你可见）检测到可能引发争议的游戏或其相关内容，请尽量避免讨论，以避免可能的争执。如果你并未讨论争议游戏内容，请忽略此信息").aqua())
    })
    }
  })

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
