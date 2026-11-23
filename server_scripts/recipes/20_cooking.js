// priority: 0

// Furnace, blast furnace and smoker recipes.
// Sections are sorted by recipe type. Ingredients, outputs and settings are preserved.
ServerEvents.recipes(event => {

  // ============================================================
  // minecraft:blasting
  // ============================================================

  // Source: YunKJS-neoforge-Recipe.js
  event.blasting( "minecraft:netherite_scrap", "kubejs:ancient_debris_dust", 0.1, 20 * 5);

  // ============================================================
  // minecraft:smelting
  // ============================================================

  // Source: YunKJS-neoforge-Recipe.js
  event.smelting("create:scorchia", "create:scoria", 0.1, 20 * 10);

  event.smelting( "minecraft:netherite_scrap", "kubejs:ancient_debris_dust", 0.1, 20 * 10);

  // ============================================================
  // minecraft:smoking
  // ============================================================

  // Source: YunKJS-neoforge-Recipe.js
  event.smoking("kubejs:fried_chinese_dumpling","farmersdelight:dumplings").cookingTime(200);

});


// ============================================================
// 面团：水 1000mb 版（Create 搅拌，原水桶版保留）
// ============================================================
ServerEvents.recipes(event => {
  event.recipes.create.mixing(
    Item.of('farmersdelight:wheat_dough', 3),
    [
      'minecraft:wheat',
      'minecraft:wheat',
      'minecraft:wheat',
      'expandeddelight:salt',
      Fluid.of('minecraft:water', 1000)
    ]
  )
})
