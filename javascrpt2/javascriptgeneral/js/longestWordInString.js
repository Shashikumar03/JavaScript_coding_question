function findLongestWordLength(str) {
    const arr = str.split(" ");
    let max = -1;
    for (let i = 0; i < arr.length; i++){
        if (max < arr[i].length) {
            max = arr[i].length;
        }
    }
  return max;
}

let a = findLongestWordLength("Theddddddd quick brown fox jumped over the lazy dog");
console.log(a)