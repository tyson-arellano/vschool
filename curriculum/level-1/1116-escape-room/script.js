const readline = require("readline-sync");

var hasKey = false;
var isGameOver = false;

function getKey(){
        console.log("You found the key!\n");
        hasKey = true;
    }
    
while (!isGameOver) {
    const options = ['Open the door', 'Find the key', 'Check the hole']
    // const choice = readline.question("You find yourself alone in an empty room with a door and a hole in the wall.\nWhat would you like to do?\n(a) Find the key\n(b) Open the door\n(c) Put your hand in the hole\n(Type 'a', 'b', or 'c'): ").toLowerCase();
    const choice = readline.keyInSelect(options, 'What would you like to do?')
    
    console.log(choice)
    switch (choice) {
        case 1:
            // if (hasKey) {
            //     console.log("You already have the key.\n");
            // } else {
            //     console.log("You found the key!\n");
            //     hasKey = true;
            // }
            hasKey ? console.log("You already have the key.\n") : getKey()
            break;
        case 0:
            if (hasKey) {
                console.log("You used the key to open the door and escaped the room! You win!\n");
                isGameOver = true;
            } else {
                console.log("The door is locked. You need to find the key first.\n");
            }
            break;
        case 2:
            console.log("You put your hand in the hole and you suddenly vanished into the void. You died!\n");
            isGameOver = true;
            break;
        default:
            console.log("Invalid choice. Please choose 'a', 'b', or 'c'.\n");
    }
}

console.log("Game Over. Thanks for playing!");