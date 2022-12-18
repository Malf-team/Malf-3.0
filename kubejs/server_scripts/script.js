// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello, World! (You will see this line every time server resources reload)')

onEvent('recipes', event => {
	
		
	/*event
        .custom({
			  "type": "mekanism:fission",
			  "input": {
				"gas": "minecraft:lava",
				"amount": 1
			  },
			  "output": {
				"gas": "minecraft:magma",
				"amount": 2
			  },
			  "heat": 1
		})
        .id('malf:lava_to_magma')
		
	event
        .custom({
		  "type": "mekanism:fluid_coolant",
		  "input": {
			"tag": "minecraft:lava",
			"amount": 1
		  },
		  "output": {
			"gas": "mekanism:hydrogen",
			"amount": 5
		  },
		  "efficiency": 1
		}).id('malf:lava_to_hydro')*/
})

onEvent('item.tags', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')

	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})

onEvent('tags.fluids', event => {
	var chemlib_gasses = ["acetylene", "acetic_acid", "ammonia", "ammonium", "argon", "butane", "carbon_dioxide", "carbon_monoxide", "chlorine", "ethane", "ethylene", "fluorine", "helium", "hydrogen", "hydrogen_sulfide", "krypton", "methane", "neon", "nitric_oxide", "nitrogen_dioxide", "nitrogen", "oxygen", "propane", "radon", "sulfur_dioxide", "xenon", "mercury", "bromine", "sulfuric_acid", "ethanol", "hydrochloric_acid", "nitric_acid", "sulfur_trioxide", "hexane", "pentane", "epinephrine", "carbon_disulfide"]
	function removeGasFromWaterTag(gas) {
		event.remove('minecraft:water', 'chemlib:'+gas+'_fluid')
	}
	chemlib_gasses.forEach(removeGasFromWaterTag)
})