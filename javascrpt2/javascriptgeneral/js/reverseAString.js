console.log("jjj")

function reverseString(str) {
  let arr="";
  const n=str.length;
  for(let i=n-1;i>=0;i--){
    arr+=str.charAt(i);
  }


    return arr;
}

const a=reverseString("hello");
console.log(a)