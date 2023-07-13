function checkPositive(arr) {
  // Only change code below this line
let as=arr.every(function(currentValue) {
  return currentValue > 0;
});

    return as;
  // Only change code above this line
}

let a = checkPositive([1, 2, 3, -4, 5]);
console.log(a)