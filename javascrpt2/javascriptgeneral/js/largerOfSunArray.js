function largestOfFour(arr) {
    let arr1 = [];
    
    for (let i = 0; i < arr.length; i++){
        let max = -Infinity;
        for (let j = 0; j < arr[i].length; j++){
            if (max < arr[i][j]) {
                max = arr[i][j];
            }
            
        }
        arr1.push(max);
    }
  return arr1;
}

let a = largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]); 
//should return [25, 48, 21, -3].

console.log(a);