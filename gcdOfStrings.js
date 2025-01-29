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

// console.log(gcdOfStrings("ABCABC", "ABC")) // Output: "ABC"
// console.log(gcdOfStrings("ABABAB", "ABAB")) // Output: "AB"
// console.log(gcdOfStrings("LEET", "CODE")) // Output: ""

// Solution 2

const gcdOfStrings2 = (str1, str2) => {
  if (str1 + str2 !== str2 + str1) {
    return "";
  }

  const gcd = (len1, len2) => {
    while (len2 !== 0) {
      [len1, len2] = [len2, len1 % len2]
    }
    return len1;
  }

  return str1.slice(0, gcd(str1.length, str2.length))
}

// Example usage:
console.log(gcdOfStrings2("ABCABC", "ABC")) // Output: "ABC"
console.log(gcdOfStrings2("ABABAB", "ABAB")) // Output: "AB"
console.log(gcdOfStrings2("LEET", "CODE")) // Output: ""
