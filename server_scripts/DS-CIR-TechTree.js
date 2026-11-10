// [CIR-科技树 2026-11-09] Chapters 阶段定义
//
// defineStage(stage, [清单]) 的语义：
//   清单里的物品，玩家拥有这个 stage 才解锁；没有就锁着。
//   同一个物品可被多个 stage 列出，玩家有任意一个就解锁。
//
// 五档：
//   cir:stone_age     序章「进入主世界」 → 陨石物品 + 三套石英工具 + 锻造模板
//   cir:iron_age      获得铁锭           → Create 本体
//   cir:andesite_age  做出安山件         → Create 本体 + 全部附属
//   cir:precision_age 上交精密构件       → AE2 基础（排除 7 类）
//   cir:alien_age     外星科技           → AE2 全部（排除发电机/组件）
//   cir:locked        永不发放           → 强化玻璃 / 星辉构件 / 永恒宝石配方
//
// 注意：KubeJS 的 Rhino 不允许函数体内的 const 在重复调用时重新声明
// （redeclaration of var xxx），所以这里所有逻辑都内联，不抽函数。
//
// 用 ServerEvents.recipes 而不是 ServerEvents.loaded —— 前者每次 reload 都触发。

ServerEvents.recipes(event => {

  const Registry = Java.loadClass("net.minecraft.core.registries.BuiltInRegistries")

  // ================================================================
  // Create 侧：本体 / 附属
  // ================================================================
  const CREATE_BASE = ['@create']

  const CREATE_ADDONS = [
    '@createaddition',
    '@createdieselgenerators',
    '@create_enchantment_industry',
    '@create_central_kitchen',
    '@create_things_and_misc',
    '@create_oreexcavation',
    '@create_power_loader',
    '@create_dragons_plus',
    '@create_jetpack',
    '@createprism',
    '@createcclogistics',
    '@create_pattern_schematics',
    '@create_rustic_structures',
    '@create_waystones_recipes',
    '@createmechanicalconfection',
    '@create_integrated_farming',
    '@create_confectionery',
    '@createthreadedtrains',
    '@createrailwaysnavigator',
    '@createstockbridge',
    '@extra_gauges',
    '@smart_bounds',
    '@rolling_gate',
    '@deployer',
    '@ccbr',
    '@createdeco',
    '@dndecor',
    '@copycats',
    '@interiors'
  ]

  // ================================================================
  // AE2 系物品清单（硬编码，从注册表导出）
  // 运行时遍历在 Rhino 里拿不到正确的字符串类型，改成写死。
  // 模组更新后需要重新导出。
  // ================================================================
  const AE2_NS = [
    'ae2',
    'extendedae',
    'advanced_ae',
    'ae2wtlib',
    'glodium',
    'wcwt'
  ]

  console.info('[CIR] Registry.ITEM = ' + Registry.ITEM)
  console.info('[CIR] Registry.ITEM.keySet() = ' + Registry.ITEM.keySet())
  console.info('[CIR] keySet size = ' + Registry.ITEM.keySet().size())
  // AE2 系全部物品（从注册表导出，617 个）
  const ALL_AE2_ITEMS = [
    '﻿advanced_ae:adv_pattern_encoder',
    'advanced_ae:adv_pattern_provider',
    'advanced_ae:adv_pattern_provider_capacity_upgrade',
    'advanced_ae:adv_pattern_provider_part',
    'advanced_ae:adv_pattern_provider_upgrade',
    'advanced_ae:adv_processing_pattern',
    'advanced_ae:advanced_io_bus_part',
    'advanced_ae:attack_speed_card',
    'advanced_ae:auto_feeding_card',
    'advanced_ae:auto_stock_card',
    'advanced_ae:camo_card',
    'advanced_ae:data_entangler',
    'advanced_ae:evasion_card',
    'advanced_ae:flight_card',
    'advanced_ae:flight_drift_card',
    'advanced_ae:hp_buffer_card',
    'advanced_ae:import_export_bus_part',
    'advanced_ae:jump_height_card',
    'advanced_ae:lava_immunity_card',
    'advanced_ae:luck_card',
    'advanced_ae:magnet_card',
    'advanced_ae:night_vision_card',
    'advanced_ae:pick_craft_card',
    'advanced_ae:portable_workbench_card',
    'advanced_ae:printed_quantum_processor',
    'advanced_ae:quantum_accelerator',
    'advanced_ae:quantum_alloy',
    'advanced_ae:quantum_alloy_block',
    'advanced_ae:quantum_alloy_plate',
    'advanced_ae:quantum_alloy_slab',
    'advanced_ae:quantum_alloy_stairs',
    'advanced_ae:quantum_alloy_wall',
    'advanced_ae:quantum_boots',
    'advanced_ae:quantum_chestplate',
    'advanced_ae:quantum_core',
    'advanced_ae:quantum_crafter',
    'advanced_ae:quantum_crafter_terminal',
    'advanced_ae:quantum_helmet',
    'advanced_ae:quantum_infused_dust',
    'advanced_ae:quantum_infusion_bucket',
    'advanced_ae:quantum_leggings',
    'advanced_ae:quantum_multi_threader',
    'advanced_ae:quantum_processor',
    'advanced_ae:quantum_processor_press',
    'advanced_ae:quantum_storage_128',
    'advanced_ae:quantum_storage_256',
    'advanced_ae:quantum_storage_component',
    'advanced_ae:quantum_structure',
    'advanced_ae:quantum_unit',
    'advanced_ae:quantum_upgrade_base',
    'advanced_ae:reach_card',
    'advanced_ae:reaction_chamber',
    'advanced_ae:recharging_card',
    'advanced_ae:regeneration_card',
    'advanced_ae:shattered_singularity',
    'advanced_ae:small_adv_pattern_provider',
    'advanced_ae:small_adv_pattern_provider_part',
    'advanced_ae:sprint_speed_card',
    'advanced_ae:step_assist_card',
    'advanced_ae:stock_export_bus_part',
    'advanced_ae:strength_card',
    'advanced_ae:swim_speed_card',
    'advanced_ae:throughput_monitor',
    'advanced_ae:throughput_monitor_configurator',
    'advanced_ae:walk_speed_card',
    'advanced_ae:water_breathing_card',
    'advanced_ae:wireless_quantum_crafter_terminal',
    'ae2:16k_crafting_storage',
    'ae2:1k_crafting_storage',
    'ae2:256k_crafting_storage',
    'ae2:4k_crafting_storage',
    'ae2:64k_crafting_storage',
    'ae2:advanced_card',
    'ae2:annihilation_core',
    'ae2:annihilation_plane',
    'ae2:basic_card',
    'ae2:black_covered_cable',
    'ae2:black_covered_dense_cable',
    'ae2:black_glass_cable',
    'ae2:black_lumen_paint_ball',
    'ae2:black_paint_ball',
    'ae2:black_smart_cable',
    'ae2:black_smart_dense_cable',
    'ae2:blank_pattern',
    'ae2:blue_covered_cable',
    'ae2:blue_covered_dense_cable',
    'ae2:blue_glass_cable',
    'ae2:blue_lumen_paint_ball',
    'ae2:blue_paint_ball',
    'ae2:blue_smart_cable',
    'ae2:blue_smart_dense_cable',
    'ae2:brown_covered_cable',
    'ae2:brown_covered_dense_cable',
    'ae2:brown_glass_cable',
    'ae2:brown_lumen_paint_ball',
    'ae2:brown_paint_ball',
    'ae2:brown_smart_cable',
    'ae2:brown_smart_dense_cable',
    'ae2:cable_anchor',
    'ae2:cable_bus',
    'ae2:cable_energy_acceptor',
    'ae2:cable_interface',
    'ae2:cable_pattern_provider',
    'ae2:calculation_processor',
    'ae2:calculation_processor_press',
    'ae2:capacity_card',
    'ae2:cell_component_16k',
    'ae2:cell_component_1k',
    'ae2:cell_component_256k',
    'ae2:cell_component_4k',
    'ae2:cell_component_64k',
    'ae2:cell_workbench',
    'ae2:certus_quartz_axe',
    'ae2:certus_quartz_crystal',
    'ae2:certus_quartz_cutting_knife',
    'ae2:certus_quartz_dust',
    'ae2:certus_quartz_hoe',
    'ae2:certus_quartz_pickaxe',
    'ae2:certus_quartz_shovel',
    'ae2:certus_quartz_sword',
    'ae2:certus_quartz_wrench',
    'ae2:charged_certus_quartz_crystal',
    'ae2:charged_staff',
    'ae2:charger',
    'ae2:chest',
    'ae2:chipped_budding_quartz',
    'ae2:chiseled_quartz_block',
    'ae2:chiseled_quartz_slab',
    'ae2:chiseled_quartz_stairs',
    'ae2:chiseled_quartz_wall',
    'ae2:color_applicator',
    'ae2:condenser',
    'ae2:controller',
    'ae2:conversion_monitor',
    'ae2:crafting_accelerator',
    'ae2:crafting_card',
    'ae2:crafting_monitor',
    'ae2:crafting_pattern',
    'ae2:crafting_terminal',
    'ae2:crafting_unit',
    'ae2:crank',
    'ae2:creative_energy_cell',
    'ae2:creative_storage_cell',
    'ae2:crystal_resonance_generator',
    'ae2:cut_quartz_block',
    'ae2:cut_quartz_slab',
    'ae2:cut_quartz_stairs',
    'ae2:cut_quartz_wall',
    'ae2:cyan_covered_cable',
    'ae2:cyan_covered_dense_cable',
    'ae2:cyan_glass_cable',
    'ae2:cyan_lumen_paint_ball',
    'ae2:cyan_paint_ball',
    'ae2:cyan_smart_cable',
    'ae2:cyan_smart_dense_cable',
    'ae2:damaged_budding_quartz',
    'ae2:dark_monitor',
    'ae2:debug_card',
    'ae2:debug_cube_gen',
    'ae2:debug_energy_gen',
    'ae2:debug_eraser',
    'ae2:debug_item_gen',
    'ae2:debug_meteorite_placer',
    'ae2:debug_phantom_node',
    'ae2:debug_replicator_card',
    'ae2:dense_energy_cell',
    'ae2:drive',
    'ae2:ender_dust',
    'ae2:energy_acceptor',
    'ae2:energy_card',
    'ae2:energy_cell',
    'ae2:energy_level_emitter',
    'ae2:engineering_processor',
    'ae2:engineering_processor_press',
    'ae2:entropy_manipulator',
    'ae2:equal_distribution_card',
    'ae2:export_bus',
    'ae2:facade',
    'ae2:fe_p2p_tunnel',
    'ae2:flawed_budding_quartz',
    'ae2:flawless_budding_quartz',
    'ae2:fluid_cell_housing',
    'ae2:fluid_p2p_tunnel',
    'ae2:fluid_storage_cell_16k',
    'ae2:fluid_storage_cell_1k',
    'ae2:fluid_storage_cell_256k',
    'ae2:fluid_storage_cell_4k',
    'ae2:fluid_storage_cell_64k',
    'ae2:fluix_axe',
    'ae2:fluix_block',
    'ae2:fluix_covered_cable',
    'ae2:fluix_covered_dense_cable',
    'ae2:fluix_crystal',
    'ae2:fluix_dust',
    'ae2:fluix_glass_cable',
    'ae2:fluix_hoe',
    'ae2:fluix_pearl',
    'ae2:fluix_pickaxe',
    'ae2:fluix_shovel',
    'ae2:fluix_slab',
    'ae2:fluix_smart_cable',
    'ae2:fluix_smart_dense_cable',
    'ae2:fluix_stairs',
    'ae2:fluix_sword',
    'ae2:fluix_upgrade_smithing_template',
    'ae2:fluix_wall',
    'ae2:formation_core',
    'ae2:formation_plane',
    'ae2:fuzzy_card',
    'ae2:gray_covered_cable',
    'ae2:gray_covered_dense_cable',
    'ae2:gray_glass_cable',
    'ae2:gray_lumen_paint_ball',
    'ae2:gray_paint_ball',
    'ae2:gray_smart_cable',
    'ae2:gray_smart_dense_cable',
    'ae2:green_covered_cable',
    'ae2:green_covered_dense_cable',
    'ae2:green_glass_cable',
    'ae2:green_lumen_paint_ball',
    'ae2:green_paint_ball',
    'ae2:green_smart_cable',
    'ae2:green_smart_dense_cable',
    'ae2:growth_accelerator',
    'ae2:guide',
    'ae2:import_bus',
    'ae2:inscriber',
    'ae2:interface',
    'ae2:inverted_toggle_bus',
    'ae2:inverter_card',
    'ae2:io_port',
    'ae2:item_cell_housing',
    'ae2:item_p2p_tunnel',
    'ae2:item_storage_cell_16k',
    'ae2:item_storage_cell_1k',
    'ae2:item_storage_cell_256k',
    'ae2:item_storage_cell_4k',
    'ae2:item_storage_cell_64k',
    'ae2:large_quartz_bud',
    'ae2:level_emitter',
    'ae2:light_blue_covered_cable',
    'ae2:light_blue_covered_dense_cable',
    'ae2:light_blue_glass_cable',
    'ae2:light_blue_lumen_paint_ball',
    'ae2:light_blue_paint_ball',
    'ae2:light_blue_smart_cable',
    'ae2:light_blue_smart_dense_cable',
    'ae2:light_detector',
    'ae2:light_gray_covered_cable',
    'ae2:light_gray_covered_dense_cable',
    'ae2:light_gray_glass_cable',
    'ae2:light_gray_lumen_paint_ball',
    'ae2:light_gray_paint_ball',
    'ae2:light_gray_smart_cable',
    'ae2:light_gray_smart_dense_cable',
    'ae2:light_p2p_tunnel',
    'ae2:lime_covered_cable',
    'ae2:lime_covered_dense_cable',
    'ae2:lime_glass_cable',
    'ae2:lime_lumen_paint_ball',
    'ae2:lime_paint_ball',
    'ae2:lime_smart_cable',
    'ae2:lime_smart_dense_cable',
    'ae2:logic_processor',
    'ae2:logic_processor_press',
    'ae2:magenta_covered_cable',
    'ae2:magenta_covered_dense_cable',
    'ae2:magenta_glass_cable',
    'ae2:magenta_lumen_paint_ball',
    'ae2:magenta_paint_ball',
    'ae2:magenta_smart_cable',
    'ae2:magenta_smart_dense_cable',
    'ae2:matrix_frame',
    'ae2:matter_ball',
    'ae2:matter_cannon',
    'ae2:me_p2p_tunnel',
    'ae2:medium_quartz_bud',
    'ae2:memory_card',
    'ae2:meteorite_compass',
    'ae2:missing_content',
    'ae2:molecular_assembler',
    'ae2:monitor',
    'ae2:mysterious_cube',
    'ae2:name_press',
    'ae2:nether_quartz_axe',
    'ae2:nether_quartz_cutting_knife',
    'ae2:nether_quartz_hoe',
    'ae2:nether_quartz_pickaxe',
    'ae2:nether_quartz_shovel',
    'ae2:nether_quartz_sword',
    'ae2:nether_quartz_wrench',
    'ae2:network_tool',
    'ae2:not_so_mysterious_cube',
    'ae2:orange_covered_cable',
    'ae2:orange_covered_dense_cable',
    'ae2:orange_glass_cable',
    'ae2:orange_lumen_paint_ball',
    'ae2:orange_paint_ball',
    'ae2:orange_smart_cable',
    'ae2:orange_smart_dense_cable',
    'ae2:paint',
    'ae2:pattern_access_terminal',
    'ae2:pattern_encoding_terminal',
    'ae2:pattern_provider',
    'ae2:pink_covered_cable',
    'ae2:pink_covered_dense_cable',
    'ae2:pink_glass_cable',
    'ae2:pink_lumen_paint_ball',
    'ae2:pink_paint_ball',
    'ae2:pink_smart_cable',
    'ae2:pink_smart_dense_cable',
    'ae2:portable_fluid_cell_16k',
    'ae2:portable_fluid_cell_1k',
    'ae2:portable_fluid_cell_256k',
    'ae2:portable_fluid_cell_4k',
    'ae2:portable_fluid_cell_64k',
    'ae2:portable_item_cell_16k',
    'ae2:portable_item_cell_1k',
    'ae2:portable_item_cell_256k',
    'ae2:portable_item_cell_4k',
    'ae2:portable_item_cell_64k',
    'ae2:printed_calculation_processor',
    'ae2:printed_engineering_processor',
    'ae2:printed_logic_processor',
    'ae2:printed_silicon',
    'ae2:processing_pattern',
    'ae2:purple_covered_cable',
    'ae2:purple_covered_dense_cable',
    'ae2:purple_glass_cable',
    'ae2:purple_lumen_paint_ball',
    'ae2:purple_paint_ball',
    'ae2:purple_smart_cable',
    'ae2:purple_smart_dense_cable',
    'ae2:quantum_entangled_singularity',
    'ae2:quantum_link',
    'ae2:quantum_ring',
    'ae2:quartz_block',
    'ae2:quartz_brick_slab',
    'ae2:quartz_brick_stairs',
    'ae2:quartz_brick_wall',
    'ae2:quartz_bricks',
    'ae2:quartz_cluster',
    'ae2:quartz_fiber',
    'ae2:quartz_fixture',
    'ae2:quartz_glass',
    'ae2:quartz_pillar',
    'ae2:quartz_pillar_slab',
    'ae2:quartz_pillar_stairs',
    'ae2:quartz_pillar_wall',
    'ae2:quartz_slab',
    'ae2:quartz_stairs',
    'ae2:quartz_vibrant_glass',
    'ae2:quartz_wall',
    'ae2:red_covered_cable',
    'ae2:red_covered_dense_cable',
    'ae2:red_glass_cable',
    'ae2:red_lumen_paint_ball',
    'ae2:red_paint_ball',
    'ae2:red_smart_cable',
    'ae2:red_smart_dense_cable',
    'ae2:redstone_card',
    'ae2:redstone_p2p_tunnel',
    'ae2:semi_dark_monitor',
    'ae2:silicon',
    'ae2:silicon_press',
    'ae2:singularity',
    'ae2:sky_dust',
    'ae2:sky_stone_block',
    'ae2:sky_stone_brick',
    'ae2:sky_stone_brick_slab',
    'ae2:sky_stone_brick_stairs',
    'ae2:sky_stone_brick_wall',
    'ae2:sky_stone_chest',
    'ae2:sky_stone_slab',
    'ae2:sky_stone_small_brick',
    'ae2:sky_stone_small_brick_slab',
    'ae2:sky_stone_small_brick_stairs',
    'ae2:sky_stone_small_brick_wall',
    'ae2:sky_stone_stairs',
    'ae2:sky_stone_tank',
    'ae2:sky_stone_wall',
    'ae2:small_quartz_bud',
    'ae2:smithing_table_pattern',
    'ae2:smooth_quartz_block',
    'ae2:smooth_quartz_slab',
    'ae2:smooth_quartz_stairs',
    'ae2:smooth_quartz_wall',
    'ae2:smooth_sky_stone_block',
    'ae2:smooth_sky_stone_chest',
    'ae2:smooth_sky_stone_slab',
    'ae2:smooth_sky_stone_stairs',
    'ae2:smooth_sky_stone_wall',
    'ae2:spatial_anchor',
    'ae2:spatial_cell_component_128',
    'ae2:spatial_cell_component_16',
    'ae2:spatial_cell_component_2',
    'ae2:spatial_io_port',
    'ae2:spatial_pylon',
    'ae2:spatial_storage_cell_128',
    'ae2:spatial_storage_cell_16',
    'ae2:spatial_storage_cell_2',
    'ae2:speed_card',
    'ae2:stonecutting_pattern',
    'ae2:storage_bus',
    'ae2:storage_monitor',
    'ae2:terminal',
    'ae2:tiny_tnt',
    'ae2:toggle_bus',
    'ae2:vibration_chamber',
    'ae2:view_cell',
    'ae2:void_card',
    'ae2:white_covered_cable',
    'ae2:white_covered_dense_cable',
    'ae2:white_glass_cable',
    'ae2:white_lumen_paint_ball',
    'ae2:white_paint_ball',
    'ae2:white_smart_cable',
    'ae2:white_smart_dense_cable',
    'ae2:wireless_access_point',
    'ae2:wireless_booster',
    'ae2:wireless_crafting_terminal',
    'ae2:wireless_receiver',
    'ae2:wireless_terminal',
    'ae2:wrapped_generic_stack',
    'ae2:yellow_covered_cable',
    'ae2:yellow_covered_dense_cable',
    'ae2:yellow_glass_cable',
    'ae2:yellow_lumen_paint_ball',
    'ae2:yellow_paint_ball',
    'ae2:yellow_smart_cable',
    'ae2:yellow_smart_dense_cable',
    'ae2wtlib:magnet_card',
    'ae2wtlib:quantum_bridge_card',
    'ae2wtlib:wireless_pattern_access_terminal',
    'ae2wtlib:wireless_pattern_encoding_terminal',
    'ae2wtlib:wireless_universal_terminal',
    'appflux:charged_redstone',
    'appflux:charged_redstone_block',
    'appflux:core_16k',
    'appflux:core_16m',
    'appflux:core_1k',
    'appflux:core_1m',
    'appflux:core_256k',
    'appflux:core_256m',
    'appflux:core_4k',
    'appflux:core_4m',
    'appflux:core_64k',
    'appflux:core_64m',
    'appflux:diamond_dust',
    'appflux:emerald_dust',
    'appflux:energy_processor',
    'appflux:energy_processor_press',
    'appflux:fe_16k_cell',
    'appflux:fe_16k_portable_cell',
    'appflux:fe_16m_cell',
    'appflux:fe_16m_portable_cell',
    'appflux:fe_1k_cell',
    'appflux:fe_1k_portable_cell',
    'appflux:fe_1m_cell',
    'appflux:fe_1m_portable_cell',
    'appflux:fe_256k_cell',
    'appflux:fe_256k_portable_cell',
    'appflux:fe_256m_cell',
    'appflux:fe_256m_portable_cell',
    'appflux:fe_4k_cell',
    'appflux:fe_4k_portable_cell',
    'appflux:fe_4m_cell',
    'appflux:fe_4m_portable_cell',
    'appflux:fe_64k_cell',
    'appflux:fe_64k_portable_cell',
    'appflux:fe_64m_cell',
    'appflux:fe_64m_portable_cell',
    'appflux:fe_cell_housing',
    'appflux:flux_accessor',
    'appflux:harden_insulating_resin',
    'appflux:induction_card',
    'appflux:insulating_resin',
    'appflux:part_flux_accessor',
    'appflux:printed_energy_processor',
    'appflux:redstone_crystal',
    'appgen:budding_ember_chipped',
    'appgen:budding_ember_damaged',
    'appgen:budding_ember_flawed',
    'appgen:budding_ember_flawless',
    'appgen:copper_dust',
    'appgen:creative_flux_cell',
    'appgen:dense_flux_cell',
    'appgen:ember_block',
    'appgen:ember_bud_large',
    'appgen:ember_bud_medium',
    'appgen:ember_bud_small',
    'appgen:ember_cluster',
    'appgen:ember_crystal',
    'appgen:ember_crystal_charged',
    'appgen:ember_dust',
    'appgen:flux_cell',
    'appgen:flux_generator_16k',
    'appgen:flux_generator_16m',
    'appgen:flux_generator_1k',
    'appgen:flux_generator_1m',
    'appgen:flux_generator_256k',
    'appgen:flux_generator_256m',
    'appgen:flux_generator_4k',
    'appgen:flux_generator_4m',
    'appgen:flux_generator_64k',
    'appgen:flux_generator_64m',
    'appgen:generating_component_16k',
    'appgen:generating_component_16m',
    'appgen:generating_component_1k',
    'appgen:generating_component_1m',
    'appgen:generating_component_256k',
    'appgen:generating_component_256m',
    'appgen:generating_component_4k',
    'appgen:generating_component_4m',
    'appgen:generating_component_64k',
    'appgen:generating_component_64m',
    'appgen:genesis_synthesizer',
    'appgen:gold_dust',
    'appgen:netherite_dust',
    'appgen:origination_processor',
    'appgen:origination_processor_press',
    'appgen:pattern_buffer',
    'appgen:printed_origination_processor',
    'appgen:singularity_generator_16k',
    'appgen:singularity_generator_16m',
    'appgen:singularity_generator_1k',
    'appgen:singularity_generator_1m',
    'appgen:singularity_generator_256k',
    'appgen:singularity_generator_256m',
    'appgen:singularity_generator_4k',
    'appgen:singularity_generator_4m',
    'appgen:singularity_generator_64k',
    'appgen:singularity_generator_64m',
    'appgen:smelter',
    'appgen:stack_smelting_card',
    'extendedae:active_formation_plane',
    'extendedae:assembler_matrix_crafter',
    'extendedae:assembler_matrix_frame',
    'extendedae:assembler_matrix_glass',
    'extendedae:assembler_matrix_pattern',
    'extendedae:assembler_matrix_speed',
    'extendedae:assembler_matrix_wall',
    'extendedae:caner',
    'extendedae:circuit_cutter',
    'extendedae:concurrent_processor',
    'extendedae:concurrent_processor_press',
    'extendedae:concurrent_processor_print',
    'extendedae:config_modifier',
    'extendedae:crystal_assembler',
    'extendedae:crystal_fixer',
    'extendedae:drive_upgrade',
    'extendedae:entro_block',
    'extendedae:entro_budding_fully',
    'extendedae:entro_budding_half',
    'extendedae:entro_budding_hardly',
    'extendedae:entro_budding_mostly',
    'extendedae:entro_cluster',
    'extendedae:entro_cluster_large',
    'extendedae:entro_cluster_medium',
    'extendedae:entro_cluster_small',
    'extendedae:entro_crystal',
    'extendedae:entro_dust',
    'extendedae:entro_ingot',
    'extendedae:entro_seed',
    'extendedae:entro_shard',
    'extendedae:ex_charger',
    'extendedae:ex_drive',
    'extendedae:ex_export_bus_part',
    'extendedae:ex_import_bus_part',
    'extendedae:ex_inscriber',
    'extendedae:ex_interface',
    'extendedae:ex_interface_part',
    'extendedae:ex_io_port',
    'extendedae:ex_molecular_assembler',
    'extendedae:ex_pattern_access_part',
    'extendedae:ex_pattern_provider',
    'extendedae:ex_pattern_provider_part',
    'extendedae:fishbig',
    'extendedae:infinity_cobblestone_cell',
    'extendedae:infinity_water_cell',
    'extendedae:ingredient_buffer',
    'extendedae:interface_upgrade',
    'extendedae:io_bus_upgrade',
    'extendedae:machine_frame',
    'extendedae:mddyue',
    'extendedae:me_packing_tape',
    'extendedae:mod_export_bus',
    'extendedae:mod_storage_bus',
    'extendedae:oversize_interface',
    'extendedae:oversize_interface_part',
    'extendedae:package',
    'extendedae:pattern_modifier',
    'extendedae:pattern_provider_upgrade',
    'extendedae:pattern_terminal_upgrade',
    'extendedae:precise_export_bus',
    'extendedae:precise_storage_bus',
    'extendedae:quartz_blend',
    'extendedae:silicon_block',
    'extendedae:smart_annihilation_plane',
    'extendedae:tag_export_bus',
    'extendedae:tag_storage_bus',
    'extendedae:threshold_export_bus',
    'extendedae:threshold_level_emitter',
    'extendedae:vacuum_interface',
    'extendedae:void_cell',
    'extendedae:wireless_connect',
    'extendedae:wireless_connector_upgrade',
    'extendedae:wireless_ex_pat',
    'extendedae:wireless_hub',
    'extendedae:wireless_tool',
    'wcwt:advanced_coding_card',
    'wcwt:cosmetic_armor_card',
    'wcwt:curios_card',
    'wcwt:resonating_lightning_pattern_coding_card',
    'wcwt:tool_slots_box_card',
    'wcwt:toolkit_card',
    'wcwt:wireless_comprehensive_work_terminal'
  ]

  console.info('[CIR] AE2 系物品总数: ' + ALL_AE2_ITEMS.length)

  // 从硬编码清单里分出 AppliedFlux 和 AppliedGenerators
  const ALL_FLUX_ITEMS = []
  const ALL_GEN_ITEMS = []
  for (const F_ID of ALL_AE2_ITEMS) {
    if (F_ID.indexOf('appflux:') === 0) ALL_FLUX_ITEMS.push(F_ID)
    if (F_ID.indexOf('appgen:') === 0) ALL_GEN_ITEMS.push(F_ID)
  }
  console.info('[CIR] AppliedFlux 物品数: ' + ALL_FLUX_ITEMS.length)
  console.info('[CIR] AppliedGenerators 物品数: ' + ALL_GEN_ITEMS.length)

  // ================================================================
  // 序章：陨石 + 三套石英工具 + 锻造模板
  // ================================================================
  const STONE_AGE_METEOR = [
    'ae2:sky_stone_block',
    'ae2:smooth_sky_stone_block',
    'ae2:sky_stone_brick',
    'ae2:sky_stone_small_brick',
    'ae2:sky_stone_stairs',
    'ae2:sky_stone_slab',
    'ae2:sky_stone_wall',
    'ae2:smooth_sky_stone_chest',
    'ae2:smooth_sky_stone_stairs',
    'ae2:smooth_sky_stone_slab',
    'ae2:smooth_sky_stone_wall',
    'ae2:sky_stone_tank',

    'ae2:certus_quartz_crystal',
    'ae2:charged_certus_quartz_crystal',
    'ae2:certus_quartz_dust',

    'ae2:quartz_block',
    'ae2:quartz_bricks',
    'ae2:chiseled_quartz_block',
    'ae2:quartz_pillar',
    'ae2:quartz_stairs',
    'ae2:quartz_slab',
    'ae2:quartz_wall',
    'ae2:quartz_vibrant_glass',
    'ae2:quartz_glass',
    'ae2:damaged_budding_quartz',
    'ae2:chipped_budding_quartz',
    'ae2:flawed_budding_quartz',
    'ae2:flawless_budding_quartz',

    'ae2:mysterious_cube',
    'ae2:calculation_processor_press',
    'ae2:engineering_processor_press',
    'ae2:logic_processor_press',
    'ae2:silicon_press',

    'ae2:fluix_crystal',
    'ae2:fluix_dust',
    'ae2:ender_dust',
    'ae2:sky_dust'
  ]

  const STONE_AGE_TOOLS = [
    'ae2:certus_quartz_axe',
    'ae2:certus_quartz_cutting_knife',
    'ae2:certus_quartz_hoe',
    'ae2:certus_quartz_pickaxe',
    'ae2:certus_quartz_shovel',
    'ae2:certus_quartz_sword',
    'ae2:certus_quartz_wrench',

    'ae2:nether_quartz_axe',
    'ae2:nether_quartz_cutting_knife',
    'ae2:nether_quartz_hoe',
    'ae2:nether_quartz_pickaxe',
    'ae2:nether_quartz_shovel',
    'ae2:nether_quartz_sword',
    'ae2:nether_quartz_wrench',

    'ae2:fluix_axe',
    'ae2:fluix_hoe',
    'ae2:fluix_pickaxe',
    'ae2:fluix_shovel',
    'ae2:fluix_sword',

    'ae2:fluix_upgrade_smithing_template'
  ]

  ChaptersEvents.defineStage(
    'cir:stone_age',
    STONE_AGE_METEOR.concat(STONE_AGE_TOOLS)
  )

  // ================================================================
  // 铁器 / 安山
  // ================================================================
  ChaptersEvents.defineStage('cir:iron_age', CREATE_BASE)

  ChaptersEvents.defineStage(
    'cir:andesite_age',
    CREATE_BASE.concat(CREATE_ADDONS)
  )

  // ================================================================
  // 精密时代：AE2 全体，排除 7 类
  // ================================================================
  const PRECISION_EXCLUDE_IDS = [
    'ae2:quantum_ring',
    'ae2:cell_component_64k',
    'ae2:cell_component_256k',
    'ae2:quantum_link',
    'ae2:spatial_anchor',
    'ae2:spatial_pylon'
  ]

  const PRECISION_ITEMS = []
  for (const pid of ALL_AE2_ITEMS) {
    let PREC_SKIP = false
    for (let ei = 0; ei < PRECISION_EXCLUDE_IDS.length; ei++) {
      if (pid.indexOf(PRECISION_EXCLUDE_IDS[ei]) >= 0) {
        PREC_SKIP = true
        break
      }
    }
    if (PREC_SKIP) continue
    if (pid.indexOf('wireless') >= 0) continue
    PRECISION_ITEMS.push(pid)
  }

  ChaptersEvents.defineStage(
    'cir:precision_age',
    CREATE_BASE.concat(CREATE_ADDONS, PRECISION_ITEMS)
  )

  // ================================================================
  // 外星科技：AE2 全体，排除发电机和组件
  // ================================================================
  const ALIEN_EXCLUDE_KEY = [
    'ae2:cell_component_256k',
    'flux_generator',
    'singularity_generator',
    'generating_component'
  ]

  const ALIEN_ITEMS = []
  for (const aid of ALL_AE2_ITEMS) {
    let ALIEN_SKIP = false
    for (let ei = 0; ei < ALIEN_EXCLUDE_KEY.length; ei++) {
      if (aid.indexOf(ALIEN_EXCLUDE_KEY[ei]) >= 0) {
        ALIEN_SKIP = true
        break
      }
    }
    if (!ALIEN_SKIP) ALIEN_ITEMS.push(aid)
  }

  ChaptersEvents.defineStage(
    'cir:alien_age',
    CREATE_BASE.concat(CREATE_ADDONS, ALIEN_ITEMS)
  )

  // ================================================================
  // 充能时代：AppliedFlux 全部，排除 64M / 256M 储能组件
  //   由 charging_age.js 检测到蓄电池有电时发放
  // ================================================================
  const CHARGING_EXCLUDE = [
    'appflux:core_64m',
    'appflux:core_256m'
  ]

  const CHARGING_ITEMS = []
  for (const cid of ALL_FLUX_ITEMS) {
    let CH_SKIP = false
    for (let ei = 0; ei < CHARGING_EXCLUDE.length; ei++) {
      if (cid.indexOf(CHARGING_EXCLUDE[ei]) >= 0) {
        CH_SKIP = true
        break
      }
    }
    if (!CH_SKIP) CHARGING_ITEMS.push(cid)
  }

  ChaptersEvents.defineStage(
    'cir:charging_age',
    CREATE_BASE.concat(CREATE_ADDONS, CHARGING_ITEMS)
  )

  // ================================================================
  // 256K 时代：64M / 256M 储能组件
  // ================================================================
  ChaptersEvents.defineStage(
    'cir:256k_age',
    CREATE_BASE.concat(CREATE_ADDONS, ['appflux:core_64m', 'appflux:core_256m'])
  )

  // ================================================================
  // 永恒赛特斯：解锁永恒赛特斯宝石的合成配方
  //   物品本身一直能捡（打龙掉），只是这条反应仓配方被锁
  // ================================================================
  ChaptersEvents.defineStage(
    'cir:eternal_certus',
    CREATE_BASE.concat(CREATE_ADDONS, ['recipe:kubejs:eternal_certus_gem_reaction'])
  )

  // ================================================================
  // 应用发电机时代：AppliedGenerators 全部，排除 1M 及以上产能组件
  // ================================================================
  const AEPOWER_EXCLUDE_IDS = [
    // 1M ~ 64M 奇点发电机由 cir:sin* 单独解锁
    'appgen:singularity_generator_1m',
    'appgen:singularity_generator_4m',
    'appgen:singularity_generator_16m',
    'appgen:singularity_generator_64m',
    // 1M 及以上产能组件由 cir:sin1 解锁
    'appgen:generating_component_1m',
    'appgen:generating_component_4m',
    'appgen:generating_component_16m',
    'appgen:generating_component_64m',
    'appgen:generating_component_256m'
  ]

  const AEPOWER_ITEMS = []
  for (const gid of ALL_GEN_ITEMS) {
    let G_SKIP = false
    for (let ei = 0; ei < AEPOWER_EXCLUDE_IDS.length; ei++) {
      if (gid.indexOf(AEPOWER_EXCLUDE_IDS[ei]) >= 0) { G_SKIP = true; break }
    }
    if (G_SKIP) continue
    AEPOWER_ITEMS.push(gid)
  }

  ChaptersEvents.defineStage(
    'cir:aepower_age',
    CREATE_BASE.concat(CREATE_ADDONS, AEPOWER_ITEMS)
  )

  // ================================================================
  // 奇点发电机分层解锁
  //   1M / 4M / 16M / 64M 默认锁定，由 FTB 任务分别发放
  // ================================================================
  // cir:sin1 同时解锁所有产能组件（1k ~ 256m）
  const SIN1_ITEMS = ['appgen:singularity_generator_1m']
  for (const sid of ALL_GEN_ITEMS) {
    if (sid.indexOf('generating_component') >= 0) {
      SIN1_ITEMS.push(sid)
    }
  }

  ChaptersEvents.defineStage(
    'cir:sin1',
    CREATE_BASE.concat(CREATE_ADDONS, SIN1_ITEMS)
  )

  ChaptersEvents.defineStage(
    'cir:sin4',
    CREATE_BASE.concat(CREATE_ADDONS, ['appgen:singularity_generator_4m'])
  )

  ChaptersEvents.defineStage(
    'cir:sin16',
    CREATE_BASE.concat(CREATE_ADDONS, ['appgen:singularity_generator_16m'])
  )

  ChaptersEvents.defineStage(
    'cir:sin64',
    CREATE_BASE.concat(CREATE_ADDONS, ['appgen:singularity_generator_64m'])
  )

  // ================================================================
  // 星辉时代：星辉构件的物品和配方
  // ================================================================
  ChaptersEvents.defineStage(
    'cir:stella',
    CREATE_BASE.concat(CREATE_ADDONS, [
      'kubejs:stella_mechanism',
      'recipe:kubejs:stella_mechanism_seq'
    ])
  )

  // ================================================================
  // 永久锁定：cir:locked 不通过任何任务发放
  // ================================================================
  // 临时清空：全部解锁，等科技树设计完再重新填
  ChaptersEvents.defineStage('cir:locked', [])

  // ================================================================
  // 日志
  // ================================================================
  console.info('[CIR] stage 定义完成')
  console.info('[CIR]   stone_age     : ' + (STONE_AGE_METEOR.length + STONE_AGE_TOOLS.length) + ' 项')
  console.info('[CIR]   precision_age : ' + PRECISION_ITEMS.length + ' 项')
  console.info('[CIR]   alien_age     : ' + ALIEN_ITEMS.length + ' 项')
  console.info('[CIR]   charging_age  : ' + CHARGING_ITEMS.length + ' 项')
  console.info('[CIR]   256k_age      : 2 项 + Create')
  console.info('[CIR]   eternal_certus: 1 条配方 + Create')
  console.info('[CIR]   aepower_age   : ' + AEPOWER_ITEMS.length + ' 项')
  console.info('[CIR]   locked        : 0 项（临时清空）')
})
