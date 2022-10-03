// Question 1 Write a function to find the index of the value in the 2D Array

let numList = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

function findIndex(array, target) {
  // Write the logic
  for (let line = 0; line < array.length; line++) {
    for (let index = 0; index < array.length; index++) {
      if (array[line][index] == target) return [line, index];
    }
  }
}
findIndex(numList, 8);

// Example - findINdex(numList, 5) // [1, 1]

// Question 2 Write a function that takes a string, and capitalizes every first letter of the word

let str = "hello world";

function capitlize(str) {
  // return's first capitalized
}

capitlize(str); // Hello World

// HINT - .split method on a string
// .join method on the array

let str = "hello world";

function capitlize(str) {
  let a = str.split(" ");
  // const resultMap = numbers.map(element => {
  const resultMap = a.map((element) => {
    let b = element.split("");

    // console.log(b);
    let c = b[0].toUpperCase();
    // console.log(c);
    let item = c;
    for (let i = 1; i < b.length; i++) {
      let d = b[i];
      item = item + d;
    }
    // console.log(item);
    return item;
  });
  return resultMap.join(" ");
}

capitlize(str); // Hello World

// Question 3 , Write a binary function using recursion (VERY ADVANCE)

// Question 4 , Write a function to find the sum of numbers in an array but using recursion

const numbers = [1, 2, 3, 4, 5, 6, 7];

function sumOfnumbers(array, k) {
  if (k == 0) {
    return array[0]; //stopping point
  }
  return array[k] + sumOfnumbers(array, k - 1);
}
sumOfnumbers(numbers, numbers.length - 1);

s = (array, k) => (k == 0 ? array[0] : array[k] + s(array, k - 1));

// sumAll (numbers) {
//   return sumOfnumbers(numbers, numbers.length - 1);
// }

// sumAll(numbers)
