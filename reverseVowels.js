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

// Example usage
// console.log(reverseVowels("hello")) //holle
// console.log(reverseVowels("leetcode")) //leotcede


// Solution 2 (optimized)
var reverseVowels2 = function (s) {
  const options = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'])
  let left = 0, right = s.length - 1
  const arr = s.split('')
  while (left < right) {
    while (left < right && !options.has(arr[left])) {
      left++
    }
    while (left < right && !options.has(arr[right])) {
      right--
    }
    [arr[left], arr[right]] = [arr[right], arr[left]]
    left++
    right--
  }

  return arr.join('')
}

// Example usage
console.log(reverseVowels2("hello")) //holle
console.log(reverseVowels2("leetcode")) //leotcede