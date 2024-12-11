/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function (arr, fn) {
    const newArray = [];

    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {
            newArray.push(arr[i]);
        }
    }
    return newArray;
};

// Example usage:
const arr = [0, 10, 20, 30];
const fn = function greaterThan10(n) {
    return n > 10;
};

const newArray = filter(arr, fn); // [20, 30]
console.log(newArray);