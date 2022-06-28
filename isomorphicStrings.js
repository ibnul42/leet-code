/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  if (s.length !== t.length) return false;
  let sMap = new Map();
  let tMap = new Map();

  for (i = 0; i < s.length; i++) {
    if (sMap.has(s[i]) && sMap.get(s[i]) !== t[i]) {
      return false;
    } else {
      sMap.set(s[i], t[i]);
    }
  }

  for (i = 0; i < t.length; i++) {
    if (tMap.has(t[i]) && tMap.get(t[i]) !== s[i]) {
      return false;
    } else {
      tMap.set(t[i], s[i]);
    }
  }
  return true;
};

console.log(isIsomorphic("add", "egg"));
console.log(isIsomorphic("title", "paper"));
console.log(isIsomorphic("foo", "bar"));
