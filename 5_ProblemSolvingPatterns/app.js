function search(anArr, num) {
  let i = 0;
  let j = anArr.length - 1;

  while (i <= j) {
    let midpoint = Math.floor((i + j) / 2);

    if (anArr[midpoint] === num) return midpoint;

    if (num > anArr[midpoint]) {
      i = midpoint + 1;
    }
    if (num < anArr[midpoint]) {
      j = midpoint - 1;
    }
  }
  return -1;
}

console.log(search([3, 5, 4, 22, 4, 1], 4));
