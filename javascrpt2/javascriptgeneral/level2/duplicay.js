let arr1 = [1, 1, 2, 2, 3, 3];
let arr2 = [1, 2, 3, 4];
let arr3 = [...new Set(arr1), ...new Set(arr2)];
//console.log(arr3);
let map = new Map();

for (let i = 0; i < arr1.length; i++) {
  if (!map.has(arr3[i])) {
    map.set(arr3[i], 1);
  } else {
    let value = map.get(arr3[i]);
    map.set(arr3[i], value + 1);
  }
}
console.log(map);
