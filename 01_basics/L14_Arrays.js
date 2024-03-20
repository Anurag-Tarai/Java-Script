 /*------------Array----------------*/
 
 // array type is object : This because in javascript all derived data type is always a type object. Included functions and array.

 // shallow copy : share the same reference 
 // deep copy : do not share the same reference

 
 const arr = [1,2,35,6,56,3]
 const arr1 = new Array(2,5,7,8,9)
 
//  console.log(arr[1]);//2
//  console.log(arr1[1]);//5

 //--------methods--------

//  arr.push(34)
//  console.log(arr);//[ 1, 2, 35, 6, 56, 3, 34]

//  arr.pop()
//  console.log(arr);//[ 1, 2, 35, 6, 56, 3 ]

//  arr.unshift()// add element from left side

//  arr.shift()// delete from one elment from left
//----------------------------------------------------------------
// console.log(arr.includes(34));// false

// const newArr = arr.join()
// console.log(newArr);// 1,2,35,6,56,3 // typeof newArr--> string

// slice and splice-----------------------------------------------

console.log("arr:",arr);//arr: [ 1, 2, 35, 6, 56, 3 ]

// slice do not change the original value
const arrSlice = arr.slice(2,5)
console.log("Slice:",arrSlice);//Slice: [ 35, 6, 56 ]
console.log("arr:",arr);//arr: [ 1, 2, 35, 6, 56, 3 ]

// splice changes the original value
const arrSplice = arr.splice(2,5)
console.log("Splice:",arrSplice);//Splice: [ 35, 6, 56, 3 ]
console.log("arr:",arr);//arr: [ 1, 2 ]




