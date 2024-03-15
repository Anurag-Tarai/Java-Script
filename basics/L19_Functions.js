// A function is a block of code that performs a specific task.

/*
function(parameters){
    -------- code
}
function(arguments);
 */

// After 'return' a function do not execute remaining task

/*---------------------------------------------------------------- */

function loginUserMessage(userName){
    return `${userName} just loggen in`
}
console.log(loginUserMessage("Anurag"));// Anurag just loggen in
console.log(loginUserMessage(""));//  just loggen in
console.log(loginUserMessage());// undefined just loggen in
// check the userName then proceed : if(!userName){log:enter a valid name;return}, if user name is "" or undefined : these are falsy values; ! is used to run if statemernt