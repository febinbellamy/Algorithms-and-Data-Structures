function isSubsequence(shortString, longString) {
  let i = 0;
  let j = 0;

  if (shortString.length > longString.length) return false;

  while (j < longString.length) {
    if (shortString[i] === longString[j]) i++;
    if (i === shortString.length) return true;
    j++;
  }
  return false;
}

console.log(isSubsequence('world', 'hello'));
console.log(isSubsequence('pizza', 'hello pizza'));

