const emendatusenigmatica_items = [
    'aluminum',
    'iridium',
    'lead',
    'nickel',
    'platinum',
    'silver',
    'tin',
    'titanium',
    'tungsten',
    'uranium',
    'zinc',
    'cobalt',
    'falsite',
    'horizonite',
    'osmium',
    'ventium',
    'iesnium',
    'apatite',
    'bitumen',
    'charoite',
    'cinnabar',
    'dimensional',
    'diopside',
    'moonstone',
    'potassium_nitrate',
    'pyrope',
    'sapphire',
    'sulfur',
    'aquite',
    'arcane',
    'carminite',
    'certus_quartz',
    'charged_certus_quartz',
    'fluorite',
    'peridot',
    'ruby',
    'brass',
    'bronze',
    'constantan',
    'electrum',
    'enderium',
    'graphite',
    'invar',
    'lumium',
    'signalum',
    'steel',
    'fiery',
    'infused_iron',
    'ironwood',
    'knightmetal',
    'orichalcum',
    'refined_glowstone',
    'refined_obsidian',
    'rose_gold',
    'sky',
    'soul_steel',
    'tainted_gold',//
    'coal',
    'copper',
    'diamond',
    'emerald',
    'gold',
    'iron',
    'lapis',
    'netherite',
    'quartz',
    'redstone'
]
const emendatusenigmatica_types = [
    'block',
    'clump',
    'crystal',
    'dirty_dust',
    'dust',
    'fragment',
    'gear',
    'gravel',
    'ingot',
    'nugget',
    'plate',
    'rod',
    'shard',
    'cluster_shard',
    'gem'
    //'_ravel'
    //'shard'
]

ServerEvents.tags('item', (event) => {
    emendatusenigmatica_types.forEach((type) => {
        emendatusenigmatica_items.forEach((item) => {
            if (!Item.exists(`emendatusenigmatica:${item}_${type}`)) {
                return
            } else if (type == 'block') {
                event.add(`forge:storage_${type}s/${item}`, [`emendatusenigmatica:${item}_${type}`])
                event.add(`forge:storage_${type}s`, [`emendatusenigmatica:${item}_${type}`])
            } else if (type == 'raw') {
                event.add(`forge:${type}_materials/${item}`, [`emendatusenigmatica:${type}_${item}`])
                event.add(`forge:${type}_materials`, [`emendatusenigmatica:${type}_${item}`])
            } else {
                event.add(`forge:${type}s/${item}`, [`emendatusenigmatica:${item}_${type}`])
                event.add(`forge:${type}s`, [`emendatusenigmatica:${item}_${type}`])
            };
            if (!Item.exists(`emendatusenigmatica:crushed_${item}_ore`)) {
                return
            } else  {
                event.add(`forge:crushed_ores/${item}`, [`emendatusenigmatica:crushed_${item}_ore`])
                event.add(`forge:crushed_ores`, [`emendatusenigmatica:crushed_${item}_ore`])
            }
        });
    });
});

ServerEvents.tags('block', (event) => {
    emendatusenigmatica_types.forEach((type) => {
        emendatusenigmatica_items.forEach((item) => {
            if (!Item.exists(`emendatusenigmatica:${item}_${type}`)) {
                return
            } else if (type == 'block') {
                event.add(`forge:storage_${type}s/${item}`, [`emendatusenigmatica:${item}_${type}`])
                event.add(`forge:storage_${type}s`, [`emendatusenigmatica:${item}_${type}`])
            } else  {
                return
            }
        });
    });
})