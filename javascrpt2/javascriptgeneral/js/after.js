let arr = [1, 20, 2, -4, -7, 8, 9];

let a = arr.map((item) => {
  return item * 0;
});
console.log(a);
let b = arr.filter((item) => {
  if (item > 5) {
    return item;
  }
});
console.log(b);

let c = arr.reduce((acc, curr) => {
  acc = acc + curr;
  return acc;
}, 0);
console.log("sum of array is " + c);

// find max and min of the array;

let max = arr.reduce((max, curr) => {
  return curr > max ? curr : max;
}, -Infinity);
console.log("max number is " + max);

let min = arr.reduce((min, curr) => {
  return curr > min ? min : curr;
}, Infinity);
console.log("min number " + min);

let arr2 = [...arr];
console.log("this is array 2nd " + arr2);
arr2.sort((a, b) => {
    return a - b;
});
console.log(arr2);

