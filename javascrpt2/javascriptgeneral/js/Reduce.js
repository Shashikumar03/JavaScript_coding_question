const arr = [1, 4, 5, 100,6, 8, 10, 15, -2,-3,11];
// find sum of the arr,
const a = arr.reduce(function (total, curr) {
    total = total + curr;
    return total;
},0);
console.log(a);

// arr.sort(function (a, b) {
//     return a - b;
// })
//console.log(arr);
//console.log(arr[arr.length-1]);

//finding max of arr

const max1 = arr.reduce(function (max, curr) {
    return curr > max ? curr : max;
}, -Infinity);
console.log(max1)

// finding minium of arr;
function min(min, curr) {
    if (min > curr) {
        min = curr;
    }
    return min
} 
const min1 = arr.reduce((min), Infinity);
console.log(min1)
