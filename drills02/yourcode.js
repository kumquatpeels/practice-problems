

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

function findMode(){

}
