
function one(){
    const FirstName = 'anurag'
  
    function two(){
        const LastName = 'tarai'
        //console.log(FirstName);// anurag : child can access parent data
    }
    //console.log(LastName); // LastName is not defined : parent can't access child data
    two()
}
one()
/*NOTE: In nested scopes parent and child(nested inside the parent), child can access all variable of parent but parent can't access child variables*/

// Understanding using if-else---------

if(true){
    const sportsName = 'football'
    if( sportsName==='football'){
        const sportsRank = 1
        //console.log(`${sportsName} Rank is : ${sportsRank}`);//  football Rank is : 1
    }
    //console.log(sportsRank);//  sportsRank is not defined : can't access child data
}
//console.log(sportsName);// sportsName is not defined : let is block scoped
/* ----------------------------------------------------------------------------------- */

console.log(AddOne(5));// 6
function AddOne(num){
    return num + 1
}
//------------------------------
//console.log(AddTwo(4));// ReferenceError: Cannot access 'AddTwo' before initialization
const AddTwo = function(num){
    return num+2
}

// In Future You will learn : Hoisting, Execution context and lexical enviornment