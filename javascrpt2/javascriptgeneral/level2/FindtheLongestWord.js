function findLongestWordLength(str) {
  let arr = str.split(" ");
  let max = arr.reduce((acc, curr) => {
    if (curr.length > acc) {
      acc = curr.length;
    }
    return acc;
  }, 0);
  return max;
}

let a = findLongestWordLength("The quick brown fox jumped over the lazy dog");
console.log(a);
