/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  const counts = {};
  for (item of nums) {
    counts[item] = (counts[item] || 0) + 1;

    if (counts[item] > Math.floor(nums.length / 2)) return item;
  }

  return counts;
};

//  Example usage:
let nums = [3, 2, 3];
console.log(majorityElement(nums));
