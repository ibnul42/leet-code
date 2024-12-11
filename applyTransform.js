/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function (arr, fn) {
    const newArray = [];

    for (let i = 0; i < arr.length; i++) {
        newArray.push(fn(arr[i], i));
    }
    return newArray;
};

const newArray = map([1, 2, 3], (n, i) => n + 1); // [2, 3, 4]
console.log(newArray);
