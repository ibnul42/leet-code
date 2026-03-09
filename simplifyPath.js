/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  const stack = [];
  const arr = path.split("/");
  for (const item of arr) {
    if (item === "" || item === ".") continue;
    if (item == "..") {
      if (stack.length) stack.pop();
    } else {
      stack.push(item);
    }
  }
  return "/" + stack.join("/");
};

// Example usage:
console.log(simplifyPath("/home/")); // "/home"
console.log(simplifyPath("/../")); // "/"
console.log(simplifyPath("/home//foo/")); // "/home/foo"
