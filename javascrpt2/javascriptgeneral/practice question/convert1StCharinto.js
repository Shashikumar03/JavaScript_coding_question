let str = "i am shashi kumar";

let a = str.split(" ");
console.log(a);
let b = "";
a.forEach(s => {
  b=b+  s.charAt(0).toUpperCase()+s.substring(1)+" ";
    
})
console.log(b.trim());