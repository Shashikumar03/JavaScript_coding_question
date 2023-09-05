function check(arr1, arr2, N) {
  // code here
  if (arr1.length != arr2.length) {
    return 0;
  }
  //  let arr1= A.sort((a,b)=>{
  //         return a-b;
  //     })
  //   let arr2= B.sort((a,b)=>{
  //         return a-b;
  //     });

  let map1 = new Map();
  let map2 = new Map();

  for (let i = 0; i < arr1.length; i++) {
    if (!map1.has(arr1[i])) {
      map1.set(arr1[i], 1);
    } else {
      let count = map1.get(arr1[i]);
      map1.set(arr1[i], count + 1);
    }
  }

  for (let i = 0; i < arr2.length; i++) {
    if (!map2.has(arr2[i])) {
      map2.set(arr2[i], 1);
    } else {
      let count = map2.get(arr2[i]);
      map2.set(arr2[i], count + 1);
    }
  }
  console.log(map1);
  console.log(map2);

  for (const [key, value] of map1) {
    // console.log(!map2.has(key) + " " + key);
    if (!map2.has(key)) {
      return 0;
    } else {
      if (map2.get(key) != value) {
        return 0;
      }
    }
  }
  console.log(a + " aaa");
  return 1;
}

let arr1 = [8, 9, 7, 5, 3, 1];
// 8 9 7 5 3 1
// 5 4 2 5 1 7
let arr2 = [5, 4, 2, 5, 1, 7];
let a = check(arr1, arr2, 6);
console.log(a);
