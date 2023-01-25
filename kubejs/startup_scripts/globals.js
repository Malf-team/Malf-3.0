// priority: 1000

const ore_names = ["iron", "copper", "gold", "aluminum", "lead", "silver", "nickel", "uranium", "tin", "zinc"]

const malf_common_ores = ["hematite", "tetrahedrite", "gold", "cinnabar", "lazurite", "kimberlite", "beryl", "cassiterite", "bauxite", "pentlandite", "galena", "pitchblende", "sphalerite", "argentite"]
const malf_exotic_ores = ["ethereal_bronze", "rare_earth"]

const malf_ore_hardness = {"ethereal_bronze":4}
const malf_ore_mining_level = {"ethereal_bronze":"diamond"}
const malf_ore_luminosity = {"ethereal_bronze":0.5, "pitchblende":0.1} //0.0 ~ 1.0

var processing_output = {   "hematite":     ["iron", "iron", "iron", "tungsten"], // "#" marks a non chemlib dust which is replaced in the ID-function. Fifth ([4]) output is the nugget / mini bonus-output
                            "tetrahedrite": ["copper", "iron", "sulfur", "antimony"],
                            "gold":         ["gold", "gold", "silver", "tellurium"],
                            "cinnabar":     ["#redstone", "sulfur", "mercury_sulfide", "chromium"],
                            "lazurite":     ["#lapis", "silicon", "calcium", "natrium"],
                            "kimberlite":   ["#diamond", "carbon", "magnesium", "platinum"],
                            "beryl":        ["#emerald", "#quartz", "silicon", "beryllium"],
                            "cassiterite":  ["tin", "tin", "arsenic", "molybdenium"],
                            "bauxite":      ["aluminum", "aluminum", "cadmium", "gallium"],
                            "pentlandite":  ["nickel", "nickel", "iron", "cobalt"],
                            "galena":       ["lead", "sulfur", "zinc", "silver"],
                            "pitchblende":  ["uranium", "lead", "thorium", "#rare_earth"],
                            "sphalerite":   ["zinc", "sulfur", "germanium", "indium"],
                            "argentite":    ["silver", "silver", "sulfur", "actinium"]
                        }

function convert_to_ID(output_array) {
    var item, new_id, nugget, ore

    for (var i=0; i<malf_common_ores.length; i++) {
        ore = malf_common_ores[i]
        for (var j=0; j<4; j++) {
            item = output_array[ore][j]
            switch(item) {
                case "#redstone":
                    new_id = "minecraft:redstone"
                    nugget = "supercircuitmaker:tiny_redstone"
                    break;
                case "#lapis":
                    new_id = "minecraft:lapis_lazuli"
                    nugget = "malf:lapis_lazuli_shard"
                    break
                case "#diamond":
                    new_id = "minecraft:diamond"
                    nugget = "malf:diamond_shard"
                    break
                case "#emerald":
                    new_id = "minecraft:emerald"
                    nugget = "malf:emerald_shard"
                    break
                case "#quartz":
                    new_id = "minecraft:quartz"
                    break
                case "#rare_earth":
                    new_id = "malf:rare_earth_dust"
                    break
                case "iron":
                    new_id = "chemlib:iron_dust"
                    nugget = "minecraft:iron_nugget"
                    break;
                case "copper":
                    new_id = "chemlib:copper_dust"
                    nugget = "alltheores:copper_nugget"
                    break;
                case "gold":
                    new_id = "chemlib:gold_dust"
                    nugget = "minecraft:gold_nugget"
                    break;
                default:
                    new_id = "chemlib:" + item + "_dust"
                    nugget = "chemlib:" + output_array[ore][0] + "_nugget"
                    break;
            }
            output_array[ore][j] = new_id
            output_array[ore].push(nugget)
        }
    }
    return output_array
}

processing_output = convert_to_ID(processing_output)

global['processing_output'] = processing_output
global['malf_common_ores'] = malf_common_ores
global['malf_exotic_ores'] = malf_exotic_ores