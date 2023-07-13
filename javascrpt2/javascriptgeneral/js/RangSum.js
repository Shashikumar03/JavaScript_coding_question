function sumAll(arr) {
  let max=arr[0];
  let min=arr[1];
    if (max < min) {
    let temp = 0;
    temp=max
    max=min;
    min=temp;
  }
    let sum = 0;
    console.log(max+" "+min);
  for(let i=min;i<=max;i++){
    sum+=i;
  }
  return sum;
}

let a = sumAll([1, 4]);
 console.log(a)