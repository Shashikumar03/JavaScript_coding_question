
function frankenSplice(arr1, arr2, n) {
    const arr = [];
    for (let i = 0; i < arr2.length; i++){
        arr.push(arr2[i]);
    }
    for (let i = 0; i < arr1.length; i++){
        arr.splice(n++, 0, arr1[i]);
    }
  return arr2;
}

let a = frankenSplice([1, 2, 3], [4, 5, 6], 1);
console.log(a)