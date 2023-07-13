//let n = 5;
function fact(n) {
    if (n == 0) {
        return 1;
    }
    return n * fact(n - 1);
}
let b= fact(5)
console.log(b)