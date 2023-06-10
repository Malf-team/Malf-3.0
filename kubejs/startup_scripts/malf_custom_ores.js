// priority: 99
// This file adds ore blocks, raw ore, dusts and ingots (maybe more depending on the ore)

console.info('Hello, World! (You will only see this line once in console, during startup)')
var tag_list = {}


function capitalizeFirstLetter(string) { //Capitalizes first letter
	return string.charAt(0).toUpperCase() + string.slice(1);
}
function fancify(name) { //Capitalizes and adds spaces to an item id name ('lapis_lazuli' = 'Lapis Lazuli', 'redstone' = 'Redstone', etc)
	var word = name.split("_")
	var final_string = ""

	for (var i = 0; i < word.length; i++) {
		//if (word[i] === "deepslate") {word[i] = "slate"} //Shortens deepslate to slate
		word[i] = capitalizeFirstLetter(word[i]);

		if (i !== 0) { final_string += (" " + word[i]) } //Add space before the word, unless first word
		else { final_string += (word[i]) }
	}
	return final_string
}


onEvent('item.registry', event => {
	
	// Register new items here
	// event.create('example_item').displayName('Example Item')

	function setupOreItems(item) {
		event.create('malf:raw_' + item).displayName("Raw " + fancify(item)).texture("malf:item/generated/raw/raw_" + item) //Raw
		event.create('malf:crushed_' + item).displayName("Crushed " + fancify(item)).texture("malf:item/generated/crushed/crushed_" + item) //Crushed
		event.create('malf:' + item + '_grit').displayName(fancify(item) + " Grit").texture("malf:item/generated/grit/" + item + "_grit") //Grit
		event.create('malf:' + item + '_dust').displayName(fancify(item) + " Dust").texture("malf:item/generated/dust/" + item + "_dust") //Dust
		event.create('malf:pulverized_' + item).displayName("Pulverized " + fancify(item)).texture("malf:item/generated/pulverized/pulverized_" + item) //Pulverized
		event.create('malf:washed_'+item).displayName("Washed " + fancify(item)).texture("malf:item/generated/washed/washed_" + item) //Washed
		event.create('malf:squeezed_' + item).displayName("Squeezed " + fancify(item)).texture("malf:item/generated/squeezed/squeezed_" + item) //Squeezed
		event.create('malf:vacuum_dried_' + item).displayName("Vacuum Dried " + fancify(item)).texture("malf:item/generated/vacuum_dried/vacuum_dried_" + item) //Vacuum Dried
		event.create('malf:centrifuged_' + item).displayName("Centrifuged " + fancify(item)).texture("malf:item/generated/centrifuged/centrifuged_" + item) //Centrifuged
		event.create('malf:energized_' + item).displayName("Energized " + fancify(item)).texture("malf:item/generated/energized/energized_" + item) //Energized

		//Tags
		tag_list['malf:raw_' + item] 		= ["forge:raw_materials", "forge:raw_materials/"+item]
		tag_list['malf:crushed_' + item] 	= ["create:crushed_ores"]
		tag_list['malf:' + item + '_dust'] 	= ["forge:dusts", "forge:dusts/"+item]
	}

	function setupIngotItem(item) {
		var rarity = "common" // Standard rarity
		if (typeof malf_ore_rarity[item] !== 'undefined') { rarity = malf_ore_rarity[item] }

		var glow = false // Standard glow value
		if (typeof malf_ore_glow[item] !== 'undefined') { glow = malf_ore_glow[item] }

		event.create('malf:' + item + "_ingot").displayName(fancify(item) + " Ingot").texture("malf:item/generated/ingot/"+ item + "_ingot").rarity(rarity).glow(glow)
		tag_list['malf:' + item + "_ingot"] = ["forge:ingots", "forge:ingots/"+item]
	}

	function setupRawItem(item) {
		event.create('malf:raw_' + item).displayName("Raw " + fancify(item)).texture("malf:item/generated/raw/raw_" + item) //Raw
		tag_list['malf:raw_' + item] = ["forge:raw_materials", "forge:raw_materials/"+item]
	}

	function setupDustItem(item) {
		event.create('malf:' + item + '_dust').displayName(fancify(item) + " Dust").texture("malf:item/generated/dust/" + item + "_dust")
		tag_list['malf:' + item + '_dust'] = ["forge:dusts", "forge:dusts/"+item]
	}

	function setupEnergizedItem(item) {
		event.create('malf:energized_' + item).displayName("Energized " + fancify(item)).texture("malf:item/generated/energized/energized_" + item)
	}

	function setupExoticOreItems(item) {
		setupRawItem(item)
		setupDustItem(item)
		setupIngotItem(item)
	}

	
	malf_common_ores.forEach(setupOreItems)

	//Ethereal Bronze
	setupExoticOreItems("ethereal_bronze")

	//Rare earth
	event.create('malf:rare_earth_dust').displayName("Rare Earth Dust")
	event.create('malf:rare_earth_mineral').displayName("Rare Earth Mineral")

	//Vibranium
	setupExoticOreItems("vibranium")

	//Acryx
	setupExoticOreItems("acryx")

	
	
})

