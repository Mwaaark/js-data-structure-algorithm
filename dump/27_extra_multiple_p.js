function findPair(arr, num) {
  if (!arr.length) return false;

  let i = 0;

  arr.sort((a, b) => b - a);

  for (let j = 1; j < arr.length; j++) {
    let diff1 = arr[i] - arr[j];
    let diff2 = arr[j] - arr[i];
    if (diff1 === num || diff2 === num) {
      return true;
    } else {
      i++;
    }
  }

  return false;
}

findPair([6, 1, 4, 10, 2, 4], 2);
