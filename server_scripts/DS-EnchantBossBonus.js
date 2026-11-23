// priority: 0
// ============================================================
// 伤害加成附魔（kubejs:damage_bonus）：Boss 额外伤害
// [CIR 2026-11-22]
//
// 只对「官方 boss 标签里登记的实体」生效，不看血量。
// 白名单来源：
//   data/c/tags/entity_type/bosses.json        ← 灾变 8 个 + #twilightforest:bosses
//   data/twilightforest/tags/entity_type/bosses.json ← 暮色 9 个
// 无额外条件，普通怪和 InfernalMobs 精英怪都不会触发。
//
// 额外伤害 = 8 + 3 × (等级 - 1)
//   1 级 +8 / 2 级 +11 / 3 级 +14 / 4 级 +17 / 5 级 +20
//
// 与附魔 JSON 里原本的「3 + 1.5×(等级-1)」是替换关系：
// 只补差值，所以最终 Boss 身上合计是 newBonus。
// ============================================================
var CIR_BOSS_BONUS_ENCH = 'kubejs:damage_bonus'

var CIR_BOSS_TYPES = [
  // 灾变
  'cataclysm:ignis',
  'cataclysm:netherite_monstrosity',
  'cataclysm:ender_guardian',
  'cataclysm:the_harbinger',
  'cataclysm:the_leviathan',
  'cataclysm:ancient_remnant',
  'cataclysm:maledictus',
  'cataclysm:scylla',
  // 暮色森林
  'twilightforest:naga',
  'twilightforest:lich',
  'twilightforest:minoshroom',
  'twilightforest:hydra',
  'twilightforest:knight_phantom',
  'twilightforest:ur_ghast',
  'twilightforest:alpha_yeti',
  'twilightforest:snow_queen',
  'twilightforest:plateau_boss'
]

function cirReadEnchantLevel(stack, id) {
  // KubeJS 不同版本读附魔等级的入口不一样，逐个试
  try {
    var lv = stack.getEnchantmentLevel(id)
    if (lv !== undefined && lv !== null) return Number(lv)
  } catch (e) {}
  try {
    var map = stack.getEnchantments()
    if (map) {
      var v = map[id]
      if (v === undefined && map.get) v = map.get(id)
      if (v !== undefined && v !== null) return Number(v)
    }
  } catch (e) {}
  try {
    var map2 = stack.enchantments
    if (map2) {
      var v2 = map2[id]
      if (v2 !== undefined && v2 !== null) return Number(v2)
    }
  } catch (e) {}
  return 0
}

EntityEvents.beforeHurt(event => {
  var target = event.getEntity()
  if (target == null || !target.isLiving()) return

  // 1) 必须是 boss 白名单里的实体
  var typeId = String(target.getType())
  if (typeId == null) return
  if (CIR_BOSS_TYPES.indexOf(typeId) < 0) return

  // 2) 攻击者必须是玩家，且主手带附魔
  var source = event.getSource()
  var attacker = source.actual
  if (attacker == null || !attacker.isPlayer()) return

  var hand = attacker.getMainHandItem()
  if (hand == null || hand.isEmpty()) return

  var level = cirReadEnchantLevel(hand, CIR_BOSS_BONUS_ENCH)
  if (level <= 0) return

  var dmg = event.getDamage()
  if (dmg <= 0) return

  // 附魔 JSON 里原本的加成：base 3，每级 +1.5
  var origBonus = 3 + 1.5 * (level - 1)
  // Boss 用的新加成：base 8，每级 +3
  var newBonus = 8 + 3 * (level - 1)

  // 只加差值，避免重复计算
  event.setDamage(dmg + (newBonus - origBonus))
})
