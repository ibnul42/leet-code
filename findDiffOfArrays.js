/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function (nums1, nums2) {
    const arr1 = [...new Set(nums1.filter(num => !nums2.includes(num)))]
    const arr2 = [...new Set(nums2.filter(num => !nums1.includes(num)))]

    return [arr1, arr2]
};

//  Example usage
const nums1 = [1, 2, 3, 3]
const nums2 = [1, 1, 2, 2]

console.log(findDifference(nums1, nums2)); // Output: [[3], [6]]