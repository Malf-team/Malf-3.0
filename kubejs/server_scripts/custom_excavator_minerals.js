// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true


onEvent('recipes', event => {
	//Removals:
	event.remove({id:"immersiveengineering:mineral/ancient_debris"})
	event.remove({id:"immersiveengineering:mineral/auricupride"})
	event.remove({id:"immersiveengineering:mineral/beryl"})

	event.remove({id:"immersiveengineering:mineral/bituminous_coal"})
	event.remove({id:"immersiveengineering:mineral/cassiterite"})
	event.remove({id:"immersiveengineering:mineral/chalcopyrite"})

	event.remove({id:"immersiveengineering:mineral/cinnabar"})
	event.remove({id:"immersiveengineering:mineral/cooled_lava_tube"})
	event.remove({id:"immersiveengineering:mineral/cooperite"})

	event.remove({id:"immersiveengineering:mineral/galena"})
	event.remove({id:"immersiveengineering:mineral/igneous_rock"})
	event.remove({id:"immersiveengineering:mineral/laterite"})

	event.remove({id:"immersiveengineering:mineral/mephitic_quarzite"})
	event.remove({id:"immersiveengineering:mineral/nether_silt"})
	event.remove({id:"immersiveengineering:mineral/pentlandite"})
	event.remove({id:"immersiveengineering:mineral/sphalerite"})

	event.remove({id:"immersiveengineering:mineral/silt"})
	event.remove({id:"immersiveengineering:mineral/uraninite"})
	event.remove({id:"immersiveengineering:mineral/wolframite"})


	event.custom({
		"type": "immersiveengineering:mineral_mix",
		"ores": [
			{
				"chance": 0.4,
				"output": {
					"item": "malf:hematite_ore"
				}
			},
			{
				"chance": 0.4,
				"output": {
					"item": "malf:tetrahedrite_ore"
				}
			},
			{
				"chance": 0.1,
				"output": {
					"item": "malf:gold_ore"
				}
			},
			{
				"chance": 0.05,
				"output": {
					"item": "malf:cassiterite_ore"
				}
			},
			{
				"chance": 0.05,
				"output": {
					"item": "malf:bauxite_ore"
				}
			},
		],
		"spoils": [
			{
				"chance": 0.2,
				"output": {
					"item": "minecraft:gravel"
				}
			},
			{
				"chance": 0.5,
				"output": {
					"item": "minecraft:cobblestone"
				}
			},
			{
				"chance": 0.3,
				"output": {
					"item": "minecraft:cobbled_deepslate"
				}
			}
		],
		"dimensions": [
			"minecraft:overworld"
		],
		"weight": 40,
		"fail_chance": 0.75
	}).id("MetalRichSoil")

	event.custom({
		"type": "immersiveengineering:mineral_mix",
		"ores": [
			{
				"chance": 0.3,
				"output": {
					"item": "malf:deepslate_hematite_ore"
				}
			},
			{
				"chance": 0.2,
				"output": {
					"item": "malf:deepslate_tetrahedrite_ore"
				}
			},
			{
				"chance": 0.1,
				"output": {
					"item": "malf:deepslate_argentite_ore"
				}
			},
			{
				"chance": 0.1,
				"output": {
					"item": "malf:deepslate_sphalerite_ore"
				}
			},
			{
				"chance": 0.1,
				"output": {
					"item": "malf:deepslate_galena_ore"
				}
			},
			{
				"chance": 0.05,
				"output": {
					"item": "malf:deepslate_kimberlite_ore"
				}
			},
			{
				"chance": 0.05,
				"output": {
					"item": "malf:deepslate_pitchblende_ore"
				}
			},
		],
		"spoils": [
			{
				"chance": 0.1,
				"output": {
					"item": "minecraft:gravel"
				}
			},
			{
				"chance": 0.4,
				"output": {
					"item": "minecraft:cobblestone"
				}
			},
			{
				"chance": 0.5,
				"output": {
					"item": "minecraft:cobbled_deepslate"
				}
			}
		],
		"dimensions": [
			"minecraft:overworld"
		],
		"weight": 25,
		"fail_chance": 0.75
	}).id("DeepMetalRichSoil")

	event.custom({
		"type": "immersiveengineering:mineral_mix",
		"ores": [
			{
				"chance": 0.7,
				"output": {
					"item": "malf:deepslate_lazurite_ore"
				}
			},
			{
				"chance": 0.1,
				"output": {
					"item": "malf:deepslate_kimberlite_ore"
				}
			},
			{
				"chance": 0.1,
				"output": {
					"item": "malf:deepslate_beryl_ore"
				}
			},
			{
				"chance": 0.1,
				"output": {
					"item": "minecraft:amethyst_shard"
				}
			},
		],
		"spoils": [
			{
				"chance": 0.2,
				"output": {
					"item": "minecraft:gravel"
				}
			},
			{
				"chance": 0.2,
				"output": {
					"item": "byg:quartzite_sand"
				}
			},
			{
				"chance": 0.3,
				"output": {
					"item": "minecraft:cobblestone"
				}
			},
			{
				"chance": 0.3,
				"output": {
					"item": "minecraft:cobbled_deepslate"
				}
			}
		],
		"dimensions": [
			"minecraft:overworld"
		],
		"weight": 25,
		"fail_chance": 0.80
	}).id("CrystallineRock")


	
})

onEvent('item.tags', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')

	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})

