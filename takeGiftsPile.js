/**
 * @param {number[]} gifts
 * @param {number} k
 * @return {number}
 */
var pickGifts = function (gifts, k) {
    for (i = 0; i < k; i++) {
        const max = gifts.sort((a, b) => b - a)[0]
        const index = Math.floor(Math.sqrt(max));
        gifts.splice(0, 1, index);
    }

    const sum = gifts.reduce((acc, val) => acc + val);
    return sum;
};

// Example

let gifts = [25, 64, 9, 4, 100];
let k = 4;

console.log(pickGifts(gifts, k)); // Output: 29