let arr1 = [1, 1, 2, 2, 3, 3];
let arr2 = [1, 2, 3, 4];
let arr3 = [...new Set(arr1), ...new Set(arr2)];
console.log(arr3);
let map = new Map();

for (let i = 0; i < arr3.length; i++) {
  if (!map.has(arr3[i])) {
    map.set(arr3[i], 1);
  } else {
    let value = map.get(arr3[i]);
    map.set(arr3[i], value + 1);
  }
}
console.log(map);
// find the ,most occurance of number
console.log("sabse jada frequmcy");
arr3.push(
  1,
  2,
  1,
  4,
  1,
  2,
  3,
  3,
  3,
  3,
  9,
  10,
  10,
  10,
  10,
  10,
  10,
  10,
  10,
  12,
  10
);
console.log("arr3>" + arr3);
let map1 = new Map();
for (let i = 0; i < arr3.length; i++) {
  if (!map1.has(arr3[i])) {
    map1.set(arr3[i], 1);
  } else {
    let value = map1.get(arr3[i]);
    map1.set(arr3[i], value + 1);
  }
}
console.log(map1);
let maxF = 0;
let name1 = "";
map1.forEach((value, key) => {
  if (value > maxF) {
    maxF = value;
    name1 = key;
  }
});
console.log("maximum frequncy of " + name1 + " is " + maxF);

// finding frequncy without using Map Class;

console.log("finding frequncy without using Map Class");
console.log(arr3);
const count = {};

for (let i = 0; i < arr3.length; i++) {
  if (!count[arr3[i]]) {
    count[arr3[i]] = 1;
  }
  else {
      let pre = count[arr3[i]];
      count[arr3[i]] = pre + 1;
    }
}
console.log(count);
