// priority: -50

const processing_output = global['processing_output']
const main_output = global['main_output']
console.log(main_output)

const chemical_formula = {	"hematite":"Fe₂O₃",
							"tetrahedrite":"(Cu,Fe)₁₂Sb₄S₁₃",
							"gold":"Au",
							"cinnabar":"HgS",
							"lazurite":"(Na,Ca)₈[(S,Cl,SO₄,OH)₂|(Al₆Si₆O₂₄)]",
							"kimberlite":"(Mg,Fe)₂SiO₄ + Mg(Si,Al)₂O₆",
							"beryl":"Be₃Al₂Si₆O₁₈",
							"cassiterite":"SnO₂",
							"bauxite":"Al(OH)₃",
							"pentlandite":"(Fe,Ni)₉S₈",
							"galena":"PbS",
							"pitchblende":"UO₂",
							"sphalerite":"(Zn,Fe)S",
							"argentite":"Ag₂S",
							"ethereal_bronze":"CuSn??",
							"rare_earth":"??",
							"vibranium":"Vi",
							"acryx":"Si(FeS₂)₅(CrAl₂O₃)Hg₃??",
							"ilmenite":"FeTiO₃"
}

// Special case for some ores, like vibranium, which doesn't have all the items
const special_case_ore = {	"vibranium":['malf:vibranium_ore', 'malf:raw_vibranium', "malf:vibranium_dust", "malf:vibranium_ingot"],
							"ethereal_bronze":['malf:ethereal_bronze_ore', 'malf:deepslate_ethereal_bronze_ore', 'malf:nether_ethereal_bronze_ore', 'malf:end_ethereal_bronze_ore', 'malf:raw_ethereal_bronze', "malf:ethereal_bronze_dust", "malf:ethereal_bronze_ingot"],
							"acryx":['malf:acryx_ore', 'malf:deepslate_acryx_ore', 'malf:nether_acryx_ore', 'malf:end_acryx_ore', 'malf:raw_acryx', "malf:acryx_dust", "malf:acryx_ingot"],
							"rare_earth":['malf:rare_earth_ore', 'malf:deepslate_rare_earth_ore', 'malf:nether_rare_earth_ore', 'malf:end_rare_earth_ore', 'malf:rare_earth_mineral', "malf:rare_earth_dust"]}

function capitalizeFirstLetter(string) { //Capitalizes first letter, also removes # if present
	if (string.charAt(0) === "#") {
		string = string.slice(1);
	}
	return string.charAt(0).toUpperCase() + string.slice(1);
}



onEvent('item.tooltip', tooltip => {
	tooltip.add('immersiveengineering:hammer', "\u00A7c"+"\u00A7o"+'Only used for multiblock structuring and crafting! Will break if used for plate making or ore crushing.')

	function addChemicalFormulaTT(ore) {
		var formula = chemical_formula[ore]
		
		if (typeof special_case_ore[ore] !== 'undefined') {
			for (var i = 0; i < special_case_ore[ore].length; i++){
				tooltip.add(special_case_ore[ore][i], "\u00A7e" + "\u00A7o" + formula)
			}
		}

		else {
			var common_output = capitalizeFirstLetter(main_output[ore])

			tooltip.add('malf:' + ore + '_ore', ["\u00A7e" + "\u00A7o" + formula, "\u00A7a" + "(" + common_output + ")"])
			tooltip.add('malf:deepslate_' + ore + '_ore', ["\u00A7e" + "\u00A7o" + formula, "\u00A7a" + "(" + common_output + ")"])
			tooltip.add('malf:nether_' + ore + '_ore', ["\u00A7e" + "\u00A7o" + formula, "\u00A7a" + "(" + common_output + ")"])
			tooltip.add('malf:end_' + ore + '_ore', ["\u00A7e" + "\u00A7o" + formula, "\u00A7a" + "(" + common_output + ")"])

			tooltip.add('malf:raw_' + ore, ["\u00A7e" + "\u00A7o" + formula, "\u00A7a" + "(" + common_output + ")"])
			tooltip.add('malf:crushed_' + ore, ["\u00A7e" + "\u00A7o" + formula, "\u00A7a" + "(" + common_output + ")"])
			tooltip.add('malf:' + ore + '_grit', ["\u00A7e" + "\u00A7o" + formula, "\u00A7a" + "(" + common_output + ")"])
			tooltip.add('malf:' + ore + '_dust', ["\u00A7e" + "\u00A7o" + formula, "\u00A7a" + "(" + common_output + ")"])
			tooltip.add('malf:pulverized_' + ore, ["\u00A7e" + "\u00A7o" + formula, "\u00A7a" + "(" + common_output + ")"])
			tooltip.add('malf:washed_'+ore, ["\u00A7e" + "\u00A7o" + formula, "\u00A7a" + "(" + common_output + ")"])
			tooltip.add('malf:squeezed_' + ore, ["\u00A7e" + "\u00A7o" + formula, "\u00A7a" + "(" + common_output + ")"])
			tooltip.add('malf:vacuum_dried_' + ore, ["\u00A7e" + "\u00A7o" + formula, "\u00A7a" + "(" + common_output + ")"])
			tooltip.add('malf:centrifuged_' + ore, ["\u00A7e" + "\u00A7o" + formula, "\u00A7a" + "(" + common_output + ")"])
			tooltip.add('malf:energized_' + ore, ["\u00A7e" + "\u00A7o" + formula, "\u00A7r" + "\u00A7a" + "(" + common_output + ")"])
		}
	}

	for (var [key, value] of Object.entries(chemical_formula)) {
		addChemicalFormulaTT(key)
	}
	

})


onEvent('jei.information', event => {
	event.add('malf:rare_earth_ore', ['Found under Y=0, more commonly in cold biomes.'])
	event.add('malf:deepslate_rare_earth_ore', ['Found under Y=0, more commonly in cold biomes.'])
	event.add('malf:nether_rare_earth_ore', ['Found under Y=0, more commonly in cold biomes.'])
	event.add('malf:end_rare_earth_ore', ['Found under Y=0, more commonly in cold biomes.'])
})

onEvent('jei.hide.items', event => {
	// Hide items in JEI here
	// event.hide('minecraft:cobblestone')
})

