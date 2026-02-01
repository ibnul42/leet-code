/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const plainText = s.toLocaleLowerCase().replace(/[^a-z0-9]/g, '')
    
    return plainText === plainText.split('').reverse().join('')
};

// Example usage:
const s = "A man, a plan, a canal: Panama";
console.log(isPalindrome(s)) // true