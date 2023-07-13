const arr = [1, 5, 4, 8, 7, 9, 10];

 const arr1=arr.filter((item)=>{
     return item % 2 == 0;
 })
console.log(arr1);

 const arr2=arr.filter((item) => {
   return  item > 4;
 })
console.log(arr2)

 const arr3=arr.filter(function odd(x) {
    return x % 2 != 0
    
 });

console.log(arr3);
function equal(x) {
    return x >= 5;
}
const arr4 = arr.filter(equal);
console.log(arr4)
    