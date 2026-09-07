const listName =  "Countries I Want To Visit"
const creatorName = "kel"
const numOfItems = 50
const completedItems = 12
const progress = Math.round(100*(completedItems/numOfItems))

const listDisplay =  `
=== ${listName} ===
Created by @${creatorName}

${completedItems} / ${numOfItems} completed
Progress: ${progress}%
`

console.log(listDisplay)