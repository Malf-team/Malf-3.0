// priority: 99
// This file adds fluids


function capitalizeFirstLetter(string) { //Capitalizes first letter
	return string.charAt(0).toUpperCase() + string.slice(1);
}
function fancify(name) { //Capitalizes and adds spaces to an item id name ('lapis_lazuli' = 'Lapis Lazuli', 'redstone' = 'Redstone', etc)
	var word = name.split("_")
	var final_string = ""

	for (var i = 0; i < word.length; i++) {
		//if (word[i] === "deepslate") {word[i] = "slate"} //Shortens deepslate to slate
		word[i] = capitalizeFirstLetter(word[i]);

		if (i !== 0) { final_string += (" " + word[i]) } //Add space before the word, unless first word
		else { final_string += (word[i]) }
	}
	return final_string
}


function toLinear(hex) {
	hex = hex.toString(16)
	const hexToDecimal = hex => parseInt(hex, 16);
	var R = hexToDecimal(hex.slice(0, 2))
	var G = hexToDecimal(hex.slice(2, 4))
	var B = hexToDecimal(hex.slice(4, 6))
	return [R, G, B]
}


function toHex(rgb_array) {
	var R = rgb_array[0].toString(16);
	var G = rgb_array[1].toString(16);
	var B = rgb_array[2].toString(16);
	if (R.length < 2) {R = "0"+R}
	if (G.length < 2) {G = "0"+G}
	if (B.length < 2) {B = "0"+B}
	return (R+G+B)
}
	
function mixColors(c1, c2) {
	var lin_c1 = toLinear(c1);
	var lin_c2 = toLinear(c2);
	var result_color = []
	for (var i = 0; i < 3; i++) {
		result_color[i] = Math.round((lin_c1[i] + lin_c2[i]) / 2)
	}
	var result_hex = toHex(result_color)
	result_hex = "0x"+result_hex
	result_hex = parseInt(result_hex)
	return result_hex 
}

const ore_color = {	"hematite":0x998888, 
					"tetrahedrite":0xBA4F40,
					"gold":0xCCCC53,
					"cinnabar":0xCD103E,
					"lazurite":0x254EBD,
					"kimberlite":0x559EDA,
					"beryl":0x65CF98,
					"cassiterite":0xDADACF,
					"bauxite":0x582C2C,
					"pentlandite":0xA8AA88,
					"galena":0x473553,
					"pitchblende":0x6C7F68,
					"sphalerite":0xBFC5B8,
					"argentite":0xD7DCB7,
					"ilmenite":0xA12A4A
				}
const chemical_color_add = 0xCCCCDD
const refined_color_add = 0xCCCC3D

onEvent('fluid.registry', event => {
	// These first examples are 1.16.5 and 1.18.2 syntax
	
	// Basic "thick" (looks like lava) fluid with red tint
	/*event.create('thick_fluid')
	  .thickTexture(0xFF0000)
	  .bucketColor(0xFF0000)
	  .displayName('Thick Fluid')
		.luminosity(8)
	*/

	function makeFluids(name) {
		var color = ore_color[name]
		var chemical_color = mixColors(color, chemical_color_add)
		var refined_color = mixColors(color, refined_color_add)

		event.create('malf:'+ name +'-rich_water')
			.thinTexture(color)
			.bucketColor(color)
			.displayName('Diluted '+ capitalizeFirstLetter(name) +' Water')
			.temperature(295)
			.noBucket()
			.noBlock()

		event.create('malf:chemically_activated_'+ name +'_water')
			.thinTexture(chemical_color)
			.bucketColor(chemical_color)
			.displayName('Chemically Activated '+ capitalizeFirstLetter(name) +' Water')
			.temperature(295)
			.noBucket()
			.noBlock()

		event.create('malf:refined_'+ name +'_water')
			.thinTexture(refined_color)
			.bucketColor(refined_color)
			.displayName('Refined '+ capitalizeFirstLetter(name) +' Water')
			.temperature(295)
			.noBucket()
			.noBlock()
	}

	malf_common_ores.forEach(makeFluids)
	
	

  })
