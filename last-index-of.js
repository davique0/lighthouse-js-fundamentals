//create a function that given an array and a value returns the last index of the value in the array, if the value isn't in the array it should return -1.
function lastIndexOf(testArr, num){
  let lastIndex = -1
  testArr.forEach((x, i) => x === num ? lastIndex = i : 0);
  return lastIndex;
}