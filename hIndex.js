/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {
  if (!citations.length) return 0;

  citations.sort((a, b) => a - b);
  let h = 0;

  for (let i = 0; i < citations.length; i++) {
    const papers = citations.length - i;

    if (citations[i] >= papers) {
      h = papers;
      break;
    }
  }

  return h;
};

// Example usage:
console.log(hIndex([3, 0, 6, 1, 5])); // 3
console.log(hIndex([1, 3, 1])); // 1
