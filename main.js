const input = document.querySelector(".listInput")
input.addEventListener("keypress", getInput)
const toDoItems = document.querySelector(".toDoItems")

function getInput(e) {
    if (e.key === "Enter") {
        const final = input.value
        console.log(final)
        makeNewList(final)
    }
}

function makeNewList(final) {
    const content = document.createElement("li")
    content.classList.add("content")
    content.textContent = final
    toDoItems.appendChild(content)
}