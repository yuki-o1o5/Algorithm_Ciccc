// Question 1
// Write a JavaScript program that accept two integers and display the larger
// ***********************************************************

function compareIntegers(a, b) {
  let num1 = a;
  let num2 = b;
  if (a > b) {
    console.log(a + " is the larger.");
  } else if (a < b) {
    console.log(b + " is the larger.");
  } else if ((a = b)) {
    console.log(a + " and " + b + " are same integers.");
  }
}
compareIntegers(2, 23);

// ***********************************************************
// Question 2
// Using a for loop print all even numbers up to and including n. Don’t include 0.
// ***********************************************************

function evenPrint(n) {
  for (let cnt = 2; cnt <= n; cnt++) {
    if (cnt % 2 === 0) console.log(cnt);
  }
}
evenPrint(9);

// ***********************************************************
// Question 3
// Check if a string contains the letter “y”. Print “yes” if it does and “no” if it does
// not.
// ***********************************************************

function yesNo(n) {
  for (let i = 0; i < n.length; i++) {
    if (n[i] === "y") {
      console.log("Yes");
    }
  }
}
yesNo("everything");

// ***********************************************************
// Question 4
// Write a function which accepts 4 parameters (different scores of a student for subjects), and
// then calculate the average of all the score.
// If the average is more than 90 , then console grade A
// If the average is between 70 and 90 , then console grade B
// If the average is between 50-70, then console grade C
// Other wise console grade F
// For the above question you can use If else block
// So you can write
// If ( condition ) {
// }
// Else if ( other condition) {
// }
// Else if (other condition) {
// } else {
// }
// ***********************************************************

function grade(a, b, c, d) {
  let one = a;
  let two = b;
  let three = c;
  let four = d;
  let calAvarage = (a + b + c + d) / 4;
  if (90 < calAvarage) {
    console.log("grade A");
  } else if (70 < calAvarage && calAvarage <= 90) {
    console.log("grade B");
  } else if (50 < calAvarage && calAvarage <= 70) {
    console.log("grade C");
  } else {
    console.log("grade d");
  }
}
grade(67, 88, 99, 39);
