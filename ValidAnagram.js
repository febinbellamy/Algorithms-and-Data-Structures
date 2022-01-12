/* 
Coding Exercise 1: Frequency Counter - validAnagram

Given two strings, write a function to determine if the second string is an anagram of the first. 
An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

Note: You may assume the string contains only lowercase alphabets.

Time Complexity - O(n)     
*/

function validAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  const obj = {};
  for (let i = 0; i < str1.length; i++) {
    let char = str1[i];
    obj[char] ? (obj[char] += 1) : (obj[char] = 1);
  }
  for (let i = 0; i < str2.length; i++) {
    let char = str2[i];
    if (!obj[char]) {
      return false;
    } else {
      obj[char] -= 1;
    }
  }
  return true;
}
