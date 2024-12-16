/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
var cancellable = function (fn, args, t) {
    const timeout = setTimeout(() => fn(...args), t)
    const cancelFn = () => clearTimeout(timeout);

    return cancelFn;
};


const result = [];

const fn = (x) => x * 5;
const args = [2], t = 20, cancelTimeMs = 50;

