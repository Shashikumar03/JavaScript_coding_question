function getIndexToIns(arr, num) {

    arr.sort(function (a, b) { return a - b });
    for (let i of arr) {
        console.log(i);
    }

    for (let i = 0; i < arr.length; i++){
     // console.log(arr[i]);
      if (arr[i] > num) {
               //console.log("jj")
             return i;
           }
  }
  return 0;
}

let a = getIndexToIns([100,1,3,40, 60], 50);
 console.log(a)