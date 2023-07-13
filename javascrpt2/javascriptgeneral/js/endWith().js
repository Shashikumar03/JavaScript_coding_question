function confirmEnding(str, target) {
    let n = str.length;
    const arr = str.split(" ");
    if (arr.length === 1) {
        let n = str.length - 1;
            if (str.charAt(n) === target) {
              return true;
            }
          else {
               return false;
             }
    }
    else {
        let len = arr.length;
        const s = arr[len - 1];
        if (s.includes(target)) {
            return true;
        }
        return false;
    }
    

}

const a = confirmEnding("Bastian is fffffboyffff", "boy");
console.log(a)