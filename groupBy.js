/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function (fn) {
    const result = {};
    this.forEach(item => {
        const key = fn(item); 
        if (!result[key]) {
            result[key] = []; 
        }
        result[key].push(item); 
    });
    return result;
};

// Example usage:
const fn = function (item) {
    return item.toString(); 
};


console.log([1, 2, 3].groupBy(fn)); // {"1": [1], "2": [2], "3": [3]}