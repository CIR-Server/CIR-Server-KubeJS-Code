ServerEvents.recipes(event => {

event.recipes.createoreexcavation.drilling(
      [
      CreateItem.of('kubejs:redstone_reinforce_gem',0.2),
      CreateItem.of('minecraft:blackstone',0.8),
      ], 'createoreexcavation:ore_vein_type/redstone_reinforce_gem_vein', 6000)
      .drill('createoreexcavation:diamond_drill')
    .stress(512)
    .id("kubejs:reinforced_gem_vein_excavation");
event.recipes.createoreexcavation.drilling(
      [
        CreateItem.of('kubejs:degeneration_gem',0.2),
        CreateItem.of('minecraft:netherrack',0.8),
      ], 'createoreexcavation:ore_vein_type/degeneration_gem_vein', 6000)
      .drill('createoreexcavation:diamond_drill')
    .stress(512)
    .id("kubejs:degeneration_gem_vein_excavation");
event.recipes.createoreexcavation.drilling(
      [
        CreateItem.of('expandeddelight:salt_rock')
      ], 'createoreexcavation:ore_vein_type/salt_rock_vein', 6000)
      .drill('createoreexcavation:drill')
    .stress(256)
    .id("kubejs:salt_rock_vein_excavation");
})
