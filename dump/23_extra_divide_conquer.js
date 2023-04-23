// function countZeros(array){
//   // add whatever parameters you deem necessary - good luck!!!
//   let newArray = array;
//   let leftIndex = 0;
//   let rightIndex = array.length;
//   let middlePoint = 0;
//   while(leftIndex < rightIndex) {

//       middlePoint = Math.floor((leftIndex+rightIndex) / 2);

//       if(newArray[middlePoint] === 1) {
//           leftIndex = middlePoint+1;
//       } else {
//           rightIndex = middlePoint;
//       }

//   }

//   return array.length-leftIndex;

// }

function countZeroes(nums) {
  // add whatever parameters you deem necessary - good luck!!!
  let leftIndex = 0;
  let rightIndex = nums.length - 1;
  let middleIndex;

  while (leftIndex <= rightIndex) {
    middleIndex = Math.floor((leftIndex + rightIndex) / 2);

    if (nums[middleIndex] === 1) {
      leftIndex = middleIndex + 1;
    } else {
      rightIndex = middleIndex - 1;
    }
  }

  return nums.length - leftIndex;
}

// countZeros([1,1,1,1,0,0]) // 2
countZeroes([1, 0, 0, 0, 0]); // 4
