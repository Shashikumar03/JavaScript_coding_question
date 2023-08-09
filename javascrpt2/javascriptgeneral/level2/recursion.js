// Only change code below this line
//let countArray=[];
function countdown(n){

 if (n < 1) {
    return [];
  } else {
    

   let countArray=countdown(n - 1);
   countArray.unshift(n);
    return countArray;
}
}
let a=countdown(5);
console.log(a);
// Only change code above this line