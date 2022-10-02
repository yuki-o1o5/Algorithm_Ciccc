// Question1
// Print all the odd numbers from 0 → n , where n will be dynamic inside a function
// Function printOddNumbers(n) {
// // Write logic here
// }
// ********************************************************************************************

function printOddNumbers(n) {
  for (let cnt = 0; cnt <= n; cnt++) {
    if (cnt % 2 == 1) {
      console.log(cnt);
    }
  }
}
printOddNumbers(7);

// ********************************************************************************************
// Question 2 → (ADVANCE)
// Write a function that takes an array as a parameter and calculates the sum of the numbers
// inside the array
// Let numList = [1,2,3,4,5,6]; // 1 + 2 + 3 + 4 + 5 + 6 → 21
// Function sumOfElements(array) {
// // Write your logic here, // HINT: FOR LOOP
// return
// }
// sumOfElements(numList) // 21
// ********************************************************************************************

let numList = [1, 2, 3, 4, 5, 6];
function sumOfElements(numList) {
  let total =
    numList[0] + numList[1] + numList[2] + numList[3] + numList[4] + numList[5];
  console.log(total);
  return;
}
sumOfElements(numList);

// or

let numList = [1, 2, 3, 4, 5, 6];
let total = 0;
function sumOfElements(array) {
  for (let i = 0; i < numList.length; i++) {
    total = total + numList[i];
  }
  console.log(total);
}
sumOfElements(numList);

// ********************************************************************************************
// Queston 3 → (ADVANCE)
// Write a function that takes an array as a parameter and returns the largest number inside that
// array
// Let numList = [ 20, 40, -10, 5, 40, 5, 11]; // 40
// Function largestNumber(array) {
// // Write your logic here
// // Print the largest number inside the array // 40
// }
// ********************************************************************************************

let numList1 = [20, 40, -10, 5, 40, 5, 11];
let score = numList1[0];
// console.log(score);
function largestNumber(array) {
  for (let i = 1; i < numList1.length; i++) {
    if (score < numList1[i]) {
      score = numList1[i];
      console.log(numList1[i]);
    }
  }
}
largestNumber(numList1);
