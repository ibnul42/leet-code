/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {
  const res = [asteroids[0]];
  console.log(res)
  for (let i = 1; i < asteroids.length; i++) {
    const last = asteroids[i-1]
    const curr = asteroids[i]
    let rotation = false;
    
    while(last<0<curr || curr<0<last){
        const win = Math.max(Math.abs())
        console.log(last,curr)
    }
  }
};

// Example usage
const asteroids = [10, -2, -5];
console.log(asteroidCollision(asteroids));
