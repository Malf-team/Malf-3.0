// priority: 0
settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

//______________________________________________________________________________________________

const processing_output = global['processing_output']
const malf_common_ores = global['malf_common_ores']
const malf_exotic_ores = global['malf_exotic_ores']

onEvent('recipes', event => {
	function setup_ore_processing(ore) {

		//Raw Ore --> Crushed Ore
		event.recipes.createCrushing([
			"malf:crushed_"+ore,
			Item.of("malf:crushed_"+ore).withChance(0.5)
		], 'malf:raw_'+ore).id("malf:"+ore+"_crush")


		if (ore == "kimberlite" || ore == "beryl") { //Splashing recipes but with 1, 2, 3 nuggets for gems

			event.recipes.createSplashing(["malf:washed_" + ore, 
			Item.of("1x " + processing_output[ore][4]).withChance(0.5) //1x nuggets
			], "malf:crushed_"+ore).id("malf:"+ore+"_wash_from_crushed")

			event.recipes.createSplashing(["malf:washed_" + ore,
			Item.of("2x " + processing_output[ore][4]).withChance(0.5) //2x nuggets
			], "malf:"+ore+"_grit").id("malf:"+ore+"_wash_from_grit")
	
			event.recipes.createSplashing(["malf:washed_" + ore,
			Item.of("3x " + processing_output[ore][4]).withChance(0.5) //3x nuggets
			], "malf:"+ore+"_dust").id("malf:"+ore+"_wash_from_dust")

		}
		else { //Normal splashing recipes with 3, 5, 7 nuggets

			//Crushed Ore --> Washed Ore
			event.recipes.createSplashing([
				"malf:washed_" + ore,
				Item.of("3x " + processing_output[ore][4]).withChance(0.5) //3x nuggets
				
			], "malf:crushed_"+ore).id("malf:"+ore+"_wash_from_crushed")

			//Ore Grit --> Washed Ore
			event.recipes.createSplashing([
				"malf:washed_" + ore,
				Item.of("5x " + processing_output[ore][4]).withChance(0.5) //3x nuggets
				
			], "malf:"+ore+"_grit").id("malf:"+ore+"_wash_from_grit")

			//Ore Dust --> Washed Ore
			event.recipes.createSplashing([
				"malf:washed_" + ore,
				Item.of("7x " + processing_output[ore][4]).withChance(0.5) //3x nuggets
				
			], "malf:"+ore+"_dust").id("malf:"+ore+"_wash_from_dust")

		}

		//Washed blasting
		event.blasting(processing_output[ore][0], "malf:washed_" + ore).id("malf:washed_" + ore + "_blasting")

		//IE-crush
		event.custom({
			"type": "immersiveengineering:crusher",
			"result": {
				"item": "malf:" + ore + "_grit",
				"count": 1
			},
			"secondaries": [
				{
					"chance": 0.4,
					"output": {
						"item": "malf:" + ore + "_grit"
					}
				}
			],
			"input": {
				"item": "malf:crushed_" + ore
			},
			"energy": 16000
		}).id("malf:crushed_" + ore + "_to_grit")

		//IE-squeeze
		if (ore == "kimberlite" || ore == "beryl") {
			event.custom({
				"type": "immersiveengineering:squeezer",
				"result": {
					"item": processing_output[ore][4],
					"count": 6
				},
				"fluid": { 
					"fluid": "minecraft:water",
					"amount":20
				},
				"input": { "item": "malf:washed_" + ore},
				"energy": 18000
			}).id("malf:washed_" + ore + "_squeeze")
		}
		else {
			event.custom({
				"type": "immersiveengineering:squeezer",
				"result": {
					"item": processing_output[ore][4],
					"count": 12
				},
				"fluid": { 
					"fluid": "minecraft:water",
					"amount":20
				},
				"input": { "item": "malf:washed_" + ore},
				"energy": 18000
			}).id("malf:washed_" + ore + "_squeeze")
		}

		//Pneu-vacuum
		event.custom({
			"type": "pneumaticcraft:pressure_chamber",
			"inputs": [
			  {
				"item": "malf:washed_" + ore
			  }
			],
			"pressure": -0.5,
			"results": [
			  {
				"item": "malf:vacuum_dried_" + ore,
				"count": 1
			  }
			]
		  }).id("malf:washed_"+ore+"_vacuum")

		//FTBIC-Macerate
		event.custom(
			{
				"type": "ftbic:macerating",
				"inputItems": [
					{
						"ingredient": {
							"item": "malf:" + ore + "_grit"
						},
						"count": 1
					}
				],
				"outputItems": [
					{
						"item": "malf:" + ore + "_dust"
					},
					{
						"item": "malf:" + ore + "_dust",
						"chance": 0.3
					}
				]
			}
		).id('malf:'+ore+"_grit_to_dust")



		//FTBIC-Centrifuge
		event.custom(
			{
				"type": "ftbic:separating",
				"inputItems": [
					{
						"ingredient": {
							"item": "malf:vacuum_dried_" + ore
						},
						"count": 1
					}
				],
				"outputItems": [
					{
						"item": "malf:centrifuged_" + ore
					},
					{
						"item": processing_output[ore][1],
						"chance": 0.75
					}
				]
			}
		).id('malf:'+ore+"_centrifuge")


		//IF-dissolution (dust, pulverized)
		event.custom({
			"input": [
			  {
				"item": "malf:"+ore+"_dust"
			  }
			],
			"inputFluid": "{FluidName:\"minecraft:water\",Amount:1000}",
			"processingTime": 100,
			"output": {
				"item": "minecraft:air",
				"count": 1
			  },
			"outputFluid": "{FluidName:\"malf:"+ore+"-rich_water\",Amount:500}",
			"type": "industrialforegoing:dissolution_chamber"
		  })

		event.custom({
		"input": [
			{
			"item": "malf:pulverized_"+ore
			}
		],
		"inputFluid": "{FluidName:\"minecraft:water\",Amount:1000}",
		"processingTime": 40,
		"output": {
			"item": "minecraft:air",
			"count": 1
			},
		"outputFluid": "{FluidName:\"malf:"+ore+"-rich_water\",Amount:500}",
		"type": "industrialforegoing:dissolution_chamber"
		})


		//IF-fluid-sieve
		//Thermal-pulverizer
		//thermal-alchemical-imbuer
		//thermal-fractioning
		//thermal-chiller
		//thermal-centrifuge
		//powah-energize

	}





	malf_common_ores.forEach(setup_ore_processing)

})

