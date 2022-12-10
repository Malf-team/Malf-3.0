import crafttweaker.api.events.CTEventManager;
import crafttweaker.api.event.entity.player.interact.EntityInteractEvent;
import crafttweaker.api.util.InteractionHand;
import mods.gamestages.StageHelper;
import mods.itemstages.ItemStages;
import mods.itemstages.Restriction;
import crafttweaker.api.text.TextComponent;
import crafttweaker.api.text.TranslatableComponent;

val ae2_T4_items = ["ae2:64k_crafting_storage", 
"ae2:256k_crafting_storage", 
"ae2:crafting_monitor", 
"ae2:pattern_provider", 
"ae2:molecular_assembler",
"ae2:light_detector",
"ae2:wireless_terminal",
"ae2:wireless_crafting_terminal",
"ae2:color_applicator",
"ae2:matter_cannon",
"ae2:quartz_vibrant_glass",
"ae2:quartz_fixture",
"ae2:sky_stone_brick",
"ae2:sky_stone_tank",
"ae2:wireless_access_point",
"ae2:tiny_tnt",
"ae2:quantum_ring",
"ae2:quantum_link",
"ae2:spatial_pylon",
"ae2:spatial_io_port",
"ae2:chest",
"ae2:interface",
"ae2:cell_workbench",
"ae2:io_port",
"ae2:condenser",
"ae2:vibration_chamber",
"ae2:dense_energy_cell",
"ae2:creative_energy_cell",
"ae2:crafting_unit",
"ae2:crafting_accelerator",
"ae2:1k_crafting_storage",
"ae2:4k_crafting_storage",
"ae2:16k_crafting_storage",
"ae2:matter_ball",
"ae2:fluix_pearl",
"ae2:name_press",
"ae2:basic_card",
"ae2:redstone_card",
"ae2:capacity_card",
"ae2:void_card",
"ae2:portable_item_cell_1k",
"ae2:portable_item_cell_4k",
"ae2:portable_item_cell_16k",
"ae2:portable_item_cell_64k",
"ae2:portable_item_cell_256k",
"ae2:portable_fluid_cell_1k",
"ae2:portable_fluid_cell_4k",
"ae2:portable_fluid_cell_16k",
"ae2:portable_fluid_cell_64k",
"ae2:portable_fluid_cell_256k",
"ae2:blank_pattern",
"ae2:white_lumen_paint_ball",
"ae2:orange_lumen_paint_ball",
"ae2:magenta_lumen_paint_ball",
"ae2:light_blue_lumen_paint_ball",
"ae2:yellow_lumen_paint_ball",
"ae2:lime_lumen_paint_ball",
"ae2:pink_lumen_paint_ball",
"ae2:gray_lumen_paint_ball",
"ae2:light_gray_lumen_paint_ball",
"ae2:cyan_lumen_paint_ball",
"ae2:purple_lumen_paint_ball",
"ae2:blue_lumen_paint_ball",
"ae2:brown_lumen_paint_ball",
"ae2:green_lumen_paint_ball",
"ae2:red_lumen_paint_ball",
"ae2:black_lumen_paint_ball",
"ae2:fluid_storage_cell_16k",
"ae2:fluid_storage_cell_64k",
"ae2:fluid_storage_cell_256k",
"ae2:spatial_storage_cell_2",
"ae2:spatial_storage_cell_16",
"ae2:spatial_storage_cell_128",
"ae2:toggle_bus",
"ae2:inverted_toggle_bus",
"ae2:cable_anchor",
"ae2:advanced_card",
"ae2:fuzzy_card",
"ae2:speed_card",
"ae2:inverter_card",
"ae2:crafting_card",
"ae2:energy_card",
"ae2:equal_distribution_card",
"ae2:spatial_cell_component_2",
"ae2:spatial_cell_component_16",
"ae2:spatial_cell_component_128",
"ae2:cell_component_16k",
"ae2:cell_component_64k",
"ae2:cell_component_256k",
"ae2:fluid_cell_housing",
"ae2:wireless_receiver",
"ae2:wireless_booster",
"ae2:sky_dust",
"ae2:singularity",
"ae2:quantum_entangled_singularity",
"ae2:creative_item_cell",
"ae2:creative_fluid_cell",
"ae2:view_cell",
"ae2:item_storage_cell_16k",
"ae2:item_storage_cell_64k",
"ae2:item_storage_cell_256k",
"ae2:fluid_storage_cell_1k",
"ae2:fluid_storage_cell_4k",
"ae2:monitor",
"ae2:dark_monitor",
"ae2:storage_bus",
"ae2:import_bus",
"ae2:export_bus",
"ae2:level_emitter",
"ae2:energy_level_emitter",
"ae2:annihilation_plane",
"ae2:identity_annihilation_plane",
"ae2:formation_plane",
"ae2:pattern_encoding_terminal",
"ae2:crafting_terminal",
"ae2:storage_monitor",
"ae2:conversion_monitor",
"ae2:cable_pattern_provider",
"ae2:cable_interface",
"ae2:pattern_access_terminal",
"ae2:me_p2p_tunnel",
"ae2:redstone_p2p_tunnel",
"ae2:item_p2p_tunnel",
"ae2:fluid_p2p_tunnel",
"ae2:fe_p2p_tunnel",
"ae2:light_p2p_tunnel"] as string[];

