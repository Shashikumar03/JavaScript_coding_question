let arr = [1, 2, 10, -1, 100, 3, 4, 5];
arr.sort(function (a, b) {
    return a - b;
}
);
console.log(arr)
console.log(arr[arr.length-2]);
let max = Math.max(...arr);
console.log(max);
let a=arr.reduce((acc, item) => {
    return (item > acc && item<max) ? item : acc;
}, 0)
console.log(a)