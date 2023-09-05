let arr1 = [1, 2, 1, 2, 4, 5, 2, 6, 1];
let arr2 = [1, 2, 1, 4, 3, 4, 5, 1, 2];
let arr3 = [...new Set(arr1), ...new Set(arr2)];
console.log(arr3);
let map = new Map();

for (let index = 0; index < arr3.length; index++) {
  if (map.has(arr3[index])) {
    map.set(arr3[index], map.get(arr3[index]) + 1);
  } else {
    map.set(arr3[index], 1);
  }
}
console.log(map);
map.forEach((value, key) => {
  console.log(key + " " + value);
});
