/*-------Immediately Invoked Function Expression-------*/
// Named iife 
(function chai(){
    console.log(`DB CONNECTED`);
})();// DB CONNECTED

// Unnamed iife
(()=>{
    console.log(`DB CONNECTED ONE`);
})();// DB CONNECTED
/*Note: use ; for end the iife function, when declaring 2 or more iife */

// what is iife and why to use ?
/*WHAT : An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined. IIFEs are created by wrapping a function expression in parentheses and adding a set of parentheses after the function body. This causes the function to be executed immediately.

WHY : IIFEs are often used to create private variables and functions. This is because the variables and functions defined inside an IIFE are not accessible to the outside world. This can be useful for preventing pollution of the global namespace().
 */

/* namespace : a namespace is a container that holds a set of identifiers, such as functions, classes, or variables, to organize and manage code. Namespaces are used to avoid naming conflicts between different components or libraries within an application. */

/* Global namespace :The global namespace in JavaScript is the collection of all variables, functions, and objects that are declared outside of any function, class, or module. It is the highest level of scope in a JavaScript program. */
//-------------------------------------------------------------------------