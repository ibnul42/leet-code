/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
    if (nums.length <= 1) return true;
    let jumpIndex = 0;

    for (let i = 0; i < nums.length-1; i++) {
        jumpIndex = Math.max(jumpIndex, nums[i]);
        if (jumpIndex < 1) return false;
        jumpIndex--;
    }

    return true;
};

// Example usage:
const nums = [2, 3, 1, 1, 4];
console.log(canJump(nums)); // Output: true
