
function chunkArrayInGroups(arr, size) {
//     let col = size;
//     let row = arr.length / size;
//     let h = 0;
//     let arr1 = [];
//     for (var i = 0; i < row; i++) {
//     arr1[i]=[];
//     for (var j = 0; j < col; j++) {
//         arr1[i][j] = arr[h++];
//     }
// }
  //return arr1;
      let newArr = [];
  for (let i = 0; i < arr.length; i += size) {
    newArr.push(arr.slice(i, i + size));
  }
  return newArr;
}

let a = chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3);
for (let i of a) {
    console.log(i);
}