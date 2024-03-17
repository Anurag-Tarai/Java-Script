
/* Basics :
-Execution Contex : An execution context is an abstract concept that includes all the necessary information to execute a piece of code, it consist of -variable environment,-Lexical Environment,-This binding
>global ec, function ec,eval ec

-Call Stack : The call stack is a data structure used to manage the execution context of JavaScript code. It follows the Last In, First Out (LIFO) principle, meaning the last function added to the stack is the first one to be executed.
*/

// HOW CODE EXECUTE IN JAVASCRIPT ?-------------------------------------------------------------

// In two phase : 1. Memory creation phase and 2. Execution Phase

// Example --------------------
let val1 = 10
let val2 = 5
function add(num1,num2){
     let total = num1 + num2
     return total
}
let result1 = add(val1,val2)
let result2 = add(10,2)
//-----------------------------
// Step 1 : Global Execution Context(global environment) will create, and allocate to 'this'

// Step 2 : Memory Phase.
/*
stores :
val1 -> undefined
val2 -> undefined
add -> definition
result1 -> undefined
result2 -> undefined
*/

// step 3 : Execution phase/context
/* 
val1 <- 10
val2 <- 5

add -> create new execution context : new variable environment + Execution Thread
and for add same Memory Creation and Execution phase will repeat.
Memory Phase :
val1 -> undefined
val2 -> undefined
total -> undefined
Execution Phase/context:
num1 -> 10
num2 -> 5
toatl -> 15

*/