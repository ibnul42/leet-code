/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (s.length === 0) return 0;
  if (s.length === 1) return 1;
  let length = 0,
    longest = "";

  for (let right = 0; right < s.length; right++) {
    while (longest.includes(s[right])) {
      longest = longest.slice(1);
    }
    longest += s[right];
    length = Math.max(length, longest.length);
  }
  return length;
};

// Example Usage:
console.log(lengthOfLongestSubstring(" ")); //1
console.log(lengthOfLongestSubstring("bbbbb")); //1
console.log(lengthOfLongestSubstring("pwwkew")); //3
