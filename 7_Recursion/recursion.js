function collectOddValues(anArr) {
  let result = [];

  function helperFunc(helperInput) {
    if (helperInput.length === 0) {
      return;
    }

    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }
    helperFunc(helperInput.slice(1));
  }
  helperFunc(anArr);
  return result;
}

console.log(collectOddValues([1, 3, 4, 11, 13]));

function pureRecursionCollectOddVals(anArr) {
  let result = [];
  if (anArr.length === 0) {
    return result;
  }
  if (anArr[0] % 2) {
    result.push(anArr[0]);
  }

  result = result.concat(pureRecursionCollectOddVals(anArr.slice(1)));
  return result;
}

console.log(pureRecursionCollectOddVals([1, 3, 5, 2, 11, 12, 14, 15]));
