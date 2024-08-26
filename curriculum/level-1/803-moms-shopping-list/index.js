const form = document.addItem

form.addEventListener("submit", function(event) {
    event.preventDefault()

    const itemName = form.title.value

    const newItem = document.createElement("li")

    const itemDiv = document.createElement("div")
    itemDiv.textContent = itemName

    const editButton = document.createElement("button")
    editButton.textContent = "edit"

    const deleteButton = document.createElement("button")
    deleteButton.textContent = "X"

    document.getElementById("list").appendChild(newItem)
    newItem.appendChild(itemDiv)
    newItem.appendChild(editButton)
    newItem.appendChild(deleteButton)

    deleteButton.addEventListener("click", function() {
        newItem.remove()
    })
    
    form.title.value = ""

    // EDIT FUNCTION -Extra
    editButton.addEventListener("click", function() {
        if (!itemDiv.isContentEditable) {
            itemDiv.contentEditable = "true";
            editButton.textContent = "Save";
            itemDiv.focus(); 
        } else {
            itemDiv.contentEditable = "false";
            editButton.textContent = "edit";
        }
    })
})