// priority: 10

console.info('Hello, World! (You will see this line every time client resources reload)')

onEvent('item.tooltip', tooltip => {
	tooltip.add('immersiveengineering:hammer', "\u00A7c"+"\u00A7o"+'Only used for multiblock structuring and crafting! Will break if used for plate making or ore crushing.')

})


onEvent('jei.information', event => {

})

onEvent('jei.hide.items', event => {
	// Hide items in JEI here
	// event.hide('minecraft:cobblestone')
})

