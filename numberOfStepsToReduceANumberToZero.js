/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function (num) {
  let res = 0;
  while (num != 0) {
    if (num % 2 == 0) {
      num /= 2;
      res += 1;
    } else {
      num -= 1;
      res += 1;
    }
  }
  return res;
};

console.log(numberOfSteps(8));
