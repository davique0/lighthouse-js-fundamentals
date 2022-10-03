/*The function should, when given two sorted arrays containing numbers, returns a sorted array of the numbers from both lists.*/
function merge(arr1, arr2) {
  arr1 = arr1.concat(arr2);
  const sortArr = (a, b) => a - b;
  arr1.sort(sortArr);
  return arr1
}