function diffArray(arr1, arr2) {
   let a=arr1.concat(arr2)
   return  a.filter(item => !arr1.includes(item) || !arr2.includes(item));
}

const a = diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
 console.log(a)