const input = document.querySelector(".listInput")
input.addEventListener("keypress", getInput)
const toDoItems = document.querySelector(".toDoItems")
let noOfLists = 0

function getInput(e) {
    if (e.key === "Enter") {
        if (noOfLists != 10) {
            noOfLists += 1
            const final = input.value
            console.log(final)
            makeNewList(final)  
            input.value = ""
            
        } else {
            alert("Max 10 tasks!")
        }
    }
}

function makeNewList(final) {
    const task = document.createElement("li")
    task.classList.add("task")
    
    const taskContent = document.createElement("li")
    taskContent.textContent = final

    const deleteTask = document.createElement("img")
    deleteTask.classList.add("binIcon")
    deleteTask.src = "images/binIcon.jpg"
    deleteTask.addEventListener("click", function deleteTask() {
        toDoItems.removeChild(task)
        noOfLists -= 1
    } )

    task.appendChild(taskContent)
    task.appendChild(deleteTask)
    toDoItems.appendChild(task)

}



