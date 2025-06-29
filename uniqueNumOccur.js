/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
  const map1 = new Map();
  const map2 = new Map();

  for (let val of arr) {
    let count = map1.get(val) || 0;
    map1.set(val, count + 1);
  }

  for (let val of map1) {
    map2.set(val[1]);
  }
  return map2.size === map1.size;
};

// Example usage
const arr = [1, 2, 2, 1, 1, 3];
const arr2 = [1, 2];
console.log(uniqueOccurrences(arr));
console.log(uniqueOccurrences(arr2));
