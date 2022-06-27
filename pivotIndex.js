/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  let targetIndex;
  if (nums.length === 1) {
    return 0;
  }
  if (nums.length > 1) {
    for (let i = 0; i < nums.length; i++) {
      let leftSum = 0,
        rightSum = 0;
      // sum of left
      for (let j = 0; j < i; j++) {
        leftSum += nums[j];
      }
      // sum of right
      for (let j = i + 1; j < nums.length; j++) {
        rightSum += nums[j];
      }
      if (leftSum === rightSum) return i;
    }
  }
  return -1;
};

console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
console.log(pivotIndex([1, 2, 3]));
console.log(pivotIndex([2, 1, -1]));
