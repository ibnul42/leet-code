/**
 * @param {Function} fn
 * @return {Function}
 */

function once(fn) {
    let called = false;
    let result;

    return function (...args) {
        if (!called) {
            called = true;
            result = fn(...args);
            return result;
        }
        return undefined;
    };
}

// Example usage:
const fn1 = (a, b, c) => a + b + c;
const onceFn1 = once(fn1);

console.log(onceFn1(1, 2, 3)); // 6
console.log(onceFn1(2, 3, 6)); // undefined
