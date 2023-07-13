function truncateString(str, num) {
    let a= str.substring(0, num + 1);
  if(a.length!=str.length){
    let s="....";
    return a+s;
  }
  return a;
}

let a = truncateString("A-tisket a-tasket A green and yellow basket", 42);
 console.log(a);