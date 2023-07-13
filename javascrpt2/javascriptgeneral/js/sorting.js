const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
  // Only change code below this line
    let arr1 = arr.slice(0);
    console.log(arr1);
   let a= arr1.sort(function(a,b){
      return (a-b);
    });
    return a;
  // Only change code above this line
}

let a = nonMutatingSort(globalArray);
console.log(a)