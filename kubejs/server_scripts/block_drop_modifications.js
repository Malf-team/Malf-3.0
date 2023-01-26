// priority: 10

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = true
settings.logErroringRecipes = true

onEvent('tags.items', event => {
  // Get the #forge:cobblestone tag collection and add Diamond Ore to it
  event.add('forge:dusts', 'malf:rare_earth_dust')
  event.add('forge:dusts/rare_earth', 'malf:rare_earth_dust')
  
  event.add('forge:raw_materials', 'malf:rare_earth_mineral')
  event.add('forge:raw_materials/rare_earth', 'malf:rare_earth_mineral')
	
})
onEvent('block.loot_tables', event => {

  function addStandardDrops(ore, raw) { 
    if (typeof raw == 'undefined') {
      raw = "raw_" + ore
    }
    //Standard drops = raw ore drops, affected by fortune

    event.addBlock('#forge:ores/'+ore, (table) => {
      table.addPool((pool) => {
        pool.rolls = 1
        pool.addEntry({
          "type": "minecraft:alternatives",
          "children": [
            {
              "type": "minecraft:item",
              "conditions": [
                {
                  "condition": "minecraft:match_tool",
                  "predicate": {
                    "enchantments": [
                      {
                        "enchantment": "minecraft:silk_touch",
                        "levels": {
                          "min": 1
                        }
                      }
                    ]
                  }
                }
              ],
              "name": "malf:" + ore + "_ore" //ID of the block
            },
            {
              "type": "minecraft:item",
              "functions": [
                {
                  "function": "minecraft:apply_bonus",
                  "enchantment": "minecraft:fortune",
                  "formula": "minecraft:ore_drops"
                },
                {
                  "function": "minecraft:explosion_decay"
                }
              ],
              "name": "malf:" + raw //ID of the raw mineral
            }
          ]
        })
      })
    })
  }

  for (var i = 0; i < malf_common_ores.length; i++) {
      addStandardDrops(malf_common_ores[i], "raw_" + malf_common_ores[i])
  }

  for (var i = 0; i < malf_exotic_ores.length; i++) {
    if (malf_exotic_ores[i] === "rare_earth") {
      addStandardDrops("rare_earth", "rare_earth_mineral")
    }
    else {
      addStandardDrops(malf_exotic_ores[i], "raw_" + malf_exotic_ores[i])
    }
  }
	
	
	
	/*event.modifyBlock('malf:rare_earth_ore', table => {
        table.addPool(pool => {
            pool.addItem("malf:rare_earth_mineral").randomChance(0.35)
        })
    })
	event.addSimpleBlock("malf:rare_earth_ore", 'malf:rare_earth_mineral')
	event.addSimpleBlock("malf:deepslate_rare_earth_ore", 'malf:rare_earth_mineral')
	event.addSimpleBlock("malf:nether_rare_earth_ore", 'malf:rare_earth_mineral')
	event.addSimpleBlock("malf:end_rare_earth_ore", 'malf:rare_earth_mineral')*/
})

/*onEvent("lootjs", (event) => {
    event.addBlockLootModifier("malf:rare_earth_ore").pool((p) => {
        p.addLoot("malf:rare_earth_mineral");
        p.applyOreBonus("minecraft:fortune");
    });
	event.addBlockLootModifier("malf:deepslate_rare_earth_ore").pool((p) => {
        p.addLoot("malf:rare_earth_mineral");
        p.applyOreBonus("minecraft:fortune");
    });
	event.addBlockLootModifier("malf:nether_rare_earth_ore").pool((p) => {
        p.addLoot("malf:rare_earth_mineral");
        p.applyOreBonus("minecraft:fortune");
    });
	event.addBlockLootModifier("malf:end_rare_earth_ore").pool((p) => {
        p.addLoot("malf:rare_earth_mineral");
        p.applyOreBonus("minecraft:fortune");
    });
});*/

