//BRONZE
const header = document.createElement("h1")
    header.textContent = "Tyson Arellano"
    header.style.color = "blue"
    header.style.textAlign = "center"
    document.body.insertBefore(header, document.body.firstChild)

const messageA = document.getElementById("msg a")
    messageA.textContent = "I have something nice to talk about" 

const messageB = document.getElementById("msg b")
    messageB.textContent = "I would love to talk"

//SILVER
const clearButton = document.getElementById('clear-button')

const messageC = document.getElementById("msg c")

const messageD = document.getElementById("msg d")

clearButton.addEventListener("click", remove)
    function remove(){
        messageA.textContent = ""
        messageB.textContent = ""
        messageC.textContent = ""
        messageD.textContent = ""
    }

//GOLD
const themeDropDown = document.getElementById("theme-drop-down")

themeDropDown.addEventListener("change", theme)
function theme(){
    const selectedTheme = themeDropDown.value
    if (selectedTheme === "theme-one"){
        document.body.style.backgroundColor = "blue"
        document.bod.style.color = "brown"
    }
    else {
        document.body.style.backgroundColor = "red"
        document.body.style.color = "black"
    }

}