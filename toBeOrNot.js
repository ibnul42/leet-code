/**
 * @param {any} val
 * @return {Object}
 */
var expect = function (val) {
    return {
        toBe: function (newVal) {
            if (val === newVal) return true;
            else throw new Error("Not Equal");
        },
        notToBe: function (newVal) {
            if (val !== newVal) return true;
            else throw new Error("Equal");
        }
    };
};

// Example usage:
console.log(expect(5).toBe(5)); // true
try {
    expect(5).toBe(null); // throws "Not Equal"
} catch (error) {
    console.error(error.message); // "Not Equal"
}
try {
    expect(5).notToBe(5); // throws "Equal"
} catch (error) {
    console.error(error.message); // "Equal"
}
