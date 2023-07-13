let arr = [1,9,9,10,1000, 2, 3, 4, 5,7, 8, 8, 7, 7];
let arr2 = [1, 2, 9, 1000, 3, 4, 5, 6, 8];
let unionArr = [...arr, ...arr2];
console.log(unionArr.sort(function (a, b) {
    return a - b;
}));

let c = [...new Set(unionArr)];
console.log(c)