//Tech:

// T2 -------------------------------------------------------------------------------

ItemStages.createModRestriction("immersiveengineering", "tech2");
ItemStages.createModRestriction("immersivepetroleum", "tech2");
ItemStages.createModRestriction("jeimultiblocks", "tech2");
ItemStages.createModRestriction("pneumaticcraft", "tech2");

ItemStages.createModRestriction("pipez", "tech2");
ItemStages.createModRestriction("storagenetwork", "tech2");
ItemStages.createModRestriction("packagedauto", "tech2");
ItemStages.createModRestriction("extendedcrafting", "tech2");
ItemStages.createModRestriction("packagedexcrafting", "tech2");


// T3 -------------------------------------------------------------------------------

ItemStages.createModRestriction("ftbic", "tech3");
ItemStages.createModRestriction("industrialforegoing", "tech3");
ItemStages.createModRestriction("compactcrafting", "tech3");

ItemStages.createModRestriction("darkutils", "tech3");
ItemStages.createModRestriction("mob_grinding_utils", "tech3");
ItemStages.createModRestriction("solarflux", "tech3");
ItemStages.createModRestriction("cobblefordays", "tech3");

//AE2 Basics:
ItemStages.createModRestriction("ae2", "tech3"); 

//ExCrafting
ItemStages.restrict(<item:extendedcrafting:advanced_component>, "tech3");
ItemStages.restrict(<item:extendedcrafting:advanced_catalyst>, "tech3");
ItemStages.restrict(<item:extendedcrafting:advanced_table>, "tech3");
ItemStages.restrict(<item:extendedcrafting:advanced_auto_table>, "tech3");
ItemStages.restrict(<item:packagedexcrafting:advanced_crafter>, "tech3");

//AE2 T3:
/*
ME Controller, Inscriber (+ all presses), Charger, ME Drive, Energy Acceptor, Certus Quartz (+dust, charged, seed), Silicon,
Fluix (+dust, seed), Processors (+ printed) Sky Compass, 1k + 4k storage, fluix glass cable, illuminated panel, ME terminal,
Cell Housing, Quartz Glass, Certus Ore, Fluix Block, Sky Stone, Smooth Sky Stone, Sky Stone Chest
*/


// T4 -------------------------------------------------------------------------------

ItemStages.createModRestriction("thermal", "tech4");
ItemStages.createModRestriction("powah", "tech4");

ItemStages.createModRestriction("botanypots", "tech4");
ItemStages.createModRestriction("enderstorage", "tech4");
ItemStages.createModRestriction("ae2additions", "tech4");
ItemStages.createModRestriction("ae2things", "tech4");
ItemStages.createModRestriction("simplyjetpacks", "tech4");


//Solar Flux T4:
ItemStages.restrict(<item:solarflux:sp_5>, "tech4");
ItemStages.restrict(<item:solarflux:sp_6>, "tech4");
ItemStages.restrict(<item:solarflux:sp_7>, "tech4");
ItemStages.restrict(<item:solarflux:sp_8>, "tech4");

//AE2 T4:
ItemStages.restrict(<tag:items:ae2:smart_cable>, "tech4");
ItemStages.restrict(<tag:items:ae2:covered_cable>, "tech4");
ItemStages.restrict(<tag:items:ae2:covered_dense_cable>, "tech4");
ItemStages.restrict(<tag:items:ae2:memory_cards>, "tech4");
ItemStages.restrict(<tag:items:ae2:paint_balls>, "tech4");
ItemStages.restrict(<item:ae2:facade>, "tech4");
 
for element in ae2_T4_items {
    ItemStages.restrict(<item:${element}>, "tech4");
}

//ExCrafting
ItemStages.restrict(<item:extendedcrafting:elite_component>, "tech4");
ItemStages.restrict(<item:extendedcrafting:elite_catalyst>, "tech4");
ItemStages.restrict(<item:extendedcrafting:elite_table>, "tech4");
ItemStages.restrict(<item:extendedcrafting:elite_auto_table>, "tech4");
ItemStages.restrict(<item:packagedexcrafting:elite_crafter>, "tech4");



// T5 -------------------------------------------------------------------------------

ItemStages.createModRestriction("mekanism", "tech5");
ItemStages.createModRestriction("mekanismgenerators", "tech5");
ItemStages.createModRestriction("beyond_earth", "tech5");
ItemStages.createModRestriction("alchemistry", "tech5");

ItemStages.createModRestriction("fluxnetworks", "tech5");
ItemStages.createModRestriction("hostilenetworks", "tech5");
ItemStages.createModRestriction("lazierae2", "tech5");
ItemStages.createModRestriction("aeinfinitybooster", "tech5");
ItemStages.createModRestriction("entangled", "tech5");
ItemStages.createModRestriction("angelring", "tech5");

//ExCrafting
ItemStages.restrict(<item:extendedcrafting:ultimate_component>, "tech5");
ItemStages.restrict(<item:extendedcrafting:ultimate_catalyst>, "tech5");
ItemStages.restrict(<item:extendedcrafting:ultimate_table>, "tech5");
ItemStages.restrict(<item:extendedcrafting:ultimate_auto_table>, "tech5");
ItemStages.restrict(<item:packagedexcrafting:ultimate_crafter>, "tech5");


// -------------------------------------------------------------------------------

