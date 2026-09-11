const listName = "Things I Want To Experience Before I'm 30"
const totalItems = 6
const completedItems = 3
const percentage = Math.round(100*(completedItems/totalItems))
const progress = `${completedItems} / ${totalItems} completed - ${percentage}%`

const listNameHTML = document.querySelector("#list-name")
const progressHTML = document.querySelector("#progress")

listNameHTML.textContent = listName
progressHTML.textContent = progress


