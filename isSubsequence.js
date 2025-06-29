/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  let sList = s.split("");
  for (let i = 0; i < t.length; i++) {
    if (sList[0] === t[i]) {
      sList.shift();
    }
  }
  return !sList.length;
};

console.log(isSubsequence("abc", "ahbgdc"));
console.log(isSubsequence("axc", "ahbgdc"));
console.log(isSubsequence("acb", "ahbgdc"));
console.log(isSubsequence("aaaaaa", "bbaaaa"));


// Solution 2
var isSubsequence2 = function (s, t) {
  let i = 0,
    j = 0;
  while (i < s.length && j < t.length) {
    if (s[i] === t[j]) i++;
    j++;
  }
  return i === s.length;
};

// Example usage
const s = "aaaaaa", t = "bbaaaa";
console.log(isSubsequence2(s, t));

