let arr = [1, 2, 3, 4, 5];
let arr2 = [7, 8, 9, 4];
let a = arr.concat(arr2);
a.sort(function (a, b) {
    return a - b;
 })
console.log(a);