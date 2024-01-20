/*----------------NUMBERS--------------*/

const score = 400// Emplicitly declared
// console.log(score);// ?

const balance = new Number(100)// Explicitly declared
// console.log(balance);// ?

/* ======= prototype and methods/properties of NUMBER =======*/

// console.log(balance.toString()); // does not change the original value stack and heap memory
// console.log(typeof balance.toString());
// console.log(typeof balance);
// console.log(balance + 100 + 100);

// console.log(balance.toFixed(2)); // 100.00

const otherNumber = 123.8966
// console.log(otherNumber.toPrecision(4));
// console.log(otherNumber.toPrecision(3));
// console.log(otherNumber.toPrecision(2));

const hundreds = 10000000
// console.log(hundreds.toLocaleString('en-IN'));

/*-------------------------MATHS-----------------------*/

console.log(Math); // Object [Math] {} // go to cosole of web page to see the all proterties/method of Math in detail 
// console.log(Math.abs(-4));
// console.log(Math.round(4.2));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.6));
// console.log(Math.min(4,8,2,5));
// console.log(Math.max(4,8,2,5));


console.log(Math.random());// give values in between (0,1)
console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random()*(max-min+1))+min); // what is this ?