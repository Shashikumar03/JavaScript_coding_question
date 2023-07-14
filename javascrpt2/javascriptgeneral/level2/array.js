function dropElements(arr, func) {

  let i= arr.find((item)=>{
      return func(item) == true;
  });
  let ind=arr.indexOf(i);
  if(ind===-1){
    return [];
  }
  return arr.slice(ind);
}

let a=dropElements([1,2,3], function(n) {return n> 5; });
console.log(a);