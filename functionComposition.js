/**
 * @param {Function[]} functions
 * @return {Function}
 */

// with reduce
var composeWithReduce = (functions) => {
    return function (x) {
        return functions.reduceRight((acc, fn) => fn(acc), x);
    }
}

// without reduce
var composeWithoutReduce = (functions) => {
    return function (x) {
        let result = x;
        for (let i = functions.length - 1; i >= 0; i--) {
            result = functions[i](result);
        }
        return result;
    };
}

// Example
const functions = [
    x => x + 1,
    x => x * x,
    x => 2 * x
];
const composedFunction = composeWithoutReduce(functions);
console.log(composedFunction(4)); // Output: 65
