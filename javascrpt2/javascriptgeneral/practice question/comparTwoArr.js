let arr = [1, 2, 3, 4, 5,7];
let arr2 = [1, 2, 3, 4, 5,6,8];

 let a =arr.every(item => {
    return (arr2.indexOf(item) == -1) ? false : true;
 })
console.log(a)