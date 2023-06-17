/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {   
    let min = Number.MAX_SAFE_INTEGER;
  let secondMin = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] <= min) min = nums[i]
    else if (nums[i] <= secondMin) secondMin = nums[i]
    else return true
  }
  return false
}

console.log(increasingTriplet([1, 2, 3, 4, 5]))
console.log(increasingTriplet([5, 4, 3, 2, 1]))
console.log(increasingTriplet([2, 1, 5, 0, 4, 6]))
console.log(increasingTriplet([20, 100, 10, 12, 5, 13]))
