// 9. Palindrome Number

const isPalindrome = (x) => {
  let num = Math.abs(x);
  let reverse = 0;

  while (num != 0) {
    reverse = reverse * 10 + (num % 10);
    num = parseInt(num / 10);
  }
  return reverse === x;
};

console.log(isPalindrome(123432));
