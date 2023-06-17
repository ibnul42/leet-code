/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const n = nums.length
  const answer = new Array(n)

  // products of the left items
  let left = 1
  for (let i = 0; i < n; i++) {
    answer[i] = left
    left *= nums[i]
  }

//   products of the right items
let right = 1
for (let i = n-1; i >= 0; i--) {
    answer[i] *= right
    right *= nums[i]
}

  return answer
}

console.log(productExceptSelf([1, 2, 3, 4]))
console.log(productExceptSelf([-1,1,0,-3,3]))
