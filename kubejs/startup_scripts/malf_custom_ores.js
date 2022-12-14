// priority: 99
// This file adds ore blocks, raw ore, dusts and ingots (maybe more depending on the ore)

console.info('Hello, World! (You will only see this line once in console, during startup)')

const ore_names = ["iron", "copper", "gold", "aluminum", "lead", "silver", "nickel", "uranium", "tin", "zinc"]

const malf_common_ores = ["hematite", "tetrahedrite", "gold", "cinnabar", "lazurite", "kimberlite", "beryl", "cassiterite", "bauxite", "pentlandite", "galena", "pitchblende", "sphalerite", "argentite"]
const malf_exotic_ores = ["ethereal_bronze", "rare_earth"]

const malf_ore_hardness = {"ethereal_bronze":4}
const malf_ore_mining_level = {"ethereal_bronze":"diamond"}
const malf_ore_luminosity = {"ethereal_bronze":0.2, "pitchblende":0.1} //0.0 ~ 1.0

function capitalizeFirstLetter(string) { //Capitalizes first letter
	return string.charAt(0).toUpperCase() + string.slice(1);
}
function fancify(name) { //Capitalizes and adds spaces to an item id name ('lapis_lazuli' = 'Lapis Lazuli', 'redstone' = 'Redstone', etc)
	var word = name.split("_")
	var final_string = ""

	for (var i = 0; i < word.length; i++) {
		if (word[i] === "deepslate") {word[i] = "slate"} //Shortens deepslate to slate
		word[i] = capitalizeFirstLetter(word[i]);

		if (i !== 0) { final_string += (" " + word[i]) } //Add space before the word, unless first word
		else { final_string += (word[i]) }
	}
	return final_string
}


onEvent('item.registry', event => {
	
	// Register new items here
	// event.create('example_item').displayName('Example Item')

	function setupWashedOre(item) {
		event.create('malf:washed_'+item+"_ore").displayName("Washed "+capitalizeFirstLetter(item)+" Ore")
	}
	ore_names.forEach(setupWashedOre)
	
	//Rare earth
	event.create('malf:rare_earth_dust').displayName("Rare Earth Dust")
	event.create('malf:rare_earth_mineral').displayName("Rare Earth Mineral")
	
	
})

onEvent('block.registry', event => {
	// Register new blocks here
	// event.create('example_block').material('wood').hardness(1.0).displayName('Example Block')

	function createOreBlocks(name) { // Creates a new ore block with all listed variants
		var variants = ["", "_deepslate", "_nether", "_end"]; // ("" = normal variant), needs a "_" before the name (for technical reasons!)

		var hardness = 3 // Standard hardness
		if (typeof malf_ore_hardness[name] !== 'undefined') { hardness = malf_ore_hardness[name] } // Sets hardness if defined

    	var mining_level = 'iron' // Standard mining level
		if (typeof malf_ore_mining_level[name] !== 'undefined') { mining_level = malf_ore_mining_level[name] } // Sets mining level if defined

		var luminosity = 0 // Standard luminosity
		if (typeof malf_ore_luminosity[name] !== 'undefined') { luminosity = malf_ore_luminosity[name] } // Sets luminosity if defined
		
		for (var i = 0; i < variants.length; i++) {
			var full_name = name + variants[i] + "_ore"
			var texture_path = ""
			
			
			if (variants[i] == "") {
				texture_path = ("malf:block/ores/stone/" + full_name)
			}
			if (variants[i] != "") {
				texture_path = ("malf:block/ores/" + variants[i].slice(1) + "/" + full_name)
			}

			//console.log("texture path: "+texture_path)

			if (variants[i] === "_deepslate") { hardness += 1 }

			event.create('malf:' + full_name) //Create the ore!
				.material('stone')
				.hardness(hardness)
				.displayName(fancify(full_name))
				.tagBlock('minecraft:mineable/pickaxe') // Make it mine faster using a shovel in 1.18.2+
				.tagBlock('minecraft:needs_' + mining_level + '_tool') // Make it require an iron or higher level tool on 1.18.2+
				.requiresTool(true)
				.tagBoth('forge:ores')
				.tagBoth('forge:ores/' + name)
				.lightLevel(luminosity)
				.textureAll(texture_path)
		}
	}

	malf_common_ores.forEach(createOreBlocks);
	malf_exotic_ores.forEach(createOreBlocks);
	
})

onEvent('item.modification', event => {


})