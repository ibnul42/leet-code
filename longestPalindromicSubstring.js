/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  if (!s || s.length < 2) return s;

  let start = 0;
  let maxLen = 1;

  const expand = (left, right) => {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    return [left + 1, right - 1]; // return the valid palindrome bounds
  };

  for (let i = 0; i < s.length; i++) {
    // Odd length palindrome
    let [l1, r1] = expand(i, i);

    if (r1 - l1 + 1 > maxLen) {
      start = l1;
      maxLen = r1 - l1 + 1;
    }

    // Even length palindrome
    let [l2, r2] = expand(i, i + 1);

    if (r2 - l2 + 1 > maxLen) {
      start = l2;
      maxLen = r2 - l2 + 1;
    }
  }

  return s.substring(start, start + maxLen);
};

console.log(longestPalindrome("babad")); // "bab" or "aba"
console.log(longestPalindrome("cbbd"));  // "bb"
