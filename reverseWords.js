/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    s = s.trim().split(' ')
    let myWords = []
    for(let i = s.length; i >= 0; i--) {
        // if(s[i].length > 0) words += s[i]
        if(s[i]?.length > 0) myWords.push(s[i])
    }
    return myWords.join(' ')
};

console.log(reverseWords("  hello world  "))
console.log(reverseWords("the sky is blue"))
console.log(reverseWords("a good   example"))