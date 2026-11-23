// priority: 0

// Create sequenced assembly recipes.
// Sections are sorted by recipe type. Ingredients, outputs and settings are preserved.
ServerEvents.recipes(event => {
  const sequencedAssemblyRecipes = event.recipes.create.sequenced_assembly;

  // ============================================================
  // create:sequenced_assembly
  // ============================================================

  // Source: ModFix-createappliedkinetics_recipes.js
  // Create 6 uses transitional_item / keep_held_item and id-based outputs.
  // Input ingredients retain item/tag fields. Sequence steps must stay in order.
  function seqAssembly(input, trans, output, steps) {
    return {
      "type": "create:sequenced_assembly",
      "ingredient": { "item": input },
      "transitional_item": { "id": trans },
      "sequence": steps,
      "results": [ { "id": output } ],
      "loops": 1
    };
  }

  function deploy(trans, material, keepHeld) {
    const step = {
      "type": "create:deploying",
      "ingredients": [
        { "item": trans },
        { "item": material }
      ],
      "results": [ { "id": trans } ]
    };
    if (keepHeld) { step.keep_held_item = true; }
    return step;
  }

  function press(trans) {
    return {
      "type": "create:pressing",
      "ingredients": [ { "item": trans } ],
      "results": [ { "id": trans } ]
    };
  }

  // Source: RIKJS-neoforge-stella_mechanism_recipes.js
  const TRANS = 'kubejs:incomplete_stella_mechanism';

  // Source: ModFix-createappliedkinetics_recipes.js
  event.custom(seqAssembly(
    'ae2:silicon', 'kubejs:incomplete_silicon_print', 'ae2:printed_silicon',
    [
      deploy('kubejs:incomplete_silicon_print', 'ae2:silicon_press', true),
      press('kubejs:incomplete_silicon_print')
    ]
  ));

  event.custom(seqAssembly(
    'create:golden_sheet', 'kubejs:incomplete_printed_logic_circuit', 'ae2:printed_logic_processor',
    [
      deploy('kubejs:incomplete_printed_logic_circuit', 'ae2:logic_processor_press', true),
      press('kubejs:incomplete_printed_logic_circuit')
    ]
  ));

  event.custom(seqAssembly(
    'ae2:certus_quartz_crystal', 'kubejs:incomplete_printed_calculation_circuit', 'ae2:printed_calculation_processor',
    [
      deploy('kubejs:incomplete_printed_calculation_circuit', 'ae2:calculation_processor_press', true),
      press('kubejs:incomplete_printed_calculation_circuit')
    ]
  ));

  event.custom(seqAssembly(
    'minecraft:diamond', 'kubejs:incomplete_printed_engineering_circuit', 'ae2:printed_engineering_processor',
    [
      deploy('kubejs:incomplete_printed_engineering_circuit', 'ae2:engineering_processor_press', true),
      press('kubejs:incomplete_printed_engineering_circuit')
    ]
  ));

  event.custom(seqAssembly(
    'create:iron_sheet', 'kubejs:incomplete_silicon_press', 'ae2:silicon_press',
    [
      deploy('kubejs:incomplete_silicon_press', 'ae2:silicon_press', true),
      press('kubejs:incomplete_silicon_press')
    ]
  ));

  event.custom(seqAssembly(
    'create:iron_sheet', 'kubejs:incomplete_logic_processor_press', 'ae2:logic_processor_press',
    [
      deploy('kubejs:incomplete_logic_processor_press', 'ae2:logic_processor_press', true),
      press('kubejs:incomplete_logic_processor_press')
    ]
  ));

  event.custom(seqAssembly(
    'create:iron_sheet', 'kubejs:incomplete_calculation_processor_press', 'ae2:calculation_processor_press',
    [
      deploy('kubejs:incomplete_calculation_processor_press', 'ae2:calculation_processor_press', true),
      press('kubejs:incomplete_calculation_processor_press')
    ]
  ));

  event.custom(seqAssembly(
    'create:iron_sheet', 'kubejs:incomplete_engineering_processor_press', 'ae2:engineering_processor_press',
    [
      deploy('kubejs:incomplete_engineering_processor_press', 'ae2:engineering_processor_press', true),
      press('kubejs:incomplete_engineering_processor_press')
    ]
  ));

  event.custom(seqAssembly(
    'ae2:printed_silicon', 'kubejs:incomplete_logic_processor', 'ae2:logic_processor',
    [
      deploy('kubejs:incomplete_logic_processor', 'ae2:printed_logic_processor', false),
      deploy('kubejs:incomplete_logic_processor', 'minecraft:redstone', false),
      press('kubejs:incomplete_logic_processor')
    ]
  ));

  event.custom(seqAssembly(
    'ae2:printed_silicon', 'kubejs:incomplete_calculation_processor', 'ae2:calculation_processor',
    [
      deploy('kubejs:incomplete_calculation_processor', 'ae2:printed_calculation_processor', false),
      deploy('kubejs:incomplete_calculation_processor', 'minecraft:redstone', false),
      press('kubejs:incomplete_calculation_processor')
    ]
  ));

  event.custom(seqAssembly(
    'ae2:printed_silicon', 'kubejs:incomplete_engineering_processor', 'ae2:engineering_processor',
    [
      deploy('kubejs:incomplete_engineering_processor', 'ae2:printed_engineering_processor', false),
      deploy('kubejs:incomplete_engineering_processor', 'minecraft:redstone', false),
      press('kubejs:incomplete_engineering_processor')
    ]
  ));

  // Source: RIKJS-neoforge-SequencedAssembly.js
  sequencedAssemblyRecipes(
    [
      CreateItem.of('minecraft:diamond', 0.8),
      CreateItem.of(Item.of('minecraft:coal_block', 6), 0.15),
      CreateItem.of(Item.of('minecraft:coal_block', 5), 0.05)
    ],
    'kubejs:raw_humanmade_diamond',
    [
      event.recipes.create.pressing(
        'kubejs:incomplete_humanmade_diamond',
        'kubejs:incomplete_humanmade_diamond'
      )
    ]
  )
    .transitionalItem('kubejs:incomplete_humanmade_diamond')
    .loops(10);

  sequencedAssemblyRecipes(
    [
      CreateItem.of('kubejs:eternal_reinforced_glass', 0.5),
      CreateItem.of(Item.of('minecraft:glass', 2), 0.35),
      CreateItem.of(Item.of('create:framed_glass', 1), 0.15)
    ],
    'create:framed_glass',
    [
      event.recipes.create.filling(
        'kubejs:incomplete_eternal_reinforced_glass',
        [
          'kubejs:incomplete_eternal_reinforced_glass',
          Fluid.of('kubejs:reinforce_liquid', 100)
        ]
      ),
      event.recipes.create.deploying(
        'kubejs:incomplete_eternal_reinforced_glass',
        [
          'kubejs:incomplete_eternal_reinforced_glass',
          'kubejs:eternal_certus_dust'
        ]
      ),
      event.recipes.create.pressing(
        'kubejs:incomplete_eternal_reinforced_glass',
        'kubejs:incomplete_eternal_reinforced_glass'
      )
    ]
  )

    .transitionalItem('kubejs:incomplete_eternal_reinforced_glass')
    .loops(3);

  sequencedAssemblyRecipes(
    [
      CreateItem.of('minecraft:reinforced_deepslate', 0.5),
      CreateItem.of(Item.of('minecraft:diamond', 4), 0.3),
      CreateItem.of(Item.of('minecraft:coal_block', 6), 0.10),
      CreateItem.of(Item.of('minecraft:deepslate', 6), 0.05),
      CreateItem.of(Item.of('minecraft:ancient_debris', 4), 0.05)
    ],
    'kubejs:raw_reinforced_deepslate',
    [

      event.recipes.create.filling(
        'kubejs:incomplete_reinforced_deepslate',
        [
          'kubejs:incomplete_reinforced_deepslate',
          Fluid.of('minecraft:lava', 100)
        ]
      ),

      event.recipes.create.filling(
        'kubejs:incomplete_reinforced_deepslate',
        [
          'kubejs:incomplete_reinforced_deepslate',
          Fluid.of('create_enchantment_industry:experience', 100)
        ]
      ),

      event.recipes.create.deploying(
        'kubejs:incomplete_reinforced_deepslate',
        [
          'kubejs:incomplete_reinforced_deepslate',
          'minecraft:netherite_ingot'
        ]
      ),

      event.recipes.create.deploying(
        'kubejs:incomplete_reinforced_deepslate',
        [
          'kubejs:incomplete_reinforced_deepslate',
          'kubejs:stella_redstone_dust'
        ]
      ),

      event.recipes.create.pressing(
        'kubejs:incomplete_reinforced_deepslate',
        'kubejs:incomplete_reinforced_deepslate'
      )
    ]
  )
    .transitionalItem('kubejs:incomplete_reinforced_deepslate')
    .loops(3);

  sequencedAssemblyRecipes(
    [
      CreateItem.of('minecraft:budding_amethyst', 0.5),
      CreateItem.of(Item.of('minecraft:obsidian', 4), 0.2),
      CreateItem.of(Item.of('minecraft:amethyst_block', 8), 0.2),
      CreateItem.of(Item.of('minecraft:ancient_debris', 4), 0.1)
    ],
    'kubejs:manmade_budding_amethyst',
    [

      event.recipes.create.filling(
        'kubejs:incomplete_budding_amethyst',
        [
          'kubejs:incomplete_budding_amethyst',
          Fluid.of('minecraft:lava', 100)
        ]
      ),

      event.recipes.create.filling(
        'kubejs:incomplete_budding_amethyst',
        [
          'kubejs:incomplete_budding_amethyst',
          Fluid.of('create_enchantment_industry:experience', 100)
        ]
      ),

      event.recipes.create.deploying(
        'kubejs:incomplete_budding_amethyst',
        [
          'kubejs:incomplete_budding_amethyst',
          'minecraft:netherite_ingot'
        ]
      ),

      event.recipes.create.deploying(
        'kubejs:incomplete_budding_amethyst',
        [
          'kubejs:incomplete_budding_amethyst',
          'kubejs:stella_redstone_dust'
        ]
      ),

      event.recipes.create.pressing(
        'kubejs:incomplete_budding_amethyst',
        'kubejs:incomplete_budding_amethyst'
      )
    ]
  )
    .transitionalItem('kubejs:incomplete_budding_amethyst')
    .loops(3);

  sequencedAssemblyRecipes(
    [
      CreateItem.of('ae2:cell_component_256k', 0.5),
      CreateItem.of(Item.of('ae2:cell_component_64k', 2), 0.3),
      CreateItem.of(Item.of('ae2:cell_component_64k', 1), 0.15),
      CreateItem.of(Item.of('ae2:cell_component_16k', 4), 0.05)
    ],
    'kubejs:firstmade_cell_component_256k',
    [

      event.recipes.create.deploying(
        'kubejs:incomplete_cell_component_256k',
        [
          'kubejs:incomplete_cell_component_256k',
          'kubejs:eternal_certus_dust'
        ]
      ),

      event.recipes.create.filling(
        'kubejs:incomplete_cell_component_256k',
        [
          'kubejs:incomplete_cell_component_256k',
          Fluid.of('kubejs:reinforce_liquid', 100)
        ]
      ),

      event.recipes.create.filling(
        'kubejs:incomplete_cell_component_256k',
        [
          'kubejs:incomplete_cell_component_256k',
          Fluid.of('create_enchantment_industry:experience', 200)
        ]
      ),

      event.recipes.create.deploying(
        'kubejs:incomplete_cell_component_256k',
        [
          'kubejs:incomplete_cell_component_256k',
          'ae2:singularity'
        ]
      ),

      event.recipes.create.pressing(
        'kubejs:incomplete_cell_component_256k',
        'kubejs:incomplete_cell_component_256k'
      )
    ]
  )
    .transitionalItem('kubejs:incomplete_cell_component_256k')
    .loops(3);

  // Source: RIKJS-neoforge-stella_mechanism_recipes.js
  sequencedAssemblyRecipes(
    [
      CreateItem.of('kubejs:stella_mechanism', 0.5),
      CreateItem.of('minecraft:diamond', 0.4),
      CreateItem.of('kubejs:stella_redstone_dust', 0.1)
    ],
    'create:precision_mechanism',
    [

      event.recipes.create.filling(
        TRANS,
        [TRANS, Fluid.of('create_enchantment_industry:experience', 100)]
      ),

      event.recipes.create.deploying(
        TRANS,
        [TRANS, 'minecraft:diamond']
      ),

      event.recipes.create.deploying(
        TRANS,
        [TRANS, 'kubejs:stella_redstone_dust']
      ),

      event.recipes.create.deploying(
        TRANS,
        [TRANS, 'ae2:fluix_dust']
      ),

      event.recipes.create.pressing(
        TRANS,
        TRANS
      )
    ]
  )
    .transitionalItem(TRANS)
    .loops(3)
    .id('kubejs:stella_mechanism_seq');


  // ============================================================
  // CIR_APOTHEOSIS_GEM_POLICY - component-aware gem sequenced assembly
  // ============================================================
  if (Platform.isLoaded('apotheosis')) {

    // IIFE：隔离作用域，避免脚本重载时 const 重复声明
    ;(() => {
    // Native and CEI cutters stop at Flawed; Normal and above require assembly.
    // CEI uses hardcoded logic; cir_apotheosis_policy blocks that separate bypass.
    event.remove({ type: 'apotheosis:purity_upgrade' });
    event.custom({"type":"apotheosis:purity_upgrade","left":[{"count":1,"item":"apotheosis:gem_dust"}],"purity":"cracked","right":[{"count":3,"item":"apotheosis:mysterious_scrap_metal"},{"count":1,"item":"apotheosis:timeworn_fabric"}]}).id('kubejs:apotheosis/gem_cutting/cracked');
    event.custom({"type":"apotheosis:purity_upgrade","left":[{"count":3,"item":"apotheosis:gem_dust"}],"purity":"chipped","right":[{"count":9,"item":"apotheosis:mysterious_scrap_metal"},{"count":3,"item":"apotheosis:timeworn_fabric"},{"count":1,"item":"apotheosis:luminous_crystal_shard"}]}).id('kubejs:apotheosis/gem_cutting/chipped');

    var cirGemUpgrades = [
      {"source":"apotheosis:core/ballast","from":"flawed","gem":"apotheosis:core/ballast","to":"normal","costs":["minecraft:diamond"],"requires":[],"intermediate":"kubejs:incomplete_apotheosis_core_ballast"},
      {"source":"apotheosis:core/ballast","from":"normal","gem":"apotheosis:core/ballast","to":"flawless","costs":["minecraft:netherite_scrap"],"requires":[],"intermediate":"kubejs:incomplete_apotheosis_core_ballast"},
      {"source":"apotheosis:core/brawlers","from":"flawed","gem":"apotheosis:core/brawlers","to":"normal","costs":["minecraft:diamond"],"requires":[],"intermediate":"kubejs:incomplete_apotheosis_core_brawlers"},
      {"source":"apotheosis:core/brawlers","from":"normal","gem":"apotheosis:core/brawlers","to":"flawless","costs":["minecraft:netherite_scrap"],"requires":[],"intermediate":"kubejs:incomplete_apotheosis_core_brawlers"},
      {"source":"apotheosis:core/breach","from":"flawed","gem":"apotheosis:core/breach","to":"normal","costs":["minecraft:diamond"],"requires":[],"intermediate":"kubejs:incomplete_apotheosis_core_breach"},
      {"source":"apotheosis:core/breach","from":"normal","gem":"apotheosis:core/breach","to":"flawless","costs":["minecraft:netherite_scrap"],"requires":[],"intermediate":"kubejs:incomplete_apotheosis_core_breach"},
      {"source":"apotheosis:core/combatant","from":"flawed","gem":"apotheosis:core/combatant","to":"normal","costs":["minecraft:diamond"],"requires":[],"intermediate":"kubejs:incomplete_apotheosis_core_combatant"},
      {"source":"apotheosis:core/combatant","from":"normal","gem":"apotheosis:core/combatant","to":"flawless","costs":["minecraft:netherite_scrap"],"requires":[],"intermediate":"kubejs:incomplete_apotheosis_core_combatant"},
      {"source":"apotheosis:core/guardian","from":"flawed","gem":"apotheosis:core/guardian","to":"normal","costs":["minecraft:diamond"],"requires":[],"intermediate":"kubejs:incomplete_apotheosis_core_guardian"},
      {"source":"apotheosis:core/guardian","from":"normal","gem":"apotheosis:core/guardian","to":"flawless","costs":["minecraft:netherite_scrap"],"requires":[],"intermediate":"kubejs:incomplete_apotheosis_core_guardian"},
      {"source":"apotheosis:core/lightning","from":"flawed","gem":"apotheosis:core/lightning","to":"normal","costs":["minecraft:diamond"],"requires":[],"intermediate":"kubejs:incomplete_apotheosis_core_lightning"},
      {"source":"apotheosis:core/lightning","from":"normal","gem":"apotheosis:core/lightning","to":"flawless","costs":["minecraft:netherite_scrap"],"requires":[],"intermediate":"kubejs:incomplete_apotheosis_core_lightning"},
      {"source":"apotheosis:core/lunar","from":"flawed","gem":"apotheosis:core/lunar","to":"normal","costs":["minecraft:diamond"],"requires":[],"intermediate":"kubejs:incomplete_apotheosis_core_lunar"},
      {"source":"apotheosis:core/lunar","from":"normal","gem":"apotheosis:core/lunar","to":"flawless","costs":["minecraft:netherite_scrap"],"requires":[],"intermediate":"kubejs:incomplete_apotheosis_core_lunar"},
      {"source":"apotheosis:core/samurai","from":"flawed","gem":"apotheosis:core/samurai","to":"normal","costs":["minecraft:diamond"],"requires":[],"intermediate":"kubejs:incomplete_apotheosis_core_samurai"},
      {"source":"apotheosis:core/samurai","from":"normal","gem":"apotheosis:core/samurai","to":"flawless","costs":["minecraft:netherite_scrap"],"requires":[],"intermediate":"kubejs:incomplete_apotheosis_core_samurai"},
      {"source":"apotheosis:core/slipstream","from":"flawed","gem":"apotheosis:core/slipstream","to":"normal","costs":["minecraft:diamond"],"requires":[],"intermediate":"kubejs:incomplete_apotheosis_core_slipstream"},
      {"source":"apotheosis:core/slipstream","from":"normal","gem":"apotheosis:core/slipstream","to":"flawless","costs":["minecraft:netherite_scrap"],"requires":[],"intermediate":"kubejs:incomplete_apotheosis_core_slipstream"},
      {"source":"apotheosis:core/solar","from":"flawed","gem":"apotheosis:core/solar","to":"normal","costs":["minecraft:diamond"],"requires":[],"intermediate":"kubejs:incomplete_apotheosis_core_solar"},
      {"source":"apotheosis:core/solar","from":"normal","gem":"apotheosis:core/solar","to":"flawless","costs":["minecraft:netherite_scrap"],"requires":[],"intermediate":"kubejs:incomplete_apotheosis_core_solar"},
      {"source":"apotheosis:core/splendor","from":"flawed","gem":"apotheosis:core/splendor","to":"normal","costs":["minecraft:diamond"],"requires":[],"intermediate":"kubejs:incomplete_apotheosis_core_splendor"},
      {"source":"apotheosis:core/splendor","from":"normal","gem":"apotheosis:core/splendor","to":"flawless","costs":["minecraft:netherite_scrap"],"requires":[],"intermediate":"kubejs:incomplete_apotheosis_core_splendor"},
      {"source":"apotheosis:core/tyrannical","from":"flawed","gem":"apotheosis:core/tyrannical","to":"normal","costs":["minecraft:diamond"],"requires":[],"intermediate":"kubejs:incomplete_apotheosis_core_tyrannical"},
      {"source":"apotheosis:core/tyrannical","from":"normal","gem":"apotheosis:core/tyrannical","to":"flawless","costs":["minecraft:netherite_scrap"],"requires":[],"intermediate":"kubejs:incomplete_apotheosis_core_tyrannical"},
      {"source":"apotheosis:core/warlord","from":"flawed","gem":"apotheosis:core/warlord","to":"normal","costs":["minecraft:diamond"],"requires":[],"intermediate":"kubejs:incomplete_apotheosis_core_warlord"},
      {"source":"apotheosis:core/warlord","from":"normal","gem":"apotheosis:core/warlord","to":"flawless","costs":["minecraft:netherite_scrap"],"requires":[],"intermediate":"kubejs:incomplete_apotheosis_core_warlord"},
      {"source":"apotheosis:overworld/earth","from":"normal","gem":"apotheosis:overworld/earth","to":"flawless","costs":["minecraft:netherite_scrap"],"requires":[],"intermediate":"kubejs:incomplete_apotheosis_overworld_earth"},
      {"source":"apotheosis:overworld/earth","from":"flawed","gem":"apotheosis:overworld/earth","to":"normal","costs":["appgen:netherite_dust","minecraft:quartz"],"requires":[],"intermediate":"kubejs:incomplete_apotheosis_overworld_earth"},
      {"source":"apotheosis:overworld/royalty","from":"normal","gem":"apotheosis:overworld/royalty","to":"flawless","costs":["minecraft:netherite_scrap"],"requires":[],"intermediate":"kubejs:incomplete_apotheosis_overworld_royalty"},
      {"source":"apotheosis:overworld/royalty","from":"flawed","gem":"apotheosis:overworld/royalty","to":"normal","costs":["appgen:netherite_dust","minecraft:gold_block"],"requires":[],"intermediate":"kubejs:incomplete_apotheosis_overworld_royalty"},
      {"source":"apotheosis:overworld/verdant_ruin","from":"normal","gem":"apotheosis:overworld/verdant_ruin","to":"flawless","costs":["minecraft:netherite_scrap"],"requires":[],"intermediate":"kubejs:incomplete_apotheosis_overworld_verdant_ruin"},
      {"source":"apotheosis:overworld/verdant_ruin","from":"flawed","gem":"apotheosis:overworld/verdant_ruin","to":"normal","costs":["appgen:netherite_dust","minecraft:glow_berries"],"requires":[],"intermediate":"kubejs:incomplete_apotheosis_overworld_verdant_ruin"},
      {"source":"apotheosis:the_end/mageslayer","from":"normal","gem":"apotheosis:the_end/mageslayer","to":"flawless","costs":["appgen:netherite_dust","minecraft:chorus_fruit"],"requires":[],"intermediate":"kubejs:incomplete_apotheosis_the_end_mageslayer"},
      {"source":"apotheosis:the_nether/blood_lord","from":"normal","gem":"apotheosis:the_nether/blood_lord","to":"flawless","costs":["minecraft:netherite_scrap"],"requires":[],"intermediate":"kubejs:incomplete_apotheosis_the_nether_blood_lord"},
      {"source":"apotheosis:the_nether/blood_lord","from":"flawed","gem":"apotheosis:the_nether/blood_lord","to":"normal","costs":["appgen:netherite_dust","minecraft:ghast_tear"],"requires":[],"intermediate":"kubejs:incomplete_apotheosis_the_nether_blood_lord"},
      {"source":"apotheosis:the_nether/inferno","from":"normal","gem":"apotheosis:the_nether/inferno","to":"flawless","costs":["minecraft:netherite_scrap"],"requires":["apothic_enchanting"],"intermediate":"kubejs:incomplete_apotheosis_the_nether_inferno"},
      {"source":"apotheosis:the_nether/inferno","from":"flawed","gem":"apotheosis:the_nether/inferno","to":"normal","costs":["appgen:netherite_dust","minecraft:blaze_rod"],"requires":["apothic_enchanting"],"intermediate":"kubejs:incomplete_apotheosis_the_nether_inferno"},
      {"source":"apotheosis:the_nether/molten_breach","from":"normal","gem":"apotheosis:the_nether/molten_breach","to":"flawless","costs":["minecraft:netherite_scrap"],"requires":[],"intermediate":"kubejs:incomplete_apotheosis_the_nether_molten_breach"},
      {"source":"apotheosis:the_nether/molten_breach","from":"flawed","gem":"apotheosis:the_nether/molten_breach","to":"normal","costs":["appgen:netherite_dust","minecraft:magma_cream"],"requires":[],"intermediate":"kubejs:incomplete_apotheosis_the_nether_molten_breach"},
      {"source":"apothic_compats:ars_nouveau/mana","from":"flawed","gem":"apothic_compats:ars_nouveau/mana","to":"normal","costs":["minecraft:diamond"],"requires":["ars_nouveau"],"intermediate":"kubejs:incomplete_apothic_compats_ars_nouveau_mana"},
      {"source":"apothic_compats:ars_nouveau/mana","from":"normal","gem":"apothic_compats:ars_nouveau/mana","to":"flawless","costs":["minecraft:netherite_scrap"],"requires":["ars_nouveau"],"intermediate":"kubejs:incomplete_apothic_compats_ars_nouveau_mana"},
      {"source":"apothic_compats:malum/etheric","from":"flawed","gem":"apothic_compats:malum/etheric","to":"normal","costs":["minecraft:diamond"],"requires":["malum"],"intermediate":"kubejs:incomplete_apothic_compats_malum_etheric"},
      {"source":"apothic_compats:malum/etheric","from":"normal","gem":"apothic_compats:malum/etheric","to":"flawless","costs":["minecraft:netherite_scrap"],"requires":["malum"],"intermediate":"kubejs:incomplete_apothic_compats_malum_etheric"},
      {"source":"apothic_compats:malum/soul_stained","from":"flawed","gem":"apothic_compats:malum/soul_stained","to":"normal","costs":["minecraft:diamond"],"requires":["malum"],"intermediate":"kubejs:incomplete_apothic_compats_malum_soul_stained"},
      {"source":"apothic_compats:malum/soul_stained","from":"normal","gem":"apothic_compats:malum/soul_stained","to":"flawless","costs":["minecraft:netherite_scrap"],"requires":["malum"],"intermediate":"kubejs:incomplete_apothic_compats_malum_soul_stained"},
      {"source":"apothic_compats:malum/thief","from":"flawed","gem":"apothic_compats:malum/thief","to":"normal","costs":["minecraft:diamond"],"requires":["malum"],"intermediate":"kubejs:incomplete_apothic_compats_malum_thief"},
      {"source":"apothic_compats:malum/thief","from":"normal","gem":"apothic_compats:malum/thief","to":"flawless","costs":["minecraft:netherite_scrap"],"requires":["malum"],"intermediate":"kubejs:incomplete_apothic_compats_malum_thief"},
    ];

    // 暮色森林的宝石单独放：没装 Twilight Forest 时整段跳过，
    // 避免引用 twilightforest:* 物品导致配方注册报错。
    var cirTwilightGemUpgrades = [
    {"source":"apotheosis:twilight/forest","from":"normal","gem":"apotheosis:twilight/forest","to":"flawless","costs":["minecraft:netherite_scrap"],"requires":["twilightforest"],"intermediate":"kubejs:incomplete_apotheosis_twilight_forest"},
    {"source":"apotheosis:twilight/forest","from":"flawed","gem":"apotheosis:twilight/forest","to":"normal","costs":["appgen:netherite_dust","twilightforest:steeleaf_ingot"],"requires":["twilightforest"],"intermediate":"kubejs:incomplete_apotheosis_twilight_forest"},
    {"source":"apotheosis:twilight/queen","from":"normal","gem":"apotheosis:twilight/queen","to":"flawless","costs":["minecraft:netherite_scrap"],"requires":["twilightforest"],"intermediate":"kubejs:incomplete_apotheosis_twilight_queen"},
    {"source":"apotheosis:twilight/queen","from":"flawed","gem":"apotheosis:twilight/queen","to":"normal","costs":["appgen:netherite_dust","twilightforest:alpha_yeti_fur"],"requires":["twilightforest"],"intermediate":"kubejs:incomplete_apotheosis_twilight_queen"},
    ];
    function cirGemComponents(gem, purity) {
      return { 'apotheosis:gem': gem, 'apotheosis:purity': purity };
    }
    function cirGemIngredient(gem, purity) {
      return { type: 'neoforge:components', items: ['apotheosis:gem'],
        components: cirGemComponents(gem, purity), strict: false };
    }
    function cirRegisterGemUpgrade(upgrade) {
      if (!upgrade.requires.every(mod => Platform.isLoaded(mod))) return;
      const transitional = { id: upgrade.intermediate, count: 1 };
      const current = { item: upgrade.intermediate };
      // 流程：宝石粉 → 材料 → 经验液 →（仅 normal→flawless 强化液）→ 压制 → 切割
      const sequence = upgrade.costs.map(material => ({ type: 'create:deploying',
        ingredients: [current, { item: material }], results: [transitional] }));
      sequence.unshift({ type: 'create:deploying', ingredients: [current,
        { item: 'apotheosis:gem_dust' }], results: [transitional] });
      sequence.push({ type: 'create:filling', ingredients: [current,
        { type: 'neoforge:single', fluid: 'create_enchantment_industry:experience', amount: 100 }], results: [transitional] });
      // 强化液只在 正常→无瑕 这一步需要
      if (upgrade.to === 'flawless') {
        sequence.push({ type: 'create:filling', ingredients: [current,
          { type: 'neoforge:single', fluid: 'kubejs:reinforce_liquid', amount: 200 }], results: [transitional] });
      }
      // 结尾：先切割，再压制
      sequence.push({ type: 'create:cutting', ingredients: [current], results: [transitional], processing_time: 50 });
      sequence.push({ type: 'create:pressing', ingredients: [current], results: [transitional] });
      const output = { id: 'apotheosis:gem', count: 1,
        components: cirGemComponents(upgrade.gem, upgrade.to) };
      // 完成概率：有瑕→正常 75%，返还基底 25%；正常→无瑕 50%，返还基底 37.5% / 原碎片副产物 12.5%
      const failResults = [];
      if (upgrade.to === 'normal') {
        output.chance = 75;
        failResults.push({ id: 'apotheosis:gem', count: 1, chance: 25,
          components: cirGemComponents(upgrade.source, upgrade.from) });
      } else if (upgrade.to === 'flawless') {
        output.chance = 50;
        failResults.push({ id: 'apotheosis:gem', count: 1, chance: 37.5,
          components: cirGemComponents(upgrade.source, upgrade.from) });
        failResults.push({ id: 'minecraft:netherite_scrap', count: 1, chance: 12.5 });
      }
      const name = upgrade.gem.replace(':', '/');
      event.custom({ type: 'create:sequenced_assembly',
        ingredient: cirGemIngredient(upgrade.source, upgrade.from),
        transitional_item: transitional, sequence: sequence, results: [output].concat(failResults), loops: upgrade.to === 'normal' ? 3 : 5
      }).id('kubejs:apotheosis/gem_assembly/' + name + '/' + upgrade.to);
    }
    cirGemUpgrades.forEach(cirRegisterGemUpgrade);
    if (Platform.isLoaded('twilightforest')) {
      cirTwilightGemUpgrades.forEach(cirRegisterGemUpgrade);
    }
    })()
  }


  // ============================================================
  // Firstmade perfect gems: six operations per loop, five loops, 25% success.
  // Failure: half returns the input; half rolls a low-origin gem (including itself).
  // Finished firstmade gems are charged separately, then reacted into perfect gems.
  // ============================================================
  if (['apotheosis', 'create', 'extendedae', 'advanced_ae'].every(mod => Platform.isLoaded(mod))) {
    ;(() => {
      const definitions = [{"gem":"apotheosis:core/ballast","id":"kubejs:firstmade_perfect_apotheosis_core_ballast","requires":[],"low":true},{"gem":"apotheosis:core/brawlers","id":"kubejs:firstmade_perfect_apotheosis_core_brawlers","requires":[],"low":true},{"gem":"apotheosis:core/breach","id":"kubejs:firstmade_perfect_apotheosis_core_breach","requires":[],"low":true},{"gem":"apotheosis:core/combatant","id":"kubejs:firstmade_perfect_apotheosis_core_combatant","requires":[],"low":true},{"gem":"apotheosis:core/guardian","id":"kubejs:firstmade_perfect_apotheosis_core_guardian","requires":[],"low":true},{"gem":"apotheosis:core/lightning","id":"kubejs:firstmade_perfect_apotheosis_core_lightning","requires":[],"low":true},{"gem":"apotheosis:core/lunar","id":"kubejs:firstmade_perfect_apotheosis_core_lunar","requires":[],"low":true},{"gem":"apotheosis:core/samurai","id":"kubejs:firstmade_perfect_apotheosis_core_samurai","requires":[],"low":true},{"gem":"apotheosis:core/slipstream","id":"kubejs:firstmade_perfect_apotheosis_core_slipstream","requires":[],"low":true},{"gem":"apotheosis:core/solar","id":"kubejs:firstmade_perfect_apotheosis_core_solar","requires":[],"low":true},{"gem":"apotheosis:core/splendor","id":"kubejs:firstmade_perfect_apotheosis_core_splendor","requires":[],"low":true},{"gem":"apotheosis:core/tyrannical","id":"kubejs:firstmade_perfect_apotheosis_core_tyrannical","requires":[],"low":true},{"gem":"apotheosis:core/warlord","id":"kubejs:firstmade_perfect_apotheosis_core_warlord","requires":[],"low":true},{"gem":"apotheosis:overworld/earth","id":"kubejs:firstmade_perfect_apotheosis_overworld_earth","requires":[],"low":false},{"gem":"apotheosis:overworld/royalty","id":"kubejs:firstmade_perfect_apotheosis_overworld_royalty","requires":[],"low":false},{"gem":"apotheosis:overworld/verdant_ruin","id":"kubejs:firstmade_perfect_apotheosis_overworld_verdant_ruin","requires":[],"low":false},{"gem":"apotheosis:the_end/mageslayer","id":"kubejs:firstmade_perfect_apotheosis_the_end_mageslayer","requires":[],"low":false},{"gem":"apotheosis:the_nether/blood_lord","id":"kubejs:firstmade_perfect_apotheosis_the_nether_blood_lord","requires":[],"low":false},{"gem":"apotheosis:the_nether/inferno","id":"kubejs:firstmade_perfect_apotheosis_the_nether_inferno","requires":["apothic_enchanting"],"low":false},{"gem":"apotheosis:the_nether/molten_breach","id":"kubejs:firstmade_perfect_apotheosis_the_nether_molten_breach","requires":[],"low":false},{"gem":"apotheosis:twilight/forest","id":"kubejs:firstmade_perfect_apotheosis_twilight_forest","requires":["twilightforest"],"low":false},{"gem":"apotheosis:twilight/queen","id":"kubejs:firstmade_perfect_apotheosis_twilight_queen","requires":["twilightforest"],"low":false},{"gem":"apothic_compats:ars_nouveau/mana","id":"kubejs:firstmade_perfect_apothic_compats_ars_nouveau_mana","requires":["apothic_compats","ars_nouveau"],"low":true},{"gem":"apothic_compats:malum/etheric","id":"kubejs:firstmade_perfect_apothic_compats_malum_etheric","requires":["apothic_compats","malum"],"low":true},{"gem":"apothic_compats:malum/soul_stained","id":"kubejs:firstmade_perfect_apothic_compats_malum_soul_stained","requires":["apothic_compats","malum"],"low":true},{"gem":"apothic_compats:malum/thief","id":"kubejs:firstmade_perfect_apothic_compats_malum_thief","requires":["apothic_compats","malum"],"low":true}];
      const available = definitions.filter(gem => gem.requires.every(mod => Platform.isLoaded(mod)));
      const failurePool = available.filter(gem => gem.low);
      if (failurePool.length === 0) return;
      function stack(gem, purity, weight) {
        return {id: 'apotheosis:gem', count: 1, chance: weight,
          components: {'apotheosis:gem': gem, 'apotheosis:purity': purity}};
      }
      available.forEach(gem => {
        const intermediate = gem.id.replace('firstmade_perfect_', 'incomplete_');
        const current = {item: intermediate};
        const transitional = {id: intermediate, count: 1};
        const sequence = [
          {type: 'create:deploying', ingredients: [current, {item: 'kubejs:eternal_certus_dust'}], results: [transitional]},
          {type: 'create:deploying', ingredients: [current, {item: 'extendedae:entro_dust'}], results: [transitional]},
          {type: 'create:filling', ingredients: [current,
            {type: 'neoforge:single', fluid: 'kubejs:mysterious_liquid', amount: 100}], results: [transitional]},
          {type: 'create:cutting', ingredients: [current], results: [transitional], processing_time: 50},
          {type: 'create:filling', ingredients: [current,
            {type: 'neoforge:single', fluid: 'advanced_ae:quantum_infusion_source', amount: 100}], results: [transitional]},
          {type: 'create:pressing', ingredients: [current], results: [transitional]}
        ];
        // Create normalizes these integer weights: 2N / 8N, 3N / 8N, N * 3 / 8N.
        const results = [{id: gem.id, count: 1, chance: 2 * failurePool.length},
          stack(gem.gem, 'flawless', 3 * failurePool.length)];
        failurePool.forEach(other => results.push(stack(other.gem, 'flawless', 3)));
        event.custom({type: 'create:sequenced_assembly',
          ingredient: {type: 'neoforge:components', items: 'apotheosis:gem',
            components: {'apotheosis:gem': gem.gem, 'apotheosis:purity': 'flawless'}, strict: false},
          transitional_item: transitional, sequence: sequence, results: results, loops: 5
        }).id('kubejs:apotheosis/gem_assembly/' + gem.gem.replace(':', '/') + '/firstmade_perfect');
      });
      console.info('[CIR] Registered ' + available.length + ' firstmade-perfect gem assembly recipes.');
    })();
  }

});
