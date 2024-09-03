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
        itemDiv.style.display = "none"
        const editInput = document.createElement("input")
        editInput.value = itemDiv.textContent
        const saveEdits = document.createElement("button")
        saveEdits.textContent = "Save"
        newItem.appendChild(editInput)
        newItem.appendChild(saveEdits)
        
        saveEdits.addEventListener("click", ()=> {
            
            itemDiv.textContent = editInput.value
            itemDiv.style.display = "block"
            editInput.remove()
            saveEdits.remove()
        })
        // if (!itemDiv.isContentEditable) {
        //     itemDiv.contentEditable = "true";
        //     editButton.textContent = "Save";
        //     itemDiv.focus(); 
        // } else {
        //     itemDiv.contentEditable = "false";
        //     editButton.textContent = "edit";
        // }
    })
})