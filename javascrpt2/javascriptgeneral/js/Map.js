let a = 5;
// convert into binary;
console.log(a.toString(2))

let arr = [1, 2, 3, 4, 5];

function double(x) {
    return x * 2;
}
const outputArr = arr.map(double);

 const ab=arr.map(function triple(x) {
    return x * 3;
})
const abc = arr.map(item =>
    item * 10);
const arr1 = arr.map(item => {
   return item * 5;
})
console.log(outputArr);

console.log(arr1);
console.log(arr);
console.log(ab)
console.log(arr1)
console.log(abc);