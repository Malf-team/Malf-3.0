JEIEvents.hideItems(event => {
	console.log('JEI Hide item event fired')

	const hide = [
		'minecraft:barrier',
		'minecraft:chain_command_block',
		'minecraft:command_block',
		'minecraft:command_block_minecart',
		"ae2:charger",
		"alltheores:copper_ore_hammer",
		"alltheores:iron_ore_hammer",
		"alltheores:bronze_ore_hammer",
		"alltheores:invar_ore_hammer",
		"alltheores:platinum_ore_hammer",
		"alltheores:ruby_ore",
		"alltheores:ruby_slate_ore",
		"alltheores:peridot_ore",
		"alltheores:peridot_slate_ore",
		"alltheores:sapphire_ore",
		"alltheores:sapphire_slate_ore",
	]

	const ores_to_remove = ["aluminum", "lead", "nickel", "osmium", "platinum", "silver", "tin", "uranium", "zinc", "iridium"]
	const other_ores_to_remove = ["coal", "copper", "emerald", "iron", "quartz", "redstone", "diamond", "lapis", "platnium"]

	function hide_alltheores_ore(name) {
		hide.push("alltheores:"+name+"_ore")
		hide.push("alltheores:"+name+"_slate_ore")
		hide.push("alltheores:"+name+"_nether_ore")
		hide.push("alltheores:"+name+"_end_ore")
		hide.push("alltheores:raw+"+name)
		hide.push("alltheores:raw+"+name+"_block")
	}

	function hide_other_ore(name) {
		hide.push("alltheores:"+name+"_other_ore")
	}

	ores_to_remove.forEach(hide_alltheores_ore)
	other_ores_to_remove.forEach(hide_other_ore)

	hide.forEach((id) => {
		event.hide(id)
	})

	event.hide('malf:unprocessed_steel_dust')
})
