onEvent('command.registry', event => {
    const { commands: Commands } = event;
    event.register(
        Commands.literal('command-in-chat')
        .requires(source => source.getServer().isSingleplayer() || source.hasPermission(2))
        .executes(ctx => {
			//executes commands
        })
    )
    
})