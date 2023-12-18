// comparison of data Types

//simple comparisons(same data types)*******************************************************
// console.log(1>4);
// console.log(6==4);
// console.log(2>1);
// console.log(4==4);
// console.log(3!=2);

// complex situations (different data types)******************************************************

console.log("4">2); // true, number to string in case of > ?
console.log("02">1); // true
console.log("001"<10); //true
console.log("00"<1); //true, why ? does js convert strings to number during  comparison of string with number in case of < ?


// console.log(null>0);
// console.log(null==0);
// console.log(null>=0);// null treated as 0 (number)

/* the reason is that an equality check and comparison check work differently,
Comparisons convert null to a number treating it as 0.
That's why null>=0 is true and null>0 is false */

// Equality check and comparison check are two different things and they work differently 

// console.log(undefined >0); // false
// console.log(undefined ==0); // false
// console.log(undefined>=0); // false

// strict check--> ===

// console.log("2"==2);
// console.log("2"===2); // strictly check data type of both operands

/**********************NOTE*********************/

// AVOID --> comparisons of different data types
// Always keep your code clean