
 function leftRotate(arr, n, d) {
    
    
    let array = arr.filter((no, index) => {
      if (index >= d) {
        // console.log(index)
        return no;
      }
    });
     console.log(array);
     arr.filter((no, index) => {
      if (index < d) {
          array.push(no);
      }
    });

    return array;
  }
const arr = [1, 2, 3, 4, 5];
let n = arr.length;
let d = 2;
 let a=leftRotate(arr, n, d);
console.log(a);
    