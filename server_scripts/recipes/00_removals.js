// priority: 0

// Recipe removals.
// Sections are sorted by recipe type. Ingredients, outputs and settings are preserved.
ServerEvents.recipes(event => {

  // ============================================================
  // ae2:inscriber
  // ============================================================

  // Source: ModFix-createappliedkinetics_recipes.js
  // Retain the four AE2 powder inscriber routes to avoid blocking progression.
  const removedInscriberRecipes = [
    'ae2:inscriber/silicon_print',
    'ae2:inscriber/logic_processor_print',
    'ae2:inscriber/calculation_processor_print',
    'ae2:inscriber/engineering_processor_print',
    'ae2:inscriber/silicon_press',
    'ae2:inscriber/logic_processor_press',
    'ae2:inscriber/calculation_processor_press',
    'ae2:inscriber/engineering_processor_press',
    'ae2:inscriber/logic_processor',
    'ae2:inscriber/calculation_processor',
    'ae2:inscriber/engineering_processor'
  ];

  removedInscriberRecipes.forEach(id => event.remove({ id: id }));

  // ============================================================
  // appgen:disabled_generators
  // ============================================================

  // Source: RIKJS-neoforge-AppliedGenerators.js
  const REMOVED_GENERATORS = [
    'appgen:flux_generator_64k',
    'appgen:flux_generator_256k',
    'appgen:flux_generator_1m',
    'appgen:flux_generator_4m',
    'appgen:flux_generator_16m',
    'appgen:flux_generator_64m',
    'appgen:flux_generator_256m'
  ];

  event.remove({ output: 'appgen:singularity_generator_256m' });

  for (const id of REMOVED_GENERATORS) {
    event.remove({ output: id });
  }

  // ============================================================
  // general:disabled_recipes
  // ============================================================

  // Source: YunKJS-neoforge-RemoveRecipe.js
  event.remove({ output: "minecraft:tnt_minecart" });

  event.remove({ output: "ae2:cell_component_64k" });

  event.remove({ output: "ae2:cell_component_256k" });

  event.remove({ output: "ae2:portable_item_cell_16k" });

  event.remove({ output: 'ae2:portable_fluid_cell_16k' });

  event.remove({ output: "ae2:portable_item_cell_64k" });

  event.remove({ output: 'ae2:portable_fluid_cell_64k' });

  event.remove({ output: "ae2:portable_item_cell_256k" });

  event.remove({ output: 'ae2:portable_fluid_cell_256k' });

  event.remove({ output: "ae2:wireless_booster" });

  event.remove({ output: "ae2:wireless_receiver" });

  event.remove({ output: "ae2:wireless_access_point" });

  event.remove({ output: "advanced_ae:quantum_helmet" });

  event.remove({ output: "advanced_ae:quantum_chestplate" });

  event.remove({ output: "advanced_ae:quantum_leggings" });

  event.remove({ output: "advanced_ae:quantum_boots" });

  event.remove({ output: "minecraft:netherrack", type: "create:mixing", mod:'createaddition'});

  event.remove({ type: 'create:mixing', input: 'createaddition:biomass', mod:'createaddition'});

  event.remove({ output: "waystones:warp_stone", mod:'waystones'});

  event.remove({ output: "waystones:warp_dust", mod:'waystones'});

  event.remove({ output: "waystones:dormant_shard", mod:'waystones'});

  event.remove({ output: "waystones:blank_scroll", mod:'waystones'});

  event.remove({ output: "waystones:warp_scroll", mod:'waystones'});

  event.remove({ output: "createdieselgenerators:chemical_turret", mod:'createdieselgenerators'});

  event.remove({ output: "extendedae:infinity_water_cell" });

  event.remove({ output: "extendedae:infinity_cobblestone_cell" });

  // Disable all recipe types and alternate routes producing infinite storage cells.
  event.remove({ output: "extendedae_plus:infinity_biginteger_cell" });

  // 闪电科技的无限存储元件：物品层已在 cir:locked 里永久锁死，这里把配方一并清掉。
  event.remove({ output: "ae2lt:infinite_storage_cell" });

  event.remove({ output: "ae2wtlib:quantum_bridge_card" });

  // ============================================================
  // 拆解类配方：只保留暮色森林的 uncrafting
  // [CIR 2026-11-21] 闪电科技的燃料拆解（彩虹猪咪）、AE2 存储元件拆解、
  //   神化打捞都能把廉价材料换成高价产物，全部禁用。
  //   twilightforest:uncrafting 保留。
  // ============================================================
  event.remove({ type: "ae2lt:rainbow_pigmee_color_cycle" });
  event.remove({ type: "ae2:storage_cell_disassembly" });
  event.remove({ type: "apotheosis:salvaging" });

});
