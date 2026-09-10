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

const itemName = "Amadeus"
const itemType = "Movie"
let itemNameStatus = ""
let completed = false
const rating = 7
let ratingClass = ""
let ratingOutput = ""

if (completed) {
    itemNameStatus= "✓"
    if (rating >= 0 && rating <= 4) {
        ratingClass = "Not for me"
    } else if ( rating > 4 && rating <=7 ) {
        ratingClass = "Good"
    } else if (rating > 7 && rating <=10) {
        ratingClass = "Favorite"
    } else {
        ratingClass= "Invalid number"
    }

    ratingOutput = `
${itemNameStatus} ${itemName}
${itemType}
Rating: ${rating}/10
${ratingClass}
    `
} else {
    itemNameStatus = "○"
    ratingOutput = `
${itemNameStatus} ${itemName}
${itemType}
Not rated yet
    `
}



console.log(ratingOutput)