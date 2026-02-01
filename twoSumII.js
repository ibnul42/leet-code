/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  const combine = new Map();

  for (let i = 0; i < numbers.length; i++) {
    const remain = target - numbers[i];

    if (combine.has(remain)) {
      return [combine.get(remain), i + 1];
    }
    combine.set(numbers[i], i + 1);
  }

  return [];
};

// Example usage:
const numbers = [2, 7, 11, 15],
  target = 9;
console.log(twoSum(numbers, target)); // [1, 2]
