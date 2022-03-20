// 1. Two Sum

var twoSum = function (nums, target) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let num1 = nums[i];
    let num2 = target - num1;
    if (map.has(num2)) {
      return [i, map.get(num2)];
    }
    map.set(num1, i);
    console.log(map);
  }
};

// function twoSum(arr, result) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i] + arr[i + 1] === result) {
//       console.log(arr[i], arr[i + 1]);
//     }
//     i++;
//   }
// }
// twoSum([2, 11, 10, 20], 31);
console.log(twoSum([2, 7, 11], 9));
console.log(twoSum([2, 3, 4, 5], 8));
