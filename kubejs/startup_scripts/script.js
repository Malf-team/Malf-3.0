// priority: 99

console.info('Hello, World! (You will only see this line once in console, during startup)')

onEvent('item.registry', event => {
	const oreNames = ["iron", "copper", "gold", "aluminum", "lead", "silver", "nickel", "uranium", "tin", "zinc"]
	// Register new items here
	// event.create('example_item').displayName('Example Item')
	event.create('malf:palt_of_the_cosmos').maxStackSize(8).glow(true).displayName("Palt of the Cosmos").food(food => {
		food
    		.hunger(24)
    		.saturation(1.5)//This value does not directly translate to saturation points gained
	})
	event.create('malf:oppsikaxi').displayName("Oppsikaxi").food(food => {
		food
    		.hunger(10)
    		.saturation(0.8)
			.effect('nausea', 150, 0, 1)
	})
	
	
	function capitalizeFirstLetter(string) {
		return string.charAt(0).toUpperCase() + string.slice(1);
	}
	
	function setupWashedOre(item) {
		event.create('malf:washed_'+item+"_ore").displayName("Washed "+capitalizeFirstLetter(item)+" Ore")
	}
	oreNames.forEach(setupWashedOre)
	
	//Rare earth
	event.create('malf:rare_earth_dust').displayName("Rare Earth Dust")
	event.create('malf:rare_earth_mineral').displayName("Rare Earth Mineral")
	
	
})

onEvent('block.registry', event => {
	// Register new blocks here
	// event.create('example_block').material('wood').hardness(1.0).displayName('Example Block')
	event.create('malf:rare_earth_ore')
		   .material('stone')
		   .hardness(3)
		   .displayName('Rare Earth Ore') // No longer required in 1.18.2+
		   .tagBlock('minecraft:mineable/pickaxe') // Make it mine faster using a shovel in 1.18.2+
		   .tagBlock('minecraft:requires_iron_tool') // Make it require an iron or higher level tool on 1.18.2+
		   .requiresTool(true) // Make it require a tool to drop ay loot
		   .tagBoth('forge:ores')
		   .tagBoth('forge:ores/rare_earth')
		   
	event.create('malf:deepslate_rare_earth_ore')
		   .material('stone')
		   .hardness(4.5)
		   .displayName('Rare Earth Slate Ore') // No longer required in 1.18.2+
		   .tagBlock('minecraft:mineable/pickaxe') // Make it mine faster using a shovel in 1.18.2+
		   .tagBlock('minecraft:requires_iron_tool') // Make it require an iron or higher level tool on 1.18.2+
		   .requiresTool(true) // Make it require a tool to drop ay loot
		   .tagBoth('forge:ores')
		   .tagBoth('forge:ores/rare_earth')
		   
	event.create('malf:nether_rare_earth_ore')
		   .material('stone')
		   .hardness(3)
		   .displayName('Rare Earth Nether Ore') // No longer required in 1.18.2+
		   .tagBlock('minecraft:mineable/pickaxe') // Make it mine faster using a shovel in 1.18.2+
		   .tagBlock('minecraft:requires_iron_tool') // Make it require an iron or higher level tool on 1.18.2+
		   .requiresTool(true) // Make it require a tool to drop ay loot
		   .tagBoth('forge:ores')
		   .tagBoth('forge:ores/rare_earth')
		   
	event.create('malf:end_rare_earth_ore')
		   .material('stone')
		   .hardness(3)
		   .displayName('Rare Earth End Ore') // No longer required in 1.18.2+
		   .tagBlock('minecraft:mineable/pickaxe') // Make it mine faster using a shovel in 1.18.2+
		   .tagBlock('minecraft:requires_iron_tool') // Make it require an iron or higher level tool on 1.18.2+
		   .requiresTool(true) // Make it require a tool to drop ay loot
		   .tagBoth('forge:ores')
		   .tagBoth('forge:ores/rare_earth')
})

onEvent('item.modification', event => {


})