onEvent('block.registry', event => {
	// Register new blocks here
	// event.create('example_block').material('wood').hardness(1.0).displayName('Example Block')

	function createOreBlocks(name) { // Creates a new ore block with all listed variant
		var variant = ["", "deepslate", "nether", "end"]; // ("" = normal variant)

		var hardness = 3 // Standard hardness
		if (typeof malf_ore_hardness[name] !== 'undefined') { hardness = malf_ore_hardness[name] } // Sets hardness if defined

    	var mining_level_tag = 'minecraft:needs_iron_tool'  // Standard mining level
		if (typeof malf_ore_mining_level[name] !== 'undefined') { 

			if (malf_ore_mining_level[name] === 'netherite') {
				mining_level_tag = 'forge:needs_netherite_tool' 
			}
			else {
				mining_level_tag = 'minecraft:needs_' + malf_ore_mining_level[name] + '_tool' 
			}
			
		} // Sets mining level if defined

		var luminosity = 0 // Standard luminosity
		if (typeof malf_ore_luminosity[name] !== 'undefined') { luminosity = malf_ore_luminosity[name] } // Sets luminosity if defined
		
		for (var i = 0; i < variant.length; i++) {
			var full_name = ""
			var texture_path = ""

			if (variant[i]) {
				full_name = variant[i] + "_" + name + "_ore"
				texture_path = ("malf:block/ores/" + variant[i] + "/" + full_name)
			} else {
				full_name = (name + "_ore")
				texture_path = ("malf:block/ores/stone/" + full_name)
			}

			if (variant[i] === "deepslate") { hardness += 1 }

			event.create('malf:' + full_name) //Create the ore!
				.material('stone')
				.hardness(hardness)
				.displayName(fancify(full_name))
				.tagBlock('minecraft:mineable/pickaxe') // Make it mine faster using a shovel in 1.18.2+
				.tagBlock(mining_level_tag) // Make it require an iron or higher level tool on 1.18.2+
				.requiresTool(true)
				.tagBoth('forge:ores')
				.tagBoth('forge:ores/' + name)
				.lightLevel(luminosity)
				.textureAll(texture_path)
		}
	}

	function createSingleOreBlock(name) { // Creates a new ore block with no variants (either normal stone version or custom)

		var hardness = 3 // Standard hardness
		if (typeof malf_ore_hardness[name] !== 'undefined') { hardness = malf_ore_hardness[name] } // Sets hardness if defined

    	var mining_level_tag = 'minecraft:needs_iron_tool'  // Standard mining level
		if (typeof malf_ore_mining_level[name] !== 'undefined') { 

			if (malf_ore_mining_level[name] === 'netherite') {
				mining_level_tag = 'forge:needs_netherite_tool' 
			}
			else {
				mining_level_tag = 'minecraft:needs_' + malf_ore_mining_level[name] + '_tool' 
			}
			
		} // Sets mining level if defined

		var luminosity = 0 // Standard luminosity
		if (typeof malf_ore_luminosity[name] !== 'undefined') { luminosity = malf_ore_luminosity[name] } // Sets luminosity if defined

		var full_name = (name + "_ore")
		var texture_path = ("malf:block/ores/stone/" + full_name)

		event.create('malf:' + full_name) //Create the ore!
			.material('stone')
			.hardness(hardness)
			.displayName(fancify(full_name))
			.tagBlock('minecraft:mineable/pickaxe') // Make it mine faster using a shovel in 1.18.2+
			.tagBlock(mining_level_tag) // Make it require an iron or higher level tool on 1.18.2+
			.requiresTool(true)
			.tagBoth('forge:ores')
			.tagBoth('forge:ores/' + name)
			.lightLevel(luminosity)
			.textureAll(texture_path)
	}

	malf_common_ores.forEach(createOreBlocks);
	//Exotic:
	createOreBlocks("ethereal_bronze")
	createOreBlocks("rare_earth")
	createSingleOreBlock("vibranium")
	createOreBlocks("acryx")

	
})

onEvent('item.modification', event => {


})

global['tag_list'] = tag_list