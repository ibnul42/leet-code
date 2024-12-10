/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function (n) {
    return function () {
        let result = n;
        n = n + 1;
        return result;
    };
};

const counter = createCounter(10)
console.log(counter())
console.log(counter())
