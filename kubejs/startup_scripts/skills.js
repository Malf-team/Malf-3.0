SkillEvents.registration((event) => {
    event.add('skills:malftest', 'skills:basic', (skill) => {
        skill.initialValue(false);
        skill.description("Player has joined malf");
    });
});