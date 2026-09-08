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

if (completed) {
    symbol =  "✓"
} else {
    symbol =  "○"
}

let rating = 10
let rateMeaning = ""

if (rating <= 4) {
    rateMeaning = "Not for me"
} else if (rating <= 7) {
    rateMeaning = "Good"
} else {
    rateMeaning = "Favorite"
}

const itemDisplay = `Current Item

${symbol} ${itemName1}
Type: ${itemType1}
Rating ${rating}/10
${rateMeaning}`

console.log(listDisplay)
console.log(itemDisplay)