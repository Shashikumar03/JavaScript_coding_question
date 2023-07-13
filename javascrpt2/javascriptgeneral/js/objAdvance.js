function whatIsInAName(collection, source) {
  
    
     const keyVals = Object.entries(source)
  
  return collection
    .filter(obj => keyVals
      .every(([key, val]) => obj[key] === val)
    )

}

let a=whatIsInAName([
                { first: "Romeo", last: "Montague" },
                { first: "Mercutio", last: null },
                { first: "Tybalt", last: "Capulet" }
              ],
    { last: "Capulet" });
let b = whatIsInAName([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 });
let c = whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 }); //should return [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }].




// console.log(a);
// console.log(b)
console.log(c)