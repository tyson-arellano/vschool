//Preliminaries
// for (var i = 0; i < 10; i++) {
//     console.log(i);
// }
// for (var i = 9; i >= 0; i--) {
//     console.log(i);
// }

//BRONZE

// const numbers = [];
// for (var i = 0; i < 10; i++) {
//   numbers.push(i);
// }
// console.log(numbers) 

// for (var i = 0; i <= 100; i++) {
//     if (i % 2 === 0) {
//       console.log(i);
//     }
//   }

// for (var i = 0; i <= 100; i++) {
//     if (i % 2 === 0) {
//       console.log(i)
//     }
//   }
  const fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"];
  const everyOtherFruit = [];
  
  for (var i = 0; i < fruit.length; i += 2) {
    everyOtherFruit.push(fruit[i]);
  }
  
  console.log(everyOtherFruit); 