/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  for (let i = 0; i < flowerbed.length; i++) {
    if (
      (i === 0 || flowerbed[i - 1] === 0) &&
      (i === flowerbed.length - 1 || flowerbed[i + 1] === 0) &&
      flowerbed[i] === 0
    ) {
      if (n === 0) return true
      flowerbed[i] = 1
      n--
    }
  }
  return n === 0
}

console.log(canPlaceFlowers([1, 0, 0, 0, 1], 1))
console.log(canPlaceFlowers([1, 0, 0, 0, 1], 2))
console.log(canPlaceFlowers([1, 0, 0, 0, 0, 0, 1], 2))
console.log(canPlaceFlowers([0, 0, 1, 0, 1], 1))
