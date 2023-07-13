function translatePigLatin(str) {
    let s = "";
    if(!str.includes('a') && !str.includes('e') && !str.includes('i') && !str.includes('o') && !str.includes('u')){
    return str;
  }
   for(let i=0;i<str.length;i++){
     let ch=str.charAt(0);
     if(ch=='a'||ch=='e'||ch=='i'|| ch=='o'||ch=='u'){
       return str.concat('way');
     }
     else{
       let ch=str.charAt(i);
       
       if(ch!='a'&& ch!='e'&& ch!='i'&& ch!='o'&&ch!='u'){
         s+=ch;
       }else{
           return str.substring(i).concat(s + 'ay');
       }
     }
   }
}

let a = translatePigLatin("consonant");
console.log(a);
let str = 'shahi';
const regExp = /[a-z]/

let b = str.charAt(2);
if (regExp.test(b)) {
    console.log('jjj')
}