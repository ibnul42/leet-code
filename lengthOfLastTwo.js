/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  const str = s.split(" ");
  let lastWord = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i].length > 0) {
      lastWord = str[i];
    }
  }
  return lastWord.length;
};
