const listName = "Things I Want To Experience Before I'm 30"
const totalItems = 6
const completedItems = 3
const percentage = Math.round(100*(completedItems/totalItems))
const progress = `${completedItems} / ${totalItems} completed - ${percentage}%`

const listNameHTML = document.querySelector("#list-name")
const progressHTML = document.querySelector("#progress")
const statusButtonHTML = document.querySelector(".status-button")
const addButtonHTML = document.querySelector(".add-button")
const addFormHTML = document.getElementById("add-form")
const cancelButtonHTML = document.getElementById("cancel-button")

listNameHTML.textContent = listName
progressHTML.textContent = progress


let completed = false

statusButtonHTML.addEventListener("click", function() {
    completed = !completed
    if(completed){
        statusButtonHTML.textContent = "○"
    } else {
        statusButtonHTML.textContent = "✓"
    }
})

addButtonHTML.addEventListener("click", function() {
    addFormHTML.style.display = "block"
    addButtonHTML.style.display = "none"
})

cancelButtonHTML.addEventListener("click", function() {
    addFormHTML.style.display = "none"
    addButtonHTML.style.display = "block"
})



