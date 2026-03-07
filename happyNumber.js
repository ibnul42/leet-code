/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  const seen = new Map();
  while (n !== 1 && !seen.has(n)) {
    seen.set(n);
    let sum = 0;
    while (n > 0) {
      const digit = n % 10;
      sum += digit * digit;
      n = Math.floor(n / 10);
    }
    n = sum;
  }
  return n === 1;
};

// Example usages:
console.log(isHappy(19)); //true
console.log(isHappy(4)); //true
