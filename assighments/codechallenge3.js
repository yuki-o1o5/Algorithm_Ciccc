// Write a function that takes a value n as a parameter, and prints the following pattern

/*
 *
 **
 ***
 ****
 *****
 ******
 */

// function printStars(n) {
//   let item = "";
//   for (let i = 0; i <= n; i++) {
//     item = item + "*";
//     console.log(item);
//   }
// }
// printStars(5);

// item       i      console.log
// ""         0      "*"
// "*"        1      "**"
//            2      "***"
//            3      "****"
//            4      "*****"

function printStar1(n) {
  for (let line = 0; line < n; line++) {
    let word = "*";
    for (let char = 0; char < line; char++) {
      word += "*";
    }
    console.log(word);
  }
}
printStar1(5);

// Question 1

// Write a function that takes a value n as a parameter, and prints the following pattern

/*

*****
****
***
**
*

*/

function printStar2(n) {
  for (let line = 0; line < n; line++) {
    let word = "";
    // console.log("*");
    for (let char = 0; char < n - line; char++) {
      word += "*";
    }
    console.log(word);
  }
}
printStar2(5);

// Question 2

// Write a function that takes a value n as a parameter, and prints the following pattern

/*

*
**
***
****
*****
****
***
**
*

*/

function printStar3(n) {
  for (let line = 0; line < n; line++) {
    let word1 = "*";
    for (let char = 0; char < line; char++) {
      word1 += "*";
    }
    console.log(word1);
  }
  for (let line = 0; line < n; line++) {
    let word2 = "";
    for (let char = 1; char < n - line; char++) {
      word2 += "*";
    }
    console.log(word2);
  }
}
printStar3(5);

// Question 3

// Write a function that takes a value n as a parameter, and prints the following pattern

/*

      *
    *   *
  *       *
*  * * * *  *  

*/

function printStar4(n) {
  for (let line = 0; line < n; line++) {
    let word = "";
    // console.log("*");
    for (let char = 0; char < n - line; char++) {
      word += " ";
    }
    word = word + "*";
    console.log(word);
  }
}

printStar4(3);
