/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  const length = Math.max(word1.length, word2.length)
  let merge = ""
  for (let i = 0; i < length; i++) {
    if (word1[i]) merge += word1[i]
    if (word2[i]) merge += word2[i]
  }
  return merge
}

console.log(mergeAlternately("word1", "word22"))

// Solution 2: more efficient
/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  let res = ''
  for (let i = 0; i < word1.length; i++) {
      res += word1[i] + (word2[i] || '')
  }

  if (word1.length < word2.length) res += word2.slice(word1.length)

  return res
};

// Example usage
console.log(mergeAlternately('abcd', 'pq'))
