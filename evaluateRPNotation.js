/**
 * @param {string[]} tokens
 * @return {number}
 */

const calculate = (first, second, operator) => {
  switch (operator) {
    case "+":
      return first + second;
    case "-":
      return first - second;
    case "*":
      return first * second;
    case "/":
      return Math.trunc(first / second);
    default:
      return first + second;
  }
};

var evalRPN = function (tokens) {
  if (tokens.length === 0) return 0;
  const stack = [];
  for (let i = 0; i < tokens.length; i++) {
    if (["+", "-", "*", "/"].includes(tokens[i])) {
      const operator = tokens[i];
      const second = stack.pop();
      const first = stack.pop();
      const result = calculate(first, second, operator);
      stack.push(result);
    } else {
      stack.push(parseInt(tokens[i]));
    }
  }
  return stack.pop();
};

// Example usage:
console.log(evalRPN(["2", "1", "+", "3", "*"])); // 9
console.log(evalRPN(["4", "13", "5", "/", "+"])); // 6
