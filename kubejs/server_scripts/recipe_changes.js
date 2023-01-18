// priority: 1000

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true


onEvent('recipes', event => {

	event.replaceInput({id: 'beyond_earth:compressor'}, 'beyond_earth:hammer', '#forge:plates/steel')

	event.shaped('immersiveengineering:survey_tools', 
		[
		"QBS",
		"TTT"
		],
		{
		Q: 'minecraft:writable_book',
		B: 'minecraft:glass_bottle',
		S: 'minecraft:spyglass',
		T: 'immersiveengineering:hemp_fabric'
		}).id("malf:ie_survey_tools")

	event.shaped('immersiveengineering:gunpart_barrel', 
	[
	"  P",
	" R ",
	"P  "
	],
	{
	P: '#forge:plates/steel',
	R: '#forge:rods/steel'
	}).id("malf:ie_gunpart_barrel")

	event.shapeless('minecraft:diamond', ['4x malf:diamond_shard'])
	event.shapeless('minecraft:emerald', ['4x malf:emerald_shard'])
	event.shapeless('minecraft:quartz', ['4x malf:quartz_shard'])
	event.shapeless('minecraft:lapis_lazuli', ['4x malf:lapis_lazuli_shard'])

	event.shapeless('4x malf:diamond_shard', ['minecraft:diamond'])
	event.shapeless('4x malf:emerald_shard', ['minecraft:emerald'])
	event.shapeless('4x malf:quartz_shard', ['minecraft:quartz'])
	event.shapeless('4x malf:lapis_lazuli_shard', ['minecraft:lapis_lazuli'])

})

onEvent('item.tags', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')

	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})