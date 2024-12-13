/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */
var argumentsLength = function (...args) {
    let length = 0;
    for (let i = 0; i < args.length; i++) {
        length++;
    }

    return length;
};

// Example

const args = [{}, null, "3"]
console.log(argumentsLength(...args)); // Output: 3