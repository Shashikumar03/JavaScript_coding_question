function titleCase(str) {
    let s = str.split(" ");
    let st = '';
    for (let i = 0; i < s.length; i++) {
        st += s[i].charAt(0).toUpperCase()+s[i].substring(1).toLowerCase()+" ";
        
        

    }

  return st.trim();
}

let a = titleCase("I'm a litTle tea pot");
 console.log(a);