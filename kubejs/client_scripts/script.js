// priority: 10

console.info('Hello, World! (You will see this line every time client resources reload)')

ItemEvents.tooltip(tooltip => {
	tooltip.add('immersiveengineering:hammer', "\u00A7c"+"\u00A7o"+'Only used for multiblock structuring and crafting! Will break if used for plate making or ore crushing.')

})

/*onEvent('client.generate_assets', event => {
	const rename = (item, newName) => event.addLang(Item.of(item).item.getDescriptionId(), newName)
  
	// rename mutton to BAAAAAAA
	rename('immersiveengineering:cokebrick', "Coke Brick Block")
	rename('immersiveengineering:blastbrick', "Blast Brick Block")
	// rename all items with e in their path to EEEEEEEEEEEE
	//Ingredient.of(/:.*e/).stacks.forEach(item => rename(item, "EEEEEEEEEEEE"))
  })*/


JEIEvents.information(event => {

})

JEIEvents.hideItems(event => {
	// Hide items in JEI here
	// event.hide('minecraft:cobblestone')
})

