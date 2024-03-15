// singleton
// creating objects with the help of constructor

// EX :
const tinderUser = new Object()

/*--------------------------------------------------*/

const reguralUser = {
    email : "some@gmail.com",
    userName : {
        firstname : "Anurag",
        lastname : "Tarai"
    }
}

// console.log(reguralUser.userName?.firstname);// Anurag
// ? use instead of if else statement
/*------------------------------------------------------*/

const obj1 = {a:1,b:2,c:3}
const obj2 = {d:4,e:5,f:6}

// Object.assign(target,source) // return a new object
const obj3 = Object.assign({},obj1,obj2)
// console.log(obj3);// { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 }

// this syntax is going to use more 
const obj4 = {...obj1,...obj2}
// console.log(obj4);// { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 }
/* ----------------------------------------------------------------------- */

const users = [
    {
        id:1,
        email:"a@gamail.com"
    },
    {
        id:2,
        email:"b@gamail.com"
    },
    {
        id:3,
        email:"c@gamail.com"
    }
]
// console.log(users[1].id);// 2
/*----------------------------------------- */

// Object.kyes or values // store in array
const newObj = {
    a:23,
    b:34,
    c:348
}
console.log(Object.keys(newObj));// [ 'a', 'b', 'c' ]
console.log(Object.values(newObj));// [ 23, 34, 348 ]
console.log(Object.entries(newObj));// [ [ 'a', 23 ], [ 'b', 34 ], [ 'c', 348 ] ]

console.log(newObj.hasOwnProperty('a'));// true
console.log(newObj.hasOwnProperty('g'));// false