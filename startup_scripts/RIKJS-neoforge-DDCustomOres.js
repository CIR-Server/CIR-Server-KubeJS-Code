// priority: 0

// Register only configured ore variants with existing blockstates.
// Physical properties and the complete sound set come from native DD ores.
StartupEvents.registry('block', event => {
  var config = JsonIO.read('kubejs/config/dd_custom_ores.json');
  if (!config || !config.ores) throw new Error('Missing DD custom ore definitions');

  config.ores.forEach(ore => {
    var statePath = 'kubejs/assets/kubejs/blockstates/' + ore.name + '.json';
    if (!JsonIO.read(statePath)) {
      console.warn('[DD ores] Skipping missing blockstate: ' + ore.name);
      return;
    }
    var source = Block.getBlock(ore.copyFrom);
    if (String(Block.getId(source)) !== ore.copyFrom) {
      throw new Error('DD reference block is unavailable: ' + ore.copyFrom);
    }
    event.create('kubejs:' + ore.name)
      .displayName(ore.displayName)
      .copyPropertiesFrom(source)
      // This KubeJS build overwrites copied strength with builder defaults.
      .hardness(source.defaultDestroyTime())
      .resistance(source.getExplosionResistance())
      .soundType(source.defaultBlockState().getSoundType())
      .requiresTool(true)
      .fullBlock(true)
      .opaque(true)
      .transparent(false)
      .renderType('solid')
      .parentModel('minecraft:block/cube_all')
      .texture('kubejs:block/' + ore.name)
      .tagBlock('minecraft:mineable/pickaxe')
      .tagBlock('minecraft:needs_' + ore.tool + '_tool')
      .tagBoth('c:ores')
      .tagBoth('c:ores/' + ore.mineral)
      .item(item => item.parentModel('kubejs:block/' + ore.name));
  });
});
