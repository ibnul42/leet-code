/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  let jumpCount = 0;
  let currentIndex = 0;
  let farthest = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    farthest = Math.max(farthest, i + nums[i]);

    if (i === currentIndex) {
      jumpCount++;
      currentIndex = farthest;
    }
  }

  return jumpCount;
};

// Example usage:
console.log(jump([2, 3, 1, 1, 4])); // Output: 2
console.log(jump([1, 2])); // Output: 1
console.log(jump([1, 1, 1, 1])); // Output: 3
console.log(jump([1, 2, 1, 1, 1])); // Output: 3
