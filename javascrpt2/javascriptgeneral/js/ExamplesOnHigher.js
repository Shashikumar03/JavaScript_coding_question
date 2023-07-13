const user = [
    {
        firstName: "shashi",
        lastName: "kumar",
        age:"22"
    },
      {
        firstName: "amit",
        lastName: "kumar",
        age:"25"
    },
        {
        firstName: "lalu",
        lastName: "yadav",
        age:"50"
        },
           {
        firstName: "dipu",
        lastName: "kumar",
        age:"22"
    }
]

let a=user.map((x)=> {
    return x.firstName + " " + x.lastName;
})
console.log(a);

const list = [];
for (let i = 0; i < user.length; i++) {
    const obj = user[i];
    list.push( obj.firstName + " " + obj.lastName);
}
console.log(list);


let abc=user.reduce(function (acc, curr) {

    if (acc[curr.age]) {
        acc[curr.age] = acc[curr.age] + 1;
    }
    else {
        acc[curr.age] = 1;
    }
     //console.log(acc[curr.age])

    return acc;
    
}, {})
console.log(abc);

let abcd = user.filter((x) => x.age < 30).map((x) => x.firstName);

console.log(abcd);
let ac = user.filter((x) => x.age > 30);// give list of object ;
console.log(ac)