function sumFibs(num) {
  let arr = [1, 1];
  let fib = 0;
  let sum = 2;
  if (num == 1) {
    return 1;
  }
  if (num <= 3) {
    return 2;
  }
  while (arr[arr.length - 2] + arr[arr.length - 1] <= num) {
    fib = arr[arr.length - 2] + arr[arr.length - 1];
    arr.push(fib);
    if (fib % 2 != 0) {
      sum += fib;
    }
  }
  console.log(arr);
  return sum;
}

let a = sumFibs(1000);
console.log(a);
