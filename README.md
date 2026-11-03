# CIR Server KubeJS Code

[![Minecraft](https://img.shields.io/badge/Minecraft-1.21.1-green)](https://www.minecraft.net/)
[![NeoForge](https://img.shields.io/badge/NeoForge-21.1%2B-orange)](https://neoforged.net/)
[![Create](https://img.shields.io/badge/Create-6.x-blue)](https://modrinth.com/mod/create)
[![AE2](https://img.shields.io/badge/AE2-19.x-yellow)](https://modrinth.com/mod/ae2)
[![KubeJS](https://img.shields.io/badge/KubeJS-7.x.x-purple)](https://kubejs.com/)
[![License: CC BY-SA 4.0](https://img.shields.io/badge/License-CC%20BY--SA%204.0-lightgrey)](https://creativecommons.org/licenses/by-sa/4.0/)

CIR 服务器使用的 KubeJS 脚本集合，覆盖配方、自定义内容、附魔、掉落表和本地化。

KubeJS scripts running on the CIR Minecraft server — recipes, custom content, enchantments, loot tables and localization.

**中文** ｜ [English](#english)

---

# 中文

## 功能

### 配方重建与改造

-由于模组自身Bug造成配方不加载且作者截至本包发布前未修复，服务器移除了「机械动力：应用机械」（Create: Applied Kinetics），该模组原本提供的 11 个序列装配配方与 11 个半成品物品在此用 KubeJS 完整重建；同时补回了被它覆盖掉的 AE2 压印器配方逻辑。

-重写和增加了一批 Create 配方（压块、混合、切割、序列组装等），并追加了红石强化石等原创材料的矿石开凿(Create: Ore Excavation)产出、大幅增加了AAE提供的四件量子装备的合成难度以保障游戏平衡性。加入了人造钻石的生产流程，创新性加入**强化深板岩**和**紫水晶母岩**的极高成本人造方法，使得上述方块可以被放置在指定位置。

-大幅增加了AE2无线物流系统的制造成本，严格限制无线物流在前期的应用，保证整合包仍然以机械动力为核心。

-删掉的原版配方统一登记在移除清单里，方便追溯。

### 自定义内容

- **物品**：六十余个，包括 256K 存储组件链、星辉量子宝石、永恒赛特斯宝石、红石强化石、人造钻石链，以及四组右键即可使用的强力功能球
- **方块**：强化玻璃、随机方块、配方重载器、节日灯笼等
- **流体**：各类果汁果酒、神秘液体、强化液体
- **药水效果**：易伤、生命固结、生命流失、燃烧、抗毒、傀儡支援
- **音效**：多个中文互联网的梗(meme)音效

### 新增材料

**星辉量子宝石** `kubejs:stella_quantum_gem`：只能在宝箱中获取，无法合成，其加工产物**星辉红石粉** `kubejs:stella_redstone_dust` 可以用于极高级的合成用途如量子套装与AE2无线传输系统等，也可用于制造**星辉构件** `kubejs:stella_mechanism` 制造电路压印机（模组：Extended AE）将电路板的生产由机械动力的序列组装恢复为AE2的直接生产。
**永恒赛特斯宝石** `kubejs:eternal_certus_gem` ：只能在宝箱中获取或使用多种珍稀材料由反应仓（模组：Extended AE）进行合成，可用于256K存储组件等AE2高阶芯片的合成。
**红石强化石** `kubejs:redstone_reinforce_gem` ：可以在下界通过机械动力：矿石开凿（Create: Ore Excavation）模组开采矿脉获得，其加工产物**强化液体** `kubejs:reinforce_liquid` 可用于制备**强化红石粉** `kubejs:reinforced_redstone_dust` 用于多种合成用途，是启动AE2中后期发展的必须品。
**退化宝石** `kubejs:degeneration_gem` ：可以在下界通过机械动力：矿石开凿（Create: Ore Excavation）模组开采矿脉获得，右键**强化过的方块** `*:reinforced_*` 使用，使其附近所有同类方块变化为未强化状态，可用于处理强化深板岩（前文已介绍，在本包中可被制造）放置失误等情况。
**远古残骸粉末** `kubejs:ancient_debris_dust` ：由远古残骸经过**粉碎**`create.crushing()`获得，粉碎时有概率额外获得，可用于下界合金的增产。

### 附魔与掉落表

九个自定义附魔：吸血、伤害加成、决斗、生命流失、生命汲取、快速冷却、剧毒、虚空救援、经验掠夺。在游戏内根据提示可快速查看附魔效果。


另有末影龙、监守者、远古城市宝箱、末地船宝箱、林地府邸宝箱等目标的掉落表调整。

### 事件逻辑

方块、实体、物品、玩家四类事件脚本，包含决斗系统、登录提示、聊天指令彩蛋，兑换码系统，以及若干机器与实体的行为微调。

### 本地化

`assets/` 下另有二十个模组的语言文件覆盖，以资源包形式加载，只覆盖同名键，不改动任何模组 jar。

## 环境需求

### 基础

| 依赖 | 必需性 | 版本 |
|---|---|---|
| Minecraft | **必需** | 1.21.1 |
| NeoForge | **必需** | 21.1+ |
| Create | **必需** | 6.x |
| AE2 | **必需** | 19.x |
| KubeJS | **必需** | 7.x.x |

### 脚本内容依赖

下列模组被脚本中的配方、物品或数据直接引用。缺任何一个，对应条目会失效或在加载时报错，其余部分照常工作。

| 模组 | 引用内容 |
|---|---|
| Deeper and Darker | 配方与掉落表，引用量最大 |
| AdvancedAE | 量子四件套、反应仓 |
| Farmer's Delight | 食物与切割配方 |
| Waystones | 传送石配方 |
| Expanded Delight | 食材配方 |
| Create Ore Excavation | 矿脉类型与挖掘配方 |
| Create Crafts & Addition | 应力发电与线缆 |
| ExtendedAE | 电路切片器、晶体装配器 |
| Create Enchantment Industry | 液态经验、附魔相关 |
| Supplementaries | 部分配方 |
| Create: Confectionery | 甜食配方 |
| Create: Mobile Packages | 包裹相关 |
| Guard Villagers | 招募令 |
| Computercraft | 部分配方 |
| Create: Dragons Plus | 部分配方 |
| Regions Unexplored | 部分配方 |
| End's Delight | 食物配方 |
| Create: Things and Misc | 部分配方 |
| Create Diesel Generators | 部分配方 |
| Touhou Little Maid | 部分配方 |
| Xaero's Minimap / World Map | 地图相关数据 |

## 目录结构

| 目录 | 内容 |
|---|---|
| `startup_scripts/` | 物品、方块、流体、药水效果与音效的注册 |
| `server_scripts/` | 配方、服务端事件、附魔相关逻辑 |
| `client_scripts/` | 工具提示与客户端侧微调 |
| `assets/` | 贴图、音效、语言文件覆盖 |
| `data/` | 附魔、掉落表、配方覆盖 |
| `config/` | KubeJS 与 ProbeJS 设置 |

## 版本

当前：**4.0.0**，详见 [CHANGELOG.md](CHANGELOG.md)。

## 许可

[CC BY-SA 4.0](LICENSE)

---

# English

## Features

### Recipe rebuilds and reworks

- The server removed Create: Applied Kinetics. A bug in the mod stopped its recipes from loading, and it had not been fixed as of this release. Its 11 sequenced assembly recipes and 11 incomplete items are rebuilt here in full with KubeJS, and the AE2 inscriber recipe logic that the mod had been overriding is restored alongside them.

- A batch of Create recipes was rewritten and extended (compacting, mixing, cutting, sequenced assembly and others). Ore excavation (Create: Ore Excavation) output was added for original materials such as the redstone reinforce gem, and the crafting cost of the four quantum armour pieces from AdvancedAE was raised sharply to keep the pack balanced. A synthetic diamond chain was added, together with deliberately expensive player-made routes to **Reinforced Deepslate** and **Budding Amethyst**, so that those blocks can be placed wherever the player wants them.

- The cost of AE2's wireless logistics was raised substantially. Wireless access is kept out of reach early on, so the pack still revolves around Create.

- Every removed vanilla recipe is recorded in the removal list, so the originals can be traced.

### Custom content

- **Items**: sixty-odd, including the 256K cell component chain, the stella quantum gem, the eternal certus gem, the redstone reinforce gem, the synthetic diamond chain, and four sets of right-click power orbs
- **Blocks**: reinforced glass, random block, recipe reloader, festival lantern, and a few others
- **Fluids**: assorted juices and ciders, mysterious liquid, reinforce liquid
- **Mob effects**: Vulnerable, Golem Support, Antitoxic, Burning, Health Freeze, Health Lose
- **Sounds**: several clips lifted from Chinese internet memes

### New materials

**Stella Quantum Gem** `kubejs:stella_quantum_gem` — obtainable only from loot chests, never crafted. Its processed form, **Stella Redstone Dust** `kubejs:stella_redstone_dust`, feeds very high-end recipes such as the quantum armour set and AE2 wireless transmission, and is also used to make the **Stella Mechanism** `kubejs:stella_mechanism` that the circuit imprinter (Extended AE) needs to move circuit board production from Create's sequenced assembly back to AE2's direct processing.

**Eternal Certus Gem** `kubejs:eternal_certus_gem` — obtained from loot chests, or crafted from a mix of rare materials in the Reaction Chamber (Extended AE). Used in AE2's high-tier components such as the 256K cell.

**Redstone Reinforce Gem** `kubejs:redstone_reinforce_gem` — mined from ore veins in the Nether through Create: Ore Excavation. Its processed form, **Reinforce Liquid** `kubejs:reinforce_liquid`, is used to prepare **Reinforced Redstone Dust** `kubejs:reinforced_redstone_dust`, which feeds a range of recipes and is required to get AE2's mid-to-late game moving.

**Degeneration Gem** `kubejs:degeneration_gem` — mined from ore veins in the Nether through Create: Ore Excavation. Right-click a **reinforced block** `*:reinforced_*` with it and every matching block nearby reverts to its unreinforced state. Useful when a Reinforced Deepslate (craftable in this pack, as noted above) has been placed in the wrong spot.

**Ancient Debris Dust** `kubejs:ancient_debris_dust` — produced by **crushing** ancient debris with `create.crushing()`, with a chance of bonus output. Used to stretch netherite production.

### Enchantments and loot tables

Nine custom enchantments: Blood Thirsty, Damage Bonus, Duel, Health Lose, Health Theft, Rapid Cooldown, Toxic, Void Rescue and XP Looting. Their effects can be read in-game from the tooltip.

Loot tables were adjusted for the ender dragon, the warden, ancient city chests, end ship chests and woodland mansion chests.

### Event logic

Block, entity, item and player event scripts, covering the duel system, login notices, chat command easter eggs, a redemption code system, and assorted behaviour tweaks for machines and entities.

### Localization

Language file overrides for twenty mods live under `assets/`. They load as a resource pack, replace same-named keys only, and never touch a mod jar.

## Requirements

### Baseline

| Dependency | Required | Version |
|---|---|---|
| Minecraft | **Yes** | 1.21.1 |
| NeoForge | **Yes** | 21.1+ |
| Create | **Yes** | 6.x |
| AE2 | **Yes** | 19.x |
| KubeJS | **Yes** | 7.x.x |

### Script content dependencies

The following mods are referenced directly by recipes, items or data in these scripts. Missing any one disables the affected entries or throws an error while loading; everything else keeps working.

| Mod | Referenced for |
|---|---|
| Deeper and Darker | Recipes and loot tables, by far the heaviest use |
| AdvancedAE | Quantum armour set, reaction chamber |
| Farmer's Delight | Food and cutting recipes |
| Waystones | Waystone recipes |
| Expanded Delight | Ingredient recipes |
| Create Ore Excavation | Ore vein types and drilling recipes |
| Create Crafts & Addition | Stress-based generation and cables |
| ExtendedAE | Circuit cutter, crystal assembler |
| Create Enchantment Industry | Liquid experience, enchanting |
| Supplementaries | A few recipes |
| Create: Confectionery | Confectionery recipes |
| Create: Mobile Packages | Package handling |
| Guard Villagers | Recruitment order |
| Computercraft | A few recipes |
| Create: Dragons Plus | A few recipes |
| Regions Unexplored | A few recipes |
| End's Delight | Food recipes |
| Create: Things and Misc | A few recipes |
| Create Diesel Generators | A few recipes |
| Touhou Little Maid | A few recipes |
| Xaero's Minimap / World Map | Map-related data |

## Layout

| Directory | Contents |
|---|---|
| `startup_scripts/` | Item, block, fluid, mob effect and sound registration |
| `server_scripts/` | Recipes, server events, enchantment logic |
| `client_scripts/` | Tooltips and client-side tweaks |
| `assets/` | Textures, sounds and language overrides |
| `data/` | Enchantments, loot tables and recipe overrides |
| `config/` | KubeJS and ProbeJS settings |

## Version

Current: **4.0.0** — see [CHANGELOG.md](CHANGELOG.md).

## License

[CC BY-SA 4.0](LICENSE)
