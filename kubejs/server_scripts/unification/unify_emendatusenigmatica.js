ServerEvents.recipes((event) => {
    materials_add.forEach((material) => {
        if (Item.exists(`emendatusenigmatica:${material}_ingot`) && Item.exists(`emendatusenigmatica:${material}_block`)) {
            event.shapeless(`emendatusenigmatica:${material}_block`, [`9x emendatusenigmatica:${material}_ingot`]).id(`ico:unification/unify_materials/emendatusenigmatica_base/${material}_block`);
            event.shapeless(`9x emendatusenigmatica:${material}_ingot`, `emendatusenigmatica:${material}_block`).id(`ico:unification/unify_materials/emendatusenigmatica_base/${material}_ingot_from_block`);
        }
        if (Item.exists(`emendatusenigmatica:${material}_ingot`) && Item.exists(`emendatusenigmatica:${material}_nugget`)) {
            event.shapeless(`emendatusenigmatica:${material}_ingot`, [`9x emendatusenigmatica:${material}_nugget`]).id(`ico:unification/unify_materials/emendatusenigmatica_base/${material}_ingot_from_nugget`);
            event.shapeless(`9x emendatusenigmatica:${material}_nugget`, `emendatusenigmatica:${material}_ingot`).id(`ico:unification/unify_materials/emendatusenigmatica_base/${material}_nugget`);
        }
        if (Item.exists(`emendatusenigmatica:${material}_gem`) && Item.exists(`emendatusenigmatica:${material}_block`)) {
            event.shapeless(`emendatusenigmatica:${material}_block`, [`9x emendatusenigmatica:${material}_gem`]).id(`ico:unification/unify_materials/emendatusenigmatica_base/${material}_block`);
            event.shapeless(`9x emendatusenigmatica:${material}_gem`, `emendatusenigmatica:${material}_block`).id(`ico:unification/unify_materials/emendatusenigmatica_base/${material}_gem`);
        }
    })
})

