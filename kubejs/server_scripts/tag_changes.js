// priority: 0


var tag_list = global['tag_list']

ServerEvents.recipes(event => {
	
})

ServerEvents.tags('item', event => {
	//event.get('forge:plates').add('malf:iron_plate')
	//event.get('forge:plates/iron').add('malf:iron_plate')
	//event.get('forge:dusts').add('malf:iron_dust')
	//event.get('forge:dusts/iron').add('malf:iron_dust')


	//Tag items from tag_list (from malf_custom_ores.js)
	for (const [key, value] of Object.entries(tag_list)) {
		event.get(value[0]).add(key)
		
		if (value.length > 1) {
			event.get(value[1]).add(key)
		}
	}







	function tagOreItems(item) {
		event.get('forge:raw').add('malf:iron_plate')
	}

/*
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

	blocks_to_fix.forEach(item => {  //Add forge block tag to chemlib metal blocks
		var material_name = item.toString().slice(8, -12)
		event.get('forge:storage_blocks').add(item)
		event.get('forge:storage_blocks/'+material_name).add(item)
	})
*/


	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})

ServerEvents.tags('fluid', event => {  //Remove fluids from the minecraft:water tag
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

	event.remove('minecraft:water', 'ad_astra:fuel')
	event.remove('minecraft:water', 'ad_astra:flowing_fuel')
	event.remove('minecraft:water', 'ad_astra:oil')
	event.remove('minecraft:water', 'ad_astra:flowing_oil')

	event.remove('minecraft:water', 'sliceanddice:fertilizer')
	event.remove('minecraft:water', 'sliceanddice:flowing_fertilizer')
})
