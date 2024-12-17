/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */

const timeLimit = (fn, t) => {
    return async function (...args) {
        const mainFn = fn(...args)
        const timer = new Promise((_, reject) => {
            setTimeout(() => {
                reject('Time Limit Exceeded');
            }, t)
        })

        return Promise.race([mainFn, timer]);
    };
}

// Example usage:
const fn1 = async (n) => {
    await new Promise((res) => setTimeout(res, 100));
    return n * n;
};
const inputs1 = [5];
const t1 = 500;

const limited1 = timeLimit(fn1, t1);
const start1 = performance.now();

limited1(...inputs1)
    .then((res) => {
        console.log({
            resolved: res,
            time: Math.floor(performance.now() - start1),
        });
    })
    .catch((err) => {
        console.log({
            rejected: err,
            time: Math.floor(performance.now() - start1),
        })
    })