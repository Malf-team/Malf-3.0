#loader multiblocked

import mods.multiblocked.MBDRegistry;
import mods.multiblocked.MBDParticle;
import mods.multiblocked.tile.Controller;
import mods.multiblocked.functions.IUpdateFormed;
import mods.multiblocked.definition.ControllerDefinition;
import mods.multiblocked.functions.IReceiveCustomData;
import mods.multiblocked.tile.Component;
import mods.multiblocked.client.LaserParticle;

import crafttweaker.data.IData;
import crafttweaker.util.Position3f;
import crafttweaker.world.IBlockPos;
import crafttweaker.world.IFacing;
import crafttweaker.world.IWorld;
import crafttweaker.entity.IEntity;
import crafttweaker.player.IPlayer;

val definition = MBDRegistry.getDefinition("multiblocked:atesla") as ControllerDefinition;

definition.updateFormed = function (controller as Controller) {
    if (!isNull(controller.recipeLogic) && controller.recipeLogic.isWorking) {
        if (controller.timer % 40 == 0) {
            controller.sendCustomData(0, "xxx");
            val s = controller.pos.getOffset(IFacing.up(), 5).getOffset(IFacing.west(), 10).getOffset(IFacing.north(), 10) as IBlockPos;
            val e = controller.pos.getOffset(IFacing.down(), 3).getOffset(IFacing.east(), 10).getOffset(IFacing.south(), 10) as IBlockPos;
            val entities = controller.world.getEntitiesInArea(s.asPosition3f(), e.asPosition3f()) as IEntity[];
            for entity in entities {
                if (entity instanceof IPlayer) continue;
                entity.setFire(2);
            }
        }
    }
} as IUpdateFormed;

definition.receiveCustomData = function (component as Component, id as int, data as IData) {
    val controller = component as Controller;
    if (id == 0) {
        val s = controller.pos.getOffset(IFacing.up(), 5).getOffset(IFacing.west(), 10).getOffset(IFacing.north(), 10) as IBlockPos;
        val e = controller.pos.getOffset(IFacing.down(), 3).getOffset(IFacing.east(), 10).getOffset(IFacing.south(), 10) as IBlockPos;
        val entities = controller.world.getEntitiesInArea(s.asPosition3f(), e.asPosition3f()) as IEntity[];
        val start = controller.pos.asPosition3f();
        start.x = start.x + 0.5;
        start.y = start.y + 0.5;
        start.z = start.z + 0.5;
        for entity in entities {
            if (entity instanceof IPlayer) continue;
            val end = entity.position3f;
            end.y = end.y + entity.eyeHeight / 2;
            val particle = MBDParticle.laser(controller.world, start, end) as LaserParticle;
            particle.setLife(10); // tick
            particle.setEmit(0.1F);
            particle.setHeadWidth(0.3F);
            particle.setBody("multiblocked:textures/fx/laser.png"); // create a beam particle and set its texture.
            particle.setHead("multiblocked:textures/fx/laser_start.png"); // create a beam particle and set its texture.
            particle.setAddBlend(true);
            particle.create();
        }
    }
} as IReceiveCustomData;