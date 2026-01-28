/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  if (nums.length <= 2) return nums.length;
  let duplicateCount = 2;
  for (let i = 2; i < nums.length; i++) {
    if (nums[i] !== nums[duplicateCount - 2]) {
      nums[duplicateCount] = nums[i];
      duplicateCount++;
    }
  }
  return duplicateCount;
};

// Example usage:
let nums = [1, 1, 1, 2, 2, 3];
let k = removeDuplicates(nums);
console.log(k);
