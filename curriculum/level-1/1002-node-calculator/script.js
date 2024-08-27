const readlineSync = require("readline-sync")

var num1 = parseInt(readlineSync.question('Please enter your first number '))

var num2 = parseInt(readlineSync.question('Please enter your second number '))

var operation = readlineSync.question('Please enter the operation you want to perform: add, sub, mul, div: ')

function performOperation() {
var result 

   if (operation === 'sub') {
    result = num1 - num2
} else if (operation === 'mul') {
    result = num1 * num2
} else if (operation === 'div'){ 
    result = num1 / num2
} else if (operation === 'add') {
    result = num1 + num2
    }
console.log("The result is: " + result + "") 

}
performOperation()



