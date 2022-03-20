// 26. Remove Duplicates from Sorted Array

var removeDuplicates = (nums) => {
  let count = 0;
  for (var i = 1; i < nums.length; i++) {
    if (nums[count] != nums[i]) {
      nums[++count] = nums[i];
    }
  }

  return count + 1;
};

console.log(removeDuplicates([1, 1, 2, 2, 3]));
