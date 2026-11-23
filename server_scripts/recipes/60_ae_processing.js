// priority: 0

// AE machine processing recipes.
// Sections are sorted by recipe type. Ingredients, outputs and settings are preserved.
ServerEvents.recipes(event => {

  // ============================================================
  // advanced_ae:reaction
  // ============================================================

  // Source: YunKJS-neoforge-Recipe.js
  event.custom({
    type: 'advanced_ae:reaction',
    input_energy: 1000000,
    input_fluid: {
      amount: 2000,
      ingredient: {
        fluid: 'kubejs:mysterious_liquid'
      }
    },
    input_items: [
      {
        amount: 32,
        ingredient: {
          item: 'kubejs:redstone_reinforce_gem'
        }
      },
      {
        amount: 32,
        ingredient: {
          item: 'kubejs:degeneration_gem'
        }
      },
      {
        amount: 32,
        ingredient: {
          item: 'ae2:certus_quartz_dust'
        }
      },
      {
        amount: 8,
        ingredient: {
          item: 'ae2:singularity'
        }
      },
      // 下界合金锭 -> 恩特罗注入锭
      {
        amount: 8,
        ingredient: {
          item: 'extendedae:entro_ingot'
        }
      },
      // 强化回响碎片 -> 原版回响碎片，2 -> 16
      {
        amount: 16,
        ingredient: {
          item: 'minecraft:echo_shard'
        }
      },
      // 任意一种常规普通宝石（16 种：core 13 + overworld 3）
      {
        amount: 2,
        ingredient: {
          type: 'neoforge:compound',
          children: [
          { type: 'neoforge:components', items: ['apotheosis:gem'], components: { 'apotheosis:gem': 'apotheosis:core/ballast', 'apotheosis:purity': 'normal' } },
          { type: 'neoforge:components', items: ['apotheosis:gem'], components: { 'apotheosis:gem': 'apotheosis:core/brawlers', 'apotheosis:purity': 'normal' } },
          { type: 'neoforge:components', items: ['apotheosis:gem'], components: { 'apotheosis:gem': 'apotheosis:core/breach', 'apotheosis:purity': 'normal' } },
          { type: 'neoforge:components', items: ['apotheosis:gem'], components: { 'apotheosis:gem': 'apotheosis:core/combatant', 'apotheosis:purity': 'normal' } },
          { type: 'neoforge:components', items: ['apotheosis:gem'], components: { 'apotheosis:gem': 'apotheosis:core/guardian', 'apotheosis:purity': 'normal' } },
          { type: 'neoforge:components', items: ['apotheosis:gem'], components: { 'apotheosis:gem': 'apotheosis:core/lightning', 'apotheosis:purity': 'normal' } },
          { type: 'neoforge:components', items: ['apotheosis:gem'], components: { 'apotheosis:gem': 'apotheosis:core/lunar', 'apotheosis:purity': 'normal' } },
          { type: 'neoforge:components', items: ['apotheosis:gem'], components: { 'apotheosis:gem': 'apotheosis:core/samurai', 'apotheosis:purity': 'normal' } },
          { type: 'neoforge:components', items: ['apotheosis:gem'], components: { 'apotheosis:gem': 'apotheosis:core/slipstream', 'apotheosis:purity': 'normal' } },
          { type: 'neoforge:components', items: ['apotheosis:gem'], components: { 'apotheosis:gem': 'apotheosis:core/solar', 'apotheosis:purity': 'normal' } },
          { type: 'neoforge:components', items: ['apotheosis:gem'], components: { 'apotheosis:gem': 'apotheosis:core/splendor', 'apotheosis:purity': 'normal' } },
          { type: 'neoforge:components', items: ['apotheosis:gem'], components: { 'apotheosis:gem': 'apotheosis:core/tyrannical', 'apotheosis:purity': 'normal' } },
          { type: 'neoforge:components', items: ['apotheosis:gem'], components: { 'apotheosis:gem': 'apotheosis:core/warlord', 'apotheosis:purity': 'normal' } },
          { type: 'neoforge:components', items: ['apotheosis:gem'], components: { 'apotheosis:gem': 'apotheosis:overworld/earth', 'apotheosis:purity': 'normal' } },
          { type: 'neoforge:components', items: ['apotheosis:gem'], components: { 'apotheosis:gem': 'apotheosis:overworld/royalty', 'apotheosis:purity': 'normal' } },
          { type: 'neoforge:components', items: ['apotheosis:gem'], components: { 'apotheosis:gem': 'apotheosis:overworld/verdant_ruin', 'apotheosis:purity': 'normal' } }
          ]
        }
      }
    ],
    output: {
      "#": 2,
      "#t": "ae2:i",
      "id": "kubejs:eternal_certus_gem"
    }
  }).id('kubejs:eternal_certus_gem_reaction');

  event.custom({
    type: 'advanced_ae:reaction',
    input_energy: 500000,
    input_fluid: {
      amount: 4000,
      ingredient: {
        fluid: 'minecraft:water'
      }
    },
    input_items: [
      {
        amount: 32,
        ingredient: {
          item: 'ae2:quartz_glass'
        }
      },
      {
        amount: 16,
        ingredient: {
          item: 'kubejs:reinforced_redstone_dust'
        }
      }
    ],
    output: {
      "#": 48,
      "#t": "ae2:i",
      "id": "kubejs:reinforced_quartz_glass"
    }
  });

  // 液体按序列组装产率换算：
  //   3 轮 = 300mb reinforce_liquid，期望 0.5 个玻璃
  //   -> 1 个玻璃 = 600mb  -> 4 个 = 2400mb
  event.custom({
    type: 'advanced_ae:reaction',
    input_energy: 500000,
    input_fluid: {
      amount: 2400,
      ingredient: {
        fluid: 'kubejs:reinforce_liquid'
      }
    },
    input_items: [
      {
        amount: 16,
        ingredient: {
          tag: 'c:glass_blocks'
        }
      },
      {
        amount: 16,
        ingredient: {
          item: 'kubejs:eternal_certus_dust'
        }
      }
    ],
    output: {
      "#": 4,
      "#t": "ae2:i",
      "id": "kubejs:eternal_reinforced_glass"
    }
  }).id('kubejs:eternal_reinforced_glass_reaction');

  event.custom({
    type: 'advanced_ae:reaction',
    input_energy: 500000,
    input_fluid: {
      amount: 3200,
      ingredient: {
        fluid: 'kubejs:reinforce_liquid'
      }
    },
    input_items: [
      {
        amount: 32,
        ingredient: {
          item: 'minecraft:redstone'
        }
      }
    ],
    output: {
      "#": 32,
      "#t": "ae2:i",
      "id": "kubejs:reinforced_redstone_dust"
    }
  });


  // Firstmade -> Tesla-charged -> reaction chamber. Each reaction yields ONE perfect gem.
  if (['apotheosis', 'create', 'advanced_ae', 'ae2', 'create_enchantment_industry']
      .every(mod => Platform.isLoaded(mod))) {
    ;(() => {
      const definitions = [{"gem":"apotheosis:core/ballast","charged":"kubejs:charged_firstmade_perfect_apotheosis_core_ballast","requires":[]},{"gem":"apotheosis:core/brawlers","charged":"kubejs:charged_firstmade_perfect_apotheosis_core_brawlers","requires":[]},{"gem":"apotheosis:core/breach","charged":"kubejs:charged_firstmade_perfect_apotheosis_core_breach","requires":[]},{"gem":"apotheosis:core/combatant","charged":"kubejs:charged_firstmade_perfect_apotheosis_core_combatant","requires":[]},{"gem":"apotheosis:core/guardian","charged":"kubejs:charged_firstmade_perfect_apotheosis_core_guardian","requires":[]},{"gem":"apotheosis:core/lightning","charged":"kubejs:charged_firstmade_perfect_apotheosis_core_lightning","requires":[]},{"gem":"apotheosis:core/lunar","charged":"kubejs:charged_firstmade_perfect_apotheosis_core_lunar","requires":[]},{"gem":"apotheosis:core/samurai","charged":"kubejs:charged_firstmade_perfect_apotheosis_core_samurai","requires":[]},{"gem":"apotheosis:core/slipstream","charged":"kubejs:charged_firstmade_perfect_apotheosis_core_slipstream","requires":[]},{"gem":"apotheosis:core/solar","charged":"kubejs:charged_firstmade_perfect_apotheosis_core_solar","requires":[]},{"gem":"apotheosis:core/splendor","charged":"kubejs:charged_firstmade_perfect_apotheosis_core_splendor","requires":[]},{"gem":"apotheosis:core/tyrannical","charged":"kubejs:charged_firstmade_perfect_apotheosis_core_tyrannical","requires":[]},{"gem":"apotheosis:core/warlord","charged":"kubejs:charged_firstmade_perfect_apotheosis_core_warlord","requires":[]},{"gem":"apotheosis:overworld/earth","charged":"kubejs:charged_firstmade_perfect_apotheosis_overworld_earth","requires":[]},{"gem":"apotheosis:overworld/royalty","charged":"kubejs:charged_firstmade_perfect_apotheosis_overworld_royalty","requires":[]},{"gem":"apotheosis:overworld/verdant_ruin","charged":"kubejs:charged_firstmade_perfect_apotheosis_overworld_verdant_ruin","requires":[]},{"gem":"apotheosis:the_end/mageslayer","charged":"kubejs:charged_firstmade_perfect_apotheosis_the_end_mageslayer","requires":[]},{"gem":"apotheosis:the_nether/blood_lord","charged":"kubejs:charged_firstmade_perfect_apotheosis_the_nether_blood_lord","requires":[]},{"gem":"apotheosis:the_nether/inferno","charged":"kubejs:charged_firstmade_perfect_apotheosis_the_nether_inferno","requires":["apothic_enchanting"]},{"gem":"apotheosis:the_nether/molten_breach","charged":"kubejs:charged_firstmade_perfect_apotheosis_the_nether_molten_breach","requires":[]},{"gem":"apotheosis:twilight/forest","charged":"kubejs:charged_firstmade_perfect_apotheosis_twilight_forest","requires":["twilightforest"]},{"gem":"apotheosis:twilight/queen","charged":"kubejs:charged_firstmade_perfect_apotheosis_twilight_queen","requires":["twilightforest"]},{"gem":"apothic_compats:ars_nouveau/mana","charged":"kubejs:charged_firstmade_perfect_apothic_compats_ars_nouveau_mana","requires":["apothic_compats","ars_nouveau"]},{"gem":"apothic_compats:malum/etheric","charged":"kubejs:charged_firstmade_perfect_apothic_compats_malum_etheric","requires":["apothic_compats","malum"]},{"gem":"apothic_compats:malum/soul_stained","charged":"kubejs:charged_firstmade_perfect_apothic_compats_malum_soul_stained","requires":["apothic_compats","malum"]},{"gem":"apothic_compats:malum/thief","charged":"kubejs:charged_firstmade_perfect_apothic_compats_malum_thief","requires":["apothic_compats","malum"]}];
      let count = 0;
      definitions.forEach(gem => {
        if (!gem.requires.every(mod => Platform.isLoaded(mod))) return;
        event.custom({type: 'advanced_ae:reaction', input_energy: 1000000,
          input_fluid: {amount: 200, ingredient: {fluid: 'create_enchantment_industry:crystal_essence'}},
          input_items: [
            {amount: 2, ingredient: {item: gem.charged}},
            {amount: 4, ingredient: {item: 'kubejs:stella_redstone_dust'}},
            {amount: 4, ingredient: {item: 'ae2:singularity'}},
            {amount: 8, ingredient: {item: 'minecraft:amethyst_shard'}},
            {amount: 8, ingredient: {item: 'minecraft:diamond'}},
            {amount: 16, ingredient: {item: 'ae2:sky_dust'}}
          ],
          output: {'#': 1, '#t': 'ae2:i', id: 'apotheosis:gem',
            components: {'apotheosis:gem': gem.gem, 'apotheosis:purity': 'perfect'}}
        }).id('kubejs:apotheosis/gem_reaction/' + gem.gem.replace(':', '/') + '/perfect');
        count++;
      });
      console.info('[CIR] Registered ' + count + ' perfect-gem reaction recipes (one gem per reaction).');
    })();
  }

  // ============================================================
  // extendedae:crystal_assembler
  // ============================================================

  // Source: RIKJS-neoforge-stella_mechanism_recipes.js
  event.remove({ id: 'extendedae:assembler/circuit_cutter' });

  event.custom({
    "type": "extendedae:crystal_assembler",
    "input_items": [

      { "ingredient": { "item": "extendedae:machine_frame" } },

      { "amount": 8, "ingredient": { "item": "ae2:engineering_processor" } },

      { "ingredient": { "item": "ae2:calculation_processor_press" } },

      { "ingredient": { "item": "ae2:engineering_processor_press" } },

      { "ingredient": { "item": "ae2:logic_processor_press" } },

      { "ingredient": { "item": "ae2:silicon_press" } },

      { "ingredient": { "item": "extendedae:concurrent_processor_press" } },

      { "ingredient": { "item": "minecraft:stonecutter" } },

      { "ingredient": { "item": "kubejs:stella_mechanism" } }
    ],
    "output": {
      "count": 1,
      "id": "extendedae:circuit_cutter"
    }
  });

  event.remove({ id: 'extendedae:assembler/wireless_connector' });

  event.custom({
    "type": "extendedae:crystal_assembler",
    "input_items": [

      { "ingredient": { "item": "extendedae:machine_frame" } },

      { "amount": 2, "ingredient": { "tag": "ae2:smart_dense_cable" } },

      { "amount": 2, "ingredient": { "item": "ae2:wireless_receiver" } },

      { "amount": 3, "ingredient": { "item": "ae2:wireless_booster" } },

      { "ingredient": { "item": "kubejs:stella_mechanism" } },

      { "ingredient": { "item": "create_things_and_misc:vibration_mechanism" } }
    ],
    "output": {
      "count": 2,
      "id": "extendedae:wireless_connect"
    }
  });

  event.remove({ id: 'extendedae:assembler/ex_drive' });

  event.custom({
    "type": "extendedae:crystal_assembler",
    "input_items": [
      { "ingredient": { "item": "ae2:drive" } },
      { "amount": 2, "ingredient": { "tag": "ae2:glass_cable" } },
      { "ingredient": { "item": "ae2:capacity_card" } },
      { "ingredient": { "item": "extendedae:concurrent_processor" } },
      { "ingredient": { "item": "kubejs:stella_mechanism" } }
    ],
    "output": {
      "count": 1,
      "id": "extendedae:ex_drive"
    }
  });

});
