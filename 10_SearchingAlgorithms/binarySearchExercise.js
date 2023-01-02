/*
Coding Exercise 25: Binary Search Exercise

Write a function called binarySearch which accepts a sorted array and a value and returns the index at which the value exists. Otherwise, return -1.
*/

function binarySearch(anArr, num) {
  
  let leftPoint = 0;
  let rightPoint = anArr.length - 1;

  while (leftPoint <= rightPoint) {
    let middlePoint = Math.floor((leftPoint + rightPoint) / 2);
    let currentElem = anArr[middlePoint];
    if (currentElem < num) {
      leftPoint = middlePoint + 1;
    } else if (currentElem > num) {
      rightPoint = middlePoint - 1;
    } else {
      return middlePoint;
    }
  }
  return -1;
}