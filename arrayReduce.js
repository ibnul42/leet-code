/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    let sum = init ?? 0;
    for (var i = 0; i < nums.length; i++) {
        sum = fn(sum, nums[i]);
    }
    
    return sum;
};

// Example
nums = [1, 2, 3, 4];
fn = function sum(accum, curr) { return accum + curr; };
init = 0;

console.log(reduce(nums, fn, init)); // Output: 10