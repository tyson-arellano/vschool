

   function changeTextContent(elementId, newText) {
    var element = document.getElementById(elementId)//This fuction grabs the specified element 
    if (element) {                                  //This checks the state of the element
        element.textContent = newText               //This changes the text to the new text
    } 
}
//changeTextContent("heading", 'Welcome to my website!')
//changeTextContent("paragraph", 'This is a sample paragraph.')

document.getElementById("changeButton").addEventListener("click", () => { //Event listener on "click" arrow fuction calls changeTextContent
    changeTextContent("heading", "This is the new heading text!") 
})