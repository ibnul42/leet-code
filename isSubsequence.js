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
