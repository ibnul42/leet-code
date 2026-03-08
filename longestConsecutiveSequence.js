/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  const set = new Set(nums);
  let longest = 0;
  for (const num of set) {
    if (!set.has(num - 1)) {
      let currentNum = num;
      let length = 1;
      console.log(currentNum, length);
      while (set.has(currentNum + 1)) {
        currentNum++;
        length++;
      }
      longest = Math.max(longest, length);
    }
  }
  return longest;
};

// Example usage:
const nums = [100, 4, 200, 1, 3, 2];
console.log(longestConsecutive(nums)); // Output: 4 (the longest consecutive sequence is [1, 2, 3, 4])
