// priority: 0

// Crafting table recipes.
// Sections are sorted by recipe type. Ingredients, outputs and settings are preserved.
ServerEvents.recipes(event => {

  // ============================================================
  // minecraft:crafting_shaped
  // ============================================================

  // Source: RIKJS-neoforge-AppliedFlux.js
  const CORES = [
    { out: 'appflux:core_1m',   dust: '#c:dusts/ender_pearl', lower: 'appflux:core_256k', glass: 'kubejs:reinforced_quartz_glass' },
    { out: 'appflux:core_4m',   dust: '#c:dusts/diamond',     lower: 'appflux:core_1m',   glass: 'kubejs:reinforced_quartz_glass' },
    { out: 'appflux:core_16m',  dust: 'kubejs:reinforced_redstone_dust',     lower: 'appflux:core_4m',   glass: 'kubejs:reinforced_quartz_glass' },
    { out: 'appflux:core_64m',  dust: 'kubejs:eternal_certus_dust',     lower: 'appflux:core_16m',  glass: 'kubejs:eternal_reinforced_glass' },
    { out: 'appflux:core_256m', dust: 'kubejs:stella_redstone_dust',     lower: 'appflux:core_64m',  glass: 'kubejs:eternal_reinforced_glass' }
  ];

  // Source: RIKJS-neoforge-AppliedGenerators.js
  const COMPONENTS = [
    { out: 'appgen:generating_component_1m',   dust: '#c:dusts/diamond',      lower: 'appgen:generating_component_256k', glass: 'kubejs:reinforced_quartz_glass' },
    { out: 'appgen:generating_component_4m',   dust: '#c:dusts/netherite',   lower: 'appgen:generating_component_1m',   glass: 'kubejs:reinforced_quartz_glass' },
    { out: 'appgen:generating_component_16m',  dust: 'kubejs:reinforced_redstone_dust',   lower: 'appgen:generating_component_4m',   glass: 'kubejs:reinforced_quartz_glass' },
    { out: 'appgen:generating_component_64m',  dust: 'kubejs:eternal_certus_dust', lower: 'appgen:generating_component_16m',  glass: 'kubejs:eternal_reinforced_glass' },
    { out: 'appgen:generating_component_256m', dust: 'kubejs:stella_redstone_dust', lower: 'appgen:generating_component_64m',  glass: 'kubejs:eternal_reinforced_glass' }
  ];

  // Source: RIKJS-neoforge-AppliedFlux.js
  for (const core of CORES) {
    event.remove({ output: core.out });

    event.shaped(core.out, [
      'DPD',
      'LGL',
      'DLD'
    ], {
      D: core.dust,
      P: 'ae2:engineering_processor',
      L: core.lower,
      G: core.glass
    });
  }

  // Source: RIKJS-neoforge-AppliedGenerators.js
  for (const c of COMPONENTS) {
    event.remove({ output: c.out });

    event.shaped(c.out, [
      'DOD',
      'CQC',
      'DCD'
    ], {
      D: c.dust,
      O: 'appgen:origination_processor',
      C: c.lower,
      Q: c.glass
    });
  }

  // Source: RIKJS-neoforge-CreateM-Crafting.js
  event.remove({ output: 'ae2:drive' });

  event.shaped('ae2:drive', [
    'ABA',
    'CPC',
    'ABA'
  ], {
    A: '#c:ingots/iron',
    B: 'ae2:engineering_processor',
    C: 'ae2:fluix_glass_cable',
    P: 'create:precision_mechanism'
  });

  // ExtendedAE: upgrade the center component from 16K to 256K.
  event.remove({ id: 'extendedae:void_cell' });
  event.shaped('extendedae:void_cell', [
    'CEC',
    'KXK',
    'III'
  ], {
    C: 'ae2:quartz_glass',
    E: 'ae2:condenser',
    I: 'minecraft:amethyst_shard',
    K: 'ae2:void_card',
    X: 'ae2:cell_component_256k'
  }).id('extendedae:void_cell');

  // Source: YunKJS-neoforge-Recipe.js
  event.shaped(
    Item.of('minecraft:elytra', 1),
    [
      'ADA',
      'BCB',
      'BEB'
    ],
    {
      A: 'minecraft:feather',
      B: 'minecraft:phantom_membrane',
      C: 'minecraft:nether_star',
      D: 'minecraft:diamond',
      E: 'minecraft:netherite_ingot'
    }
  );

  event.shaped(
    Item.of('minecraft:heart_of_the_sea', 1),
    [
      'ABA',
      'BCB',
      'ABA'
    ],
    {
      A: 'minecraft:diamond',
      B: 'kubejs:redstone_reinforce_gem',
      C: 'minecraft:beacon'
    }
  );

  event.shaped(
    Item.of('ae2:cell_component_64k',1),
    [
      'ABA',
      'DCD',
      'ADA'
    ],
    {
      A:"minecraft:glowstone_dust",
      B:"ae2:calculation_processor",
      C:"kubejs:reinforced_quartz_glass",
      D:"ae2:cell_component_16k"
    }
  );

  event.shaped(
    Item.of('kubejs:festival_lantern'),
    [
      'ABA',
      'DCD',
      'ABA'
    ],
    {
      A: "minecraft:red_carpet",
      B: "minecraft:yellow_carpet",
      C: "minecraft:lantern",
      D: "#minecraft:planks"
    }
  );

  event.shaped(
    Item.of("kubejs:iron_patronus"),
    [
      ' A ',
      'BBB',
      'CBC'
    ],
    {
      A:"minecraft:carved_pumpkin",
      B:"minecraft:iron_block",
      C:"minecraft:gunpowder"
    }
  );

  event.shaped(
    Item.of('kubejs:guard_recruitment_order'),
    [
      ' A ',
      'BCD',
      ' E '
    ],
    {
      A: "kubejs:eternal_certus_dust",
      B: "minecraft:iron_sword",
      C: "farmersdelight:canvas",
      D: "minecraft:iron_axe",
      E: "minecraft:crossbow"
    }
  );

  event.shaped(
    Item.of("kubejs:firstmade_cell_component_256k",2),
    [
      'ABA',
      'CDC',
      'AEA'
    ],
    {
      A: "kubejs:reinforced_quartz_glass",
      B: "ae2:calculation_processor",
      C: "ae2:cell_component_64k",
      D: "kubejs:eternal_certus_dust",
      E: "create:precision_mechanism"
    }
  );

  event.shaped(
    Item.of("ae2:wireless_booster",2),
    [
      'ABA',
      'CDC',
      'EEE'
    ],
    {
      A: "ae2:fluix_dust",
      B: "#ae2:all_certus_quartz",
      C: "ae2:ender_dust",
      D: "kubejs:eternal_certus_dust",
      E: "minecraft:iron_ingot"
    }
  );

  event.shaped(
    Item.of("ae2:wireless_access_point",1),
    [
      'ABA',
      'CDC',
      'AEA'
    ],
    {
      A: "ae2:fluix_glass_cable",
      B: "ae2:wireless_receiver",
      C: "ae2:ender_dust",
      D: "ae2:calculation_processor",
      E: "create:precision_mechanism"
    }
  );

  event.shaped(
    Item.of("minecraft:crying_obsidian",8),
    [
      'AAA',
      'ABA',
      'AAA'
    ],
    {
      A: "minecraft:obsidian",

      B: "kubejs:eternal_certus_dust"
    }
  );

  event.shaped(
    Item.of("waystones:blank_scroll",3),
    [
      'ABA',
      'ACA',
      'DDD'
    ],
    {
      A: "minecraft:gold_nugget",
      B: "waystones:warp_dust",
      C: "kubejs:eternal_certus_dust",
      D: "minecraft:paper"
    }
  );

  event.shaped(
    Item.of("waystones:warp_scroll",1),
    [
      'ABA',
      'CDC',
      ' E '
    ],
    {
      A: "minecraft:gold_nugget",
      B: "minecraft:ink_sac",
      C: "waystones:warp_dust",
      D: "minecraft:ender_pearl",
      E: "waystones:blank_scroll"
    }
  );

  // ============================================================
  // minecraft:crafting_shapeless
  // ============================================================

  // Source: YunKJS-neoforge-Recipe.js
  event.shapeless("create:dough", "farmersdelight:wheat_dough");

  event.shapeless("farmersdelight:wheat_dough", "create:dough");

  event.shapeless("waystones:dormant_shard",["minecraft:flint","minecraft:diamond","waystones:warp_dust","waystones:warp_dust","kubejs:stella_redstone_dust"]);

});
