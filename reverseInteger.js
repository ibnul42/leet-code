/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  const sign = Math.sign(x);
  let num = Array.from(Math.abs(x).toString());
  let res = 0;
  for (let i = num.length - 1; i >= 0; i--) {
    res = res * 10 + Number(num[i]);
  }
  if (res < -2147483648 || res > 2147483647) return 0;

  return res * sign;
};

console.log(reverse(-123));
