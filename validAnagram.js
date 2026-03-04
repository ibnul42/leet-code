/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  const map = new Map();
  for (const i of s) {
    map.set(i, (map.get(i) || 0) + 1);
  }
  for (const i of t) {
    if (!map.has(i) || map.get(i) === 0) return false;
    map.set(i, map.get(i) - 1);
  }

  return true;
};

// Example usage:
console.log(isAnagram("anagram", "nagaram")); // Output: true
console.log(isAnagram("rat", "car")); // Output: false
