// priority: 0



ServerEvents.recipes(event => {
	
		
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

ServerEvents.tags('item', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')

	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})

