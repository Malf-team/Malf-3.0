#loader multiblocked

import mods.multiblocked.MBDRegistry;
import mods.multiblocked.definition.ControllerDefinition;
import mods.multiblocked.definition.ComponentDefinition;
import mods.multiblocked.recipe.RecipeMap;
import mods.multiblocked.functions.ISetupRecipe;
import mods.multiblocked.recipe.RecipeLogic;
import mods.multiblocked.recipe.Recipe;

import crafttweaker.text.ITextComponent;

var definition as ComponentDefinition = MBDRegistry.getDefinition("mbd:ebf");

var ebf = definition as ControllerDefinition;
ebf.recipeMap.start()
    .duration(100)
    .data("temperature", 1000)
    .text(ITextComponent.fromString("T: §61000§rK"))
    .inputItems(<ore:dye> * 8)
    .outputItems(<minecraft:grass> * 8)
    .buildAndRegister();

ebf.recipeMap.start()
    .duration(100)
    .data("temperature", 5000)
    .text(ITextComponent.fromString("T: §65000§rK"))
    .inputItems(<minecraft:sand> * 8)
    .outputItems(<minecraft:glass> * 8)
    .buildAndRegister();

ebf.setupRecipe = function (recipeLogic as RecipeLogic, recipe as Recipe) as bool {
    val temp = recipe.getData("temperature") as int;
    if (temp > 1000) return true; // return true will block the original logic
    //***** original logic *****//
/**
    recipeLogic.lastRecipe = recipe;
    recipeLogic.isWorking = true;
    recipeLogic.controller.setStatus("working");
    recipeLogic.progress = 0;
    recipeLogic.duration = recipe.duration;
    recipe.handleInput(recipeLogic.controller);
    recipeLogic.markDirty();
**/
    return false; // keep the original logic
} as ISetupRecipe;
