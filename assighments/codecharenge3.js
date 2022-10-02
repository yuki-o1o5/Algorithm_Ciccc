// Write a function that takes a value n as a parameter, and prints the following pattern

/*
 *
 **
 ***
 ****
 *****
 ******
 */

function printStars(n) {
  let item = '';
  for (let i = 0; i <= n ; i++) {
      item = item + "*";
      console.log(item);
  }
}

printStars(5);

// item       i      console.log
// ""         0      "*"
// "*"        1      "**"
//            2      "***"
//            3      "****"
//            4      "*****"

// Question 1

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

// function printStars() {
//   let item = "";
//   for (let i = 0; i < 5; i++) {
//     item = item + "*";
//     console.log(item);
//   }
//   let item2 = "";
//   for (let n = 0; n < 4; n--) {
//     item2 = "****" - item2;
//     console.log(item2);
//   }
// }
// printStars();

// Question 2

// Write a function that takes a value n as a parameter, and prints the following pattern

/*

*****
****
***
**
*


*/


// function printStars2(n) {
//   let item = '';
//   for (let i = n; i <= n ; i--) {
//       item = item - "*";
//       console.log(item);
//   }
// }

// printStars(5);


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

// Question 3

// Write a function that takes a value n as a parameter, and prints the following pattern

/*
      *
    *   *
  *       *
*  * * * *  *  



*/
