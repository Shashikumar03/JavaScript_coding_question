function largestOfFour(arr) {
  let m = 0;
  for (let i = 0; i < arr.length; i++) {
    let array = [...arr[i]];
    //console.log(array);
    let max = Math.max(...array);
    if (max > m) {
      m = max;
    }
  }
  return m;
}
function flat(arr) {
  let num = arr.flat(Infinity);
    let max = Math.max(...num);
    return max;
}

let a = largestOfFour([
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1],
]);

let b = flat([
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1],
]);
console.log(b);
