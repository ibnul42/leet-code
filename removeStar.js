/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function (s) {
  let res = "";
  for (let char of s) {
    if (char === "*") {
      res = res.substring(0, res.length - 1);
    } else {
      res += char;
    }
  }
  return res;
};

// Example usage
const s = "erase****";
console.log(removeStars(s));
