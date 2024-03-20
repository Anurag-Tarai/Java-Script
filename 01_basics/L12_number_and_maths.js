/*----------------NUMBERS--------------*/

const score = 400// implicitly declared
// console.log(score);// ?

const balance = new Number(100)// Explicitly declared
// console.log(balance);// ?

// methods of NUMBER--------------------
// go see in the console all methods of number y copying above code in console
// const otherNumber = 100
// console.log(otherNumber.toString().length);

// const balance = 100.1523
// console.log(balance.toFixed(2));// 100.15
// console.log(balance.toPrecision(4));// 100.2
// console.log(balance.toPrecision(2));// 1.0e+2

// const hundreds = 10000000
// console.log(hundreds.toLocaleString('en-US')); // 10,000,000 -IN for indian 
  
//------------------MAHTS--------------
// console.log(Math);// only type Math in console of web you will get all methods 

// console.log(Math.abs(-4));// 4  

// console.log(Math.round(23.54));// 24
// console.log(Math.round(23.14));// 23

// console.log(Math.ceil(23.24));// 24

// console.log(Math.floor(23.24));// 23

// console.log(Math.min(3,56,43,5,41,0));// 0
// console.log(Math.max(3,56,43,5,41,0));// 56

// console.log(Math.random());// give random values from 0 to 1
// console.log((Math.random()*10)+1);


//----------IMPORTANT---------------
// for(i=0;i<10;i++)
// {const min = 10
// const  max = 20
// console.log(Math.floor(Math.random()*(max-min+1))+ min)}

// *(max-min+1) give numbers from 0 to (max-min+1) whch is the range of min to max and adding min ensure that number will start with min and max can be min + (max-min) 

// example
// for(let i = 0;i<10;i++){
// console.log(Math.floor(Math.random()*100+1));
// }

 
