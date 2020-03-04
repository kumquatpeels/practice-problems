// practice 05
// ## FizzBuz

// Build a function that prints the numbers from 1 to 100.
// But for multiples of three print “Fizz” instead of the number and for the
// multiples of five print “Buzz”.For numbers which are multiples of both three
// and five print “FizzBuzz”.

// - Write a function that takes no parameters
//   - The function should output the numbers 1 through 100,
//     following the rules from above


$(document).ready(initializeApp);

var stringArr = [];
var numArr = [];
var booleanArr = [];

function initializeApp() {
  $('#button').on('click', fizzBuzz);
}

function fizzBuzz() {
  for (var i = 1; i <= 100; i++) {
    // debugger;
    // console.log(i);

    /*

    */
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i%5 === 0 ) {
      console.log("Buzz");
    } else if (i % 3 === 0) {
      var three = i;
      i = "Fizz";
      console.log(i);
      i = three++;
    }
    console.log(i);
  }
}
