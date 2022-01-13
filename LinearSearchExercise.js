/* 
Coding Exercise 24: Linear Search Exercise

Write a function called linearSearch which accepts an array and a value, and returns the index at which the value exists. If the value does not exist in the array, return -1.
Don't use indexOf to implement this function!
*/

function linearSearch(anArr, num) {
  for (let i = 0; i < anArr.length; i++) {
    let currentNum = anArr[i];
    if (currentNum === num) {
      return i;
    }
  }
  return -1;
}
