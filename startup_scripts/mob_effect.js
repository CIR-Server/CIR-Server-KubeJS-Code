console.log('Loading KubeJS Code: "mob_effect.js"');
StartupEvents.registry("mob_effect",event=>{
    // 效果注册-易伤
    event.create("kubejs:vulnerable")
    .harmful()
    .displayName("Vulnerable")
    .color("yellow")
    // 效果注册-傀儡支援
    event.create("kubejs:golem")
    .beneficial()
    .displayName("Golem's Help")
    .color(0xFFB266)
    // 效果注册-抗毒
    event.create("kubejs:antitoxic")
    .beneficial()
    .displayName("Antitoxic")
    .color(0xFF6262)
    // 效果注册-燃烧
    event.create("kubejs:burning")
    .harmful()
    .displayName("Burning")
    .color(0xFF4F1E)
    // 效果注册-生命固结
    event.create("kubejs:health_freeze")
    .beneficial()
    .displayName("Health Freeze")
    .color(0x0000FF)
    // 效果注册-生命流失
    event.create("kubejs:health_lose")
    .harmful()
    .displayName("Health Lose")
    .color(0x00BB30)
/*     event.create("kubejs:bombegranate_support")
    .beneficial()
    .displayName("Bombegranate Support")
    .color(0xFF6347) */
})


