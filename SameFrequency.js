/*
Coding Exercise 3: Frequency Counter - sameFrequency

Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.
Your solution MUST have the following complexities: Time: O(N)
                
*/

function sameFrequency(num1, num2) {
  let strNum1 = String(num1);
  let strNum2 = String(num2);
  if (strNum1.length !== strNum2.length) {
    return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  for (let i = 0; i < strNum1.length; i++) {
    frequencyCounter1[strNum1[i]] = (frequencyCounter1[strNum1[i]] || 0) + 1;
  }
  for (let j = 0; j < strNum1.length; j++) {
    frequencyCounter2[strNum2[j]] = (frequencyCounter2[strNum2[j]] || 0) + 1;
  }
  for (let key in frequencyCounter1) {
    if (frequencyCounter2[key] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}
