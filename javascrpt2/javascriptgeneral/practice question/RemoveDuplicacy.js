function uniteUnique(arr) {

   // const args =Array.prototype.slice.call(arguments)
   const args=[...arguments];
    //let a=[];

    // for(var i = 0; i < args.length; i++) {
    // var cube = args[i];
    // for(var j = 0; j < cube.length; j++) {
    //     a.push(cube[j]);
    // }
//}
    let a=args.flat();
   return [... new Set(a)];

  return a;
}

 let a= uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
 console.log(a);