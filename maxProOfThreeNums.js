/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function (nums) {
  const sorted = nums.sort((a, b) => a - b);

  const lowest1 = sorted[0];
  const lowest2 = sorted[1];

  const highest1 = sorted[sorted.length - 1];
  const highest2 = sorted[sorted.length - 2];
  const highest3 = sorted[sorted.length - 3];

  const max1 = lowest1 * lowest2 * highest1;
  const max2 = highest1 * highest2 * highest3;

  return Math.max(max1, max2);
};

// Example usage
const nums = [-1, -2, -3];
console.log(maximumProduct(nums));
