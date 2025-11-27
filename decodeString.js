/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  let res = "";
  let count = 1,
    str = "",
    store = false;
  for (let char of s) {
    if (Number(char) > 0) {
      count = char;
    } else if (char === "[") {
      store = true;
    } else if (char === "]") {
      while (count > 0) {
        res += str;
        count--;
      }
      count = 1;
      str = "";
      store = false;
    } else if ((store = true)) {
      str += char;
    } else {
      res += char;
    }
  }
  return res;
};

// Example usage
const s = "3[a2[c]]";
console.log(decodeString(s));
