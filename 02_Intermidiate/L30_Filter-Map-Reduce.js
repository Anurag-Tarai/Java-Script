const primes = [2,3,5,7]

const value = primes.forEach((num) => {
    return num
});
//console.log(value);// Undefined

const value2 = primes.forEach((num) => {
    if(num == 5 ) return true
});
//console.log(value2);// undefined

/**Note: forEach does not return anything */
//-------------------------------------------------------------
// filter -------------
const numbers = [1,2,3,4,5,6,7,8,9,10]

numbers.filter((num)=>num>5)// implicit return

 // Filter : returns array with filtered condition and does not change original array

console.log(numbers);// [1,2,3,4,5,6,7,8,9,10]

console.log(numbers.filter((num)=>num>5));// [ 6, 7, 8, 9, 10 ]
