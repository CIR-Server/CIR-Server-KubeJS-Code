console.log('Loading KubeJS Code: "sound_event.js"');
StartupEvents.registry("sound_event",event =>{
    // 音效注册-睡蕉之歌
    event.create("kubejs:music.banana")
    // 音效注册-刘德华-恭喜发财
    event.create("kubejs:music.gong_xi_fa_cai")
    // 音效注册-maimai登录音乐
    event.create("kubejs:music.sega_maimai")
    // 音效注册-Revenge(Minecraft Creeper Song)
    event.create("kubejs:music.creeper")
}
)
