let s = "beabeefeab";
let arr = [...s];
let arr1 = [...new Set(arr)];
let no = arr1.length / 2;
let str = s;


for (let i = 0; i < arr1.length; i++){
   let a= str.replaceAll(arr1[i], '');
    
    for (let j = i + 1; j < arr1.length; j++){
        let b = a.replaceAll(arr1[j], '');
          console.log(b);
    }
}
console.log(arr1);