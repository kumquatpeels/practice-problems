//practice 07
// ## Igpay Atinlay

// Build a function that will translate text into "Pig Latin" Take the first
// consonant and move it to the end of a word and then affix "ay" to the end
// of that word."

//   - Write a function that takes one parameter
//     - Parameter 1 - A string
//       - The function should output your input string translated into Pig Latin
//         - Example:
// - `var myString = "Hello my name is Stu"`
//   - `translate(myString);
// 		- Output - `"ellohay ymay ameya siay tusay"`

// #### Making it better!

// - There are several more rules to Pig Latin, try incorporating as many as you
// can into your function.
//   - There are different rules for words that start with vowel sounds or silent
//   letters for example.
//   - <a href="http://en.wikipedia.org/wiki/Pig_Latin">Here</a> is a link to an
//   explanation of all the rules.
// - Also try maintaining capitalization of words that are capitalized in your
// input string.
// 	- Example:
// 		- `"Hello there"` would be `"Ellohay heretay"`

$(document).ready(initializeApp);

var fibonacciArr = [0];

function initializeApp() {
  $('#button').on('click', sendTo);
}

function sendTo() {
  pigLatin("Hello Muddah hello Faddah Here I am at Camp Grenada Camp is very entertaining And they say we'll have some fun if it stops raining");
}

function pigLatin(string) {
  var splitString = string.split(' ');
  console.log(splitString);
  for (var i = 0 ; i < splitString.length; i++) {

  }
}
