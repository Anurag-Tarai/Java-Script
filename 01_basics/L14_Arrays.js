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
/**
 * slice(startIndex, endIndex) method:
It returns a new array containing elements from the original array starting from the startIndex up to, but not including, the endIndex.
The original array remains unchanged.
In your code, arr.slice(2,5) returns a new array [35, 6, 56] without modifying the original arr.

splice(startIndex, deleteCount) method:
It changes the original array by removing elements starting from the startIndex and continuing for deleteCount elements.
The splice() method also returns an array containing the removed elements.
In your code, arr.splice(2, 5) removes elements starting from index 2 up to 5 elements (including index 2 but not including index 5), which results in the array [35, 6, 56, 3] being removed from arr, leaving it as [1, 2].
 */


