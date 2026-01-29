/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let buy = prices[0],
    profit = 0;
  for (let i = 0; i < prices.length; i++) {
    buy = Math.min(buy, prices[i]);
    profit = Math.max(profit, prices[i] - buy);
  }

  return profit;
};

// Example usage
const prices = [7, 6, 4, 3, 1];
console.log(maxProfit(prices));
