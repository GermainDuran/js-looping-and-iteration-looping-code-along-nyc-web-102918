// Code your solutions in this file
const names = ['Ada', 'Brendan', 'Ali'];

function printBadges(names){
  for (let i = 0; i < names.length; i++) {
    console.log(`Welcome ${names[i]}! You are employee #${i + 1}.`);
  }
  return names;
}



function tailsNeverFails() {

  let t = 0

 while (Math.random() >= 0.5) {
   t++;
 }
   return `You got ${t} tails in a row!`;
 }
// invokes Math.random() to simulate coin flips ‣
// ReferenceError: tailsNeverFails is not defined
//     at Context.it (test/indexTest.js:51:4)
// returns the number of "Tails" flips in a row ‣
// ReferenceError: tailsNeverFails is not defined
//     at Context.it (test/indexTest.js:65:4)
// loops indefinitely until a flip results in "Heads" ‣
// ReferenceError: tailsNeverFails is not defined
//     at Context.it (test/indexTest.js:89:4)
