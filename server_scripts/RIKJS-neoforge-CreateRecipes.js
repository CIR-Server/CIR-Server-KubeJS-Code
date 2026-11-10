ServerEvents.recipes(event => {
  // 起个别名，方便后面写
  const create = event.recipes.create;

  // =========================
  // 压块塑形 Compacting
  // =========================

  // create/recipe/compacting/coal.json
  create.compacting(
    [
      Item.of('minecraft:coal', 4),
      CreateItem.of('minecraft:coal', 0.5)
    ],
    [
      Item.of('minecraft:charcoal', 4),
      Fluid.of('minecraft:lava', 100)
    ]
  ).superheated();

  // create/recipe/compacting/netherite_ingot.json
  create.compacting(
    [Item.of('minecraft:netherite_ingot', 1),
    CreateItem.of('minecraft:netherite_ingot', 0.125)],
    [
      Item.of('minecraft:netherite_scrap', 4),
      Item.of('minecraft:gold_ingot', 4),
      Fluid.of('minecraft:lava', 500)
    ]
  ).heated();

  // create/recipe/compacting/powered_milk_bar.json
  create.compacting(
    Item.of('kubejs:powered_milk_bar', 1),
    [
      'minecraft:sugar',
      'minecraft:sugar',
      'minecraft:paper',
      Fluid.of('minecraft:milk', 1000)
    ]
  ).heated();

  // create/recipe/compacting/random_block.json
  create
        .compacting(
            Item.of("kubejs:random_block", 8),
            [
              Fluid.lava(),
              Item.of("kubejs:raw_random_block", 8),
              Item.of("minecraft:diamond",2)
            ])
        .heated();

  // create/recipe/compacting/raw_humanmade_diamond.json
  create.compacting(
    Item.of('kubejs:raw_humanmade_diamond', 1),
    [
      Item.of('minecraft:coal_block', 8),
      Fluid.of('minecraft:lava', 1000)
    ]
  ).heated();

  // =========================
  // 粉碎 Crushing
  // =========================

  // create/recipe/crushing/gloomslate_coal_ore.json
  create.crushing(
    [
      Item.of('minecraft:coal', 2),
      CreateItem.of('minecraft:coal', 0.75),
      Item.of('create:experience_nugget', 1)
    ],
    'deeperdarker:gloomslate_coal_ore'
  ).processingTime(250);

  // create/recipe/crushing/gloomslate_copper_ore.json
  create.crushing(
    [
      Item.of('create:crushed_raw_copper', 2),
      CreateItem.of('create:crushed_raw_copper', 0.75),
      Item.of('create:experience_nugget', 1)
    ],
    'deeperdarker:gloomslate_copper_ore'
  ).processingTime(250);

  // create/recipe/crushing/gloomslate_diamond_ore.json
  create.crushing(
    [
      Item.of('minecraft:diamond', 2),
      CreateItem.of('minecraft:diamond', 0.75),
      Item.of('create:experience_nugget', 1)
    ],
    'deeperdarker:gloomslate_diamond_ore'
  ).processingTime(450);

  // create/recipe/crushing/gloomslate_emerald_ore.json
  create.crushing(
    [
      Item.of('minecraft:emerald', 2),
      CreateItem.of('minecraft:emerald', 0.75),
      Item.of('create:experience_nugget', 1)
    ],
    'deeperdarker:gloomslate_emerald_ore'
  ).processingTime(450);

  // create/recipe/crushing/gloomslate_gold_ore.json
  create.crushing(
    [
      Item.of('create:crushed_raw_gold', 2),
      CreateItem.of('create:crushed_raw_gold', 0.75),
      Item.of('create:experience_nugget', 1)
    ],
    'deeperdarker:gloomslate_gold_ore'
  ).processingTime(350);

  // create/recipe/crushing/gloomslate_iron_ore.json
  create.crushing(
    [
      Item.of('create:crushed_raw_iron', 2),
      CreateItem.of('create:crushed_raw_iron', 0.75),
      Item.of('create:experience_nugget', 1)
    ],
    'deeperdarker:gloomslate_iron_ore'
  ).processingTime(350);

  // create/recipe/crushing/gloomslate_lapis_ore.json
  create.crushing(
    [
      Item.of('minecraft:lapis_lazuli', 9),
      CreateItem.of('minecraft:lapis_lazuli', 0.5),
      Item.of('create:experience_nugget', 1)
    ],
    'deeperdarker:gloomslate_lapis_ore'
  ).processingTime(250);

  // create/recipe/crushing/gloomslate_redstone_ore.json
  create.crushing(
    [
      Item.of('minecraft:redstone', 9),
      CreateItem.of('minecraft:redstone', 0.75),
      Item.of('create:experience_nugget', 1)
    ],
    'deeperdarker:gloomslate_redstone_ore'
  ).processingTime(250);

  // create/recipe/crushing/raw_redstone_block.json
  create.crushing(
    [
      CreateItem.of('createoreexcavation:raw_redstone', 0.5),
      CreateItem.of('create:experience_nugget', 0.5)
    ],
    'regions_unexplored:raw_redstone_block'
  ).processingTime(250);

  // create/recipe/crushing/sculk_stone_coal_ore.json
  create.crushing(
    [
      Item.of('minecraft:coal', 2),
      CreateItem.of('minecraft:coal', 0.75),
      Item.of('create:experience_nugget', 1),
      CreateItem.of('deeperdarker:cobbled_sculk_stone', 0.125)
    ],
    'deeperdarker:sculk_stone_coal_ore'
  ).processingTime(250);

  // create/recipe/crushing/sculk_stone_copper_ore.json
  create.crushing(
    [
      Item.of('create:crushed_raw_copper', 2),
      CreateItem.of('create:crushed_raw_copper', 0.75),
      Item.of('create:experience_nugget', 1),
      CreateItem.of('deeperdarker:cobbled_sculk_stone', 0.125)
    ],
    'deeperdarker:sculk_stone_copper_ore'
  ).processingTime(250);

  // create/recipe/crushing/sculk_stone_diamond_ore.json
  create.crushing(
    [
      Item.of('minecraft:diamond', 2),
      CreateItem.of('minecraft:diamond', 0.75),
      Item.of('create:experience_nugget', 1),
      CreateItem.of('deeperdarker:cobbled_sculk_stone', 0.125)
    ],
    'deeperdarker:sculk_stone_diamond_ore'
  ).processingTime(450);

  // create/recipe/crushing/sculk_stone_emerald_ore.json
  create.crushing(
    [
      Item.of('minecraft:emerald', 2),
      CreateItem.of('minecraft:emerald', 0.75),
      Item.of('create:experience_nugget', 1),
      CreateItem.of('deeperdarker:cobbled_sculk_stone', 0.125)
    ],
    'deeperdarker:sculk_stone_emerald_ore'
  ).processingTime(450);

  // create/recipe/crushing/sculk_stone_gold_ore.json
  create.crushing(
    [
      Item.of('create:crushed_raw_gold', 2),
      CreateItem.of('create:crushed_raw_gold', 0.75),
      Item.of('create:experience_nugget', 1),
      CreateItem.of('deeperdarker:cobbled_sculk_stone', 0.125)
    ],
    'deeperdarker:sculk_stone_gold_ore'
  ).processingTime(350);

  // create/recipe/crushing/sculk_stone_iron_ore.json
  create.crushing(
    [
      Item.of('create:crushed_raw_iron', 2),
      CreateItem.of('create:crushed_raw_iron', 0.75),
      Item.of('create:experience_nugget', 1),
      CreateItem.of('deeperdarker:cobbled_sculk_stone', 0.125)
    ],
    'deeperdarker:sculk_stone_iron_ore'
  ).processingTime(350);

  // create/recipe/crushing/sculk_stone_lapis_ore.json
  create.crushing(
    [
      Item.of('minecraft:lapis_lazuli', 9),
      CreateItem.of('minecraft:lapis_lazuli', 0.5),
      Item.of('create:experience_nugget', 1),
      CreateItem.of('deeperdarker:cobbled_sculk_stone', 0.125)
    ],
    'deeperdarker:sculk_stone_lapis_ore'
  ).processingTime(250);

  // create/recipe/crushing/sculk_stone_redstone_ore.json
  create.crushing(
    [
      Item.of('minecraft:redstone', 9),
      CreateItem.of('minecraft:redstone', 0.75),
      Item.of('create:experience_nugget', 1),
      CreateItem.of('deeperdarker:cobbled_sculk_stone', 0.125)
    ],
    'deeperdarker:sculk_stone_redstone_ore'
  ).processingTime(250);

  // =========================
  // 切割 Cutting
  // =========================

  // create/recipe/cutting/echo_log.json
  create.cutting(
    Item.of('deeperdarker:stripped_echo_log', 1),
    'deeperdarker:echo_log'
  ).processingTime(50);

  // create/recipe/cutting/echo_wood.json
  create.cutting(
    Item.of('deeperdarker:stripped_echo_wood', 1),
    'deeperdarker:echo_wood'
  ).processingTime(50);

  // create/recipe/cutting/stripped_echo_log.json
  create.cutting(
    [
      Item.of('deeperdarker:echo_planks', 6),
      CreateItem.of('minecraft:stick', 0.25)
    ],
    'deeperdarker:stripped_echo_log'
  ).processingTime(50);

  // create/recipe/cutting/stripped_echo_wood.json
  create.cutting(
    [
      Item.of('deeperdarker:echo_planks', 6),
      CreateItem.of('minecraft:stick', 0.25)
    ],
    'deeperdarker:stripped_echo_wood'
  ).processingTime(50);

  // =========================
  // 研磨 Milling
  // =========================

  // create/recipe/milling/ancient_debris_dust.json
  create.milling(
    [
      Item.of('kubejs:ancient_debris_dust', 1),
      CreateItem.of('kubejs:ancient_debris_dust', 0.25)
    ],
    'minecraft:ancient_debris'
  ).processingTime(50);

  // create/recipe/milling/nether_bricks_cinder_flour.json
  create.milling(
    [
      Item.of('create:cinder_flour', 1),
      CreateItem.of('create:cinder_flour', 0.25)
    ],
    'minecraft:nether_brick'
  ).processingTime(50);
  create.milling(
    [
      Item.of('expandeddelight:salt',2),
      CreateItem.of('expandeddelight:salt',0.25)
    ],
    'expandeddelight:salt_rock'
  ).processingTime(100);
  // [DW-新增 2026-11-01] 永恒赛特斯宝石 → 永恒赛特斯粉（1 变 2）
  // 补上 64K/256K 存储组件线里缺失的粉末来源
  create.milling(
    [
      Item.of('kubejs:eternal_certus_dust', 2)
    ],
    'kubejs:eternal_certus_gem'
  ).processingTime(100);

  // ================================================================
  // [CIR-新增 2026-11-10] AE2 系 / 应用通量 / 应用发电机的粉末研磨
  //   这些粉末原本只有 ae2:inscriber（压印器）路径，输入都是单一种物品，
  //   这里给机械动力研磨补一条平行路径，产出保持 1:1。
  // ================================================================

  // --- AE2 本体 ---
  create.milling([Item.of('ae2:certus_quartz_dust', 1)], Ingredient.of('#c:gems/certus_quartz')).processingTime(100);
  create.milling([Item.of('ae2:fluix_dust', 1)], Ingredient.of('#c:gems/fluix')).processingTime(100);
  create.milling([Item.of('ae2:sky_dust', 1)], 'ae2:sky_stone_block').processingTime(100);
  create.milling([Item.of('ae2:ender_dust', 1)], 'minecraft:ender_pearl').processingTime(100);

  // --- ExtendedAE / AdvancedAE ---
  create.milling([Item.of('extendedae:entro_dust', 1)], Ingredient.of('#c:gems/entro')).processingTime(100);
  create.milling([Item.of('advanced_ae:quantum_infused_dust', 1)], 'advanced_ae:shattered_singularity').processingTime(100);

  // --- AppliedFlux ---
  create.milling([Item.of('appflux:diamond_dust', 1)], Ingredient.of('#c:gems/diamond')).processingTime(100);
  create.milling([Item.of('appflux:emerald_dust', 1)], Ingredient.of('#c:gems/emerald')).processingTime(100);

  // --- AppliedGenerators ---
  create.milling([Item.of('appgen:copper_dust', 1)], 'minecraft:copper_ingot').processingTime(100);
  create.milling([Item.of('appgen:gold_dust', 1)], 'minecraft:gold_ingot').processingTime(100);
  create.milling([Item.of('appgen:ember_dust', 1)], 'appgen:ember_crystal').processingTime(100);
  create.milling([Item.of('appgen:netherite_dust', 1)], 'minecraft:netherite_ingot').processingTime(100);
  // =========================
  // 搅拌 Mixing
  // =========================

  // create/recipe/mixing/asurine.json
  create.mixing(
    [
      Fluid.of('kubejs:mysterious_liquid', 500)
    ],
    [
      Fluid.of('createaddition:bioethanol',1000),
      Item.of('kubejs:reinforced_redstone_dust',2),
      Item.of('kubejs:ancient_debris_dust',2),
      Item.of('minecraft:coal',4)
    ]
  ).superheated();
  create.mixing(
    [
      CreateItem.of('create:asurine',0.8),
      CreateItem.of('create:zinc_ore', 0.1),
      CreateItem.of('create:deepslate_zinc_ore', 0.1)
    ],
    [
      'create:zinc_ingot',
      'minecraft:netherrack',
      Ingredient.of("#c:cobblestones"),
      Fluid.of('minecraft:water', 100)
    ]
  ).heated();

  create.mixing(
    [
      CreateItem.of('create:ochrum', 0.8),
      CreateItem.of('minecraft:gold_ore', 0.1),
      CreateItem.of('minecraft:deepslate_gold_ore', 0.1)
    ],
    [
      'minecraft:gold_ingot',
      'minecraft:netherrack',
      Ingredient.of("#c:cobblestones"),
      Fluid.of('minecraft:water', 100)
    ]
  ).heated();

  // create/recipe/mixing/crimsite.json
  create.mixing(
    [
      CreateItem.of('create:crimsite', 0.8),
      CreateItem.of('minecraft:iron_ore', 0.1),
      CreateItem.of('minecraft:deepslate_iron_ore', 0.1)
    ],
    [
      'minecraft:iron_ingot',
      'minecraft:netherrack',
      Ingredient.of("#c:cobblestones"),
      Fluid.of('minecraft:water', 100)
    ]
  ).heated();
  create.mixing(
    Item.of('minecraft:calcite', 4),
    [
      // 4 个石灰岩，用 count 合并
      Item.of('create:limestone', 4),
      Fluid.of('minecraft:lava', 200)
    ]
  )
    .heated()
    .id('kubejs:mixing/calcite');
  // enchanted_golden_apple.json
  create.mixing(
    'minecraft:enchanted_golden_apple',
    [
      // 8 个金块
      Item.of('minecraft:gold_block', 8),
      'minecraft:apple'
    ]
  )
    .heated()
    .id('kubejs:mixing/enchanted_golden_apple_gold');
  // enchanted_golden_apple_1.json
  create.mixing(
    'minecraft:enchanted_golden_apple',
    [
      // 8 个超级经验块
      Item.of('create_enchantment_industry:super_experience_block', 8),
      'minecraft:golden_apple',
      Fluid.of('create_enchantment_industry:experience', 400)
    ]
  )
    .heated()
    .id('kubejs:mixing/enchanted_golden_apple_xp');
  // ruby_chocolate_recipe.json
  create.mixing(
    Fluid.of('create_confectionery:ruby_chocolate', 250),
    [
      Item.of('minecraft:sugar'),
      // 这里如果你有对应的 fluid tag 支持，也可以写成 Fluid.of('#c:dragon_breath', 250)
      Fluid.of('create_dragons_plus:dragon_breath', 250),
      Item.of('minecraft:cocoa_beans'),
      Fluid.of('minecraft:milk', 250)
    ]
  )
    .heated()
    .id('kubejs:mixing/ruby_chocolate');
  // stella_redstone_dust.json
  create.mixing(
    [
      // 固定产出
      Item.of('kubejs:stella_redstone_dust', 8),

      // 概率产出用 CreateItem.of(Item.of(...), chance)
      CreateItem.of(Item.of('kubejs:stella_redstone_dust', 4), 0.25),
      CreateItem.of(Item.of('kubejs:stella_redstone_dust', 2), 0.25)
    ],
    [
      // 8 个红石
      Item.of('minecraft:redstone', 8),
      'kubejs:stella_quantum_gem'
    ]
  )
    .heated()
    .id('kubejs:mixing/stella_redstone_dust');
   // create/recipe/mixing/apple_cider.json
  create.mixing(
    Fluid.of('kubejs:apple_cider', 250),
    [
      'minecraft:apple',
      'minecraft:apple',
      'minecraft:sugar'
    ]
  ).heated();

  // create/recipe/mixing/apple_juice.json
  create.mixing(
    Fluid.of('kubejs:apple_juice', 250),
    [
      'minecraft:apple',
      'minecraft:apple',
      'minecraft:apple',
      'minecraft:sugar'
    ]
  );
  // create/recipe/mixing/cranberry_juice.json
  create.mixing(
    Fluid.of('kubejs:cranberry_juice', 250),
    [
      'expandeddelight:cranberries',
      'expandeddelight:cranberries',
      'minecraft:sugar'
    ]
  )
     // create/recipe/mixing/chorus_fruit_wine.json
  create.mixing(
    Fluid.of('kubejs:chorus_fruit_wine', 250),
    [
      'minecraft:chorus_fruit',
      'minecraft:chorus_fruit',
      'minecraft:chorus_fruit',
      'minecraft:sugar'
    ]
  )
  // create/recipe/mixing/glow_berry_juice.json
  create.mixing(
    Fluid.of('kubejs:glow_berry_juice', 250),
    [
      'minecraft:glow_berries',
      'minecraft:glow_berries',
      'minecraft:sugar'
    ]
  )

  // create/recipe/mixing/melon_juice.json
  create.mixing(
    Fluid.of('kubejs:melon_juice', 250),
    [
      'minecraft:melon_slice',
      'minecraft:melon_slice',
      'minecraft:melon_slice',
      'minecraft:sugar'
    ]
  );
  create.mixing(
    Fluid.of('kubejs:reinforce_liquid', 250),
    [
      Fluid.lava(200),
      'kubejs:redstone_reinforce_gem'
    ]
  ).superheated();

  // create/recipe/mixing/random_block.json
  create.mixing(Item.of("kubejs:raw_random_block",4), [
            Fluid.of("create_enchantment_industry:experience",100 * 1),
            Item.of("create:framed_glass", 16),
            Item.of("minecraft:gold_ingot",16)
        ])
        .heated();

  // create/recipe/mixing/sweet_berries_juice.json
  create.mixing(
    Fluid.of('kubejs:sweet_berries_juice', 250),
    [
      'minecraft:sweet_berries',
      'minecraft:sweet_berries',
      'minecraft:sweet_berries',
      'minecraft:sugar'
    ]
  ).heated();

  // create/recipe/mixing/veridium.json
  create.mixing(
    [
      CreateItem.of('create:veridium', 0.8),
      CreateItem.of('minecraft:copper_ore', 0.1),
      CreateItem.of('minecraft:deepslate_copper_ore', 0.1)
    ],
    [
      'minecraft:copper_ingot',
      'minecraft:netherrack',
      Ingredient.of("#c:cobblestones"),
      Fluid.of('minecraft:water', 100)
    ]
  ).heated();

  // =========================
  // 倒空 Emptying
  // =========================

  // create/recipe/emptying/apple_cider.json
  create.emptying(
    [
      Item.of('minecraft:glass_bottle', 1),
      Fluid.of('kubejs:apple_cider', 250)
    ],
    'farmersdelight:apple_cider'
  );

  // create/recipe/emptying/apple_juice.json
  create.emptying(
    [
      Item.of('minecraft:glass_bottle', 1),
      Fluid.of('kubejs:apple_cider', 250)
    ],
    'farmersdelight:apple_cider'
  );

  // create/recipe/emptying/chorus_fruit_wine.json
  create.emptying(
    [
      Item.of('minecraft:glass_bottle', 1),
      Fluid.of('kubejs:chorus_fruit_wine', 250)
    ],
    'ends_delight:chorus_fruit_wine'
  );

  // create/recipe/emptying/cranberry_juice.json
  create.emptying(
    [
      Item.of('minecraft:glass_bottle', 1),
      Fluid.of('kubejs:cranberry_juice', 250)
    ],
    'expandeddelight:cranberry_juice'
  );

  // create/recipe/emptying/glow_berry_juice.json
  create.emptying(
    [
      Item.of('minecraft:glass_bottle', 1),
      Fluid.of('kubejs:glow_berry_juice', 250)
    ],
  'expandeddelight:glow_berry_juice'
  );

  // create/recipe/emptying/hot_cocoa.json
  create.emptying(
    [
      Item.of('minecraft:glass_bottle', 1),
      Fluid.of('create:chocolate', 250)
    ],
    'farmersdelight:hot_cocoa'
  );

  // create/recipe/emptying/lumisene.json
  create.emptying(
    [
      Item.of('minecraft:glass_bottle', 1),
      Fluid.of('supplementaries:lumisene', 250)
    ],
    'supplementaries:lumisene_bottle'
  );

  // create/recipe/emptying/melon_juice.json
  create.emptying(
    [
      Item.of('minecraft:glass_bottle', 1),
      Fluid.of('kubejs:melon_juice', 250)
    ],
    'farmersdelight:melon_juice'
  );

  // create/recipe/emptying/melon_juice_bucket.json
  create.emptying(
    [
      Item.of('minecraft:bucket', 1),
      Fluid.of('kubejs:melon_juice', 1000)
    ],
    'kubejs:melon_juice_bucket'
  );

  // create/recipe/emptying/sweet_berry_juice.json
  create.emptying(
    [
      Item.of('minecraft:glass_bottle', 1),
      Fluid.of('kubejs:sweet_berries_juice', 250)
    ],
  'expandeddelight:sweet_berry_juice'
  );

  // =========================
  // 注液 Filling
  // =========================

  // create/recipe/filling/apple_cider.json
  create.filling(
    Item.of('farmersdelight:apple_cider', 1),
    [
      'minecraft:glass_bottle',
      Fluid.of('kubejs:apple_cider', 250)
    ]
  );

  // create/recipe/filling/apple_juice.json
  create.filling(
    Item.of('expandeddelight:apple_juice', 1),
    [
      'minecraft:glass_bottle',
      Fluid.of('kubejs:apple_juice', 250)
    ]
  );

  // create/recipe/filling/chorus_fruit_wine.json
  create.filling(
    Item.of('ends_delight:chorus_fruit_wine', 1),
    [
      'minecraft:glass_bottle',
      Fluid.of('kubejs:chorus_fruit_wine', 250)
    ]
  );

  // create/recipe/filling/cranberry_juice.json
  create.filling(
    Item.of('expandeddelight:cranberry_juice', 1),
    [
      'minecraft:glass_bottle',
      Fluid.of('kubejs:cranberry_juice', 250)
    ]
  );

  // create/recipe/filling/glow_berry_juice.json
  create.filling(
    Item.of('expandeddelight:glow_berry_juice', 1),
    [
      'minecraft:glass_bottle',
      Fluid.of('kubejs:glow_berry_juice', 250)
    ]
  );

  // create/recipe/filling/hot_cocoa.json
  create.filling(
    Item.of('farmersdelight:hot_cocoa', 1),
    [
      'minecraft:glass_bottle',
      Fluid.of('create:chocolate', 250)
    ]
  );

  // create/recipe/filling/lumisene_bottle.json
  create.filling(
    Item.of('supplementaries:lumisene_bottle', 1),
    [
      'minecraft:glass_bottle',
      Fluid.of('supplementaries:lumisene', 250)
    ]
  );

  // create/recipe/filling/melon_juice.json
  create.filling(
    Item.of('farmersdelight:melon_juice', 1),
    [
      'minecraft:glass_bottle',
      Fluid.of('kubejs:melon_juice', 250)
    ]
  );

  // create/recipe/filling/melon_juice_bucket.json
  create.filling(
    Item.of('kubejs:melon_juice_bucket', 1),
    [
      'minecraft:bucket',
      Fluid.of('kubejs:melon_juice', 1000)
    ]
  );

  // create/recipe/filling/sweet_berry_juice.json
  create.filling(
    Item.of('expandeddelight:sweet_berry_juice', 1),
    [
      'minecraft:glass_bottle',
      Fluid.of('kubejs:sweet_berries_juice', 250)
    ]
  );
  create.filling(
    'kubejs:reinforced_redstone_dust',
    [
      'minecraft:redstone',
      Fluid.of('kubejs:reinforce_liquid', 100),
    ]
  )
  create.filling(
    'kubejs:degeneration_gem',
    [
      'kubejs:redstone_reinforce_gem',
      Fluid.of('kubejs:mysterious_liquid', 100),
    ]
  )

  // create/recipe/mixing/water.json
  create.mixing(
    Fluid.of('minecraft:water', 1000),
    'minecraft:ice'
  ).heated();
  // =========================
  // 机械合成 Mechanical Crafting
  // =========================

  // 蜘蛛网配方
  create.mechanical_crafting(Item.of('minecraft:cobweb', 10), [
    'A A A',
    ' AAA ',
    'AAAAA',
    ' AAA ',
    'A A A'
  ], {
    A: 'minecraft:string'
  });

  // 天气球 · 雨
  create.mechanical_crafting(Item.of('kubejs:magic_weather_ball_rain', 2), [
    'A A A',
    ' AAA ',
    'AABAA',
    ' AAA ',
    'A A A'
  ], {
    A: 'minecraft:water_bucket',
    B: 'kubejs:eternal_certus_gem'
  });

  // 天气球 · 雷暴
  create.mechanical_crafting(Item.of('kubejs:magic_weather_ball_storm', 2), [
    'A A A',
    ' AAA ',
    'AABAA',
    ' AAA ',
    'A A A'
  ], {
    A: 'minecraft:lightning_rod',
    B: 'kubejs:eternal_certus_gem'
  });

  // 天气球 · 放晴
  create.mechanical_crafting(Item.of('kubejs:magic_weather_ball_clear', 2), [
    'A A A',
    ' AAA ',
    'AABAA',
    ' AAA ',
    'A A A'
  ], {
    A: 'minecraft:lava_bucket',
    B: 'kubejs:eternal_certus_gem'
  });

  // 时间球 · 白天
  create.mechanical_crafting(Item.of('kubejs:magic_time_ball_day', 2), [
    'A A A',
    ' AAA ',
    'AABAA',
    ' AAA ',
    'A A A'
  ], {
    A: 'farmersdelight:hot_cocoa',
    B: 'kubejs:eternal_certus_gem'
  });

  // 时间球 · 夜晚
  create.mechanical_crafting(Item.of('kubejs:magic_time_ball_night', 2), [
    'A A A',
    ' AAA ',
    'AABAA',
    ' AAA ',
    'A A A'
  ], {
    A: 'farmersdelight:apple_cider',
    B: 'kubejs:eternal_certus_gem'
  });
  // 魔法动作球：速度  Magic Action Ball - Speed
  create.mechanical_crafting(
    Item.of('kubejs:magic_action_ball_speed', 2),
    [
      'A A A',
      ' AAA ',
      'AABAA',
      ' AAA ',
      'A A A'
    ],
    {
      A: Item.of('minecraft:sugar'),
      B: Item.of('kubejs:eternal_certus_gem')
    }
  ).acceptMirrored(false);
  // 魔法动作球：瞬移  Magic Action Ball - Teleport
  create.mechanical_crafting(
    Item.of('kubejs:magic_action_ball_teleport', 2),
    [
      'A A A',
      ' AAA ',
      'AABAA',
      ' AAA ',
      'A A A'
    ],
    {
      A: Item.of('minecraft:ender_pearl'),
      B: Item.of('kubejs:eternal_certus_gem')
    }
  ).acceptMirrored(false);
  // 魔法动作球：漂浮  Magic Action Ball - Levitation
  create.mechanical_crafting(
    Item.of('kubejs:magic_action_ball_levitation', 2),
    [
      'A C A',
      ' ACA ',
      'ACBCA',
      ' ACA ',
      'A C A'
    ],
    {
      A: Item.of('minecraft:feather'),
      B: Item.of('kubejs:eternal_certus_gem'),
      C: Item.of('minecraft:phantom_membrane')
    }
  ).acceptMirrored(false);
  // 魔法恶魔球：击杀  Magic Devil Ball - Kill
  create.mechanical_crafting(
    Item.of('kubejs:magic_devil_ball_kill', 2),
    [
      'ABABA',
      ' AAA ',
      'AACAA',
      ' AAA ',
      'ABABA'
    ],
    {
      A: Ingredient.of('#minecraft:swords'), // ← tag 输入
      B: Item.of('minecraft:gunpowder'),
      C: Item.of('kubejs:eternal_certus_gem')
    }
  ).acceptMirrored(false);
  // 魔法恶魔球：中毒  Magic Devil Ball - Poison
  create.mechanical_crafting(
    Item.of('kubejs:magic_devil_ball_poison', 2),
    [
      'ABABA',
      ' AAA ',
      'AACAA',
      ' AAA ',
      'ABABA'
    ],
    {
      A: Item.of('minecraft:spider_eye'),
      B: Item.of('minecraft:pufferfish'),
      C: Item.of('kubejs:eternal_certus_gem')
    }
  ).acceptMirrored(false);
   // 魔法恶魔球：黑暗  Magic Devil Ball - Dark
  create.mechanical_crafting(
    Item.of('kubejs:magic_devil_ball_dark', 2),
    [
      'ABABA',
      ' AAA ',
      'AACAA',
      ' AAA ',
      'ABABA'
    ],
    {
      A: Item.of('deeperdarker:sculk_stone'),
      B: Item.of('deeperdarker:soul_dust'),
      C: Item.of('kubejs:eternal_certus_gem')
    }
  ).acceptMirrored(false);
     // 魔法恶魔球：黑暗  Magic Devil Ball - Dark
  create.mechanical_crafting(
    Item.of('kubejs:magic_devil_ball_loseway', 2),
    [
      'AAAAA',
      ' ABA ',
      'ADCDA',
      ' ABA ',
      'AAAAA'
    ],
    {
      A: Item.of('minecraft:paper'),
      B: Item.of('minecraft:compass'),
      C: Item.of('kubejs:eternal_certus_gem'),
      D: Item.of('minecraft:ink_sac')
    }
  ).acceptMirrored(false);

   create.mechanical_crafting(
    Item.of('kubejs:magic_devil_ball_antibedrock', 2),
    [
      'AAAAA',
      ' ABA ',
      'ABCBA',
      ' ABA ',
      'AAAAA'
    ],
    {
      A: Item.of('minecraft:redstone'),
      B: Item.of('minecraft:piston'),
      C: Item.of('kubejs:eternal_certus_gem')
    }
  ).acceptMirrored(false);
  // 魔法恶魔球：净化（牛奶） Magic Devil Ball - Clear
  create.mechanical_crafting(
    Item.of('kubejs:magic_devil_ball_clear', 2),
    [
      'ABABA',
      ' AAA ',
      'AACAA',
      ' AAA ',
      'ABABA'
    ],
    {
      A: Item.of('farmersdelight:milk_bottle'),
      B: Item.of('minecraft:gold_ingot'),
      C: Item.of('kubejs:eternal_certus_gem')
    }
  ).acceptMirrored(false);
  // 魔法恶魔球：流体清除  Magic Devil Ball - Fluid Clear
  create.mechanical_crafting(
    Item.of('kubejs:magic_devil_ball_fluid_clear', 2),
    [
      'ABABA',
      ' AAA ',
      'AACAA',
      ' AAA ',
      'ABABA'
    ],
    {
      A: Item.of('minecraft:bucket'),
      B: Item.of('minecraft:sponge'),
      C: Item.of('kubejs:eternal_certus_gem')
    }
  ).acceptMirrored(false);
  // 传送石 Warp Stone（Waystones）
  create.mechanical_crafting(
    Item.of('waystones:warp_stone', 1),
    [
      ' EAE ',
      'EADAE',
      'ABCBA',
      'EAFAE',
      ' EAE '
    ],
    {
      A: Item.of('minecraft:amethyst_shard'),
      B: Item.of('minecraft:ender_pearl'),
      C: Item.of('kubejs:stella_quantum_gem'),
      D: Item.of('create:precision_mechanism'),
      E: Item.of('minecraft:gold_ingot'),
      F: Item.of('create_things_and_misc:vibration_mechanism')
    }
  ).acceptMirrored(false);

  // =========================
  // 压块 / 塑型（Compacting）
  // =========================

  // 强化深板岩粗胚
  create.compacting(
    [CreateItem.of('kubejs:raw_reinforced_deepslate', 0.25),
    CreateItem.of('minecraft:deepslate', 0.75)
    ],
    [
      Item.of('minecraft:chiseled_deepslate', 4),
      Item.of('minecraft:diamond', 4),
      Item.of('create:powdered_obsidian', 4),
      Fluid.of('minecraft:lava', 1000)
    ]
  ).superheated();

  // 人造紫水晶母岩（有几率）
  create.compacting(
    [
      // 25% 概率 人造紫水晶母岩
      CreateItem.of('kubejs:manmade_budding_amethyst', 0.25),
      // 75% 概率 返还部分紫水晶块
      CreateItem.of(Item.of('minecraft:amethyst_block',4), 0.75)
    ],
    [
     Item.of('minecraft:amethyst_block', 8),
     Item.of('minecraft:diamond', 8),
     Item.of('minecraft:calcite',8),
     Fluid.of('minecraft:lava', 1000)
    ]
  ).superheated();

  // 唤醒碎片
  create.compacting(
    Item.of('waystones:dormant_shard', 1),
    [
      'waystones:attuned_shard',
      Fluid.of('minecraft:lava', 100)
    ]
  ).superheated();

  // =========================
  // 搅拌（Mixing）
  // =========================

  // 生物乙醇
  create.mixing(
    Fluid.of('createaddition:bioethanol', 250),
    [
      'minecraft:sugar',
      'create:cinder_flour',
      'createaddition:biomass',
      'createaddition:biomass'
    ]
  );

  // 传送粉尘（需要加热）
  create.mixing(
    Item.of('waystones:warp_dust', 4),
    [
      'minecraft:ender_pearl',
      'create:brass_ingot',
      'minecraft:amethyst_shard',
      'kubejs:eternal_certus_dust'
    ]
  ).heated();

  // 地狱岩合成（多产出 + 几率）
  create.mixing(
    [
      Item.of('minecraft:netherrack', 4),
      CreateItem.of('minecraft:netherrack', 0.5)
    ],
    [
      Item.of('create:cinder_flour', 4),
      Ingredient.of('#c:cobblestones',4),
      Fluid.of('minecraft:lava', 200)
    ]
  );
  create.mixing(
    [
      // 固定产出 2 个海绵
      Item.of('minecraft:sponge', 2),
      // 30% 额外海绵
      CreateItem.of('minecraft:sponge', 0.25)
    ],
    [
      Item.of('minecraft:coal_block', 2),
      Ingredient.of('#c:dead_coral_blocks',2),
      Item.of('create:limestone',4),
      Fluid.of('minecraft:lava', 400)
    ]
  ).heated();
  // =========================
  // CreateAddition 液体燃烧
  // （这个 Create 本体没有封装，继续用 custom）
  // =========================
  event.custom({
    type: 'createaddition:liquid_burning',
    burn_time: 36000,
    ingredients: [
      {
        type: 'fluid_stack',
        fluid: 'kubejs:mysterious_liquid',
        amount: 1000
      }
    ],
    results: [],
    superheated: true
  });
  // 柴油 Diesel
  event.custom({
    type: "createaddition:liquid_burning",
    "neoforge:conditions": [
      {
        type: "createaddition:has_fluid_tag",
        fluidTag: "c:diesel"
      }
    ],
    burn_time: 12000,
    ingredients: [
      {
        type: "fluid_tag",
        amount: 1000,
        fluid_tag: "c:diesel"
      }
    ],
    results: [],
    superheated: true
  }).id("kubejs:createaddition/liquid_burning/diesel");

  // 汽油 Gasoline
  event.custom({
    type: "createaddition:liquid_burning",
    "neoforge:conditions": [
      {
        type: "createaddition:has_fluid_tag",
        fluidTag: "c:gasoline"
      }
    ],
    burn_time: 12000,
    ingredients: [
      {
        type: "fluid_tag",
        amount: 1000,
        fluid_tag: "c:gasoline"
      }
    ],
    results: [],
    superheated: true
  }).id("kubejs:createaddition/liquid_burning/gasoline");

  // 生物柴油 Biodiesel
  event.custom({
    type: "createaddition:liquid_burning",
    "neoforge:conditions": [
      {
        type: "createaddition:has_fluid_tag",
        fluidTag: "c:biodiesel"
      }
    ],
    burn_time: 6000,
    ingredients: [
      {
        type: "fluid_tag",
        amount: 1000,
        fluid_tag: "c:biodiesel"
      }
    ],
    results: [],
    superheated: true
  }).id("kubejs:createaddition/liquid_burning/biodiesel");
});
