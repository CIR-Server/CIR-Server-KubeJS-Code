# Server recipe scripts

Reorganized by processing mode on 2026-11-19. Original authors include LingyunAwA, bot_undefined, RIKJS and the CIR/DSH maintainers. The archive retains complete original sources and author notes.

## Original inventory

| Original file | Role |
| --- | --- |
| YunKJS-neoforge-Recipe.js | Crafting, cooking, AdvancedAE reactions and an ingredient tag |
| YunKJS-neoforge-RemoveRecipe.js | General recipe removals |
| RIKJS-neoforge-CreateRecipes.js | Create processing, mechanical crafting and liquid fuels |
| RIKJS-neoforge-CreateM-Crafting.js | Mechanical crafting and the AE2 drive replacement |
| RIKJS-neoforge-SequencedAssembly.js | Material and storage component sequenced assembly |
| RIKJS-neoforge-stella_mechanism_recipes.js | Stella sequenced assembly and ExtendedAE assembly |
| RIKJS-neoforge-CreateOreExcavationRecipe.js | Ore vein drilling |
| RIKJS-neoforge-AppliedFlux.js | Energy storage core crafting replacements |
| RIKJS-neoforge-AppliedGenerators.js | Generator/component replacements and disabled tiers |
| ModFix-createappliedkinetics_recipes.js | AE2 inscriber removals and 11 sequenced assembly replacements |
| RIKJS-neoforge-FarmersRecipe.js | Comment-only shell; archived with the original recipe files |
| DS-CIR-TechTree.js | Stage definitions on the recipes event; retained unchanged at the script root |

## Current files

Files use priority 0. Within each file, recipe sections are sorted alphabetically by namespaced recipe type. Registration order within the same recipe type is preserved.

| File | Processing mode | Recipe types |
| --- | --- | --- |
| [00_removals.js](00_removals.js) | Recipe removals | `ae2:inscriber`, `appgen:disabled_generators`, `general:disabled_recipes` |
| [01_ingredient_tags.js](01_ingredient_tags.js) | Recipe ingredient tags | `c:dead_coral_blocks` |
| [10_crafting.js](10_crafting.js) | Crafting table recipes | `minecraft:crafting_shaped`, `minecraft:crafting_shapeless` |
| [20_cooking.js](20_cooking.js) | Furnace, blast furnace and smoker recipes | `minecraft:blasting`, `minecraft:smelting`, `minecraft:smoking` |
| [30_create_mechanical_crafting.js](30_create_mechanical_crafting.js) | Create mechanical crafting recipes | `create:mechanical_crafting` |
| [40_create_processing.js](40_create_processing.js) | Create processing recipes | `create:compacting`, `create:crushing`, `create:cutting`, `create:emptying`, `create:filling`, `create:milling`, `create:mixing` |
| [50_create_sequenced_assembly.js](50_create_sequenced_assembly.js) | Create sequenced assembly recipes | `create:sequenced_assembly` |
| [60_ae_processing.js](60_ae_processing.js) | AE machine processing recipes | `advanced_ae:reaction`, `extendedae:crystal_assembler` |
| [70_ore_excavation.js](70_ore_excavation.js) | Create Ore Excavation recipes | `createoreexcavation:drilling` |
| [80_liquid_fuels.js](80_liquid_fuels.js) | Create Addition liquid fuels | `createaddition:liquid_burning` |

## Preservation rules

- Keep ingredients, tags, amounts, probabilities, energy, heat, durations, mirroring, conditions, transition items, loop counts and explicit IDs unchanged.
- Keep nested sequence steps with their parent sequence, in their original order.
- General removals live in 00_removals.js. Replacement-specific removals stay beside their replacement recipes.
- Ingredient tags are retained in 01_ingredient_tags.js.
- Stage definitions and all unrelated entity/player/item/block/server handlers remain unchanged.
- Disabled examples and historical comments remain available in the backup; they are not executable recipes.

## Backup and verification

Backup directory: `D:/Minecraft/.minecraft/versions/1.21.1-NeoForge_21.1.255/kubejs/backups/recipes_20261119_210839`.

- `server_scripts/` contains a byte-for-byte snapshot of the original script directory.
- `manifest.json` lists SHA-256 hashes and original-to-new statement locations.
- `verification-live.json` records the final validation result.
- `trace-before.json` and `trace-after.json` retain the recorded recipe calls.

Offline comparison covers 178 top-level recipe registrations, 24 nested sequence builder calls, 65 removal calls and 1 ingredient tag. It compares every builder argument/modifier, explicit ID, nested sequence order and per-type registration order. The baseline and reorganized scripts are also replayed twice under the installed Rhino version.

Minecraft registry/codec validation and in-game loading still require a local world/server reload. No world or remote server was modified.

## Restore

Before restoring, retain any later edits. Remove only the JavaScript files listed as outputs in manifest.json from this recipes directory, then copy the original files listed under archived from the backup's server_scripts directory back to kubejs/server_scripts. Do not restore the unrelated snapshot files unless intentionally reverting their later changes. Keep the backup outside server_scripts to prevent duplicate registration.
