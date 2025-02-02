/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    count = 0
    for (item of nums) {
        if (item !== 0) {
            nums[count] = item
            count++
        }
    }

    while (count < nums.length) {
        nums[count] = 0
        count++
    }

    return nums
};

// Example usage
console.log(moveZeroes([0, 1, 0, 3, 12])) // 1,3,12,0,0