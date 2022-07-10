function reverse(aString) {
  if (aString.length <= 1) return aString;
  return reverse(aString.slice(1)) + aString[0];
}

console.log(reverse("hellothere"));

function isPalindrome(aString) {
  if (aString.length === 1) return true;
  if (aString.length === 2) return aString[0] === aString[1];
  if (aString[0] === aString.slice(-1))
    return isPalindrome(aString.slice(1, -1));
  return false;
}

console.log(isPalindrome("pop"));

function someRecursive(anArr, callbackFunc) {
  if (anArr.length === 0) return false;
  if (callback(anArr[0])) return true;
  return someRecursive(anArr.slice(1), callbackFunc);
}

function flatten(prevArr) {
  let newArr = [];
  for (let i = 0; i < prevArr.length; i++) {
    if (Array.isArray(prevArr[i])) {
      newArr = newArr.concat(flatten(prevArr[i]));
    } else {
      newArr.push(prevArr[i]);
    }
  }
  return newArr;
}

function capitalizeWords(anArr) {
  if (anArr.length === 1) return [anArr[0].toUpperCase()];
  let i = capitalizeWords(anArr.slice(0, -1));
  res.push(anArr.slice(anArr.length - 1)[0].toUppercase());
  return i;
}

function nestedEvenSum(obj, sum = 0) {
  for (let key in obj) {
    if (typeof obj[key] === "object") {
      sum += nestedEvenSum(obj[key]);
    } else if (typeof obj[key] === "number" && obj[key] % 2 === 0) {
      sum += obj[key];
    }
  }
  return sum;
}

function capitalizeFirst(anArr) {
  if (anArr.length === 1) {
    return [anArr[0][0].toUpperCase() + anArr[0].substr(1)];
  }
  const res = capitalizeFirst(anArr.slice(0, -1));
  const string =
    anArr.slice(anArr.length - 1)[0][0].toUpperCase() +
    anArr.slice(anArr.length - 1)[0].substr(1);
  res.push(string);
  return res;
}

function stringifyNumbers(obj) {
  let newObj = {};
  for (let key in obj) {
    if (typeof obj[key] === "number") {
      newObj[key] = obj[key].toString();
    } else if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
      newObj[key] = stringifyNumbers(obj[key]);
    } else {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}

function collectStrings(obj) {
  let stringsArr = [];
  for (let key in obj) {
    if (typeof obj[key] === "string") {
      stringsArr.push(obj[key]);
    } else if (typeof obj[key] === "object") {
      stringsArr = stringsArr.concat(collectStrings(obj[key]));
    }
  }

  return stringsArr;
}
