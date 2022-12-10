#noload
// ^ Marked as not supposed to be loaded, since this is not an example, just some syntax dump for reference. If you want
//   to see what happens, feel free to remove this marker

import mods.jei.JEI;
import mods.jei.category.JeiCategory;
import mods.jei.component.JeiDrawable;
import mods.jei.component.JeiDrawableAnimation;
import crafttweaker.api.text.TextComponent;
import crafttweaker.api.text.TranslatableComponent;

/****************************************** DISCLAIMER ******************************************/
/*  People kept asking me to release something that gave at least an idea on how the categories */
/*                                    work, so here we are.                                     */
/*                This is not a proper example script and is not supposed to be!                */
/************************************************************************************************/

<tag:items:jeitweaker:test>.add(<item:minecraft:iron_ingot>);
<tag:items:jeitweaker:test>.add(<item:minecraft:diamond>);

/*********************** SIMPLE INPUT OUTPUT ***********************/
var cat = JeiCategory.create<mods.jei.category.SimpleInputOutput>(
    "sio",
    new TranslatableComponent("narrator.button.difficulty_lock"),
    <fluid:minecraft:water> * 1000,
    <tag:items:minecraft:beacon_payment_items>.asIIngredient()
);
cat.addRecipe([(<item:minecraft:apple> | <item:minecraft:gold_ingot>)], [<tag:items:jeitweaker:test>]);
cat.addRecipe([[<fluid:minecraft:water> * 1000]], [[<fluid:minecraft:lava> * 1000]]);

JEI.addCategory(cat);

/*********************** OUTPUT LIST ***********************/
cat = JeiCategory.create<mods.jei.category.OutputList>(
    "og",
    new TranslatableComponent("gui.proceed"),
    <item:minecraft:dried_kelp>,
    [<item:minecraft:furnace>, <item:minecraft:campfire>]
);
cat.addRecipe([(<tag:items:minecraft:planks>.asIIngredient())], []);
cat.addRecipe([[<item:minecraft:apple>], [<item:minecraft:dried_kelp>], [<fluid:minecraft:water> * 869],
    [<item:minecraft:oak_planks>], [<item:minecraft:iron_ingot>], [<fluid:minecraft:lava> * 420], [<item:minecraft:glowstone_dust>],
    [<item:minecraft:furnace>], [<item:minecraft:campfire>]], []);

JEI.addCategory(cat);

/*********************** INPUT CONSUMING ***********************/
cat = JeiCategory.create<mods.jei.category.InputConsuming>(
    "ic",
    new TranslatableComponent("deathScreen.quit.confirm"),
    <item:minecraft:diamond>,
    [<item:minecraft:diamond>],
    category => { category.baseResultText = new TranslatableComponent("effect.minecraft.invisibility"); }
);
cat.addRecipe([], [<item:minecraft:apple>], graphics => {
    graphics.setExtraComponent("result_text", new TextComponent("Yummy"));
});
cat.addRecipe([], [<item:minecraft:diamond>]);

JEI.addCategory(cat);

/*********************** CATALYST REQUIRING #1 ***********************/
cat = JeiCategory.create<mods.jei.category.CatalystRequiringRecipe>(
    "cr1",
    new TextComponent("Actual Catalyst"),
    <item:minecraft:diamond_shovel>,
    [<item:minecraft:diamond_shovel>],
    category => { category.inputs = 3; category.outputs = 3; }
);
cat.addRecipe([[<item:minecraft:dirt_path>]], [[<item:minecraft:wooden_shovel>, <item:minecraft:golden_shovel>, <item:minecraft:diamond_shovel>], [<item:minecraft:dirt>]]);
cat.addRecipe([[<item:minecraft:dirt_path>], [<fluid:minecraft:lava>], [<item:minecraft:furnace>]],
              [[<fluid:minecraft:water> * 1000], [<item:minecraft:dirt>], [<item:minecraft:apple>], [<item:minecraft:diamond>]]);

JEI.addCategory(cat);

/*********************** CATALYST REQUIRING #2 ***********************/
cat = JeiCategory.create<mods.jei.category.CatalystRequiringRecipe>(
    "cr2",
    new TextComponent("Just Testing Catalyst"),
    <item:minecraft:diamond_shovel>,
    [<item:minecraft:diamond_shovel>],
    category => {
        category.catalystDrawable = JeiDrawable.ofAnimated(<resource:jeitweaker:textures/gui/jei/atlas.png>, 172, 238, 18, 18, 20, JeiDrawableAnimation.SHOW_BOTTOM_TO_TOP);
    }
);
cat.addRecipe([[<item:minecraft:emerald>]], [[<item:minecraft:diamond>, <item:minecraft:iron_ingot>]], graphics => {
    graphics.addTooltip("process_detail", new TextComponent("It'll happen, eventually"));
});

JEI.addCategory(cat);
