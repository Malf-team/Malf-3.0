import mods.mekanism.api.ingredient.ItemStackIngredient;

/*
 * Adds two Combining Recipes that do the following:
 * 1) Adds a recipe that combines three Books and six Planks into a Bookshelf.
 * 2) Adds a recipe that combines eight Prismarine Shards and one Black Dye into a block of Dark Prismarine.
*/

// <recipetype:mekanism:combining>.addRecipe(name as string, mainInput as ItemStackIngredient, extraInput as ItemStackIngredient, output as IItemStack)

<recipetype:mekanism:combining>.addRecipe("combining/bookshelf", ItemStackIngredient.from(<item:minecraft:book> * 3), ItemStackIngredient.from(<tag:items:minecraft:planks>, 6), <item:minecraft:bookshelf>);
//Alternate implementations of the above recipe are shown commented below. These implementations make use of implicit casting to allow easier calling:
// <recipetype:mekanism:combining>.addRecipe("combining/bookshelf", <item:minecraft:book> * 3, ItemStackIngredient.from(<tag:items:minecraft:planks>, 6), <item:minecraft:bookshelf>);
// <recipetype:mekanism:combining>.addRecipe("combining/bookshelf", ItemStackIngredient.from(<item:minecraft:book> * 3), <tag:items:minecraft:planks> * 6, <item:minecraft:bookshelf>);
// <recipetype:mekanism:combining>.addRecipe("combining/bookshelf", <item:minecraft:book> * 3, <tag:items:minecraft:planks> * 6, <item:minecraft:bookshelf>);

<recipetype:mekanism:combining>.addRecipe("combining/dark_prismarine", ItemStackIngredient.from(<item:minecraft:prismarine_shard> * 8), ItemStackIngredient.from(<tag:items:forge:dyes/black>), <item:minecraft:dark_prismarine>);
//Alternate implementations of the above recipe are shown commented below. These implementations make use of implicit casting to allow easier calling:
// <recipetype:mekanism:combining>.addRecipe("combining/dark_prismarine", <item:minecraft:prismarine_shard> * 8, ItemStackIngredient.from(<tag:items:forge:dyes/black>), <item:minecraft:dark_prismarine>);
// <recipetype:mekanism:combining>.addRecipe("combining/dark_prismarine", ItemStackIngredient.from(<item:minecraft:prismarine_shard> * 8), <tag:items:forge:dyes/black>, <item:minecraft:dark_prismarine>);
// <recipetype:mekanism:combining>.addRecipe("combining/dark_prismarine", <item:minecraft:prismarine_shard> * 8, <tag:items:forge:dyes/black>, <item:minecraft:dark_prismarine>);


/*
 * Removes two Combining Recipes:
 * 1) The recipe for producing Fluorite Ore.
 * 2) The recipe for producing Light Blue Dye from Blue Dye and White Dye.
*/

// <recipetype:mekanism:combining>.removeByName(name as string)

<recipetype:mekanism:combining>.removeByName("mekanism:processing/fluorite/to_ore");
<recipetype:mekanism:combining>.removeByName("mekanism:combining/dye/light_blue");