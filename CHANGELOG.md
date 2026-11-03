# 更新日志

本项目遵循 [语义化版本](https://semver.org/lang/zh-CN/)。历史条目中 `3.0.0` 之前为综合版本（`2.x`），自 `3.0.0` 起为纯机械动力版本。

**中文** ｜ [English](#english)

---

# 中文

## [4.0.0] - 2026-11-03

### 新增

- **「机械动力：应用机械」配方重建**。该模组自身缺陷导致配方无法加载，且截至本版发布未修复，服务器已将其移除。其提供的 11 个序列装配配方与 11 个半成品物品在此以 KubeJS 完整重建，同时恢复被其覆盖的 AE2 压印器配方逻辑。
- **星辉构件**（`kubejs:stella_mechanism`）。序列组装产物，稀有度「稀有」，可堆叠。以精密构件为原料，经注入液态经验、安装钻石、安装星辉红石粉、冲压各一次为一轮，循环两轮；80% 产出星辉构件，20% 产出钻石。
- **电路切片器配方扩展**。晶体装配器输入由 8 项增至 9 项，新增一项为星辉构件。
- **AE2 动力合成配方**。新增量子四件套等 AE2 相关物品的动力合成配方。

### 变更

- 「伤害加成」附魔补充量子头盔与量子胸甲的加成条目
- 未至之地（Regions Unexplored）补齐 137 条简体中文词条，覆盖群系、方块、物品与配置界面
- 若干 Create 配方微调

### 移除

- 汤圆、生汤圆及其全部配方

### 战利品表

- 调整监守者的掉落表

## [3.1.0] - 2026-02-24

### 说明

- KubeJS 内容与 `3.0.0` 一致，无代码差异；版本号随整合包更新。本版本作为 3.x 分支的封版。

## [3.0.0] - 2025-12-06

纯机械动力版本正式版，适用于 Create 6.0.8、KubeJS 7.2 及以上。

### 修复

- 恢复粗制强化深板岩、人造紫水晶母岩的常规配方。此前工作盆配方的输入被错误限制为 9 个物品。
- 恢复随机方块的战利品表。

### 变更

- 提升传送石（`waystones:warpstone`）的合成难度，改用动力合成器
- 使用 KubeJS Create 替代全部原有数据包注册配方
- 调整部分代码以适配 KubeJS 7.2
- 修正本地化文件中不合理的译文

### 新增

- 柴油、汽油、生物柴油的超级燃烧配方（`liquid_burning`）
- 永恒强化玻璃的序列组装配方
- 各类魔法球配方
- 物品：永恒强化玻璃（半成品）、黑暗魔法球、浮空魔法球、迷失魔法球

## [3.0.0-pre] - 2025-09-30

纯机械动力分支首个版本。继承自 `2.2.0`，并非重大更新。

### 移除

- AE2 及其附属模组的全部配方
- 新生魔艺相关配方
- 不属于纯机械动力整合包的物品与事件

### 新增

- 流体：苹果汁、发光浆果汁、蔓越莓汁
- 上述流体的注液、分液、搅拌配方，以及苹果汁合成苹果酒配方
- 岩盐研磨配方、岩盐开凿采矿配方
- 矿物盐（扩充乐事）提纯为盐（豆腐工艺）的配方
- 各类魔法球的交互事件、精英蠹虫随机死亡事件

## [2.2.0] - 2025-09-05

### 新增

- 附魔：虚空救援（受到虚空伤害且生命值较低时，以损毁附魔所在盔甲为代价触发传送）
- 物品：粗制折跃卷轴、警卫村民招募令、折跃卷轴（半成品）
- 方块交互：手持警卫村民招募令右键钟，召唤一名警卫村民
- 敌对生物与警卫村民的强化生成（属性加成、稀有变种、稀有变种生成于 y > 62 时全服广播坐标）
- 标签：`kubejs:include_xxx`（正则匹配含指定 id 的物品）、`kubejs:drinks`（覆盖全部可装瓶饮用的非药水流体）
- 为 KubeJS 注册物品补充类型匹配的常规标签与注释信息
- 语言：繁体中文（`zh_tw`）、英语（`en_us`）

### 变更

- 调整强化/退化宝石矿石开凿配方的钻探时间与产物概率
- 将几乎所有硬编码文本改为键名 + 本地化格式

### 移除

- 折跃卷轴的工作台配方

### 战利品表

- 末地城宝藏新增「经验抢夺」「极速冷却」「嗜血」附魔书
- 林地府邸宝藏新增「生命汲取」附魔书
- 监守者掉落永恒赛特斯宝石的概率由 20% 降至 10%

## [2.1.0] - 2025-04-29

### 新增

- 物品：远古残骸粉末、炸弹石榴护身符、天气球（晴/雨/雷）、昼夜球（昼/夜）、四类半成品
- 状态效果：爆炸支援
- 音效：Revenge（Minecraft Creeper Song）节选、SEGA maimai PRISM 登录曲节选
- 方块交互：手持星辉红石粉右键幽匿尖啸体，使其转变为可召唤监守者的尖啸体并全服广播
- 物品使用：右击炸弹石榴护身符获得「爆炸支援」
- 附魔描述：为全部 KubeJS 注册附魔补充描述信息
- 兑换码系统：奖励与兑换码硬编码，已兑换列表自动注册

### 变更

- 强化深板岩、紫水晶母岩、钻石、256K 存储组件改由序列组装生产
- 天气球、昼夜球改为动力合成
- 远古残骸粉末改为石墨/粉碎轮产出；下界合金碎片由远古残骸粉末经高炉/熔炉冶炼

### 移除

- 256K 存储组件的反应仓配方
- 机械动力：实用物件的部分配方（对应物品已不存在）
- 「银河幸运星」抽卡模拟器模块

### 战利品表

- 末地城宝藏新增抽奖序列，可获伤害免疫胶囊、星辉量子宝石等不可合成资源
- 提高林地府邸宝藏中永恒赛特斯宝石的概率，降低「垃圾」类战利品概率
- 取消末影龙战利品表，改为直接奖励玩家，以限制其他模组添加的刷怪方式

## [2.0.0] - 2025-04-15

### 移植

由 Forge 1.20.1 + KubeJS 6 迁移至 NeoForge 1.21.1 + KubeJS 7。

- 除 Let's Do: Vinery 配套流体外，移植全部流体
- 将 KubeJS Create v1.5（1.20.1 Forge）注册的除序列组装外的全部有效配方改写为 1.21.1 数据包
- 移植 KubeJS Delight 合成表、大部分 EntityEvent、全部原版合成表、大部分战利品表（JS → JSON）、几乎全部 PlayerEvent
- 将全部注册附魔改写为 1.21.1 数据包格式
- 移植配方重载器及配套代码

### 新增

- 物品：甜浆果汁、永恒赛特斯粉、星辉量子宝石、星辉红石粉、伤害免疫胶囊
- 流体：甜浆果汁
- 附魔：经验抢夺（每级增加生物掉落经验值）
- 事件：玩家生命值低于阈值并受到伤害时广播其名字与坐标，并按伤害来源给予限时状态效果；玩家进服自动获得 1 小时「幸运 II」

### 移除

- 初级/高级通用货币（原材料已被模组更新移除）
- 全部魔法球（联动模组停更，且极限模式下 `player.kill()` 不可主动触发）
- 全部自定义唱片（缩减整合包体积，规避崩服问题）
- 氧化的铁锭（相关生产链存在越刷越多的缺陷）
- 全部葡萄汁流体（Let's Do: Vinery 停更）
- 附魔：凋零攻击（可能导致极限模式玩家意外死亡）、法术攻击（伤害类型不被视为来自玩家，造成战利品丢失）
- 物品与方块：放射性面包、抗辐射胶囊、反应堆检测报警器（Mekanism 已移除）

### 变更

- 移除量子套装的常规合成，改为动力合成
- 新增甜浆果汁的搅拌、注液配方
- 修改附魔金苹果配方
- 修改部分机械动力合成表以适配游戏平衡

### 战利品表

- 监守者新增永恒赛特斯宝石掉落，概率 20%
- 远古城市宝藏新增「生命流失」「伤害加成」附魔书
- 末影龙固定掉落 2 个永恒赛特斯宝石与 1 个星辉量子宝石

### 技术

- 修复骂人惩罚事件的连带范围伤害，改为直接拦截恶意消息（CIR 服务器专用）
- 全面重写「生命流失」状态效果逻辑，修复玩家死亡无播报、实体死亡无掉落的问题
- 全面重写「生命固结」状态效果逻辑
- 重写「伤害加成」附魔逻辑，对幽匿生物、末影龙等目标提供额外伤害
- 清理大量表述不规范、冗长的代码，修复部分错误实现

---

# English

## [4.0.0] - 2026-11-03

### Added

- **Rebuilt recipe set for Create: Applied Kinetics.** A defect in the mod stopped its recipes from loading and it had not been fixed as of this release, so the server removed it. Its 11 sequenced assembly recipes and 11 incomplete items are rebuilt here in full with KubeJS, and the AE2 inscriber recipe logic it had been overriding is restored alongside them.
- **Stella Mechanism** (`kubejs:stella_mechanism`). A sequenced assembly product, rarity Rare, stackable. Built from a precision mechanism: inject liquid experience, install a diamond, install stella redstone dust and press once — one cycle, performed twice. 80% yields a stella mechanism, 20% yields a diamond.
- **Extended circuit cutter recipe.** The crystal assembler now takes nine inputs instead of eight, with a stella mechanism as the ninth.
- **AE2 mechanical crafting recipes**, including the quantum armour set.

### Changed

- Damage Bonus enchantment: added entries for the quantum helmet and chestplate
- Regions Unexplored: filled in 137 missing Simplified Chinese entries covering biomes, blocks, items and the config screen
- Minor Create recipe adjustments

### Removed

- The tangyuan and raw tangyuan items, along with all of their recipes

### Loot tables

- Adjusted the warden's loot table

## [3.1.0] - 2026-02-24

### Notes

- No KubeJS changes compared to `3.0.0`; the version number tracks the modpack. Treated as the closing release of the 3.x branch.

## [3.0.0] - 2025-12-06

Stable release of the Create-only build. Requires Create 6.0.8 and KubeJS 7.2 or newer.

### Fixed

- Restored the regular recipes for raw reinforced deepslate and synthetic budding amethyst. The basin recipe input had been incorrectly limited to nine items.
- Restored the random block loot table.

### Changed

- Raised the cost of the waystone (`waystones:warpstone`), now requiring the mechanical crafter
- Replaced all datapack-registered recipes with KubeJS Create
- Adjusted code for KubeJS 7.2
- Corrected awkward translations in the language files

### Added

- Superheated burning recipes (`liquid_burning`) for diesel, gasoline and biodiesel
- Sequenced assembly recipe for eternal reinforced glass
- Recipes for each magic orb
- Items: eternal reinforced glass (incomplete), dark orb, levitation orb, lost-way orb

## [3.0.0-pre] - 2025-09-30

First release of the Create-only branch. Descends from `2.2.0`; not a major update.

### Removed

- All AE2 and AE2 add-on recipes
- Ars Nouveau related recipes
- Items and events that do not belong to a Create-only pack

### Added

- Fluids: apple juice, glow berry juice, cranberry juice
- Filling, emptying and mixing recipes for those fluids, plus apple juice to apple cider
- Rock salt grinding and rock salt ore excavation recipes
- Purification of mineral salt (Expanded Delight) into salt (TofuCraft)
- Interaction events for each magic orb, and a random death event for elite silverfish

## [2.2.0] - 2025-09-05

### Added

- Enchantment: Void Rescue — at low health under void damage, teleports the player at the cost of destroying the enchanted armour piece
- Items: raw warp scroll, guard recruitment order, warp scroll (incomplete)
- Block interaction: right-click a bell with the guard recruitment order to summon a guard villager
- Hostile mob and guard villager reinforcement on spawn (attribute buffs, rare variants, and a server-wide coordinate broadcast when a rare variant spawns above y = 62)
- Tags: `kubejs:include_xxx` (regex match on item ids) and `kubejs:drinks` (every bottleable non-potion fluid)
- Conventional type tags and notes for KubeJS-registered items
- Languages: Traditional Chinese (`zh_tw`) and English (`en_us`)

### Changed

- Adjusted drilling time and output chance for the reinforce/degeneration gem ore excavation recipes
- Converted nearly all hardcoded text to translation keys

### Removed

- Crafting table recipe for the warp scroll

### Loot tables

- End city treasure: added XP Looting, Rapid Cooldown and Blood Thirsty books
- Woodland mansion treasure: added Health Theft book
- Warden drop rate for the eternal certus gem lowered from 20% to 10%

## [2.1.0] - 2025-04-29

### Added

- Items: ancient debris dust, bombegranate amulet, weather orbs (clear/rain/storm), time orbs (day/night), four incomplete items
- Mob effect: Explosion Support
- Sounds: Revenge (Minecraft Creeper Song) excerpt, SEGA maimai PRISM login excerpt
- Block interaction: right-click a sculk shrieker with stella redstone dust to turn it into one that summons a warden, with a server-wide broadcast
- Item use: right-click the bombegranate amulet to gain Explosion Support
- Descriptions for every KubeJS-registered enchantment
- Redemption code system, with rewards and codes hardcoded and the redeemed list registered automatically

### Changed

- Reinforced deepslate, budding amethyst, diamond and the 256K cell component now come from sequenced assembly
- Weather and time orbs now use mechanical crafting
- Ancient debris dust is now produced by the graphite mill / crushing wheels; netherite scrap is smelted from it in a blast furnace or furnace

### Removed

- Reaction chamber recipe for the 256K cell component
- Part of the Create: Things & Misc recipe set, whose items no longer exist
- The Galaxy Lucky Star gacha simulator module

### Loot tables

- End city treasure: added a roll table with damage resistant capsules, stella quantum gems and other uncraftable resources
- Raised the eternal certus gem chance in woodland mansion treasure and lowered the junk loot chance
- Removed the ender dragon loot table, rewarding the player directly instead, to limit mob farms added by other mods

## [2.0.0] - 2025-04-15

### Port

Migrated from Forge 1.20.1 + KubeJS 6 to NeoForge 1.21.1 + KubeJS 7.

- Ported every fluid except those belonging to Let's Do: Vinery
- Rewrote every valid recipe registered by KubeJS Create v1.5 (1.20.1 Forge), except sequenced assembly, as 1.21.1 datapacks
- Ported the KubeJS Delight recipes, most EntityEvents, all vanilla recipes, most loot tables (JS to JSON) and nearly all PlayerEvents
- Rewrote every registered enchantment as 1.21.1 datapack data
- Ported the recipe reloader and its supporting code

### Added

- Items: sweet berry juice, eternal certus dust, stella quantum gem, stella redstone dust, damage resistant capsule
- Fluid: sweet berry juice
- Enchantment: XP Looting — increases experience dropped by mobs per level
- Events: announce a player's name and coordinates when they take damage below a health threshold, applying a timed effect based on the damage source; grant one hour of Luck II on join

### Removed

- Basic and advanced currency (their source materials were removed by a mod update)
- All magic orbs (the linked mod is abandoned, and hardcore mode cannot trigger `player.kill()` voluntarily)
- All custom music discs (to shrink the pack and avoid crash issues)
- Oxidized iron ingot (its production chain could be farmed indefinitely)
- All grape juice fluids (Let's Do: Vinery is abandoned)
- Enchantments: Wither Attack (could kill hardcore players unexpectedly) and Spell Attack (its damage type is not attributed to the player, causing lost loot)
- Items and blocks: radioactive bread, anti-radiation capsule, reactor warning detector (Mekanism was removed)

### Changed

- Removed the regular recipe for the quantum armour set and moved it to mechanical crafting
- Added mixing and filling recipes for sweet berry juice
- Changed the enchanted golden apple recipe
- Adjusted several Create recipes for balance

### Loot tables

- Warden now drops the eternal certus gem at 20%
- Ancient city treasure now yields the Health Lose and Damage Bonus books
- Ender dragon now always drops two eternal certus gems and one stella quantum gem

### Technical

- Fixed the profanity penalty causing area damage to bystanders; malicious messages are now blocked outright (CIR server only)
- Rewrote the Health Lose effect to fix missing death announcements and missing mob drops
- Rewrote the Health Freeze effect
- Rewrote the Damage Bonus enchantment, which now deals extra damage to sculk mobs, the ender dragon and similar targets
- Cleaned up verbose and poorly written code, and fixed several faulty implementations
