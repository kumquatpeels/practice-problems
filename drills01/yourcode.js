
function sumArray(array) {
  var sum = 0;
  for (var i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

function fitWithinVal(arr,num) {
  var sum = 0;
  var answerArr = [];

  for (var i = 0; i < arr.length; i++) {
    var finalSum = sum += arr[i];

    if (finalSum > num) {
      return answerArr;
    }

    answerArr.push(arr[i]);
  }
  return answerArr;
}

function getAllNamesShorterThan(nameArr, nameLength) {
//take length of each index of array and compare to nameLength
//if short than push to answersArr, return answersArr
var answersArr = [];
  for (var i = 0; i < nameArr.length; i++) {
    if (nameArr[i].length < nameLength) {
      answersArr.push(nameArr[i]);
    }
  }
  return answersArr;
}

function makeLabel(arr){
// var greeting = arr.greeting;
// var firstName = arr.givenName;
// var lastName = arr.familyName;
// var stNum = arr['home address'].streetNumber;
// var stName = arr['home address'].streetName;
// var city = arr['home address'].city;
// var state = arr['home address'].state;
// var zip = arr['home address'].zip;
// var label = greeting + " " + firstName + " " + lastName + '\n' + stNum + " " + stName + '\n' + city + ", " + state + " " +  zip;
// return label;
return(arr.greeting + " " + arr.givenName + " " + arr.familyName + '\n' + arr['home address'].streetNumber + " " + arr['home address'].streetName + '\n' + arr['home address'].city + ", " + arr['home address'].state + " " + arr['home address'].zip)
}
