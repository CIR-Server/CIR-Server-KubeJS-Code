// priority: 0

// KubeJS file assets load above ordinary user packs. Keep the editable plain
// textures and map the configured ore models to the selected outline pack.
ClientEvents.generateAssets('last', event => {
  var enabled = false;
  Client.getResourcePackRepository().getSelectedPacks().forEach(pack => {
    if (String(pack.getDescription().getString()).indexOf('[CIR Ore Outlines]') === 0) enabled = true;
  });
  var config = JsonIO.read('kubejs/config/dd_custom_ores.json');
  if (!config || !config.ores) throw new Error('Missing DD custom ore definitions');
  var names = config.ores.map(ore => ore.name);
  names.forEach(name => {
    event.json('kubejs:models/block/' + name, {
      parent: 'minecraft:block/cube_all',
      textures: { all: (enabled ? 'cir_ore_outlines:block/' : 'kubejs:block/') + name }
    });
  });
});
