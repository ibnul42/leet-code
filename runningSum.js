/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  let arr = [];
  for (let i = 0; i < nums.length; i++) {
    if (i > 0) {
      let newNum = nums[0];
      for (let j = 1; j <= i; j++) {
        newNum += nums[j];
      }
      arr[i] = newNum;
    } else {
      arr[i] = nums[i];
    }
  }
  return arr;
};

console.log(runningSum([1, 2, 3, 4]));
