const userEmail = "anurag@2024.com"

if(userEmail){
    //console.log("got user email");// got user email
}
/* ----------------Truthy and Falsy-------------- */

// Falsy values : false when convert to boolean [ false, 0, -0, BigInt 0n, "", null, undefined, NaN ]

// Truthy values : all values other than falsy are truthy [ Note: "0", "false", " ", {}, [], function(){} these are all truthy ]

const newObj = {}
// Object.keys(newObj), return a array of keys
if (Object.keys(newObj).length===0) {
    console.log('obj is empty');
}
/* 
false == 0 // true
false == "" // true
0 == "" // true
false == null // false
"" == null // false
*/