function mergeArr(arrOne, arrTwo) {
  let sorted = [];
  let i = 0;
  let j = 0;

  while (i < arrOne.length && j < arrTwo.length) {
    if (arrOne[i] < arrTwo[j]) {
      sorted.push(arrOne[i]);
      i++;
    } else {
      sorted.push(arrTwo[j]);
      j++;
    }
  }
  while (i < arrOne.length) {
    sorted.push(arrOne[i]);
    i++;
  }
  while (j < arrTwo.length) {
    sorted.push(arrTwo[j]);
    j++;
  }
  return sorted;
}

console.log(mergeArr([1, 3, 88], [0, 2, 5]));

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let midPoint = Math.floor(arr.length / 2);
  let leftPointer = mergeSort(arr.slice(0, midPoint));
  let rightPointer = mergeSort(arr.slice(midPoint));
  return mergeArr(leftPointer, rightPointer);
}

console.log(mergeSort([19, 14, 46, 31]));
