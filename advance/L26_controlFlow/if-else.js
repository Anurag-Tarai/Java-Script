/* ------Control/Logic Flow----- */

// Everytime All code should not execute. Code should run on conditional base !

// if---------
/*
if(conditon-true/false){
   --- // code to execute if true
}
else if(conditon-true/false){
   ---// code to else if true
}
else{
   ---// code to execute is not true
}
*/
// "=" is not comparision operator, it is used to initialize value to variable
// comparision operators : <, >, <=, >=, ==, !=, ===, !==
// ===, !== : Strictly check the type of the operands

//if(3>2) console.log('test'), console.log('test2'); // implicit scope : and here we can write multiple code using ',' or in same line.
/*Note: This is not the good way to write the code, poor readibility */

/* -------------------------------------------------------------------------------------------------- */

// Example------
const userLoggedIn = true
const debitcard = true
if(userLoggedIn && debitcard){
    console.log("allow to buy course")
}
/*----------------------------------------- */

// Nullish coaleascing Operator (??) : null undefined --------------

// The Nullish Coalescing Operator (??) is a JavaScript operator introduced in ECMAScript 2020 (ES11). It provides a way to set a default value for a variable if the variable is null or undefined. The operator is used when you want to handle only nullish values (null or undefined) and not other falsy values like 0, '', false, or NaN.

// syntax : const result = variable ?? defaultValue;
let val;
//val = null ?? 10 // 10
//val = undefined ?? 19 //19
val = 5 ?? 23 // 5
console.log(val);
/* ---------------------------------------- */

// Ternary Operator (?)----------------
// The ternary operator in JavaScript, also known as the conditional operator, is a concise way to write conditional statements :
// condition ? expression1 : expression2;

34 < 290 ? console.log("true"):console.log("false"); // true