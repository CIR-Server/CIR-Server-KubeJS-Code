console.log('Loading KubeJS Code: "new_fluid.js"');
StartupEvents.registry('fluid', event => {
    // 流体注册-西瓜汁
    event.create('melon_juice',"thin").noBucket().noBlock()
    .tint(0xFF3333)
    // 流体注册-苹果酒
    event.create('apple_cider', "thin").noBlock()
    .tint(0xF5CB50)
    // 流体注册-甜浆果汁
    event.create('sweet_berries_juice', "thin").noBlock()
    .tint(0xCE1B4B)
    // 流体注册-紫颂果酒
    event.create('chorus_fruit_wine', "thin").noBlock()
    .tint(0xB533C9)
    // 流体注册-苹果汁
    event.create('apple_juice', "thin").noBlock()
    .tint(0xFFDC89)
    // 流体注册-发光浆果汁
    event.create('glow_berry_juice', "thin").noBlock()
    .tint(0xDF8E15)
    // 流体注册-蔓越莓汁
    event.create('cranberry_juice', "thin").noBlock()
    .tint(0xEB2C6C)
    // 流体注册-神秘液体
    event.create('mysterious_liquid', "thick").noBlock()
    .tint(0x4F4F4F)
    // 流体注册-强化液体
    event.create('reinforce_liquid', "thick").noBlock()
    .tint(0xFF44ED)
    })
