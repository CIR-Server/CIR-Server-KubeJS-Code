ItemEvents.modification(event => {
    event.modify('reinforced_deepslate', item => {
      item.rarity = 'epic'
    })
    event.modify('budding_amethyst', item => {
      item.rarity = 'epic'
    })
    event.modify('netherite_ingot', item => {
      item.rarity = 'uncommon'
    })
    event.modify('netherite_block', item => {
      item.rarity = 'uncommon'
    })
    event.modify('kubejs:raw_reinforced_deepslate', item => {
      item.rarity = 'uncommon'
    })
    event.modify('kubejs:manmade_budding_amethyst', item => {
      item.rarity = 'uncommon'
    })
    event.modify('kubejs:superblock', item => {
      item.rarity = 'uncommon'
    })
    event.modify('kubejs:eternal_reinforced_glass', item => {
      item.rarity = 'epic'
    })
    // [DW-搬入 2026-11-01] 从 hardcore 服搬入：AE2 相关物品稀有度设置
    event.modify('kubejs:reinforced_quartz_glass',item => {
      item.rarity = 'rare'
    })
    event.modify('ae2:cell_component_64k', item => {
      item.rarity = 'rare'
    })
    event.modify('ae2:cell_component_256k', item => {
      item.rarity = 'epic'
    })
    event.modify('appflux:core_64m', item => {
      item.rarity = 'uncommon'
    })
    event.modify('appflux:core_256m', item => {
      item.rarity = 'rare'
    })
    // [CIR-改动 2026-11-06] Applied Generators 产能组件的高档位稀有度
    event.modify('appgen:generating_component_64m', item => {
      item.rarity = 'uncommon'
    })
    event.modify('appgen:generating_component_256m', item => {
      item.rarity = 'rare'
    })
    // [CIR-改动 2026-11-06] Applied Generators 奇点发电机 1M ~ 256M 的稀有度
    event.modify('appgen:singularity_generator_1m', item => {
      item.rarity = 'uncommon'
    })
    event.modify('appgen:singularity_generator_4m', item => {
      item.rarity = 'uncommon'
    })
    event.modify('appgen:singularity_generator_16m', item => {
      item.rarity = 'rare'
    })
    event.modify('appgen:singularity_generator_64m', item => {
      item.rarity = 'epic'
    })
    event.modify('appgen:singularity_generator_256m', item => {
      item.rarity = 'epic'
    })
    event.modify('kubejs:reinforce_liquid_bucket', item => {
      item.rarity = 'rare'
    })
    event.modify('kubejs:mysterious_liquid_bucket', item => {
      item.rarity = 'rare'
    })
    event.modify('create:blaze_cake',item => {
      item.food = {
        nutrition:4,
        saturation:1.5,
        canAlwaysEat:true,
        eatSeconds:2
      }
    }) 
    event.modify('create_enchantment_industry:experience_cake',item => {
      item.food = {
        nutrition:4,
        saturation:1.5,
        canAlwaysEat:true,
        eatSeconds:2
      }
    })
  })
