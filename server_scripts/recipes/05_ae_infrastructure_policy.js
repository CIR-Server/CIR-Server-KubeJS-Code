// priority: 0
// CIR AE infrastructure balance. Shared stage/item policy lives in DS-CIR-TechTree.js.
// No registry properties, stack sizes or network protocols are changed.
// Apply server config only once it has actually been loaded. Initial recipe loading
// precedes NeoForge SERVER config loading; a later /reload can apply immediately.
function cirEnforceNativeAeConfig(requireLoaded) {
  if (Platform.isLoaded('ae2lt')) {
    var cirLightningConfig = Java.loadClass('com.moakiee.ae2lt.config.AE2LTCommonConfig')
    if (cirLightningConfig.SPEC.isLoaded()) {
      var cirEggSetting = cirLightningConfig.SPEC.getValues().getRaw(Java.loadClass('java.util.List').of('easterEgg', 'enabled'))
      if (String(cirEggSetting.get()) !== 'false') {
        cirEggSetting.set(false)
        cirLightningConfig.SPEC.save()
      }
      if (cirLightningConfig.easterEggEnabled()) throw new Error('[CIR AE] Random-resource Easter egg remains enabled')
    } else if (requireLoaded) {
      throw new Error('[CIR AE] AE2LT common config is not loaded')
    }
  }
  if (Platform.isLoaded('neoecoae')) {
    var cirNecoConfig = Java.loadClass('cn.dancingsnow.neoecoae.config.NEConfig')
    if (cirNecoConfig.SPEC.isLoaded()) {
      var cirNecoCards = cirNecoConfig.SPEC.getValues().getRaw(Java.loadClass('java.util.List').of('largeWorkstationIgnoreUpgradeCards'))
      var cirNecoTemperature = cirNecoConfig.SPEC.getValues().getRaw(Java.loadClass('java.util.List').of('largeWorkstationTemperatureEnabled'))
      var cirNecoSave = false
      if (String(cirNecoCards.get()) !== 'false') { cirNecoCards.set(false); cirNecoSave = true }
      if (String(cirNecoTemperature.get()) !== 'true') { cirNecoTemperature.set(true); cirNecoSave = true }
      if (cirNecoSave) cirNecoConfig.SPEC.save()
      cirNecoConfig.largeWorkstationIgnoreUpgradeCards = false
      cirNecoConfig.largeWorkstationTemperatureEnabled = true
    } else if (requireLoaded) {
      throw new Error('[CIR AE] NEO ECO server config is not loaded')
    }
  }
}

ServerEvents.loaded(event => {
  cirEnforceNativeAeConfig(true)
  console.info('[CIR AE] Native config policy verified after server load')
})

