// priority: 0

// Create processing recipes.
// Sections are sorted by recipe type. Ingredients, outputs and settings are preserved.
ServerEvents.recipes(event => {
  const create = event.recipes.create;

  // ============================================================
  // create:compacting
  // ============================================================

  // Source: RIKJS-neoforge-CreateRecipes.js
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

  create.compacting(
    [Item.of('minecraft:netherite_ingot', 1),
      CreateItem.of('minecraft:netherite_ingot', 0.125)],
    [
      Item.of('minecraft:netherite_scrap', 4),
      Item.of('minecraft:gold_ingot', 4),
      Fluid.of('minecraft:lava', 500)
    ]
  ).heated();

  create.compacting(
    Item.of('kubejs:powered_milk_bar', 1),
    [
      'minecraft:sugar',
      'minecraft:sugar',
      'minecraft:paper',
      Fluid.of('minecraft:milk', 1000)
    ]
  ).heated();

  create
    .compacting(
    Item.of("kubejs:random_block", 8),
    [
      Fluid.lava(),
      Item.of("kubejs:raw_random_block", 8),
      Item.of("minecraft:diamond",2)
  ])
    .heated();

  create.compacting(
    Item.of('kubejs:raw_humanmade_diamond', 1),
    [
      Item.of('minecraft:coal_block', 8),
      Fluid.of('minecraft:lava', 1000)
    ]
  ).heated();

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

  create.compacting(
    [

      CreateItem.of('kubejs:manmade_budding_amethyst', 0.25),

      CreateItem.of(Item.of('minecraft:amethyst_block',4), 0.75)
    ],
    [
      Item.of('minecraft:amethyst_block', 8),
      Item.of('minecraft:diamond', 8),
      Item.of('minecraft:calcite',8),
      Fluid.of('minecraft:lava', 1000)
    ]
  ).superheated();

  create.compacting(
    Item.of('waystones:dormant_shard', 1),
    [
      'waystones:attuned_shard',
      Fluid.of('minecraft:lava', 100)
    ]
  ).superheated();

  // 回响碎片：幽匿系材料超热压缩
  // 深暗之域产物 -> 回响碎片（50%）/ 灵魂粉尘（50%）
  create.compacting(
    [
      CreateItem.of(Item.of('minecraft:echo_shard', 2), 0.5),
      CreateItem.of(Item.of('deeperdarker:soul_dust', 2), 0.5)
    ],
    [
      Item.of('deeperdarker:sculk_stone', 4),
      Item.of('minecraft:sculk', 8),
      Item.of('minecraft:amethyst_shard', 4),
      Fluid.of('create_dragons_plus:dragon_breath', 100)
    ]
  ).superheated();

  // ============================================================
  // create:crushing
  // ============================================================

  // Source: RIKJS-neoforge-CreateRecipes.js
  create.crushing(
    [
      Item.of('minecraft:coal', 2),
      CreateItem.of('minecraft:coal', 0.75),
      Item.of('create:experience_nugget', 1)
    ],
    'deeperdarker:gloomslate_coal_ore'
  ).processingTime(250);

  create.crushing(
    [
      Item.of('create:crushed_raw_copper', 2),
      CreateItem.of('create:crushed_raw_copper', 0.75),
      Item.of('create:experience_nugget', 1)
    ],
    'deeperdarker:gloomslate_copper_ore'
  ).processingTime(250);

  create.crushing(
    [
      Item.of('minecraft:diamond', 2),
      CreateItem.of('minecraft:diamond', 0.75),
      Item.of('create:experience_nugget', 1)
    ],
    'deeperdarker:gloomslate_diamond_ore'
  ).processingTime(450);

  create.crushing(
    [
      Item.of('minecraft:emerald', 2),
      CreateItem.of('minecraft:emerald', 0.75),
      Item.of('create:experience_nugget', 1)
    ],
    'deeperdarker:gloomslate_emerald_ore'
  ).processingTime(450);

  create.crushing(
    [
      Item.of('create:crushed_raw_gold', 2),
      CreateItem.of('create:crushed_raw_gold', 0.75),
      Item.of('create:experience_nugget', 1)
    ],
    'deeperdarker:gloomslate_gold_ore'
  ).processingTime(350);

  create.crushing(
    [
      Item.of('create:crushed_raw_iron', 2),
      CreateItem.of('create:crushed_raw_iron', 0.75),
      Item.of('create:experience_nugget', 1)
    ],
    'deeperdarker:gloomslate_iron_ore'
  ).processingTime(350);

  create.crushing(
    [
      Item.of('minecraft:lapis_lazuli', 9),
      CreateItem.of('minecraft:lapis_lazuli', 0.5),
      Item.of('create:experience_nugget', 1)
    ],
    'deeperdarker:gloomslate_lapis_ore'
  ).processingTime(250);

  create.crushing(
    [
      Item.of('minecraft:redstone', 9),
      CreateItem.of('minecraft:redstone', 0.75),
      Item.of('create:experience_nugget', 1)
    ],
    'deeperdarker:gloomslate_redstone_ore'
  ).processingTime(250);

  create.crushing(
    [
      CreateItem.of('createoreexcavation:raw_redstone', 0.5),
      CreateItem.of('create:experience_nugget', 0.5)
    ],
    'regions_unexplored:raw_redstone_block'
  ).processingTime(250);

  create.crushing(
    [
      Item.of('minecraft:coal', 2),
      CreateItem.of('minecraft:coal', 0.75),
      Item.of('create:experience_nugget', 1),
      CreateItem.of('deeperdarker:cobbled_sculk_stone', 0.125)
    ],
    'deeperdarker:sculk_stone_coal_ore'
  ).processingTime(250);

  create.crushing(
    [
      Item.of('create:crushed_raw_copper', 2),
      CreateItem.of('create:crushed_raw_copper', 0.75),
      Item.of('create:experience_nugget', 1),
      CreateItem.of('deeperdarker:cobbled_sculk_stone', 0.125)
    ],
    'deeperdarker:sculk_stone_copper_ore'
  ).processingTime(250);

  create.crushing(
    [
      Item.of('minecraft:diamond', 2),
      CreateItem.of('minecraft:diamond', 0.75),
      Item.of('create:experience_nugget', 1),
      CreateItem.of('deeperdarker:cobbled_sculk_stone', 0.125)
    ],
    'deeperdarker:sculk_stone_diamond_ore'
  ).processingTime(450);

  create.crushing(
    [
      Item.of('minecraft:emerald', 2),
      CreateItem.of('minecraft:emerald', 0.75),
      Item.of('create:experience_nugget', 1),
      CreateItem.of('deeperdarker:cobbled_sculk_stone', 0.125)
    ],
    'deeperdarker:sculk_stone_emerald_ore'
  ).processingTime(450);

  create.crushing(
    [
      Item.of('create:crushed_raw_gold', 2),
      CreateItem.of('create:crushed_raw_gold', 0.75),
      Item.of('create:experience_nugget', 1),
      CreateItem.of('deeperdarker:cobbled_sculk_stone', 0.125)
    ],
    'deeperdarker:sculk_stone_gold_ore'
  ).processingTime(350);

  create.crushing(
    [
      Item.of('create:crushed_raw_iron', 2),
      CreateItem.of('create:crushed_raw_iron', 0.75),
      Item.of('create:experience_nugget', 1),
      CreateItem.of('deeperdarker:cobbled_sculk_stone', 0.125)
    ],
    'deeperdarker:sculk_stone_iron_ore'
  ).processingTime(350);

  create.crushing(
    [
      Item.of('minecraft:lapis_lazuli', 9),
      CreateItem.of('minecraft:lapis_lazuli', 0.5),
      Item.of('create:experience_nugget', 1),
      CreateItem.of('deeperdarker:cobbled_sculk_stone', 0.125)
    ],
    'deeperdarker:sculk_stone_lapis_ore'
  ).processingTime(250);

  create.crushing(
    [
      Item.of('minecraft:redstone', 9),
      CreateItem.of('minecraft:redstone', 0.75),
      Item.of('create:experience_nugget', 1),
      CreateItem.of('deeperdarker:cobbled_sculk_stone', 0.125)
    ],
    'deeperdarker:sculk_stone_redstone_ore'
  ).processingTime(250);

  // ============================================================
  // create:cutting
  // ============================================================

  // Source: RIKJS-neoforge-CreateRecipes.js
  create.cutting(
    Item.of('deeperdarker:stripped_echo_log', 1),
    'deeperdarker:echo_log'
  ).processingTime(50);

  create.cutting(
    Item.of('deeperdarker:stripped_echo_wood', 1),
    'deeperdarker:echo_wood'
  ).processingTime(50);

  create.cutting(
    [
      Item.of('deeperdarker:echo_planks', 6),
      CreateItem.of('minecraft:stick', 0.25)
    ],
    'deeperdarker:stripped_echo_log'
  ).processingTime(50);

  create.cutting(
    [
      Item.of('deeperdarker:echo_planks', 6),
      CreateItem.of('minecraft:stick', 0.25)
    ],
    'deeperdarker:stripped_echo_wood'
  ).processingTime(50);

  // ============================================================
  // create:emptying
  // ============================================================

  // Source: RIKJS-neoforge-CreateRecipes.js
  create.emptying(
    [
      Item.of('minecraft:glass_bottle', 1),
      Fluid.of('kubejs:apple_cider', 250)
    ],
    'farmersdelight:apple_cider'
  );

  create.emptying(
    [
      Item.of('minecraft:glass_bottle', 1),
      Fluid.of('kubejs:apple_cider', 250)
    ],
    'farmersdelight:apple_cider'
  );

  create.emptying(
    [
      Item.of('minecraft:glass_bottle', 1),
      Fluid.of('kubejs:chorus_fruit_wine', 250)
    ],
    'ends_delight:chorus_fruit_wine'
  );

  create.emptying(
    [
      Item.of('minecraft:glass_bottle', 1),
      Fluid.of('kubejs:cranberry_juice', 250)
    ],
    'expandeddelight:cranberry_juice'
  );

  create.emptying(
    [
      Item.of('minecraft:glass_bottle', 1),
      Fluid.of('kubejs:glow_berry_juice', 250)
    ],
    'expandeddelight:glow_berry_juice'
  );

  create.emptying(
    [
      Item.of('minecraft:glass_bottle', 1),
      Fluid.of('create:chocolate', 250)
    ],
    'farmersdelight:hot_cocoa'
  );

  create.emptying(
    [
      Item.of('minecraft:glass_bottle', 1),
      Fluid.of('supplementaries:lumisene', 250)
    ],
    'supplementaries:lumisene_bottle'
  );

  create.emptying(
    [
      Item.of('minecraft:glass_bottle', 1),
      Fluid.of('kubejs:melon_juice', 250)
    ],
    'farmersdelight:melon_juice'
  );

  create.emptying(
    [
      Item.of('minecraft:bucket', 1),
      Fluid.of('kubejs:melon_juice', 1000)
    ],
    'kubejs:melon_juice_bucket'
  );

  create.emptying(
    [
      Item.of('minecraft:glass_bottle', 1),
      Fluid.of('kubejs:sweet_berries_juice', 250)
    ],
    'expandeddelight:sweet_berry_juice'
  );

  // ============================================================
  // create:filling
  // ============================================================

  // Source: RIKJS-neoforge-CreateRecipes.js
  create.filling(
    Item.of('farmersdelight:apple_cider', 1),
    [
      'minecraft:glass_bottle',
      Fluid.of('kubejs:apple_cider', 250)
    ]
  );

  create.filling(
    Item.of('expandeddelight:apple_juice', 1),
    [
      'minecraft:glass_bottle',
      Fluid.of('kubejs:apple_juice', 250)
    ]
  );

  create.filling(
    Item.of('ends_delight:chorus_fruit_wine', 1),
    [
      'minecraft:glass_bottle',
      Fluid.of('kubejs:chorus_fruit_wine', 250)
    ]
  );

  create.filling(
    Item.of('expandeddelight:cranberry_juice', 1),
    [
      'minecraft:glass_bottle',
      Fluid.of('kubejs:cranberry_juice', 250)
    ]
  );

  create.filling(
    Item.of('expandeddelight:glow_berry_juice', 1),
    [
      'minecraft:glass_bottle',
      Fluid.of('kubejs:glow_berry_juice', 250)
    ]
  );

  create.filling(
    Item.of('farmersdelight:hot_cocoa', 1),
    [
      'minecraft:glass_bottle',
      Fluid.of('create:chocolate', 250)
    ]
  );

  create.filling(
    Item.of('supplementaries:lumisene_bottle', 1),
    [
      'minecraft:glass_bottle',
      Fluid.of('supplementaries:lumisene', 250)
    ]
  );

  create.filling(
    Item.of('farmersdelight:melon_juice', 1),
    [
      'minecraft:glass_bottle',
      Fluid.of('kubejs:melon_juice', 250)
    ]
  );

  create.filling(
    Item.of('kubejs:melon_juice_bucket', 1),
    [
      'minecraft:bucket',
      Fluid.of('kubejs:melon_juice', 1000)
    ]
  );

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
  );

  create.filling(
    'kubejs:degeneration_gem',
    [
      'kubejs:redstone_reinforce_gem',
      Fluid.of('kubejs:mysterious_liquid', 100),
    ]
  );

  // ============================================================
  // create:milling
  // ============================================================

  // Source: RIKJS-neoforge-CreateRecipes.js
  create.milling(
    [
      Item.of('kubejs:ancient_debris_dust', 1),
      CreateItem.of('kubejs:ancient_debris_dust', 0.25)
    ],
    'minecraft:ancient_debris'
  ).processingTime(50);

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

  create.milling(
    [
      Item.of('kubejs:eternal_certus_dust', 2)
    ],
    'kubejs:eternal_certus_gem'
  ).processingTime(100);

  create.milling([Item.of('ae2:certus_quartz_dust', 1)], Ingredient.of('#c:gems/certus_quartz')).processingTime(100);

  create.milling([Item.of('ae2:fluix_dust', 1)], Ingredient.of('#c:gems/fluix')).processingTime(100);

  create.milling([Item.of('ae2:sky_dust', 1)], 'ae2:sky_stone_block').processingTime(100);

  create.milling([Item.of('ae2:ender_dust', 1)], 'minecraft:ender_pearl').processingTime(100);

  create.milling([Item.of('extendedae:entro_dust', 1)], Ingredient.of('#c:gems/entro')).processingTime(100);

  create.milling([Item.of('advanced_ae:quantum_infused_dust', 1)], 'advanced_ae:shattered_singularity').processingTime(100);

  create.milling([Item.of('appflux:diamond_dust', 1)], Ingredient.of('#c:gems/diamond')).processingTime(100);

  create.milling([Item.of('appflux:emerald_dust', 1)], Ingredient.of('#c:gems/emerald')).processingTime(100);

  create.milling([Item.of('appgen:copper_dust', 1)], 'minecraft:copper_ingot').processingTime(100);

  create.milling([Item.of('appgen:gold_dust', 1)], 'minecraft:gold_ingot').processingTime(100);

  create.milling([Item.of('appgen:ember_dust', 1)], 'appgen:ember_crystal').processingTime(100);

  create.milling([Item.of('appgen:netherite_dust', 1)], 'minecraft:netherite_ingot').processingTime(100);

  create.milling([Item.of('extendedae_plus:lattra_dust', 1)], 'extendedae_plus:lattra_crystal').processingTime(100);

  // [CIR 2026-11-22] NEO ECO AE：金属锭磨成对应粉末
  create.milling([Item.of('neoecoae:aluminum_dust', 1)], 'neoecoae:aluminum_ingot').processingTime(100);
  create.milling([Item.of('neoecoae:tungsten_dust', 1)], 'neoecoae:tungsten_ingot').processingTime(100);
  create.milling([Item.of('neoecoae:aluminum_alloy_dust', 1)], 'neoecoae:aluminum_alloy_ingot').processingTime(100);
  create.milling([Item.of('neoecoae:black_tungsten_alloy_dust', 1)], 'neoecoae:black_tungsten_alloy_ingot').processingTime(100);

  // ============================================================
  // create:mixing
  // ============================================================

  // Source: RIKJS-neoforge-CreateRecipes.js
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

      Item.of('create:limestone', 4),
      Fluid.of('minecraft:lava', 200)
    ]
  )
    .heated()
    .id('kubejs:mixing/calcite');

  create.mixing(
    'minecraft:enchanted_golden_apple',
    [

      Item.of('minecraft:gold_block', 8),
      'minecraft:apple'
    ]
  )
    .heated()
    .id('kubejs:mixing/enchanted_golden_apple_gold');

  create.mixing(
    'minecraft:enchanted_golden_apple',
    [

      Item.of('create_enchantment_industry:super_experience_block', 8),
      'minecraft:golden_apple',
      Fluid.of('create_enchantment_industry:experience', 400)
    ]
  )
    .heated()
    .id('kubejs:mixing/enchanted_golden_apple_xp');

  create.mixing(
    Fluid.of('create_confectionery:ruby_chocolate', 250),
    [
      Item.of('minecraft:sugar'),

      Fluid.of('create_dragons_plus:dragon_breath', 250),
      Item.of('minecraft:cocoa_beans'),
      Fluid.of('minecraft:milk', 250)
    ]
  )
    .heated()
    .id('kubejs:mixing/ruby_chocolate');

  create.mixing(
    [

      Item.of('kubejs:stella_redstone_dust', 8),

      CreateItem.of(Item.of('kubejs:stella_redstone_dust', 4), 0.25),
      CreateItem.of(Item.of('kubejs:stella_redstone_dust', 2), 0.25)
    ],
    [

      Item.of('minecraft:redstone', 8),
      'kubejs:stella_quantum_gem'
    ]
  )
    .heated()
    .id('kubejs:mixing/stella_redstone_dust');

  create.mixing(
    Fluid.of('kubejs:apple_cider', 250),
    [
      'minecraft:apple',
      'minecraft:apple',
      'minecraft:sugar'
    ]
  ).heated();

  create.mixing(
    Fluid.of('kubejs:apple_juice', 250),
    [
      'minecraft:apple',
      'minecraft:apple',
      'minecraft:apple',
      'minecraft:sugar'
    ]
  );

  create.mixing(
    Fluid.of('kubejs:cranberry_juice', 250),
    [
      'expandeddelight:cranberries',
      'expandeddelight:cranberries',
      'minecraft:sugar'
    ]
  );

  create.mixing(
    Fluid.of('kubejs:chorus_fruit_wine', 250),
    [
      'minecraft:chorus_fruit',
      'minecraft:chorus_fruit',
      'minecraft:chorus_fruit',
      'minecraft:sugar'
    ]
  );

  create.mixing(
    Fluid.of('kubejs:glow_berry_juice', 250),
    [
      'minecraft:glow_berries',
      'minecraft:glow_berries',
      'minecraft:sugar'
    ]
  );

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

  create.mixing(Item.of("kubejs:raw_random_block",4), [
    Fluid.of("create_enchantment_industry:experience",100 * 1),
    Item.of("create:framed_glass", 16),
    Item.of("minecraft:gold_ingot",16)
  ])
    .heated();

  create.mixing(
    Fluid.of('kubejs:sweet_berries_juice', 250),
    [
      'minecraft:sweet_berries',
      'minecraft:sweet_berries',
      'minecraft:sweet_berries',
      'minecraft:sugar'
    ]
  ).heated();

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

  create.mixing(
    Fluid.of('minecraft:water', 1000),
    'minecraft:ice'
  ).heated();

  create.mixing(
    Fluid.of('createaddition:bioethanol', 250),
    [
      'minecraft:sugar',
      'create:cinder_flour',
      'createaddition:biomass',
      'createaddition:biomass'
    ]
  );

  create.mixing(
    Item.of('waystones:warp_dust', 4),
    [
      'minecraft:ender_pearl',
      'create:brass_ingot',
      'minecraft:amethyst_shard',
      'kubejs:eternal_certus_dust'
    ]
  ).heated();

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

      Item.of('minecraft:sponge', 2),

      CreateItem.of('minecraft:sponge', 0.25)
    ],
    [
      Item.of('minecraft:coal_block', 2),
      Ingredient.of('#c:dead_coral_blocks',2),
      Item.of('create:limestone',4),
      Fluid.of('minecraft:lava', 400)
    ]
  ).heated();


  // ============================================================
  // CIR_APOTHEOSIS_GEM_CRUSHING - 开裂宝石粉碎成宝石粉
  // ============================================================
  // 粉碎轮把「开裂(chipped)」品质的任意宝石打成宝石粉：
  //   固定 1 个 + 25% 概率再出 1 个。
  // 高阶升阶必须走序列组装，打粉只是回收途径。
  if (Platform.isLoaded('apotheosis')) {
    // IIFE：隔离作用域，避免脚本重载时 const 重复声明
    ;(() => {
      // 输入用字符串形式：Ingredient.of(对象) 走无 registry 的 JsonOps，
      // 解析物品引用会报 without registry；字符串走 RegistryAccessContainer，能正常解析。
      function cirChippedGemIngredient(gem) {
        return "apotheosis:gem[apotheosis:gem='" + gem + "',apotheosis:purity='chipped']";
      }
      function cirRegisterGemCrushing(gem) {
        create.crushing([
          Item.of('apotheosis:gem_dust', 1),
          CreateItem.of('apotheosis:gem_dust', 0.25)
        ], Ingredient.of(cirChippedGemIngredient(gem)))
          .processingTime(250)
          .id('kubejs:apotheosis/gem_crushing/' + gem.replace(':', '/'));
      }

      var cirApothGems = [
        'apotheosis:core/ballast', 'apotheosis:core/brawlers', 'apotheosis:core/breach',
        'apotheosis:core/combatant', 'apotheosis:core/guardian', 'apotheosis:core/lightning',
        'apotheosis:core/lunar', 'apotheosis:core/samurai', 'apotheosis:core/slipstream',
        'apotheosis:core/solar', 'apotheosis:core/splendor', 'apotheosis:core/tyrannical',
        'apotheosis:core/warlord', 'apotheosis:overworld/earth', 'apotheosis:overworld/royalty',
        'apotheosis:overworld/verdant_ruin', 'apotheosis:the_end/endersurge', 'apotheosis:the_end/mageslayer',
        'apotheosis:the_nether/blood_lord', 'apotheosis:the_nether/inferno', 'apotheosis:the_nether/molten_breach',
        'apotheosis:twilight/forest', 'apotheosis:twilight/queen',
      ];
      cirApothGems.forEach(cirRegisterGemCrushing);

      // 兼容包带来的宝石只在对应模组存在时注册
      if (Platform.isLoaded('apothic_compats')) {
        var cirCompatGems = [
          'apothic_compats:ars_nouveau/mana', 'apothic_compats:malum/etheric', 'apothic_compats:malum/soul_stained',
          'apothic_compats:malum/thief',
        ];
        cirCompatGems.forEach(cirRegisterGemCrushing);
      }
    })();
  }

});
