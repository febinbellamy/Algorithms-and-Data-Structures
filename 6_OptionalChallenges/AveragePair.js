/*
Coding Exercise 5: Multiple Points - averagePair 

Write a function called averagePair.  Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. 
There may be more than one pair that matches the average target.

Bonus Constraints:
Time: O(N)
Space: 0(1)
*/

function averagePair(arrOfNums, targetAvg) {
  let left = 0;
  let right = arrOfNums.length - 1;
  while (left < right) {
    let avg = (arrOfNums[left] + arrOfNums[right]) / 2;
    if (avg === targetAvg) {
      return true;
    } else if (avg < targetAvg) {
      left++;
    } else {
      right--;
    }
  }
  return false;
}
