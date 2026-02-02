/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let left = 0,
    sum = 0,
    minLength = Infinity;

  for (let right = 0; right < nums.length; right++) {
    sum += nums[right];
    while (sum >= target) {
      sum -= nums[left];
      minLength = Math.min(minLength, right - left + 1);
      left++;
    }
  }

  return minLength !== Infinity ? minLength : 0;
};

// Example Usage:
console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3])); // Output: 2
console.log(minSubArrayLen(4, [1, 4, 4])); // Output: 1
console.log(minSubArrayLen(11, [1, 1, 1, 1, 1, 1, 1, 1])); // Output: 1
console.log(minSubArrayLen(11, [1, 2, 3, 4, 5])); // Output: 1
