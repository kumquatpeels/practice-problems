//practice 02

$(document).ready(initializeApp);

var reversed = [];
function initializeApp() {
  $('#button').on('click', sendTo);
}

function sendTo() {
  reverseArr(['zero', 'one', 'two', 'three']);
}

function reverseArr(arr) {
  for (var i = arr.length-1; i >= 0; i--) {
    reversed.push(arr[i]);
    // console.log('arr[i]:', arr[i]);
  }

  console.log(reversed);
}
