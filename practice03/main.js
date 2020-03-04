//practice 03
//function parameter array
//return array of each different data type

$(document).ready(initializeApp);

var stringArr = [];
var numArr = [];
var booleanArr = [];

function initializeApp() {
  $('#button').on('click', sendTo);
}

function sendTo() {
  differentType(['hello', 34, true, false, 'goodbye', 56, 12, '25', true]);
}

function differentType(arr) {
  for (var i = 0; i < arr.length; i++) {
    var index = arr[i];
    var type = typeof(index);
    switch (type) {
      case 'string':
        stringArr.push(index);
        break;
      case 'number':
        numArr.push(index);
        break;
      case 'boolean':
        booleanArr.push(index);
        break;
    }
  }
  console.log('stringArr:', stringArr);
  console.log('numArr:', numArr);
  console.log('booleanArr:', booleanArr);
}
