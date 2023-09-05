function missingNumber(array, n) {
  const length = array.length;
  const totalSum = ((length + 1) * (length + 2)) / 2;

  let sum1 = array.reduce((acc, curr) => {
    return acc + curr;
  });
  console.log(totalSum);
  console.log(sum1);
  return totalSum - sum1;
}

let a = missingNumber([1, 2, 3, 5], 5);
console.log(a);
