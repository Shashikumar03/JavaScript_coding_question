function repeatStringNumTimes(str, num) {
    if (num < 0) {
        return -1;
    }
    else {
        let a = "";
        while (num-- > 0) {
            a += str;
        }
        return a;
    }
    
}

let a = repeatStringNumTimes("abc", 3);
 console.log(a);