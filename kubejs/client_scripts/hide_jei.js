onEvent('jei.hide.items', (event) => {
	console.log('JEI Hide item event fired')

	const hide = [
		'minecraft:barrier',
		'minecraft:chain_command_block',
		'minecraft:command_block',
		'minecraft:command_block_minecart',
	]

	hide.forEach((id) => {
		event.hide(id)
	})
})