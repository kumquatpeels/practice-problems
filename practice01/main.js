$(document).ready(initializeApp);

function initializeApp(){
  $('#button').on('click', sendTo);
}

function sendTo () {
  biggerWords('hello', ['zeroasdf','one','twoasdf','three'])
}

function biggerWords(string, arr) {
  //get length of string
  //iterate through array and get length of each index
  //if the length of index is longer than length of string
  //push to array to return

  var strLength = string.length;
  var responseArr = [];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i].length > strLength) {
      responseArr.push(arr[i]);
    }
  }
  console.log(responseArr);
}
