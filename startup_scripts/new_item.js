console.log('Loading KubeJS Code: "new_item.js"');
StartupEvents.registry('item', event => {
    // The texture for this item has to be placed in kubejs/assets/kubejs/textures/item/test_item.png
    // If you want a custom item model, you can create one in Blockbench and put it in kubejs/assets/kubejs/models/item/test_item.json
    // 物品注册-桶装西瓜汁（最好别喝）
    event.create('kubejs:melon_juice_bucket')
    .displayName('Melon Juice Bucket')
    .containerItem('bucket')
    .parentModel('minecraft:milk_bucket')
    .tooltip(Text.translate("tooltip.kubejs.melon_juice_bucket").blue())
    .unstackable()
    .tag('minecraft:bucket')
    .tag('create:upright_on_belt')
    .food(food => {
      food
        .nutrition(8)
        .saturation(1)
        .eatSeconds(4)
        .effect('minecraft:slowness',2400,1,0.6)
        .effect('minecraft:regeneration',400,1,1)
        .effect('minecraft:mining_fatigue',2400,1,0.4)
        .effect('minecraft:nausea',200,0,0.5)
        .eaten( foodEaten => {
            let player = foodEaten.getPlayer()
            if(player != null)
              {
                player.give("bucket")
              }
          }
        )
      })
    .useAnimation('drink')
    // 物品注册-充能奶块
    event.create('kubejs:powered_milk_bar')
    .displayName('Powered Milk Bar')
    .tooltip(Text.translate("tooltip.kubejs.powered_milk_bar"))
    .food(food => {
      food
        .nutrition(1)
        .eatSeconds(2)
        .alwaysEdible()
        .saturation(1.5)
        .effect('kubejs:antitoxic',20*300,0,1)
        })
    .useAnimation('eat')
    // 物品注册-伤害免疫胶囊
    event.create('kubejs:damage_resistant_capsule')
    .displayName('Damage Resistant Capsule')
    .tooltip(Text.translate("tooltip.kubejs.damage_resistant_capsule"))
    .rarity("epic")
    .food(food => {
      food
        .nutrition(2)
        .alwaysEdible()
        .eatSeconds(1)
        .saturation(1.5)
        .effect('minecraft:regeneration',20*60,0,1)
        .effect('kubejs:health_freeze',20*120,0,1)
        })
    .useAnimation('eat')
    // 物品注册-中式煎饺
    event.create('kubejs:fried_chinese_dumpling')
    .displayName('Fried Chinese Dumpling')
    .tooltip(Text.translate("tooltip.kubejs.fried_chinese_dumpling.0").blue())
    .tooltip(Text.translate("tooltip.kubejs.fried_chinese_dumpling.1").blue())
    .tooltip(Text.translate("tooltip.kubejs.fried_chinese_dumpling.2").blue())
    .tag('create:upright_on_belt')
    .food(food => {
      food
        .nutrition(3)
        .saturation(1)
        .eatSeconds(1)
        .effect('minecraft:regeneration',20*30,0,1)
        .effect('minecraft:strength',20*60,0,1)
        .effect('farmersdelight:comfort',20*30,0,1)
    })
    .useAnimation('eat')
    // [DW-删除 2026-11-01] 已移除 汤圆(kubejs:chinese_tangyuan) 与 生汤圆(kubejs:raw_tangyuan) 的注册
    // 物品注册-钢铁守护符
    event.create('kubejs:iron_patronus')
    .displayName('Iron Patronus')
    .tooltip(Text.translate("tooltip.kubejs.iron_patronus"))
    .rarity("rare")
    // 物品注册-强化深板岩（半成品）
    event.create('kubejs:incomplete_reinforced_deepslate','create:sequenced_assembly')
    .unstackable()
    .displayName('Incomplete Reinforced Deepslate')
    .rarity("rare")
    // 物品注册-紫水晶母岩（半成品）
    event.create('kubejs:incomplete_budding_amethyst','create:sequenced_assembly')
    .unstackable()
    .displayName('Incomplete Budding Amethyst')
    .rarity("rare") 
    // 物品注册-永恒强化玻璃（半成品）
    event.create('kubejs:incomplete_eternal_reinforced_glass','create:sequenced_assembly')
    .unstackable()
    .displayName('Incomplete Eternal Reinforced Glass')
    .rarity("rare")
    // 物品注册-粗制人造钻石（当心烫手! ）
    event.create('kubejs:raw_humanmade_diamond')
    .texture('kubejs:item/raw_humanmade_diamond')
    .displayName('Raw Humanmade Diamond')
    .tooltip(Text.translate("tooltip.kubejs.raw_humanmade_diamond"))
    // 物品注册-人造钻石（半成品）
    event.create('kubejs:incomplete_humanmade_diamond','create:sequenced_assembly')
    .texture('kubejs:item/incomplete_humanmade_diamond')
    .displayName('Incomplete Humanmade Diamond')
    // [DW-搬入 2026-11-01] 从 hardcore 服恢复：AE2 256K 存储组件相关物品（原客户端此段被注释掉）
    // 物品注册-初制256k存储组件
    event.create('kubejs:firstmade_cell_component_256k')
    .displayName('Firstmade Cell Component 256k')
    .tooltip(Text.translate("tooltip.kubejs.firstmade_cell_component_256k"))
    .rarity("rare")
    // 物品注册-256k存储组件（半成品）
    event.create('kubejs:incomplete_cell_component_256k','create:sequenced_assembly')
    .displayName('Incomplete Cell Component 256k')
    .rarity("rare")
    // 物品注册-警卫村民招募令
    event.create('kubejs:guard_recruitment_order')
    .unstackable()
    .tooltip(Text.translate("tooltip.kubejs.guard_recruitment_order"))
    .rarity("rare")
    .displayName('Guard Recruitment Order')
    // 物品注册-决斗邀约
    event.create('kubejs:duel_invite')
    .unstackable()
    .tooltip(Text.translate("tooltip.kubejs.duel_invite").bold())
    .tooltip(Text.translate("tooltip.kubejs.duel_invite.1").red().bold())
    .rarity("rare")
    .displayName('Duel Invite')
    // 物品注册-红石强化石
    event.create('kubejs:redstone_reinforce_gem')
    .displayName('Redstone Reinforce Gem')
    .tooltip(Text.translate("tooltip.kubejs.redstone_reinforce_gem"))
    .rarity("uncommon")
    .tag('c:gems')
    // 物品注册-退化宝石
    event.create('kubejs:degeneration_gem')
    .displayName('Degeneration Gem')
    .tooltip(Text.translate("tooltip.kubejs.degeneration_gem").red())
    .rarity("uncommon")
    .tag('c:gems')
    // 物品注册-永恒赛特斯宝石
    event.create('kubejs:eternal_certus_gem')
    .displayName('Eternal Certus Gem')
    .tooltip(Text.translate("tooltip.kubejs.eternal_certus_gem"))
    .rarity("epic")
    .tag('c:gems')
    // 物品注册-§9星辉量子宝石
    event.create('kubejs:stella_quantum_gem')
    .displayName('Stella Quantum Gem')
    .rarity("epic")
    .tooltip(Text.translate("tooltip.kubejs.stella_quantum_gem"))
    .tag('c:gems')
    // 物品注册-星辉红石粉
    event.create('kubejs:stella_redstone_dust')
    .displayName('Stella Redstone Dust')
    .tooltip(Text.translate("tooltip.kubejs.stella_redstone_dust"))
    .rarity("epic")
    .maxStackSize(16)
    .tag('kubejs:dusts')
    .tag('c:dusts')
    .tag('c:dusts/redstone_made')
    // 物品注册-永恒赛特斯粉
    event.create('kubejs:eternal_certus_dust')
    .displayName('Eternal Certus Dust')
    .tooltip(Text.translate("tooltip.kubejs.eternal_certus_dust"))
    .rarity("rare")
    .maxStackSize(16)
    .tag('kubejs:dusts')
    .tag('c:dusts')
    .tag('c:dusts/eternal_certus')
    // 物品注册-强化红石粉
    event.create('kubejs:reinforced_redstone_dust')
    .displayName('Reinforced Redstone Dust')
    .tooltip(Text.translate("tooltip.kubejs.reinforced_redstone_dust.1"))
    .rarity("uncommon")
    .maxStackSize(16)
    .tag('kubejs:dusts')
    .tag('c:dusts')
    .tag('c:dusts/redstone_made')
    // 物品注册-远古残骸粉
    event.create('kubejs:ancient_debris_dust')
    .displayName('Ancient Debris Dust')
    .tooltip(Text.translate("tooltip.kubejs.ancient_debris_dust"))
    .tag('c:dusts/ancient_debris')
    .tag('c:dusts')
        // [CIR-新增 2026-11-02] 星辉构件：电路切片器的进阶材料
    // 可堆叠（默认 64），稀有度 = 稀有
    // 序列装配产物，见 server_scripts/stella_mechanism_recipes.js
    // 名称走语言文件：item.kubejs.stella_mechanism（en_us / zh_cn / zh_tw 均已补）
    // 物品注册-星辉构件
    event.create('kubejs:stella_mechanism')
    .texture("kubejs:item/stella_mechanism")
    .rarity("epic")

    // [CIR-新增 2026-11-02] 星辉构件的序列装配半成品
    // 第二个参数 'create:sequenced_assembly' 指定 KubeJS Create 提供的物品类型，
    // 对应 Create 的 SequencedAssemblyItem —— 自带 stacksTo(1) 和进度条，
    // 不加这个就只是个普通物品，序列装配机上不会显示进度。
    // 名称走语言文件：item.kubejs.incomplete_stella_mechanism
    // 物品注册-星辉构件（半成品）
    event.create('kubejs:incomplete_stella_mechanism', 'create:sequenced_assembly')
    .texture("kubejs:item/incomplete_stella_mechanism")
    .rarity("rare")
    // 物品注册-世界之力-天气球
    event.create("kubejs:magic_weather_ball_rain")
    .tooltip("§b雨 Rain")
    .displayName("Magic Weather Ball")
    .tag("kubejs:magic_balls")
    .texture("kubejs:item/weatherball")
    .rarity("epic")
    .maxStackSize(16)
    // 物品注册-世界之力-天气球
    event.create("kubejs:magic_weather_ball_storm")
    .tooltip("§b雷 Thunder")
    .displayName("Magic Weather Ball")
    .tag("kubejs:magic_balls")
    .texture("kubejs:item/weatherball")
    .rarity("epic")
    .maxStackSize(16)   
    // 物品注册-世界之力-天气球
    event.create("kubejs:magic_weather_ball_clear")
    .tooltip("§b晴 Clear")
    .displayName("Magic Weather Ball")
    .tag("kubejs:magic_balls")
    .texture("kubejs:item/weatherball")
    .rarity("epic")
    .maxStackSize(16) 
    // 物品注册-星辰之力-昼夜球
    event.create("kubejs:magic_time_ball_day")
    .tooltip("§e昼 Day")
    .displayName("Magic Time Ball")
    .tag("kubejs:magic_balls")
    .texture("kubejs:item/timeball")
    .rarity("epic")
    .maxStackSize(16) 
    // 物品注册-星辰之力-昼夜球
    event.create("kubejs:magic_time_ball_night")
    .tooltip("§5夜 Night")
    .displayName("Magic Time Ball")
    .tag("kubejs:magic_balls")
    .texture("kubejs:item/timeball")
    .rarity("epic")
    .maxStackSize(16)
    // 物品注册-危险之力-效果球
    event.create("kubejs:magic_action_ball_speed")
    .tooltip("§6速度 Speed")
    .tooltip(Text.translate("tooltip.kubejs.magic_action_ball_speed").red())
    .texture("kubejs:item/special_ball")
    .displayName("Magic Action Ball")
    .tag("kubejs:magic_balls")
    .rarity("epic")
    .maxStackSize(16)
    // 物品注册-危险之力-效果球
    event.create("kubejs:magic_action_ball_teleport")
    .tooltip("§6传送 Teleport")
    .tooltip(Text.translate("tooltip.kubejs.magic_action_ball_teleport").red())
    .texture("kubejs:item/special_ball")
    .displayName("Magic Action Ball")
    .tag("kubejs:magic_balls")
    .rarity("epic")
    .maxStackSize(16)
    // 物品注册-危险之力-效果球
    event.create("kubejs:magic_action_ball_levitation")
    .tooltip("§6漂浮 Levitation")
    .tooltip(Text.translate("tooltip.kubejs.magic_action_ball_levitation").red())
    .texture("kubejs:item/special_ball")
    .displayName("Magic Action Ball")
    .tag("kubejs:magic_balls")
    .rarity("epic")
    .maxStackSize(16)
    // 物品注册-死生之力-目标球
    event.create("kubejs:magic_devil_ball_kill")
    .tooltip("§c击杀 Kill")
    .tooltip(Text.translate("tooltip.kubejs.magic_devil_ball_kill"))
    .texture("kubejs:item/devil_ball")
    .displayName("Magic Devil Ball")
    .tag("kubejs:magic_balls")
    .rarity("epic")
    .maxStackSize(16)
    // 物品注册-死生之力-目标球
    event.create("kubejs:magic_devil_ball_poison")
    .tooltip("§c中毒 Poison")
    .tooltip(Text.translate("tooltip.kubejs.magic_devil_ball_poison"))
    .texture("kubejs:item/devil_ball")
    .displayName("Magic Devil Ball")
    .tag("kubejs:magic_balls")
    .rarity("epic")
    .maxStackSize(16)
    // 物品注册-死生之力-目标球
    event.create("kubejs:magic_devil_ball_dark")
    .tooltip("§c黑暗 Dark")
    .tooltip(Text.translate("tooltip.kubejs.magic_devil_ball_dark"))
    .texture("kubejs:item/devil_ball")
    .displayName("Magic Devil Ball")
    .tag("kubejs:magic_balls")
    .rarity("epic")
    .maxStackSize(16)
    // 物品注册-死生之力-目标球
    event.create("kubejs:magic_devil_ball_loseway")
    .tooltip("§c迷失 Lose Way")
    .tooltip(Text.translate("tooltip.kubejs.magic_devil_ball_loseway"))
    .texture("kubejs:item/devil_ball")
    .displayName("Magic Devil Ball")
    .tag("kubejs:magic_balls")
    .rarity("epic")
    .maxStackSize(16)
    // 物品注册-死生之力-目标球
    event.create("kubejs:magic_devil_ball_clear")
    .tooltip("§c清除效果 Buff Remove")
    .tooltip(Text.translate("tooltip.kubejs.magic_devil_ball_clear"))
    .texture("kubejs:item/devil_ball")
    .displayName("Magic Devil Ball")
    .tag("kubejs:magic_balls")
    .rarity("epic")
    .maxStackSize(16)
    // 物品注册-死生之力-目标球
    event.create("kubejs:magic_devil_ball_fluid_clear")
    .tooltip("§c清理流体 Clear Fluid")
    .tooltip(Text.translate("tooltip.kubejs.magic_devil_ball_fluid_clear"))
    .texture("kubejs:item/devil_ball")
    .displayName("Magic Devil Ball")
    .tag("kubejs:magic_balls")
    .rarity("epic")
    .maxStackSize(16)
    // 物品注册-死生之力-目标球
    event.create("kubejs:magic_devil_ball_antibedrock")
    .tooltip("§c破基岩 Anti-Bedrock")
    .tooltip(Text.translate("tooltip.kubejs.magic_devil_ball_antibedrock"))
    .texture("kubejs:item/devil_ball")
    .displayName("Magic Devil Ball")
    .tag("kubejs:magic_balls")
    .rarity("epic")
    .maxStackSize(16)


    // 效果图标物品（隐藏，不进创造栏，仅作为进度图标）
    event.create('kubejs:effect_vulnerable')
    .displayName('Effect Icon Vulnerable')
    .texture('kubejs:item/effect_vulnerable')

    event.create('kubejs:effect_golem')
    .displayName('Effect Icon Golem')
    .texture('kubejs:item/effect_golem')

    event.create('kubejs:effect_antitoxic')
    .displayName('Effect Icon Antitoxic')
    .texture('kubejs:item/effect_antitoxic')

    event.create('kubejs:effect_burning')
    .displayName('Effect Icon Burning')
    .texture('kubejs:item/effect_burning')

    event.create('kubejs:effect_health_freeze')
    .displayName('Effect Icon Health Freeze')
    .texture('kubejs:item/effect_health_freeze')

    event.create('kubejs:effect_health_lose')
    .displayName('Effect Icon Health Lose')
    .texture('kubejs:item/effect_health_lose')

    event.create('kubejs:effect_anti_radiation')
    .displayName('Effect Icon Anti Radiation')
    .texture('kubejs:item/effect_anti_radiation')

    event.create('kubejs:effect_bombegranate_support')
    .displayName('Effect Icon Bombegranate Support')
    .texture('kubejs:item/effect_bombegranate_support')

    event.create('kubejs:effect_radiation')
    .displayName('Effect Icon Radiation')
    .texture('kubejs:item/effect_radiation')

  })
  

// ================================================================
// 效果图标物品不进创造栏
//   KubeJS 7 会把所有 kubejs 物品自动塞进 kubejs:tab，
//   要在 modifyCreativeTab 里手动摘掉。
// ================================================================
StartupEvents.modifyCreativeTab('kubejs:tab', event => {
  event.remove('kubejs:effect_vulnerable')
  event.remove('kubejs:effect_golem')
  event.remove('kubejs:effect_antitoxic')
  event.remove('kubejs:effect_burning')
  event.remove('kubejs:effect_health_freeze')
  event.remove('kubejs:effect_health_lose')
  event.remove('kubejs:effect_anti_radiation')
  event.remove('kubejs:effect_bombegranate_support')
  event.remove('kubejs:effect_radiation')
})