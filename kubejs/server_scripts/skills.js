ItemSkillEvents.register((event) => {
    event.restrict('minecraft:*', restrict => {
        restrict.everything().if(player => player.cannot('skills:malftest', true));
    })
});

/*BlockEvents.rightClicked((event) => {
    event.improve('skills:malftest', (conditions) => {
        conditions.chance(50);
    })
});*/