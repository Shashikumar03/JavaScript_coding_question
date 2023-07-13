let a = -5.6;
let b = Number.isInteger(a);
console.log(b)
const squareList = arr => {
  // Only change code below this line
    let intArr = arr.filter((x) => Number.isInteger(x) && x > 0);
   return intArr.map((x) => x * x);
    
  // Only change code above this line
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);