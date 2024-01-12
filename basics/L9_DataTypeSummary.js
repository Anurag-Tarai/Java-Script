// this lecture is dedicate to interview perspective of DATA TYPE in js

/****************************NOTES*****************************/

//--> data type are two categories on the basis of how it stored in memory:--primitive and non primitive

//--------------------------------------- PRIMITIVE ---------------------------------------------//

// 7 types: string, number, boolean, null, undefined, symbol, bigint

/***********Symbol************/
// const id = Symbol('123');// symbol
// const id2 = Symbol('123');// Symbol(123)
// console.log(typeof id);
// console.log(id);

// console.log(id == id2);//false
// console.log(id === id2);//false

/************BigINt***********/                                                                                                                                                                                                               
const BigNumber = 3434355555555553n // n at the end
console.log(typeof BigNumber); // bigint
console.log(BigNumber); // 3434355555555553n

//----------------------------------- REFERENCE TYPE (NON PRIMITIVE)---------------------------------------------//

// Array, Objects, Functions

/*--array--*/ 
// const hero = ["shatkiman","nagraj","doga"];
// console.log(typeof hero);// object
// console.log(hero);// [ 'shatkiman', 'nagraj', 'doga' ]
 
/*--object--*/
// let myObj = {
//     name: "anurag",
//     age: 22,
// };// object
// console.log(myObj.name);// anurag
// console.log(myObj.age);// 22
// console.log(typeof myObj);// object

/*--function--*/
// const function1 = function () {
//     console.log('hello world');
// }// function
// console.log(function1);// [Function: function1]
// console.log(typeof function1);// fuction


/* NOTE : js is Dynamically typed language */
// ecma scrip/mdn :--what typeof operator results for different data type





