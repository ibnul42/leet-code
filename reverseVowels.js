/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  const options = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]
  let vowels = []
  let result = ""
  for (let i = s.length - 1; i >= 0; i--) {
    if (options.includes(s[i])) {
      vowels.push(s[i])
    }
  }
  for (let i = 0; i < s.length; i++) {
    if (options.includes(s[i])) {
      result += vowels.shift()
    } else {
      result += s[i]
    }
  }
  return result
}

console.log(reverseVowels("hello"))
console.log(reverseVowels("leetcode"))
