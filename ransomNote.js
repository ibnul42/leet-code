/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  if (magazine.length < ransomNote.length) return false;

  const map = {};
  for (char of magazine) {
    map[char] = (map[char] || 0) + 1;
  }
  for (char of ransomNote) {
    if (!map[char]) return false;
    map[char]--;
  }

  return true;
};

// Example usage:
console.log(canConstruct("a", "b")); // false
console.log(canConstruct("aa", "aab")); // true
