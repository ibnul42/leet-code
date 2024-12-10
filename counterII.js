/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
    const val = init;
    return {
        increment: () => ++init,
        decrement: () => --init,
        reset: () => (init = val)
    }
};

const counter = createCounter(5)
console.log(counter.increment()) // 6)
console.log(counter.reset()) // 5
console.log(counter.decrement()) // 4
