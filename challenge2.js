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
const itemName1 = "Japan" 
const itemType1 = "country"
let symbol = ""
let completed = true

if (completed == true) {
    symbol =  "✓"
} else {
    symbol =  "○"
}

const itemDisplay = `Current Item

${symbol} ${itemName1}
Type: ${itemType1}`

console.log(listDisplay)
console.log(itemDisplay)