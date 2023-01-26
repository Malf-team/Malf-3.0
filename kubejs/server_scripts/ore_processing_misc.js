// priority: 1

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = true
settings.logErroringRecipes = true


onEvent('recipes', event => {
	function addCrushing(item, dust) {
		event.recipes.createCrushing(dust, item).id("malf:"+item.slice(5)+"_create_crushing")

		

		event.custom({
			"type": "immersiveengineering:crusher",
			"result": {
				"item": dust,
				"count": 1
			},
			"input": {
				"item": item
			},
			"energy": 16000
		}).id("malf:"+item.slice(5)+"_IE_crushing")

		event.custom(
			{
				"type": "ftbic:macerating",
				"inputItems": [
					{ "item": item }
				],
				"outputItems": [
					{ "item": dust}
				]
			}
		).id("malf:"+item.slice(5)+"_ftbic_crushing")

		event.custom({
			"type": "thermal:pulverizer",
			"ingredient": {
			  "item": item
			},
			"result": [
			  {
				"item": dust
			  }
			]
		}).id("malf:"+item.slice(5)+"_thermal_crushing")
	}



	event.blasting("malf:vibranium_ingot", "malf:vibranium_dust").id("malf:vibranium_blasting")
	event.blasting("malf:vibranium_ingot", "malf:raw_vibranium").id("malf:raw_vibranium_blasting")
	addCrushing("malf:vibranium_ingot", "malf:vibranium_dust")

	event.blasting("malf:acryx_ingot", "malf:acryx_dust").id("malf:acryx_blasting")
	event.blasting("malf:acryx_ingot", "malf:raw_acryx").id("malf:raw_acryx_blasting")
	addCrushing("malf:acryx_ingot", "malf:acryx_dust")

	event.smelting("malf:ethereal_bronze_ingot", "malf:ethereal_bronze_dust").id("malf:ethereal_bronze_blasting")
	event.smelting("malf:ethereal_bronze_ingot", "malf:raw_ethereal_bronze").id("malf:raw_ethereal_bronze_blasting")
	addCrushing("malf:ethereal_bronze_ingot", "malf:ethereal_bronze_dust")


	
})

onEvent('item.tags', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')

	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})