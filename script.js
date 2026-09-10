const listName = "Movies I Want To Watch"
const userName = "kel"
const totalItems = 47
let completedItems = 28

const remainingItems = totalItems - completedItems
const percentage = Math.round(100*(completedItems/totalItems))

const msgOutput = `
${listName}

Created by @${userName}

${completedItems} / ${totalItems} completed

${remainingItems} remaining

${percentage}%
`

console.log(msgOutput)