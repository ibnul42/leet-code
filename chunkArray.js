/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    const result = [];
    while (arr.length > 0){
        result.push(arr.splice(0, size));
    }
    return result;
};

//  Example usage
const inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const chunkSize = 3;

console.log(chunk(inputArray, chunkSize)); // Output: [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]]