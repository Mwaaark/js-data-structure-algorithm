function findAllDuplicates(arr) {
  // add whatever parameters you deem necessary - good luck!

  let frequencyCounter = {};
  let res = [];

  for (let val of arr) {
    frequencyCounter[val] = (frequencyCounter[val] || 0) + 1;
  }

  for (let key in frequencyCounter) {
    if (frequencyCounter[key] >= 2) {
      res.push(+key);
    }
  }

  return res;
}

findAllDuplicates([4, 3, 2, 7, 8, 2, 3, 1]);
