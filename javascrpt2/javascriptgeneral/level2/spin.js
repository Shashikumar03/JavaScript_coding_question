function spinalCase(str) {
    return str.split(/(?=[A-Z])/).r // positive lookahead to keep the capital letters

        .join("-").toLowerCase();
}

let a = spinalCase('This Is Spina Tap');
console.log(a);