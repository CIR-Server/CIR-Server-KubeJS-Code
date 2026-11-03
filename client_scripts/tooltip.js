console.log('Loading KubeJS Code: "tooltip.js"');
ItemEvents.modifyTooltips((event) =>{
    event.add('kubejs:raw_reinforced_deepslate',Text.of(Text.translate('tooltip.kubejs.raw_reinforced_deepslate')))
    event.add('kubejs:manmade_budding_amethyst',Text.of(Text.translate('tooltip.kubejs.manmade_budding_amethyst')))
    event.add('kubejs:superblock',Text.of(Text.translate('tooltip.kubejs.superblock')))
    event.add('kubejs:random_block',Text.of(Text.translate('tooltip.kubejs.random_block')))
    event.add('waystones:warp_stone',Text.of(Text.translate('tooltip.waystones.warp_stone')))
    event.add('kubejs:raw_random_block',Text.of(Text.translate('tooltip.kubejs.raw_random_block')))
    event.add('expandeddelight:salt',Text.of(Text.translate('tooltip.expandeddelight.salt')))
})