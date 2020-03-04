// practice 06
// ## Numeric Spirals

// Build a function that takes one parameter and prints out the Fibonacci
// sequence based on the input parameter.

// - Write a function that takes one parameter
//   - Parameter 1 - A number
//     - The function should output the Fibonacci sequence to the number of
//       spaces set by parameter 1 starting from zero.
// - Example:
// - `fibSequence(12);`
//   - Output - `0 1 1 2 3 5 8 13 21 34 55 89`
//   - If you are unfamiliar with the Fibonacci sequence
//     < a href = "https://www.google.com" target = "_blank" > Click Here</a >
$(document).ready(initializeApp);

var fibonacciArr = [0];

function initializeApp() {
  $('#button').on('click', sendTo);
}

function sendTo() {
  fibonacci(18);
}

function fibonacci(num) {
  var first = 0;
  var second = 1;
  var sum;

  for (var i = 0; i < num; i++) {
    // fibonacciArr.push(first);
    // fibonacciArr.push(second);
    sum = first + second;
    fibonacciArr.push(sum);
    first = second;
    second = sum;
  }

  console.log(fibonacciArr);



}
