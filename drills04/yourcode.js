

function changeElements(){
  var numberWordsArr = document.getElementsByClassName('numConvert');
  console.log(numberWordsArr);
  var arrayLength = numberWordsArr.length;
  for (var i=0; i<arrayLength; i++) {
  var wordDiv = numberWordsArr[i];
  var wordNum = numberWordsArr[i].innerHTML;
  console.log('wordDiv:', wordDiv);
  console.log('wordNum:', wordNum);

    // switch (wordNum) {
    //   case 'one': wordDiv.innerHTML('1'); break;
    //   case 'two': wordDiv.innerHTML('2'); break;
    //   case 'three': wordDiv.innerHTML('3'); break;
    //   case 'four': wordDiv.innerHTML('4'); break;
    //   case 'five': wordDiv.innerHTML('5'); break;
    //   case 'six': wordDiv.innerHTML('6'); break;
    //   case 'seven': wordDiv.innerHTML('7'); break;
    //   case 'eight': wordDiv.innerHTML('8'); break;
    //   case 'nine': wordDiv.innerHTML('9'); break;
    // }

  }
}
  // var i = $('.numConvert').parentElement.nodeName;
  // var i = document.getElementsByClassName('numConvert');//.node.parentElement;
    // var k = i.body.parentElement.nodeName;
    // console.log(i);
  // console.log(k);
  // while (var i<0) {
  // var fam = $('#testArea').find('.numConvert').text();

  // }


function appendTextToElement(){

}

function addClass(){
}

function removeElements(){

}
