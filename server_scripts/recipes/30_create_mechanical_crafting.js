// priority: 0

// Create mechanical crafting recipes.
// Sections are sorted by recipe type. Ingredients, outputs and settings are preserved.
ServerEvents.recipes(event => {
  const create = event.recipes.create;

  // ============================================================
  // create:mechanical_crafting
  // ============================================================

  // Source: RIKJS-neoforge-AppliedGenerators.js
  const SG_MT = [
    { d:'minecraft:diamond', p:'create:precision_mechanism',out: 'appgen:singularity_generator_1m',  comp: 'appgen:generating_component_4m',  lower: 'appgen:singularity_generator_256k' },
    { d:'minecraft:netherite_ingot', p:'create:precision_mechanism',out: 'appgen:singularity_generator_4m',  comp: 'appgen:generating_component_16m',  lower: 'appgen:singularity_generator_1m' },
    { d:'kubejs:eternal_certus_gem', p:'kubejs:stella_mechanism',out: 'appgen:singularity_generator_16m', comp: 'appgen:generating_component_64m', lower: 'appgen:singularity_generator_4m' },
    { d:'kubejs:stella_quantum_gem', p:'kubejs:stella_mechanism',out: 'appgen:singularity_generator_64m', comp: 'appgen:generating_component_256m', lower: 'appgen:singularity_generator_16m' }

  ];

  for (const sg of SG_MT) {
    event.remove({ output: sg.out });

    create.mechanical_crafting(Item.of(sg.out), [
      'PDDDP',
      'DIQID',
      'DGCGD',
      'DIOID',
      'PDDDP'
    ], {
      P: Item.of(sg.p),
      D: Item.of(sg.d),
      I: Item.of('minecraft:iron_ingot'),
      Q: Item.of('ae2:quantum_ring'),
      G: Item.of(sg.lower),
      C: Item.of(sg.comp),
      O: Item.of('appgen:origination_processor')
    }).acceptMirrored(false);
  }

  // Source: RIKJS-neoforge-CreateM-Crafting.js
  event.custom({
    type: 'create:mechanical_crafting',
    accept_mirrored: false,
    category: 'misc',
    key: {
      'A': { 'item': 'minecraft:iron_ingot' },
      'B': { 'item': 'ae2:fluix_pearl' },
      'C': { 'item': 'create:brass_ingot' },
      'D': { 'item': 'ae2:quartz_fiber' },
      'E': { 'item': 'kubejs:eternal_certus_dust' },
      'F': { 'item': 'kubejs:stella_redstone_dust' }
    },
    pattern: [
      ' AAA ',
      'ABCBA',
      'ACDCA',
      'AEFEA',
      ' AAA '
    ],
    result: {
      id: 'ae2:wireless_receiver',
      count: 4
    }
  });

  event.custom({
    type: 'create:mechanical_crafting',
    accept_mirrored: false,
    category: 'misc',
    key: {
      'A': { 'item': 'kubejs:eternal_certus_gem' },
      'B': { 'item': 'advanced_ae:quantum_processor' },
      'C': { 'item': 'ae2:wireless_access_point' },
      'D': { 'item': 'minecraft:netherite_helmet' },
      'E': { 'item': 'advanced_ae:quantum_storage_component' },
      'F': { 'item': 'advanced_ae:quantum_alloy_plate' },
      'G': { 'item': 'kubejs:stella_mechanism' },
      'H': { 'item': 'kubejs:stella_quantum_gem' },
      'I': { 'item': 'minecraft:netherite_ingot' },
      'J': { 'item': 'ae2:calculation_processor' }
    },
    pattern: [
      ' AIA ',
      'IJCJI',
      'IBDBI',
      'IFEFI',
      ' GHG '
    ],
    result: {
      id: 'advanced_ae:quantum_helmet',
      count: 1
    }
  });

  event.custom({
    type: 'create:mechanical_crafting',
    accept_mirrored: false,
    category: 'misc',
    key: {
      'A': { 'item': 'kubejs:eternal_certus_gem' },
      'B': { 'item': 'advanced_ae:quantum_processor' },
      'C': { 'item': 'ae2:wireless_access_point' },
      'D': { 'item': 'minecraft:netherite_chestplate' },
      'E': { 'item': 'advanced_ae:quantum_storage_component' },
      'F': { 'item': 'advanced_ae:quantum_alloy_plate' },
      'G': { 'item': 'kubejs:stella_mechanism' },
      'H': { 'item': 'kubejs:stella_quantum_gem' },
      'I': { 'item': 'minecraft:netherite_ingot' },
      'J': { 'item': 'ae2:calculation_processor' }
    },
    pattern: [
      ' AIA ',
      'IJCJI',
      'IBDBI',
      'IFEFI',
      ' GHG '
    ],
    result: {
      id: 'advanced_ae:quantum_chestplate',
      count: 1
    }
  });

  event.custom({
    type: 'create:mechanical_crafting',
    accept_mirrored: false,
    category: 'misc',
    key: {
      'A': { 'item': 'kubejs:eternal_certus_gem' },
      'B': { 'item': 'advanced_ae:quantum_processor' },
      'C': { 'item': 'ae2:wireless_access_point' },
      'D': { 'item': 'minecraft:netherite_leggings' },
      'E': { 'item': 'advanced_ae:quantum_storage_component' },
      'F': { 'item': 'advanced_ae:quantum_alloy_plate' },
      'G': { 'item': 'kubejs:stella_mechanism' },
      'H': { 'item': 'kubejs:stella_quantum_gem' },
      'I': { 'item': 'minecraft:netherite_ingot' },
      'J': { 'item': 'ae2:calculation_processor' }
    },
    pattern: [
      ' AIA ',
      'IJCJI',
      'IBDBI',
      'IFEFI',
      ' GHG '
    ],
    result: {
      id: 'advanced_ae:quantum_leggings',
      count: 1
    }
  });

  event.custom({
    type: 'create:mechanical_crafting',
    accept_mirrored: false,
    category: 'misc',
    key: {
      'A': { 'item': 'kubejs:eternal_certus_gem' },
      'B': { 'item': 'advanced_ae:quantum_processor' },
      'C': { 'item': 'ae2:wireless_access_point' },
      'D': { 'item': 'minecraft:netherite_boots' },
      'E': { 'item': 'advanced_ae:quantum_storage_component' },
      'F': { 'item': 'advanced_ae:quantum_alloy_plate' },
      'G': { 'item': 'kubejs:stella_mechanism' },
      'H': { 'item': 'kubejs:stella_quantum_gem' },
      'I': { 'item': 'minecraft:netherite_ingot' },
      'J': { 'item': 'ae2:calculation_processor' }
    },
    pattern: [
      ' AIA ',
      'IJCJI',
      'IBDBI',
      'IFEFI',
      ' GHG '
    ],
    result: {
      id: 'advanced_ae:quantum_boots',
      count: 1
    }
  });

  // Source: RIKJS-neoforge-CreateRecipes.js
  create.mechanical_crafting(Item.of('minecraft:cobweb', 10), [
    'A A A',
    ' AAA ',
    'AAAAA',
    ' AAA ',
    'A A A'
  ], {
    A: 'minecraft:string'
  });

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
      A: Ingredient.of('#minecraft:swords'),
      B: Item.of('minecraft:gunpowder'),
      C: Item.of('kubejs:eternal_certus_gem')
    }
  ).acceptMirrored(false);

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

  create.mechanical_crafting(
    Item.of('kubejs:magic_devil_ball_fluid_clear', 2),
    [
      'AAAAA',
      ' ABA ',
      'AACAA',
      ' ABA ',
      'AAAAA'
    ],
    {
      A: Item.of('minecraft:bucket'),
      B: Item.of('minecraft:sponge'),
      C: Item.of('kubejs:eternal_certus_gem')
    }
  ).acceptMirrored(false);

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

});
