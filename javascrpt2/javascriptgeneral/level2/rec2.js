function rangeOfNumbers(startNum, endNum) {
  if(startNum==endNum){
      return [startNum];
  }
  else{
    let arr=rangeOfNumbers(startNum+1,endNum);
    arr.unshift(startNum);
    return arr;
  }
};

let a = rangeOfNumbers(1, 5);
console.log(a);
