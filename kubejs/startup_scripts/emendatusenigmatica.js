const emendatusenigmatica_metal = [
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
    'iesnium'
]
const emendatusenigmatica_gem = [
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
    'ruby'
]
const emendatusenigmatica_alloy = [
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
    'tainted_gold'

]
const emendatusenigmatica_vanilla = [
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
const emendatusenigmatica_vanilla_ingot = [
    'copper',
    'gold',
    'iron',
    'netherite',
]
const emendatusenigmatica = [
    { name: 'coal', type: 'vanilla' },
    { name: 'copper', type: 'vanilla' },
    { name: 'diamond', type: 'vanilla' },
    { name: 'emerald', type: 'vanilla' },
    { name: 'gold', type: 'vanilla' },
    { name: 'iron', type: 'vanilla' },
    { name: 'lapis', type: 'vanilla' },
    { name: 'netherite', type: 'vanilla' },
    { name: 'quartz', type: 'vanilla' },
    { name: 'redstone', type: 'vanilla' },

    { name: 'brass', type: 'alloy' },
    { name: 'bronze', type: 'alloy' },
    { name: 'constantan', type: 'alloy' },
    { name: 'electrum', type: 'alloy' },
    { name: 'enderium', type: 'alloy' },
    { name: 'graphite', type: 'alloy' },
    { name: 'invar', type: 'alloy' },
    { name: 'lumium', type: 'alloy' },
    { name: 'signalum', type: 'alloy' },
    { name: 'steel', type: 'alloy' },
    { name: 'fiery', type: 'alloy' },
    { name: 'infused_iron', type: 'alloy' },
    { name: 'ironwood', type: 'alloy' },
    { name: 'knightmetal', type: 'alloy' },
    { name: 'orichalcum', type: 'alloy' },
    { name: 'refined_glowstone', type: 'alloy' },
    { name: 'refined_obsidian', type: 'alloy' },
    { name: 'rose_gold', type: 'alloy' },
    { name: 'sky', type: 'alloy' },
    { name: 'soul_steel', type: 'alloy' },
    { name: 'tainted_gold', type: 'alloy' },

    { name: 'apatite', type: 'gem' },
    { name: 'bitumen', type: 'gem' },
    { name: 'charoite', type: 'gem' },
    { name: 'cinnabar', type: 'gem' },
    { name: 'dimensional', type: 'gem' },
    { name: 'diopside', type: 'gem' },
    { name: 'moonstone', type: 'gem' },
    { name: 'potassium_nitrate', type: 'gem' },
    { name: 'pyrope', type: 'gem' },
    { name: 'sapphire', type: 'gem' },
    { name: 'sulfur', type: 'gem' },
    { name: 'aquite', type: 'gem' },
    { name: 'arcane', type: 'gem' },
    { name: 'carminite', type: 'gem' },
    { name: 'certus_quartz', type: 'gem' },
    { name: 'charged_certus_quartz', type: 'gem' },
    { name: 'fluorite', type: 'gem' },
    { name: 'peridot', type: 'gem' },
    { name: 'ruby', type: 'gem' },

    { name: 'aluminum', type: 'metal' },
    { name: 'iridium', type: 'metal' },
    { name: 'lead', type: 'metal' },
    { name: 'nickel', type: 'metal' },
    { name: 'platinum', type: 'metal' },
    { name: 'silver', type: 'metal' },
    { name: 'tin', type: 'metal' },
    { name: 'titanium', type: 'metal' },
    { name: 'tungsten', type: 'metal' },
    { name: 'uranium', type: 'metal' },
    { name: 'zinc', type: 'metal' },
    { name: 'cobalt', type: 'metal' },
    { name: 'falsite', type: 'metal' },
    { name: 'horizonite', type: 'metal' },
    { name: 'osmium', type: 'metal' },
    { name: 'ventium', type: 'metal' },
    { name: 'iesnium', type: 'metal' }
]
StartupEvents.registry('item', (event) => {
    event.create(`emendatusenigmatica:charcoal_dust`).texture(`emendatusenigmatica:vanilla/charcoal_dust`);
    event.create(`emendatusenigmatica:obsidian_dust`).texture(`emendatusenigmatica:vanilla/obsidian_dust`);
    emendatusenigmatica_metal.forEach((item) => {
        event.create(`emendatusenigmatica:${item}_clump`).texture(`emendatusenigmatica:metal/${item}/items/${item}_clump`);
        event.create(`emendatusenigmatica:${item}_crystal`).texture(`emendatusenigmatica:metal/${item}/items/${item}_crystal`);
        event.create(`emendatusenigmatica:${item}_dirty_dust`).texture(`emendatusenigmatica:metal/${item}/items/${item}_dirty_dust`);
        event.create(`emendatusenigmatica:${item}_dust`).texture(`emendatusenigmatica:metal/${item}/items/${item}_dust`);
        event.create(`emendatusenigmatica:${item}_fragment`).texture(`emendatusenigmatica:metal/${item}/items/${item}_fragment`);
        event.create(`emendatusenigmatica:${item}_gear`).texture(`emendatusenigmatica:metal/${item}/items/${item}_gear`);
        event.create(`emendatusenigmatica:${item}_gravel`).texture(`emendatusenigmatica:metal/${item}/items/${item}_gravel`);
        event.create(`emendatusenigmatica:${item}_ingot`).texture(`emendatusenigmatica:metal/${item}/items/${item}_ingot`);
        event.create(`emendatusenigmatica:${item}_nugget`).texture(`emendatusenigmatica:metal/${item}/items/${item}_nugget`);
        event.create(`emendatusenigmatica:${item}_plate`).texture(`emendatusenigmatica:metal/${item}/items/${item}_plate`);
        event.create(`emendatusenigmatica:${item}_rod`).texture(`emendatusenigmatica:metal/${item}/items/${item}_rod`);
        event.create(`emendatusenigmatica:raw_${item}`).texture(`emendatusenigmatica:metal/${item}/items/raw_${item}`);
        if (item != 'lead' && item != 'tin' && item != 'uranium' && item != 'osmium') {
            event.create(`emendatusenigmatica:${item}_shard`).texture(`emendatusenigmatica:metal/${item}/items/${item}_shard`);
        }
        if (item != 'aluminum' && item != 'iridium' && item != 'lead' && item != 'cobalt' && item != 'tungsten') {
            event.create(`emendatusenigmatica:crushed_${item}_ore`).texture(`emendatusenigmatica:metal/${item}/items/crushed_${item}_ore`);
        }
    });
    emendatusenigmatica_alloy.forEach((item) => {
        event.create(`emendatusenigmatica:${item}_dust`).texture(`emendatusenigmatica:alloy/${item}/items/${item}_dust`);
        event.create(`emendatusenigmatica:${item}_gear`).texture(`emendatusenigmatica:alloy/${item}/items/${item}_gear`);
        event.create(`emendatusenigmatica:${item}_ingot`).texture(`emendatusenigmatica:alloy/${item}/items/${item}_ingot`);
        event.create(`emendatusenigmatica:${item}_nugget`).texture(`emendatusenigmatica:alloy/${item}/items/${item}_nugget`);
        event.create(`emendatusenigmatica:${item}_plate`).texture(`emendatusenigmatica:alloy/${item}/items/${item}_plate`);
        event.create(`emendatusenigmatica:${item}_rod`).texture(`emendatusenigmatica:alloy/${item}/items/${item}_rod`);
    });
    emendatusenigmatica_gem.forEach((item) => {
        event.create(`emendatusenigmatica:${item}_clump`).texture(`emendatusenigmatica:gem/${item}/items/${item}_clump`);
        event.create(`emendatusenigmatica:${item}_cluster_shard`).texture(`emendatusenigmatica:gem/${item}/items/${item}_cluster_shard`);
        event.create(`emendatusenigmatica:${item}_crystal`).texture(`emendatusenigmatica:gem/${item}/items/${item}_crystal`);
        event.create(`emendatusenigmatica:${item}_gem`).texture(`emendatusenigmatica:gem/${item}/items/${item}_gem`);
        event.create(`emendatusenigmatica:${item}_gravel`).texture(`emendatusenigmatica:gem/${item}/items/${item}_gravel`);
        event.create(`emendatusenigmatica:${item}_plate`).texture(`emendatusenigmatica:gem/${item}/items/${item}_plate`);
        event.create(`emendatusenigmatica:${item}_fragment`).texture(`emendatusenigmatica:gem/${item}/items/${item}_fragment`);
        event.create(`emendatusenigmatica:${item}_shard`).texture(`emendatusenigmatica:gem/${item}/items/${item}_shard`);
        if (item != 'peridot') {
            event.create(`emendatusenigmatica:${item}_gear`).texture(`emendatusenigmatica:gem/${item}/items/${item}_gear`);
        }
        if (item != 'cinnabar') {
            event.create(`emendatusenigmatica:${item}_rod`).texture(`emendatusenigmatica:gem/${item}/items/${item}_rod`);
        }
        if (item != 'diopside' && item != 'carminite') {
            event.create(`emendatusenigmatica:${item}_dirty_dust`).texture(`emendatusenigmatica:gem/${item}/items/${item}_dirty_dust`);
            event.create(`emendatusenigmatica:${item}_dust`).texture(`emendatusenigmatica:gem/${item}/items/${item}_dust`);
        }
    });
    emendatusenigmatica_vanilla.forEach((item) => {
        event.create(`emendatusenigmatica:${item}_plate`).texture(`emendatusenigmatica:vanilla/${item}/items/${item}_plate`);
        event.create(`emendatusenigmatica:${item}_rod`).texture(`emendatusenigmatica:vanilla/${item}/items/${item}_rod`);
        event.create(`emendatusenigmatica:${item}_gear`).texture(`emendatusenigmatica:vanilla/${item}/items/${item}_gear`);

        if (item == 'copper') {
            event.create(`emendatusenigmatica:${item}_nugget`).texture(`emendatusenigmatica:vanilla/${item}/items/${item}_nugget`);
        }

        if (item != 'iron') {
            event.create(`emendatusenigmatica:${item}_gravel`).texture(`emendatusenigmatica:vanilla/${item}/items/${item}_gravel`);
        }

        

        if (item != 'gold') {
            event.create(`emendatusenigmatica:${item}_fragment`).texture(`emendatusenigmatica:vanilla/${item}/items/${item}_fragment`);
        }
        if (item != 'netherite') {
            event.create(`emendatusenigmatica:${item}_clump`).texture(`emendatusenigmatica:vanilla/${item}/items/${item}_clump`);
            event.create(`emendatusenigmatica:${item}_dirty_dust`).texture(`emendatusenigmatica:vanilla/${item}/items/${item}_dirty_dust`);
            event.create(`emendatusenigmatica:${item}_crystal`).texture(`emendatusenigmatica:vanilla/${item}/items/${item}_crystal`);
            event.create(`emendatusenigmatica:${item}_shard`).texture(`emendatusenigmatica:vanilla/${item}/items/${item}_shard`);
            event.create(`emendatusenigmatica:crushed_${item}_ore`).texture(`emendatusenigmatica:vanilla/${item}/items/crushed_${item}_ore`);
            if (item != 'redstone') {
                event.create(`emendatusenigmatica:${item}_dust`).texture(`emendatusenigmatica:vanilla/${item}/items/${item}_dust`);
            }
        }
        if (item != 'copper' && item != 'gold' && item != 'iron' && item != 'netherite') {
            event.create(`emendatusenigmatica:${item}_cluster_shard`).texture(`emendatusenigmatica:vanilla/${item}/items/${item}_cluster_shard`);
            if (item != 'coal' && item != 'lapis' && item != 'redstone' && item != 'quartz' && item != 'diamond' && item != 'emerald') {
                event.create(`emendatusenigmatica:${item}_ravel`).texture(`emendatusenigmatica:vanilla/${item}/items/${item}_ravel`);
                event.create(`emendatusenigmatica:raw_${item}`).texture(`emendatusenigmatica:vanilla/${item}/items/raw_${item}`);
            }
        }

        

    });
})
StartupEvents.registry('block', (event) => {
    emendatusenigmatica.forEach((block) => {
        if (block.name != 'coal' && block.name != 'redstone' && block.name != 'quartz' && block.name != 'lapis' && block.name != 'charoite') {
            event.create(`emendatusenigmatica:${block.name}_block`).material('metal').textureAll(`emendatusenigmatica:${block.type}/${block.name}/blocks/${block.name}_block`).hardness(5)
        }
    });
});