ServerEvents.recipes(event => {
  var cirPolicy = JsonIO.read('kubejs/config/cir_ae_infrastructure.json')
  if (!cirPolicy) throw new Error('[CIR AE] Missing DS-CIR-TechTree policy')

  // Output filters alone cannot see the hidden Pigmee recipe's dynamic results.
  if (Platform.isLoaded('ae2lt')) {
    cirPolicy.blockedRecipeTypes.forEach(type => event.remove({type: type}))
  }
  cirPolicy.blockedItems.forEach(id => {
    if (Item.exists(id)) event.remove({output: id})
  })

  // Preserve original inputs, energy, output counts and previous-tier consumption;
  // only add CIR progression materials. Each replacement has one stable recipe ID.
  var cirReplacements = [
  {
    "original": "neoecoae:storage_system_l4",
    "id": "kubejs:ae_infrastructure/neoecoae/storage_system_l4",
    "recipe": {
      "type": "neoecoae:integrated_working_station",
      "energy": 16000,
      "inputItems": [
        {
          "count": 4,
          "item": "neoecoae:storage_casing"
        },
        {
          "count": 4,
          "item": "ae2:drive"
        },
        {
          "count": 16,
          "item": "neoecoae:energized_superconductive_ingot"
        },
        {
          "count": 16,
          "item": "neoecoae:superconducting_processor"
        },
        {
          "item": "create:precision_mechanism",
          "count": 4
        },
        {
          "item": "ae2:cell_component_256k",
          "count": 4
        }
      ],
      "itemOutput": {
        "count": 1,
        "id": "neoecoae:storage_system_l4"
      }
    }
  },
  {
    "original": "neoecoae:storage_system_l6",
    "id": "kubejs:ae_infrastructure/neoecoae/storage_system_l6",
    "recipe": {
      "type": "neoecoae:integrated_working_station",
      "energy": 160000,
      "inputItems": [
        {
          "count": 1,
          "item": "neoecoae:storage_system_l4"
        },
        {
          "count": 8,
          "item": "ae2:drive"
        },
        {
          "count": 32,
          "item": "neoecoae:energized_superconductive_ingot"
        },
        {
          "count": 32,
          "item": "neoecoae:superconducting_processor"
        },
        {
          "item": "kubejs:eternal_certus_dust",
          "count": 4
        },
        {
          "item": "kubejs:eternal_reinforced_glass",
          "count": 4
        }
      ],
      "itemOutput": {
        "count": 1,
        "id": "neoecoae:storage_system_l6"
      }
    }
  },
  {
    "original": "neoecoae:storage_system_l9",
    "id": "kubejs:ae_infrastructure/neoecoae/storage_system_l9",
    "recipe": {
      "type": "neoecoae:integrated_working_station",
      "energy": 640000,
      "inputItems": [
        {
          "count": 1,
          "item": "neoecoae:storage_system_l6"
        },
        {
          "count": 16,
          "item": "ae2:drive"
        },
        {
          "count": 64,
          "item": "neoecoae:energized_superconductive_ingot"
        },
        {
          "count": 64,
          "item": "neoecoae:superconducting_processor"
        },
        {
          "item": "kubejs:stella_mechanism",
          "count": 1
        },
        {
          "item": "kubejs:stella_redstone_dust",
          "count": 16
        }
      ],
      "itemOutput": {
        "count": 1,
        "id": "neoecoae:storage_system_l9"
      }
    }
  },
  {
    "original": "neoecoae:computation_system_l4",
    "id": "kubejs:ae_infrastructure/neoecoae/computation_system_l4",
    "recipe": {
      "type": "neoecoae:integrated_working_station",
      "energy": 16000,
      "inputItems": [
        {
          "count": 4,
          "item": "neoecoae:computation_casing"
        },
        {
          "count": 2,
          "item": "neoecoae:computation_parallel_core_l4"
        },
        {
          "count": 16,
          "item": "neoecoae:energized_superconductive_ingot"
        },
        {
          "count": 16,
          "item": "neoecoae:superconducting_processor"
        },
        {
          "item": "create:precision_mechanism",
          "count": 4
        },
        {
          "item": "ae2:cell_component_256k",
          "count": 4
        }
      ],
      "itemOutput": {
        "count": 1,
        "id": "neoecoae:computation_system_l4"
      }
    }
  },
  {
    "original": "neoecoae:computation_system_l6",
    "id": "kubejs:ae_infrastructure/neoecoae/computation_system_l6",
    "recipe": {
      "type": "neoecoae:integrated_working_station",
      "energy": 160000,
      "inputItems": [
        {
          "count": 1,
          "item": "neoecoae:computation_system_l4"
        },
        {
          "count": 2,
          "item": "neoecoae:computation_parallel_core_l6"
        },
        {
          "count": 32,
          "item": "neoecoae:energized_superconductive_ingot"
        },
        {
          "count": 32,
          "item": "neoecoae:superconducting_processor"
        },
        {
          "item": "kubejs:eternal_certus_dust",
          "count": 4
        },
        {
          "item": "kubejs:eternal_reinforced_glass",
          "count": 4
        }
      ],
      "itemOutput": {
        "count": 1,
        "id": "neoecoae:computation_system_l6"
      }
    }
  },
  {
    "original": "neoecoae:computation_system_l9",
    "id": "kubejs:ae_infrastructure/neoecoae/computation_system_l9",
    "recipe": {
      "type": "neoecoae:integrated_working_station",
      "energy": 640000,
      "inputItems": [
        {
          "count": 1,
          "item": "neoecoae:computation_system_l6"
        },
        {
          "count": 2,
          "item": "neoecoae:computation_parallel_core_l9"
        },
        {
          "count": 64,
          "item": "neoecoae:energized_superconductive_ingot"
        },
        {
          "count": 64,
          "item": "neoecoae:superconducting_processor"
        },
        {
          "item": "kubejs:stella_mechanism",
          "count": 1
        },
        {
          "item": "kubejs:stella_redstone_dust",
          "count": 16
        }
      ],
      "itemOutput": {
        "count": 1,
        "id": "neoecoae:computation_system_l9"
      }
    }
  },
  {
    "original": "neoecoae:crafting_system_l4",
    "id": "kubejs:ae_infrastructure/neoecoae/crafting_system_l4",
    "recipe": {
      "type": "neoecoae:integrated_working_station",
      "energy": 16000,
      "inputItems": [
        {
          "count": 4,
          "item": "neoecoae:crafting_casing"
        },
        {
          "count": 2,
          "item": "neoecoae:crafting_parallel_core_l4"
        },
        {
          "count": 16,
          "item": "neoecoae:energized_superconductive_ingot"
        },
        {
          "count": 16,
          "item": "neoecoae:superconducting_processor"
        },
        {
          "item": "create:precision_mechanism",
          "count": 4
        },
        {
          "item": "ae2:cell_component_256k",
          "count": 4
        }
      ],
      "itemOutput": {
        "count": 1,
        "id": "neoecoae:crafting_system_l4"
      }
    }
  },
  {
    "original": "neoecoae:crafting_system_l6",
    "id": "kubejs:ae_infrastructure/neoecoae/crafting_system_l6",
    "recipe": {
      "type": "neoecoae:integrated_working_station",
      "energy": 160000,
      "inputItems": [
        {
          "count": 1,
          "item": "neoecoae:crafting_system_l4"
        },
        {
          "count": 2,
          "item": "neoecoae:crafting_parallel_core_l6"
        },
        {
          "count": 32,
          "item": "neoecoae:energized_superconductive_ingot"
        },
        {
          "count": 32,
          "item": "neoecoae:superconducting_processor"
        },
        {
          "item": "kubejs:eternal_certus_dust",
          "count": 4
        },
        {
          "item": "kubejs:eternal_reinforced_glass",
          "count": 4
        }
      ],
      "itemOutput": {
        "count": 1,
        "id": "neoecoae:crafting_system_l6"
      }
    }
  },
  {
    "original": "neoecoae:crafting_system_l9",
    "id": "kubejs:ae_infrastructure/neoecoae/crafting_system_l9",
    "recipe": {
      "type": "neoecoae:integrated_working_station",
      "energy": 640000,
      "inputItems": [
        {
          "count": 1,
          "item": "neoecoae:crafting_system_l6"
        },
        {
          "count": 2,
          "item": "neoecoae:crafting_parallel_core_l9"
        },
        {
          "count": 64,
          "item": "neoecoae:energized_superconductive_ingot"
        },
        {
          "count": 64,
          "item": "neoecoae:superconducting_processor"
        },
        {
          "item": "kubejs:stella_mechanism",
          "count": 1
        },
        {
          "item": "kubejs:stella_redstone_dust",
          "count": 16
        }
      ],
      "itemOutput": {
        "count": 1,
        "id": "neoecoae:crafting_system_l9"
      }
    }
  },
  {
    "original": "neoecoae:eco_cell_component_16m",
    "id": "kubejs:ae_infrastructure/neoecoae/eco_cell_component_16m",
    "recipe": {
      "type": "neoecoae:integrated_working_station",
      "energy": 16000,
      "inputItems": [
        {
          "count": 12,
          "item": "ae2:cell_component_256k"
        },
        {
          "count": 32,
          "item": "neoecoae:energized_superconductive_ingot"
        },
        {
          "count": 4,
          "item": "neoecoae:superconducting_processor"
        },
        {
          "count": 1,
          "item": "neoecoae:crystal_ingot"
        },
        {
          "item": "create:precision_mechanism",
          "count": 16
        }
      ],
      "itemOutput": {
        "count": 1,
        "id": "neoecoae:eco_cell_component_16m"
      }
    }
  },
  {
    "original": "neoecoae:eco_cell_component_64m",
    "id": "kubejs:ae_infrastructure/neoecoae/eco_cell_component_64m",
    "recipe": {
      "type": "neoecoae:integrated_working_station",
      "energy": 48000,
      "inputItems": [
        {
          "count": 3,
          "item": "neoecoae:eco_cell_component_16m"
        },
        {
          "count": 48,
          "item": "neoecoae:energized_superconductive_ingot"
        },
        {
          "count": 16,
          "item": "neoecoae:superconducting_processor"
        },
        {
          "count": 1,
          "item": "neoecoae:crystal_ingot"
        },
        {
          "item": "kubejs:eternal_certus_dust",
          "count": 8
        }
      ],
      "itemOutput": {
        "count": 1,
        "id": "neoecoae:eco_cell_component_64m"
      }
    }
  },
  {
    "original": "neoecoae:eco_cell_component_256m",
    "id": "kubejs:ae_infrastructure/neoecoae/eco_cell_component_256m",
    "recipe": {
      "type": "neoecoae:integrated_working_station",
      "energy": 144000,
      "inputItems": [
        {
          "count": 3,
          "item": "neoecoae:eco_cell_component_64m"
        },
        {
          "count": 64,
          "item": "neoecoae:energized_superconductive_ingot"
        },
        {
          "count": 64,
          "item": "neoecoae:superconducting_processor"
        },
        {
          "count": 1,
          "item": "neoecoae:crystal_ingot"
        },
        {
          "item": "kubejs:stella_mechanism",
          "count": 1
        },
        {
          "item": "kubejs:stella_redstone_dust",
          "count": 16
        }
      ],
      "itemOutput": {
        "count": 1,
        "id": "neoecoae:eco_cell_component_256m"
      }
    }
  },
  {
    "original": "ae2lt:lightning_simulation/lightning_collapse_matrix",
    "id": "kubejs:ae_infrastructure/ae2lt/lightning_simulation/lightning_collapse_matrix",
    "recipe": {
      "type": "ae2lt:lightning_simulation",
      "priority": 0,
      "inputs": [
        {
          "ingredient": {
            "item": "ae2lt:perfect_electro_chime_crystal"
          },
          "count": 1
        },
        {
          "ingredient": {
            "item": "ae2lt:ultimate_overload_core"
          },
          "count": 16
        },
        {
          "ingredient": {
            "item": "kubejs:eternal_certus_dust"
          },
          "count": 4
        }
      ],
      "result": {
        "id": "ae2lt:lightning_collapse_matrix",
        "count": 1
      },
      "totalEnergy": 50000000,
      "lightningCost": 128,
      "lightningTier": "extreme_high_voltage"
    }
  },
  {
    "original": "ae2lt:overload_processing/lightning_collapse_matrix",
    "id": "kubejs:ae_infrastructure/ae2lt/overload_processing/lightning_collapse_matrix",
    "recipe": {
      "type": "ae2lt:overload_processing",
      "priority": 0,
      "inputs": [
        {
          "ingredient": {
            "item": "ae2lt:perfect_electro_chime_crystal"
          },
          "count": 1
        },
        {
          "ingredient": {
            "item": "ae2lt:ultimate_overload_core"
          },
          "count": 16
        },
        {
          "ingredient": {
            "item": "kubejs:eternal_certus_dust"
          },
          "count": 4
        }
      ],
      "results": [
        {
          "id": "ae2lt:lightning_collapse_matrix",
          "count": 1
        }
      ],
      "totalEnergy": 50000000,
      "lightningCost": 128,
      "lightningTier": "extreme_high_voltage"
    }
  },
  {
    "original": "ae2lt:lightning_assembly/overload_processing_factory",
    "id": "kubejs:ae_infrastructure/ae2lt/lightning_assembly/overload_processing_factory",
    "requires": [
      "advanced_ae"
    ],
    "recipe": {
      "type": "ae2lt:lightning_assembly",
      "priority": 0,
      "inputs": [
        {
          "ingredient": {
            "item": "ae2:inscriber"
          },
          "count": 16
        },
        {
          "ingredient": {
            "item": "ae2lt:overload_machine_frame"
          },
          "count": 4
        },
        {
          "ingredient": {
            "item": "ae2lt:ultimate_overload_core"
          },
          "count": 1
        },
        {
          "ingredient": {
            "item": "advanced_ae:reaction_chamber"
          },
          "count": 8
        },
        {
          "ingredient": {
            "item": "kubejs:stella_mechanism"
          },
          "count": 1
        }
      ],
      "result": {
        "id": "ae2lt:overload_processing_factory",
        "count": 1
      },
      "totalEnergy": 1000000,
      "lightningCost": 64,
      "lightningTier": "extreme_high_voltage"
    }
  },
  {
    "original": "neoecoae:compat/ae2lt/disassembly_eco_lightning_cell_16m",
    "id": "kubejs:ae_infrastructure/neoecoae/compat/ae2lt/disassembly_eco_lightning_cell_16m",
    "recipe": {
      "neoforge:conditions": [
        {
          "type": "neoforge:mod_loaded",
          "modid": "ae2lt"
        }
      ],
      "type": "ae2:storage_cell_disassembly",
      "cell": "neoecoae:eco_lightning_cell_16m",
      "cell_disassembly_items": [
        {
          "count": 1,
          "id": "neoecoae:eco_lightning_cell_housing"
        },
        {
          "count": 1,
          "id": "neoecoae:eco_cell_component_16m"
        },
        {
          "count": 1,
          "id": "ae2lt:lightning_cell_component_v"
        }
      ]
    }
  },
  {
    "original": "neoecoae:compat/ae2lt/disassembly_eco_lightning_cell_64m",
    "id": "kubejs:ae_infrastructure/neoecoae/compat/ae2lt/disassembly_eco_lightning_cell_64m",
    "recipe": {
      "neoforge:conditions": [
        {
          "type": "neoforge:mod_loaded",
          "modid": "ae2lt"
        }
      ],
      "type": "ae2:storage_cell_disassembly",
      "cell": "neoecoae:eco_lightning_cell_64m",
      "cell_disassembly_items": [
        {
          "count": 1,
          "id": "neoecoae:eco_lightning_cell_housing"
        },
        {
          "count": 1,
          "id": "neoecoae:eco_cell_component_64m"
        },
        {
          "count": 2,
          "id": "ae2lt:lightning_cell_component_v"
        }
      ]
    }
  },
  {
    "original": "neoecoae:compat/ae2lt/disassembly_eco_lightning_cell_256m",
    "id": "kubejs:ae_infrastructure/neoecoae/compat/ae2lt/disassembly_eco_lightning_cell_256m",
    "recipe": {
      "neoforge:conditions": [
        {
          "type": "neoforge:mod_loaded",
          "modid": "ae2lt"
        }
      ],
      "type": "ae2:storage_cell_disassembly",
      "cell": "neoecoae:eco_lightning_cell_256m",
      "cell_disassembly_items": [
        {
          "count": 1,
          "id": "neoecoae:eco_lightning_cell_housing"
        },
        {
          "count": 1,
          "id": "neoecoae:eco_cell_component_256m"
        },
        {
          "count": 4,
          "id": "ae2lt:lightning_cell_component_v"
        }
      ]
    }
  }
]
  cirReplacements.forEach(entry => {
    var cirOwner = entry.original.split(':')[0]
    if (Platform.isLoaded(cirOwner) && (!entry.requires || entry.requires.every(mod => Platform.isLoaded(mod)))) {
      event.remove({id: entry.original})
      event.custom(entry.recipe).id(entry.id)
    }
  })
  cirEnforceNativeAeConfig(false)
  console.info('[CIR AE] Permanent restrictions and progression recipes applied')
})
