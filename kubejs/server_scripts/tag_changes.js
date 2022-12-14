// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

onEvent('recipes', event => {
	
})

onEvent('item.tags', event => {
	console.log("test-log ")
	event.get('forge:plates').add('malf:iron_plate')
	event.get('forge:plates/iron').add('malf:iron_plate')
	event.get('forge:dusts').add('malf:iron_dust')
	event.get('forge:dusts/iron').add('malf:iron_dust')
	console.log("test-log2 ")



	var blocks_to_fix = []

	Ingredient.of('@chemlib').stacks.forEach(item => {
		//console.log("item: "+Item.of(item))
		//console.log("stack: "+item)

		var item_name = Item.of(item).toString().slice(1, -1);
		
		//console.log(item_name)

		if (item_name.slice(-12) === "_metal_block") {
			blocks_to_fix.push(item_name)
		}
	})

	blocks_to_fix.forEach(item => {
		var material_name = item.toString().slice(8, -12)
		event.get('forge:storage_blocks').add(item)
		event.get('forge:storage_blocks/'+material_name).add(item)
	})


	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})

onEvent('tags.fluids', event => {
	var chemlib_gasses = ["acetylene", "acetic_acid", "ammonia", "ammonium", "argon", "butane", "carbon_dioxide", "carbon_monoxide", "chlorine", "ethane", "ethylene", "fluorine", "helium", "hydrogen", "hydrogen_sulfide", "krypton", "methane", "neon", "nitric_oxide", "nitrogen_dioxide", "nitrogen", "oxygen", "propane", "radon", "sulfur_dioxide", "xenon", "mercury", "bromine", "sulfuric_acid", "ethanol", "hydrochloric_acid", "nitric_acid", "sulfur_trioxide", "hexane", "pentane", "epinephrine", "carbon_disulfide"]
	function removeGasFromWaterTag(gas) {
		event.remove('minecraft:water', 'chemlib:'+gas+'_flowing')
		event.remove('minecraft:water', 'chemlib:'+gas+'_fluid')
	}
	chemlib_gasses.forEach(removeGasFromWaterTag)

	event.remove('minecraft:water', 'createaddition:flowing_seed_oil')
	event.remove('minecraft:water', 'createaddition:seed_oil')

	event.remove('minecraft:water', 'create:flowing_honey')
	event.remove('minecraft:water', 'create:honey')
	event.remove('minecraft:water', 'create:flowing_chocolate')
	event.remove('minecraft:water', 'create:chocolate')

	event.remove('minecraft:water', 'beyond_earth:fuel')
	event.remove('minecraft:water', 'beyond_earth:flowing_fuel')
	event.remove('minecraft:water', 'beyond_earth:oil')
	event.remove('minecraft:water', 'beyond_earth:flowing_oil')

	event.remove('minecraft:water', 'sliceanddice:fertilizer')
	event.remove('minecraft:water', 'sliceanddice:flowing_fertilizer')
})