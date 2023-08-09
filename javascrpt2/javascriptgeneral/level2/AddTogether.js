let a = typeof ('2');
//console.log(a);


function addTogether() {
    const args = [...arguments];
    let b = (typeof (args[0]));
    let c = typeof (args[1]);
    //console.log(c);

    if (c === 'undefined') {
        return "function"
    }
    if (b != 'number') {
        return "kkk";
    }
    else if (c != 'number') {
        return undefined;
    }
    else {
        return args[0] + args[1];
    }
  //return args;
}

let b=addTogether(2);
console.log(b);