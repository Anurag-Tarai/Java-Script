
// conversion to negative -------------
let num = 3

let negNum = -num
// console.log(negNum); // -3
// console.log(typeof negNum); // number


/************************* OPERATIONS *****************************/

//console.log(5+5);
// console.log(5**6); // 5 to the power 6
// console.log(8%5);

// adding two strings ----------------

// let var1 = "Anurag"
// let var2 = " Tarai"

// let var3 = var1 + var2

// console.log(var3);

/*------------- complex situation ---------------*/

// console.log("5"+5);
// console.log(5 +"6");

// complex ---------------------------
// console.log("5"+ 1 + 2); // 512 , string first so remain value also treated as string. Reason or for more details --> tc39.es --> specs --> ECMA 261, 7ab.operation
// console.log(5 + 1 +"2"); // 62
// console.log(5 + "1"+ 2); // 512

// console.log(5+3-4*4%3);// Don't write this code in this way, it's very confusing. Always keep code simple as possible--> use ()

/*write confusing code is not good, code readability should be high*/
// console.log(+true);// 1
// console.log(+"");// 0
// console.log(1+true); // 2
// console.log(1+""); // 1

// no cofusing code like this------------
// let v1, v2, v3
// v1=v2=v3=3+3
// console.log(v1);
// console.log(v2);
// console.log(v3);

/*---------postfix ans prefix operator diff----------*/
// go to read --> prefix and postfix js mdn
// let gameCounter = 100
// ++gameCounter;
// console.log(gameCounter);