/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function (obj) {
    for (i in obj) return false;

    return true;
};

// Example usage:
console.log(isEmpty({ x: 5, y: 42 }))
console.log(isEmpty({}))
console.log(isEmpty([null, false, 0]))