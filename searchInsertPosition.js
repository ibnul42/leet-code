/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    if(nums[0] >= target) return 0;
    if(nums[nums.length-1]<target) return nums.length;
    
    for(let i=0; i<nums.length-1; i++){
        if(nums[i] === target) return i;
        if(nums[i] < target && nums[i+1] >= target) return i+1;
    }
};

// Example usage:
console.log(searchInsert([1,3,5,6], 5)); // Output: 2
console.log(searchInsert([1,3,5,6], 2)); // Output: 1
console.log(searchInsert([1,3,5,6], 7)); // Output: 4