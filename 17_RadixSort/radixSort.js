function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num) {
  let counter = 0;
  if (num === 0) return 1;
  while (num > 0) {
    num = Math.floor(num / 10);
    counter++;
  }
  return counter;
}

function mostDigits(nums) {
  let maxDigits = 0;
  for (let num of nums) {
    if (digitCount(num) > maxDigits) {
      maxDigits = digitCount(num);
    }
  }
  return maxDigits;
}

function radixSort(nums) {
  let maxDigitCounter = mostDigits(nums);
  for (let i = 0; i < maxDigitCounter; i++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (let j = 0; j < nums.length; j++) {
      let digit = getDigit(nums[j], i);
      digitBuckets[digit].push(nums[j]);
    }
    nums = [].concat(...digitBuckets);
  }
  return nums;
}

console.log(radixSort([23, 345, 5467, 12, 2345, 9852]));
