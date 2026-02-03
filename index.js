function maxSubarraySum(nums, k) {
  let windowSum = 0;
  let maxSum = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    windowSum += nums[i];
    console.log(windowSum)

    if (i >= k - 1) {
      maxSum = Math.max(maxSum, windowSum);
      windowSum -= nums[i - (k - 1)];
    }
  }

//   return maxSum;
}

// Example usage:
const nums = [2, 1, 5, 1, 3, 2],
  k = 3;
console.log(maxSubarraySum(nums, k)); // 9