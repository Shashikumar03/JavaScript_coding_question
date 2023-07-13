/*
destroyer([1, 2, 3, 1, 2, 3], 2, 3) should return [1, 1].
destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3) should return [1, 5, 1].
destroyer([3, 5, 1, 2, 2], 2, 3, 5) should return [1].
destroyer([2, 3, 2, 3], 2, 3) should return [].
destroyer(["tree", "hamburger", 53], "tree", 53) should return ["hamburger"].
*/

function destroyer(arr) {
    var args = Array.prototype.slice.call(arguments);
  
    args.splice(0, 1);
    //console.log(args)
  return arr.filter(item => args.indexOf(item)==-1);
  
}



let a = destroyer([1, 2, 3, 1, 2, 3], 2, 3);




console.log(a)