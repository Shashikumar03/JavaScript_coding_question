let arr = [1,9,9,10,1000, 2, 3, 4, 5,7, 8, 8, 7, 7];
let arr2 = [1, 2, 9,,1000,3, 4, 5, 6, 8];

let a = [...new Set(arr)];
//console.log(a);

let b=arr.filter(item => {
   return (arr2.includes(item)) ? item : null;
       // return item;
    
})
console.log((b).sort(function (a, b) {
    return a - b;
}));

 // remove duplicacy
let c = [... new Set(b)];
console.log(c);