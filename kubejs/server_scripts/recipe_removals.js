// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello, World! (You will see this line every time server resources reload)')

onEvent('recipes', event => {
	event.remove({id: 'beyond_earth:steel_ingot_blasting'})
	event.remove({id: 'beyond_earth:beyond_earth_steel_ingot'})
	event.remove({id: 'beyond_earth:beyond_earth_iron_plate'})
	event.remove({id: 'beyond_earth:beyond_earth_desh_plate'})

	event.remove({input: '#alltheores:ore_hammers'})
	event.remove({output: '#alltheores:ore_hammers'})

	event.remove({input: '#immersiveengineering:tools/hammers'})


	const ores_to_remove = ["aluminum", "lead", "nickel", "osmium", "platinum", "silver", "tin", "uranium", "zinc", "iridium", "ruby", "peridot", "sapphire"]
	const other_ores_to_remove = ["coal", "copper", "emerald", "iron", "quartz", "redstone", "diamond", "lapis", "platnium"]

	function remove_ore_recipe(name) { //(Recipe removals automatically mirrored to variants)
		event.remove({input: 'alltheores:' + name + '_ore'})
		event.remove({output: 'alltheores:' + name + '_ore'})
		event.remove({input: 'alltheores:raw_' + name})
		event.remove({output: 'alltheores:raw_' + name})
		event.remove({input: 'alltheores:raw_' + name + "_block"})
		event.remove({output: 'alltheores:raw_' + name + "_block"})
	}
	function remove_other_ore(name) {
		event.remove({input: 'alltheores:' + name + '_other_ore'})
		event.remove({output: 'alltheores:' + name + '_other_ore'})
	}

	ores_to_remove.forEach(remove_ore_recipe)
	other_ores_to_remove.forEach(remove_other_ore)
})

onEvent('item.tags', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')

	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})