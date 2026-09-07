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
let itemName1 = "Japan" 
let itemType1 = "country"
let completed = false
let itemDisplay = ""
if (completed == true) {
    itemDisplay = `
Current Item

✓ ${itemName1}
Type: ${itemType1}
    `

} else {
    itemDisplay = `
Current Item

○ ${itemName1}
Type: ${itemType1}
    `
}

console.log(listDisplay)
console.log(itemDisplay)