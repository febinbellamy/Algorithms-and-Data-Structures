function maxSubarraySum(anArr, num) {
  let maxSum = 0;
  let tempSum = 0;

  if (anArr.length < num) return null;

  for (let i = 0; i < num; i++) {
    maxSum += anArr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < anArr.length; i++) {
    tempSum += anArr[i] - anArr[i - num];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

console.log(maxSubarraySum([1, 2, 3, 4], 2));
