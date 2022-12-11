// priority: 10

onEvent('tags.items', event => {
  // Get the #forge:cobblestone tag collection and add Diamond Ore to it
  event.add('forge:dusts', 'malf:rare_earth_dust')
  event.add('forge:dusts/rare_earth', 'malf:rare_earth_dust')
  
  event.add('forge:raw_materials', 'malf:rare_earth_mineral')
  event.add('forge:raw_materials/rare_earth', 'malf:rare_earth_mineral')
	
})
onEvent('block.loot_tables', event => {
  event.addBlock('#forge:ores/rare_earth', (table) => {
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
            "name": "malf:rare_earth_ore"
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
            "name": "malf:rare_earth_mineral"
          }
        ]
      })
    })
  })


	
	
	
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

