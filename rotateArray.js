/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  while (k > 0) {
    const s = nums[nums.length-1]
    nums.splice(nums.length-1)
    nums.unshift(s)
    k--;
  }
  return nums
};

// Example usage:

const nums = [1, 2, 3, 4, 5, 6, 7], k = 3;
console.log(rotate(nums, k));
