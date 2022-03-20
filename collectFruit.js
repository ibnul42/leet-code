let myStr = "1 apple 2 banana 3 pinaple";

let newStr = myStr.split(" ");

let myFruits = [];
let count = 0;

newStr.map((str) => {
  Number(str) ? (count += Number(str)) : myFruits.push(str);
});

console.log(count);
