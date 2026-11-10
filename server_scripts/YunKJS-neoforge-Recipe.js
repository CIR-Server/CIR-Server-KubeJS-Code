// priority: 0

/**
 * @author LingyunAwA, bot_undefined
 * @name YunKJS-Recipe
 * @description 普通配方相关 KubeJS 脚本
 */

console.log('Loading KubeJS Code: "YunKJS-Recipe.js"');
ServerEvents.tags("item", event => {
  event.add("c:dead_coral_blocks",["minecraft:dead_bubble_coral_block","minecraft:dead_fire_coral_block","minecraft:dead_horn_coral_block","minecraft:dead_tube_coral_block"])
})
ServerEvents.recipes((e) => {
    // 无序合成
    e.shapeless("create:dough", "farmersdelight:wheat_dough");
    e.shapeless("farmersdelight:wheat_dough", "create:dough");
    // [DW-删除 2026-11-01] 已移除生汤圆(kubejs:raw_tangyuan)的无序合成配方
    // [DW-删除 2026-11-01] 无人机物流(create_mobile_packages)已从服务端移除，此配方输出物品不存在
    // e.shapeless('create_mobile_packages:portable_stock_ticker', ['create:stock_ticker', 'create:redstone_link', 'create:clipboard', 'create:andesite_casing', 'kubejs:stella_redstone_dust', 'minecraft:diamond']);
    e.shapeless("waystones:dormant_shard",["minecraft:flint","minecraft:diamond","waystones:warp_dust","waystones:warp_dust","kubejs:stella_redstone_dust"]);
    // 熔炉
    e.smelting("create:scorchia", "create:scoria", 0.1, 20 * 10);
    e.smelting( "minecraft:netherite_scrap", "kubejs:ancient_debris_dust", 0.1, 20 * 10);
    e.blasting( "minecraft:netherite_scrap", "kubejs:ancient_debris_dust", 0.1, 20 * 5);
    e.smoking("kubejs:fried_chinese_dumpling","farmersdelight:dumplings").cookingTime(200)
    //有序合成
    e.shaped(
    Item.of('minecraft:elytra', 1), // arg 1: output
     [
       'ADA',
       'BCB', // arg 2: the shape (array of strings)
       'BEB'
     ],
     {
       A: 'minecraft:feather',
       B: 'minecraft:phantom_membrane',  //arg 3: the mapping object
       C: 'minecraft:nether_star',
       D: 'minecraft:diamond',
       E: 'minecraft:netherite_ingot'
     }
     );
     e.shaped(
     Item.of('minecraft:heart_of_the_sea', 1), // arg 1: output
     [
      'ABA',
      'BCB', // arg 2: the shape (array of strings)
      'ABA'
     ],
     {
       A: 'minecraft:diamond',
       B: 'kubejs:redstone_reinforce_gem',  //arg 3: the mapping object
       C: 'minecraft:beacon'
     }
     );
      // [DW-搬入 2026-11-01] 从 hardcore 服搬入：AE2 64K 存储组件自定义配方
      e.shaped(
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
      )
      e.shaped(
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
      )
      e.shaped(
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
      )
      e.shaped(
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
      )
      // [DW-搬入 2026-11-01] 从 hardcore 服搬入：AE2 256K 组件 / 无线增幅器 / 无线接入点自定义配方
      e.shaped(
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
      )
      e.shaped(
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
      )
      e.shaped(
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
      )
      e.shaped(
        Item.of("minecraft:crying_obsidian",8),
        [
          'AAA',
          'ABA',
          'AAA'
        ],
        {
          A: "minecraft:obsidian",
          // [DW-修正 2026-11-01] 按 hardcore 服统一：哭泣的黑曜石改用 永恒赛特斯粉(eternal_certus_dust)，原来用的是 永恒赛特斯宝石(gem)
          B: "kubejs:eternal_certus_dust"
        }
      )
      e.shaped(
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
      )
      e.shaped(
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
      )
    // ===== [DW-搬入 2026-11-01] 以下为从 hardcore 服移植的 AdvancedAE 反应仓配方 =====
    e.custom({
      type: 'advanced_ae:reaction',
      input_energy: 1000000,
      input_fluid: {
        amount: 4000,
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
        {
          amount: 4,
          ingredient: {
            item: 'minecraft:netherite_ingot'
          }
        },
        {
          amount: 2,
          ingredient: {
            item: 'deeperdarker:reinforced_echo_shard'
          }
        }
      ],
      output: {
        "#": 2,
        "#t": "ae2:i",
        "id": "kubejs:eternal_certus_gem"
      }
    }).id('kubejs:eternal_certus_gem_reaction')
    // [DW-搬入 2026-11-01] AdvancedAE 反应仓：强化石英玻璃
    e.custom({
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
    })
    // [DW-搬入 2026-11-01] AdvancedAE 反应仓：永恒强化玻璃
    e.custom({
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
        "#": 8,
        "#t": "ae2:i",
        "id": "kubejs:eternal_reinforced_glass"
      }
    })

    // ================================================================
    // [CIR-新增 2026-11-10] 强化红石粉 / 星辉红石粉 反应仓配方
    //   原配方：强化粉 = Create 填充（1 红石 + 100mb → 1 个）
    //           星辉粉 = Create 搅拌（8 红石 + 1 星辉量子宝石 → 8 个固定产出）
    //   反应仓不吃概率，只按固定产出折算，统一放大到 32 个。
    // ================================================================

    // 强化红石粉：原 1 红石 + 100mb → 1 个，放大 32 倍
    e.custom({
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
    })

});

   
