/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
  const maxCandies = Math.max(...candies)
  let arr = []
  for (let i = 0; i < candies.length; i++) {
    arr.push(candies[i] + extraCandies >= maxCandies)
  }
  return arr
}

// console.log(kidsWithCandies([2, 3, 5, 1, 3], 3)) // [true,true,true,false,true]
// console.log(kidsWithCandies([12, 1, 12], 10)) // [true,false,true]
// console.log(kidsWithCandies([4, 2, 1, 1, 2], 1)) // [true,false,false,false,false]

// Solution 2
var kidsWithCandies2 = function (candies, extraCandies) {
  const maxCandies = Math.max(...candies)
  for (let i = 0; i < candies.length; i++) {
    candies[i] = extraCandies + candies[i] >= maxCandies
  }

  return candies
}

// Example usage:
console.log(kidsWithCandies2([2, 3, 5, 1, 3], 3)) // [true,true,true,false,true]
console.log(kidsWithCandies2([12, 1, 12], 10)) // [true,false,true]
console.log(kidsWithCandies2([4, 2, 1, 1, 2], 1)) // [true,false,false,false,false]