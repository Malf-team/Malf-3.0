const searchSettings = {
	radius:25,
	speed: 1000,
	worldBottom: 0,
	worldTop: 256
}
/*
X = East (+) West (-)
Y = Up (+) Down (-)
Z = North(+) South (-)
*/
const movePos = (event, block, data) => {
	const endOfX = (block.x >= data.maxX)
	const endOfY = (block.y >= data.maxY)
	const endOfZ = (block.z >= data.maxZ)
	const world = block.world
	if (endOfX) {
		if (endOfZ) {
			if (endOfY) {
				console.log('Done!')
				return 'end'
			} else {
				return world.getBlock(data.minX, block.y + 1, data.minZ)
			}
		} else {
			return world.getBlock(data.minX, block.y, block.z + 1)
		}
	} else {
		return block.east
	}
}
const getBlockName = (id) => {
	let name = Item.of(id).getName()
	if (name === 'Air') name = id
	return name
}
onEvent('item.right_click', event => {
	if (event.item.id != 'minecraft:stick') return;
	if (event.player.y > searchSettings.worldTop || event.player.y < searchSettings.worldBottom) {event.server.tell('The player is outside the world! Please move inside the world to use orebserver');return}
	let orebserver = {
		maxX: event.player.x + searchSettings.radius,
		maxY: event.player.y,
		maxZ: event.player.z + searchSettings.radius,
		minX: event.player.x - searchSettings.radius,
		minY: searchSettings.worldBottom,
		minZ: event.player.z - searchSettings.radius,
		currentX: event.player.x - searchSettings.radius,
		currentY: searchSettings.worldBottom,
		currentZ: event.player.z - searchSettings.radius,
		currentBlock: event.world.getBlock(event.player.x - searchSettings.radius, searchSettings.worldBottom, event.player.z - searchSettings.radius)
	}
	console.log('Starting positions:')
	console.log(`X: ${event.player.x - searchSettings.radius}, Y: ${searchSettings.worldBottom}, Z: ${event.player.z - searchSettings.radius}`)
	let blockCounts = {}
	let ticksTillCompletion = ((orebserver.maxX-orebserver.minX) * (orebserver.maxY-orebserver.minY) * (orebserver.maxZ-orebserver.minZ))/searchSettings.speed
	event.server.tell(`Scanning started. Estimated time: ${Math.ceil(ticksTillCompletion)} ticks, or ${Math.ceil(ticksTillCompletion/20)} seconds`)
	event.server.scheduleInTicks(1, event => {
		let rescheduling = true
		for (let i = 0; i < searchSettings.speed;i++) {
			if (blockCounts[orebserver.currentBlock.id]) {
				blockCounts[orebserver.currentBlock.id]++
			} else {
				blockCounts[orebserver.currentBlock.id] = 1
			}
			let newBlock = movePos(event, orebserver.currentBlock, orebserver)
			
			if (!(newBlock === 'end')) {
				orebserver.currentBlock = newBlock			
			} else {
				let totalBlocks = 0
				event.server.tell('\nTotal block counts:')
				for (i in blockCounts) {
					event.server.tell(`${getBlockName(i)}: ${blockCounts[i]}`)
					totalBlocks += blockCounts[i]
				}
				console.log(totalBlocks)
				event.server.tell('\nBlock percentage make ups:')
				for (i in blockCounts) {
					console.log(blockCounts[i]/totalBlocks)
					event.server.tell(`${getBlockName(i)}: ${Math.round(blockCounts[i]/totalBlocks * 10000)/100}%`)
				}

				event.server.tell(`\n Total blocks scanned: ${totalBlocks}`)
				rescheduling = false
			}
		}
		if (rescheduling) {
			event.reschedule()
		}
	})
})