# CIR Server KubeJS Code

[![Minecraft](https://img.shields.io/badge/Minecraft-1.21.1-green)](https://www.minecraft.net/)
[![NeoForge](https://img.shields.io/badge/NeoForge-21.1%2B-orange)](https://neoforged.net/)
[![Create](https://img.shields.io/badge/Create-6.x-blue)](https://modrinth.com/mod/create)
[![AE2](https://img.shields.io/badge/AE2-19.x-yellow)](https://modrinth.com/mod/ae2)
[![KubeJS](https://img.shields.io/badge/KubeJS-7.x.x-purple)](https://kubejs.com/)
[![License: CC BY-SA 4.0](https://img.shields.io/badge/License-CC%20BY--SA%204.0-lightgrey)](https://creativecommons.org/licenses/by-sa/4.0/)

CIR 服务器使用的 KubeJS 脚本集合，覆盖配方、自定义内容、附魔、掉落表和本地化。

## 功能

### 配方重建与改造

服务器移除了「机械动力：应用机械」（Create: Applied Kinetics），该模组原本提供的 11 个序列装配配方与 11 个半成品物品在此用 KubeJS 完整重建；同时补回了被它覆盖掉的 AE2 压印器配方逻辑。

在此基础上重写了一批 Create 配方（压块、混合、切割、序列装配等），并追加了矿物挖掘机的红石强化石产出、AE2 机械工作台的四件量子装备等。删掉的原版配方统一登记在移除清单里，方便追溯。

### 自定义内容

- **物品**：六十余个，包括 256K 存储组件链、星辉量子宝石、永恒赛特斯宝石、红石强化石、人造钻石链，以及「世界之力 / 星辰之力 / 危险之力 / 死生之力」四组功能球
- **方块**：强化玻璃、人造紫水晶母岩、随机方块、配方重载器、节日灯笼等
- **流体**：各类果汁果酒、神秘液体、强化液体
- **药水效果**：易伤、生命固结、生命流失、燃烧、抗毒、傀儡支援
- **音效**：睡蕉之歌、恭喜发财、maimai 登录曲、Creeper

### 星辉构件

新的序列组装产物 `kubejs:stella_mechanism`，稀有度「稀有」，可堆叠。

以精密构件为原料，依次注入液态经验、安装钻石、安装星辉红石粉、冲压一次，这一组动作循环两次；八成产出星辉构件，两成产出钻石。同时它是电路切片器晶体装配配方的第九项输入。

### 附魔与掉落表

九个自定义附魔：吸血、伤害加成、决斗、生命流失、生命窃取、快速冷却、剧毒、虚空救援、经验掠夺。

另有末影龙、监守者、远古城市、末地船、林地府邸等目标的掉落表调整。

### 事件逻辑

方块、实体、物品、玩家四类事件脚本，包含决斗系统、登录提示、聊天指令彩蛋，以及若干机器与实体的行为微调。

### 本地化

`assets/` 下另有二十个模组的语言文件覆盖，其中未至之地（Regions Unexplored）补齐了 137 条缺失词条。以资源包形式加载，只覆盖同名键，不改动任何模组 jar。

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
