/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  if (!prices.length) return 0;
  let profit = 0;

  let currentBuy = prices[0];
  let currentProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < prices[i - 1]) {
      currentBuy = prices[i];
      profit += currentProfit;
      currentProfit = 0;
    } else {
      currentProfit = Math.max(prices[i] - currentBuy, currentProfit);
    }
  }
  return profit + currentProfit;
};

// Example usages:
console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 7
console.log(maxProfit([1, 2, 3, 4, 5])); // 4
