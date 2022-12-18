onEvent('jei.hide.items', (event) => {
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
	]

	hide.forEach((id) => {
		event.hide(id)
	})
})