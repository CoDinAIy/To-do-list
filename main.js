const input = document.querySelector(".listInput")
input.addEventListener("keypress", getInput)
const toDoItems = document.querySelector(".toDoItems")
let noOfLists = 0

function getInput(e) {
    if (e.key === "Enter") {
        if (noOfLists != 10) {
            const final = input.value
            console.log(final)
            makeNewList(final)
            noOfLists += 1
        } else {
            alert("Max 10 tasks!")
        }
    }
}

function makeNewList(final) {
    const task = document.createElement("div")
    task.classList.add("task")

    const content = document.createElement("li")
    content.classList.add("content")
    content.textContent = final

    const deleteTask = document.createElement("img")
    deleteTask.classList.add("binIcon")
    deleteTask.src = "images/binIcon.jpg"
    deleteTask.addEventListener("click", function deleteTheTask(){
        task.removeChild(content)
        task.removeChild(deleteTask)
        noOfLists -= 1
    })

    task.appendChild(content)
    task.appendChild(deleteTask)
    toDoItems.appendChild(task)

}
