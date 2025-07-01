/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let max = Math.max(...nums);
  let curMin = 1,
    curMax = 1;
  for (let num of nums) {
    const tempMax = curMax * num;
    const tempMin = curMin * num;

    curMax = Math.max(tempMax, tempMin, num);
    curMin = Math.min(tempMax, tempMin, num);
    max = Math.max(max, curMax);
  }

  return max;
};

// Example usage
const nums = [1, 0, -5, 2, 3, -8, -9];
console.log(maxProduct(nums));
