/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function (str1, str2) {
  if (str1 + str2 !== str2 + str1) {
    return ""
  }

  const gcd = (a, b) => {
    if (b === 0) {
      return a
    }
    return gcd(b, a % b)
  }

  const length = gcd(str1.length, str2.length)
  return str1.substring(0, length)
}

console.log(gcdOfStrings("ABCABC", "")) // Output: "ABC"
console.log(gcdOfStrings("ABABAB", "ABAB")) // Output: "AB"
console.log(gcdOfStrings("LEET", "CODE")) // Output: ""
