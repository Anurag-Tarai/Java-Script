/* ------------------------[for...of]-------------------------- */
// The for...of loop in JavaScript is used to iterate over iterable objects such as arrays, strings, maps, sets, etc.

// array----------------------
const arr = [23,4,5,66,8]
for (const elem of arr) {
    //console.log(elem); 
}
/*
23
4
5
66
8
 */
// string----------------------
const str = "str ing"
for (const char of str) {
    if(char==" ") continue
    //console.log(char);
}
/* 
s
t
r
i
n
g
*/
/* ------------------------------------------------------------------- */

// Maps------------------
// : Map objects are collections of key-value pairs. A key in the Map may only occur once; it is unique in the Map's collection
const map = new Map()
map.set('IN','INDIA')
map.set('USA','UNIED STATES OF AMERICA')
map.set('UK','UNITED KINDOM')
map.set('CN','CANNADA')
//console.log(map);
/**Map(4) {
    'IN' => 'INDIA',
    'USA' => 'UNIED STATES OF AMERICA',
    'UK' => 'UNITED KINDOM',
    'CN' => 'CANNADA'
  } */
//-----------------------------------------------
// Iteration through map------
for(const key of map){
   // console.log(key);
}/**[ 'IN', 'INDIA' ]
[ 'USA', 'UNIED STATES OF AMERICA' ]
[ 'UK', 'UNITED KINDOM' ]
[ 'CN', 'CANNADA' ] */

for(const [key,value] of map){
    //console.log(`${key}:-${value}`);
}/**IN:-INDIA
USA:-UNIED STATES OF AMERICA
UK:-UNITED KINDOM
CN:-CANNADA */
//-------------------------------------------------------------
/**Note: the for--of can't use with object, object is not iterable */
const myObj = {
    name:'anurag',
    country:'India'
}
// for(const key of myObj){
//    console.log(key); // myObj is not iterable
// }
// How to loop through Object ?----
/**----------------------------------[for...in loop]---------------------------- */
const newObj = {
     js : "javaScript",
     cpp : "C++",
     css : "casceding style sheet"
}
for (const key in newObj) {
   // console.log(key);
}/**
js
cpp
css */
//----------------
for (const key in newObj) {
   // console.log(`${key} is shortcut for ${newObj[key]}`);
}/**js is shortcut for javaScript
cpp is shortcut for C++
css is shortcut for casceding style sheet */

////**Note: for...in loop is not work for Map, map is not iterable. And for...of is use for maps *////--------------

// can for..in loop work for arrays ?----------------------
const newArr = [3,4,5,6,6,6]
for (const num in newArr) {
  // console.log(`${num} - ${newArr[num]}`);
}/**  keys and vlues of array
0 - 3
1 - 4
2 - 5
3 - 6
4 - 6
5 - 6 */
/**Note: 
In JavaScript, arrays can have keys, but these keys are typically referred to as "indices" because arrays in JavaScript are essentially objects with integer-based keys that represent their positions. This is different from languages like C, where arrays are a contiguous block of memory and the indices are strictly numerical.

In JavaScript, arrays can have both numeric indices and string keys. Numeric indices are automatically assigned when you add elements to an array using numerical positions starting from 0
Ex:*/
let myArray = [];
myArray['fruit'] = 'apple';
myArray['vegetable'] = 'carrot';

//console.log(myArray);// [ fruit: 'apple', vegetable: 'carrot' ]
//console.log(myArray['fruit']); //  'apple'
//console.log(myArray['vegetable']); // 'carrot' 

/**------------------------------------------[forEach]------------------------------------------ */

const primes = [2,3,5,7]
// using function without name-----------
primes.forEach(function(elem){
    //console.log(elem);
})
/**----------------higher order and call back function -------------- */
/** Higer order function : A higher-order function is a function that either takes a function as an argument, returns a function, or both. */ 
/** forEach : is a higher-order function because it takes a function (the callback function) as an argument and applies that function to each element of the array. */

/** A callback function : is a function that is passed as an argument to another function and is executed inside that function. */

// using array function as call back without storing it like'const value = ()=>{}'--------
primes.forEach((elem)=>{
    //console.log(elem*elem);
})

// using another function reference in forEach --------
function primesCube(num){
     console.log(num*num*num);
}
primes.forEach(primesCube) // only give reference of function, not execute-'primesCube()'
/**8
27
125
343 */
// -------------------------------------------
primes.forEach(function(elem,index,arr){
    console.log(elem,index,arr);
})/**
2 0 [ 2, 3, 5, 7 ]
3 1 [ 2, 3, 5, 7 ]
5 2 [ 2, 3, 5, 7 ]
7 3 [ 2, 3, 5, 7 ] */

// forEach in array of Object--------------------

const arrayObjects = [
    {
        name:'anurag',
        lastname:'tarai'
    },
    {
        name:'sujit',
        lastname:'tarai'
    },
    {
        name:'shubham',
        lastname:'sahoo'
    }
]
arrayObjects.forEach((item)=>{
    console.log(item.name);
})/**anurag
sujit
shubham */