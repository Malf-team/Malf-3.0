// priority: 10

console.info('Hello, World! (You will see this line every time client resources reload)')

onEvent('item.tooltip', tooltip => {
})

onEvent('jei.information', event => {
	event.add('malf:rare_earth_ore', ['Found under Y=0, more commonly in cold biomes.'])
	event.add('malf:deepslate_rare_earth_ore', ['Found under Y=0, more commonly in cold biomes.'])
	event.add('malf:nether_rare_earth_ore', ['Found under Y=0, more commonly in cold biomes.'])
	event.add('malf:end_rare_earth_ore', ['Found under Y=0, more commonly in cold biomes.'])
})

onEvent('jei.hide.items', event => {
	// Hide items in JEI here
	// event.hide('minecraft:cobblestone')
})

