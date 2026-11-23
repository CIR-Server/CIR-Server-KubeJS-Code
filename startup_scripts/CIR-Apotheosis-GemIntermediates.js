// priority: 0
// Dedicated sequenced assembly items, matching the pack's existing intermediates.
StartupEvents.registry('item', event => {
  if (!Platform.isLoaded('apotheosis') || !Platform.isLoaded('create')) return;
  const definitions = [
  {
    "gem": "apotheosis:core/ballast",
    "id": "kubejs:incomplete_apotheosis_core_ballast",
    "texture": "apotheosis:items/gems/ballast",
    "requires": []
  },
  {
    "gem": "apotheosis:core/brawlers",
    "id": "kubejs:incomplete_apotheosis_core_brawlers",
    "texture": "apotheosis:items/gems/brawlers",
    "requires": []
  },
  {
    "gem": "apotheosis:core/breach",
    "id": "kubejs:incomplete_apotheosis_core_breach",
    "texture": "apotheosis:items/gems/breach",
    "requires": []
  },
  {
    "gem": "apotheosis:core/combatant",
    "id": "kubejs:incomplete_apotheosis_core_combatant",
    "texture": "apotheosis:items/gems/combatant",
    "requires": []
  },
  {
    "gem": "apotheosis:core/guardian",
    "id": "kubejs:incomplete_apotheosis_core_guardian",
    "texture": "apotheosis:items/gems/guardian",
    "requires": []
  },
  {
    "gem": "apotheosis:core/lightning",
    "id": "kubejs:incomplete_apotheosis_core_lightning",
    "texture": "apotheosis:items/gems/lightning",
    "requires": []
  },
  {
    "gem": "apotheosis:core/lunar",
    "id": "kubejs:incomplete_apotheosis_core_lunar",
    "texture": "apotheosis:items/gems/lunar",
    "requires": []
  },
  {
    "gem": "apotheosis:core/samurai",
    "id": "kubejs:incomplete_apotheosis_core_samurai",
    "texture": "apotheosis:items/gems/samurai",
    "requires": []
  },
  {
    "gem": "apotheosis:core/slipstream",
    "id": "kubejs:incomplete_apotheosis_core_slipstream",
    "texture": "apotheosis:items/gems/slipstream",
    "requires": []
  },
  {
    "gem": "apotheosis:core/solar",
    "id": "kubejs:incomplete_apotheosis_core_solar",
    "texture": "apotheosis:items/gems/solar",
    "requires": []
  },
  {
    "gem": "apotheosis:core/splendor",
    "id": "kubejs:incomplete_apotheosis_core_splendor",
    "texture": "apotheosis:items/gems/splendor",
    "requires": []
  },
  {
    "gem": "apotheosis:core/tyrannical",
    "id": "kubejs:incomplete_apotheosis_core_tyrannical",
    "texture": "apotheosis:items/gems/tyrannical",
    "requires": []
  },
  {
    "gem": "apotheosis:core/warlord",
    "id": "kubejs:incomplete_apotheosis_core_warlord",
    "texture": "apotheosis:items/gems/warlord",
    "requires": []
  },
  {
    "gem": "apotheosis:overworld/earth",
    "id": "kubejs:incomplete_apotheosis_overworld_earth",
    "texture": "apotheosis:items/gems/earth",
    "requires": []
  },
  {
    "gem": "apotheosis:overworld/royalty",
    "id": "kubejs:incomplete_apotheosis_overworld_royalty",
    "texture": "apotheosis:items/gems/royalty",
    "requires": []
  },
  {
    "gem": "apotheosis:overworld/verdant_ruin",
    "id": "kubejs:incomplete_apotheosis_overworld_verdant_ruin",
    "texture": "apotheosis:items/gems/verdant_ruin",
    "requires": []
  },
  {
    "gem": "apotheosis:the_end/mageslayer",
    "id": "kubejs:incomplete_apotheosis_the_end_mageslayer",
    "texture": "apotheosis:items/gems/mageslayer",
    "requires": []
  },
  {
    "gem": "apotheosis:the_nether/blood_lord",
    "id": "kubejs:incomplete_apotheosis_the_nether_blood_lord",
    "texture": "apotheosis:items/gems/blood_lord",
    "requires": []
  },
  {
    "gem": "apotheosis:the_nether/inferno",
    "id": "kubejs:incomplete_apotheosis_the_nether_inferno",
    "texture": "apotheosis:items/gems/inferno",
    "requires": [
      "apothic_enchanting"
    ]
  },
  {
    "gem": "apotheosis:the_nether/molten_breach",
    "id": "kubejs:incomplete_apotheosis_the_nether_molten_breach",
    "texture": "apotheosis:items/gems/molten_breach",
    "requires": []
  },
  {
    "gem": "apotheosis:twilight/forest",
    "id": "kubejs:incomplete_apotheosis_twilight_forest",
    "texture": "apotheosis:items/gems/forest",
    "requires": [
      "twilightforest"
    ]
  },
  {
    "gem": "apotheosis:twilight/queen",
    "id": "kubejs:incomplete_apotheosis_twilight_queen",
    "texture": "apotheosis:items/gems/queen",
    "requires": [
      "twilightforest"
    ]
  },
  {
    "gem": "apothic_compats:ars_nouveau/mana",
    "id": "kubejs:incomplete_apothic_compats_ars_nouveau_mana",
    "texture": "apothic_compats:item/gems/ars_nouveau/mana",
    "requires": [
      "ars_nouveau"
    ]
  },
  {
    "gem": "apothic_compats:malum/etheric",
    "id": "kubejs:incomplete_apothic_compats_malum_etheric",
    "texture": "apothic_compats:item/gems/malum/etheric",
    "requires": [
      "malum"
    ]
  },
  {
    "gem": "apothic_compats:malum/soul_stained",
    "id": "kubejs:incomplete_apothic_compats_malum_soul_stained",
    "texture": "apothic_compats:item/gems/malum/soul_stained",
    "requires": [
      "malum"
    ]
  },
  {
    "gem": "apothic_compats:malum/thief",
    "id": "kubejs:incomplete_apothic_compats_malum_thief",
    "texture": "apothic_compats:item/gems/malum/thief",
    "requires": [
      "malum"
    ]
  }
];
  definitions.forEach(definition => {
    if (!definition.requires.every(mod => Platform.isLoaded(mod))) return;
    event.create(definition.id, 'create:sequenced_assembly')
      .unstackable()
      .rarity('rare')
      .textures({ layer0: definition.texture, layer1: 'kubejs:item/incomplete_apotheosis_gem_overlay' });
  });
});
