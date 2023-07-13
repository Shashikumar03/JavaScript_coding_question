function mutation(arr) {
    const n = arr.length;
    for (let i = 1; i < n; i++) {
        for (let j = 0; j < arr[i].length; j++){
            let ch = arr[i].charAt(j).toLowerCase();
            if (!arr[i - 1].toLowerCase().includes(ch)) {
                //console.log(ch);
                return false;
            }
        }
    }
    return true;;
}

let a = mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]);
console.log(a)