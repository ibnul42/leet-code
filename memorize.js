/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    const cache = new Map();
    let callCount = 0;

    const generateKey = (args) => JSON.stringify(args);

    const memoizedFn = (...args) => {
        const key = generateKey(args);
        if (cache.has(key)) {
            return cache.get(key);
        }
        const result = fn(...args);
        cache.set(key, result);
        callCount++;
        return result;
    };

    memoizedFn.getCallCount = () => callCount;

    return memoizedFn;
}

// Example Usage:

// Functions
const sum = (a, b) => a + b;
const fib = (n) => (n <= 1 ? 1 : fib(n - 1) + fib(n - 2));
const factorial = (n) => (n <= 1 ? 1 : n * factorial(n - 1));

// Memoized Versions
const memoizedSum = memoize(sum);
const memoizedFib = memoize(fib);
const memoizedFactorial = memoize(factorial);

// Test Cases
console.log(memoizedSum(2, 2)); // 4
console.log(memoizedSum(2, 2)); // 4 (from cache)
console.log(memoizedSum.getCallCount()); // 1