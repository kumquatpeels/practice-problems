

function countOccurences(arr, word){
//compare word with each index of arr
//store in answerArr
  var answerArr = [];
  for (i=0; i<arr.length; i++) {
    if (word === arr[i]) {
      answerArr.push(arr[i]);
    }
  }
  return answerArr.length;
}

function wordLengths(wordArr){
  var answersArr = [];
  for (var i=0; i<wordArr.length; i++) {
    answersArr.push(wordArr[i].length)
  }
  return answersArr;
}

function getMinMaxMean(arr){
  var min = Math.min(...arr);
  var max = Math.max(...arr);
  var sum = 0;
  for (var i=0; i<arr.length; i++) {
    sum += parseInt(arr[i],10);
  }
  var avg = sum / arr.length;
  var answer = {};
  answer.min = min;
  answer.max = max;
  answer.mean = avg;
  return answer;
}

function findMode(arr){
//loop through array
  //compare first number to rest of numbers
    //store number of matches in answerObj
  //compare second number to rest of numbers
    //store  number of matches in answerObj = {0:??, 1:??,2:??}
//after loop is complete, and all numbers are compared
//take largest value of answerObj, and pull the corresponding
  //property, which should be the index of the original arr
  var answersObj = {};
  var answersArr = [];
  var match=0;
  for (var i=0; i<arr.length-1; i++) {
    for (var j=i+1; j<arr.length; j++) {
      if (arr[i] == arr[j]) {
        match++;
        answersObj[i] = match;
      }
    }
  }
  for (i in answersObj) {
    answersArr.push(i);
  }
  var max = Math.max(...answersArr);
  return arr[max];
}
