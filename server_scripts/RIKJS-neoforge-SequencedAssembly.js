// kubejs/server_scripts/xxx.js
ServerEvents.recipes(event => {
  // 起个别名，后面好看一点
  let sequencedAssemblyRecipes = event.recipes.create.sequenced_assembly;

  // 人造钻石配方
  sequencedAssemblyRecipes(
    [
      CreateItem.of('minecraft:diamond', 0.8),     // 80%
      CreateItem.of(Item.of('minecraft:coal_block', 6), 0.15), // 15%
      CreateItem.of(Item.of('minecraft:coal_block', 5), 0.05)  // 5%
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
  //永恒强化玻璃配方
    sequencedAssemblyRecipes(
    [
      CreateItem.of('kubejs:eternal_reinforced_glass', 0.5),     // 50%
      CreateItem.of(Item.of('minecraft:glass', 2), 0.35), // 35%
      CreateItem.of(Item.of('create:framed_glass', 1), 0.15)  // 15%
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
          'kubejs:eternal_certus_gem'
        ]
      ),
      event.recipes.create.pressing(
        'kubejs:incomplete_eternal_reinforced_glass',
        'kubejs:incomplete_eternal_reinforced_glass'
      )
    ]
  )
  // [DW-修正 2026-11-01] 原写的是 'kubejs:incomplete_humanmade_diamond'（应是从人造钻石配方复制时漏改），
  // 与上方三步实际使用的 incomplete_eternal_reinforced_glass 不一致，已改为正确的过渡物品
  .transitionalItem('kubejs:incomplete_eternal_reinforced_glass')
  .loops(3);
  // 强化深板岩配方
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
      // 岩浆填充
      event.recipes.create.filling(
        'kubejs:incomplete_reinforced_deepslate',
        [
          'kubejs:incomplete_reinforced_deepslate',
          Fluid.of('minecraft:lava', 100)
        ]
      ),

      // 经验液填充
      event.recipes.create.filling(
        'kubejs:incomplete_reinforced_deepslate',
        [
          'kubejs:incomplete_reinforced_deepslate',
          Fluid.of('create_enchantment_industry:experience', 100)
        ]
      ),

      // 下界合金锭投掷
      event.recipes.create.deploying(
        'kubejs:incomplete_reinforced_deepslate',
        [
          'kubejs:incomplete_reinforced_deepslate',
          'minecraft:netherite_ingot'
        ]
      ),

      // 自定义红石粉投掷
      event.recipes.create.deploying(
        'kubejs:incomplete_reinforced_deepslate',
        [
          'kubejs:incomplete_reinforced_deepslate',
          'kubejs:stella_redstone_dust'
        ]
      ),

      // 压制
      event.recipes.create.pressing(
        'kubejs:incomplete_reinforced_deepslate',
        'kubejs:incomplete_reinforced_deepslate'
      )
    ]
  )
  .transitionalItem('kubejs:incomplete_reinforced_deepslate')
  .loops(3);

  // 紫水晶母岩配方
  sequencedAssemblyRecipes(
    [
      CreateItem.of('minecraft:budding_amethyst', 0.5),
      CreateItem.of(Item.of('minecraft:obsidian', 4), 0.2),
      CreateItem.of(Item.of('minecraft:amethyst_block', 8), 0.2),
      CreateItem.of(Item.of('minecraft:ancient_debris', 4), 0.1)
    ],
    'kubejs:manmade_budding_amethyst',
    [
      // 岩浆填充
      event.recipes.create.filling(
        'kubejs:incomplete_budding_amethyst',
        [
          'kubejs:incomplete_budding_amethyst',
          Fluid.of('minecraft:lava', 100)
        ]
      ),

      // 经验液填充
      event.recipes.create.filling(
        'kubejs:incomplete_budding_amethyst',
        [
          'kubejs:incomplete_budding_amethyst',
          Fluid.of('create_enchantment_industry:experience', 100)
        ]
      ),

      // 下界合金锭投掷
      event.recipes.create.deploying(
        'kubejs:incomplete_budding_amethyst',
        [
          'kubejs:incomplete_budding_amethyst',
          'minecraft:netherite_ingot'
        ]
      ),

      // 自定义红石粉投掷
      event.recipes.create.deploying(
        'kubejs:incomplete_budding_amethyst',
        [
          'kubejs:incomplete_budding_amethyst',
          'kubejs:stella_redstone_dust'
        ]
      ),

      // 压制
      event.recipes.create.pressing(
        'kubejs:incomplete_budding_amethyst',
        'kubejs:incomplete_budding_amethyst'
      )
    ]
  )
  .transitionalItem('kubejs:incomplete_budding_amethyst')
  .loops(3);

  // ===== [DW-搬入 2026-11-01] 以下为从 hardcore 服移植的 AE2 256K 存储组件序列装配 =====
  // [DW-修正 2026-11-01] 改用上面的简写 API 写法。原来用 event.custom + JSON 时，
  // filling 里的 {type:'fluid_stack'} 不被 Create 识别，报 "Failed to read required component"。
  // 这里改成 Fluid.of(流体, 数量)，和上面几个配方保持一致。
  sequencedAssemblyRecipes(
    [
      CreateItem.of('ae2:cell_component_256k', 0.8),
      CreateItem.of(Item.of('ae2:cell_component_64k', 6), 0.2)
    ],
    'kubejs:firstmade_cell_component_256k',
    [
      // 投掷：永恒赛特斯粉
      event.recipes.create.deploying(
        'kubejs:incomplete_cell_component_256k',
        [
          'kubejs:incomplete_cell_component_256k',
          'kubejs:eternal_certus_dust'
        ]
      ),
      // 灌注：强化液体
      event.recipes.create.filling(
        'kubejs:incomplete_cell_component_256k',
        [
          'kubejs:incomplete_cell_component_256k',
          Fluid.of('kubejs:reinforce_liquid', 100)
        ]
      ),
      // 灌注：经验液
      event.recipes.create.filling(
        'kubejs:incomplete_cell_component_256k',
        [
          'kubejs:incomplete_cell_component_256k',
          Fluid.of('create_enchantment_industry:experience', 200)
        ]
      ),
      // 投掷：奇点
      event.recipes.create.deploying(
        'kubejs:incomplete_cell_component_256k',
        [
          'kubejs:incomplete_cell_component_256k',
          'ae2:singularity'
        ]
      ),
      // 压制
      event.recipes.create.pressing(
        'kubejs:incomplete_cell_component_256k',
        'kubejs:incomplete_cell_component_256k'
      )
    ]
  )
  .transitionalItem('kubejs:incomplete_cell_component_256k')
  .loops(3);
});
