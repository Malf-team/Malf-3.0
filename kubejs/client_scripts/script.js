// priority: 10

console.info('Hello, World! (You will see this line every time client resources reload)')

onEvent('item.tooltip', tooltip => {
	tooltip.add('immersiveengineering:hammer', "\u00A7c"+"\u00A7o"+'Only used for multiblock structuring and crafting! Will break if used for plate making or ore crushing.')

	tooltip.add('malf:ethereal_bronze_ore', "\u00A79"+"\u00A7o"+'CuSn??')
	tooltip.add('malf:deepslate_ethereal_bronze_ore', "\u00A79"+"\u00A7o"+'CuSn??')
	tooltip.add('malf:nether_ethereal_bronze_ore', "\u00A79"+"\u00A7o"+'CuSn??')
	tooltip.add('malf:end_ethereal_bronze_ore', "\u00A79"+"\u00A7o"+'CuSn??')

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

