/* ----------SCOPES.JS----------- */

// {} this is called scope, used in function and conditional statements
// curly braces is also used in object declaration that time it is not scope 

// Scope of let, const, var ---------
if(true){
    let a = 20
    const b = 43
    var c = 34
}
//console.log(a);// a is not defined
//console.log(b);// b is not defined
//console.log(c);// 34

function Getvar(){
    var name = 'anurag'
    let name1 = 'tarai'
}
Getvar()
//console.log(name);// name is not defined
//console.log(name1);// name1 is not defined

/*---NOTE: var is function scoped, let and const are block/{} scoped---*/

for(var i=0;i<4;i++){
    i++;
}
console.log(i);// 4
// In loops don't declare itarator using var, use let

/*Note: Gobla scope is different for windows(in console of web page) and node(code enviornment terminal) */