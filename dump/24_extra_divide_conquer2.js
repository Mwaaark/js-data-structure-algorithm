function sortedFrequency(arr, num) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    if (arr[left] < num) left++;
    if (arr[right] > num) right--;
    if (arr[left] === num && arr[right] === num) return right - left + 1;
  }

  return -1;
}

// sortedFrequency([1,1,2,2,2,2,3],2) // 4
// sortedFrequency([1,1,2,2,2,2,3],3) // 1
sortedFrequency([1, 1, 2, 2, 2, 2, 3], 1); // 2
// sortedFrequency([1,1,2,2,2,2,3],4) // -1
