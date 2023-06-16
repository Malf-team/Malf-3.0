// priority: 0

//______________________________________________________________________________________________



ServerEvents.recipes(event => {
	function setup_ore_processing(ore) {
		// Smelting/Blasting Recipes for all items
		// Extra boosted output for some ores, like cinnabar

		if (ore == "cinnabar" || ore == "lazurite") {
			event.smelting("4x " + processing_output[ore][0], 'malf:raw_' + ore).id("malf:raw_" + ore + "_smelting")
			event.smelting("16x " + processing_output[ore][4], 'malf:crushed_' + ore).id("malf:crushed_" + ore + "_smelting")
			event.smelting("4x " + processing_output[ore][0], 'malf:' + ore + '_grit').id("malf:" + ore + "_grit_smelting")
			event.smelting("4x " + processing_output[ore][0], 'malf:' + ore + '_dust').id("malf:" + ore + "_dust_smelting")
			event.smelting("4x " + processing_output[ore][0], 'malf:pulverized_' + ore).id("malf:pulverized_" + ore + "_smelting")
			event.blasting("4x " + processing_output[ore][0], 'malf:washed_' + ore).id("malf:washed_" + ore + "_blasting")
			event.smelting("4x " + processing_output[ore][0], 'malf:vacuum_dried_' + ore).id("malf:vacuum_dried_" + ore + "_smelting")
			event.smelting("16x " + processing_output[ore][4], 'malf:centrifuged_' + ore).id("malf:centrifuged_" + ore + "_smelting")
			event.smelting("4x " + processing_output[ore][0], 'malf:energized_' + ore).id("malf:energized_" + ore + "_smelting")
		}

		else {
			event.smelting(processing_output[ore][0], 'malf:raw_' + ore).id("malf:raw_" + ore + "_smelting")
			event.smelting(processing_output[ore][0], 'malf:' + ore + '_grit').id("malf:" + ore + "_grit_smelting")
			event.smelting(processing_output[ore][0], 'malf:' + ore + '_dust').id("malf:" + ore + "_dust_smelting")
			event.smelting(processing_output[ore][0], 'malf:pulverized_' + ore).id("malf:pulverized_" + ore + "_smelting")
			event.blasting(processing_output[ore][0], 'malf:washed_' + ore).id("malf:washed_" + ore + "_blasting")
			event.smelting(processing_output[ore][0], 'malf:vacuum_dried_' + ore).id("malf:vacuum_dried_" + ore + "_smelting")
			event.smelting(processing_output[ore][0], 'malf:energized_' + ore).id("malf:energized_" + ore + "_smelting")

			if (ore == "kimberlite" || ore == "beryl") {
				event.smelting("4x " + processing_output[ore][4], 'malf:crushed_' + ore).id("malf:crushed_" + ore + "_smelting")
				event.smelting("4x " + processing_output[ore][4], 'malf:centrifuged_' + ore).id("malf:centrifuged_" + ore + "_smelting")
			}
			else {
				event.smelting("9x " + processing_output[ore][4], 'malf:crushed_' + ore).id("malf:crushed_" + ore + "_smelting")
				event.smelting("9x " + processing_output[ore][4], 'malf:centrifuged_' + ore).id("malf:centrifuged_" + ore + "_smelting")
			}
		}



		//Raw Ore --> Crushed Ore
		event.recipes.createCrushing([
			"malf:crushed_"+ore,
			Item.of("malf:crushed_"+ore).withChance(0.5)
		], 'malf:raw_'+ore).id("malf:"+ore+"_crush")

		//Splashing recipes but with 1, 2, 3 nuggets for gems
		if (ore == "kimberlite" || ore == "beryl") { 

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

		//Normal splashing recipes with 3, 5, 7 nuggets
		else { 

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

		event.custom({
			"type": "immersiveengineering:squeezer",
			"result": {
				"item": "malf:squeezed_" + ore,
				"count": 1
			},
			"fluid": { 
				"fluid": "minecraft:water",
				"amount": 20
			},
			"input": { "item": "malf:washed_" + ore},
			"energy": 18000
		}).id("malf:washed_" + ore + "_squeeze")
		
		
		if (ore == "kimberlite" || ore == "beryl") {
			event.smelting("6x " + processing_output[ore][4], "malf:squeezed_" + ore).id("malf:squeezed_"+ore+"_smelting")
		}
		else {
			event.smelting("12x " + processing_output[ore][4], "malf:squeezed_" + ore).id("malf:squeezed_"+ore+"_smelting")
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
		/*event.custom(
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
		).id('malf:'+ore+"_centrifuge1")*/

			
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
		  }).id('malf:'+ore+"_dust_dissolve")

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
		}).id('malf:'+ore+"_pulverized_dissolve")


		//Create-mixing
		/*event.recipes.createMixing([
			"malf:washed_" + ore,
			Item.of(processing_output[ore][0])
			
		], Fluid.of('malf:'+ore+'-rich_water', 500)).heated().id('malf:'+ore+"_water_mixing")

		event.recipes.createMixing([
			"malf:washed_" + ore,
			Item.of("2x " + processing_output[ore][1]),
			Item.of(processing_output[ore][2]).withChance(0.5)
			
		], Fluid.of('malf:refined_'+ ore +'_water', 200)).heated().id('malf:refined_'+ore+"_water_mixing")*/

		//Thermal-pulverizer
		event.custom({
			"type": "thermal:pulverizer",
			"ingredient": {
			  "item": "malf:"+ore+"_dust"
			},
			"result": [
			  {
				"item": "malf:pulverized_"+ore
			  },
			  {
				"item": "malf:pulverized_"+ore,
				"chance": 0.2
			  }
			]
		  }).id('malf:'+ore+"_dust_to_pulverized")
		
		//thermal-alchemical-imbuer
		event.custom({
			"type": "thermal:brewer",
			"ingredient": [
				{
					"fluid": 'malf:'+ore+'-rich_water',
					"amount": 500,
					
				},
				{
					"item": "thermal:apatite_dust"
				}
			],
			"result": [
			  {
				"fluid": 'malf:chemically_activated_'+ ore +'_water',
				"amount": 500
			  }
			],
			"energy": 6000
		}).id('malf:'+ore+"_alchemical-imbuer")

		//thermal-fractioning
		event.custom({
			"type": "thermal:refinery",
			"ingredient": {
			  "fluid": 'malf:chemically_activated_'+ ore +'_water',
			  "amount": 500
			},
			"result": [
			  {
				"fluid": 'malf:refined_'+ ore +'_water',
				"amount": 200
			  },
			  {
				"fluid": 'minecraft:water',
				"amount": 200
			  },
			  {
				"item": processing_output[ore][2],
				"chance": 0.5
			  }
			],
			"energy": 6000
		}).id('malf:'+ore+"_refinery")

		//thermal-chiller
		event.custom({
			"type": "thermal:chiller",
			"ingredient": {
			  "fluid": 'malf:refined_'+ ore +'_water',
			  "amount": 200
			},
			"result": [
			  {
				"item": "malf:washed_" + ore,
				"count": 2
			  }
			],
			"energy": 6000
		}).id('malf:'+ore+"_chiller")

		
		//powah-energize
		event.custom({
			"type": "powah:energizing",
			"ingredients": [
			  {"item": "malf:centrifuged_" + ore}
			],
			"energy": 100000,
			"result": {
			  "item": "malf:energized_" + ore
			}
		}).id('malf:'+ore+"_energizing")

		
		//thermal-centrifuge

		if (ore == "cinnabar" || ore == "lazurite") {
			event.custom({
				"type": "thermal:centrifuge",
				"ingredient": {
					"item": "malf:energized_" + ore
				},
				"result": [
					{
						"item": processing_output[ore][0],
						"count": 8, //Boosted output for redstone + lapis
						"locked": true
					},
					{
						"item": processing_output[ore][1],
						"count": 1,
						"locked": true
					},
					{
						"item": processing_output[ore][2],
						"chance": 0.5
					},
					{
						"item": processing_output[ore][3],
						"chance": 0.1
					}
				],
				"energy": 18000
			}).id('malf:'+ore+"_centrifuge2")
		}

		else {
			event.custom({
				"type": "thermal:centrifuge",
				"ingredient": {
					"item": "malf:energized_" + ore
				},
				"result": [
					{
						"item": processing_output[ore][0],
						"count": 2,
						"locked": true
					},
					{
						"item": processing_output[ore][1],
						"count": 1,
						"locked": true
					},
					{
						"item": processing_output[ore][2],
						"chance": 0.5
					},
					{
						"item": processing_output[ore][3],
						"chance": 0.1
					}
				],
				"energy": 18000
			}).id('malf:'+ore+"_centrifuge2")
		}
	}
	




	malf_common_ores.forEach(setup_ore_processing)

})

