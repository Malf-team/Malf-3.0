/*
SkillEvents.registration((event) => {
    event.add('skills:malftest', 'skills:basic', (skill) => {
        skill.initialValue(false);
        skill.description("Player has joined malf");
    });
});
*/
SkillEvents.registration((event) => {
    event.add('skills:build1', 'skills:basic', (skill) => {
        skill.initialValue(false);
        skill.description("Player Has Made Planks")
    });
    event.add('skills:build2_1', 'skills:basic', (skill) => {
        skill.initialValue(false);
        skill.description("Player Has Made A door")
    });
}); 