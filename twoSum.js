var twoSum = function (nums, target) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const targetNum = target - nums[i];
    if (map.has(targetNum)) {
      return [i, map.get(targetNum)];
    }
    map.set(nums[i], i);
  }
};
console.log(twoSum([2, 7, 11], 9));
console.log(twoSum([2, 3, 4, 5], 8));
