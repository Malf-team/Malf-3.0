// priority: 99

console.info('Hello, World! (You will only see this line once in console, during startup)')

StartupEvents.registry('item', event => {
	// Register new items here
	// event.create('example_item').displayName('Example Item')
	event.create('malf:palt_of_the_cosmos').maxStackSize(8).glow(true).displayName("Palt of the Cosmos").food(food => {
		food
    		.hunger(24)
    		.saturation(1.5)//This value does not directly translate to saturation points gained
	})
	event.create('malf:oppsikaxi').displayName("Oppsikaxi").food(food => {
		food
    		.hunger(10)
    		.saturation(0.8)
			.effect('nausea', 150, 0, 1)
	})
	event.create('chemlib:iron_plate').displayName("Iron Plate")
	event.create('chemlib:iron_dust').displayName("Iron Dust")

	event.create('malf:diamond_shard').displayName("Diamond Shard")
	event.create('malf:emerald_shard').displayName("Emerald Shard")
	event.create('malf:quartz_shard').displayName("Quartz Shard")
	event.create('malf:lapis_lazuli_shard').displayName("Lapis Lazuli Shard")

	event.create('malf:unprocessed_steel_dust', "create:sequenced_assembly").displayName("Unprocessed Steel Dust")

	event.create('malf:clay_dust').displayName("Clay Dust")
	event.create('malf:brick_dust').displayName("Brick Dust")
	
	event.create('malf:blast_brick_blend').displayName("Blast Brick Blend")
	event.create('malf:blast_brick').displayName("Blast Brick")

	event.create('malf:coke_brick_blend').displayName("Coke Brick Blend")
	event.create('malf:coke_brick').displayName("Coke Brick")

	event.create('malf:circuit_tier_III').displayName("Tier III Circuit")
	event.create('malf:circuit_tier_IV').displayName("Tier IV Circuit").rarity("uncommon")
	event.create('malf:circuit_tier_V').displayName("Tier V Circuit").rarity("rare")
	event.create('malf:circuit_tier_VI').displayName("Tier VI Circuit").rarity("epic").glow(true)
	
	
})

StartupEvents.registry('block', event => {
	// Register new blocks here
	// event.create('example_block').material('wood').hardness(1.0).displayName('Example Block')
})

ItemEvents.modification(event => {


})

