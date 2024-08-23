
var button = document.getElementById("button")

button.addEventListener("mouseover", blue) 
    function blue (){
    button.style.backgroundColor = "blue"      
};
button.addEventListener("mousedown", red)
    function red(){
    button.style.backgroundColor = "red"
};
button.addEventListener("mouseup", yellow)
    function yellow(){
    button.style.backgroundColor = "yellow"
};
button.addEventListener("dblclick", green)
    function green(){
    button.style.backgroundColor = "green"
};
window.addEventListener("scroll", orange)
    function orange() {
    document.body.style.backgroundColor = "orange";
};
window.addEventListener("keydown", handleKeyDown);
function handleKeyDown(event) {
    switch (event.key.toLowerCase()) {
        case 'b': 
            blue();
            break;
        case 'r': 
            red();
            break;
        case 'y': 
            yellow();
            break;
        case 'g': 
            green();
            break;
        case 'o': 
            orange();
            break;
    }}