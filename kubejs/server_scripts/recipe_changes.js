// priority: 1000



ServerEvents.recipes(event => {

	function removeTag(item) {
		return item.slice(item.indexOf(":") + 1)
	}

	function addCrushing(item, result) {
		var short_name = removeTag(item)

		event.recipes.createCrushing(result, item).id("malf:" + short_name + "_create_crushing")
		event.recipes.createMilling(result, item).id("malf:" + short_name + "_create_milling")

		event.custom({
			"type": "immersiveengineering:crusher",
			"secondaries": [],
			"result": {
				"item": result
			},
			"input": {
				"item": item
			},
			"energy": 1600
		}).id("malf:" + short_name + "_IE_crushing")

		event.custom(
			{
				"type": "ftbic:macerating",
				"inputItems": [
					{ "item": item }
				],
				"outputItems": [
					{ "item": result }
				]
			}
		).id("malf:" + short_name + "_ftbic_crushing")

		event.custom({
			"type": "thermal:pulverizer",
			"ingredient": {
				"item": item
			},
			"result": [
				{
					"item": result
				}
			]
		}).id("malf:" + short_name + "_thermal_crushing")

		event.custom({
			"type": "mekanism:crushing",
			"input": {
				"ingredient": {
					"item": item
				}
			},
			"output": {
				"item": result
			}
		}).id("malf:" + short_name + "_mekanism_crushing")

	}

	//------------------------------------------------------------------------------------------------------------

	//event.replaceInput({id: 'beyond_earth:compressor'}, 'beyond_earth:hammer', '#forge:plates/steel')

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


	//Tier 1 Changes:
	event.recipes.createCrushing([
		"mekanism:dust_coal"
	], 'minecraft:coal').id("malf:coal_crush_create")

	event.recipes.createCrushing([
		"mekanism:dust_charcoal"
	], 'minecraft:charcoal').id("malf:charcoal_crush_create")

	event.recipes.createMilling([
		"mekanism:dust_coal"
	], 'minecraft:coal').id("malf:coal_mill_create")

	event.recipes.createMilling([
		"mekanism:dust_charcoal"
	], 'minecraft:charcoal').id("malf:charcoal_mill_create")

	event.recipes.createMixing(["mekanism:enriched_iron"], ['4x mekanism:dust_coal', 'chemlib:iron_dust']).id("malf:enriched_iron_mixing_coal")
	event.recipes.createMixing(["mekanism:enriched_iron"], ['8x mekanism:dust_charcoal', 'chemlib:iron_dust']).id("malf:enriched_iron_mixing_charcoal")

	event.recipes.createSequencedAssembly([ // start the recipe
		Item.of('emendatusenigmatica:steel_dust'), // have this item be an output with a certain chance
	], 'mekanism:enriched_iron', [ // 'create:brass_ingot' is the input.
		// the transitional item set by "transitionalItem('malf:unprocessed_steel_dust')" is the item that will be used during the recipe as the item that the input is using to transition to the output.
		event.recipes.createFilling('malf:unprocessed_steel_dust', ['malf:unprocessed_steel_dust', Fluid.of('minecraft:lava', 500)]),
		event.recipes.createDeploying('malf:unprocessed_steel_dust', ['malf:unprocessed_steel_dust', "chemlib:iron_dust"]), // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
		event.recipes.createPressing('malf:unprocessed_steel_dust', 'malf:unprocessed_steel_dust'), 
		event.recipes.createFilling('malf:unprocessed_steel_dust', ['malf:unprocessed_steel_dust', Fluid.of('minecraft:water', 500)]),
		event.recipes.createPressing('malf:unprocessed_steel_dust', 'malf:unprocessed_steel_dust') // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item

	]).transitionalItem('malf:unprocessed_steel_dust').loops(1).id("malf:create_steel_dust") // set the transitional item and the loops (amount of repetitions)


	//T2:

	event.remove({output: 'immersiveengineering:hammer'})
	event.shaped('immersiveengineering:hammer', 
	[
	" IS",
	" RI",
	"R  "
	],
	{
	S: '#forge:string',
	R: '#balm:wooden_rods',
	I: "#forge:ingots/steel"
	}).id("malf:ie_hammer")

	event.remove({output: 'immersiveengineering:light_engineering'})
	event.shaped('immersiveengineering:light_engineering', 
	[
	"XCX",
	"CQC",
	"XCX"
	],
	{
	Q: 'create:andesite_casing',
	C: 'immersiveengineering:component_iron',
	X: "#forge:sheetmetals/iron"
	}).id("malf:ie_le")

	event.remove({output: 'immersiveengineering:heavy_engineering'})
	event.shaped('immersiveengineering:heavy_engineering', 
	[
	"XCX",
	"CQC",
	"XCX"
	],
	{
	Q: 'create:brass_casing',
	C: 'immersiveengineering:component_steel',
	X: "#forge:sheetmetals/steel"
	}).id("malf:ie_he")

	event.remove({output: 'immersiveengineering:rs_engineering'})
	event.shaped('immersiveengineering:rs_engineering', 
	[
	"XCX",
	"CQC",
	"XCX"
	],
	{
	Q: 'create:copper_casing',
	C: 'minecraft:redstone',
	X: "#forge:sheetmetals/iron"
	}).id("malf:ie_re")

	//Blast brick / coal brick stuff
	event.remove({output: 'immersiveengineering:cokebrick'})
	event.remove({output: 'immersiveengineering:blastbrick'})

	addCrushing("minecraft:clay_ball", "malf:clay_dust")
	addCrushing("minecraft:brick", "malf:brick_dust")
	addCrushing("minecraft:netherrack", 'create:cinder_flour')
	event.remove({id: 'malf:netherrack_create_crushing'})

	event.recipes.createMixing(["malf:coke_brick_blend"], ['malf:clay_dust', 'malf:brick_dust', 'minecraft:sand']).id("malf:coke_brick_blend_mixing")
	event.recipes.createMixing(["malf:blast_brick_blend"], ['create:cinder_flour', 'malf:brick_dust', Fluid.of('minecraft:lava', 50)]).id("malf:blast_brick_blend_mixing")

	event.recipes.createPressing('malf:coke_brick', 'malf:coke_brick_blend').id("malf:coke_brick_press")
	event.recipes.createPressing('malf:blast_brick', 'malf:blast_brick_blend').id("malf:blast_brick_press")

	event.smelting('malf:coke_brick', 'malf:coke_brick_blend').id("malf:coke_brick_smelting")
	event.smelting('malf:blast_brick', 'malf:blast_brick_blend').id("malf:blast_brick_smelting")

	event.shaped('immersiveengineering:cokebrick',
		[
			"X X",
			" Q ",
			"X X"
		],
		{
			Q: '#forge:clay',
			X: "malf:coke_brick"
		}).id("malf:ie_cb_crafting")

	event.shaped('2x immersiveengineering:cokebrick',
		[
			"XXX",
			"XQX",
			"XXX"
		],
		{
			Q: 'buildinggadgets:construction_paste',
			X: "malf:coke_brick"
		}).id("malf:ie_cb_crafting_cheap")

	event.shaped('immersiveengineering:blastbrick',
		[
			"X X",
			" Q ",
			"X X"
		],
		{
			Q: '#forge:clay',
			X: "malf:blast_brick"
		}).id("malf:ie_bb_crafting")

	event.shaped('2x immersiveengineering:blastbrick',
		[
			"XXX",
			"XQX",
			"XXX"
		],
		{
			Q: 'buildinggadgets:construction_paste',
			X: "malf:blast_brick"
		}).id("malf:ie_bb_crafting_cheap")

	event.recipes.createMechanicalCrafting('immersiveengineering:cokebrick', [
		'BB',
		'BB'
	], {B: 'malf:coke_brick'}).id("malf:coke_brick_block_mechcraft")

	event.recipes.createMechanicalCrafting('immersiveengineering:blastbrick', [
		'BB',
		'BB'
	], {B: 'malf:blast_brick'}).id("malf:blast_brick_block_mechcraft")

	event.recipes.createCompacting('immersiveengineering:cokebrick', ['4x malf:coke_brick']).id("malf:coke_brick_block_compact")
	event.recipes.createCompacting('immersiveengineering:blastbrick', ['4x malf:blast_brick']).id("malf:blast_brick_block_compact")

	event.remove({output: 'immersiveengineering:blastbrick_reinforced'})
	event.recipes.createDeploying('immersiveengineering:blastbrick_reinforced', ['immersiveengineering:blastbrick', "#forge:plates/steel"]).id("malf:blastbrick_reinforced_deploying")

	event.shaped('emendatusenigmatica:steel_rod',
		[
			"X",
			"X"
		],
		{
			X: "emendatusenigmatica:steel_ingot"
		})

	event.recipes.createCutting("12x immersiveengineering:sheetmetal_iron", "#forge:storage_blocks/iron").processingTime(200).id("malf:iron_sheetmetal_cutting")
	event.recipes.createCutting("12x immersiveengineering:sheetmetal_steel", "#forge:storage_blocks/steel").processingTime(200).id("malf:steel_sheetmetal_cutting")


	event.remove({output: 'immersiveengineering:fluid_pipe'})
	event.shaped('2x immersiveengineering:fluid_pipe',
	[
		"XPX"
	],
	{
		X: "#forge:plates/iron",
		P: "create:fluid_pipe"
	}).id("malf:ie_fluid_pipe")

	event.remove({output: 'pipez:fluid_pipe'})
	event.shaped('6x pipez:fluid_pipe',
	[
		"MMM",
		"PXP",
		"MMM"
	],
	{
		X: "#forge:dusts/redstone",
		P: "immersiveengineering:fluid_pipe",
		M: "ftbic:industrial_grade_metal"
	}).id("malf:p_fluid_pipe")

	event.remove({output: 'thermal:fluid_duct'})
	event.shaped('2x thermal:fluid_duct',
	[
		"XPX"
	],
	{
		X: "#forge:ingots/bronze",
		P: "pipez:fluid_pipe"
	}).id("malf:t_fluid_pipe")

	event.remove({output: 'mekanism:basic_mechanical_pipe'})
	event.shaped('8x mekanism:basic_mechanical_pipe',
	[
		"XPX"
	],
	{
		X: "thermal:fluid_duct",
		P: "mekanism:basic_control_circuit"
	}).id("malf:m_fluid_pipe")
	
	event.shaped('3x create:belt_connector',
	[
		"XXX"
	],
	{
		X: "ftbic:rubber"
	}).id("malf:create_belt_cheap")

	event.remove({output: 'immersiveengineering:conveyor_basic'})
	event.shaped('8x immersiveengineering:conveyor_basic',
	[
		"MMM",
		"PXP"
	],
	{
		X: "#forge:dusts/redstone",
		P: "#forge:ingots/iron",
		M: "create:belt_connector"
	}).id("malf:ie_belt")

	event.remove({output: 'pipez:item_pipe'})
	event.shaped('6x pipez:item_pipe',
	[
		"MMM",
		"PXP",
		"MMM"
	],
	{
		X: "#forge:dusts/redstone",
		P: "immersiveengineering:conveyor_basic",
		M: "ftbic:industrial_grade_metal"
	}).id("malf:p_belt")

	event.remove({output: 'mekanism:basic_logistical_transporter'})
	event.shaped('8x mekanism:basic_logistical_transporter',
	[
		"XPX"
	],
	{
		X: "pipez:item_pipe",
		P: "mekanism:basic_control_circuit"
	}).id("malf:m_belt")

	event.remove({output: 'pneumaticcraft:pressure_tube'})
	event.shaped('8x pneumaticcraft:pressure_tube',
	[
		"XPX"
	],
	{
		X: "pneumaticcraft:ingot_iron_compressed",
		P: "create:shaft"
	}).id("malf:pn_energy_pipe")

	event.remove({output: 'pipez:energy_pipe'})
	event.shaped('6x pipez:energy_pipe',
	[
		"MMM",
		"PXP",
		"MMM"
	],
	{
		X: "#forge:dusts/redstone",
		P: "immersiveengineering:wirecoil_steel",
		M: "ftbic:industrial_grade_metal"
	}).id("malf:p_energy_pipe")

	event.remove({output: 'thermal:energy_duct'})
	event.shaped('4x thermal:energy_duct',
	[
		"RRR",
		"XPX",
		"RRR"
	],
	{
		X: "#forge:ingots/lead",
		P: "pipez:energy_pipe",
		R: "#forge:dusts/redstone"
	}).id("malf:t_energy_pipe")

	event.remove({id: 'powah:crafting/cable_basic_2'})
	event.shaped('8x powah:energy_cable_basic',
	[
		"RRR",
		"XPX",
		"RRR"
	],
	{
		X: "#forge:ingots/iron",
		P: "pipez:energy_pipe",
		R: "powah:dielectric_rod_horizontal"
	}).id("malf:pw_energy_pipe")

	event.remove({output: 'mekanism:basic_universal_cable'})
	event.shaped('8x mekanism:basic_universal_cable',
	[
		"XPX"
	],
	{
		X: "thermal:energy_duct",
		P: "mekanism:basic_control_circuit"
	}).id("malf:m_energy_pipe")

	//T3

	event.remove({id: 'ftbic:smelting/industrial_grade_metal'})
	event.remove({id: 'ftbic:blasting/industrial_grade_metal'})

	


})

ServerEvents.tags('item', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')

	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})
