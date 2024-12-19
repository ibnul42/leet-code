/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = async (functions) => {
    const results = [];
    let resolvedCount = 0;
    return new Promise((resolve, reject) => {
        functions.forEach((fn, i) => {
            fn()
                .then(result => {
                    results[i] = result;
                    resolvedCount++;
                    if (resolvedCount === functions.length) resolve(results);
                })
                .catch(err => reject(err));
        })
    })
};

// Example usage:
const promise = promiseAll(
    [() => new Promise(resolve => setTimeout(() => resolve(4), 50)),
    () => new Promise(resolve => setTimeout(() => resolve(10), 150)),
    () => new Promise(resolve => setTimeout(() => resolve(16), 100))
    ])
promise.then(console.log); // [42]
