const fs = require('fs')

global.creator = 'darkalpha' 
global.apikey = ["darkalpha", "DarkNero", "nima"]

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
	delete require.cache[file]
	require(file)
})
