const readline = require("readline-sync");

let hasKey = false;
let isGameOver = false;
while (!isGameOver) {

    const choice = readline.question("You find yourself alone in an empty room with a door and a hole in the wall.\nWhat would you like to do?\n(a) Find the key\n(b) Open the door\n(c) Put your hand in the hole\n(Type 'a', 'b', or 'c'): ").toLowerCase();

    switch (choice) {
        case "a":
            if (hasKey) {
                console.log("You already have the key. Try opening the door.\n");
            } else {
                console.log("You found the key! You can now try to open the door.\n");
                hasKey = true;
            }
            break;
        case "b":
            if (hasKey) {
                console.log("Congratulations! You used the key to open the door and escaped the room!\n");
                isGameOver = true;
            } else {
                console.log("The door is locked. You need to find the key first.\n");
            }
            break;
        case "c":
            console.log("Oh no! You put your hand in the hole and something bit you. You died!\n");
            isGameOver = true;
            break;
        default:
            console.log("Invalid choice. Please choose 'a', 'b', or 'c'.\n");
    }
}

console.log("Game Over. Thank you for playing!");