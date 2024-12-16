/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
var cancellable = function (fn, args, t) {
    fn(...args);
    const timeout = setInterval(() => fn(...args), t);
    const cancelFn = () => clearTimeout(timeout);

    return cancelFn;
};

const fn = (x) => x * 2
const args = [4]
const t = 35

const cancel = cancellable(fn, args, t)