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
