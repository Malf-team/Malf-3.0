// priority: 0

console.info('Hello, World! (You will only see this line once in console, during startup)')

WorldgenEvents.remove(event => {
	
	const ftbic_ores = ["aluminum", "lead", "tin"]
	
	
	function replaceOre(item) {
		event.removeFeatureById("underground_ores", ['ftbic:ore_'+item+'_upper'])
		event.removeFeatureById("underground_ores", ['ftbic:ore_'+item+'_middle'])
		event.removeFeatureById("underground_ores", ['ftbic:ore_'+item+'_small'])
	}
	
	ftbic_ores.forEach(replaceOre)
	// Uranium
	event.removeFeatureById("underground_ores", ['ftbic:ore_uranium_extra'])
	event.removeFeatureById("underground_ores", ['ftbic:ore_uranium'])
	event.removeFeatureById("underground_ores", ['ftbic:ore_uranium_lower'])
	//Iridium
	event.removeFeatureById("underground_ores", ['ftbic:ore_iridium'])
	event.removeFeatureById("underground_ores", ['ftbic:ore_iridium_large'])
	event.removeFeatureById("underground_ores", ['ftbic:ore_iridium_buried'])

})

