function quickSort(anArr, left = 0, right = anArr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(anArr, left, right);
    quickSort(anArr, left, pivotIndex - 1);
    quickSort(anArr, pivotIndex + 1, right);
  }
  return anArr;
}

function pivot(anArr, startIndex = 0, endIndex = anArr.length + 1) {
  let pivot = anArr[startIndex];
  let pivotIdx = startIndex;

  function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  for (let i = startIndex + 1; i < anArr.length; i++) {
    if (pivot > anArr[i]) {
      pivotIdx++;
      swap(anArr, pivotIdx, i);
    }
  }

  swap(anArr, startIndex, pivotIdx);
  return pivotIdx;
}

console.log(quickSort([2, 5, 2, 4, 6, 2, 3]));
