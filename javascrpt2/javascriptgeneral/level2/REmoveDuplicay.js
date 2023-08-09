let arr = ["apple", "mango", "apple", "orange", "mango", "mango"];

// function removeDuplicates(arr) {
//   console.log(arr.indexOf(arr[5]));

//     return arr.filter((item, index) => {
      
//       // console.log(index);
//       return arr.indexOf(item) === index;
//     });
// }
// console.log(removeDuplicates(arr));

// let arr = ["apple", "mango", "apple", "orange", "mango", "mango"];

function removeDuplicates(arr) {
    const ar=([...new Set(arr)]);
    console.log(ar);
}

console.log(removeDuplicates(arr));
