/*Define a function called concat
The function should, when given two arrays, concatenate the arrays together.*/

function concat(arr1, arr2) {
  arr2.forEach((x,i) => arr1.push(arr2[i]));
  return arr1;
}
